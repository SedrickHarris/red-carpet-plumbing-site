# Batch 2 Report: Summerlin Water Pipe, Gas Line, Toilet, Faucet and Sink, and Garbage Disposal Pages

Status: built and validated locally. Not committed, not pushed, not deployed. Batch 1 is committed locally (c83af44, e273770), also unpushed.

## Files changed

New (5): `app/summerlin/{water-pipe-repair-replacement,gas-line-plumbing,toilet-repair-installation,faucet-sink-repair-installation,garbage-disposal-repair-installation}/page.tsx`

Generated (1): `docs/seo/route-manifest.json` (routeCount 119 to 124, warnings empty)

Hub href edits (1 file, 5 lines): `app/summerlin-plumbing-services/page.tsx` lines 151, 155, 163, 170, 174.

Approved sweep href edits (2 files): `app/summerlin/repiping/page.tsx` line 522, `app/summerlin/slab-leak-detection-repair/page.tsx` line 161.

## Final sweep table

| # | File | Line | Before | After | Status |
|---|---|---|---|---|---|
| 1 | summerlin/repiping | 522 | /water-pipe-repair-replacement/ | /summerlin/water-pipe-repair-replacement/ | applied |
| 2 | summerlin/slab-leak-detection-repair | 161 | /water-pipe-repair-replacement/ | /summerlin/water-pipe-repair-replacement/ | applied |

Hub pills: 151 water pipe, 155 gas line, 163 toilet, 170 faucet and sink, 174 garbage disposal, all repointed to the matching /summerlin/ route. Labels, ordering and images untouched.

## Decisions applied

All Gate 2 decisions approved by Sedrick: composition from the Batch 1 shell, the North Las Vegas problems panel and repair-or-replace grid, and the Henderson gas safety panel; Henderson's lead-in sentence omitted from the gas panel (appendix has none), numbers as plain text, no links or buttons; Service name and serviceType are the plain service name without the city; FAQ answers plain text; VERIFY flags in source only. Settled Batch 1 decisions applied (native details FAQ, arrow plus label related list, "Call Now: (702) 567-9172" and "Request Service", plain Plumber node, final breadcrumb item URL, isPartOf copied from the Summerlin drain page).

## Deviations and risks

1. Pages were produced by a scratch generator (outside the repo) that reads the appendix text, so copy is not retyped. Appendix files were read from the batch-2 zip.
2. Headings the appendices do not supply use the settled pattern: FAQ H2 "Frequently Asked Questions About {Service} in Summerlin, NV" and Related H2 "Related Plumbing Services".
3. HeroSection renders the hero background image with an empty alt attribute (decorative), whatever alt string is passed. This is existing component behavior and also applies to the Batch 1 pages. The appendix alt is passed as a prop but does not reach the HTML.
4. Shared chrome outside page copy (quote form dropdown, header, footer) keeps its existing emergency wording and links, per the settled decision.
5. Existing Summerlin pages carry "Over 40 years", "4.8-star rating across 76 Google reviews", Emergency Plumbing links, and pipe-material claims (repiping, North Las Vegas water pipe). Not copied, not touched.
6. Claims awaiting owner sign-off (FLAG: VERIFY comments in source): license line and transparent pricing on all five; water pipe meter-to-home and permit sentences; gas Southwest Gas number, utility responsibility note, pressure test claims and permit sentences; toilet FAQ 5 single-visit timing; faucet and sink careful-installation item; disposal FAQ 2 reset instruction.
7. Truncated or fabricated content: none known.

## Schema, metadata, alt text, headings, links

Five JSON-LD blocks per page in order; HowTo and FAQPage derive from the arrays that render the visible content. Metadata equals the appendix values. Headings: one h1, h2 per section, h3 for cards, blocks and steps. Each page links to the core service page twice (causes intro and related list) and to other Summerlin and cross-city pages from the appendices; all resolve in the built HTML.

## Gate 4 raw output

- `npx tsc --noEmit`: no output (pass). `npx eslint` on each new page: no output (pass). `npm run build`: exit 0, "OK: wrote docs/seo/route-manifest.json with 124 route(s)".
- Manifest: routeCount 124, warnings []. New routes: /summerlin/water-pipe-repair-replacement, /summerlin/gas-line-plumbing, /summerlin/toilet-repair-installation, /summerlin/faucet-sink-repair-installation, /summerlin/garbage-disposal-repair-installation.
- Source grep on the five new files for the em dash, double hyphen, emergency, Emergency, 24/7, over 40, AggregateRating, PostalCodeSpecification, sameAs, LocalBusiness, hasCredential, guarantee, warranty, Google: 0 hits in every file (a code comment containing "guaranteed" was reworded).
- Remaining core hrefs for the five services in the hub and app/summerlin: one parent link in the causes intro and one in the related list on each new page; none elsewhere.
- `git diff --stat` for existing files: hub 10 lines (5 hrefs), repiping 1 line, slab leak 1 line, plus the generated manifest.
- Verifier note: the "extra" step blocks are numbered list items (number plus step name plus step text) and are matched separately as exact strings; all 98 to 104 expected strings per page were found.

### Verifier output (string-set diff, JSON-LD vs visible, schema, metadata, links, gas panel, sitemap)

```text

=== /summerlin/water-pipe-repair-replacement/
  [3] exists: out/summerlin/water-pipe-repair-replacement/index.html (138200 bytes)
  [5] expected strings: 98; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Water Pipe Repair and Replacement in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Water Pipe Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
      extra (not in appendix): Water Pipe Repair and Replacement in Summerlin
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what you are seeing. If water is actively leaking, shut off the water at the 
      extra (not in appendix): Inspection and pipe assessment.A licensed plumber checks accessible supply lines, fittings, and valves, tests for active water loss if neede
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or replacement with pressure test.We complete the approved work, pressure test it, restore service, and clean up before leaving. Perm
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Water Pipe Service in Summerlin" desc="The process Red Carpet Plumbing follows for water pipe repair and replacement in Summerlin, NV."
  [7] Service.name/serviceType = Water Pipe Repair and Replacement / Water Pipe Repair and Replacement
      Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Water Pipe Repair and Replacement in Summerlin -> https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Water Pipe Repair and Replacement in Summerlin"]
      WebPage = {"name":"Water Pipe Repair and Replacement in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Water Pipe Repair and Replacement in Summerlin, NV | Red Carpet Plumbing"
      description="Water pipe repair and replacement in Summerlin, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/
      og:title="Water Pipe Repair and Replacement in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (33); in <main> (10):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /summerlin-plumbing-services/  resolved
      [main] /water-pipe-repair-replacement/  resolved
      [main] /summerlin/repiping/  resolved
      [main] /summerlin/slab-leak-detection-repair/  resolved
      [main] /summerlin/leak-detection-repair/  resolved
      [main] /summerlin/water-heater-repair-installation/  resolved
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

=== /summerlin/gas-line-plumbing/
  [3] exists: out/summerlin/gas-line-plumbing/index.html (143322 bytes)
  [5] expected strings: 104; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Gas Line Plumbing in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Gas Line Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
      extra (not in appendix): Gas Line Plumbing in Summerlin
      extra (not in appendix): If you smell gas, leave first.If you smell gas, leave the building and call Southwest Gas from outside before you call us. For other gas lin
      extra (not in appendix): Inspection and testing.A licensed plumber inspects the gas line, connections, and appliances, and pressure tests the system to find the caus
      extra (not in appendix): Review options and approve.We explain what we found and the repair, replacement, or installation options that apply. You approve the work be
      extra (not in appendix): Repair or installation with final pressure test.We complete the approved work, pressure test it, and confirm it is safe before gas is restor
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Gas Line Service in Summerlin" desc="The process Red Carpet Plumbing follows for gas line service in Summerlin, NV."
  [7] Service.name/serviceType = Gas Line Plumbing / Gas Line Plumbing
      Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Gas Line Plumbing in Summerlin -> https://redcarpetplumbing.com/summerlin/gas-line-plumbing/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Gas Line Plumbing in Summerlin"]
      WebPage = {"name":"Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/gas-line-plumbing/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing"
      description="Gas line repair, installation, and inspection in Summerlin, NV. Appliance hookups and outdoor gas lines. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/gas-line-plumbing/
      og:title="Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/gas-line-plumbing/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (33); in <main> (10):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /summerlin-plumbing-services/  resolved
      [main] /gas-line-plumbing/  resolved
      [main] /summerlin/water-heater-repair-installation/  resolved
      [main] /summerlin/leak-detection-repair/  resolved
      [main] /henderson/gas-line-plumbing/  resolved
      [main] /las-vegas/gas-line-plumbing/  resolved
      [main] /summerlin/water-pipe-repair-replacement/  resolved
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
  [10] gas safety panel present: true; after hero: true; before direct answer: true
      anchors inside panel: 0; buttons inside panel: 0; steps (li): 5
      panel markup: <section aria-label="Gas safety instructions" class="bg-white"><div class="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-10"><div class="rounded-2xl border-2 border-brand-primary bg-brand-surface-alt p-6 sm:p-8"><h2 class="text-2xl tracking-tight text-brand-dark sm:text-3xl">If You Smell Gas in Your Summerlin Home</h2><ol class="mt-6 space-y-4"><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">1</span><span class="text-base leading-7 text-brand-dark/85">Do not turn any electrical switches on or off. Do not use a phone inside the building.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">2</span><span class="text-base leading-7 text-brand-dark/85">Leave the building immediately. Leave the door open as you exit.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">3</span><span class="text-base leading-7 text-brand-dark/85">Move away from the building and call Southwest Gas at 1-800-935-4748 from a safe location.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white">4</span><span class="text-base leading-7 text-brand-dark/85">Do not re-enter the building until Southwest Gas has cleared the area.</span></li><li class="flex items-start gap-3"><span aria-hidden="true" class="inline-flex h-7 w-7 flex-none item

=== /summerlin/toilet-repair-installation/
  [3] exists: out/summerlin/toilet-repair-installation/index.html (136101 bytes)
  [5] expected strings: 97; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Toilet Repair and Installation in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Toilet Repair Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
      extra (not in appendix): Toilet Repair and Installation in Summerlin
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what your toilet is doing. If it is overflowing and will not stop, shut off t
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the toilet, tank parts, base seal, flange, supply line, and drain connection to find th
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice for your situation. You a
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new toilet, checks all connections, confirms the fl
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Toilet Service in Summerlin" desc="The process Red Carpet Plumbing follows for toilet repair and installation in Summerlin, NV."
  [7] Service.name/serviceType = Toilet Repair and Installation / Toilet Repair and Installation
      Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Toilet Repair and Installation in Summerlin -> https://redcarpetplumbing.com/summerlin/toilet-repair-installation/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Toilet Repair and Installation in Summerlin"]
      WebPage = {"name":"Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/toilet-repair-installation/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing"
      description="Toilet repair and installation in Summerlin, NV. Running toilets, base leaks, clogs, and replacements. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/toilet-repair-installation/
      og:title="Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/toilet-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (35); in <main> (12):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /summerlin-plumbing-services/  resolved
      [main] /toilet-repair-installation/  resolved
      [main] /summerlin/slab-leak-detection-repair/  resolved
      [main] /summerlin/leak-detection-repair/  resolved
      [main] /summerlin/drain-cleaning/  resolved
      [main] /las-vegas/toilet-repair-installation/  resolved
      [main] /north-las-vegas/toilet-repair-installation/  resolved
      [main] /summerlin/faucet-sink-repair-installation/  resolved
      [main] /summerlin/water-pipe-repair-replacement/  resolved
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

=== /summerlin/faucet-sink-repair-installation/
  [3] exists: out/summerlin/faucet-sink-repair-installation/index.html (135903 bytes)
  [5] expected strings: 97; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Faucet and Sink Repair and Installation in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Faucet and Sink Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
      extra (not in appendix): Faucet and Sink Repair and Installation in Summerlin
      extra (not in appendix): Call and describe the issue.Call (702) 567-9172 and describe what the faucet or sink is doing. If water is leaking under the sink, close the
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the faucet, supply lines, shut-off valves, drain, and trap to find the exact cause.
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new fixture, tests for leaks, checks pressure and d
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Faucet and Sink Service in Summerlin" desc="The process Red Carpet Plumbing follows for faucet and sink repair and installation in Summerlin, NV."
  [7] Service.name/serviceType = Faucet and Sink Repair and Installation / Faucet and Sink Repair and Installation
      Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Faucet and Sink Repair and Installation in Summerlin -> https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Faucet and Sink Repair and Installation in Summerlin"]
      WebPage = {"name":"Faucet and Sink Repair and Installation in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Faucet and Sink Repair and Installation in Summerlin, NV | Red Carpet Plumbing"
      description="Faucet and sink repair and installation in Summerlin, NV. Leaks, drips, low pressure, and new fixtures. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/
      og:title="Faucet and Sink Repair and Installation in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (34); in <main> (11):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /summerlin-plumbing-services/  resolved
      [main] /faucet-sink-repair-installation/  resolved
      [main] /summerlin/drain-cleaning/  resolved
      [main] /plumbing-fixture-repair-replacement-installation/  resolved
      [main] /summerlin/garbage-disposal-repair-installation/  resolved
      [main] /summerlin/leak-detection-repair/  resolved
      [main] /las-vegas/faucet-sink-repair-installation/  resolved
      [main] /summerlin/toilet-repair-installation/  resolved
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

=== /summerlin/garbage-disposal-repair-installation/
  [3] exists: out/summerlin/garbage-disposal-repair-installation/index.html (134090 bytes)
  [5] expected strings: 96; missing from built page: 0; built text blocks not in appendix: 12
      extra (not in appendix): Frequently Asked Questions About Garbage Disposal Repair and Installation in Summerlin, NV
      extra (not in appendix): Related Plumbing Services
      extra (not in appendix): Get Garbage Disposal Help
      extra (not in appendix): Licensed plumbers. Transparent pricing. No hidden fees.
      extra (not in appendix): Tell us what is going on and we will follow up promptly.
      extra (not in appendix): Home
      extra (not in appendix): Summerlin Plumbing Services
      extra (not in appendix): Garbage Disposal Repair and Installation in Summerlin
      extra (not in appendix): Call and describe the problem.Call (702) 567-9172 and describe what the disposal is doing. Turn the disposal off at the switch, and do not p
      extra (not in appendix): Inspection and diagnosis.A licensed plumber inspects the disposal, the power supply, the drain and dishwasher connections, and the sink flan
      extra (not in appendix): Review options and approve.We explain what we found and whether repair or replacement is the more practical choice. You approve the work bef
      extra (not in appendix): Repair or installation with final check.Our plumber completes the repair or installs the new unit, tests it, checks all connections for leak
  JSON-LD blocks: WebPage, BreadcrumbList, Service, HowTo, FAQPage
  [6] FAQPage 7 Q/A equal visible+appendix: true; HowTo 4 steps equal visible+appendix: true
      HowTo name="How We Handle Garbage Disposal Service in Summerlin" desc="The process Red Carpet Plumbing follows for garbage disposal repair and installation in Summerlin, NV."
  [7] Service.name/serviceType = Garbage Disposal Repair and Installation / Garbage Disposal Repair and Installation
      Service.areaServed = {"@type":"Place","name":"Summerlin","containedInPlace":{"@type":"AdministrativeArea","name":"Clark County","containedInPlace":{"@type":"State","name":"Nevada"}}}
      provider = {"@type":"Plumber","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com","telephone":"+17025679172"}
      BreadcrumbList = 1:Home -> https://redcarpetplumbing.com/ | 2:Summerlin Plumbing Services -> https://redcarpetplumbing.com/summerlin-plumbing-services/ | 3:Garbage Disposal Repair and Installation in Summerlin -> https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/
      visible breadcrumb = ["Home","Summerlin Plumbing Services","Garbage Disposal Repair and Installation in Summerlin"]
      WebPage = {"name":"Garbage Disposal Repair and Installation in Summerlin, NV | Red Carpet Plumbing","url":"https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/","isPartOf":{"@type":"WebSite","name":"Red Carpet Plumbing","url":"https://redcarpetplumbing.com"}}
  [8] title="Garbage Disposal Repair and Installation in Summerlin, NV | Red Carpet Plumbing"
      description="Garbage disposal repair and installation in Summerlin, NV. Jams, leaks, humming, and replacements. NV #048585A. Call (702) 567-9172."
      canonical=https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/
      og:title="Garbage Disposal Repair and Installation in Summerlin, NV | Red Carpet Plumbing" og:description matches desc: true og:url=https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/ robots=index, follow
      hero image file referenced: true; alt present: false
  [9] hrefs on page (32); in <main> (9):
             #main  anchor
      [main] /  resolved
             /about/  resolved
      [main] /contact/  resolved
      [main] tel:+17025679172  tel
      [main] /summerlin-plumbing-services/  resolved
      [main] /garbage-disposal-repair-installation/  resolved
      [main] /summerlin/drain-cleaning/  resolved
      [main] /summerlin/faucet-sink-repair-installation/  resolved
      [main] /las-vegas/garbage-disposal-repair-installation/  resolved
      [main] /summerlin/leak-detection-repair/  resolved
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

[12] sitemap:
  /summerlin/water-pipe-repair-replacement: true
  /summerlin/gas-line-plumbing: true
  /summerlin/toilet-repair-installation: true
  /summerlin/faucet-sink-repair-installation: true
  /summerlin/garbage-disposal-repair-installation: true
  contains /thank-you: false

TOTAL FAILS: 0
```
- Preview server: static http.server on port 3100 serving out/.
