# Red Carpet Plumbing Page Inventory

## Inventory Summary

| Metric | Value |
|---|---|
| Total created routes | 9 (8 committed + 1 staged/uncommitted) |
| Total core pages | 2 (Homepage, Contact) |
| Total hub pages | 2 (Plumbing Services Hub, Service Areas Hub) |
| Total service pages | 5 (Emergency Plumbing, Drain Cleaning, Water Heater Repair and Installation, Leak Detection and Repair, Slab Leak Detection and Repair) |
| Total utility / system pages | 1 (root layout only; no custom 404 yet) |
| Total planned or referenced future pages | 17 service / hub routes + 4 service-location routes documented in source = 21 future routes referenced |
| Date generated | 2026-05-25 |
| Current branch | `main` |
| Current HEAD commit | `f8b669e feat: add leak detection service page` |
| Working tree | 1 uncommitted new file (`app/slab-leak-detection-repair/page.tsx`); 70 pre-existing untracked `docs/site-os/qa/` artifacts; no other changes |

## Created Pages

| Page | Route | File Path | Type | Status | Batch | Commit | Schema | Hero Image | Phone CTA | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| Homepage | `/` | `app/page.tsx` | Core | Created | Batch 1 | `75bad19` | Yes (page-specific) | Yes (homepage hero) | Disabled Call Now spans (no phone) | Forward links to service routes not yet built when first shipped; most now live. `metadataBase` in root layout still points to `.pages.dev` |
| Contact | `/contact/` | `app/contact/page.tsx` | Core | Created | Batch 2 | `43a71d0` | Yes (WebPage + ContactPage / LocalBusiness pattern) | Yes (contact hero) | Disabled Call Now spans (no phone) | Contains TODO-BATCH-NEXT for unbuilt service-card forward links (line 435). Contact form endpoint is a placeholder, no real submit handler. No real address / phone / email yet |
| Plumbing Services Hub | `/plumbing-services/` | `app/plumbing-services/page.tsx` | Hub | Created | Batch 2 | `41c89f7` | Yes (WebPage + ItemList / CollectionPage pattern) | Yes (hub hero) | Disabled Call Now spans (no phone) | 17 service entries with TODO-BATCH-NEXT markers (lines 117-270). 5 are now live (Emergency, Drain Cleaning, Water Heater, Leak Detection, Slab Leak); 12 remain forward links. Additional TODOs for `/contact/`, `/emergency-plumbing/`, `/commercial-plumbing/`, `/service-areas/` (lines 399, 456, 565, 589, 666) — note that `/contact/`, `/emergency-plumbing/`, and `/service-areas/` are now live; comments are stale |
| Service Areas Hub | `/service-areas/` | `app/service-areas/page.tsx` | Hub | Created | Batch 2 | `80afc9c` | Yes (WebPage + ItemList / CollectionPage pattern) | Yes (hub hero) | Disabled Call Now spans (no phone) | All service-area child routes (per-city pages) are forward links (line 464). Multiple TODO-BATCH-NEXT for `/contact/`, `/emergency-plumbing/`, and service routes (lines 402, 486, 595, 643, 737) — `/contact/` and `/emergency-plumbing/` are now live; comments are stale |
| Emergency Plumbing | `/emergency-plumbing/` | `app/emergency-plumbing/page.tsx` | Service | Created | Batch 3, Page 1 | `56d601c` | Yes (WebPage + embedded BreadcrumbList, Service, FAQPage) | Yes (service hero) | Disabled Call Now spans (no phone) | TODO-BATCH-NEXT at line 556 (service route forwards) + 573 (service-location TODO block). Phone number + Service `telephone` schema field both omitted pending client confirmation |
| Drain Cleaning | `/drain-cleaning/` | `app/drain-cleaning/page.tsx` | Service | Created | Batch 3, Page 2 | `15fb2ca` | Yes (WebPage + embedded BreadcrumbList, Service, FAQPage) | Yes (service hero) | Disabled Call Now spans (no phone) | Forward links to `/sewer-line-services/`, `/video-camera-plumbing-inspections/`, `/leak-detection-repair/` (line 529). `/leak-detection-repair/` now live; comment is partially stale. Service-location TODO block at line 546 |
| Water Heater Repair and Installation | `/water-heater-repair-installation/` | `app/water-heater-repair-installation/page.tsx` | Service | Created | Batch 3, Page 3 | `41d50f7` | Yes (WebPage + embedded BreadcrumbList, Service, FAQPage) | Yes (service hero, D6 Option 6A: 350×350 hero.webp accepted as-is with TODO for higher-res replacement) | Disabled Call Now spans (no phone) | Forward links to `/leak-detection-repair/`, `/plumbing-fixture-repair-replacement-installation/`, `/water-meter-pressure-regulator-services/` (line 573). `/leak-detection-repair/` now live; comment is partially stale. Service-location TODO block at line 590. Hero image is low-resolution and tagged for asset swap |
| Leak Detection and Repair | `/leak-detection-repair/` | `app/leak-detection-repair/page.tsx` | Service | Created | Batch 3, Page 4 | `f8b669e` | Yes (WebPage + embedded BreadcrumbList, Service, FAQPage) | Yes (service hero, 1600×1600 healthy) | Disabled Call Now spans (no phone) | Forward link to `/slab-leak-detection-repair/` inline in Process Step 5 (line 561) — now live, comment is stale. Forward links to `/slab-leak-detection-repair/`, `/water-pipe-repair-replacement/`, `/video-camera-plumbing-inspections/` in related services (line 606). Service-location TODO block at line 623 |
| Slab Leak Detection and Repair | `/slab-leak-detection-repair/` | `app/slab-leak-detection-repair/page.tsx` | Service | Created (uncommitted, untracked) | Batch 3, Page 5 | Needs confirmation (commit pending) | Yes (WebPage + embedded BreadcrumbList, Service, FAQPage) | Yes (D6 Option 6B: card.webp 1184×1184 used as hero background; hero.webp 592×592 not used). TODO to swap in a dedicated higher-resolution slab leak hero asset when available | Disabled Call Now spans (no phone) | Forward links to `/water-pipe-repair-replacement/` (lines 580, 633) and `/re-piping/` (lines 588, 634), rendered both inline in Process Step 5 and in Related Services. Service-location TODO block at line 651 listing 4 future routes |

### Utility / System Pages

| Page | File Path | Notes |
|---|---|---|
| Root layout | `app/layout.tsx` | Global metadata, font setup, applies to all routes. `metadataBase` still points to `https://red-carpet-plumbing-site.pages.dev` — needs swap to `https://redcarpetplumbing.com` before launch |
| `_not-found` | (Next.js auto-generated) | No custom `app/not-found.tsx` yet. Next.js renders the default 404 page. Custom 404 may be worth adding before launch |
| Favicon / app icons | `app/favicon.ico` + `app/icon-*.png` | Already shipped (commit `337aa6a`) |

## Planned or Referenced Future Pages

### Service Pages (referenced via TODO-BATCH-NEXT in source)

| Planned Page | Route | Source | Status | Notes |
|---|---|---|---|---|
| Sewer Line Services | `/sewer-line-services/` | `app/plumbing-services/page.tsx:162`, `app/drain-cleaning/page.tsx:529` | Planned | Referenced as forward link from Drain Cleaning related-services |
| Re-Piping | `/re-piping/` | `app/plumbing-services/page.tsx:171`, `app/slab-leak-detection-repair/page.tsx:588, 634` | Planned | Referenced inline in Slab Leak Process Step 5 and Related Services |
| Water Pipe Repair and Replacement | `/water-pipe-repair-replacement/` | `app/plumbing-services/page.tsx:180`, `app/leak-detection-repair/page.tsx:606`, `app/slab-leak-detection-repair/page.tsx:580, 633` | Planned | Referenced inline in Slab Leak Process Step 5 and as forward link in Related Services on Leak Detection and Slab Leak pages |
| Gas Line Plumbing | `/gas-line-plumbing/` | `app/plumbing-services/page.tsx:189` | Planned | Referenced from Plumbing Services Hub |
| Commercial Plumbing | `/commercial-plumbing/` | `app/plumbing-services/page.tsx:198, 565` | Planned | Referenced from Plumbing Services Hub |
| Toilet Repair and Installation | `/toilet-repair-installation/` | `app/plumbing-services/page.tsx:207` | Planned | Referenced from Plumbing Services Hub |
| Faucet and Sink Repair and Installation | `/faucet-sink-repair-installation/` | `app/plumbing-services/page.tsx:216` | Planned | Referenced from Plumbing Services Hub |
| Garbage Disposal Repair and Installation | `/garbage-disposal-repair-installation/` | `app/plumbing-services/page.tsx:225` | Planned | Referenced from Plumbing Services Hub |
| Backflow Prevention | `/backflow-prevention/` | `app/plumbing-services/page.tsx:234` | Planned | Referenced from Plumbing Services Hub |
| Video Camera Plumbing Inspections | `/video-camera-plumbing-inspections/` | `app/plumbing-services/page.tsx:243`, `app/drain-cleaning/page.tsx:529`, `app/leak-detection-repair/page.tsx:606` | Planned | Referenced from Plumbing Services Hub and as forward link from Drain Cleaning + Leak Detection |
| Plumbing Fixture Repair, Replacement, Installation | `/plumbing-fixture-repair-replacement-installation/` | `app/plumbing-services/page.tsx:252`, `app/water-heater-repair-installation/page.tsx:573` | Planned | Referenced from Plumbing Services Hub and as forward link from Water Heater |
| Trenchless Piping | `/trenchless-piping/` | `app/plumbing-services/page.tsx:261` | Planned | Referenced from Plumbing Services Hub |
| Water Meter and Pressure Regulator Services | `/water-meter-pressure-regulator-services/` | `app/plumbing-services/page.tsx:270`, `app/water-heater-repair-installation/page.tsx:573` | Planned | Referenced from Plumbing Services Hub and as forward link from Water Heater |

### Service-Location Pages (referenced via TODO-BATCH-NEXT comment blocks)

Each service page documents per-city slab/leak/etc. routes via a JSX comment block. Currently captured:

| Planned Page | Route | Source | Status | Notes |
|---|---|---|---|---|
| Slab Leak Detection in Las Vegas | `/las-vegas-slab-leak-detection-repair/` | `app/slab-leak-detection-repair/page.tsx:652` | Planned | Comment-only, not rendered |
| Slab Leak Detection in Henderson | `/henderson-slab-leak-detection-repair/` | `app/slab-leak-detection-repair/page.tsx:653` | Planned | Comment-only, not rendered |
| Slab Leak Detection in North Las Vegas | `/north-las-vegas-slab-leak-detection-repair/` | `app/slab-leak-detection-repair/page.tsx:654` | Planned | Comment-only, not rendered |
| Slab Leak Detection in Summerlin | `/summerlin-slab-leak-detection-repair/` | `app/slab-leak-detection-repair/page.tsx:655` | Planned | Comment-only, not rendered |

Note: The other service pages (Emergency Plumbing, Drain Cleaning, Water Heater, Leak Detection) also contain analogous service-location TODO comment blocks documenting per-city future routes for those services (Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Green Valley, etc.). Treat the full per-city × per-service matrix as a future build batch.

### Other Planned Pages

| Planned Page | Route | Source | Status | Notes |
|---|---|---|---|---|
| Custom 404 / Not Found | `app/not-found.tsx` | (none yet) | Planned | Next.js currently renders the default `_not-found` page. A branded 404 is a recommended launch-prep task |
| Per-city Service Areas children | `/las-vegas/`, `/henderson/`, `/north-las-vegas/`, etc. | `app/service-areas/page.tsx:464` | Planned | Service Areas Hub already renders forward links to each city page |

## Known Global Launch Blockers

| # | Blocker | Surface |
|---|---|---|
| 1 | Phone number unconfirmed across the entire site | All disabled `Call Now` spans (header desktop + header mobile + every service page hero secondary CTA + every service page final CTA). Per page count: typically 4 disabled spans (2 inherited from `SiteHeader` + 2 on the page itself) |
| 2 | Service JSON-LD `provider.telephone` omitted on every service page | `app/emergency-plumbing/page.tsx`, `app/drain-cleaning/page.tsx`, `app/water-heater-repair-installation/page.tsx`, `app/leak-detection-repair/page.tsx`, `app/slab-leak-detection-repair/page.tsx`. Each has `// FLAG: ADD telephone field to Service provider once phone number is confirmed` source comments |
| 3 | `metadataBase` in `app/layout.tsx` still points to `red-carpet-plumbing-site.pages.dev` | Must swap to `https://redcarpetplumbing.com` before production launch so OG / Twitter card URLs resolve correctly |
| 4 | Contact form endpoint is a placeholder | `components/QuoteFormPlaceholder.tsx` and `components/ContactFormPlaceholder.tsx` ship as no-op silent submit handlers. No real backend / email service wired. Will fail silently in production |
| 5 | Unverified "Transparent Pricing" trust strip claim | Every service page trust strip. Source comment: `// SOURCE-SITE CLAIM: verify supporting documentation before final launch` and/or `// FLAG: VERIFY TRANSPARENT PRICING CLAIM BEFORE PUBLISH` |
| 6 | Unverified "Customer Satisfaction Focus" trust strip claim | Every service page trust strip. Source comment: `// FLAG: VERIFY CUSTOMER SATISFACTION FOCUS CLAIM BEFORE PUBLISH` |
| 7 | Unconfirmed service-specific equipment / methods / scope claims | `app/water-heater-repair-installation/page.tsx`, `app/leak-detection-repair/page.tsx`, `app/slab-leak-detection-repair/page.tsx` — each has FLAG comments for confirmation before launch |
| 8 | Low-resolution hero images on 2 service pages | Water Heater (`hero.webp` 350×350) accepted as-is per D6 Option 6A with TODO. Slab Leak hero substituted with `card.webp` (1184×1184) per D6 Option 6B with TODO. Both need dedicated high-resolution hero assets |
| 9 | Forward links pointing to unbuilt routes (live 404s) | Plumbing Services Hub (~12 service entries still 404), Service Areas Hub (per-city pages 404), and inline Process Step links: `/water-pipe-repair-replacement/`, `/re-piping/`, `/sewer-line-services/`, `/video-camera-plumbing-inspections/` |
| 10 | No custom 404 page | Next.js renders the default `_not-found` page. A branded `app/not-found.tsx` is recommended before launch |
| 11 | Stale TODO-BATCH-NEXT comments | Several TODO comments reference routes that have since been built (`/contact/`, `/emergency-plumbing/`, `/service-areas/`, `/leak-detection-repair/`, `/slab-leak-detection-repair/`). Comments do not affect runtime but should be cleaned in a future maintenance pass |
| 12 | `docs/site-os/qa/` artifacts not yet cleaned or moved | 70 untracked QA scripts, audit `.md` files, and screenshots in `docs/site-os/qa/`. Intentionally untracked through Batch 3; decision needed on whether to keep, move, or delete before launch |
| 13 | `Images/` raw working folder still gitignored | Per project rules. Decision needed on dedupe and final asset structure before launch |

## Recommended Next Build Order

Based on current TODO-BATCH-NEXT references, internal-link frequency, and remaining service coverage:

### Batch 4 candidates (highest internal-link reference count)

1. **Sewer Line Services** (`/sewer-line-services/`) — referenced as forward link from Drain Cleaning and Plumbing Services Hub. Natural plumbing-emergency adjacency.
2. **Video Camera Plumbing Inspections** (`/video-camera-plumbing-inspections/`) — referenced from Plumbing Services Hub, Drain Cleaning, and Leak Detection. Bridges drain + leak service lines.
3. **Water Pipe Repair and Replacement** (`/water-pipe-repair-replacement/`) — referenced from Plumbing Services Hub, Leak Detection, and Slab Leak (inline in Process Step 5). Closes Slab Leak forward-link gap.
4. **Re-Piping** (`/re-piping/`) — referenced from Plumbing Services Hub and Slab Leak (inline in Process Step 5). Closes the other Slab Leak forward-link gap.

### Batch 5 candidates (high-value standalone services)

5. **Gas Line Plumbing** (`/gas-line-plumbing/`)
6. **Toilet Repair and Installation** (`/toilet-repair-installation/`)
7. **Faucet and Sink Repair and Installation** (`/faucet-sink-repair-installation/`)
8. **Garbage Disposal Repair and Installation** (`/garbage-disposal-repair-installation/`)

### Batch 6 candidates (specialty / commercial)

9. **Commercial Plumbing** (`/commercial-plumbing/`)
10. **Backflow Prevention** (`/backflow-prevention/`)
11. **Trenchless Piping** (`/trenchless-piping/`)
12. **Water Meter and Pressure Regulator Services** (`/water-meter-pressure-regulator-services/`)
13. **Plumbing Fixture Repair, Replacement, Installation** (`/plumbing-fixture-repair-replacement-installation/`)

### Batch 7+ (service-location pages)

14. Per-city × per-service matrix (Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Green Valley × the 5 currently shipped services as the priority subset, expanding to the full service catalog over time).

### Launch prep / cleanup

- Commit the Slab Leak Detection and Repair page (already built; awaiting commit direction).
- Add `app/not-found.tsx` branded 404.
- Resolve client-confirmation FLAGs (phone, equipment claims, trust strip claims).
- Swap `metadataBase` to production domain.
- Wire form submit handlers to a real backend.
- Sweep stale TODO-BATCH-NEXT comments where routes have since been built.
- Decide on `docs/site-os/qa/` artifacts (keep / move / delete).
- Decide on `Images/` working folder structure and unignore the approved final asset set.
