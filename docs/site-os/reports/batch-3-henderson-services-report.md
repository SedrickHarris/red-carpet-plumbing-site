# Batch 3 Report: Henderson Water Pipe, Toilet, Faucet and Sink, Garbage Disposal, and Backflow Prevention Pages

Status: built and validated locally. Not committed, not pushed, not deployed. Batches 1 and 2 are committed locally and also unpushed.

## Files changed

New (5): `app/henderson/{water-pipe-repair-replacement,toilet-repair-installation,faucet-sink-repair-installation,garbage-disposal-repair-installation,backflow-prevention}/page.tsx`

Generated (1): `docs/seo/route-manifest.json` (routeCount 124 to 129, warnings empty)

Hub href edits (1 file, 5 lines): `app/henderson-plumbing-services/page.tsx` lines 157, 169, 176, 180, 184.

Approved sweep href edits (2 files): `app/henderson/repiping/page.tsx` line 549, `app/henderson/slab-leak-detection-repair/page.tsx` line 483.

## Final sweep table

| # | File | Line | Before | After | Status |
|---|---|---|---|---|---|
| 1 | henderson/repiping | 549 | /water-pipe-repair-replacement/ | /henderson/water-pipe-repair-replacement/ | applied |
| 2 | henderson/slab-leak-detection-repair | 483 | /water-pipe-repair-replacement/ | /henderson/water-pipe-repair-replacement/ | applied |
| 3 | henderson/commercial-plumbing | 192 | /backflow-prevention/ | unchanged | excluded by Sedrick (card is titled "Backflow Prevention and Testing"; revisit once tester certification is confirmed) |

Hub pills: 157 water pipe, 169 toilet, 176 faucet and sink, 180 garbage disposal, 184 backflow, all repointed to the matching /henderson/ route. Labels, ordering and images untouched.

## Decisions applied

All Gate 2 decisions approved by Sedrick: plan and rows 1 and 2; row 3 excluded; WebPage schema copied from the Henderson sewer line page (url with trailing slash, inLanguage "en-US", field order name, url, description, inLanguage, isPartOf). Settled earlier decisions applied (native details FAQ, arrow plus label related list, "Call Now: (702) 567-9172" and "Request Service", plain Plumber node, final breadcrumb item URL, appendix alt text, appendix Service name without the city). areaServed is City Henderson containedInPlace State Nevada.

## Deviations and risks

1. Pages were produced by a scratch generator (outside the repo) that reads the appendix text from the batch-3 zip, so copy is not retyped.
2. Headings the appendices do not supply use the settled pattern: FAQ H2 "Frequently Asked Questions About {Service} in Henderson, NV" and Related H2 "Related Plumbing Services".
3. The Las Vegas backflow page has its own section layout. The Section 6 skeleton governed, so the Henderson backflow page uses the same composition as the other four. The tester-certification note from the Las Vegas page is carried in the file header.
4. HeroSection renders the hero background image with an empty alt attribute whatever alt string is passed. Existing component behavior, also true of Batches 1 and 2.
5. Shared chrome (quote form dropdown, header, footer) keeps its existing emergency wording, per the settled decision.
6. Existing Henderson pages carry "Over 40 years", "4.8 Stars, 76 Google Reviews", 24/7 emergency claims (repiping, slab leak, commercial plumbing) and polybutylene, Kitec, copper and galvanized claims (drain cleaning, repiping, slab leak, hub). Not copied, not touched.
7. Backflow: tester certification is NOT confirmed. Every sentence on the built backflow page containing "test" (11 elements, listed below) describes testing as done by a certified tester or as the owner's compliance step; none claims Red Carpet Plumbing performs testing. No water provider or LVVWD is named.
8. Claims awaiting owner sign-off (FLAG: VERIFY comments in source): license line and transparent pricing on all five; water pipe meter-to-home and permit sentences (FAQ 6 names the City of Henderson); toilet FAQ 5 single-visit timing; faucet and sink careful-installation item; disposal FAQ 2 reset instruction; backflow tester certification, documentation step, FAQ 3 next steps, C-1 installation authority, and irrigation, RPZ, DCVA and pressure vacuum breaker statements.
9. Truncated or fabricated content: none known.

## Gate 4 raw output

- `npx tsc --noEmit`: no output (pass). `npx eslint` on each new page: no output (pass). `npm run build`: exit 0, "OK: wrote docs/seo/route-manifest.json with 129 route(s)".
- Manifest: routeCount 129, warnings []. New routes: /henderson/water-pipe-repair-replacement, /henderson/toilet-repair-installation, /henderson/faucet-sink-repair-installation, /henderson/garbage-disposal-repair-installation, /henderson/backflow-prevention.
- Source grep on the five new files for the em dash, double hyphen, emergency, Emergency, 24/7, over 40, AggregateRating, PostalCodeSpecification, sameAs, LocalBusiness, hasCredential, guarantee, warranty, Summerlin, LVVWD, Google: 0 hits in every file (an inherited code comment containing "guaranteed" was reworded).
- Remaining core hrefs for the five services in the hub and app/henderson: one parent link in the causes intro and one in the related list on each new page; plus the excluded commercial-plumbing line 192.
- `git diff --stat` for existing files: hub 10 lines (5 hrefs), repiping 1 line, slab leak 1 line, plus the generated manifest.

### Backflow page: every built element containing "test"

```text
[h3] Notices, Testing, and Failed Devices
[p] Red Carpet Plumbing installs, repairs, and replaces backflow prevention devices for homes and businesses throughout Henderson, NV. Irrigation backflow preventers, commercial assemblies, and help after a failed test or compliance notice. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
[p] Backflow devices are generally tested on a schedule by a certified tester, and results go to the local water provider. If your provider sends a notice, or a device fails its test, repair or replacement is typically needed before the property is back in compliance. Your notice and your water provider set the rules that apply to your property.
[p] Repair of failed or malfunctioning backflow prevention assemblies, including devices that failed a test.
[p] Repair is usually the practical choice when the device is a current approved type and a worn internal part, seal, or valve is the cause of a failed test or a leak. A repaired device still has to pass its test before the property is back in compliance.
[p] Most regulated devices need periodic testing by a certified tester, commonly once a year, with results sent to the water provider. Your provider's notice sets the schedule for your property. Red Carpet Plumbing installs, repairs, and replaces devices and can help with next steps after a failed test.
[p] A failed test means the device is not protecting the water supply as required. Repair or replacement is typically needed before the property is back in compliance. A licensed plumber can tell you whether the device can be repaired or needs to be replaced.
[li] A compliance or testing notice from your water provider
[li] A backflow device that failed its annual test
[summary] How often does a backflow preventer need to be tested?
[summary] What happens if my backflow preventer fails a test?
distinct elements containing 'test': 11
```

### Verifier output (string-set diff, JSON-LD vs visible, schema, metadata, links, sitemap)

```text

=== /henderson/water-pipe-repair-replacement/
  [3] exists: out/henderson/water-pipe-repair-replacement/index.html (137545 bytes)
  [5] expected strings: 97; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Water Pipe Repair and Replacement in Henderson, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Water Pipe Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Henderson Plumbing Services
      extra (not in appendix): Water Pipe Repair and Replacement in Henderson
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what you are seeing. If water is actively leaking, shut off the water at the 
      extra (not in appendix): Inspection and pipe assessment.A licensed plumber checks accessible supply lines, fittings, and valves, tests for active water loss if neede
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or replacement with pressure test.We complete the approved work, pressure test it, restore service, and clean up before leaving. Perm
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Water Pipe Service in Henderson" desc="The process Red Carpet Plumbing follows for water pipe repair and replacement in Henderson, NV."
  [7] Service.name/serviceType = Water Pipe Repair and Replacement / Water Pipe Repair and Replacement
      Service.areaServed = {"@type":"City","name":"Henderson","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Henderson Plumbing Services -> https://redcarpetplumbing.com/henderson-plumbing-services/ | 3:Water Pipe Repair and Replacement in Henderson -> https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/
      visible breadcrumb = ["Home","Henderson Plumbing Services","Water Pipe Repair and Replacement in Henderson"]
      WebPage = {"name":"Water Pipe Repair and Replacement in Henderson, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Water Pipe Repair and Replacement in Henderson, NV | Red Carpet Plumbing"
      description="Water pipe repair and replacement in Henderson, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/
      og:title="Water Pipe Repair and Replacement in Henderson, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (33); in <main> (10):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /henderson-plumbing-services/  resolved
      [main] /water-pipe-repair-replacement/  resolved
      [main] /henderson/repiping/  resolved
      [main] /henderson/slab-leak-detection-repair/  resolved
      [main] /henderson/leak-detection-repair/  resolved
      [main] /henderson/water-heater-repair-installation/  resolved
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
  FAQ <details> count: 7; H1 count: 1

=== /henderson/toilet-repair-installation/
  [3] exists: out/henderson/toilet-repair-installation/index.html (136748 bytes)
  [5] expected strings: 96; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Toilet Repair and Installation in Henderson, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Toilet Repair Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Henderson Plumbing Services
      extra (not in appendix): Toilet Repair and Installation in Henderson
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what your toilet is doing. If it is overflowing and will not stop, shut off t
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the toilet, tank parts, base seal, flange, supply line, and drain connection to find th
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice for your situation. You a
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new toilet, checks all connections, confirms the fl
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Toilet Service in Henderson" desc="The process Red Carpet Plumbing follows for toilet repair and installation in Henderson, NV."
  [7] Service.name/serviceType = Toilet Repair and Installation / Toilet Repair and Installation
      Service.areaServed = {"@type":"City","name":"Henderson","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Henderson Plumbing Services -> https://redcarpetplumbing.com/henderson-plumbing-services/ | 3:Toilet Repair and Installation in Henderson -> https://redcarpetplumbing.com/henderson/toilet-repair-installation/
      visible breadcrumb = ["Home","Henderson Plumbing Services","Toilet Repair and Installation in Henderson"]
      WebPage = {"name":"Toilet Repair and Installation in Henderson, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/henderson/toilet-repair-installation/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Toilet Repair and Installation in Henderson, NV | Red Carpet Plumbing"
      description="Toilet repair and installation in Henderson, NV. Running toilets, base leaks, clogs, and replacements. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/henderson/toilet-repair-installation/
      og:title="Toilet Repair and Installation in Henderson, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/henderson/toilet-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (36); in <main> (13):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /henderson-plumbing-services/  resolved
      [main] /toilet-repair-installation/  resolved
      [main] /green-valley/toilet-repair-installation/  resolved
      [main] /henderson/slab-leak-detection-repair/  resolved
      [main] /henderson/leak-detection-repair/  resolved
      [main] /henderson/drain-cleaning/  resolved
      [main] /las-vegas/toilet-repair-installation/  resolved
      [main] /north-las-vegas/toilet-repair-installation/  resolved
      [main] /henderson/faucet-sink-repair-installation/  resolved
      [main] /henderson/water-pipe-repair-replacement/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /las-vegas-plumbing-services/  resolved
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
  FAQ <details> count: 7; H1 count: 1

=== /henderson/faucet-sink-repair-installation/
  [3] exists: out/henderson/faucet-sink-repair-installation/index.html (136525 bytes)
  [5] expected strings: 96; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Faucet and Sink Repair and Installation in Henderson, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Faucet and Sink Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Henderson Plumbing Services
      extra (not in appendix): Faucet and Sink Repair and Installation in Henderson
      extra (not in appendix): Call and describe the issue.Call (702) 567-9172 and describe what the faucet or sink is doing. If water is leaking under the sink, close the
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the faucet, supply lines, shut-off valves, drain, and trap to find the exact cause.
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new fixture, tests for leaks, checks pressure and d
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Faucet and Sink Service in Henderson" desc="The process Red Carpet Plumbing follows for faucet and sink repair and installation in Henderson, NV."
  [7] Service.name/serviceType = Faucet and Sink Repair and Installation / Faucet and Sink Repair and Installation
      Service.areaServed = {"@type":"City","name":"Henderson","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Henderson Plumbing Services -> https://redcarpetplumbing.com/henderson-plumbing-services/ | 3:Faucet and Sink Repair and Installation in Henderson -> https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/
      visible breadcrumb = ["Home","Henderson Plumbing Services","Faucet and Sink Repair and Installation in Henderson"]
      WebPage = {"name":"Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing"
      description="Faucet and sink repair and installation in Henderson, NV. Leaks, drips, low pressure, and new fixtures. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/
      og:title="Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (35); in <main> (12):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /henderson-plumbing-services/  resolved
      [main] /faucet-sink-repair-installation/  resolved
      [main] /henderson/garbage-disposal-repair-installation/  resolved
      [main] /green-valley/faucet-sink-repair-installation/  resolved
      [main] /plumbing-fixture-repair-replacement-installation/  resolved
      [main] /henderson/leak-detection-repair/  resolved
      [main] /las-vegas/faucet-sink-repair-installation/  resolved
      [main] /henderson/drain-cleaning/  resolved
      [main] /henderson/toilet-repair-installation/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /las-vegas-plumbing-services/  resolved
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
  FAQ <details> count: 7; H1 count: 1

=== /henderson/garbage-disposal-repair-installation/
  [3] exists: out/henderson/garbage-disposal-repair-installation/index.html (133588 bytes)
  [5] expected strings: 95; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Garbage Disposal Repair and Installation in Henderson, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Garbage Disposal Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Henderson Plumbing Services
      extra (not in appendix): Garbage Disposal Repair and Installation in Henderson
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what the disposal is doing. Turn the disposal off at the switch, and do not p
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the disposal, the power supply, the drain and dishwasher connections, and the sink flan
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new unit, tests it, checks all connections for leak
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Garbage Disposal Service in Henderson" desc="The process Red Carpet Plumbing follows for garbage disposal repair and installation in Henderson, NV."
  [7] Service.name/serviceType = Garbage Disposal Repair and Installation / Garbage Disposal Repair and Installation
      Service.areaServed = {"@type":"City","name":"Henderson","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Henderson Plumbing Services -> https://redcarpetplumbing.com/henderson-plumbing-services/ | 3:Garbage Disposal Repair and Installation in Henderson -> https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/
      visible breadcrumb = ["Home","Henderson Plumbing Services","Garbage Disposal Repair and Installation in Henderson"]
      WebPage = {"name":"Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing"
      description="Garbage disposal repair and installation in Henderson, NV. Jams, leaks, humming, and replacements. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/
      og:title="Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (32); in <main> (9):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /henderson-plumbing-services/  resolved
      [main] /garbage-disposal-repair-installation/  resolved
      [main] /henderson/drain-cleaning/  resolved
      [main] /henderson/faucet-sink-repair-installation/  resolved
      [main] /las-vegas/garbage-disposal-repair-installation/  resolved
      [main] /henderson/leak-detection-repair/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /las-vegas-plumbing-services/  resolved
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
  FAQ <details> count: 7; H1 count: 1

=== /henderson/backflow-prevention/
  [3] exists: out/henderson/backflow-prevention/index.html (136090 bytes)
  [5] expected strings: 96; missing from built page: 0; built text blocks not in appendix: 11
      extra (not in appendix): Frequently Asked Questions About Backflow Prevention in Henderson, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Backflow Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Henderson Plumbing Services
      extra (not in appendix): Call and describe your situation.Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow need. Whether you have received a com
      extra (not in appendix): Property assessment and device review.A licensed plumber inspects the existing backflow setup or assesses where a new device is needed. We i
      extra (not in appendix): Review options and approve the work.We explain what device is needed or what repair is required, and what the installation or repair involve
      extra (not in appendix): Installation or repair with documentation.Our licensed plumber installs or repairs the device following local code requirements. We document
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Backflow Prevention Service in Henderson" desc="The process Red Carpet Plumbing follows for backflow prevention service in Henderson, NV."
  [7] Service.name/serviceType = Backflow Prevention / Backflow Prevention
      Service.areaServed = {"@type":"City","name":"Henderson","containedInPlace":{"@type":"State","name":"Nevada"}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Henderson Plumbing Services -> https://redcarpetplumbing.com/henderson-plumbing-services/ | 3:Backflow Prevention Services in Henderson -> https://redcarpetplumbing.com/henderson/backflow-prevention/
      visible breadcrumb = ["Home","Henderson Plumbing Services","Backflow Prevention Services in Henderson"]
      WebPage = {"name":"Backflow Prevention Services in Henderson, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/henderson/backflow-prevention/","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com/"}}
  [8] title="Backflow Prevention Services in Henderson, NV | Red Carpet Plumbing"
      description="Backflow preventer installation, repair, and replacement in Henderson, NV. Irrigation and commercial devices. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/henderson/backflow-prevention/
      og:title="Backflow Prevention Services in Henderson, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/henderson/backflow-prevention/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (32); in <main> (9):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /henderson-plumbing-services/  resolved
      [main] /backflow-prevention/  resolved
      [main] /henderson/commercial-plumbing/  resolved
      [main] /las-vegas/backflow-prevention/  resolved
      [main] /henderson/leak-detection-repair/  resolved
      [main] /henderson/water-pipe-repair-replacement/  resolved
             /emergency-plumbing/  resolved
             /drain-cleaning/  resolved
             /leak-detection-repair/  resolved
             /water-heater-repair-installation/  resolved
             /slab-leak-detection-repair/  resolved
             /sewer-line-services/  resolved
             /repiping/  resolved
             /commercial-plumbing/  resolved
             /las-vegas-plumbing-services/  resolved
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
  FAQ <details> count: 7; H1 count: 1

[12] sitemap:
  /henderson/water-pipe-repair-replacement: true
  /henderson/toilet-repair-installation: true
  /henderson/faucet-sink-repair-installation: true
  /henderson/garbage-disposal-repair-installation: true
  /henderson/backflow-prevention: true
  contains /thank-you: false

TOTAL FAILS: 0
```
- Preview server: static http.server on port 3100 serving out/.
