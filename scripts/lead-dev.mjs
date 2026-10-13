#!/usr/bin/env node
// Local test launcher for functions/api/lead.ts.
//
// It never runs wrangler from the repo root. It copies out/ and functions/ into a
// fresh temp directory outside the repo (so no .dev.vars or .env file can be picked
// up) and runs wrangler there with values passed through the environment of THIS
// command. Mock values only.
//
// Refuses to start unless:
//   - CRM_API_BASE_URL is http on a loopback host (a local stub), and
//   - TURNSTILE_SECRET_KEY is one of Cloudflare's published dummy secret keys.
//
// Example (values are mock):
//   CRM_API_BASE_URL=http://127.0.0.1:9911 CRM_API_VERSION=test CRM_API_TOKEN=mock \
//   CRM_LOCATION_ID=mock TURNSTILE_SECRET_KEY=<cloudflare dummy secret> \
//   LEAD_ALLOWED_ORIGINS=http://localhost:8788 npm run lead:dev

import { spawn } from "node:child_process";
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = process.env.LEAD_DEV_OUT
  ? path.resolve(process.env.LEAD_DEV_OUT)
  : path.join(repoRoot, "out");
const functionsDir = path.join(repoRoot, "functions");
const port = process.env.LEAD_DEV_PORT || "8788";

const NAMES = [
  "CRM_API_BASE_URL",
  "CRM_API_VERSION",
  "CRM_API_TOKEN",
  "CRM_LOCATION_ID",
  "CRM_FIELD_CONTACT_METHOD",
  "CRM_FIELD_SOURCE_PAGE",
  "CRM_FIELD_MARKET",
  "CRM_FIELD_FORM_TYPE",
  "CRM_FIELD_SERVICE",
  "CRM_FIELD_MESSAGE",
  "LEAD_ALLOWED_ORIGINS",
  "TURNSTILE_SECRET_KEY",
];

function stop(message) {
  console.error(`lead-dev: ${message}`);
  process.exit(1);
}

if (!existsSync(outDir)) stop("out/ not found. Run a build first.");
if (!existsSync(functionsDir)) stop("functions/ not found.");

let crmUrl;
try {
  crmUrl = new URL(process.env.CRM_API_BASE_URL || "");
} catch {
  stop("CRM_API_BASE_URL must be set to a local stub URL.");
}
const loopback = ["localhost", "127.0.0.1", "[::1]"];
if (crmUrl.protocol !== "http:" || !loopback.includes(crmUrl.hostname)) {
  stop("CRM_API_BASE_URL is not a loopback http URL. Refusing to run.");
}
if (!/^[123]x0+AA$/.test(process.env.TURNSTILE_SECRET_KEY || "")) {
  stop("TURNSTILE_SECRET_KEY is not a Cloudflare dummy secret key. Refusing to run.");
}

const work = mkdtempSync(path.join(os.tmpdir(), "lead-dev-"));
if (!path.relative(repoRoot, work).startsWith("..")) {
  stop("temp directory is inside the repo. Refusing to run.");
}
cpSync(outDir, path.join(work, "out"), { recursive: true });
cpSync(functionsDir, path.join(work, "functions"), { recursive: true });

for (const leftover of [".dev.vars", ".env", ".env.local"]) {
  if (existsSync(path.join(work, leftover))) stop(`${leftover} found in temp directory.`);
}

console.log("lead-dev safety check");
console.log(`  working directory : ${work} (outside the repo, no .dev.vars)`);
console.log(`  CRM base URL host : ${crmUrl.hostname}:${crmUrl.port || "80"} (loopback stub)`);
console.log("  Turnstile secret  : Cloudflare dummy test key");
console.log(`  port              : ${port}`);

const args = [path.join(repoRoot, "node_modules", "wrangler", "bin", "wrangler.js"), "pages", "dev", "out", "--port", port, "--compatibility-date", "2025-01-01"];
for (const name of NAMES) {
  const value = process.env[name];
  if (value !== undefined) args.push("--binding", `${name}=${value}`);
}

const childEnv = { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1" };
for (const key of Object.keys(childEnv)) {
  if (key.startsWith("CLOUDFLARE_")) delete childEnv[key];
}

const child = spawn(process.execPath, args, { cwd: work, env: childEnv, stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 0));
