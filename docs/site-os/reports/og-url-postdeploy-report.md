# og Tags and www Redirect (Post-Deploy Verification, Read Only)

Date: 2026-10-28 (server Date header around 23:3x GMT). Commit under test: 9aab339 (Add og:url, og:site_name and og:type to 12 service pages), on origin/main. No repo file was changed and nothing was committed, staged, or pushed by this check. Only this report was created.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, the Cloudflare Report-To value (contains an account token) is replaced by "[cf-nel endpoint token omitted]", and any double hyphen shows as [dbl-hyphen]. Nothing else was altered.

## 1. Verdict

- PRODUCTION SAFE: all 8 production URLs checked return HTTP 200 with no X-Robots-Tag header, and no www response carries one.
- OG TAGS LIVE ON ALL 12: all 12 pages show og:url (equal to the canonical), og:site_name Red Carpet Plumbing, and og:type website on production. Canonicals and robots meta match the noindex audit baseline (no robots meta tag on these 12, canonical is the page's own production URL). The 3 pages that already had og:url match the local out/ build exactly.
- WWW REDIRECT CORRECT ON ALL TESTED URLS: all 7 https www URLs return a single 301 to the same path on https://redcarpetplumbing.com with the query string kept (including /sitemap.xml and /robots.txt). http://www goes 301 to https://www, then 301 to the apex, then 200. http://redcarpetplumbing.com goes 301 to https and 200. The apex URL returns 200 with no loop.
- PAGES.DEV STILL NOINDEXED: 4 of 4 URLs return 200 with x-robots-tag: noindex. The /about/ HTML there has the three new tags and a canonical pointing to redcarpetplumbing.com.
- SITEMAP: 135 loc entries, all beginning with https://redcarpetplumbing.com, none with www. or pages.dev.

One note on my own tooling: my first analysis run marked the www rows FAIL because of a bug in my script (it counted the Location header name as part of the value). The raw headers were already correct. I fixed the script and re-ran it; the results above and the tables below are from the corrected run. The raw headers in Section 5 are unchanged.

## 2. Step 0: commit deployed (raw)

Step 0, part 1 of 2 (lines 1 to 60)

```text
$ git fetch origin
[exit=0]

$ git log origin/main -5 [dbl-hyphen]stat
commit 9aab33955ff7541a87a4ac9d080b8ccca9ea4b4d
Author: SedrickHarris <sedrickharris17@gmail.com>
Date:   Wed Oct 28 16:22:53 2026 -0700

    Add og:url, og:site_name and og:type to 12 service pages
    
    Add the missing url, siteName and type properties to the openGraph block
    of 12 pages. Each url equals the page's existing canonical. No other
    metadata, schema, canonical, robots, or visible content changed.
    

 app/about/page.tsx                                            | 3 +++
 app/backflow-prevention/page.tsx                              | 3 +++
 app/commercial-plumbing/page.tsx                              | 3 +++
 app/faucet-sink-repair-installation/page.tsx                  | 3 +++
 app/garbage-disposal-repair-installation/page.tsx             | 3 +++
 app/gas-line-plumbing/page.tsx                                | 3 +++
 app/plumbing-fixture-repair-replacement-installation/page.tsx | 3 +++
 app/toilet-repair-installation/page.tsx                       | 3 +++
 app/trenchless-piping/page.tsx                                | 3 +++
 app/video-camera-plumbing-inspections/page.tsx                | 3 +++
 app/water-meter-pressure-regulator-services/page.tsx          | 3 +++
 app/water-pipe-repair-replacement/page.tsx                    | 3 +++
 12 files changed, 36 insertions(+)

commit a259d5db2f1c4f5f50145822d21d492383f0d35a
Author: SedrickHarris <sedrickharris17@gmail.com>
Date:   Wed Oct 28 15:49:52 2026 -0700

    Track noindex and pages.dev audit reports
    
    Add the noindex audit, live header check, pages.dev indexing report,
    Gate 2 plan, Gate 3 report, post-deploy verification report, metadata
    length audit, and the C-1 removal plan to docs/site-os/reports.
    

 docs/site-os/reports/live-header-check.md          |  593 ++++
 docs/site-os/reports/metadata-length-audit.csv     |  135 +
 docs/site-os/reports/metadata-length-audit.md      |  637 ++++
 docs/site-os/reports/noindex-audit-report.md       | 1713 +++++++++++
 docs/site-os/reports/pages-dev-indexing-report.md  |  658 +++++
 .../reports/pages-dev-noindex-header-gate2-plan.md |  410 +++
 .../pages-dev-noindex-header-gate3-report.md       | 3045 ++++++++++++++++++++
 .../pages-dev-noindex-header-postdeploy-report.md  |  477 +++
 docs/site-os/reports/remove-c1-gate2-plan.md       | 1103 +++++++
 9 files changed, 8771 insertions(+)

commit 792bba25c87c6269c92268b21ab657deef2655df
Author: SedrickHarris <sedrickharris17@gmail.com>
Date:   Wed Oct 28 15:38:55 2026 -0700

    Add noindex header for pages.dev hosts
    
    Add public/_headers with host-scoped X-Robots-Tag: noindex rules for the
```

Step 0, part 2 of 2 (lines 61 to 111)

```text
    pages.dev project host and its deployment hash hosts. The production
    domain is not matched by either rule. Canonicals and all page metadata
    are unchanged.
    

 public/_headers | 5 +++++
 1 file changed, 5 insertions(+)

commit 948771f750a7c94a6d2df7fed2e0cc8b73537868
Author: SedrickHarris <sedrickharris17@gmail.com>
Date:   Tue Oct 13 20:07:22 2026 -0700

    seo: omit sitemap lastmod when git history is shallow
    

 app/sitemap.ts | 33 +++++++++++++++++++++++++++++[dbl-hyphen][dbl-hyphen]
 1 file changed, 29 insertions(+), 4 deletions(-)

commit 0bf222bdca9ca025150b1c03c346092d82f00c46
Author: SedrickHarris <sedrickharris17@gmail.com>
Date:   Tue Oct 13 19:58:27 2026 -0700

    feat: add HTML sitemap page at /sitemap/ and footer link
    

 app/sitemap/page.tsx         | 202 +++++++++++++++++++++++++++++++++++++
 components/SiteFooter.tsx    |   8 +-
 docs/seo/route-manifest.json |  22 +++-
 lib/sitemap-page-data.ts     | 235 +++++++++++++++++++++++++++++++++++++++++++
 4 files changed, 465 insertions(+), 2 deletions(-)

$ git show [dbl-hyphen]name-only [dbl-hyphen]format= 9aab339 (files in the og commit)
app/about/page.tsx
app/backflow-prevention/page.tsx
app/commercial-plumbing/page.tsx
app/faucet-sink-repair-installation/page.tsx
app/garbage-disposal-repair-installation/page.tsx
app/gas-line-plumbing/page.tsx
app/plumbing-fixture-repair-replacement-installation/page.tsx
app/toilet-repair-installation/page.tsx
app/trenchless-piping/page.tsx
app/video-camera-plumbing-inspections/page.tsx
app/water-meter-pressure-regulator-services/page.tsx
app/water-pipe-repair-replacement/page.tsx

$ poll 1 (first poll, run before the other checks): curl -s https://redcarpetplumbing.com/about/ | grep og:url
<meta property="og:url" content="https://redcarpetplumbing.com/about/"/>
(The tag was present on the first poll, so no 30 second wait loop was needed.)
```


The commit touches exactly the 12 files listed in docs/site-os/reports/og-url-gate3-report.md. The tag was present on the first poll, so no wait loop was needed. The exact time the deploy finished is UNVERIFIED (the first poll already showed the tag).

## 3. Step 1: production headers (raw, run first)

PASS criterion: HTTP 200 and no X-Robots-Tag on every response. Routes chosen from docs/seo/route-manifest.json and not among the 12: service page /drain-cleaning/, service-location page /las-vegas/drain-cleaning/.

Step 1 headers, part 1 of 3 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://redcarpetplumbing.com/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:41 GMT
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
CF-RAY: a51dc512af8bac04-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/about/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:42 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-wide.webp>; rel="preload"; as=image
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc5159e9c4320-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/trenchless-piping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:42 GMT
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
```

Step 1 headers, part 2 of 3 (lines 61 to 120)

```text
CF-RAY: a51dc5177a93c253-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:42 GMT
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
CF-RAY: a51dc51addb54320-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:43 GMT
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
CF-RAY: a51dc51cc9050acf-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/robots.txt
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:43 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 91
Connection: keep-alive
x-content-type-options: nosniff
Report-To: [cf-nel endpoint token omitted]
```

Step 1 headers, part 3 of 3 (lines 121 to 180)

```text
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=14400, must-revalidate
ETag: "a09404f41a0425c57e78677d98a3141e"
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
Accept-Ranges: bytes
cf-cache-status: REVALIDATED
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc51fdf899994-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/sitemap.xml
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:44 GMT
Content-Type: application/xml
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
ETag: "67c70bd07cf63fe9f9c5ec3647f4d76e"
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc521bf1d31ad-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 

##### curl -sIL -m 30 https://redcarpetplumbing.com/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:44 GMT
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
CF-RAY: a51dc5241e4e1912-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 
```


Result: 8 of 8 responses are HTTP 200 with a single response and no X-Robots-Tag (0 header lines found in the raw output).

## 4. Step 2: the 12 pages on production (raw and table)

Step 2 raw tag lines, part 1 of 2

```text
##### STEP 2 raw tag lines per page (live production HTML via curl -s)

== https://redcarpetplumbing.com/about/  (bytes 98155)
  <meta property="og:url" content="https://redcarpetplumbing.com/about/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/about/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/backflow-prevention/  (bytes 178537)
  <meta property="og:url" content="https://redcarpetplumbing.com/backflow-prevention/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/backflow-prevention/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/commercial-plumbing/  (bytes 176278)
  <meta property="og:url" content="https://redcarpetplumbing.com/commercial-plumbing/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/commercial-plumbing/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/faucet-sink-repair-installation/  (bytes 178813)
  <meta property="og:url" content="https://redcarpetplumbing.com/faucet-sink-repair-installation/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/faucet-sink-repair-installation/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/garbage-disposal-repair-installation/  (bytes 178806)
  <meta property="og:url" content="https://redcarpetplumbing.com/garbage-disposal-repair-installation/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/garbage-disposal-repair-installation/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/gas-line-plumbing/  (bytes 171485)
  <meta property="og:url" content="https://redcarpetplumbing.com/gas-line-plumbing/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/gas-line-plumbing/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/  (bytes 180034)
  <meta property="og:url" content="https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/toilet-repair-installation/  (bytes 175399)
  <meta property="og:url" content="https://redcarpetplumbing.com/toilet-repair-installation/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/toilet-repair-installation/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/trenchless-piping/  (bytes 177554)
  <meta property="og:url" content="https://redcarpetplumbing.com/trenchless-piping/"/>
```

Step 2 raw tag lines, part 2 of 2

```text
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/trenchless-piping/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/video-camera-plumbing-inspections/  (bytes 177967)
  <meta property="og:url" content="https://redcarpetplumbing.com/video-camera-plumbing-inspections/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/video-camera-plumbing-inspections/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/water-meter-pressure-regulator-services/  (bytes 182080)
  <meta property="og:url" content="https://redcarpetplumbing.com/water-meter-pressure-regulator-services/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/water-meter-pressure-regulator-services/"/>
  (no robots meta tag)

== https://redcarpetplumbing.com/water-pipe-repair-replacement/  (bytes 180949)
  <meta property="og:url" content="https://redcarpetplumbing.com/water-pipe-repair-replacement/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/water-pipe-repair-replacement/"/>
  (no robots meta tag)
```


Step 2 table, part 1 of 1

```text
##### STEP 2 table (baseline: canonical is the page's own production URL; robots meta tag absent, per noindex-audit-report.md)
| Route | og:url present | equals canonical | canonical is own production URL | og:site_name = Red Carpet Plumbing | og:type = website | robots meta unchanged vs baseline |
|-|-|-|-|-|-|-|
| /about/ | yes | yes | yes | yes | yes | yes |
| /backflow-prevention/ | yes | yes | yes | yes | yes | yes |
| /commercial-plumbing/ | yes | yes | yes | yes | yes | yes |
| /faucet-sink-repair-installation/ | yes | yes | yes | yes | yes | yes |
| /garbage-disposal-repair-installation/ | yes | yes | yes | yes | yes | yes |
| /gas-line-plumbing/ | yes | yes | yes | yes | yes | yes |
| /plumbing-fixture-repair-replacement-installation/ | yes | yes | yes | yes | yes | yes |
| /toilet-repair-installation/ | yes | yes | yes | yes | yes | yes |
| /trenchless-piping/ | yes | yes | yes | yes | yes | yes |
| /video-camera-plumbing-inspections/ | yes | yes | yes | yes | yes | yes |
| /water-meter-pressure-regulator-services/ | yes | yes | yes | yes | yes | yes |
| /water-pipe-repair-replacement/ | yes | yes | yes | yes | yes | yes |

STEP 2 (12 pages): PASS (all 12 rows pass)
```


Baseline used: noindex-audit-report.md lists all 12 pages among the 19 indexable pages with no robots meta tag and a self canonical; live matches.

Step 2b three pages that already had og:url, part 1 of 1

```text
##### STEP 2b: 3 pages that already had og:url, live versus local out/ (og and twitter tags, canonical, robots meta)
| Page | og and twitter tags equal | tag count live | tag count local | canonical equal | robots meta equal |
|-|-|-|-|-|-|
| / | yes | 18 | 18 | yes | yes |
| /drain-cleaning/ | yes | 17 | 17 | yes | yes |
| /las-vegas/drain-cleaning/ | yes | 18 | 18 | yes | yes |
STEP 2b: PASS
```


## 5. Step 3: www redirect and http chains (raw and table)

Step 3 headers, part 1 of 4 (lines 1 to 60)

```text
##### curl -sI -m 30 https://www.redcarpetplumbing.com/
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:48 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc53d69f369e6-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/ 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/about/
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:48 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/about/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc53efada09f1-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/about/ 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/drain-cleaning/
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:48 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/drain-cleaning/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc540cb010ad3-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/drain-cleaning/ 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/las-vegas/drain-cleaning/
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:49 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/las-vegas/drain-cleaning/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
```

Step 3 headers, part 2 of 4 (lines 61 to 120)

```text
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc542fc3731a9-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/las-vegas/drain-cleaning/ 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/sitemap.xml
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:49 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/sitemap.xml
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc544cf8cdd70-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/sitemap.xml 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/robots.txt
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:49 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/robots.txt
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc546cd68f317-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/robots.txt 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://www.redcarpetplumbing.com/about/?test=1
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:50 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/about/?test=1
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc548ac38da94-LAS

[responses]: HTTP/1.1 301 Moved Permanently;
[Location]: Location: https://redcarpetplumbing.com/about/?test=1 
[X-Robots-Tag]: 

##### curl -sIL -m 30 http://www.redcarpetplumbing.com/about/
```

Step 3 headers, part 3 of 4 (lines 121 to 180)

```text
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:50 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://www.redcarpetplumbing.com/about/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc54a4fd609f7-LAS
alt-svc: h3=":443"; ma=86400

HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:50 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/about/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Reporting-Endpoints: cf-csp-endpoint="https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=0B9sCi.wXaLjzFZ525qSvb2w9cvAYTCEzN2LaU.xOo0-1793230670.5240397-1.0.1.1-xjQl51IbAC5WkrIzYr2utiPh.Ie7GFZZe5ce_qRkPs3dwfHoYIQOyK3Pg6Uq5i1wW5PZfAnOeYrFxWbnTlBmZrTo3aBgSBaCeQy3BEWK4CA53b.qVVIukOfL5W.2c36bEHQswv9YlqgxrKvSHZ68DbofLaTg7Ja5InfRFJeH.6uHZ3JFUhVnjbuULwBKjHBZ"
Content-Security-Policy-Report-Only: script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'; report-uri https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report?m=0B9sCi.wXaLjzFZ525qSvb2w9cvAYTCEzN2LaU.xOo0-1793230670.5240397-1.0.1.1-xjQl51IbAC5WkrIzYr2utiPh.Ie7GFZZe5ce_qRkPs3dwfHoYIQOyK3Pg6Uq5i1wW5PZfAnOeYrFxWbnTlBmZrTo3aBgSBaCeQy3BEWK4CA53b.qVVIukOfL5W.2c36bEHQswv9YlqgxrKvSHZ68DbofLaTg7Ja5InfRFJeH.6uHZ3JFUhVnjbuULwBKjHBZ; report-to cf-csp-endpoint
Server: cloudflare
CF-RAY: a51dc54acaff0acf-LAS

HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:50 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-wide.webp>; rel="preload"; as=image
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc54cba610ad5-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 301 Moved Permanently;HTTP/1.1 301 Moved Permanently;HTTP/1.1 200 OK;
[Location]: Location: https://www.redcarpetplumbing.com/about/ Location: https://redcarpetplumbing.com/about/ 
[X-Robots-Tag]: 

##### curl -sIL -m 30 http://redcarpetplumbing.com/about/
[exit=0]
HTTP/1.1 301 Moved Permanently
Date: Wed, 28 Oct 2026 23:37:51 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
Location: https://redcarpetplumbing.com/about/
Speculation-Rules: "/cdn-cgi/speculation"
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a51dc54e6e665d22-LAS
```

Step 3 headers, part 4 of 4 (lines 181 to 225)

```text
alt-svc: h3=":443"; ma=86400

HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:51 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-wide.webp>; rel="preload"; as=image
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc54ed8b1933b-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 301 Moved Permanently;HTTP/1.1 200 OK;
[Location]: Location: https://redcarpetplumbing.com/about/ 
[X-Robots-Tag]: 

##### curl -sI -m 30 https://redcarpetplumbing.com/about/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:51 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Report-To: [cf-nel endpoint token omitted]
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
x-content-type-options: nosniff
Link: </images/brand/logo/red-carpet-plumbing-logo.png>; rel="preload"; as=image, </images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-wide.webp>; rel="preload"; as=image
referrer-policy: strict-origin-when-cross-origin
Server: cloudflare
cf-cache-status: DYNAMIC
Speculation-Rules: "/cdn-cgi/speculation"
CF-RAY: a51dc550b92f0ad9-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: 
```


Step 3 result table, part 1 of 1

```text
##### STEP 3 www and http results (computed from the raw headers)
| Request | Responses | Location | Expected location | Result |
|-|-|-|-|-|
| https://www.redcarpetplumbing.com/ | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/ | https://redcarpetplumbing.com/ | PASS |
| https://www.redcarpetplumbing.com/about/ | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/about/ | https://redcarpetplumbing.com/about/ | PASS |
| https://www.redcarpetplumbing.com/drain-cleaning/ | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/drain-cleaning/ | https://redcarpetplumbing.com/drain-cleaning/ | PASS |
| https://www.redcarpetplumbing.com/las-vegas/drain-cleaning/ | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/las-vegas/drain-cleaning/ | https://redcarpetplumbing.com/las-vegas/drain-cleaning/ | PASS |
| https://www.redcarpetplumbing.com/sitemap.xml | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/sitemap.xml | https://redcarpetplumbing.com/sitemap.xml | PASS |
| https://www.redcarpetplumbing.com/robots.txt | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/robots.txt | https://redcarpetplumbing.com/robots.txt | PASS |
| https://www.redcarpetplumbing.com/about/?test=1 | HTTP/1.1 301 Moved Permanently; | https://redcarpetplumbing.com/about/?test=1 | https://redcarpetplumbing.com/about/?test=1 | PASS |
| http://www.redcarpetplumbing.com/about/ | HTTP/1.1 301 Moved Permanently;HTTP/1.1 301 Moved Permanently;HTTP/1.1 200 OK; | https://www.redcarpetplumbing.com/about/ Location: https://redcarpetplumbing.com/about/ | chain ends at https://redcarpetplumbing.com/about/ with 200 | PASS |
| http://redcarpetplumbing.com/about/ | HTTP/1.1 301 Moved Permanently;HTTP/1.1 200 OK; | https://redcarpetplumbing.com/about/ | chain ends at https://redcarpetplumbing.com/about/ with 200 | PASS |
| https://redcarpetplumbing.com/about/ | HTTP/1.1 200 OK; | (none) | 200, no Location | PASS |

STEP 3: PASS (X-Robots-Tag lines in step 3 raw output: 0)
```


## 6. Step 4: pages.dev (raw and table)

Step 4 headers, part 1 of 2 (lines 1 to 60)

```text
##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:51 GMT
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
CF-RAY: a51dc552ade20ad5-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/about/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:52 GMT
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
CF-RAY: a51dc5546995cd56-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/trenchless-piping/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:52 GMT
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
CF-RAY: a51dc55609931912-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
```

Step 4 headers, part 2 of 2 (lines 61 to 83)

```text
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex

##### curl -sIL -m 30 https://red-carpet-plumbing-site.pages.dev/thank-you/
[exit=0]
HTTP/1.1 200 OK
Date: Wed, 28 Oct 2026 23:37:52 GMT
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
CF-RAY: a51dc55809166d9b-LAS
alt-svc: h3=":443"; ma=86400

[responses]: HTTP/1.1 200 OK;
[Location]: 
[X-Robots-Tag]: x-robots-tag: noindex
```


Step 4 result, part 1 of 1

```text
##### STEP 4 pages.dev
| URL | Responses | x-robots-tag | Result |
|-|-|-|-|
| https://red-carpet-plumbing-site.pages.dev/ | HTTP/1.1 200 OK; | x-robots-tag: noindex | PASS |
| https://red-carpet-plumbing-site.pages.dev/about/ | HTTP/1.1 200 OK; | x-robots-tag: noindex | PASS |
| https://red-carpet-plumbing-site.pages.dev/trenchless-piping/ | HTTP/1.1 200 OK; | x-robots-tag: noindex | PASS |
| https://red-carpet-plumbing-site.pages.dev/thank-you/ | HTTP/1.1 200 OK; | x-robots-tag: noindex | PASS |

pages.dev /about/ HTML (raw tag lines):
  <meta property="og:url" content="https://redcarpetplumbing.com/about/"/>
  <meta property="og:site_name" content="Red Carpet Plumbing"/>
  <meta property="og:type" content="website"/>
  <link rel="canonical" href="https://redcarpetplumbing.com/about/"/>
STEP 4 headers: PASS; pages.dev /about/ three new tags and production canonical: PASS
```


## 7. Step 5: sitemap

Step 5 result, part 1 of 1

```text
##### STEP 5 sitemap
<loc> entries: 135 (expected 135)
entries not beginning with https://redcarpetplumbing.com: 0
entries containing www.: 0; containing pages.dev: 0
duplicate entries: 0
STEP 5: PASS
```


## 8. Pass or fail table

| Check | Host | URL | Result |
|-|-|-|-|
| Commit 9aab339 is on origin/main and touches only the 12 files | git origin/main | 9aab339 | PASS |
| og:url live on first poll | redcarpetplumbing.com | /about/ | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | / | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /about/ | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /trenchless-piping/ | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /drain-cleaning/ | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /las-vegas/drain-cleaning/ | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /robots.txt | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /sitemap.xml | PASS |
| HTTP 200 and no X-Robots-Tag | redcarpetplumbing.com | /thank-you/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /about/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /backflow-prevention/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /commercial-plumbing/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /faucet-sink-repair-installation/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /garbage-disposal-repair-installation/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /gas-line-plumbing/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /plumbing-fixture-repair-replacement-installation/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /toilet-repair-installation/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /trenchless-piping/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /video-camera-plumbing-inspections/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /water-meter-pressure-regulator-services/ | PASS |
| og:url, og:site_name, og:type present; og:url equals canonical; no robots meta (baseline) | redcarpetplumbing.com | /water-pipe-repair-replacement/ | PASS |
| og and twitter tags, canonical, robots meta equal local out/ | redcarpetplumbing.com | / | PASS |
| og and twitter tags, canonical, robots meta equal local out/ | redcarpetplumbing.com | /drain-cleaning/ | PASS |
| og and twitter tags, canonical, robots meta equal local out/ | redcarpetplumbing.com | /las-vegas/drain-cleaning/ | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | / | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /about/ | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /drain-cleaning/ | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /las-vegas/drain-cleaning/ | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /sitemap.xml | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /robots.txt | PASS |
| 301 to same path on the apex, query kept, no X-Robots-Tag | www.redcarpetplumbing.com | /about/?test=1 | PASS |
| Redirect chain ends at https apex with 200 (301 to https://www, 301 to apex, 200) | http://www.redcarpetplumbing.com | /about/ | PASS |
| Redirect chain ends at https apex with 200 (301 then 200) | http://redcarpetplumbing.com | /about/ | PASS |
| 200, no redirect, no loop | redcarpetplumbing.com | /about/ | PASS |
| 200 and x-robots-tag: noindex | red-carpet-plumbing-site.pages.dev | / | PASS |
| 200 and x-robots-tag: noindex | red-carpet-plumbing-site.pages.dev | /about/ | PASS |
| 200 and x-robots-tag: noindex | red-carpet-plumbing-site.pages.dev | /trenchless-piping/ | PASS |
| 200 and x-robots-tag: noindex | red-carpet-plumbing-site.pages.dev | /thank-you/ | PASS |
| Three new og tags present, canonical points to redcarpetplumbing.com | red-carpet-plumbing-site.pages.dev | /about/ | PASS |
| 135 loc entries, all begin with https://redcarpetplumbing.com | redcarpetplumbing.com | /sitemap.xml | PASS |
| No www. and no pages.dev in any loc; no duplicates | redcarpetplumbing.com | /sitemap.xml | PASS |

## 9. UNVERIFIED items

1. Hash URLs (and branch aliases) on pages.dev: the second rule in public/_headers (the :version host pattern) still cannot be tested without a real deployment hash URL. None is documented and none was guessed.
2. The time the deploy finished (the tag was live on the first poll).
3. That Cloudflare dashboard rules (including the new www to apex redirect) are as intended beyond the observed responses. The redirect is observed, not read from the dashboard, and the repo contains no redirect config.
4. Search engine and social platform behavior with the new tags (not tested).
5. Only the URLs listed above were checked. Other www URLs and the other 123 pages were not fetched live in this check.

## 10. Final git status

Printed raw in the chat reply that accompanies this report.
