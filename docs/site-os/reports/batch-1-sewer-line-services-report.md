# Batch 1 Report: Sewer Line Services in Summerlin, Spring Valley, Enterprise and Paradise

Status: built and validated locally. Not committed, not pushed, not deployed.

## Files changed

New (4): `app/{summerlin,spring-valley,enterprise,paradise}/sewer-line-services/page.tsx`

Generated (1): `docs/seo/route-manifest.json` (routeCount 115 to 119, warnings empty)

Hub href edits (4): `app/{summerlin,spring-valley,enterprise,paradise}-plumbing-services/page.tsx`

Approved sweep href edits (6 files, 7 hrefs): `summerlin/drain-cleaning` (140), `spring-valley/drain-cleaning` (137), `enterprise/drain-cleaning` (148), `paradise/drain-cleaning` (135 and 737), `paradise/commercial-plumbing` (171), `spring-valley/commercial-plumbing` (193).

## Final sweep table

| # | File | Line | Before | After | Status |
|---|---|---|---|---|---|
| 1 | summerlin/drain-cleaning | 140 | /sewer-line-services/ | /summerlin/sewer-line-services/ | applied |
| 2 | spring-valley/drain-cleaning | 137 | /sewer-line-services/ | /spring-valley/sewer-line-services/ | applied |
| 3 | enterprise/drain-cleaning | 148 | /sewer-line-services/ | /enterprise/sewer-line-services/ | applied |
| 4 | paradise/drain-cleaning | 135 | /sewer-line-services/ | /paradise/sewer-line-services/ | applied |
| 5 | paradise/drain-cleaning | 737 | /sewer-line-services/ | /paradise/sewer-line-services/ | applied |
| 6 | paradise/commercial-plumbing | 171 | /sewer-line-services/ | /paradise/sewer-line-services/ | applied |
| 7 | spring-valley/commercial-plumbing | 193 | /sewer-line-services/ | /spring-valley/sewer-line-services/ | applied |
| 8 | spring-valley/emergency-plumbing | 165 | /sewer-line-services/ | unchanged | excluded by Sedrick, revisit after launch |
| 9 | enterprise/emergency-plumbing | 175 | /sewer-line-services/ | unchanged | excluded by Sedrick, revisit after launch |

Hub cards: summerlin 106, spring-valley 114, enterprise 115, paradise 112, all repointed. Image paths untouched.

## Decisions applied (Gate 2, approved by Sedrick)

Native details/summary FAQ (no hidden attribute); arrow plus label related list with no blurbs; "Call Now: (702) 567-9172" and "Request Service" on every CTA; plain Plumber node (name, url, telephone); isPartOf copied from each city's drain page (no trailing slash, no inLanguage); final breadcrumb item carries its URL; prompt hero alt text; no em dashes in code comments.

## Deviations and risks

1. Pages were produced by a scratch generator (outside the repo) that reads the appendix text, so copy is not retyped. Output is plain page.tsx files; the generator is not part of the repo.
2. Section headings not given in the appendices were taken from the Henderson sewer page pattern: FAQ heading ("Frequently Asked Questions About Sewer Line Services in {Area}, NV") and Related heading ("Related Plumbing Services"). Please confirm or supply wording.
3. The process section and the local-cards section have no intro paragraph, because the appendices supply none.
4. Shared chrome outside page copy still contains emergency wording and links: the QuoteFormPlaceholder service dropdown lists "Emergency Plumbing", and the sitewide header and footer link to emergency pages. Not editable under this batch's file list.
5. Existing drain cleaning pages carry "Over 40 years", "4.8-star rating across 76 Google reviews", and the Paradise ctaNote carries "24/7". Not touched. Sedrick asked about a later cleanup pass.
6. Four claims still need owner sign-off before publishing (FLAG: VERIFY comments are in source only): Clark County Water Reclamation District sentences, "4.8-star rated", the license line, transparent pricing.
7. Truncated or fabricated content: none known. Appendix files B, C and D were rewritten from the pasted text into the scratchpad because the uploaded copies were removed from Temp mid-session; Appendix A was read from disk.

## Schema, metadata, alt text, headings, links

Schema: five blocks per page (WebPage, BreadcrumbList, Service, HowTo, FAQPage), HowTo and FAQPage derived from the same arrays that render the visible content. Metadata: title, description, canonical and Open Graph equal the appendix values. Alt text: "Sewer line services in {Area}, NV". Headings: one h1, h2 per section, h3 for cards, services and steps. Internal links: hub, core, video inspections, own-city pages, neighbor sewer pages; all resolved in the built HTML.

## Gate 4 raw output

### Commands

- `npx tsc --noEmit`: no output (pass). `npx eslint` on each new page: no output (pass). `npm run build`: exit 0, "OK: wrote docs/seo/route-manifest.json with 119 route(s)", 124 static pages generated.
- Manifest: routeCount 119, warnings []. New routes: /summerlin/sewer-line-services, /spring-valley/sewer-line-services, /enterprise/sewer-line-services, /paradise/sewer-line-services.
- Source grep on the four new files for the em dash, double hyphen, emergency, Emergency, 24/7, over 40, AggregateRating, PostalCodeSpecification, sameAs, LocalBusiness, hasCredential, Google, 76: 0 hits in every file.
- Remaining `"/sewer-line-services/"` hrefs in the clusters: one parent link on each of the four new pages, plus the two excluded emergency-plumbing rows.
- `git diff --stat`: 10 existing files changed, each a single href line (paradise/drain-cleaning two lines), plus the generated manifest.

### Verifier output (string-set diff, JSON-LD vs visible, schema, metadata, links, sitemap)

```text

=== summerlin
  exists: out/summerlin/sewer-line-services/index.html (133075 bytes)
  [5] expected strings: 91; missing from built page: 0; built text blocks not in appendix: 7
      extra (not in appendix): Frequently Asked Questions About Sewer Line Services in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Sewer Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true; HowTo name="How We Handle Sewer Line Service in Summerlin" desc="The process Red Carpet Plumbing follows for sewer line service in Summerlin, NV."
  [7] Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      Service.name/serviceType = Sewer Line Services / Sewer Line Services; provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Sewer Line Services in Summerlin -> https://redcarpetplumbing.com/summerlin/sewer-line-services/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Sewer Line Services in Summerlin"]
      WebPage = {"name":"Sewer Line Services in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/sewer-line-services/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Sewer Line Services in Summerlin, NV | Red Carpet Plumbing"
      description="Sewer line inspection, cleaning, repair, and replacement in Summerlin, NV. Camera inspections and trenchless options. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/sewer-line-services/
      og:title="Sewer Line Services in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/sewer-line-services/ robots=index, follow
  [9] hrefs (33):
      #main  anchor
      /  resolved
      /about/  resolved
      /contact/  resolved
      tel:+17025679172  external/tel
      /summerlin-plumbing-services/  resolved
      /video-camera-plumbing-inspections/  resolved
      /summerlin/drain-cleaning/  resolved
      /spring-valley/sewer-line-services/  resolved
      /las-vegas/sewer-line-services/  resolved
      /summerlin/leak-detection-repair/  resolved
      /summerlin/repiping/  resolved
      /sewer-line-services/  resolved
      /emergency-plumbing/  resolved
      /drain-cleaning/  resolved
      /leak-detection-repair/  resolved
      /water-heater-repair-installation/  resolved
      /slab-leak-detection-repair/  resolved
      /repiping/  resolved
      /commercial-plumbing/  resolved
      /las-vegas-plumbing-services/  resolved
      /henderson-plumbing-services/  resolved
      /north-las-vegas-plumbing-services/  resolved
      /paradise-plumbing-services/  resolved
      /spring-valley-plumbing-services/  resolved
      /enterprise-plumbing-services/  resolved
      /boulder-city-plumbing-services/  resolved
      /green-valley-plumbing-services/  resolved
      /lake-las-vegas-plumbing-services/  resolved
      /north-las-vegas/aliante-area-plumbing/  resolved
      /service-areas/  resolved
      /plumbing-services/  resolved
      <google-maps-url>  external
  FAQ <details> count: 7; H1 count: 1

=== spring-valley
  exists: out/spring-valley/sewer-line-services/index.html (132810 bytes)
  [5] expected strings: 89; missing from built page: 0; built text blocks not in appendix: 7
      extra (not in appendix): Frequently Asked Questions About Sewer Line Services in Spring Valley, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Sewer Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Spring Valley Plumbing Services
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true; HowTo name="How We Handle Sewer Line Service in Spring Valley" desc="The process Red Carpet Plumbing follows for sewer line service in Spring Valley, NV."
  [7] Service.areaServed = {"@type":"Place","name":"Spring Valley","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      Service.name/serviceType = Sewer Line Services / Sewer Line Services; provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Spring Valley Plumbing Services -> https://redcarpetplumbing.com/spring-valley-plumbing-services/ | 3:Sewer Line Services in Spring Valley -> https://redcarpetplumbing.com/spring-valley/sewer-line-services/
      visible breadcrumb = ["Home","Spring Valley Plumbing Services","Sewer Line Services in Spring Valley"]
      WebPage = {"name":"Sewer Line Services in Spring Valley, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/spring-valley/sewer-line-services/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Sewer Line Services in Spring Valley, NV | Red Carpet Plumbing"
      description="Sewer line inspection, cleaning, repair, and replacement in Spring Valley, NV. Camera inspections and trenchless options. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/spring-valley/sewer-line-services/
      og:title="Sewer Line Services in Spring Valley, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/spring-valley/sewer-line-services/ robots=index, follow
  [9] hrefs (34):
      #main  anchor
      /  resolved
      /about/  resolved
      /contact/  resolved
      tel:+17025679172  external/tel
      /spring-valley-plumbing-services/  resolved
      /video-camera-plumbing-inspections/  resolved
      /spring-valley/drain-cleaning/  resolved
      /summerlin/sewer-line-services/  resolved
      /enterprise/sewer-line-services/  resolved
      /spring-valley/leak-detection-repair/  resolved
      /spring-valley/repiping/  resolved
      /spring-valley/slab-leak-detection-repair/  resolved
      /sewer-line-services/  resolved
      /emergency-plumbing/  resolved
      /drain-cleaning/  resolved
      /leak-detection-repair/  resolved
      /water-heater-repair-installation/  resolved
      /slab-leak-detection-repair/  resolved
      /repiping/  resolved
      /commercial-plumbing/  resolved
      /las-vegas-plumbing-services/  resolved
      /henderson-plumbing-services/  resolved
      /north-las-vegas-plumbing-services/  resolved
      /paradise-plumbing-services/  resolved
      /summerlin-plumbing-services/  resolved
      /enterprise-plumbing-services/  resolved
      /boulder-city-plumbing-services/  resolved
      /green-valley-plumbing-services/  resolved
      /lake-las-vegas-plumbing-services/  resolved
      /north-las-vegas/aliante-area-plumbing/  resolved
      /service-areas/  resolved
      /plumbing-services/  resolved
      <google-maps-url>  external
  FAQ <details> count: 7; H1 count: 1

=== enterprise
  exists: out/enterprise/sewer-line-services/index.html (132849 bytes)
  [5] expected strings: 89; missing from built page: 0; built text blocks not in appendix: 7
      extra (not in appendix): Frequently Asked Questions About Sewer Line Services in Enterprise, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Sewer Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Enterprise Plumbing Services
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true; HowTo name="How We Handle Sewer Line Service in Enterprise" desc="The process Red Carpet Plumbing follows for sewer line service in Enterprise, NV."
  [7] Service.areaServed = {"@type":"Place","name":"Enterprise","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      Service.name/serviceType = Sewer Line Services / Sewer Line Services; provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Enterprise Plumbing Services -> https://redcarpetplumbing.com/enterprise-plumbing-services/ | 3:Sewer Line Services in Enterprise -> https://redcarpetplumbing.com/enterprise/sewer-line-services/
      visible breadcrumb = ["Home","Enterprise Plumbing Services","Sewer Line Services in Enterprise"]
      WebPage = {"name":"Sewer Line Services in Enterprise, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/enterprise/sewer-line-services/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Sewer Line Services in Enterprise, NV | Red Carpet Plumbing"
      description="Sewer line inspection, cleaning, repair, and replacement in Enterprise, NV. Camera inspections and trenchless options. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/enterprise/sewer-line-services/
      og:title="Sewer Line Services in Enterprise, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/enterprise/sewer-line-services/ robots=index, follow
  [9] hrefs (34):
      #main  anchor
      /  resolved
      /about/  resolved
      /contact/  resolved
      tel:+17025679172  external/tel
      /enterprise-plumbing-services/  resolved
      /enterprise/commercial-plumbing/  resolved
      /video-camera-plumbing-inspections/  resolved
      /enterprise/drain-cleaning/  resolved
      /spring-valley/sewer-line-services/  resolved
      /las-vegas/sewer-line-services/  resolved
      /enterprise/repiping/  resolved
      /enterprise/leak-detection-repair/  resolved
      /sewer-line-services/  resolved
      /emergency-plumbing/  resolved
      /drain-cleaning/  resolved
      /leak-detection-repair/  resolved
      /water-heater-repair-installation/  resolved
      /slab-leak-detection-repair/  resolved
      /repiping/  resolved
      /commercial-plumbing/  resolved
      /las-vegas-plumbing-services/  resolved
      /henderson-plumbing-services/  resolved
      /north-las-vegas-plumbing-services/  resolved
      /paradise-plumbing-services/  resolved
      /summerlin-plumbing-services/  resolved
      /spring-valley-plumbing-services/  resolved
      /boulder-city-plumbing-services/  resolved
      /green-valley-plumbing-services/  resolved
      /lake-las-vegas-plumbing-services/  resolved
      /north-las-vegas/aliante-area-plumbing/  resolved
      /service-areas/  resolved
      /plumbing-services/  resolved
      <google-maps-url>  external
  FAQ <details> count: 7; H1 count: 1

=== paradise
  exists: out/paradise/sewer-line-services/index.html (132682 bytes)
  [5] expected strings: 88; missing from built page: 0; built text blocks not in appendix: 7
      extra (not in appendix): Frequently Asked Questions About Sewer Line Services in Paradise, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Sewer Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Paradise Plumbing Services
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true; HowTo name="How We Handle Sewer Line Service in Paradise" desc="The process Red Carpet Plumbing follows for sewer line service in Paradise, NV."
  [7] Service.areaServed = {"@type":"Place","name":"Paradise","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      Service.name/serviceType = Sewer Line Services / Sewer Line Services; provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Paradise Plumbing Services -> https://redcarpetplumbing.com/paradise-plumbing-services/ | 3:Sewer Line Services in Paradise, NV -> https://redcarpetplumbing.com/paradise/sewer-line-services/
      visible breadcrumb = ["Home","Paradise Plumbing Services","Sewer Line Services in Paradise, NV"]
      WebPage = {"name":"Sewer Line Services in Paradise, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/paradise/sewer-line-services/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Sewer Line Services in Paradise, NV | Red Carpet Plumbing"
      description="Sewer line inspection, cleaning, repair, and replacement in Paradise, NV. Camera inspections and trenchless options. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/paradise/sewer-line-services/
      og:title="Sewer Line Services in Paradise, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/paradise/sewer-line-services/ robots=index, follow
  [9] hrefs (33):
      #main  anchor
      /  resolved
      /about/  resolved
      /contact/  resolved
      tel:+17025679172  external/tel
      /paradise-plumbing-services/  resolved
      /paradise/commercial-plumbing/  resolved
      /video-camera-plumbing-inspections/  resolved
      /paradise/drain-cleaning/  resolved
      /las-vegas/sewer-line-services/  resolved
      /spring-valley/sewer-line-services/  resolved
      /paradise/leak-detection-repair/  resolved
      /sewer-line-services/  resolved
      /emergency-plumbing/  resolved
      /drain-cleaning/  resolved
      /leak-detection-repair/  resolved
      /water-heater-repair-installation/  resolved
      /slab-leak-detection-repair/  resolved
      /repiping/  resolved
      /commercial-plumbing/  resolved
      /las-vegas-plumbing-services/  resolved
      /henderson-plumbing-services/  resolved
      /north-las-vegas-plumbing-services/  resolved
      /summerlin-plumbing-services/  resolved
      /spring-valley-plumbing-services/  resolved
      /enterprise-plumbing-services/  resolved
      /boulder-city-plumbing-services/  resolved
      /green-valley-plumbing-services/  resolved
      /lake-las-vegas-plumbing-services/  resolved
      /north-las-vegas/aliante-area-plumbing/  resolved
      /service-areas/  resolved
      /plumbing-services/  resolved
      <google-maps-url>  external
  FAQ <details> count: 7; H1 count: 1

[11] sitemap:
  summerlin: true
  spring-valley: true
  enterprise: true
  paradise: true
  contains /thank-you: false

TOTAL FAILS: 0
```
- Preview server: static http.server on port 3100 serving out/.
