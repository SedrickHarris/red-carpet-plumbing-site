# Live Header Check (Gate 1, Read Only)

Date: 2026-10-28 (server Date header 22:00 GMT). Local HEAD: 948771f. No repo file was changed except this report. Nothing was committed or pushed.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, the Report-To header value (a Cloudflare NEL endpoint URL containing an account token) was replaced by "[cf-nel endpoint token omitted]", and my own label lines that began with three hyphens were rewritten as "[label]". Nothing else was altered. Every curl exit code is shown.

## 1. Summary

The shell reached external hosts, so the checks ran. Production (redcarpetplumbing.com) and the preview domain (red-carpet-plumbing-site.pages.dev) both returned HTTP 200 on all 10 URLs with no redirects. No X-Robots-Tag header was found on any of the 20 responses. Live robots meta and canonical tags match the local out/ audit: / is index, follow with a self canonical, and /thank-you/ is noindex, nofollow with no canonical. The preview domain is publicly reachable and serves indexable pages (index, follow or no robots tag, no header block), but every preview page canonical points to the production URL, so it is a canonical-mitigated duplicate, not a noindex one.

## 2. Inputs

- Production domain: https://redcarpetplumbing.com (from noindex-audit-report.md, sitemap and robots.txt).
- Preview domain: documented in the repo as red-carpet-plumbing-site.pages.dev at docs/site-os/page-inventory.md lines 49 and 99 (also referenced at crm-form-wiring-report.md:570 and implementation-log.md:706). The URL was used as documented, not guessed. UNVERIFIED: that the Cloudflare project still uses this exact subdomain and that it is the only alias; the response proves the host exists and serves this site.
- Routes (all confirmed present in docs/seo/route-manifest.json, one match each): service pages /drain-cleaning/, /repiping/, /sewer-line-services/. Service-location pages /las-vegas/drain-cleaning/, /henderson/repiping/, /north-las-vegas/sewer-line-services/.

## 3. Production: curl -sIL, full raw headers and X-Robots-Tag lines

Production headers, part 1 of 4 (lines 1 to 60)

```text
##### $ curl -sIL -m 30 https://redcarpetplumbing.com/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:49 GMT
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
CF-RAY: a51d372d09b86d9b-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:49 GMT
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
CF-RAY: a51d372e4fc2a984-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /thank-you/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:50 GMT
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
cf-cache-status: MISS
```

Production headers, part 2 of 4 (lines 61 to 120)

```text
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3730781fc253-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /robots.txt:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:50 GMT
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
CF-RAY: a51d37321b860ad7-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /sitemap.xml:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:50 GMT
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
CF-RAY: a51d37335d467b7f-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /drain-cleaning/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/repiping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:50 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
```

Production headers, part 3 of 4 (lines 121 to 180)

```text
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d3734dcce9994-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /repiping/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/sewer-line-services/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:50 GMT
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
CF-RAY: a51d3735d81a69e6-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /sewer-line-services/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:51 GMT
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
CF-RAY: a51d37373f7b5f10-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /las-vegas/drain-cleaning/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/henderson/repiping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:51 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
```

Production headers, part 4 of 4 (lines 181 to 214)

```text
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51d37388f177e92-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /henderson/repiping/:
(none)

##### $ curl -sIL -m 30 https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:51 GMT
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
CF-RAY: a51d373aeb1b6c4b-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /north-las-vegas/sewer-line-services/:
(none)
```


## 4. Preview: curl -sIL, full raw headers and X-Robots-Tag lines

Preview headers, part 1 of 4 (lines 1 to 60)

```text
##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:52 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d374038800049-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:52 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d37416b240acd-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /thank-you/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:52 GMT
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
CF-RAY: a51d37428b148f16-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /robots.txt:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sitemap.xml
[exit=0]
```

Preview headers, part 2 of 4 (lines 61 to 120)

```text
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:53 GMT
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
CF-RAY: a51d3743bba109ff-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /sitemap.xml:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:53 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3744def80049-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /drain-cleaning/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/repiping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:53 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3745d9d16c4b-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /repiping/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/sewer-line-services/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:53 GMT
```

Preview headers, part 3 of 4 (lines 121 to 180)

```text
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d37470c91da94-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /sewer-line-services/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:53 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d3748683e0a01-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /las-vegas/drain-cleaning/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/henderson/repiping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:54 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d37499f5b09ff-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /henderson/repiping/:
(none)

##### $ curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/north-las-vegas/sewer-line-services/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 22:00:54 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
```

Preview headers, part 4 of 4 (lines 181 to 191)

```text
Cache-Control: public, max-age=0, must-revalidate
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51d374a9f8fac04-LAS
alt-svc: h3=":443"; ma=86400

[label] X-Robots-Tag lines for /north-las-vegas/sewer-line-services/:
(none)
```


## 5. Live HTML robots meta and canonical for / and /thank-you/

Production:

```text
##### $ curl -s -m 30 https://redcarpetplumbing.com/ | extract robots meta and canonical
[exit=0 bytes=148686]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>

##### $ curl -s -m 30 https://redcarpetplumbing.com/thank-you/ | extract robots meta and canonical
[exit=0 bytes=39069]
<meta name="robots" content="noindex, nofollow"/>
(no canonical)
<title>Thank You | Red Carpet Plumbing</title>
```

Preview:

```text
##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/ | extract robots meta and canonical
[exit=0 bytes=145686]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/"/>
<title>Plumbing Company in Las Vegas, NV | Red Carpet Plumbing</title>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/ | extract robots meta and canonical
[exit=0 bytes=36981]
<meta name="robots" content="noindex, nofollow"/>
(no canonical)
<title>Thank You | Red Carpet Plumbing</title>
```

Local out/ copy (Appendix C of noindex-audit-report.md): / is index, follow with canonical https://redcarpetplumbing.com/, and /thank-you/ is noindex, nofollow with no canonical. Live matches local on both pages, on both hosts.

## 6. Robots and canonical for the six sample pages, both hosts

```text
##### $ curl -s -m 30 https://redcarpetplumbing.com/drain-cleaning/ | extract robots meta and canonical
[exit=0 bytes=180172]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/drain-cleaning/"/>

##### $ curl -s -m 30 https://redcarpetplumbing.com/repiping/ | extract robots meta and canonical
[exit=0 bytes=185873]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/repiping/"/>

##### $ curl -s -m 30 https://redcarpetplumbing.com/sewer-line-services/ | extract robots meta and canonical
[exit=0 bytes=183226]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/sewer-line-services/"/>

##### $ curl -s -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/ | extract robots meta and canonical
[exit=0 bytes=133096]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>

##### $ curl -s -m 30 https://redcarpetplumbing.com/henderson/repiping/ | extract robots meta and canonical
[exit=0 bytes=158095]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/henderson/repiping/"/>

##### $ curl -s -m 30 https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/ | extract robots meta and canonical
[exit=0 bytes=115355]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/drain-cleaning/ | extract robots meta and canonical
[exit=0 bytes=176884]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/drain-cleaning/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/repiping/ | extract robots meta and canonical
[exit=0 bytes=182585]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/repiping/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/sewer-line-services/ | extract robots meta and canonical
[exit=0 bytes=179938]
(no robots meta)
<link rel="canonical" href="https://redcarpetplumbing.com/sewer-line-services/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/las-vegas/drain-cleaning/ | extract robots meta and canonical
[exit=0 bytes=130240]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/henderson/repiping/ | extract robots meta and canonical
[exit=0 bytes=155047]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/henderson/repiping/"/>

##### $ curl -s -m 30 https://red-carpet-plumbing-site.pages.dev/north-las-vegas/sewer-line-services/ | extract robots meta and canonical
[exit=0 bytes=112547]
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/"/>
```

The three service pages have no robots tag (default indexable) and the three service-location pages have index, follow. This matches the local audit. Every canonical is the production URL, including on the pages.dev host.

## 7. robots.txt, sitemap, and content comparison

- /robots.txt on both hosts returned identical content: Allow /, Disallow /api/, and a Sitemap line pointing at https://redcarpetplumbing.com/sitemap.xml.
- /sitemap.xml on both hosts: 17985 bytes, 135 loc entries, all 135 on the production host. This matches the 135 URLs in the local out/sitemap.xml.
- Production homepage is 148686 bytes and preview homepage is 145686 bytes. A diff shows the 3000 byte difference comes from production script tags carrying an added type prefix like type="744487deff8b06ba0b405bb5-text/javascript". This is consistent with Cloudflare Rocket Loader rewriting scripts on the production zone. That cause is inferred from the pattern (UNVERIFIED in Cloudflare settings). It does not touch robots or canonical tags.
- Preview homepage vs local out/index.html: same length, differing only in one CSS chunk filename hash (00gd~gxim5o3a.css live vs 0cul2kygi.zg4.css local). All 40 JS chunk URLs on the preview exist in the local build.

## 8. Findings

| Question | Answer | Basis |
|-|-|-|
| Does the preview domain serve indexable duplicate content? | Yes, with a mitigation. Pages return 200 and carry index, follow or no robots tag. Each canonical points to the production URL. | Sections 4 to 6 |
| Is any X-Robots-Tag header present anywhere? | No. 0 of 20 responses (10 URLs on each host). | Sections 3 and 4 |
| Does a canonical-only setup fully prevent preview indexing? | UNVERIFIED. A canonical is a hint, not a directive. Whether Google has indexed any pages.dev URL needs Search Console or a site: query. | Not checkable from the shell |
| Does /thank-you/ stay noindex live? | Yes on both hosts, noindex, nofollow. | Section 5 |
| Do live pages match the local audit? | Yes for robots and canonical on all 8 pages fetched per host. | Sections 5 and 6 |

## 9. UNVERIFIED and open questions for Sedrick

1. UNVERIFIED: whether Google or Bing has indexed any pages.dev URL.
2. UNVERIFIED: other Cloudflare Pages aliases (per-deployment hash URLs and branch aliases). Only the one documented host was tested.
3. UNVERIFIED: Cloudflare dashboard settings (Rocket Loader, Transform Rules, Access policies). Only response headers were observed.
4. Only 8 pages per host had their HTML checked; headers were checked on 10 URLs per host.
5. Question: do you want pages.dev blocked from indexing? That is covered by the separate pages.dev indexing check and needs approval before any change.
