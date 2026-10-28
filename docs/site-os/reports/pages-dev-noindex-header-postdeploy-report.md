# Pages.dev Noindex Header (Post-Deploy Verification, Read Only)

Date: 2026-10-28. Commit under test: 792bba2 (Add noindex header for pages.dev hosts), pushed to origin/main. No repo file was changed and nothing was committed by this check. Only this report was created.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, the Cloudflare Report-To value (contains an account token) is replaced by "[cf-nel endpoint token omitted]". Nothing else was altered.

## 1. Verdict

PRODUCTION SAFE: none of the 6 production responses (and the www host) carries an X-Robots-Tag header, and production robots meta and canonical tags match the noindex audit baseline.

PAGES.DEV NOINDEXED: all 6 checked pages.dev responses return HTTP 200 with `x-robots-tag: noindex`, and pages.dev canonicals still point to https://redcarpetplumbing.com. The rule is live and was already live on the first poll (22:47:08Z).

## 2. Step 0: wait for the deploy

The poll ran curl -sI against https://red-carpet-plumbing-site.pages.dev/ every 30 seconds, up to 10 minutes. The header appeared on poll 1, so polling stopped after one request.

Poll log, part 1 of 1 (lines 1 to 20)

```text
##### poll 1 at 22:47:08Z: curl -sI -m 30 https://red-carpet-plumbing-site.pages.dev/
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:09 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7b0a1c338b77-LAS
alt-svc: h3=":443"; ma=86400

[curl exit=0]

FOUND x-robots-tag at poll 1
DONE after 1 polls
```


## 3. Step 1: production headers (critical), full raw output

Routes used from docs/seo/route-manifest.json: service page /drain-cleaning/ and service-location page /las-vegas/drain-cleaning/ (both present, checked earlier in the session).

Production headers, part 1 of 3 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://redcarpetplumbing.com/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:22 GMT
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
CF-RAY: a51d7b5f2f988b77-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:23 GMT
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
CF-RAY: a51d7b61bc3da984-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:23 GMT
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
CF-RAY: a51d7b650cdcb82d-LAS
```

Production headers, part 2 of 3 (lines 61 to 120)

```text
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:24 GMT
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
CF-RAY: a51d7b685a3ba982-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:24 GMT
Content-Type: application/xml
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "f594cb85d9dc35e7cfe450eebb9ee918"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d7b6a5be5933b-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:25 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
```

Production headers, part 3 of 3 (lines 121 to 135)

```text
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d7b6c8eb8933b-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 
```


### 3.1 www host

The www host resolves. It returned HTTP 200 with the same content and no redirect (no Location header), and no X-Robots-Tag header.

www headers, part 1 of 1 (lines 1 to 18)

```text
$ nslookup/curl www.redcarpetplumbing.com
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:25 GMT
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
CF-RAY: a51d7b701900da94-LAS
alt-svc: h3=":443"; ma=86400

[exit=0]
```


## 4. Step 2: production metadata versus baseline

Baseline sources: noindex-audit-report.md (Appendix C) and live-header-check.md. Baseline values: / is `index, follow` with canonical https://redcarpetplumbing.com/; /drain-cleaning/ has no robots tag and canonical https://redcarpetplumbing.com/drain-cleaning/; /las-vegas/drain-cleaning/ is `index, follow` with its own self canonical.

Production bodies, part 1 of 1 (lines 1 to 24)

```text
##### curl -s -m 30 https://redcarpetplumbing.com/
[exit=0 bytes=148686]
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>

##### curl -s -m 30 https://redcarpetplumbing.com/drain-cleaning/
[exit=0 bytes=180172]
<title>Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing</title>
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/drain-cleaning/"/>

##### curl -s -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0 bytes=133096]
<title>Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>

##### www host body check
##### curl -s -m 30 https://www.redcarpetplumbing.com/
[exit=0 bytes=148686]
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>
```


All three match the baseline. The production homepage is 148686 bytes, the same size measured before the deploy (live-header-check.md). The www host serves the homepage with canonical https://redcarpetplumbing.com/ (the apex), the same bytes as production, with no noindex. That was not part of the earlier audit scope and is reported as an observation only (Section 8).

## 5. Step 3: pages.dev headers, full raw output

pages.dev headers, part 1 of 3 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:37 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7bba1e4a7b7f-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:37 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7bbc6c7909ff-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:38 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7bbefc1c0acd-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
```

pages.dev headers, part 2 of 3 (lines 61 to 120)

```text
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:38 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7bc10f8aa3fd-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:38 GMT
Content-Type: text/plain; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "a09404f41a0425c57e78677d98a3141e"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d7bc36f1b5808-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:47:39 GMT
Content-Type: application/xml
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "f594cb85d9dc35e7cfe450eebb9ee918"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-robots-tag: noindex
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
```

pages.dev headers, part 3 of 3 (lines 121 to 127)

```text
Server: cloudflare
CF-RAY: a51d7bc59d28b171-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex
```


### 5.1 pages.dev HTML: title, robots meta, canonical

pages.dev bodies, part 1 of 1 (lines 1 to 23)

```text
##### curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/
[exit=0 bytes=145686]
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>

##### curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
[exit=0 bytes=36981]
<title>Thank You | Red Carpet Plumbing</title>
<meta name="robots" content="noindex, nofollow"/>
(no canonical)

##### curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/
[exit=0 bytes=176884]
<title>Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing</title>
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/drain-cleaning/"/>

##### curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/
[exit=0 bytes=130240]
<title>Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing</title>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>
```


Canonicals on pages.dev still point to https://redcarpetplumbing.com for /, /drain-cleaning/ and /las-vegas/drain-cleaning/. /thank-you/ has no canonical (same as the baseline). The homepage size (145686 bytes) is unchanged from the earlier pages.dev measurement.

## 6. Pass or fail table

| Check | Host | URL | Result |
|-|-|-|-|
| No X-Robots-Tag header | redcarpetplumbing.com | / | PASS (200, no header) |
| No X-Robots-Tag header | redcarpetplumbing.com | /drain-cleaning/ | PASS |
| No X-Robots-Tag header | redcarpetplumbing.com | /las-vegas/drain-cleaning/ | PASS |
| No X-Robots-Tag header | redcarpetplumbing.com | /robots.txt | PASS |
| No X-Robots-Tag header | redcarpetplumbing.com | /sitemap.xml | PASS |
| No X-Robots-Tag header | redcarpetplumbing.com | /thank-you/ | PASS |
| No X-Robots-Tag header, no redirect | www.redcarpetplumbing.com | / | PASS (200, no header, no redirect) |
| Production metadata unchanged | redcarpetplumbing.com | / | PASS (index, follow, self canonical) |
| Production metadata unchanged | redcarpetplumbing.com | /drain-cleaning/ | PASS (no robots tag, self canonical) |
| Production metadata unchanged | redcarpetplumbing.com | /las-vegas/drain-cleaning/ | PASS (index, follow, self canonical) |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | / | PASS |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | /thank-you/ | PASS |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | /drain-cleaning/ | PASS |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | /las-vegas/drain-cleaning/ | PASS |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | /robots.txt | PASS |
| x-robots-tag: noindex present | red-carpet-plumbing-site.pages.dev | /sitemap.xml | PASS |
| pages.dev status stays 200, no redirect | red-carpet-plumbing-site.pages.dev | all 6 | PASS |
| pages.dev canonicals point to production | red-carpet-plumbing-site.pages.dev | /, /drain-cleaning/, /las-vegas/drain-cleaning/ | PASS |

## 7. UNVERIFIED items

1. Hash URLs (and branch alias URLs): the second rule (https://:version.:project.pages.dev/*) cannot be tested without a real deployment hash URL. None is documented in the repo and none was guessed. Cloudflare docs say preview deployments already carry noindex by default, so a header there would not prove the rule. UNVERIFIED. To verify, give a hash URL and run curl -sI against it.
2. That the production custom domain is served by the same deployment that carries out/_headers. pages.dev shows the header, and production HTML sizes are unchanged, which is consistent, but the Cloudflare dashboard was not seen.
3. Whether the poll saw an old or a new deployment: the header was already present at the first poll, so the exact deploy time is unknown. The header's presence on pages.dev (it was absent in the checks before the push) shows the new deployment is live.
4. Search engine behavior: noindex only takes effect after crawlers recrawl pages.dev. Whether any pages.dev URL was ever indexed remains UNVERIFIED (needs Search Console).
5. Cloudflare Rocket Loader and other zone features were not examined (unchanged from the earlier report).

## 8. Observations (no action taken)

- www.redcarpetplumbing.com serves the full site with HTTP 200 and no redirect to the apex. Its canonical points to https://redcarpetplumbing.com/ and it has no noindex. This is a possible duplicate host mitigated by canonical only. It is outside this task and no change is proposed here.

## 9. Final git status

Printed raw in the chat reply that accompanies this report.
