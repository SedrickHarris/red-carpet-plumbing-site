# Internal Linking Audit Report (Gate 1, report only)

Audited commit: `4067cb3538c478a82db89974b4c565958d9dbda2` (main), 2026-11-18. No site file was changed by this audit. No commit, stage, or push.

## 1. Summary (every count produced by a script in `scripts/audit/`)

| item | value | source |
|---|---|---|
| Routes in manifest | 136 (`/thank-you/` present, noindex) | `scan-routes.mjs` output |
| Sitemap URLs | 135 (137 built pages, 2 noindex excluded: `/thank-you/`, `/_not-found/`) | `check-sitemap-sync.mjs` in postbuild |
| Broken or non-resolving internal hrefs | 0 | `graph.py broken` |
| Routes with 0 contextual inbound | 2 (`/sitemap/`, `/thank-you/`; both utility) | `graph.py orphans` |
| Routes with 1 to 2 contextual inbound | 6 (`/`, `/terms-and-conditions/`, `/henderson/backflow-prevention/`, `/paradise/backflow-prevention/`, `/paradise/gas-line-plumbing/`, `/summerlin/gas-line-plumbing/`) | `graph.py orphans` |
| Candidate unlinked mentions detected (raw) | 749 | `opps.py` |
| Excluded as metadata, schema, hero direct answer, or trust strip matches | 61 | `report.py` |
| Low priority (target already linked from a card or CTA on that page) | 481 (counted, not itemized) | `report.py` |
| Itemized opportunities (High + Medium, capped per page) | 93 | `report.py` |
| Deferred by per-page cap (4 new, or 8 minus existing body links) | 25 | `report.py` |

Note: "contextual" = main-region links in body paragraphs, FAQ answers, and card/CTA blocks. Header, footer, and breadcrumb links are counted separately. Region assignment is a parser heuristic: a link inside a `<p>` is body, inside `<details>` is FAQ, other links inside `<main>` are card/CTA (this includes hero buttons and sticky CTAs).

## 2. Environment and ground truth

Docs found (full path): `docs/site-os/client-context/red-carpet-plumbing-project-context.md`, `.../red-carpet-plumbing-brand-guide.md`, `.../style-guide.md`, `docs/site-os/inputs/red-carpet-plumbing-build-list.md` (section 8.6 at line 1394), `docs/site-os/master-prompts/prompts/10-internal-linking-strategy-prompt.md`, `docs/seo/route-manifest.json`.

**NOT FOUND:** `docs/site-os/client-context/red-carpet-plumbing-sitemap.md` does not exist, so the "136 routes (135 in sitemap)" figure could not be checked against it. The manifest (136) and `check-sitemap-sync` (135 sitemap URLs) agree with the figure you quoted. Manifest is treated as truth.

- Manifest regenerated with `node seo-automation/scripts/scan-routes.mjs` (`scripts/scan-routes.mjs` does not exist; the script lives in `seo-automation/scripts/`). Output: `OK: wrote docs/seo/route-manifest.json with 136 route(s).` This modified the tracked `docs/seo/route-manifest.json` (33 insertions, 26 deletions; includes real changes from the latest commit, e.g. NLV emergency title and href lists, not only timestamp noise). Left unstaged.
- `out/` predated the latest commit, so `npm run build` was run. Exit 0. `out/index.html` timestamp 2026-11-18 10:27:57. Never used `next start`.
- Manifest routes have no trailing slash (`/about`); built hrefs do (`/about/`). Audit normalizes by adding the slash.
- Route groups: core pages 5, utility 4, core services 18, location hubs 10 Tier 1 + 1 Tier 2 (Aliante) = 11, service-location pages 98 (93 city pages + 5 Aliante pages). Total 136. The prompt says 11 hubs; the 11th is `/north-las-vegas/aliante-area-plumbing/`.

## 3. Authoring map and constraints

| Concern | Where |
|---|---|
| Link component | `next/link` in 144 files; one plain `<a>` in `components/LegalDocument.tsx:43`. All authored internal hrefs end in a trailing slash except `/` (grep clean). |
| Header nav | `components/SiteHeader.tsx:13` (NAV_LINKS), dropdown arrays below it |
| Footer | `components/SiteFooter.tsx:6` (CORE_SERVICES), `:25` (TIER_1_LOCATIONS), `:39` (GET_IN_TOUCH) |
| Breadcrumbs | `components/Breadcrumbs.tsx:61` |
| Service cards | `components/ServiceCard.tsx:40,54` |
| Button / CTA links | `components/Button.tsx:214` |
| Per-page related-service and service-area arrays | Per page, not shared: `const RELATED_SERVICES` in 86 page files, `const SERVICE_AREA_LINKS` in 18 core service pages (e.g. `app/backflow-prevention/page.tsx:242`, rendered at `:679-:705`). Entries without `href` render as unlinked list items. |
| Body paragraphs | Inline JSX or per-page consts in each `page.tsx` (route source in manifest `sourceFile`). Some consts carry a `link: {href,text}` object. No shared MDX or CMS. Inline links in prose are possible today only by editing JSX or that page-level const shape. |
| FAQs | One `const *_FAQS: FaqItem[]` per page (e.g. `app/las-vegas/drain-cleaning/page.tsx:54`), feeding both `<FaqSection faqs=...>` and the FAQPage JSON-LD (`faqSchema`). Type at `lib/faq.ts:8`. Answers are plain strings. |
| FAQ inline link support | **Already exists.** `FaqItem.link?: {phrase, href}` (`lib/faq.ts:14`), rendered by `FaqAnswer` in `components/FaqSection.tsx:188-205` by slicing `answer` around `phrase`, so visible text equals schema text. Used today by 2 items, both in `app/north-las-vegas/water-pipe-repair-replacement/page.tsx` (lines 177, 191). |

Authoring constraints:
- Hero and FAQ copy are string consts; a link means editing the const shape or JSX, not just text.
- `SERVICE_AREA_LINKS` and `RELATED_SERVICES` are hand-maintained per page and have gone stale (see batch 1).
- FAQ link support is one link per FAQ item (single `link` field).
- Manifest `internalHrefs` is source-derived and can lag `out/`; this audit used `out/` HTML.

## 4. Link graph tables (full output)

### 4.1 Inbound links per route (ascending by contextual)

| route | group | inbound contextual | inbound nav/footer/breadcrumb | inbound total |
|---|---|---|---|---|
| /sitemap/ | utility | 0 | 135 | 135 |
| /thank-you/ | utility | 0 | 0 | 0 |
| / | core page | 2 | 539 | 541 |
| /henderson/backflow-prevention/ | service-location | 2 | 0 | 2 |
| /paradise/backflow-prevention/ | service-location | 2 | 0 | 2 |
| /paradise/gas-line-plumbing/ | service-location | 2 | 0 | 2 |
| /summerlin/gas-line-plumbing/ | service-location | 2 | 0 | 2 |
| /terms-and-conditions/ | utility | 2 | 135 | 137 |
| /henderson/toilet-repair-installation/ | service-location | 3 | 0 | 3 |
| /north-las-vegas/garbage-disposal-repair-installation/ | service-location | 3 | 0 | 3 |
| /north-las-vegas/repiping/ | service-location | 3 | 0 | 3 |
| /summerlin/toilet-repair-installation/ | service-location | 3 | 0 | 3 |
| /green-valley/emergency-plumbing/ | service-location | 4 | 0 | 4 |
| /lake-las-vegas/leak-detection-repair/ | service-location | 4 | 0 | 4 |
| /las-vegas/water-pipe-repair-replacement/ | service-location | 4 | 0 | 4 |
| /north-las-vegas/commercial-plumbing/ | service-location | 4 | 0 | 4 |
| /boulder-city/leak-detection-repair/ | service-location | 5 | 0 | 5 |
| /enterprise/sewer-line-services/ | service-location | 5 | 0 | 5 |
| /green-valley/faucet-sink-repair-installation/ | service-location | 5 | 0 | 5 |
| /henderson/faucet-sink-repair-installation/ | service-location | 5 | 0 | 5 |
| /henderson/garbage-disposal-repair-installation/ | service-location | 5 | 0 | 5 |
| /las-vegas/toilet-repair-installation/ | service-location | 5 | 0 | 5 |
| /north-las-vegas/sewer-line-services/ | service-location | 5 | 0 | 5 |
| /north-las-vegas/toilet-repair-installation/ | service-location | 5 | 0 | 5 |
| /paradise/sewer-line-services/ | service-location | 5 | 0 | 5 |
| /summerlin/faucet-sink-repair-installation/ | service-location | 5 | 0 | 5 |
| /summerlin/garbage-disposal-repair-installation/ | service-location | 5 | 0 | 5 |
| /summerlin/sewer-line-services/ | service-location | 5 | 0 | 5 |
| /boulder-city/drain-cleaning/ | service-location | 6 | 0 | 6 |
| /green-valley/toilet-repair-installation/ | service-location | 6 | 0 | 6 |
| /henderson/commercial-plumbing/ | service-location | 6 | 0 | 6 |
| /henderson/gas-line-plumbing/ | service-location | 6 | 0 | 6 |
| /henderson/water-pipe-repair-replacement/ | service-location | 6 | 0 | 6 |
| /lake-las-vegas/water-heater-repair-installation/ | service-location | 6 | 0 | 6 |
| /las-vegas/faucet-sink-repair-installation/ | service-location | 6 | 0 | 6 |
| /las-vegas/garbage-disposal-repair-installation/ | service-location | 6 | 0 | 6 |
| /las-vegas/gas-line-plumbing/ | service-location | 6 | 0 | 6 |
| /boulder-city/emergency-plumbing/ | service-location | 7 | 0 | 7 |
| /boulder-city/water-heater-repair-installation/ | service-location | 7 | 0 | 7 |
| /enterprise/commercial-plumbing/ | service-location | 7 | 0 | 7 |
| /lake-las-vegas/drain-cleaning/ | service-location | 7 | 0 | 7 |
| /las-vegas/backflow-prevention/ | service-location | 7 | 0 | 7 |
| /summerlin/water-pipe-repair-replacement/ | service-location | 7 | 0 | 7 |
| /boulder-city-plumbing-services/ | location hub | 8 | 139 | 147 |
| /enterprise/repiping/ | service-location | 8 | 0 | 8 |
| /green-valley/repiping/ | service-location | 8 | 0 | 8 |
| /lake-las-vegas/emergency-plumbing/ | service-location | 8 | 0 | 8 |
| /north-las-vegas/water-pipe-repair-replacement/ | service-location | 8 | 0 | 8 |
| /spring-valley/commercial-plumbing/ | service-location | 8 | 0 | 8 |
| /lake-las-vegas/slab-leak-detection-repair/ | service-location | 9 | 0 | 9 |
| /las-vegas/video-camera-plumbing-inspections/ | service-location | 9 | 0 | 9 |
| /spring-valley/sewer-line-services/ | service-location | 9 | 0 | 9 |
| /summerlin/emergency-plumbing/ | service-location | 9 | 0 | 9 |
| /enterprise/emergency-plumbing/ | service-location | 10 | 0 | 10 |
| /enterprise/leak-detection-repair/ | service-location | 10 | 0 | 10 |
| /enterprise/slab-leak-detection-repair/ | service-location | 10 | 0 | 10 |
| /las-vegas/commercial-plumbing/ | service-location | 10 | 0 | 10 |
| /north-las-vegas/leak-detection-repair/ | service-location | 10 | 0 | 10 |
| /plumbing-services/ | core page | 10 | 135 | 145 |
| /enterprise-plumbing-services/ | location hub | 11 | 143 | 154 |
| /enterprise/drain-cleaning/ | service-location | 11 | 0 | 11 |
| /enterprise/water-heater-repair-installation/ | service-location | 11 | 0 | 11 |
| /green-valley/water-heater-repair-installation/ | service-location | 11 | 0 | 11 |
| /henderson/sewer-line-services/ | service-location | 11 | 0 | 11 |
| /north-las-vegas/aliante-area/drain-cleaning/ | service-location | 11 | 0 | 11 |
| /north-las-vegas/emergency-plumbing/ | service-location | 11 | 0 | 11 |
| /north-las-vegas/water-heater-repair-installation/ | service-location | 11 | 0 | 11 |
| /paradise-plumbing-services/ | location hub | 11 | 143 | 154 |
| /about/ | core page | 12 | 270 | 282 |
| /henderson/repiping/ | service-location | 12 | 0 | 12 |
| /north-las-vegas/aliante-area/leak-detection-repair/ | service-location | 12 | 0 | 12 |
| /north-las-vegas/aliante-area/water-heater-repair-installation/ | service-location | 12 | 0 | 12 |
| /north-las-vegas/slab-leak-detection-repair/ | service-location | 12 | 0 | 12 |
| /green-valley/drain-cleaning/ | service-location | 13 | 0 | 13 |
| /green-valley/leak-detection-repair/ | service-location | 13 | 0 | 13 |
| /north-las-vegas/aliante-area/slab-leak-detection-repair/ | service-location | 13 | 0 | 13 |
| /north-las-vegas/drain-cleaning/ | service-location | 13 | 0 | 13 |
| /paradise/drain-cleaning/ | service-location | 13 | 0 | 13 |
| /paradise/leak-detection-repair/ | service-location | 13 | 0 | 13 |
| /paradise/water-heater-repair-installation/ | service-location | 13 | 0 | 13 |
| /las-vegas/repiping/ | service-location | 14 | 0 | 14 |
| /north-las-vegas-plumbing-services/ | location hub | 14 | 152 | 166 |
| /north-las-vegas/aliante-area/emergency-plumbing/ | service-location | 14 | 0 | 14 |
| /paradise/commercial-plumbing/ | service-location | 14 | 0 | 14 |
| /spring-valley/repiping/ | service-location | 14 | 0 | 14 |
| /spring-valley/slab-leak-detection-repair/ | service-location | 14 | 0 | 14 |
| /spring-valley/water-heater-repair-installation/ | service-location | 14 | 0 | 14 |
| /summerlin/repiping/ | service-location | 14 | 0 | 14 |
| /summerlin/water-heater-repair-installation/ | service-location | 14 | 0 | 14 |
| /water-meter-pressure-regulator-services/ | core service | 14 | 0 | 14 |
| /spring-valley/drain-cleaning/ | service-location | 15 | 0 | 15 |
| /spring-valley/leak-detection-repair/ | service-location | 15 | 0 | 15 |
| /summerlin/slab-leak-detection-repair/ | service-location | 15 | 0 | 15 |
| /garbage-disposal-repair-installation/ | core service | 16 | 0 | 16 |
| /gas-line-plumbing/ | core service | 16 | 0 | 16 |
| /las-vegas/sewer-line-services/ | service-location | 16 | 0 | 16 |
| /paradise/emergency-plumbing/ | service-location | 16 | 0 | 16 |
| /spring-valley/emergency-plumbing/ | service-location | 16 | 0 | 16 |
| /henderson/water-heater-repair-installation/ | service-location | 17 | 0 | 17 |
| /las-vegas/slab-leak-detection-repair/ | service-location | 17 | 0 | 17 |
| /summerlin/drain-cleaning/ | service-location | 17 | 0 | 17 |
| /green-valley/slab-leak-detection-repair/ | service-location | 18 | 0 | 18 |
| /henderson/slab-leak-detection-repair/ | service-location | 18 | 0 | 18 |
| /spring-valley-plumbing-services/ | location hub | 19 | 143 | 162 |
| /summerlin/leak-detection-repair/ | service-location | 19 | 0 | 19 |
| /faucet-sink-repair-installation/ | core service | 20 | 0 | 20 |
| /henderson/drain-cleaning/ | service-location | 20 | 0 | 20 |
| /toilet-repair-installation/ | core service | 20 | 0 | 20 |
| /henderson/emergency-plumbing/ | service-location | 21 | 0 | 21 |
| /las-vegas/water-heater-repair-installation/ | service-location | 21 | 0 | 21 |
| /plumbing-fixture-repair-replacement-installation/ | core service | 21 | 0 | 21 |
| /trenchless-piping/ | core service | 21 | 0 | 21 |
| /las-vegas/emergency-plumbing/ | service-location | 23 | 0 | 23 |
| /las-vegas/leak-detection-repair/ | service-location | 23 | 0 | 23 |
| /north-las-vegas/aliante-area-plumbing/ | location hub (T2) | 23 | 140 | 163 |
| /henderson/leak-detection-repair/ | service-location | 24 | 0 | 24 |
| /lake-las-vegas-plumbing-services/ | location hub | 24 | 140 | 164 |
| /summerlin-plumbing-services/ | location hub | 24 | 147 | 171 |
| /backflow-prevention/ | core service | 25 | 0 | 25 |
| /las-vegas/drain-cleaning/ | service-location | 28 | 0 | 28 |
| /water-heater-repair-installation/ | core service | 29 | 135 | 164 |
| /commercial-plumbing/ | core service | 31 | 135 | 166 |
| /green-valley-plumbing-services/ | location hub | 32 | 143 | 175 |
| /water-pipe-repair-replacement/ | core service | 34 | 0 | 34 |
| /las-vegas-plumbing-services/ | location hub | 36 | 150 | 186 |
| /repiping/ | core service | 36 | 135 | 171 |
| /slab-leak-detection-repair/ | core service | 40 | 135 | 175 |
| /sewer-line-services/ | core service | 41 | 135 | 176 |
| /drain-cleaning/ | core service | 42 | 135 | 177 |
| /emergency-plumbing/ | core service | 44 | 135 | 179 |
| /video-camera-plumbing-inspections/ | core service | 44 | 0 | 44 |
| /henderson-plumbing-services/ | location hub | 49 | 151 | 200 |
| /leak-detection-repair/ | core service | 51 | 135 | 186 |
| /service-areas/ | core page | 53 | 146 | 199 |
| /privacy-policy/ | utility | 135 | 135 | 270 |
| /contact/ | core page | 345 | 270 | 615 |

### 4.2 Outbound links per route

| route | group | outbound contextual | outbound nav/footer/breadcrumb |
|---|---|---|---|
| / | core page | 26 | 28 |
| /about/ | core page | 5 | 30 |
| /contact/ | core page | 21 | 30 |
| /plumbing-services/ | core page | 24 | 31 |
| /service-areas/ | core page | 25 | 31 |
| /backflow-prevention/ | core service | 14 | 32 |
| /commercial-plumbing/ | core service | 18 | 31 |
| /drain-cleaning/ | core service | 23 | 31 |
| /emergency-plumbing/ | core service | 23 | 31 |
| /faucet-sink-repair-installation/ | core service | 15 | 32 |
| /garbage-disposal-repair-installation/ | core service | 14 | 32 |
| /gas-line-plumbing/ | core service | 15 | 32 |
| /leak-detection-repair/ | core service | 23 | 31 |
| /plumbing-fixture-repair-replacement-installation/ | core service | 13 | 32 |
| /repiping/ | core service | 18 | 31 |
| /sewer-line-services/ | core service | 14 | 31 |
| /slab-leak-detection-repair/ | core service | 21 | 31 |
| /toilet-repair-installation/ | core service | 15 | 32 |
| /trenchless-piping/ | core service | 13 | 32 |
| /video-camera-plumbing-inspections/ | core service | 14 | 32 |
| /water-heater-repair-installation/ | core service | 23 | 31 |
| /water-meter-pressure-regulator-services/ | core service | 13 | 32 |
| /water-pipe-repair-replacement/ | core service | 13 | 32 |
| /boulder-city-plumbing-services/ | location hub | 28 | 32 |
| /enterprise-plumbing-services/ | location hub | 28 | 32 |
| /green-valley-plumbing-services/ | location hub | 30 | 33 |
| /henderson-plumbing-services/ | location hub | 30 | 32 |
| /lake-las-vegas-plumbing-services/ | location hub | 30 | 33 |
| /las-vegas-plumbing-services/ | location hub | 28 | 32 |
| /north-las-vegas-plumbing-services/ | location hub | 29 | 32 |
| /paradise-plumbing-services/ | location hub | 28 | 32 |
| /spring-valley-plumbing-services/ | location hub | 28 | 32 |
| /summerlin-plumbing-services/ | location hub | 28 | 32 |
| /north-las-vegas/aliante-area-plumbing/ | location hub (T2) | 30 | 33 |
| /boulder-city/drain-cleaning/ | service-location | 13 | 33 |
| /boulder-city/emergency-plumbing/ | service-location | 13 | 33 |
| /boulder-city/leak-detection-repair/ | service-location | 13 | 33 |
| /boulder-city/water-heater-repair-installation/ | service-location | 11 | 33 |
| /enterprise/commercial-plumbing/ | service-location | 14 | 33 |
| /enterprise/drain-cleaning/ | service-location | 14 | 33 |
| /enterprise/emergency-plumbing/ | service-location | 19 | 33 |
| /enterprise/leak-detection-repair/ | service-location | 14 | 33 |
| /enterprise/repiping/ | service-location | 14 | 33 |
| /enterprise/sewer-line-services/ | service-location | 16 | 33 |
| /enterprise/slab-leak-detection-repair/ | service-location | 13 | 33 |
| /enterprise/water-heater-repair-installation/ | service-location | 13 | 33 |
| /green-valley/drain-cleaning/ | service-location | 21 | 33 |
| /green-valley/emergency-plumbing/ | service-location | 23 | 33 |
| /green-valley/faucet-sink-repair-installation/ | service-location | 11 | 33 |
| /green-valley/leak-detection-repair/ | service-location | 21 | 33 |
| /green-valley/repiping/ | service-location | 21 | 33 |
| /green-valley/slab-leak-detection-repair/ | service-location | 21 | 33 |
| /green-valley/toilet-repair-installation/ | service-location | 11 | 33 |
| /green-valley/water-heater-repair-installation/ | service-location | 19 | 33 |
| /henderson/backflow-prevention/ | service-location | 12 | 33 |
| /henderson/commercial-plumbing/ | service-location | 27 | 33 |
| /henderson/drain-cleaning/ | service-location | 16 | 33 |
| /henderson/emergency-plumbing/ | service-location | 14 | 33 |
| /henderson/faucet-sink-repair-installation/ | service-location | 18 | 33 |
| /henderson/garbage-disposal-repair-installation/ | service-location | 14 | 33 |
| /henderson/gas-line-plumbing/ | service-location | 17 | 33 |
| /henderson/leak-detection-repair/ | service-location | 17 | 33 |
| /henderson/repiping/ | service-location | 14 | 33 |
| /henderson/sewer-line-services/ | service-location | 16 | 33 |
| /henderson/slab-leak-detection-repair/ | service-location | 14 | 33 |
| /henderson/toilet-repair-installation/ | service-location | 18 | 33 |
| /henderson/water-heater-repair-installation/ | service-location | 14 | 33 |
| /henderson/water-pipe-repair-replacement/ | service-location | 16 | 33 |
| /lake-las-vegas/drain-cleaning/ | service-location | 10 | 33 |
| /lake-las-vegas/emergency-plumbing/ | service-location | 12 | 33 |
| /lake-las-vegas/leak-detection-repair/ | service-location | 12 | 33 |
| /lake-las-vegas/slab-leak-detection-repair/ | service-location | 12 | 33 |
| /lake-las-vegas/water-heater-repair-installation/ | service-location | 10 | 33 |
| /las-vegas/backflow-prevention/ | service-location | 8 | 33 |
| /las-vegas/commercial-plumbing/ | service-location | 25 | 33 |
| /las-vegas/drain-cleaning/ | service-location | 14 | 33 |
| /las-vegas/emergency-plumbing/ | service-location | 12 | 33 |
| /las-vegas/faucet-sink-repair-installation/ | service-location | 11 | 33 |
| /las-vegas/garbage-disposal-repair-installation/ | service-location | 12 | 33 |
| /las-vegas/gas-line-plumbing/ | service-location | 15 | 33 |
| /las-vegas/leak-detection-repair/ | service-location | 14 | 33 |
| /las-vegas/repiping/ | service-location | 13 | 33 |
| /las-vegas/sewer-line-services/ | service-location | 15 | 33 |
| /las-vegas/slab-leak-detection-repair/ | service-location | 14 | 33 |
| /las-vegas/toilet-repair-installation/ | service-location | 9 | 33 |
| /las-vegas/video-camera-plumbing-inspections/ | service-location | 13 | 33 |
| /las-vegas/water-heater-repair-installation/ | service-location | 13 | 33 |
| /las-vegas/water-pipe-repair-replacement/ | service-location | 17 | 33 |
| /north-las-vegas/aliante-area/drain-cleaning/ | service-location | 18 | 34 |
| /north-las-vegas/aliante-area/emergency-plumbing/ | service-location | 16 | 34 |
| /north-las-vegas/aliante-area/leak-detection-repair/ | service-location | 19 | 34 |
| /north-las-vegas/aliante-area/slab-leak-detection-repair/ | service-location | 21 | 34 |
| /north-las-vegas/aliante-area/water-heater-repair-installation/ | service-location | 16 | 34 |
| /north-las-vegas/commercial-plumbing/ | service-location | 10 | 33 |
| /north-las-vegas/drain-cleaning/ | service-location | 15 | 33 |
| /north-las-vegas/emergency-plumbing/ | service-location | 21 | 33 |
| /north-las-vegas/garbage-disposal-repair-installation/ | service-location | 15 | 33 |
| /north-las-vegas/leak-detection-repair/ | service-location | 15 | 33 |
| /north-las-vegas/repiping/ | service-location | 7 | 33 |
| /north-las-vegas/sewer-line-services/ | service-location | 10 | 33 |
| /north-las-vegas/slab-leak-detection-repair/ | service-location | 19 | 33 |
| /north-las-vegas/toilet-repair-installation/ | service-location | 10 | 33 |
| /north-las-vegas/water-heater-repair-installation/ | service-location | 13 | 33 |
| /north-las-vegas/water-pipe-repair-replacement/ | service-location | 10 | 33 |
| /paradise/backflow-prevention/ | service-location | 12 | 33 |
| /paradise/commercial-plumbing/ | service-location | 18 | 33 |
| /paradise/drain-cleaning/ | service-location | 16 | 33 |
| /paradise/emergency-plumbing/ | service-location | 15 | 33 |
| /paradise/gas-line-plumbing/ | service-location | 15 | 33 |
| /paradise/leak-detection-repair/ | service-location | 18 | 33 |
| /paradise/sewer-line-services/ | service-location | 15 | 33 |
| /paradise/water-heater-repair-installation/ | service-location | 16 | 33 |
| /spring-valley/commercial-plumbing/ | service-location | 23 | 33 |
| /spring-valley/drain-cleaning/ | service-location | 20 | 33 |
| /spring-valley/emergency-plumbing/ | service-location | 20 | 33 |
| /spring-valley/leak-detection-repair/ | service-location | 21 | 33 |
| /spring-valley/repiping/ | service-location | 12 | 33 |
| /spring-valley/sewer-line-services/ | service-location | 15 | 33 |
| /spring-valley/slab-leak-detection-repair/ | service-location | 22 | 33 |
| /spring-valley/water-heater-repair-installation/ | service-location | 19 | 33 |
| /summerlin/drain-cleaning/ | service-location | 16 | 33 |
| /summerlin/emergency-plumbing/ | service-location | 15 | 33 |
| /summerlin/faucet-sink-repair-installation/ | service-location | 16 | 33 |
| /summerlin/garbage-disposal-repair-installation/ | service-location | 14 | 33 |
| /summerlin/gas-line-plumbing/ | service-location | 14 | 33 |
| /summerlin/leak-detection-repair/ | service-location | 16 | 33 |
| /summerlin/repiping/ | service-location | 17 | 33 |
| /summerlin/sewer-line-services/ | service-location | 14 | 33 |
| /summerlin/slab-leak-detection-repair/ | service-location | 16 | 33 |
| /summerlin/toilet-repair-installation/ | service-location | 16 | 33 |
| /summerlin/water-heater-repair-installation/ | service-location | 15 | 33 |
| /summerlin/water-pipe-repair-replacement/ | service-location | 16 | 33 |
| /privacy-policy/ | utility | 1 | 31 |
| /sitemap/ | utility | 135 | 31 |
| /terms-and-conditions/ | utility | 3 | 31 |
| /thank-you/ | utility | 1 | 31 |

### 4.3 Broken or non-resolving internal hrefs

Result: 0 rows (`graph.py broken` printed an empty table). No missing trailing slashes, no non-manifest targets, no links to `/thank-you/`.

### 4.4 Orphans and near-orphans

zero 2
| route | group | nav inbound |
|---|---|---|
| /sitemap/ | utility | 135 |
| /thank-you/ | utility | 0 |
fewer than 3 6
| route | group | ctx inbound | nav inbound |
|---|---|---|---|
| / | core page | 2 | 539 |
| /henderson/backflow-prevention/ | service-location | 2 | 0 |
| /paradise/backflow-prevention/ | service-location | 2 | 0 |
| /paradise/gas-line-plumbing/ | service-location | 2 | 0 |
| /summerlin/gas-line-plumbing/ | service-location | 2 | 0 |
| /terms-and-conditions/ | utility | 2 | 135 |

Observation: `/` shows only 2 contextual inbound because every page reaches it through the header logo and nav (539 nav inbound). `/sitemap/` is reached from the footer only (135).

## 5. Opportunity list (High, then Medium)

Rules applied: first mention only per page and target; targets from manifest only; no `/thank-you/`; anchors are existing text; hero direct answers, trust strips, metadata and schema strings excluded; at most 4 new links per page and never past 8 body links. Pages already above 8 body links: 17 (list in section 9). Priority: High = target not yet linked from that page AND (target is a near-orphan or a money page); Medium = target not yet linked from that page; Low = already linked from a card or CTA (counted only).

| ID | Source route | Source file:line (const) | Region | Existing phrase | Anchor | Target | Type | Priority | Risk notes |
|---|---|---|---|---|---|---|---|---|---|
| IL-001 | /backflow-prevention/ | app/backflow-prevention/page.tsx:242 (const SERVICE_AREA_LINKS) | Body list | "Henderson; Paradise; Boulder City; Enterprise; Green Valley; Lake Las Vegas; Spring Valley; Summerlin" | Henderson; Paradise; Boulder City; Enterprise; Green Valley; Lake Las Vegas; Spring Valley; Summerlin | /henderson/backflow-prevention/; /paradise/backflow-prevention/; /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /lake-las-vegas-plumbing-services/; /spring-valley-plumbing-services/; /summerlin-plumbing-services/ | B | High | 8 list entries lack href; data-array edit only, no copy change; confirm topical fit |
| IL-002 | /boulder-city/emergency-plumbing/ | app/boulder-city/emergency-plumbing/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "leak detection and repair" | leak detection and repair | /boulder-city/leak-detection-repair/ | G | High | confirm topical fit; line UNVERIFIED |
| IL-003 | /commercial-plumbing/ | app/commercial-plumbing/page.tsx:60 (const COMMERCIAL_FAQS) | FAQ: What are the most common commercial plumbing problems in Las Vegas? | "slab leaks" | slab leaks | /slab-leak-detection-repair/ | H(G) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-004 | /commercial-plumbing/ | app/commercial-plumbing/page.tsx:107 (const COMMERCIAL_WARNING_SIGNS) | Body | "water heater" | water heater | /water-heater-repair-installation/ | G | High | confirm topical fit |
| IL-005 | /emergency-plumbing/ | app/emergency-plumbing/page.tsx:180 (const EMERGENCY_SERVICE_TYPES) | Body | "sewer line" | sewer line | /sewer-line-services/ | G | High | confirm topical fit |
| IL-006 | /enterprise/emergency-plumbing/ | app/enterprise/emergency-plumbing/page.tsx:155 (const COMMON_PROBLEMS) | Body | "Sewer line" | Sewer line | /enterprise/sewer-line-services/ | G | High | confirm topical fit |
| IL-007 | /enterprise/slab-leak-detection-repair/ | app/enterprise/slab-leak-detection-repair/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "drain cleaning" | drain cleaning | /enterprise/drain-cleaning/ | G | High | confirm topical fit; line UNVERIFIED |
| IL-008 | /gas-line-plumbing/ | app/gas-line-plumbing/page.tsx:240 (const SERVICE_AREA_LINKS) | Body list | "Paradise; Summerlin; Boulder City; Enterprise; Green Valley; Lake Las Vegas; North Las Vegas; Spring Valley" | Paradise; Summerlin; Boulder City; Enterprise; Green Valley; Lake Las Vegas; North Las Vegas; Spring Valley | /paradise/gas-line-plumbing/; /summerlin/gas-line-plumbing/; /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /spring-valley-plumbing-services/ | B | High | 8 list entries lack href; data-array edit only, no copy change; confirm topical fit |
| IL-009 | /henderson/commercial-plumbing/ | app/henderson/commercial-plumbing/page.tsx:136 (const WHO_WE_SERVE) | Body | "backflow prevention" | backflow prevention | /henderson/backflow-prevention/ | G | High | confirm topical fit |
| IL-010 | /henderson/commercial-plumbing/ | app/henderson/commercial-plumbing/page.tsx:211 (const COMMERCIAL_SERVICES) | Body | "repiping" | repiping | /henderson/repiping/ | G | High | confirm topical fit |
| IL-011 | /henderson/commercial-plumbing/ | app/henderson/commercial-plumbing/page.tsx:82 (const HENDERSON_COMMERCIAL_FAQS) | FAQ: What are the most common commercial plumbing problems in Henderson? | "slab leaks" | slab leaks | /henderson/slab-leak-detection-repair/ | H(G) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-012 | /henderson/leak-detection-repair/ | app/henderson/leak-detection-repair/page.tsx:159 (const HENDERSON_LEAK_CAUSES) | Body | "backflow" | backflow | /henderson/backflow-prevention/ | G | High | confirm topical fit |
| IL-013 | /henderson/water-heater-repair-installation/ | app/henderson/water-heater-repair-installation/page.tsx:133 (const HENDERSON_WH_CAUSES) | Body | "backflow" | backflow | /henderson/backflow-prevention/ | G | High | confirm topical fit |
| IL-014 | /lake-las-vegas/emergency-plumbing/ | app/lake-las-vegas/emergency-plumbing/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "leak detection and repair" | leak detection and repair | /lake-las-vegas/leak-detection-repair/ | G | High | confirm topical fit; line UNVERIFIED |
| IL-015 | /lake-las-vegas/water-heater-repair-installation/ | app/lake-las-vegas/water-heater-repair-installation/page.tsx:228 (const LLV_WH_REROUTING) | Body | "leak detection" | leak detection | /lake-las-vegas/leak-detection-repair/ | G | High | confirm topical fit |
| IL-016 | /las-vegas/commercial-plumbing/ | app/las-vegas/commercial-plumbing/page.tsx:211 (const COMMERCIAL_SERVICES) | Body | "repiping" | repiping | /las-vegas/repiping/ | G | High | confirm topical fit |
| IL-017 | /las-vegas/commercial-plumbing/ | app/las-vegas/commercial-plumbing/page.tsx:76 (const LV_COMMERCIAL_FAQS) | FAQ: What are the most common commercial plumbing problems in Las Vegas? | "slab leaks" | slab leaks | /las-vegas/slab-leak-detection-repair/ | H(G) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-018 | /las-vegas/leak-detection-repair/ | app/las-vegas/leak-detection-repair/page.tsx:128 (const LV_LEAK_CAUSES) | Body | "sewer line" | sewer line | /las-vegas/sewer-line-services/ | G | High | confirm topical fit |
| IL-019 | /las-vegas/toilet-repair-installation/ | app/las-vegas/toilet-repair-installation/page.tsx:207 (const LV_TOILET_WARNING_SIGNS) | Body | "sewer line" | sewer line | /las-vegas/sewer-line-services/ | G | High | confirm topical fit |
| IL-020 | /leak-detection-repair/ | app/leak-detection-repair/page.tsx:204 (const LV_LEAK_FACTORS) | Body | "sewer line" | sewer line | /sewer-line-services/ | G | High | confirm topical fit |
| IL-021 | /north-las-vegas/commercial-plumbing/ | app/north-las-vegas/commercial-plumbing/page.tsx:130 (const NLV_COMMERCIAL_SERVICES) | Body | "drain cleaning" | drain cleaning | /north-las-vegas/drain-cleaning/ | G | High | confirm topical fit |
| IL-022 | /north-las-vegas/commercial-plumbing/ | app/north-las-vegas/commercial-plumbing/page.tsx:132 (const NLV_COMMERCIAL_SERVICES) | Body | "leak detection" | leak detection | /north-las-vegas/leak-detection-repair/ | G | High | confirm topical fit |
| IL-023 | /north-las-vegas/commercial-plumbing/ | app/north-las-vegas/commercial-plumbing/page.tsx:133 (const NLV_COMMERCIAL_SERVICES) | Body | "sewer line services" | sewer line services | /north-las-vegas/sewer-line-services/ | G | High | confirm topical fit |
| IL-024 | /north-las-vegas/commercial-plumbing/ | app/north-las-vegas/commercial-plumbing/page.tsx:198 (const NLV_COMMERCIAL_FAQS) | FAQ: What are common commercial plumbing problems for North Las Vegas businesses? | "slab leaks" | slab leaks | /north-las-vegas/slab-leak-detection-repair/ | H(G) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-025 | /north-las-vegas/repiping/ | app/north-las-vegas/repiping/page.tsx:176 (const NLV_REPIPING_FAQS) | FAQ: Do I need a permit to repipe my house in North Las Vegas? | "Las Vegas" | Las Vegas | /las-vegas/repiping/ | H(F) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-026 | /north-las-vegas/repiping/ | app/north-las-vegas/repiping/page.tsx:125 (const NLV_REPIPING_SIGNS) | Body | "slab leak" | slab leak | /north-las-vegas/slab-leak-detection-repair/ | G | High | confirm topical fit |
| IL-027 | /north-las-vegas/slab-leak-detection-repair/ | app/north-las-vegas/slab-leak-detection-repair/page.tsx:88 (const NLV_SLAB_CAUSES) | Body | "repiping" | repiping | /north-las-vegas/repiping/ | G | High | confirm topical fit |
| IL-028 | /repiping/ | app/repiping/page.tsx:211 (const REPIPING_STEPS) | Body | "North Las Vegas" | North Las Vegas | /north-las-vegas/repiping/ | B | High | confirm topical fit |
| IL-029 | /sewer-line-services/ | app/sewer-line-services/page.tsx:228 (const SERVICE_AREA_LINKS) | Body list | "Enterprise; North Las Vegas; Paradise; Spring Valley; Summerlin; Boulder City; Green Valley; Lake Las Vegas" | Enterprise; North Las Vegas; Paradise; Spring Valley; Summerlin; Boulder City; Green Valley; Lake Las Vegas | /enterprise/sewer-line-services/; /north-las-vegas/sewer-line-services/; /paradise/sewer-line-services/; /spring-valley/sewer-line-services/; /summerlin/sewer-line-services/; /boulder-city-plumbing-services/; /green-valley-plumbing-services/; /lake-las-vegas-plumbing-services/ | B | High | 8 list entries lack href; data-array edit only, no copy change; confirm topical fit |
| IL-030 | /spring-valley/sewer-line-services/ | app/spring-valley/sewer-line-services/page.tsx:233 (const FAQS) | FAQ: Who handles sewer permits in Spring Valley? | "Las Vegas" | Las Vegas | /las-vegas/sewer-line-services/ | H(F) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-031 | /summerlin/emergency-plumbing/ | app/summerlin/emergency-plumbing/page.tsx:136 (const EMERGENCY_TYPES) | Body | "Gas line" | Gas line | /summerlin/gas-line-plumbing/ | G | High | confirm topical fit |
| IL-032 | /summerlin/water-heater-repair-installation/ | app/summerlin/water-heater-repair-installation/page.tsx:189 (const WH_SERVICES) | Body | "gas line" | gas line | /summerlin/gas-line-plumbing/ | G | High | confirm topical fit |
| IL-033 | /toilet-repair-installation/ | app/toilet-repair-installation/page.tsx:80 (const TOILET_FAQS) | FAQ: What should I do if my toilet is overflowing? | "sewer line" | sewer line | /sewer-line-services/ | H(G) | High | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-034 | /water-pipe-repair-replacement/ | app/water-pipe-repair-replacement/page.tsx:186 (const WATER_PIPE_SERVICES) | Body | "water heaters" | water heaters | /water-heater-repair-installation/ | G | High | confirm topical fit |
| IL-035 | / | app/page.tsx:60 (const HOMEPAGE_FAQS) | FAQ: Does Red Carpet Plumbing handle both residential and commercial plumbing? | "backflow prevention" | backflow prevention | /backflow-prevention/ | H(G) | Medium | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-036 | / | app/page.tsx:186 (const LOCAL_ISSUES) | Body | "pressure regulator" | pressure regulator | /water-meter-pressure-regulator-services/ | G | Medium | none |
| IL-037 | /about/ | app/about/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "Green Valley" | Green Valley | /green-valley-plumbing-services/ | A | Medium | line UNVERIFIED |
| IL-038 | /about/ | app/about/page.tsx:80 (const TRUST_PILLARS) | Body | "Las Vegas" | Las Vegas | /las-vegas-plumbing-services/ | A | Medium | none |
| IL-039 | /about/ | app/about/page.tsx:116 (const SERVICE_AREAS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-040 | /about/ | app/about/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "Summerlin" | Summerlin | /summerlin-plumbing-services/ | A | Medium | line UNVERIFIED |
| IL-041 | /backflow-prevention/ | app/backflow-prevention/page.tsx:113 (const BACKFLOW_INFO_BLOCKS) | Body | "North Las Vegas" | North Las Vegas | /north-las-vegas-plumbing-services/ | A | Medium | none |
| IL-042 | /backflow-prevention/ | app/backflow-prevention/page.tsx:246 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-043 | /commercial-plumbing/ | app/commercial-plumbing/page.tsx:243 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Green Valley; Lake Las Vegas; Summerlin" | Boulder City; Green Valley; Lake Las Vegas; Summerlin | /boulder-city-plumbing-services/; /green-valley-plumbing-services/; /lake-las-vegas-plumbing-services/; /summerlin-plumbing-services/ | A | Medium | 4 list entries lack href; data-array edit only, no copy change |
| IL-044 | /commercial-plumbing/ | app/commercial-plumbing/page.tsx:247 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-045 | /commercial-plumbing/ | app/commercial-plumbing/page.tsx:212 (const LV_COMMERCIAL_FACTORS) | Body | "North Las Vegas" | North Las Vegas | /north-las-vegas/commercial-plumbing/ | B | Medium | none |
| IL-046 | /contact/ | app/contact/page.tsx:50 (const CONTACT_FAQS) | Body | "Boulder City" | Boulder City | /boulder-city-plumbing-services/ | A | Medium | none |
| IL-047 | /contact/ | app/contact/page.tsx:50 (const CONTACT_FAQS) | Body | "Enterprise" | Enterprise | /enterprise-plumbing-services/ | A | Medium | none |
| IL-048 | /contact/ | app/contact/page.tsx:50 (const CONTACT_FAQS) | Body | "Green Valley" | Green Valley | /green-valley-plumbing-services/ | A | Medium | none |
| IL-049 | /contact/ | app/contact/page.tsx:50 (const CONTACT_FAQS) | Body | "Lake Las Vegas" | Lake Las Vegas | /lake-las-vegas-plumbing-services/ | A | Medium | none |
| IL-050 | /emergency-plumbing/ | app/emergency-plumbing/page.tsx:100 (const IMMEDIATE_ATTENTION) | Body | "gas line" | gas line | /gas-line-plumbing/ | G | Medium | none |
| IL-051 | /emergency-plumbing/ | app/emergency-plumbing/page.tsx:189 (const EMERGENCY_SERVICE_TYPES) | Body | "pressure regulator" | pressure regulator | /water-meter-pressure-regulator-services/ | G | Medium | none |
| IL-052 | /faucet-sink-repair-installation/ | app/faucet-sink-repair-installation/page.tsx:242 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /henderson/faucet-sink-repair-installation/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin/faucet-sink-repair-installation/ | B | Medium | 8 list entries lack href; data-array edit only, no copy change |
| IL-053 | /faucet-sink-repair-installation/ | app/faucet-sink-repair-installation/page.tsx:246 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-054 | /garbage-disposal-repair-installation/ | app/garbage-disposal-repair-installation/page.tsx:242 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson/garbage-disposal-repair-installation/; /lake-las-vegas-plumbing-services/; /north-las-vegas/garbage-disposal-repair-installation/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin/garbage-disposal-repair-installation/ | B | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-055 | /garbage-disposal-repair-installation/ | app/garbage-disposal-repair-installation/page.tsx:246 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-056 | /gas-line-plumbing/ | app/gas-line-plumbing/page.tsx:244 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-057 | /henderson/water-heater-repair-installation/ | app/henderson/water-heater-repair-installation/page.tsx:236 (const RELATED_SERVICES) | Body | "Henderson" | Henderson | /henderson-plumbing-services/ | E | Medium | none |
| IL-058 | /henderson/water-heater-repair-installation/ | app/henderson/water-heater-repair-installation/page.tsx:179 (const HENDERSON_WH_SERVICES) | Body | "gas line" | gas line | /henderson/gas-line-plumbing/ | G | Medium | none |
| IL-059 | /lake-las-vegas/drain-cleaning/ | app/lake-las-vegas/drain-cleaning/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "service area" | service area | /service-areas/ | J | Medium | line UNVERIFIED |
| IL-060 | /las-vegas/backflow-prevention/ | app/las-vegas/backflow-prevention/page.tsx:209 (const LV_BACKFLOW_INFO_BLOCKS) | Body | "service area" | service area | /service-areas/ | J | Medium | none |
| IL-061 | /las-vegas/leak-detection-repair/ | app/las-vegas/leak-detection-repair/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "Gas line" | Gas line | /las-vegas/gas-line-plumbing/ | G | Medium | line UNVERIFIED |
| IL-062 | /las-vegas/water-heater-repair-installation/ | app/las-vegas/water-heater-repair-installation/page.tsx:227 (const RELATED_SERVICES) | Body | "Las Vegas" | Las Vegas | /las-vegas-plumbing-services/ | E | Medium | none |
| IL-063 | /las-vegas/water-heater-repair-installation/ | app/las-vegas/water-heater-repair-installation/page.tsx:124 (const LV_WH_CAUSES) | Body | "backflow" | backflow | /las-vegas/backflow-prevention/ | G | Medium | none |
| IL-064 | /las-vegas/water-heater-repair-installation/ | app/las-vegas/water-heater-repair-installation/page.tsx:175 (const LV_WH_SERVICES) | Body | "gas line" | gas line | /las-vegas/gas-line-plumbing/ | G | Medium | none |
| IL-065 | /leak-detection-repair/ | app/leak-detection-repair/page.tsx:154 (const LEAK_SERVICES) | Body | "gas line" | gas line | /gas-line-plumbing/ | G | Medium | none |
| IL-066 | /north-las-vegas/toilet-repair-installation/ | app/north-las-vegas/toilet-repair-installation/page.tsx:131 (const NLV_TOILET_SERVICES) | Body | "Las Vegas" | Las Vegas | /las-vegas/toilet-repair-installation/ | F | Medium | none |
| IL-067 | /north-las-vegas/water-heater-repair-installation/ | app/north-las-vegas/water-heater-repair-installation/page.tsx:244 (const RELATED_SERVICES) | Body | "North Las Vegas" | North Las Vegas | /north-las-vegas-plumbing-services/ | E | Medium | none |
| IL-068 | /plumbing-fixture-repair-replacement-installation/ | app/plumbing-fixture-repair-replacement-installation/page.tsx:242 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin-plumbing-services/ | A | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-069 | /plumbing-fixture-repair-replacement-installation/ | app/plumbing-fixture-repair-replacement-installation/page.tsx:246 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-070 | /plumbing-services/ | app/plumbing-services/page.tsx:65 (const PLUMBING_SERVICES_FAQS) | Body | "Boulder City" | Boulder City | /boulder-city-plumbing-services/ | A | Medium | none |
| IL-071 | /plumbing-services/ | app/plumbing-services/page.tsx:65 (const PLUMBING_SERVICES_FAQS) | Body | "Enterprise" | Enterprise | /enterprise-plumbing-services/ | A | Medium | none |
| IL-072 | /plumbing-services/ | app/plumbing-services/page.tsx:65 (const PLUMBING_SERVICES_FAQS) | Body | "Green Valley" | Green Valley | /green-valley-plumbing-services/ | A | Medium | none |
| IL-073 | /plumbing-services/ | app/plumbing-services/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "Henderson" | Henderson | /henderson-plumbing-services/ | A | Medium | line UNVERIFIED |
| IL-074 | /repiping/ | app/repiping/page.tsx:227 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Lake Las Vegas; Paradise" | Boulder City; Lake Las Vegas; Paradise | /boulder-city-plumbing-services/; /lake-las-vegas-plumbing-services/; /paradise-plumbing-services/ | A | Medium | 3 list entries lack href; data-array edit only, no copy change |
| IL-075 | /repiping/ | app/repiping/page.tsx:231 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-076 | /service-areas/ | app/service-areas/page.tsx:86 (const SERVICE_AREAS_FAQS) | FAQ: What plumbing services does Red Carpet Plumbing offer throughout the Las Vegas Valley? | "gas line plumbing" | gas line plumbing | /gas-line-plumbing/ | H(G) | Medium | uses existing FaqItem.link; schema text unchanged; no wording change |
| IL-077 | /sewer-line-services/ | app/sewer-line-services/page.tsx:232 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-078 | /sewer-line-services/ | app/sewer-line-services/page.tsx:142 (const SEWER_LINE_SERVICES_LIST) | Body | "trenchless" | trenchless | /trenchless-piping/ | G | Medium | none |
| IL-079 | /sewer-line-services/ | app/sewer-line-services/page.tsx (line UNVERIFIED: text spans JSX lines) | Body | "camera inspection" | camera inspection | /video-camera-plumbing-inspections/ | G | Medium | line UNVERIFIED |
| IL-080 | /slab-leak-detection-repair/ | app/slab-leak-detection-repair/page.tsx:207 (const LV_SLAB_LEAK_FACTORS) | Body | "backflow" | backflow | /backflow-prevention/ | G | Medium | none |
| IL-081 | /slab-leak-detection-repair/ | app/slab-leak-detection-repair/page.tsx:230 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Paradise" | Boulder City; Paradise | /boulder-city-plumbing-services/; /paradise-plumbing-services/ | A | Medium | 2 list entries lack href; data-array edit only, no copy change |
| IL-082 | /toilet-repair-installation/ | app/toilet-repair-installation/page.tsx:242 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /henderson/toilet-repair-installation/; /lake-las-vegas-plumbing-services/; /north-las-vegas/toilet-repair-installation/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin/toilet-repair-installation/ | B | Medium | 8 list entries lack href; data-array edit only, no copy change |
| IL-083 | /toilet-repair-installation/ | app/toilet-repair-installation/page.tsx:246 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-084 | /trenchless-piping/ | app/trenchless-piping/page.tsx:236 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin-plumbing-services/ | A | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-085 | /trenchless-piping/ | app/trenchless-piping/page.tsx:240 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-086 | /video-camera-plumbing-inspections/ | app/video-camera-plumbing-inspections/page.tsx:243 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin-plumbing-services/ | A | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-087 | /video-camera-plumbing-inspections/ | app/video-camera-plumbing-inspections/page.tsx:247 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-088 | /water-heater-repair-installation/ | app/water-heater-repair-installation/page.tsx:173 (const WATER_HEATER_SERVICES) | Body | "backflow" | backflow | /backflow-prevention/ | G | Medium | none |
| IL-089 | /water-heater-repair-installation/ | app/water-heater-repair-installation/page.tsx:182 (const WATER_HEATER_SERVICES) | Body | "gas line" | gas line | /gas-line-plumbing/ | G | Medium | none |
| IL-090 | /water-meter-pressure-regulator-services/ | app/water-meter-pressure-regulator-services/page.tsx:243 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /north-las-vegas-plumbing-services/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin-plumbing-services/ | A | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-091 | /water-meter-pressure-regulator-services/ | app/water-meter-pressure-regulator-services/page.tsx:247 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |
| IL-092 | /water-pipe-repair-replacement/ | app/water-pipe-repair-replacement/page.tsx:241 (const SERVICE_AREA_LINKS) | Body list | "Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin" | Boulder City; Enterprise; Green Valley; Henderson; Lake Las Vegas; North Las Vegas; Paradise; Spring Valley; Summerlin | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson/water-pipe-repair-replacement/; /lake-las-vegas-plumbing-services/; /north-las-vegas/water-pipe-repair-replacement/; /paradise-plumbing-services/; /spring-valley-plumbing-services/; /summerlin/water-pipe-repair-replacement/ | B | Medium | 9 list entries lack href; data-array edit only, no copy change |
| IL-093 | /water-pipe-repair-replacement/ | app/water-pipe-repair-replacement/page.tsx:245 (const SERVICE_AREA_LINKS) | Body | "Aliante" | Aliante | /north-las-vegas/aliante-area-plumbing/ | A | Medium | none |

No opportunity touches H1s. No differentiator text (galvanized, copper-only, Kitec, Hoover Dam era, descaling) was edited or reused in any proposed anchor; anchors are the page's own existing words.

### Type K: Tier 2 neighborhood mentions

Tier 2 names appear in body and FAQ copy across many pages; none has its own route yet except Aliante. Mention counts by name and parent: 

| Neighborhood | Pages mentioning it | Likely parent hub (needs Sedrick decision) |
|---|---|---|
| Desert Inn | 25 | /las-vegas-plumbing-services/ |
| Desert Shores | 15 | /las-vegas-plumbing-services/ |
| Seven Hills | 21 | /henderson-plumbing-services/ or /green-valley-plumbing-services/ (build list 8.7 lists it under Henderson) |
| Sunrise Manor | 15 | /las-vegas-plumbing-services/ |
| Tropicana | 15 | /paradise-plumbing-services/ (appears on Paradise pages) |
| West Sahara | 25 | /las-vegas-plumbing-services/ |
| Whitney | 29 | /henderson-plumbing-services/ (appears on Henderson pages) |
| Winchester | 15 | /las-vegas-plumbing-services/ |

These are not linkable now (no Tier 2 route exists). The parent column is inferred from which pages mention the name, not from a build-list decision: UNVERIFIED.

## 6. FAQ analysis

1. **Can an FAQ answer carry a link while schema text stays identical?** Yes, today, on every page type, using `FaqItem.link` (single phrase per item). `FaqAnswer` slices the same `answer` string that the schema reads, so visible text equals `acceptedAnswer.text` by construction.
2. **Safest pattern:** use the existing `link: {phrase, href}` field. No new helper needed. Files touched per page: that page's `page.tsx` only (add `link` to the FAQ item). Limitation: one link per FAQ item.
3. **Existing FAQ links:** 2 items, both on `/north-las-vegas/water-pipe-repair-replacement/` (`link: { phrase: "full repiping", href: "/repiping/" }`, `link: { phrase: "commercial properties", href: "/commercial-plumbing/" }`), rendered as bold underlined `next/link`.
4. **FAQ opportunities (type H, no wording change required):**

| ID | Page | Question | Phrase | Target | Priority |
|---|---|---|---|---|---|
| IL-003 | /commercial-plumbing/ | What are the most common commercial plumbing problems in Las Vegas? | slab leaks | /slab-leak-detection-repair/ | High |
| IL-011 | /henderson/commercial-plumbing/ | What are the most common commercial plumbing problems in Henderson? | slab leaks | /henderson/slab-leak-detection-repair/ | High |
| IL-017 | /las-vegas/commercial-plumbing/ | What are the most common commercial plumbing problems in Las Vegas? | slab leaks | /las-vegas/slab-leak-detection-repair/ | High |
| IL-024 | /north-las-vegas/commercial-plumbing/ | What are common commercial plumbing problems for North Las Vegas businesses? | slab leaks | /north-las-vegas/slab-leak-detection-repair/ | High |
| IL-025 | /north-las-vegas/repiping/ | Do I need a permit to repipe my house in North Las Vegas? | Las Vegas | /las-vegas/repiping/ | High |
| IL-030 | /spring-valley/sewer-line-services/ | Who handles sewer permits in Spring Valley? | Las Vegas | /las-vegas/sewer-line-services/ | High |
| IL-033 | /toilet-repair-installation/ | What should I do if my toilet is overflowing? | sewer line | /sewer-line-services/ | High |
| IL-035 | / | Does Red Carpet Plumbing handle both residential and commercial plumbing? | backflow prevention | /backflow-prevention/ | Medium |
| IL-076 | /service-areas/ | What plumbing services does Red Carpet Plumbing offer throughout the Las Vegas Valley? | gas line plumbing | /gas-line-plumbing/ | Medium |

Every listed FAQ item links an exact phrase already in the answer, so none requires wording changes. FAQ opportunities in the raw set that depend on text not present in the answer were not generated.
5. **Toggling:** `components/FaqSection.tsx:126-129` renders every item as `<details hidden={isHidden}>`; items are filtered with the `hidden` attribute, never unmounted. Nothing proposed changes that. Note: items are `<details>` elements, not a custom accordion.

## 7. Pattern-level findings

### 7.1 Hub coverage (contextual links from hub to its service-location pages)

| hub | SL pages | linked contextually | not linked (service slugs) |
|---|---|---|---|
| /boulder-city-plumbing-services/ | 4 | 4 | none |
| /enterprise-plumbing-services/ | 8 | 8 | none |
| /green-valley-plumbing-services/ | 8 | 8 | none |
| /henderson-plumbing-services/ | 14 | 14 | none |
| /lake-las-vegas-plumbing-services/ | 5 | 5 | none |
| /las-vegas-plumbing-services/ | 15 | 15 | none |
| /north-las-vegas-plumbing-services/ | 11 | 11 | none |
| /north-las-vegas/aliante-area-plumbing/ | 5 | 5 | none |
| /paradise-plumbing-services/ | 8 | 8 | none |
| /spring-valley-plumbing-services/ | 8 | 8 | none |
| /summerlin-plumbing-services/ | 12 | 12 | none |

All 11 hubs link all of their service-location pages. No gap.

### 7.2 Core service coverage

| core service | location pages that exist | linked contextually | not linked (locations) |
|---|---|---|---|
| /backflow-prevention/ | 3 | 1 | henderson; paradise |
| /commercial-plumbing/ | 6 | 5 | north-las-vegas |
| /drain-cleaning/ | 11 | 11 | none |
| /emergency-plumbing/ | 11 | 11 | none |
| /faucet-sink-repair-installation/ | 4 | 2 | henderson; summerlin |
| /garbage-disposal-repair-installation/ | 4 | 1 | henderson; north-las-vegas; summerlin |
| /gas-line-plumbing/ | 4 | 2 | paradise; summerlin |
| /leak-detection-repair/ | 11 | 11 | none |
| /plumbing-fixture-repair-replacement-installation/ | 0 | 0 | no location pages exist |
| /repiping/ | 7 | 6 | north-las-vegas |
| /sewer-line-services/ | 7 | 2 | enterprise; north-las-vegas; paradise; spring-valley; summerlin |
| /slab-leak-detection-repair/ | 9 | 9 | none |
| /toilet-repair-installation/ | 5 | 2 | henderson; north-las-vegas; summerlin |
| /trenchless-piping/ | 0 | 0 | no location pages exist |
| /video-camera-plumbing-inspections/ | 1 | 1 | none |
| /water-heater-repair-installation/ | 11 | 11 | none |
| /water-meter-pressure-regulator-services/ | 0 | 0 | no location pages exist |
| /water-pipe-repair-replacement/ | 4 | 0 | henderson; las-vegas; north-las-vegas; summerlin |

Gap: `/water-pipe-repair-replacement/` links none of its 4 location pages; `/sewer-line-services/` links 2 of 7. These match the stale `SERVICE_AREA_LINKS` arrays.

### 7.3 Reverse links

14 of 98 SL pages lack a contextual link to hub and/or core service
| page | hub contextual | core service contextual |
|---|---|---|
| /henderson/drain-cleaning/ | breadcrumb/nav only | yes |
| /henderson/emergency-plumbing/ | breadcrumb/nav only | yes |
| /henderson/water-heater-repair-installation/ | breadcrumb/nav only | yes |
| /las-vegas/drain-cleaning/ | breadcrumb/nav only | yes |
| /las-vegas/emergency-plumbing/ | breadcrumb/nav only | yes |
| /las-vegas/leak-detection-repair/ | breadcrumb/nav only | yes |
| /las-vegas/water-heater-repair-installation/ | breadcrumb/nav only | yes |
| /north-las-vegas/commercial-plumbing/ | breadcrumb/nav only | yes |
| /north-las-vegas/drain-cleaning/ | breadcrumb/nav only | yes |
| /north-las-vegas/emergency-plumbing/ | breadcrumb/nav only | yes |
| /north-las-vegas/repiping/ | breadcrumb/nav only | yes |
| /north-las-vegas/sewer-line-services/ | breadcrumb/nav only | yes |
| /north-las-vegas/water-heater-repair-installation/ | breadcrumb/nav only | yes |
| /north-las-vegas/water-pipe-repair-replacement/ | breadcrumb/nav only | yes |

(Breadcrumb links to the hub exist on these pages; only a contextual hub link is missing. All 98 pages link their core service contextually.)

### 7.4 Cross-city same-service (per build list 8.6 adjacency map)

target exists and linked: 82 | target does not exist (omit per 8.6): 1 | target exists, not linked contextually: 15
| source | expected adjacent target | linked anywhere (incl. nav) |
|---|---|---|
| /green-valley/faucet-sink-repair-installation/ | /henderson/faucet-sink-repair-installation/ | no |
| /green-valley/toilet-repair-installation/ | /henderson/toilet-repair-installation/ | no |
| /henderson/water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | no |
| /las-vegas/backflow-prevention/ | /henderson/backflow-prevention/ | no |
| /las-vegas/faucet-sink-repair-installation/ | /henderson/faucet-sink-repair-installation/ | no |
| /las-vegas/garbage-disposal-repair-installation/ | /henderson/garbage-disposal-repair-installation/ | no |
| /las-vegas/toilet-repair-installation/ | /henderson/toilet-repair-installation/ | no |
| /las-vegas/water-pipe-repair-replacement/ | /henderson/water-pipe-repair-replacement/ | no |
| /north-las-vegas/commercial-plumbing/ | /las-vegas/commercial-plumbing/ | no |
| /north-las-vegas/repiping/ | /las-vegas/repiping/ | no |
| /north-las-vegas/sewer-line-services/ | /las-vegas/sewer-line-services/ | no |
| /north-las-vegas/toilet-repair-installation/ | /las-vegas/toilet-repair-installation/ | no |
| /north-las-vegas/water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | no |
| /spring-valley/sewer-line-services/ | /las-vegas/sewer-line-services/ | no |
| /summerlin/water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | no |

### 7.5 Core services with no location page

| core service with no location page | contextual inbound | linked contextually from (first 200 chars) |
|---|---|---|
| /plumbing-fixture-repair-replacement-installation/ | 18 | /boulder-city-plumbing-services/; /enterprise-plumbing-services/; /faucet-sink-repair-installation/; /garbage-disposal-repair-installation/; /green-valley-plumbing-services/; /henderson-plumbing-servi |
| /trenchless-piping/ | 18 | /boulder-city-plumbing-services/; /contact/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /las-vegas-plumbing-se |
| /water-meter-pressure-regulator-services/ | 14 | /boulder-city-plumbing-services/; /contact/; /enterprise-plumbing-services/; /green-valley-plumbing-services/; /henderson-plumbing-services/; /lake-las-vegas-plumbing-services/; /las-vegas-plumbing-se |

They are well linked (14 to 18 contextual inbound), mostly from hubs and service pages.

### 7.6 Missing pairs (content gaps, not linkable yet)

| location | pages built | missing of 15 | missing services (content gaps, not linkable) |
|---|---|---|---|
| aliante | 5 | 10 | backflow-prevention; commercial-plumbing; faucet-sink-repair-installation; garbage-disposal-repair-installation; gas-line-plumbing; repiping; sewer-line-services; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| boulder-city | 4 | 11 | backflow-prevention; commercial-plumbing; faucet-sink-repair-installation; garbage-disposal-repair-installation; gas-line-plumbing; repiping; sewer-line-services; slab-leak-detection-repair; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| enterprise | 8 | 7 | backflow-prevention; faucet-sink-repair-installation; garbage-disposal-repair-installation; gas-line-plumbing; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| green-valley | 8 | 7 | backflow-prevention; commercial-plumbing; garbage-disposal-repair-installation; gas-line-plumbing; sewer-line-services; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| henderson | 14 | 1 | video-camera-plumbing-inspections |
| lake-las-vegas | 5 | 10 | backflow-prevention; commercial-plumbing; faucet-sink-repair-installation; garbage-disposal-repair-installation; gas-line-plumbing; repiping; sewer-line-services; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| las-vegas | 15 | 0 |  |
| north-las-vegas | 11 | 4 | backflow-prevention; faucet-sink-repair-installation; gas-line-plumbing; video-camera-plumbing-inspections |
| paradise | 8 | 7 | faucet-sink-repair-installation; garbage-disposal-repair-installation; repiping; slab-leak-detection-repair; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| spring-valley | 8 | 7 | backflow-prevention; faucet-sink-repair-installation; garbage-disposal-repair-installation; gas-line-plumbing; toilet-repair-installation; video-camera-plumbing-inspections; water-pipe-repair-replacement |
| summerlin | 12 | 3 | backflow-prevention; commercial-plumbing; video-camera-plumbing-inspections |

### 7.7 Anchor text audit (top 25, body and FAQ regions)

| anchor | target | count |
|---|---|---|
| Privacy Policy | /privacy-policy/ | 134 |
| Las Vegas plumbing services | /las-vegas-plumbing-services/ | 33 |
| Henderson plumbing services | /henderson-plumbing-services/ | 30 |
| Summerlin plumbing services | /summerlin-plumbing-services/ | 21 |
| video camera plumbing inspections | /video-camera-plumbing-inspections/ | 18 |
| Spring Valley plumbing services | /spring-valley-plumbing-services/ | 16 |
| water pipe repair and replacement | /water-pipe-repair-replacement/ | 15 |
| slab leak detection and repair | /slab-leak-detection-repair/ | 13 |
| emergency plumbing services | /emergency-plumbing/ | 12 |
| drain cleaning services | /drain-cleaning/ | 11 |
| drain cleaning in Las Vegas | /las-vegas/drain-cleaning/ | 11 |
| water heater repair and installation | /water-heater-repair-installation/ | 10 |
| repiping services | /repiping/ | 9 |
| North Las Vegas plumbing services | /north-las-vegas-plumbing-services/ | 9 |
| leak detection and repair | /leak-detection-repair/ | 8 |
| Enterprise plumbing services | /enterprise-plumbing-services/ | 8 |
| Green Valley plumbing services | /green-valley-plumbing-services/ | 8 |
| Paradise plumbing services | /paradise-plumbing-services/ | 8 |
| Aliante area plumbing services | /north-las-vegas/aliante-area-plumbing/ | 7 |
| request service online | /contact/ | 6 |
| plumbing services | /plumbing-services/ | 6 |
| sewer line services | /sewer-line-services/ | 6 |
| commercial plumbing services | /commercial-plumbing/ | 6 |
| emergency plumbing in Paradise | /paradise/emergency-plumbing/ | 6 |
| leak detection and repair services | /leak-detection-repair/ | 5 |


Generic anchors: 203 card/CTA links across the site use the text "Learn More" followed by an arrow glyph (anchor text is the same string for many different targets, e.g. `/sewer-line-services/`, `/repiping/`, `/commercial-plumbing/`). Card heading text sits in a sibling element, so the link text alone is generic. Zero "click here" or "read more" hits. Whether to add per-card accessible names is a Sedrick decision (not in IL list; no copy change proposed).
### 7.8 Link depth

Counter({2: 113, 1: 20, 'unreachable': 2, 0: 1})
Counter({2: 108, 1: 26, 0: 1, 'unreachable': 1})
| route | group | clicks contextual only | clicks all links |
|---|---|---|---|
| /sitemap/ | utility | unreachable | 1 |
| /thank-you/ | utility | unreachable | unreachable |

No route is deeper than 2 clicks when all links count. With contextual links only, `/sitemap/` and `/thank-you/` are unreachable (expected). Nothing deeper than 3 clicks.

## 8. Recommended implementation batches

| Batch | Items | Files touched | Content draft needed first? |
|---|---|---|---|
| 1. Stale SERVICE_AREA_LINKS arrays on core service pages | IL-001, IL-008, IL-029, IL-043, IL-052, IL-054, IL-068, IL-074, IL-081, IL-082, IL-084, IL-086, IL-090, IL-092 | the 14 core service `page.tsx` files named in those rows | No copy change; data href additions. Needs Sedrick approval of targets (hub vs city+service page). |
| 2. FAQ links using existing `FaqItem.link` | IL-003, IL-011, IL-017, IL-024, IL-025, IL-030, IL-033, IL-035, IL-076 | page.tsx per row | No (existing phrase) |
| 3. Hub reverse links (7.3) and cross-city gaps (7.4) | section 7 rows (not in IL list; structural) | the 14 + 15 source `page.tsx` files listed there | Probably yes: needs new sentence or link slot, so Claude Project draft |
| 4. Core service pages: body links to related services | IL-004, IL-005, IL-020, IL-034, IL-050, IL-051, IL-065, IL-078, IL-079, IL-080, IL-088, IL-089 | page.tsx per row | No, anchors are existing text; Sedrick approves targets |
| 5. City cluster body links (service-location pages) | IL-002, IL-006, IL-007, IL-009, IL-010, IL-012, IL-013, IL-014, IL-015, IL-016, IL-018, IL-019, IL-021, IL-022, IL-023, IL-026, IL-027, IL-031, IL-032, IL-057, IL-058, IL-061, IL-062, IL-063, IL-064, IL-066, IL-067 | page.tsx per row | No, anchors are existing text; Sedrick approves targets |
| 6. Core page links (type J) | IL-059, IL-060 | page.tsx per row | No, anchors are existing text; Sedrick approves targets |

For the Las Vegas, Henderson and Green Valley, Summerlin, and North Las Vegas clusters, filter batches 4 and 5 by source route prefix.

## 9. Risks, unverified items, open questions

- `red-carpet-plumbing-sitemap.md` is missing from the repo; the 136/135 figure could not be cross-checked there.
- `docs/seo/route-manifest.json` is modified in the working tree by the regeneration step (expected by the prompt). Not staged. It will show as modified until you decide to keep or revert it. `npm run build` also runs `prebuild`, which rewrites it.
- Source line numbers are UNVERIFIED for rows marked so (text spans JSX lines or list entries). Region labels are heuristics from the HTML structure.
- Matching is keyword-based. Money-page High priority reflects target value, not a human read of topical fit; confirm each High row.
- 481 Low items and 25 capped items exist but are not itemized. `opps.json` in `scripts/audit/` holds them.
- Pages already over 8 body links: /henderson/faucet-sink-repair-installation/ (10), /henderson/toilet-repair-installation/ (10), /las-vegas/garbage-disposal-repair-installation/ (9), /las-vegas/video-camera-plumbing-inspections/ (10), /las-vegas/water-pipe-repair-replacement/ (9), /north-las-vegas/emergency-plumbing/ (9), /paradise/commercial-plumbing/ (11), /paradise/drain-cleaning/ (9), /paradise/leak-detection-repair/ (11), /paradise/water-heater-repair-installation/ (9), /spring-valley/drain-cleaning/ (11), /spring-valley/emergency-plumbing/ (10), /spring-valley/leak-detection-repair/ (12), /spring-valley/repiping/ (10), /spring-valley/slab-leak-detection-repair/ (13), /spring-valley/water-heater-repair-installation/ (10), /summerlin/repiping/ (9). Counts are body-region links only (`opps.py`).
- Questions for Sedrick: (1) For stale `SERVICE_AREA_LINKS` entries, link to the city+service page where one exists, else the city hub? (2) Approve adding a contextual hub link on the 14 reverse-link pages? (3) Tier 2 neighborhood parents for type K.
