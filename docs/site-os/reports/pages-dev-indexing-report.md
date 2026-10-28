# Pages.dev Duplicate Indexing Check (Gate 1, Inspect and Report Only)

Date: 2026-10-28. Local HEAD: 948771f. Production domain: redcarpetplumbing.com. Preview domain tested: red-carpet-plumbing-site.pages.dev (documented in the repo at docs/site-os/page-inventory.md lines 49 and 99). No repo file was changed except this report, the earlier live-header-check.md, and noindex-audit-report.md. Nothing was committed, staged, or pushed.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, em dashes are shown as [em dash], double hyphens as [dbl-hyphen], and the Cloudflare Report-To value (contains an account token) as "[cf-nel endpoint token omitted]". Nothing else was altered.

## 1. Summary

The pages.dev host is live and publicly reachable. It returns HTTP 200 with the full site on every URL tested, with no redirect and no X-Robots-Tag or Link canonical header. Pages there carry `index, follow` (or no robots tag) in the HTML, so it can be indexed. It canonicalizes every page to https://redcarpetplumbing.com. No pages.dev string exists anywhere in the built out/ files (0 matches), and all 135 canonicals, 123 og:url values, 139 og:image values, 377 JSON-LD url and @id style values, and 135 sitemap loc values use redcarpetplumbing.com. The base URL is hardcoded (app/layout.tsx:21, app/sitemap.ts:7, and per-page canonical strings in 135 page files), not read from an env variable, so a Cloudflare build cannot change it. The pages.dev robots.txt and sitemap.xml are byte-identical copies of production and reference the production domain. The risk is therefore a duplicate-content risk mitigated by canonical only; a canonical is a hint, so it is not a guarantee. The recommended fix is a host-scoped noindex header (Option 1), listed only in Section 4.

## 2. Part 1: repo-level findings (raw output)

Prior findings (noindex-audit-report.md): no _headers, no middleware, no wrangler config, no X-Robots-Tag in the repo, 4 noindex pages (/thank-you/ and framework 404 outputs), 135 indexable pages with self canonicals. Unchanged.

### 2.1 pages.dev search across out/ and the repo, metadataBase and canonical sources

Part 1 greps, part 1 of 2 (lines 1 to 60)

```text
$ rg -n -i "pages\.dev" out (all files, raw)
[exit=1]

$ rg -n -i "pages\.dev" repo excluding node_modules, .next, out, Images
.\docs\site-os\reports\noindex-audit-report.md:855:| 1 | None (verification only) | Request live response headers for a page URL on the production domain and the pages.dev preview domain and confirm there is no X-Robots-Tag header from Cloudflare dashboard rules. | None, read-only | All |
.\docs\site-os\reports\noindex-audit-report.md:862:1. UNVERIFIED: live production response headers. The repo has no _headers file, no middleware, and no wrangler config, but Cloudflare dashboard Transform Rules or Pages settings could add an X-Robots-Tag header outside the repo. To verify: run a header request against the live domain and the pages.dev preview URL, or share the Cloudflare rules.
.\docs\site-os\reports\noindex-audit-report.md:863:2. UNVERIFIED: whether pages.dev preview URLs are publicly reachable and indexable duplicates. Needs the Cloudflare Pages project settings or a live check.
.\docs\site-os\reports\live-header-check.md:9:The shell reached external hosts, so the checks ran. Production (redcarpetplumbing.com) and the preview domain (red-carpet-plumbing-site.pages.dev) both returned HTTP 200 on all 10 URLs with no redirects. No X-Robots-Tag header was found on any of the 20 responses. Live robots meta and canonical tags match the local out/ audit: / is index, follow with a self canonical, and /thank-you/ is noindex, nofollow with no canonical. The preview domain is publicly reachable and serves indexable pages (index, follow or no robots tag, no header block), but every preview page canonical points to the production URL, so it is a canonical-mitigated duplicate, not a noindex one.
.\docs\site-os\reports\live-header-check.md:14:- Preview domain: documented in the repo as red-carpet-plumbing-site.pages.dev at docs/site-os/page-inventory.md lines 49 and 99 (also referenced at crm-form-wiring-report.md:570 and implementation-log.md:706). The URL was used as documented, not guessed. UNVERIFIED: that the Cloudflare project still uses this exact subdomain and that it is the only alias; the response proves the host exists and serves this site.
.\docs\site-os\reports\live-header-check.md:259:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/
.\docs\site-os\reports\live-header-check.md:278:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
.\docs\site-os\reports\live-header-check.md:297:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/robots.txt
.\docs\site-os\reports\live-header-check.md:317:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sitemap.xml
.\docs\site-os\reports\live-header-check.md:342:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/
.\docs\site-os\reports\live-header-check.md:361:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/repiping/
.\docs\site-os\reports\live-header-check.md:380:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sewer-line-services/
.\docs\site-os\reports\live-header-check.md:404:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/
.\docs\site-os\reports\live-header-check.md:423:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/henderson/repiping/
.\docs\site-os\reports\live-header-check.md:442:##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/north-las-vegas/sewer-line-services/
.\docs\site-os\reports\live-header-check.md:489:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:495:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:537:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:542:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/repiping/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:547:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/sewer-line-services/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:552:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:557:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/henderson/repiping/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:562:##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/north-las-vegas/sewer-line-services/ | extract robots meta and canonical
.\docs\site-os\reports\live-header-check.md:568:The three service pages have no robots tag (default indexable) and the three service-location pages have index, follow. This matches the local audit. Every canonical is the production URL, including on the pages.dev host.
.\docs\site-os\reports\live-header-check.md:583:| Does a canonical-only setup fully prevent preview indexing? | UNVERIFIED. A canonical is a hint, not a directive. Whether Google has indexed any pages.dev URL needs Search Console or a site: query. | Not checkable from the shell |
.\docs\site-os\reports\live-header-check.md:589:1. UNVERIFIED: whether Google or Bing has indexed any pages.dev URL.
.\docs\site-os\reports\live-header-check.md:593:5. Question: do you want pages.dev blocked from indexing? That is covered by the separate pages.dev indexing check and needs approval before any change.
.\docs\site-os\page-inventory.md:22:| Homepage | `/` | `app/page.tsx` | Core | Created | Batch 1 | `75bad19` | Yes (page-specific) | Yes (homepage hero) | Disabled Call Now spans (no phone) | Forward links to service routes not yet built when first shipped; most now live. `metadataBase` in root layout still points to `.pages.dev` |
.\docs\site-os\page-inventory.md:49:| Root layout | `app/layout.tsx` | Global metadata, font setup, applies to all routes. `metadataBase` still points to `https://red-carpet-plumbing-site.pages.dev` [em dash] needs swap to `https://redcarpetplumbing.com` before launch |
.\docs\site-os\page-inventory.md:99:| 3 | `metadataBase` in `app/layout.tsx` still points to `red-carpet-plumbing-site.pages.dev` | Must swap to `https://redcarpetplumbing.com` before production launch so OG / Twitter card URLs resolve correctly |
.\docs\site-os\reports\crm-form-wiring-report.md:570:3. `LEAD_ALLOWED_ORIGINS` must list the exact preview host (`name.pages.dev`). The production origin is built in.
.\docs\site-os\implementation-log.md:706:- LAUNCH BLOCKER: metadataBase update from .pages.dev to production domain.
[exit=0]

$ rg -n "metadataBase|alternates|canonical" app lib components (source lines, excluding per-page alternates counted below)
lib\social-image.ts:6:// `metadataBase` in app/layout.tsx. The alt must match app/opengraph-image.alt.txt.
scripts\lead-dev.mjs:10://   - CRM_API_BASE_URL is http on a loopback host (a local stub), and
scripts\lead-dev.mjs:14://   CRM_API_BASE_URL=http://127.0.0.1:9911 CRM_API_VERSION=test CRM_API_TOKEN=mock \
scripts\lead-dev.mjs:32:  "CRM_API_BASE_URL",
scripts\lead-dev.mjs:56:  crmUrl = new URL(process.env.CRM_API_BASE_URL || "");
scripts\lead-dev.mjs:58:  stop("CRM_API_BASE_URL must be set to a local stub URL.");
scripts\lead-dev.mjs:62:  stop("CRM_API_BASE_URL is not a loopback http URL. Refusing to run.");
app\layout.tsx:21:  metadataBase: new URL("https://redcarpetplumbing.com"),
app\sitemap.ts:7:const BASE_URL = "https://redcarpetplumbing.com";
app\sitemap.ts:66:  return route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}/`;
[exit=0]

$ rg -c "canonical:" app [dbl-hyphen]glob "*.tsx" (count of page files with an alternates canonical value)
135

$ sample canonical declarations
app/page.tsx:22:    canonical: "https://redcarpetplumbing.com/",
app/drain-cleaning/page.tsx:23:    canonical: "https://redcarpetplumbing.com/drain-cleaning/",
app/las-vegas/drain-cleaning/page.tsx:32:    canonical: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",

$ rg -n "https://redcarpetplumbing.com|\$\{" lib/ for URL builders
```

Part 1 greps, part 2 of 2 (lines 61 to 66)

```text
[exit=0]

$ env files / process.env for URL
.env.example
.env.local
[exit=1]
```


The repo-wide pages.dev hits are all in docs: page-inventory.md (stale notes that metadataBase once pointed at pages.dev; implementation-log.md:706 records it as a launch blocker) and crm-form-wiring-report.md:570. The remaining hits are in report files I wrote earlier in this session, which mention the hostname. There is no pages.dev string in any source or built file. app/layout.tsx:21 now reads `metadataBase: new URL("https://redcarpetplumbing.com")`.

### 2.2 Host tally across out/ (canonical, og:url, og:image, twitter:image, JSON-LD, absolute links, sitemap)

Scan covered all 139 HTML files in out/ (excluding out/_next) and out/sitemap.xml. 644 JSON-LD blocks were parsed as JSON with no failures.

Host tally, part 1 of 1 (lines 1 to 17)

```text
HTML files scanned: 139  JSON-LD blocks parsed: 644
Canonicals not starting with https://redcarpetplumbing.com: 0

| Source | Host | Count |
|-|-|-|
| canonical | redcarpetplumbing.com | 135 |
| og:url | redcarpetplumbing.com | 123 |
| og:image | redcarpetplumbing.com | 139 |
| twitter:image | redcarpetplumbing.com | 139 |
| jsonld url/@id/@context-free URL values | redcarpetplumbing.com | 377 |
| jsonld url/@id/@context-free URL values | www.wikidata.org | 7 |
| a href absolute | www.google.com | 153 |
| a href absolute | share.google | 12 |
| a href absolute | redcarpetplumbing.com | 2 |
| sitemap loc | redcarpetplumbing.com | 135 |

Any pages.dev host in any category above: false
```


Result: no pages.dev host in any category. The only non-production hosts are www.google.com and share.google (outbound links) and www.wikidata.org (JSON-LD sameAs style values). 4 pages have no canonical (the four noindex pages). og:url appears on 123 of 139 pages; the other 16 pages have no og:url tag. That gap is not related to pages.dev and was not investigated.

### 2.3 Config files (public/_headers, public/_redirects, robots, wrangler) and env example

Config files, part 1 of 1 (lines 1 to 32)

```text
$ cat public/_headers
cat: public/_headers: No such file or directory

$ cat public/_redirects
cat: public/_redirects: No such file or directory

$ cat public/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://redcarpetplumbing.com/sitemap.xml

$ cat app/robots.ts
cat: app/robots.ts: No such file or directory

$ cat wrangler.toml
cat: wrangler.toml: No such file or directory

$ cat wrangler.jsonc
cat: wrangler.jsonc: No such file or directory

$ cat wrangler.json
cat: wrangler.json: No such file or directory

$ cat .env.example
# Public build-time value. Copy to .env.local. The site key is public by design.
NEXT_PUBLIC_TURNSTILE_SITE_KEY=

$ ls out/_headers out/_redirects
ls: cannot access 'out/_headers': No such file or directory
ls: cannot access 'out/_redirects': No such file or directory
```


Summary of that output: public/_headers, public/_redirects, app/robots.ts, wrangler.toml, wrangler.jsonc and wrangler.json do not exist, and neither does out/_headers or out/_redirects. public/robots.txt exists (Allow /, Disallow /api/, Sitemap line for https://redcarpetplumbing.com/sitemap.xml). .env.example holds only NEXT_PUBLIC_TURNSTILE_SITE_KEY= (empty).

### 2.4 Base URL source: hardcoded or env

- app/layout.tsx:21: `metadataBase: new URL("https://redcarpetplumbing.com")` (string literal).
- app/sitemap.ts:7: `const BASE_URL = "https://redcarpetplumbing.com";` (string literal), used at line 66.
- 135 page files set `canonical:` as a full literal URL (examples at app/page.tsx:22, app/drain-cleaning/page.tsx:23, app/las-vegas/drain-cleaning/page.tsx:32, in the Part 1 output).
- The only process.env uses in app, lib, components, and next.config.ts relate to Turnstile and the lead form (earlier audit, A5). No env variable feeds any URL, so a Cloudflare build (production or preview) produces the same canonical, og:url, JSON-LD and sitemap URLs. A .env.local file exists locally; its contents were not printed because it may hold secrets. It is not read for any URL.
- Preview builds still use production URLs for canonicals. That is correct for avoiding duplicates, but it means social share and canonical previews on pages.dev point at production.

### 2.5 Other repo facts relevant to the fix

Extra repo facts, part 1 of 1 (lines 1 to 14)

```text
$ grep -o google-site-verification meta in live pages.dev / and local out/index.html
pages.dev: <meta name="google-site-verification" content="rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8"/>
local out: <meta name="google-site-verification" content="rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8"/>

$ rg -n "verification" app/layout.tsx
25:  verification: {

$ rg -n "LEAD_ALLOWED_ORIGINS" functions lib docs/site-os/reports/crm-form-wiring-report.md | head -8
docs/site-os/reports/crm-form-wiring-report.md:70:- Allowed origins: `https://redcarpetplumbing.com` plus the entries of `LEAD_ALLOWED_ORIGINS` (comma separated, read at runtime, nothing hardcoded). This blocks drive-by cross-site posts but does not stop a scripted client that spoofs the header.
docs/site-os/reports/crm-form-wiring-report.md:121:| 6 | preview origin from LEAD_ALLOWED_ORIGINS | 200 | 1 | 1 | PASS |
docs/site-os/reports/crm-form-wiring-report.md:569:2. In Cloudflare Pages, add the variables for Production and Preview: `CRM_API_BASE_URL`, `CRM_API_VERSION`, `CRM_LOCATION_ID`, the five `CRM_FIELD_*` names, and `LEAD_ALLOWED_ORIGINS`. Add `CRM_API_TOKEN` and `TURNSTILE_SECRET_KEY` as Secrets. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a build variable.
docs/site-os/reports/crm-form-wiring-report.md:570:3. `LEAD_ALLOWED_ORIGINS` must list the exact preview host (`name.pages.dev`). The production origin is built in.
functions\api\lead.ts:38:  LEAD_ALLOWED_ORIGINS?: string;
functions\api\lead.ts:81:  const extra = envValue(env, "LEAD_ALLOWED_ORIGINS");
```


Two consequences: the live pages.dev HTML serves the same Google site-verification meta tag as production, so a Search Console property for pages.dev could be verified with the same token (see Section 4, item 5); and the lead form backend is configured to accept the preview host through LEAD_ALLOWED_ORIGINS, so pages.dev is used for staging review of the form, which matters for any redirect decision.

## 3. Part 2: live checks (read only, raw output)

All requests used curl -sIL with a 30 second timeout. Each block shows the exit code, the full header set, then bracketed result lines for status, redirect Location, X-Robots-Tag, and Link canonical header. Empty brackets mean none was present.

### 3.1 Production, redcarpetplumbing.com

Production headers, part 1 of 3 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://redcarpetplumbing.com/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:15 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-medium.webp>; rel="preload"; as=image
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3abd0e40ac04-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-medium.webp>; rel="preload"; a

##### curl -sIL -m 30 https://redcarpetplumbing.com/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:15 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 91
Connection: keep-alive
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=14400, must-revalidate
ETag: "a09404f41a0425c57e78677d98a3141e"
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
Accept-Ranges: bytes
cf-cache-status: REVALIDATED
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3ac05a490ad9-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:16 GMT
Content-Type: application/xml
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
```

Production headers, part 2 of 3 (lines 61 to 120)

```text
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "f594cb85d9dc35e7cfe450eebb9ee918"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3ac33ac209f1-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:16 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3ac65f7769e6-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:17 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3ac9caa70acd-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
```

Production headers, part 3 of 3 (lines 121 to 148)

```text
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:17 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3accba5f8f16-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 
```


### 3.2 Preview, red-carpet-plumbing-site.pages.dev

Preview headers, part 1 of 3 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:18 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3acfd8136d9b-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:18 GMT
Content-Type: text/plain; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "a09404f41a0425c57e78677d98a3141e"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3ad2ee1e5d22-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:19 GMT
Content-Type: application/xml
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "f594cb85d9dc35e7cfe450eebb9ee918"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3ad61addda94-LAS
```

Preview headers, part 2 of 3 (lines 61 to 120)

```text
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:19 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3ad9593b7e92-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:20 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3adc9e5f99b8-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:03:20 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
```

Preview headers, part 3 of 3 (lines 121 to 133)

```text
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3adfcfbe9d07-LAS
alt-svc: h3=":443"; ma=86400

[status lines / hops]: 1 response(s): HTTP/1.1 200 OK;
[Location headers]: 
[X-Robots-Tag]: 
[Link rel=canonical header]: 
[All Link headers]: 
```


### 3.3 pages.dev homepage body, robots.txt, sitemap.xml, and a missing path

Preview body checks, part 1 of 1 (lines 1 to 33)

```text
##### curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/ : title, robots, canonical
[exit=0 bytes=145686]
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>

##### curl -s https://red-carpet-plumbing-site.pages.dev/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://redcarpetplumbing.com/sitemap.xml
[exit=0]

##### curl -s https://red-carpet-plumbing-site.pages.dev/sitemap.xml (loc host tally and first 12 lines)
[exit=0 bytes=17985]
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://redcarpetplumbing.com/</loc>
<lastmod>2026-10-13T11:03:47-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/about/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/plumbing-services/</loc>
loc entries by host:
    135 <loc>https://redcarpetplumbing.com

##### curl -s https://red-carpet-plumbing-site.pages.dev/nonexistent-test-path/ -o /dev/null -w status
404
```


### 3.4 Result table for the pages.dev domain

| Question | Result | Evidence |
|-|-|-|
| (a) Returns 200 with full content? | Yes. 200 on all 6 URLs, homepage 145686 bytes with full HTML. | Section 3.2, 3.3 |
| (b) Sends noindex by header? | No. No X-Robots-Tag on any of the 6 responses. | Section 3.2 |
| (c) Sends noindex by meta tag? | No for indexable pages (/ is index, follow). Yes only for /thank-you/, which is noindex, nofollow on both hosts. | Sections 3.2, 3.3 and live-header-check.md |
| (d) Canonicalizes to the production domain? | Yes. Homepage canonical is https://redcarpetplumbing.com/. The six sample pages in live-header-check.md also canonicalize to production. No Link canonical header is sent. | Section 3.3 |
| (e) Redirects to the production domain? | No. Single 200 response per URL, no Location header. | Section 3.2 |
| robots.txt references | Production domain only (Sitemap line). Disallow only /api/. Not a block on the pages.dev host. | Section 3.3 |
| sitemap.xml references | Production domain only. 135 loc entries, all https://redcarpetplumbing.com. 17985 bytes, same size as production. | Section 3.3 |
| Missing path behavior | /nonexistent-test-path/ on pages.dev returned 404. | Section 3.3 |

Production domain, for comparison: same 200 responses, no X-Robots-Tag, no redirect, no Link canonical (Section 3.1).

## 4. Part 3: recommended fix (list only, not applied)

Documentation used (fetched 2026-10-28):
- Headers: https://developers.cloudflare.com/pages/configuration/headers/
- Redirects: https://developers.cloudflare.com/pages/configuration/redirects/
- Preview deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Redirecting *.pages.dev to a Custom Domain: https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/ (found by search; the page body itself was not fetched, only the search summary was read, so its details are UNVERIFIED beyond that summary)

### Option 1: _headers rule scoped to the pages.dev host. APPLIES. Recommended.

- What it changes: adds X-Robots-Tag: noindex to responses served from pages.dev hostnames only.
- Files: new file public/_headers (copied into out/_headers by the static export). Nothing else.
- Syntax verified against the Headers page. Quoted from the docs: "absolute URLs must begin with `https` and specifying a port is not supported", "A placeholder can be defined with `:placeholder_name`", and the documented example block:

```text
https://:project.pages.dev/*
	X-Robots-Tag: noindex

https://:version.:project.pages.dev/*
	X-Robots-Tag: noindex
```

  The docs place this example under a heading that says "workers.dev" while the rules target pages.dev; the page body is about pages.dev, so I treated the heading as a typo. That is a doc oddity, not something I could resolve.
- Would it apply to redcarpetplumbing.com? Based on the syntax, no: the rule is an absolute URL whose host must match `:project.pages.dev`, so a request to the custom domain does not match. The docs show custom-domain rules the same way (`https://custom.domain/secure/page`), which supports host matching but is not an explicit statement that pages.dev rules skip custom domains. Treat as supported by syntax, UNVERIFIED by explicit doc text, and confirm by curl after deploy (steps below).
- Limits and caveats from the docs: _headers is not applied to responses generated by Pages Functions (so /api/lead is unaffected; it is not an indexing concern). The rule needs pages.dev to be crawlable: do not add a robots.txt Disallow for pages.dev, because crawlers must fetch a page to see its noindex header. The `:project` placeholder must match the real project subdomain; the host shown in the repo is red-carpet-plumbing-site (UNVERIFIED that the Cloudflare project name equals this exactly).
- Risk: low if scoped correctly. High-impact failure mode: a rule that matches the production host would noindex the whole site, so the post-deploy curl check on production is mandatory. Rollback is deleting public/_headers and redeploying. Adding the file is a new config file and needs your approval under CLAUDE.md.
- Preserves staging review at the pages.dev URL.

### Option 2: redirect pages.dev to the production domain. APPLIES, but not in _redirects.

- Redirects page, quoted: source is "A file path", and the advanced-redirects table lists "Domain-level redirects" as unsupported, so the repo's _redirects file cannot redirect the pages.dev hostname. The destination may be "A file path or external link", which does not change that the source is path-only. The docs also state "You cannot proxy external domains."
- The how-to page found by search says the documented route is Cloudflare Bulk Redirects, with the custom domain listed under the project Custom domains tab and a 301 from the pages.dev source. UNVERIFIED in detail (page body not read). Whether a single Redirect Rule in the zone can also cover the pages.dev host was not confirmed by any page I found.
- Files: none in the repo. Dashboard change only.
- Risk: medium. It also removes the ability to review the site, test the lead form against the preview host (LEAD_ALLOWED_ORIGINS, crm-form-wiring-report.md:70, 570), and check builds at the pages.dev URL, since every request would leave for production. A redirect would also only help for the production-branch pages.dev host, not hash preview URLs.

### Option 3: absolute canonicals to production. ALREADY IN PLACE.

- Verified in Part 1: 135 canonical literals in source, 135 production canonicals in out/, 0 pages.dev strings, and live pages.dev pages return production canonicals. No change needed.
- Limit: a canonical is a hint. It does not stop the pages.dev URL from being crawled or indexed, and Google can choose a different canonical. It does not make pages.dev noindex.

### Option 4: preview deployment URLs (hash.project.pages.dev and branch URLs). INFORMATIONAL.

- Documented default, quoted from the Preview deployments page: each preview "includes the X-Robots-Tag: noindex HTTP response header". Also: "By default, these deployment URLs are public", and access policy "will only protect your preview deployments... and not your `*.pages.dev` domain or custom domain."
- So the stock behavior is noindex for previews, but the main project host (red-carpet-plumbing-site.pages.dev), which is what I tested, sends no such header. That matches the live result.
- Can the live check confirm the preview default? No. I have no hash or branch URL, none is documented in the repo, and I did not guess one. UNVERIFIED. To verify: provide a preview deployment URL and run curl -sI against it. UNVERIFIED too: whether the unique hash URL of a production-branch deployment carries noindex (the docs text is about preview deployments).
- If Option 1 is added with both documented rule blocks, the second block (`https://:version.:project.pages.dev/*`) would also cover hash URLs.

### Option 5: Google Search Console actions the owner can take manually (list only)

1. Check whether any pages.dev URL is indexed at all (a site:red-carpet-plumbing-site.pages.dev search, or the URL Inspection tool). This decides how urgent the rest is. I did not run this; it is UNVERIFIED.
2. Confirm that only the production property (redcarpetplumbing.com) is verified in the owner's account, and see whether a pages.dev property has been added. The same google-site-verification tag is served on pages.dev (Section 2.5), so a pages.dev property could already verify.
3. If pages.dev URLs are indexed, use the Removals tool for a temporary removal of the pages.dev URL prefix, after the noindex header from Option 1 is live. Which verification method Search Console will accept for a pages.dev property, and the removal duration, are UNVERIFIED because I did not fetch Search Console documentation.
4. Do not request removal of any redcarpetplumbing.com URL.

### Recommendation

Use Option 1 together with Option 3 (already done) and the manual checks in Option 5. A host-scoped noindex header removes the indexing risk on pages.dev, keeps the pages.dev URL usable for staging and lead-form testing, and does not touch production if the host pattern is right. Do not use Option 2 unless you no longer need pages.dev for review, since a redirect ends that and needs dashboard work outside the repo. Do not add a robots.txt Disallow for pages.dev: the same robots.txt file is served on both hosts and a Disallow would also block production, and it would stop crawlers seeing the noindex.

Order of changes:
1. Owner checks Search Console (Option 5, items 1 and 2) to see whether pages.dev URLs are already indexed. No deploy needed.
2. Add public/_headers with the two host-scoped blocks (needs approval), build, deploy.
3. Verify production is untouched. Expect no output for the header, and 200:
   `curl -sI https://redcarpetplumbing.com/ | grep -i x-robots-tag`
   `curl -sI https://redcarpetplumbing.com/drain-cleaning/ | grep -i x-robots-tag`
   Also confirm /_headers is not served as a normal page and that production robots meta is unchanged.
4. Verify pages.dev now sends the header. Expect X-Robots-Tag: noindex:
   `curl -sI https://red-carpet-plumbing-site.pages.dev/ | grep -i x-robots-tag`
   `curl -sI https://red-carpet-plumbing-site.pages.dev/drain-cleaning/ | grep -i x-robots-tag`
5. Verify a preview or hash URL once one exists (provide it): same curl, expect X-Robots-Tag: noindex.
6. If pages.dev URLs were indexed, file the Search Console removal (Option 5, item 3) after step 4 passes, then re-check later.
7. Stop and re-run the live header check if anything differs.

## 5. UNVERIFIED items and questions for Sedrick

1. UNVERIFIED: whether Google or Bing has indexed any pages.dev URL. Needs Search Console or a search query.
2. UNVERIFIED: that the Cloudflare project name equals red-carpet-plumbing-site (the `:project` placeholder depends on it). Needs the Cloudflare Pages project name.
3. UNVERIFIED: explicit doc text that a pages.dev-scoped _headers rule does not apply to a custom domain. Supported by syntax and confirmable by the post-deploy curl on production.
4. UNVERIFIED: preview default noindex on real hash and branch URLs (docs say yes; no URL available to test).
5. UNVERIFIED: the Redirecting *.pages.dev to a Custom Domain page body and whether a single Redirect Rule can cover pages.dev. Only a search summary was read.
6. UNVERIFIED: Search Console Removals tool behavior and verification options (no docs fetched).
7. Not investigated: why 16 pages lack an og:url tag (noted in Section 2.2, unrelated to pages.dev).
8. Question: do you still need the pages.dev URL for staging and lead-form review (this decides Option 1 versus Option 2)?
9. Question: may I plan public/_headers (Option 1) as the next gate?
