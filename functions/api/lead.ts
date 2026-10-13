// Lead intake Function (Cloudflare Pages Functions).
//
// Browser form -> POST /api/lead (same origin) -> this Function -> third-party CRM.
// The CRM token and the Turnstile secret are server-side variables only. They never
// reach the browser, the repo, or the static export.
//
// Order of work: method, Origin, content type and size, JSON parse, honeypot, field
// validation, configuration check, Turnstile verification, CRM call.

// CRM contract settings. Change them here and nowhere else.
// Verified against the live third-party CRM on 2026-10-13:
//   - the Version header name, with the value 2021-07-28 set in CRM_API_VERSION
//   - the fieldValue key that carries a custom field value
//   - the /contacts/upsert path
const CRM = {
  upsertPath: "/contacts/upsert",
  versionHeader: "Version", // verified 2026-10-13
  customFieldValueKey: "fieldValue", // verified 2026-10-13
} as const;

const PRODUCTION_ORIGIN = "https://redcarpetplumbing.com";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_BODY_BYTES = 8192;
const UPSTREAM_TIMEOUT_MS = 10_000;

export interface Env {
  CRM_API_BASE_URL?: string;
  CRM_API_VERSION?: string;
  CRM_API_TOKEN?: string;
  CRM_LOCATION_ID?: string;
  CRM_FIELD_CONTACT_METHOD?: string;
  CRM_FIELD_SOURCE_PAGE?: string;
  CRM_FIELD_MARKET?: string;
  CRM_FIELD_FORM_TYPE?: string;
  CRM_FIELD_SERVICE?: string;
  CRM_FIELD_MESSAGE?: string;
  LEAD_ALLOWED_ORIGINS?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export interface Deps {
  fetch: typeof fetch;
}

type Context = { request: Request; env: Env };

type Lead = {
  formType: "quote" | "contact";
  name: string;
  phone: string;
  contactMethod: "call" | "text";
  service: string;
  address: string;
  message: string;
  page: string;
  turnstileToken: string;
};

// An empty-string variable is treated exactly like a missing one.
function envValue(env: Env, name: keyof Env): string | undefined {
  const value = env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function reply(status: number, ok: boolean, extra?: Record<string, string>) {
  return new Response(JSON.stringify({ ok }), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...extra,
    },
  });
}

function allowedOrigins(env: Env): Set<string> {
  const set = new Set<string>([PRODUCTION_ORIGIN]);
  const extra = envValue(env, "LEAD_ALLOWED_ORIGINS");
  if (extra) {
    for (const part of extra.split(",")) {
      const origin = part.trim();
      if (origin) set.add(origin);
    }
  }
  return set;
}

function isLoopbackHost(hostname: string): boolean {
  return (
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]"
  );
}

// https only, except a loopback host (used by local tests with a stub).
function parseCrmBase(value: string): URL | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol === "https:") return url;
  if (url.protocol === "http:" && isLoopbackHost(url.hostname)) return url;
  return null;
}

// Reads at most MAX_BODY_BYTES from the stream. Content-Length is only a hint;
// the byte count of what was actually read decides.
async function readBody(
  request: Request,
): Promise<{ text: string } | { tooLarge: true } | { empty: true }> {
  const declared = request.headers.get("Content-Length");
  if (declared !== null) {
    const n = Number(declared);
    if (Number.isFinite(n) && n > MAX_BODY_BYTES) return { tooLarge: true };
  }
  if (!request.body) return { empty: true };
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      return { tooLarge: true };
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return { text: new TextDecoder().decode(bytes) };
}

function asString(value: unknown): string | null {
  if (value === undefined || value === null) return "";
  return typeof value === "string" ? value : null;
}

// Mirrors the client validate() rules. Never stricter than the client, apart from
// the length caps on name, phone and service.
function validate(raw: Record<string, unknown>): Lead | null {
  const formType = raw.formType;
  if (formType !== "quote" && formType !== "contact") return null;

  const name = asString(raw.name);
  const phone = asString(raw.phone);
  const contactMethod = asString(raw.contactMethod);
  const service = asString(raw.service);
  const address = asString(raw.address);
  const message = asString(raw.message);
  const page = asString(raw.page);
  const token = asString(raw.turnstileToken);
  if (
    name === null ||
    phone === null ||
    contactMethod === null ||
    service === null ||
    address === null ||
    message === null ||
    page === null ||
    token === null
  ) {
    return null;
  }

  const nameTrim = name.trim();
  const phoneTrim = phone.trim();
  const serviceTrim = service.trim();

  if (nameTrim.length > 100) return null;
  if (formType === "quote" ? nameTrim.length < 1 : nameTrim.length < 2) return null;
  if (!/^[\d\s()\-+]{7,}$/.test(phoneTrim) || phoneTrim.length > 30) return null;
  if (contactMethod !== "call" && contactMethod !== "text") return null;
  if (serviceTrim.length > 100) return null;

  if (formType === "quote") {
    if (serviceTrim.length < 1) return null;
    if (message.length > 500) return null;
  } else {
    if (address.length > 200) return null;
    const messageTrim = message.trim();
    if (messageTrim.length < 10 || messageTrim.length > 1000) return null;
  }

  return {
    formType,
    name: nameTrim,
    phone: phoneTrim,
    contactMethod,
    service: serviceTrim,
    address: formType === "contact" ? address.trim() : "",
    message: formType === "contact" ? message.trim() : message,
    page: page.startsWith("/") && page.length <= 200 ? page : "",
    turnstileToken: token,
  };
}

// 10 digits, or 11 digits starting with 1, become E.164. Anything else is sent as typed.
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return phone;
}

function splitName(name: string): { firstName: string; lastName: string } {
  const match = name.match(/^(\S+)\s*([\s\S]*)$/);
  if (!match) return { firstName: name, lastName: "" };
  return { firstName: match[1], lastName: match[2].trim() };
}

const MARKETS: Record<string, string> = {
  "las-vegas": "Las Vegas",
  "las-vegas-plumbing-services": "Las Vegas",
  henderson: "Henderson",
  "henderson-plumbing-services": "Henderson",
  "north-las-vegas": "North Las Vegas",
  "north-las-vegas-plumbing-services": "North Las Vegas",
  paradise: "Paradise",
  "paradise-plumbing-services": "Paradise",
  summerlin: "Summerlin",
  "summerlin-plumbing-services": "Summerlin",
  "spring-valley": "Spring Valley",
  "spring-valley-plumbing-services": "Spring Valley",
  enterprise: "Enterprise",
  "enterprise-plumbing-services": "Enterprise",
  "boulder-city": "Boulder City",
  "boulder-city-plumbing-services": "Boulder City",
  "green-valley": "Green Valley",
  "green-valley-plumbing-services": "Green Valley",
  "lake-las-vegas": "Lake Las Vegas",
  "lake-las-vegas-plumbing-services": "Lake Las Vegas",
};

function deriveMarket(page: string): string {
  const segments = page.split("/").filter(Boolean);
  const first = segments[0];
  if (
    first === "north-las-vegas" &&
    typeof segments[1] === "string" &&
    segments[1].startsWith("aliante-area")
  ) {
    return "North Las Vegas Aliante Area";
  }
  if (first !== undefined && Object.prototype.hasOwnProperty.call(MARKETS, first)) {
    return MARKETS[first];
  }
  return "Las Vegas Valley";
}

async function fetchWithTimeout(
  deps: Deps,
  url: string,
  init: RequestInit,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    return await deps.fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export async function handleLead(
  request: Request,
  env: Env,
  // Wrapped so fetch keeps its own `this` when called as deps.fetch(...).
  deps: Deps = { fetch: (input, init) => fetch(input, init) },
): Promise<Response> {
  if (request.method !== "POST") {
    return reply(405, false, { Allow: "POST" });
  }

  const origin = request.headers.get("Origin");
  if (!origin || !allowedOrigins(env).has(origin)) return reply(403, false);

  const contentType = (request.headers.get("Content-Type") ?? "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") return reply(415, false);

  const body = await readBody(request);
  if ("tooLarge" in body) return reply(413, false);
  if ("empty" in body) return reply(400, false);

  let parsed: unknown;
  try {
    parsed = JSON.parse(body.text);
  } catch {
    return reply(400, false);
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return reply(400, false);
  }
  const raw = parsed as Record<string, unknown>;

  // Honeypot: a filled field gets a silent success. No Turnstile or CRM call.
  if (typeof raw.website === "string" && raw.website.length > 0) {
    return reply(200, true);
  }

  const lead = validate(raw);
  if (!lead) return reply(400, false);

  // Configuration. A missing or empty required variable fails closed.
  for (const name of [
    "CRM_API_BASE_URL",
    "CRM_API_VERSION",
    "CRM_API_TOKEN",
    "CRM_LOCATION_ID",
  ] as const) {
    if (!envValue(env, name)) {
      console.error(`lead: missing variable ${name}`);
      return reply(500, false);
    }
  }
  const crmBase = parseCrmBase(envValue(env, "CRM_API_BASE_URL") as string);
  if (!crmBase) {
    console.error("lead: invalid variable CRM_API_BASE_URL");
    return reply(500, false);
  }
  const turnstileSecret = envValue(env, "TURNSTILE_SECRET_KEY");
  if (!turnstileSecret) {
    console.error("lead: missing variable TURNSTILE_SECRET_KEY");
    return reply(500, false);
  }

  // Turnstile verification. The token is used here and nowhere else.
  if (lead.turnstileToken.length < 1 || lead.turnstileToken.length > 2048) {
    return reply(403, false);
  }
  const verifyBody = new URLSearchParams({
    secret: turnstileSecret,
    response: lead.turnstileToken,
  });
  const visitorIp = request.headers.get("CF-Connecting-IP");
  if (visitorIp) verifyBody.set("remoteip", visitorIp);
  let verified = false;
  try {
    const verifyResponse = await fetchWithTimeout(deps, TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody,
    });
    if (!verifyResponse.ok) {
      console.error(`lead: verify status ${verifyResponse.status}`);
      return reply(502, false);
    }
    const result = (await verifyResponse.json()) as { success?: unknown };
    verified = result.success === true;
  } catch {
    console.error("lead: verify request failed");
    return reply(502, false);
  }
  if (!verified) return reply(403, false);

  // CRM call: one upsert, nothing else.
  const { firstName, lastName } = splitName(lead.name);
  const market = deriveMarket(lead.page);
  const candidates: Array<[keyof Env, string]> = [
    ["CRM_FIELD_CONTACT_METHOD", lead.contactMethod],
    ["CRM_FIELD_SOURCE_PAGE", lead.page],
    ["CRM_FIELD_MARKET", market],
    ["CRM_FIELD_FORM_TYPE", lead.formType],
    ["CRM_FIELD_SERVICE", lead.service],
    ["CRM_FIELD_MESSAGE", lead.message],
  ];
  const customFields: Array<Record<string, string>> = [];
  for (const [variable, value] of candidates) {
    const id = envValue(env, variable);
    if (!id) {
      console.warn(`lead: field skipped, variable ${variable} not set`);
      continue;
    }
    if (value.length === 0) continue;
    customFields.push({ id, [CRM.customFieldValueKey]: value });
  }

  const crmBody: Record<string, unknown> = {
    locationId: envValue(env, "CRM_LOCATION_ID"),
    firstName,
    lastName,
    phone: normalizePhone(lead.phone),
    source:
      lead.formType === "quote" ? "Website quote form" : "Website contact form",
    customFields,
  };
  if (lead.formType === "contact" && lead.address.length > 0) {
    crmBody.address1 = lead.address;
  }

  try {
    const crmResponse = await fetchWithTimeout(
      deps,
      // Keep any path on the base URL (for example a version segment).
      `${crmBase.origin}${crmBase.pathname.replace(/\/+$/, "")}${CRM.upsertPath}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${envValue(env, "CRM_API_TOKEN")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          [CRM.versionHeader]: envValue(env, "CRM_API_VERSION") as string,
        },
        body: JSON.stringify(crmBody),
      },
    );
    if (!crmResponse.ok) {
      console.error(`lead: CRM status ${crmResponse.status}`);
      return reply(502, false);
    }
    // The CRM response body is never returned to the browser.
    await crmResponse.body?.cancel();
  } catch {
    console.error("lead: CRM request failed");
    return reply(502, false);
  }

  return reply(200, true);
}

export const onRequestPost = (context: Context) =>
  handleLead(context.request, context.env);

// Any other method.
export const onRequest = (context: Context) =>
  handleLead(context.request, context.env);
