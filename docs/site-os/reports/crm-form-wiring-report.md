# CRM Form Wiring Report (Gate 5)

Written 2026-10-13. Nothing is committed, staged or pushed. The live CRM test was run with dummy data after the owner rotated the token; no secret value appears in this report.

## Status

| Item | State |
|---|---|
| Code for both forms, the Function, the Turnstile hook, the test launcher | built |
| Lint and type check | pass |
| Offline Function tests (injected fetch, 64 cases) | pass |
| Wrangler tests with a local stub and Cloudflare dummy test keys | pass |
| Headless browser tests (23 cases) | pass |
| Hygiene greps on the production-style build | pass |
| Live test against the real third-party CRM, dummy data | **pass** (see the live test section) |
| Final build with the real public site key and the greps on it | pending the owner's site key |

Until the secret and site key exist on Cloudflare, the live forms refuse every lead and show the phone-number error message.

## Files changed

```
 M components/ContactFormPlaceholder.tsx
 M components/QuoteFormPlaceholder.tsx
 M package-lock.json
 M package.json
?? components/useTurnstile.ts
?? docs/site-os/reports/crm-form-wiring-report.md
?? docs/site-os/reports/metadata-length-audit.csv
?? docs/site-os/reports/metadata-length-audit.md
?? docs/site-os/reports/remove-c1-gate2-plan.md
?? functions/
?? lib/lead-endpoint.ts
?? metadata-rewrite-v3.csv
?? scripts/

 components/ContactFormPlaceholder.tsx |   63 +-
 components/QuoteFormPlaceholder.tsx   |   63 +-
 package-lock.json                     | 7599 ++++++++++++++++++++-------------
 package.json                          |    6 +-
 4 files changed, 4662 insertions(+), 3069 deletions(-)
```

New files: `functions/api/lead.ts` (the Function), `lib/lead-endpoint.ts`, `components/useTurnstile.ts`, `scripts/lead-dev.mjs`. Changed: both form components, `package.json` (a pinned `wrangler` dev dependency and the `lead:dev` script), `package-lock.json` (88 packages added, none removed, no version changes, one optional flag moved; the large line count is npm re-sorting).

Not changed: `.gitignore`, `next.config`, tsconfig, sitemap, route manifest, copy, FAQs, metadata, schema, `.dev.vars.example`, `.env.example`, and any wrangler config file (none exists).

## Final Function spec

Browser form, then `POST /api/lead` (same origin), then `functions/api/lead.ts`, then one upsert call to the third-party CRM. The Function holds the token and the Turnstile secret as server variables only.

| Case | Status | Body |
|---|---|---|
| Method is not POST | 405 with `Allow: POST` | `{"ok":false}` |
| Origin missing or not allowed | 403 | `{"ok":false}` |
| Content-Type is not `application/json` | 415 | `{"ok":false}` |
| Body over 8192 bytes (counted on bytes read; `Content-Length` is only a first check) | 413 | `{"ok":false}` |
| Invalid JSON, or a field is not a string | 400 | `{"ok":false}` |
| Honeypot `website` non-empty | 200 | `{"ok":true}`, no Turnstile or CRM call |
| Field validation fails | 400 | `{"ok":false}`, Turnstile not called |
| Required CRM variable or `TURNSTILE_SECRET_KEY` missing or empty | 500 | `{"ok":false}`, only the variable name is logged, no CRM call |
| Token missing, or Turnstile says not successful | 403 | `{"ok":false}` |
| Turnstile outage, timeout, network error or 5xx | 502 | `{"ok":false}`, no CRM call |
| CRM non-2xx, timeout or network error | 502 | `{"ok":false}` |
| CRM 2xx | 200 | `{"ok":true}` |

- Order: method, Origin, content type and size, JSON parse, honeypot, field validation, configuration check, Turnstile verification, CRM call.
- Every response has `Cache-Control: no-store` and `Content-Type: application/json`. The CRM response body is never returned.
- An empty-string variable counts as missing for every variable.
- Allowed origins: `https://redcarpetplumbing.com` plus the entries of `LEAD_ALLOWED_ORIGINS` (comma separated, read at runtime, nothing hardcoded). This blocks drive-by cross-site posts but does not stop a scripted client that spoofs the header.
- `CRM_API_BASE_URL` must be https, except a loopback host (local stub). A bad production value can never send the token in clear.
- Server validation mirrors the client: name at least 1 character for the Quote form and at least 2 for Contact (both at most 100); phone matches the client pattern and is at most 30 characters; contact method is "call" or "text"; Quote service is a trimmed non-empty string up to 100 characters, Contact service is optional with the same cap; Quote message at most 500, untrimmed; Contact message 10 to 1000, trimmed; Contact address at most 200. The server is never stricter than the client apart from the caps.
- Phone: 10 digits, or 11 digits starting with 1, become E.164. Any other value is sent as typed, not rejected.
- Name: split on the first whitespace into first and last name.
- Market is derived from the first path segment of the page, with "North Las Vegas Aliante Area" for pages under `/north-las-vegas/aliante-area*`, and "Las Vegas Valley" for everything else.
- CRM request: one upsert. Bearer authorization, a `Version` header from `CRM_API_VERSION` (required, no default), a 10 second timeout, no retries, no tags, no second call. Body: location ID, first and last name, phone, `address1` (Contact form only, when non-empty), a source of "Website quote form" or "Website contact form", and custom fields as `{ id, fieldValue }`, each sent only when its ID variable is set and its value is non-empty.
- Logging: variable names and the CRM or Turnstile HTTP status code only. Never names, phones, addresses, messages, tokens or request bodies. The Turnstile token is never forwarded, stored or logged.

## Client changes

- Both forms post only to `/api/lead` (a shared constant). The empty webhook constant, its TODO block and the dead unconfigured-URL guard are removed.
- Turnstile: loaded only on the first interaction inside the form (focusin, pointerdown, touchstart, keydown, input or change), in explicit-render mode, appearance interaction-only, no visible copy. The container and the submit button share one grid item, so the idle container adds no gap.
- Submitting before a token exists posts nothing and shows the one new message, in the same slot as the error: "One moment while we finish a quick check. Please submit the form again." A blocked script or a widget error shows the existing phone-number error message, unchanged.
- The widget is reset after a failed submit and on token expiry. If the public site key is missing at build time the forms fall back to the existing error state.
- Unchanged: the honeypot early return, validation, the success card, focus handling, the 2.5 second redirect, payload fields, labels, the consent sentence, and the error message text.

## Validation

### Step 1: lint and type check

```

> red-carpet-plumbing-site@0.1.0 lint
> eslint

LINT_EXIT=0
TSC_EXIT=0
```

### Step 2: builds and which `out/` each check ran against

| Check | Ran against |
|---|---|
| Lint, type check, form counts | both builds |
| All wrangler, harness and browser tests | Build 1 (dummy test site key set in the shell; `.env.local` not read) |
| Hygiene greps | Build 2 (production-style key placeholder set in the shell) |
| Final real-key build and its greps | pending the owner's public site key |

Build 1: ✓ Compiled successfully in 8.3s | Running TypeScript ... | Finished TypeScript in 13.6s ... | ✓ Generating static pages using 15 workers (140/140) in 1168ms. Build 2: ✓ Compiled successfully in 6.9s | Running TypeScript ... | Finished TypeScript in 12.0s ... | ✓ Generating static pages using 15 workers (140/140) in 1186ms. Form counts in both: 130 Quote pages and 1 Contact page in the source and in `out/`.

### Step 2: offline Function harness (injected fetch, mock values, no network)

```
| # | Case | Status | verify calls | CRM calls | Result |
|---|---|---|---|---|---|
| 1 | valid quote + valid token | 200 | 1 | 1 | PASS |
| 2 | valid contact + valid token | 200 | 1 | 1 | PASS |
| 3 | honeypot filled | 200 | 0 | 0 | PASS |
| 4 | wrong Origin | 403 | 0 | 0 | PASS |
| 5 | missing Origin | 403 | 0 | 0 | PASS |
| 6 | preview origin from LEAD_ALLOWED_ORIGINS | 200 | 1 | 1 | PASS |
| 7 | GET | 405 | 0 | 0 | PASS |
| 8 | oversize body (Content-Length) | 413 | 0 | 0 | PASS |
| 9 | oversize body (streamed, no Content-Length) | 413 | 0 | 0 | PASS |
| 10 | oversize body (Content-Length lies small) | 413 | 0 | 0 | PASS |
| 11 | invalid JSON | 400 | 0 | 0 | PASS |
| 12 | wrong content type | 415 | 0 | 0 | PASS |
| 13 | invalid contactMethod | 400 | 0 | 0 | PASS |
| 14 | quote without service | 400 | 0 | 0 | PASS |
| 15 | contact without service (allowed) | 200 | 1 | 1 | PASS |
| 16 | bad phone | 400 | 0 | 0 | PASS |
| 17 | name too long (101) | 400 | 0 | 0 | PASS |
| 18 | phone too long (31) | 400 | 0 | 0 | PASS |
| 19 | contact name 1 char | 400 | 0 | 0 | PASS |
| 20 | quote name 1 char ok | 200 | 1 | 1 | PASS |
| 21 | contact message too short | 400 | 0 | 0 | PASS |
| 22 | quote message 501 | 400 | 0 | 0 | PASS |
| 23 | non-string field | 400 | 0 | 0 | PASS |
| 24 | missing token | 403 | 0 | 0 | PASS |
| 25 | invalid token (siteverify success:false) | 403 | 1 | 0 | PASS |
| 26 | siteverify outage (network error) | 502 | 1 | 0 | PASS |
| 27 | siteverify HTTP 503 | 502 | 1 | 0 | PASS |
| 28 | siteverify timeout (10s abort) | 502 | 1 | 0 | PASS |
| 29 | CRM returns 500 | 502 | 1 | 1 | PASS |
| 30 | CRM timeout (10s abort) | 502 | 1 | 1 | PASS |
| 31 | missing CRM_API_TOKEN | 500 | 0 | 0 | PASS |
| 32 | empty-string CRM_API_TOKEN | 500 | 0 | 0 | PASS |
| 33 | whitespace CRM_API_TOKEN | 500 | 0 | 0 | PASS |
| 34 | missing CRM_API_VERSION | 500 | 0 | 0 | PASS |
| 35 | missing CRM_LOCATION_ID | 500 | 0 | 0 | PASS |
| 36 | missing CRM_API_BASE_URL | 500 | 0 | 0 | PASS |
| 37 | http non-loopback CRM base URL | 500 | 0 | 0 | PASS |
| 38 | missing TURNSTILE_SECRET_KEY | 500 | 0 | 0 | PASS |
| 39 | empty TURNSTILE_SECRET_KEY | 500 | 0 | 0 | PASS |
| 40 | missing optional CRM_FIELD_MARKET | 200 | 1 | 1 | PASS |
| 41 | empty optional CRM_FIELD_SERVICE | 200 | 1 | 1 | PASS |
| 42 | MAPPING quote | 200 | 1 | 1 | PASS |
| 43 | MAPPING contact | 200 | 1 | 1 | PASS |
| 44 | siteverify request has secret, token, remoteip | - | 1 | 0 | PASS |
| 45 | phone 702-555-0111 | 200 | 1 | 1 | PASS |
| 46 |   -> sent as +17025550111 | - | 1 | 1 | PASS |
| 47 | phone 1 (702) 555-0122 | 200 | 1 | 1 | PASS |
| 48 |   -> sent as +17025550122 | - | 1 | 1 | PASS |
| 49 | phone 555-0123 | 200 | 1 | 1 | PASS |
| 50 |   -> sent as 555-0123 | - | 1 | 1 | PASS |
| 51 | phone +44 20 7946 0958 | 200 | 1 | 1 | PASS |
| 52 |   -> sent as +44 20 7946 0958 | - | 1 | 1 | PASS |
| 53 | market /las-vegas/drain-cleaning/ | 200 | 1 | 1 | PASS |
| 54 | market /henderson-plumbing-services/ | 200 | 1 | 1 | PASS |
| 55 | market /north-las-vegas/aliante-area/emergency-plumbing/ | 200 | 1 | 1 | PASS |
| 56 | market /north-las-vegas/emergency-plumbing/ | 200 | 1 | 1 | PASS |
| 57 | market /summerlin/repiping/ | 200 | 1 | 1 | PASS |
| 58 | market /contact/ | 200 | 1 | 1 | PASS |
| 59 | market / | 200 | 1 | 1 | PASS |
| 60 | market /service-areas/ | 200 | 1 | 1 | PASS |
| 61 | market /boulder-city/drain-cleaning/ | 200 | 1 | 1 | PASS |
| 62 | market /lake-las-vegas-plumbing-services/ | 200 | 1 | 1 | PASS |
| 63 | market page-without-slash | 200 | 1 | 1 | PASS |
| 64 | market /unknown/x/ | 200 | 1 | 1 | PASS |

Response shape check (every response): body is {"ok":bool}, Cache-Control no-store, Content-Type application/json:
  responses checked: 59 | all no-store: true | all json: true | bodies: {"ok":true} {"ok":false}

Mapping detail:
   MAPPING quote {"url":true,"auth":true,"version":true,"loc":true,"first":true,"last":true,"phone":true,"noAddress":true,"source":true,"method":true,"page":true,"market":true,"type":true,"service":true,"message":true,"fieldKeys":true,"noTags":true,"noToken":true}
   MAPPING contact {"first":true,"last":true,"phone":true,"address1":true,"source":true,"method":true,"noService":true,"type":true,"page":true,"market":true,"noToken":true}

Market derivation (page -> market, source page field):
   /las-vegas/drain-cleaning/  ->  Las Vegas  ->  /las-vegas/drain-cleaning/
   /henderson-plumbing-services/  ->  Henderson  ->  /henderson-plumbing-services/
   /north-las-vegas/aliante-area/emergency-plumbing/  ->  North Las Vegas Aliante Area  ->  /north-las-vegas/aliante-area/emergency-plumbing/
   /north-las-vegas/emergency-plumbing/  ->  North Las Vegas  ->  /north-las-vegas/emergency-plumbing/
   /summerlin/repiping/  ->  Summerlin  ->  /summerlin/repiping/
   /contact/  ->  Las Vegas Valley  ->  /contact/
   /  ->  Las Vegas Valley  ->  /
   /service-areas/  ->  Las Vegas Valley  ->  /service-areas/
   /boulder-city/drain-cleaning/  ->  Boulder City  ->  /boulder-city/drain-cleaning/
   /lake-las-vegas-plumbing-services/  ->  Lake Las Vegas  ->  /lake-las-vegas-plumbing-services/
   page-without-slash  ->  Las Vegas Valley  ->  (empty page, field omitted)
   /unknown/x/  ->  Las Vegas Valley  ->  /unknown/x/

Log lines captured (names/status codes only expected):
   E lead: verify request failed
   E lead: verify status 503
   E lead: verify request failed
   E lead: CRM status 500
   E lead: CRM request failed
   E lead: missing variable CRM_API_TOKEN
   E lead: missing variable CRM_API_TOKEN
   E lead: missing variable CRM_API_TOKEN
   E lead: missing variable CRM_API_VERSION
   E lead: missing variable CRM_LOCATION_ID
   E lead: missing variable CRM_API_BASE_URL
   E lead: invalid variable CRM_API_BASE_URL
   E lead: missing variable TURNSTILE_SECRET_KEY
   E lead: missing variable TURNSTILE_SECRET_KEY
   W lead: field skipped, variable CRM_FIELD_MARKET not set
   W lead: field skipped, variable CRM_FIELD_SERVICE not set

Secret/PII/token strings found in any log line: none

FAILURES: 0
```

### Step 2: wrangler end to end (temp directory, local stub, Cloudflare dummy test keys)

Before each run the launcher printed this proof: the working directory is outside the repo with no `.dev.vars`; the CRM base URL host is a loopback stub; the Turnstile secret is one of Cloudflare's published dummy test keys. It refuses to start otherwise (shown below).

```
lead-dev safety check
  working directory : C:\Users\Welcome\AppData\Local\Temp\lead-dev-CY0RZx (outside the repo, no .dev.vars)
  CRM base URL host : 127.0.0.1:9911 (loopback stub)
  Turnstile secret  : Cloudflare dummy test key
  port              : 8788

 ⛅️ wrangler 4.148.0 (update available 4.150.0)
───────────────────────────────────────────────
✨ Compiled Worker successfully
```

Always-pass secret, requests as received by the stub (token redacted), then results:

```
mode: pass
Stub received for the contact lead (token redacted): {
 "method": "POST",
 "path": "/contacts/upsert",
 "headers": {
  "version": "mock-version",
  "authorization": "Bearer [REDACTED]",
  "content-type": "application/json"
 },
 "body": {
  "locationId": "MOCK_LOC",
  "firstName": "Sam",
  "lastName": "Contact",
  "phone": "+17025550199",
  "source": "Website contact form",
  "customFields": [
   {
    "id": "f_method",
    "fieldValue": "call"
   },
   {
    "id": "f_page",
    "fieldValue": "/contact/"
   },
   {
    "id": "f_market",
    "fieldValue": "Las Vegas Valley"
   },
   {
    "id": "f_type",
    "fieldValue": "contact"
   },
   {
    "id": "f_message",
    "fieldValue": "Please call me about a leak."
   }
  ],
  "address1": "12 Test St"
 }
}
Stub received for the quote lead (token redacted): {
 "method": "POST",
 "path": "/contacts/upsert",
 "headers": {
  "version": "mock-version",
  "authorization": "Bearer [REDACTED]",
  "content-type": "application/json"
 },
 "body": {
  "locationId": "MOCK_LOC",
  "firstName": "Pat",
  "lastName": "Example",
  "phone": "+17025550142",
  "source": "Website quote form",
  "customFields": [
   {
    "id": "f_method",
    "fieldValue": "text"
   },
   {
    "id": "f_page",
    "fieldValue": "/las-vegas/drain-cleaning/"
   },
   {
    "id": "f_market",
    "fieldValue": "Las Vegas"
   },
   {
    "id": "f_type",
    "fieldValue": "quote"
   },
   {
    "id": "f_service",
    "fieldValue": "Drain Cleaning"
   },
   {
    "id": "f_message",
    "fieldValue": "slow drain"
   }
  ]
 }
}
| Case | Status | Body | CRM stub calls | Result |
|---|---|---|---|---|
| which path works: POST /api/lead (no slash) | 200 | {"ok":true} | 1 | PASS |
| POST /api/lead/ (slash) | 200 | {"ok":true} | 1 | PASS |
| GET /api/lead | 405 | {"ok":false} | 0 | PASS |
| wrong Origin | 403 | {"ok":false} | 0 | PASS |
| honeypot | 200 | {"ok":true} | 0 | PASS |
| invalid JSON | 400 | {"ok":false} | 0 | PASS |
| oversize (9000 bytes) | 413 | {"ok":false} | 0 | PASS |
| missing token | 403 | {"ok":false} | 0 | PASS |
| invalid contactMethod | 400 | {"ok":false} | 0 | PASS |
| CRM stub returns 500 | 502 | {"ok":false} | 1 | PASS |
| CRM stub hangs (timeout) | 502 | {"ok":false} (after 10s) | 1 | PASS |
```

Per-form cases:

```
| Form | Case | Status | Body | CRM stub calls | Result |
|---|---|---|---|---|---|
| quote | success, CRM mocked | 200 | {"ok":true} | 1 | PASS |
| contact | success, CRM mocked | 200 | {"ok":true} | 1 | PASS |
| quote | wrong content type | 415 | {"ok":false} | 0 | PASS |
| contact | wrong content type | 415 | {"ok":false} | 0 | PASS |
| quote | invalid field: no service | 400 | {"ok":false} | 0 | PASS |
| quote | invalid field: bad phone | 400 | {"ok":false} | 0 | PASS |
| contact | invalid field: name 1 char | 400 | {"ok":false} | 0 | PASS |
| contact | invalid field: message too short | 400 | {"ok":false} | 0 | PASS |
| quote | missing token | 403 | {"ok":false} | 0 | PASS |
| contact | missing token | 403 | {"ok":false} | 0 | PASS |
| quote | wrong Origin | 403 | {"ok":false} | 0 | PASS |
| contact | wrong Origin | 403 | {"ok":false} | 0 | PASS |
| quote | honeypot filled | 200 | {"ok":true} | 0 | PASS |
| contact | honeypot filled | 200 | {"ok":true} | 0 | PASS |
| quote | oversized body | 413 | {"ok":false} | 0 | PASS |
| contact | oversized body | 413 | {"ok":false} | 0 | PASS |
| both | method PUT | 405 | {"ok":false} | 0 | PASS |
| both | method DELETE | 405 | {"ok":false} | 0 | PASS |
| both | method PATCH | 405 | {"ok":false} | 0 | PASS |
| both | method GET | 405 | {"ok":false} | 0 | PASS |
| quote | CRM failure (stub 500) | 502 | {"ok":false} | 1 | PASS |
| contact | CRM failure (stub 500) | 502 | {"ok":false} | 1 | PASS |

FAIL count: 0
```

Always-fail dummy secret, and the dummy "token already spent" secret:

```
| Case | Status | Body | CRM stub calls | Result |
|---|---|---|---|---|
| Turnstile dummy secret "fail" with dummy token | 403 | {"ok":false} | 0 | PASS |
| Case | Status | Body | CRM stub calls | Result |
|---|---|---|---|---|
| Turnstile dummy secret "spent" with dummy token | 403 | {"ok":false} | 0 | PASS |
```

With the always-fail secret the form shows the existing phone-number message, not the new message. The new message appears only when a submit happens before a token exists.

Launcher refusals:

```
lead-dev: TURNSTILE_SECRET_KEY is not a Cloudflare dummy secret key. Refusing to run.
exit=1
lead-dev: CRM_API_BASE_URL is not a loopback http URL. Refusing to run.
exit=1
```

Both `/api/lead` and `/api/lead/` returned 200 under wrangler. The forms use `/api/lead`. Behavior on the deployed site is not yet tested.

### Steps 6 to 8: headless browser (Chromium), against the local wrangler server

```
| Case | Result | Detail |
|---|---|---|
| 6a no Turnstile request on page load and 1.5s idle (contact) | PASS | requests=0 |
| 6b no Turnstile request on page load (service page) | PASS | requests=0 |
| 6c Turnstile request after first focus (keyboard Tab / focusin) | PASS | before=0, after=1, first=[url] |
| 6c Turnstile request after first pointer (mouse pointerdown) | PASS | before=0, after=4, first=[url] |
| 6c Turnstile request after first touch (tap) | PASS | before=0, after=4, first=[url] |
| 6c Turnstile request after first keypress (keydown) | PASS | before=0, after=4, first=[url] |
| 6c Turnstile request after autofill-style input event (no focus, no pointer, no key) | PASS | before=0, after=4, first=[url] |
| 7a submit before token: A3 text shows, no POST | PASS | A3 shown=true, POSTs=0 |
| 7a2 A3 text clears once the token arrives | PASS | cleared=true |
| 7b submit again after token: succeeds, success then redirect to /thank-you/ | PASS | url=[url] stubLeads=1 |
| 7c quote form success: success card shown and focused | PASS | activeElement role=status |
| 7c2 quote lead reached the stub with market and page | PASS | leads=1, market=Las Vegas Valley |
| 7d token expiry: token cleared, A3 text on immediate submit | PASS | A3 shown=true |
| 7d2 after expiry the widget refreshes and the next submit succeeds | PASS | url=[url] |
| 7e CRM 502: existing error message shown | PASS | error shown=true |
| 7e2 press submit again after 502: fresh token, no stuck state, succeeds | PASS | url=[url] POSTs=2 |
| 7f script blocked: existing error message with the phone number, no POST | PASS | error shown=true, POSTs=0 |
| 7g honeypot: success card shown, no POST, no Turnstile | PASS | success=true, POSTs=0, turnstile=2 |
| 8 layout 390px /contact/: no shift, no overflow | PASS | button y in form before=866 after token=866, widget container height=0, form height 938 -> 938, overflow=false/false |
| 8 layout 390px /drain-cleaning/: no shift, no overflow | PASS | button y in form before=842 after token=842, widget container height=0, form height 914 -> 914, overflow=false/false |
| 8 layout 1440px /contact/: no shift, no overflow | PASS | button y in form before=742 after token=742, widget container height=0, form height 822 -> 822, overflow=false/false |
| 8 layout 1440px /drain-cleaning/: no shift, no overflow | PASS | button y in form before=626 after token=626, widget container height=0, form height 706 -> 706, overflow=false/false |
| 8k keyboard order reaches submit then leaves the form; no iframe tab stop, no trap | PASS | order=input[name] > input[phone] > input[contactMethod] > select[service] > input[address] > textarea[message] > a > button(submit) > a > a > a > a > a > a |

FAIL count: 0
```

Plain static server with no Function, `/api/lead` answering 404:

```
/api/lead POSTs received by the static server: 1, returned 404 -> existing error message shown: true, redirected: false
```

### Step 9: hygiene greps (counts only)

```
Build 2 out/ (production-style key placeholder). Counts of files unless stated.
>> secret and config names in out/
Bearer: 0
CRM_API: 0
CRM_FIELD: 0
CRM_LOCATION: 0
TURNSTILE_SECRET: 0
LEAD_ALLOWED: 0
webhook: 0
>> CRM token shape in out, functions, lib, components, scripts, package files
out: 0
functions: 0
lib: 0
components: 0
scripts: 0
package.json, package-lock.json: 0
>> Cloudflare dummy test keys
out: 0
functions: 0
lib: 0
components: 0
scripts: 0
tracked files: 0
>> distinct 0x4 plus 20 or more chars values (package-lock.json excluded, it has one inside an integrity hash)
out/ (expect 1, the placeholder): 1
tracked files except package-lock.json: 0
git history except package-lock.json: 0
new source files: 0
>> vendor host name check (term not recorded)
out: 0
functions: 0
lib: 0
components: 0
scripts: 0
package files: 0
>> env files
.gitignore:55:.dev.vars	.dev.vars
.gitignore:63:*.local	.env.local
tracked env files: 0
>> dashes in new or changed shipped files (command line flags excluded)
exit=1 (1 = none)
>> scripts/lead-dev.mjs: only the command line flags contain a double hyphen:
2
```

The distinct `0x4` count in tracked files is 0 only because `package-lock.json` is excluded. It contains one matching 26-character string inside a `sha512` integrity hash, first committed with the project scaffold. It is not a key.

### Step 4: client code read-through

| Check | Result |
|---|---|
| Both forms contain exactly one `fetch(` and it uses `LEAD_ENDPOINT` | pass |
| `LEAD_ENDPOINT` is `"/api/lead"`, defined once in `lib/lead-endpoint.ts` | pass |
| New text is exactly: "One moment while we finish a quick check. Please submit the form again." (once per form) | pass |
| The error fallback "Something went wrong. Please call us directly at (702) 567-9172." occurs once per form, same as before | pass |
| No webhook URL, token or CRM URL in the forms, the hook or `lib/`. The only URL is the Turnstile script address in the hook. | pass |
| No other new visitor-facing text in the diff | pass |

### Vendor name check

Run for one host string from the owner's earlier message (term not recorded): 0 files in `out/`, `functions/`, `lib/`, `components/`, `scripts/` and the package files, and 0 added lines in the tracked diff. The owner-supplied term list for the full check was skipped by owner decision.

## Live CRM test (run on 2026-10-13 with dummy data)

Run by Claude Code with the owner's rotated token, from the repo root with `wrangler pages dev` (not the mock launcher), a headless browser, Cloudflare's published dummy Turnstile test keys (site key in the shell for the build, secret as a temporary `.dev.vars` line), and clearly fake data: name "Test Lead DELETE ME", phone (702) 555-0147, no email, message "Dummy submission for launch testing. Please ignore." No real lead data was used. No secret, location ID, field ID or contact ID is recorded in this report.

### Results

| Step | Result |
|---|---|
| Version header probe (read-only custom-fields listing) | `2021-07-28` returned HTTP 200 on the first try, so `v3` was not needed. Written to `.dev.vars` as `CRM_API_VERSION`. The header name `Version` was accepted. |
| Field IDs | See "Finding: the stored field values were keys" below. After the fix all five `CRM_FIELD_*` values match an existing field. `CRM_FIELD_MARKET` is blank on purpose and no market value was sent. |
| Contact form, preferred method "call" | Function returned 200. Success card shown, redirected to the thank-you page. |
| Quote form on a service page, preferred method "text" | Function returned 200. Success card shown, redirected to the thank-you page. |
| Upsert path | `/contacts/upsert` accepted (2xx). |
| `fieldValue` key | Accepted and stored. |
| Per-field mapping after the contact form | Name "Test Lead DELETE ME" split correctly. Phone stored as E.164. Source "Website contact form". Preferred method "call", message correct, source page "/contact/", form type "contact", service "Emergency Plumbing". No address (none entered), no tags. |
| Per-field mapping after the quote form | Same single contact, now: source "Website quote form", preferred method "text", message correct, source page "/drain-cleaning/", form type "quote", service "Drain Cleaning". |
| Source page differs between the two forms | Yes ("/contact/" against "/drain-cleaning/"). |
| Duplicate behavior | The CRM updated the existing contact by phone. After three submissions with the same phone there was exactly 1 contact. The creation time stayed the same and the update time and all five custom fields changed on each submission, so each repeat overwrites the previous values. |
| Always-fail Turnstile secret | Function returned 403, the CRM was not called (the contact's update time did not change), and the page showed the existing "Something went wrong. Please call us directly at (702) 567-9172." message. |
| Search for the test contacts | `POST /contacts/search` with a phone filter worked on the first variant. |
| Delete | 1 contact matched the exact name and phone (the duplicate check had updated one contact, not created more). Deleted by ID: HTTP 200, `succeeded: true`. |
| Re-search after delete | The first repeat search still listed the contact (search index lag), then the next search returned 0. Remaining: 0. |
| Config block in `functions/api/lead.ts` | Unchanged. No fix was needed. |

### Finding: the stored field values were keys

The five `CRM_FIELD_*` values the owner had put in `.dev.vars` were field keys, not field IDs, so none matched a field in the listing. Each of the five keys (preferred method of contact, message, source page, form type, service needed) has exactly one field, so the matching IDs were written into `.dev.vars` under the same names, as the owner directed in an earlier prompt. The Service Needed field is a multiple-choice field. Its option list matches the form's 18 service names exactly, and a plain text value was stored correctly.

### Local files changed by the test

Only the untracked `.dev.vars`: `CRM_API_BASE_URL` was added (it was missing), `CRM_API_VERSION` was set, the five field IDs were corrected, the temporary dummy Turnstile secret and allowed-origin lines were added and then removed, and the `CRM_API_TOKEN` line was blanked afterward. All values stay out of this report. Temporary files were deleted: the `.wrangler` folder and the dummy-key `out/` build in the repo, and the test scripts in the scratch folder.

### What the live test did not cover

- The real Turnstile widget and secret. Only Cloudflare's dummy test keys were used.
- The deployed Cloudflare environment, the preview host, and the deployed path behavior.
- The `v3` Version value (not needed).

### Verified items, accepted risk, and what remains

| Point | Status |
|---|---|
| Upsert path `/contacts/upsert` | confirmed |
| Bearer authorization | confirmed |
| `Version` header name | confirmed |
| `Version` header value `2021-07-28` | confirmed |
| Body: location ID, first and last name, phone, source, custom fields | confirmed |
| Custom fields as `{ id, fieldValue }` | confirmed (accepted and stored) |
| `address1` for the contact form | not exercised (no address entered); needs a check with a real address |
| A repeat phone updates the existing contact | confirmed |
| Custom-field ID retrieval | confirmed (the listing call works and the IDs match) |
| Production values on the deployed site | unverified until the deployed retest |

The three items that were unverified before the live test are now verified against the live third-party CRM on 2026-10-13: the `Version` header name with the value `2021-07-28`, the `fieldValue` key for custom fields, and the `/contacts/upsert` path. The comments in the config block of `functions/api/lead.ts` now say so.

#### Accepted launch risk: repeat submissions overwrite

The CRM matches on phone and updates the existing contact, so a repeat submission from the same phone overwrites the earlier message, service and other custom fields. This is accepted for launch. Follow-up idea: add a CRM note per submission so earlier messages are kept. It needs the notes permission on the private integration and is a second CRM call, so it needs separate approval.

#### What remains before launch

1. The real Turnstile site key and secret (create the widget and allow its hostnames).
2. The Cloudflare variables, for Production and Preview (see the Cloudflare steps).
3. The deployed retest with fake data, including a fast submit and a blocked script.
4. An `address1` check with a real address on the contact form.
5. The final build with the real public site key, and the hygiene greps on it.

## Cloudflare steps

1. Deploy method: confirm whether Pages builds from git (then `functions/` at the repo root deploys automatically) or you upload `out/` yourself (then deploy from the repo root so `functions/` is included).
2. In Cloudflare Pages, add the variables for Production and Preview: `CRM_API_BASE_URL`, `CRM_API_VERSION`, `CRM_LOCATION_ID`, the five `CRM_FIELD_*` names, and `LEAD_ALLOWED_ORIGINS`. Add `CRM_API_TOKEN` and `TURNSTILE_SECRET_KEY` as Secrets. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a build variable.
3. `LEAD_ALLOWED_ORIGINS` must list the exact preview host (`name.pages.dev`). The production origin is built in.
4. Create the Turnstile widget and allow these hostnames: `redcarpetplumbing.com` and the exact preview host. Add `www.redcarpetplumbing.com` only if it serves pages.
5. Redeploy, because variables apply only to new deployments.
6. Re-test on the deployed site with fake data: a normal lead, a very fast submit, and the script blocked. Then delete the test contacts in the CRM.
7. Run the final real-key build and re-run the hygiene greps on it.

## Remaining risks

- Leads are lost if the CRM is down. The visitor sees the call-us error message.
- Bot protection is Turnstile, the honeypot and an Origin check that a scripted client can spoof. There is no rate limiting; a Cloudflare rate limit rule is a separate task.
- Duplicate matching depends on the CRM's own settings. A repeat submission with the same phone updates the existing contact, so the message and service fields are overwritten.
- Phone numbers that cannot be normalized are sent as typed.
- The Function runs only on Cloudflare. On a plain static server the forms show the call-us error.
- The variables must be set for both Production and Preview, and apply only to new deployments.
- Adding a wrangler config file later can change how Pages handles dashboard settings.
- Turnstile lets a third party see visitor browser signals, and the privacy page does not mention it. Claude Project will draft a sentence for the owner's review; the privacy page was not edited.
- The live test used Cloudflare's dummy Turnstile keys, so real-widget behavior and the deployed environment still need the retest in the Cloudflare steps.
- Every repeat submission with the same phone overwrites that contact's message, service and other custom fields (confirmed in the live test).
- The headless browser tests ran against Cloudflare's dummy test widget. The real widget behavior on the deployed site is not yet tested.
