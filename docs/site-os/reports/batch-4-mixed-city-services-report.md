# Batch 4 Report: Paradise Gas Line and Backflow, Las Vegas Water Pipe, and North Las Vegas Garbage Disposal Pages

Status: built and validated locally. Not committed, not pushed, not deployed. Batches 1 to 3 are committed locally and also unpushed.

## Files changed

New (4): `app/las-vegas/water-pipe-repair-replacement/page.tsx`, `app/north-las-vegas/garbage-disposal-repair-installation/page.tsx`, `app/paradise/gas-line-plumbing/page.tsx`, `app/paradise/backflow-prevention/page.tsx`

Generated (1): `docs/seo/route-manifest.json` (routeCount 129 to 133, warnings empty)

Hub href edits (3 files, 4 lines): `app/paradise-plumbing-services/page.tsx` lines 161 and 184, `app/las-vegas-plumbing-services/page.tsx` line 153, `app/north-las-vegas-plumbing-services/page.tsx` line 183.

Approved sweep href edits (3 files): `app/las-vegas/repiping/page.tsx` line 549, `app/las-vegas/slab-leak-detection-repair/page.tsx` line 492, `app/north-las-vegas/aliante-area-plumbing/page.tsx` line 188.

## Final sweep table

| # | File | Line | Before | After | Status |
|---|---|---|---|---|---|
| 1 | las-vegas/repiping | 549 | /water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | applied |
| 2 | las-vegas/slab-leak-detection-repair | 492 | /water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | applied |
| 3 | north-las-vegas/aliante-area-plumbing | 188 | /garbage-disposal-repair-installation/ | /north-las-vegas/garbage-disposal-repair-installation/ | applied |
| 4 | paradise/commercial-plumbing | 176 | /backflow-prevention/ | unchanged | excluded by Sedrick (card titled "Backflow Prevention and Testing"; revisit once tester certification is confirmed) |

Hub pills: Paradise 161 gas line and 184 backflow, Las Vegas 153 water pipe, North Las Vegas 183 garbage disposal. Other pills on those hubs are untouched: they already point to a city page, or their service has no page in that city (for example the North Las Vegas gas and backflow pills stay on the core pages).

Occurrences reviewed and left out of scope (service or city not built in this batch): paradise/leak-detection-repair 569, aliante-area-plumbing 165, 169 and 192, north-las-vegas/aliante-area/slab-leak-detection-repair 153, north-las-vegas/slab-leak-detection-repair 130, north-las-vegas/commercial-plumbing 119, and the parent links on existing Las Vegas pages.

## Decisions applied

Plan and rows 1 to 3 approved, row 4 excluded, WebPage schema follows the page named for each city: Paradise sewer page and Las Vegas repiping (isPartOf url without trailing slash, no inLanguage), North Las Vegas toilet page (trailing slash, no inLanguage). areaServed: Paradise is Place in AdministrativeArea in State; Las Vegas is City with State; North Las Vegas is an array of one City and ten PostalCodeSpecification nodes built from NLV_ZIPS. Settled decisions from Batches 1 to 3 applied (native details FAQ, arrow plus label related list, "Call Now: (702) 567-9172" and "Request Service", plain Plumber node, final breadcrumb item URL, appendix breadcrumb labels and alt text, Service name without the city). The North Las Vegas page passes no trustItems.

## Deviations and risks

1. Pages were produced by a scratch generator (outside the repo) that reads the appendix text from the batch-4 zip, so copy is not retyped.
2. Headings the appendices do not supply use the settled pattern: FAQ H2 "Frequently Asked Questions About {Service} in {City}, NV" and Related H2 "Related Plumbing Services".
3. The plan file still labels Batch 3 "At Gate 2"; Batch 3 was built and committed, and the Gate 1 count (129) confirmed it.
4. HeroSection renders the hero background image with an empty alt attribute whatever alt string is passed. Existing component behavior, also true of Batches 1 to 3.
5. Shared chrome (quote form dropdown, header, footer) keeps its existing emergency wording, per the settled decision.
6. Existing pages carry "Over 40 years", "4.8 Stars, 76 Google Reviews" and 24/7 strings (paradise/commercial-plumbing and drain-cleaning, las-vegas/repiping and slab-leak-detection-repair, aliante-area-plumbing), plus pipe-material claims on the Las Vegas hub and related pages. Not copied, not touched.
7. Backflow (Paradise): tester certification is NOT confirmed. Every built element containing "test" (11, listed below) describes testing as done by a certified tester or as the owner's compliance step; none claims Red Carpet Plumbing performs testing. No water provider is named.
8. Gas (Paradise): the Southwest Gas number appears once in the built page, inside the safety panel, which has no links, tel anchors or buttons.
9. Claims awaiting owner sign-off (FLAG: VERIFY comments in source): license line and transparent pricing on all four; Paradise gas Southwest Gas number and responsibility note, pressure test claims, commercial gas claims, Clark County permit sentences; Paradise backflow tester certification, documentation step, FAQ 3 next steps wording, C-1 authority, irrigation, RPZ, DCVA and pressure vacuum breaker statements, irrigation-on-Paradise-properties statement; Las Vegas water pipe meter-to-home sentence, permit sentences, "hardest municipal supplies" phrase; North Las Vegas FAQ 2 reset instruction and the ZIP list.
10. Truncated or fabricated content: none known.

## Gate 4 raw output

- `npx tsc --noEmit`: no output (pass). `npx eslint` on each new page: no output (pass). `npm run build`: exit 0, "OK: wrote docs/seo/route-manifest.json with 133 route(s)".
- Manifest: routeCount 133, warnings []. New routes: /las-vegas/water-pipe-repair-replacement, /north-las-vegas/garbage-disposal-repair-installation, /paradise/gas-line-plumbing, /paradise/backflow-prevention.
- Source grep on the four new files for the em dash, double hyphen, emergency, Emergency, 24/7, over 40, AggregateRating, sameAs, LocalBusiness, hasCredential, guarantee, warranty, LVVWD, Google: 0 hits. "Summerlin" appears once each in the Las Vegas water pipe and North Las Vegas garbage disposal pages and "Henderson" once in the Paradise gas page, all as the approved cross-city link text. PostalCodeSpecification and ZIP codes appear only in the North Las Vegas page.
- Remaining core hrefs: one parent link in the causes intro and one in the related list on each new page; the Paradise hub's water pipe and garbage disposal pills and the North Las Vegas hub's gas and backflow pills (no city page for those); the excluded paradise/commercial-plumbing line 176; and the out-of-scope lines listed above.
- `git diff --stat` for existing files: 7 single-line href changes across 6 files (the Paradise hub has two), plus the generated manifest.

### Backflow page: every built element containing "test"

```text
[test] [h3] Notices, Testing, and Failed Devices
[test] [p] Red Carpet Plumbing installs, repairs, and replaces backflow prevention devices for homes and businesses throughout Paradise, NV. Irrigation backflow preventers, commercial assemblies for properties near the Strip corridor, and help after a failed test or compliance notice. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
[test] [p] Backflow devices are generally tested on a schedule by a certified tester, and results go to the local water provider. If your provider sends a notice, or a device fails its test, repair or replacement is typically needed before the property is back in compliance. Your notice and your water provider set the rules that apply to your property.
[test] [p] Repair of failed or malfunctioning backflow prevention assemblies, including devices that failed a test.
[test] [p] Repair is usually the practical choice when the device is a current approved type and a worn internal part, seal, or valve is the cause of a failed test or a leak. A repaired device still has to pass its test before the property is back in compliance.
[test] [p] Most regulated devices need periodic testing by a certified tester, commonly once a year, with results sent to the water provider. Your provider's notice sets the schedule for your property. Red Carpet Plumbing installs, repairs, and replaces devices and can help with next steps after a failed test.
[test] [p] A failed test means the device is not protecting the water supply as required. Repair or replacement is typically needed before the property is back in compliance. A licensed plumber can tell you whether the device can be repaired or needs to be replaced.
[test] [li] A compliance or testing notice from your water provider
[test] [li] A backflow device that failed its annual test
[test] [summary] How often does a backflow preventer need to be tested?
[test] [summary] What happens if my backflow preventer fails a test?
```

### Verifier output (string-set diff, JSON-LD vs visible, schema, metadata, links, gas panel, sitemap)

```text

=== /las-vegas/water-pipe-repair-replacement/
  [3] exists: out/las-vegas/water-pipe-repair-replacement/index.html (137687 bytes)
  [5] expected strings: 96; missing from built page: 0; built text blocks not in appendix: 15
      extra (not in appendix): Frequently Asked Questions About Water Pipe Repair and Replacement in Las Vegas, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Water Pipe Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Las Vegas Plumbing Services
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what you are seeing. If water is actively leaking, shut off the water at the 
      extra (not in appendix): 1Call and describe the problem.Call (702) 567-9172 and describe what you are seeing. If water is actively leaking, shut off the water at the
      extra (not in appendix): Inspection and pipe assessment.A licensed plumber checks accessible supply lines, fittings, and valves, tests for active water loss if neede
      extra (not in appendix): 2Inspection and pipe assessment.A licensed plumber checks accessible supply lines, fittings, and valves, tests for active water loss if need
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): 3Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work be
      extra (not in appendix): Repair or replacement with pressure test.We complete the approved work, pressure test it, restore service, and clean up before leaving. Perm
      extra (not in appendix): 4Repair or replacement with pressure test.We complete the approved work, pressure test it, restore service, and clean up before leaving. Per
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Water Pipe Service in Las Vegas" desc="The process Red Carpet Plumbing follows for water pipe repair and replacement in Las Vegas, NV."
  [7] Service.name/serviceType = Water Pipe Repair and Replacement / Water Pipe Repair and Replacement
      Service.areaServed = {"@type":"City","name":"Las Vegas","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Las Vegas Plumbing Services -> https://redcarpetplumbing.com/las-vegas-plumbing-services/ | 3:Water Pipe Repair and Replacement in Las Vegas, NV -> https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/
      visible breadcrumb = ["Home","Las Vegas Plumbing Services","Water Pipe Repair and Replacement in Las Vegas, NV"]
      WebPage = {"name":"Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing"
      description="Water pipe repair and replacement in Las Vegas, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/
      og:title="Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (34); in <main> (11):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /las-vegas-plumbing-services/  resolved
      [main] /water-pipe-repair-replacement/  resolved
      [main] /las-vegas/repiping/  resolved
      [main] /las-vegas/slab-leak-detection-repair/  resolved
      [main] /las-vegas/leak-detection-repair/  resolved
      [main] /las-vegas/water-heater-repair-installation/  resolved
      [main] /north-las-vegas/water-pipe-repair-replacement/  resolved
      [main] /summerlin/water-pipe-repair-replacement/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /henderson-plumbing-services/  resolved
             /north-las-vegas-plumbing-services/  resolved
             /paradise-plumbing-services/  resolved
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
      ZIP-like tokens in visible main text: 0 (expected: 0)
      mentions of Summerlin in visible text: 1
      mentions of Henderson in visible text: 0
  FAQ <details> count: 7; H1 count: 1

=== /north-las-vegas/garbage-disposal-repair-installation/
  [3] exists: out/north-las-vegas/garbage-disposal-repair-installation/index.html (136713 bytes)
  [5] expected strings: 97; missing from built page: 0; built text blocks not in appendix: 16
      extra (not in appendix): Frequently Asked Questions About Garbage Disposal Repair and Installation in North Las Vegas, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Garbage Disposal Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): North Las Vegas Plumbing Services
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what the disposal is doing. Turn the disposal off at the switch, and do not p
      extra (not in appendix): 1Call and describe the problem.Call (702) 567-9172 and describe what the disposal is doing. Turn the disposal off at the switch, and do not 
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the disposal, the power supply, the drain and dishwasher connections, and the sink flan
      extra (not in appendix): 2Inspection and diagnosis.A licensed plumber inspects the disposal, the power supply, the drain and dishwasher connections, and the sink fla
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): 3Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work be
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new unit, tests it, checks all connections for leak
      extra (not in appendix): 4Repair or installation with final check.Our plumber completes the repair or installs the new unit, tests it, checks all connections for lea
      extra (not in appendix): 
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Garbage Disposal Service in North Las Vegas" desc="The process Red Carpet Plumbing follows for garbage disposal repair and installation in North Las Vegas, NV."
  [7] Service.name/serviceType = Garbage Disposal Repair and Installation / Garbage Disposal Repair and Installation
      Service.areaServed = [{"@type":"City","name":"North Las Vegas","containedInPlace":{"@type":"State","name":"Nevada"}},{"@type":"PostalCodeSpecification","postalCode":"89030","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89031","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89032","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89033","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89036","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89081","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89084","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89085","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89086","addressCountry":"US"},{"@type":"PostalCodeSpecification","postalCode":"89087","addressCountry":"US"}]
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      areaServed array length: 11 (1 City + 10 PostalCodeSpecification)
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:North Las Vegas Plumbing Services -> https://redcarpetplumbing.com/north-las-vegas-plumbing-services/ | 3:Garbage Disposal Repair and Installation in North Las Vegas, NV -> https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/
      visible breadcrumb = ["Home","North Las Vegas Plumbing Services","Garbage Disposal Repair and Installation in North Las Vegas, NV"]
      WebPage = {"name":"Garbage Disposal Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Garbage Disposal Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing"
      description="Garbage disposal repair and installation in North Las Vegas, NV. Jams, leaks, humming, and replacements. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/
      og:title="Garbage Disposal Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (33); in <main> (11):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /north-las-vegas-plumbing-services/  resolved
      [main] /garbage-disposal-repair-installation/  resolved
      [main] /north-las-vegas/drain-cleaning/  resolved
      [main] /north-las-vegas/aliante-area-plumbing/  resolved
      [main] /las-vegas/garbage-disposal-repair-installation/  resolved
      [main] /summerlin/garbage-disposal-repair-installation/  resolved
      [main] /north-las-vegas/toilet-repair-installation/  resolved
      [main] /north-las-vegas/water-pipe-repair-replacement/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /las-vegas-plumbing-services/  resolved
             /henderson-plumbing-services/  resolved
             /paradise-plumbing-services/  resolved
             /summerlin-plumbing-services/  resolved
             /spring-valley-plumbing-services/  resolved
             /enterprise-plumbing-services/  resolved
             /boulder-city-plumbing-services/  resolved
             /green-valley-plumbing-services/  resolved
             /lake-las-vegas-plumbing-services/  resolved
             /service-areas/  resolved
             /plumbing-services/  resolved
             <google-maps-url>  external
      ZIP-like tokens in visible main text: 20 (expected: 20, intro 10 + chips 10)
      mentions of Summerlin in visible text: 1
      mentions of Henderson in visible text: 0
  FAQ <details> count: 7; H1 count: 1

=== /paradise/gas-line-plumbing/
  [3] exists: out/paradise/gas-line-plumbing/index.html (143206 bytes)
  [5] expected strings: 101; missing from built page: 0; built text blocks not in appendix: 20
      extra (not in appendix): Frequently Asked Questions About Gas Line Plumbing in Paradise, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Gas Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Paradise Plumbing Services
      extra (not in appendix): 1Do not turn any electrical switches on or off. Do not use a phone inside the building.
      extra (not in appendix): 2Leave the building immediately. Leave the door open as you exit.
      extra (not in appendix): 3Move away from the building and call Southwest Gas at 1-800-935-4748 from a safe location.
      extra (not in appendix): 4Do not re-enter the building until Southwest Gas has cleared the area.
      extra (not in appendix): 5Once the area is declared safe, call Red Carpet Plumbing at (702) 567-9172 to inspect and repair the gas line.
      extra (not in appendix): If you smell gas, leave first.If you smell gas, leave the building and call Southwest Gas from outside before you call us. For other gas lin
      extra (not in appendix): 1If you smell gas, leave first.If you smell gas, leave the building and call Southwest Gas from outside before you call us. For other gas li
      extra (not in appendix): Inspection and testing.A licensed plumber inspects the gas line, connections, and appliances, and pressure tests the system to find the caus
      extra (not in appendix): 2Inspection and testing.A licensed plumber inspects the gas line, connections, and appliances, and pressure tests the system to find the cau
      extra (not in appendix): Review options and approve.We explain what we found and the repair, replacement, or installation options that apply. You approve the work be
      extra (not in appendix): 3Review options and approve.We explain what we found and the repair, replacement, or installation options that apply. You approve the work b
      extra (not in appendix): Repair or installation with final pressure test.We complete the approved work, pressure test it, and confirm it is safe before gas is restor
      extra (not in appendix): 4Repair or installation with final pressure test.We complete the approved work, pressure test it, and confirm it is safe before gas is resto
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Gas Line Service in Paradise" desc="The process Red Carpet Plumbing follows for gas line service in Paradise, NV."
  [7] Service.name/serviceType = Gas Line Plumbing / Gas Line Plumbing
      Service.areaServed = {"@type":"Place","name":"Paradise","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Paradise Plumbing Services -> https://redcarpetplumbing.com/paradise-plumbing-services/ | 3:Gas Line Plumbing in Paradise, NV -> https://redcarpetplumbing.com/paradise/gas-line-plumbing/
      visible breadcrumb = ["Home","Paradise Plumbing Services","Gas Line Plumbing in Paradise, NV"]
      WebPage = {"name":"Gas Line Plumbing in Paradise, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/paradise/gas-line-plumbing/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Gas Line Plumbing in Paradise, NV | Red Carpet Plumbing"
      description="Gas line repair, installation, and inspection in Paradise, NV. Appliance hookups and commercial gas lines. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/paradise/gas-line-plumbing/
      og:title="Gas Line Plumbing in Paradise, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/paradise/gas-line-plumbing/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (33); in <main> (10):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /paradise-plumbing-services/  resolved
      [main] /gas-line-plumbing/  resolved
      [main] /paradise/commercial-plumbing/  resolved
      [main] /paradise/water-heater-repair-installation/  resolved
      [main] /paradise/leak-detection-repair/  resolved
      [main] /henderson/gas-line-plumbing/  resolved
      [main] /las-vegas/gas-line-plumbing/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
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
      ZIP-like tokens in visible main text: 0 (expected: 0)
      mentions of Summerlin in visible text: 0
      mentions of Henderson in visible text: 1
  FAQ <details> count: 7; H1 count: 1
  [10] gas safety panel present: true; after hero: true; before direct answer: true
      anchors inside panel: 0; buttons inside panel: 0; steps (li): 5
      panel markup: <section aria-label="Gas safety instructions" class="bg-white"><div class="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-10"><div class="rounded-2xl border-2 border-brand-primary bg-brand-surface-alt p-6 sm:p-8"><h2 class="text-2xl tracking-tight text-brand-dark sm:text-3xl">If You Smell Gas in Your Paradise Home or Business</h2><ol class="mt-6 space-y-4"><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">1</span><span class="text-base leading-7 text-brand-dark/85">Do not turn any electrical switches on or off. Do not use a phone inside the building.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">2</span><span class="text-base leading-7 text-brand-dark/85">Leave the building immediately. Leave the door open as you exit.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">3</span><span class="text-base leading-7 text-brand-dark/85">Move away from the building and call Southwest Gas at 1-800-935-4748 from a safe location.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">4</span><span class="text-base leading-7 text-brand-dark/85">Do not re-enter the building until Southwest Gas has cleared the area.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 fle
  [11] 1-800-935-4748 occurrences in main: 1; inside panel: 1; tel: links in panel: 0

=== /paradise/backflow-prevention/
  [3] exists: out/paradise/backflow-prevention/index.html (135765 bytes)
  [5] expected strings: 94; missing from built page: 0; built text blocks not in appendix: 15
      extra (not in appendix): Frequently Asked Questions About Backflow Prevention in Paradise, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Backflow Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Paradise Plumbing Services
      extra (not in appendix): Call and describe your situation.Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow need. Whether you have received a com
      extra (not in appendix): 1Call and describe your situation.Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow need. Whether you have received a co
      extra (not in appendix): Property assessment and device review.A licensed plumber inspects the existing backflow setup or assesses where a new device is needed. We i
      extra (not in appendix): 2Property assessment and device review.A licensed plumber inspects the existing backflow setup or assesses where a new device is needed. We 
      extra (not in appendix): Review options and approve the work.We explain what device is needed or what repair is required, and what the installation or repair involve
      extra (not in appendix): 3Review options and approve the work.We explain what device is needed or what repair is required, and what the installation or repair involv
      extra (not in appendix): Installation or repair with documentation.Our licensed plumber installs or repairs the device following local code requirements. We document
      extra (not in appendix): 4Installation or repair with documentation.Our licensed plumber installs or repairs the device following local code requirements. We documen
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Backflow Prevention Service in Paradise" desc="The process Red Carpet Plumbing follows for backflow prevention service in Paradise, NV."
  [7] Service.name/serviceType = Backflow Prevention / Backflow Prevention
      Service.areaServed = {"@type":"Place","name":"Paradise","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Paradise Plumbing Services -> https://redcarpetplumbing.com/paradise-plumbing-services/ | 3:Backflow Prevention Services in Paradise, NV -> https://redcarpetplumbing.com/paradise/backflow-prevention/
      visible breadcrumb = ["Home","Paradise Plumbing Services","Backflow Prevention Services in Paradise, NV"]
      WebPage = {"name":"Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/paradise/backflow-prevention/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing"
      description="Backflow preventer installation, repair, and replacement in Paradise, NV. Irrigation and commercial devices. NV #0048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/paradise/backflow-prevention/
      og:title="Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/paradise/backflow-prevention/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (32); in <main> (9):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /paradise-plumbing-services/  resolved
      [main] /backflow-prevention/  resolved
      [main] /paradise/commercial-plumbing/  resolved
      [main] /las-vegas/backflow-prevention/  resolved
      [main] /paradise/leak-detection-repair/  resolved
      [main] /paradise/drain-cleaning/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
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
      ZIP-like tokens in visible main text: 0 (expected: 0)
      mentions of Summerlin in visible text: 0
      mentions of Henderson in visible text: 0
  FAQ <details> count: 7; H1 count: 1
  [10] distinct built elements containing 'test': 11

[12] sitemap:
  /paradise/gas-line-plumbing: true
  /paradise/backflow-prevention: true
  /las-vegas/water-pipe-repair-replacement: true
  /north-las-vegas/garbage-disposal-repair-installation: true
  contains /thank-you: false

TOTAL FAILS: 0
```
- Preview server: static http.server on port 3100 serving out/.
