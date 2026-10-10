# Hero Background and Section Image Audit

**Date:** 2026-10-09
**Mode:** Read-only audit. No page, component, copy, metadata, schema or image file was changed. This report is the only file created.
**Method:** Source review of `app/`, `components/`, `lib/`; inventory of `public/images/` with `sharp` metadata (read only); parse of the static export `out/**/index.html` produced by `npm run build` to see what actually renders; visual review of all 198 WebP files on contact sheets; hero scrim contrast estimated by compositing each hero image under the `bg-brand-charcoal/65` scrim.

## 1. Summary

| Metric | Result |
|:-|:-|
| Routes in `app/` (page.tsx) | 135 (5 core, 18 core service, 11 Tier 1 hubs, 98 Tier 1 service-location, 3 legal or utility) |
| Routes with a hero background image | 133 (132 via `HeroSection`, plus `/thank-you/` which builds its own image-backed header) |
| Routes missing a hero image | 2: `/privacy-policy/` and `/terms-and-conditions/` (text legal pages, no hero by design) |
| BROKEN hero paths | 0 |
| PLACEHOLDER ONLY heroes | 0 |
| Rendered card placeholders (`ServiceImagePlaceholder`) across all 137 exported pages | 0 (the component is imported on `/plumbing-services/` and `/service-areas/` but its fallback never fires) |
| Raw `Images/` paths or `duplicates-review` references in code | 0 (the `Images/` folder no longer exists at the repo root) |
| `<img>` tags in source | 0 (all raster images use `next/image`) |
| BROKEN image references in code | 1 (JSON-LD `image` on the homepage points to a file that does not exist, see section 6) |
| Section image gaps (estimate, class level) | see the totals in section 5: 521 content-section gaps and 261 CTA-panel gaps, 1 placeholder-only section |
| Unused files in `public/images/` | 10 (2 favicon source files, 8 service photos) |
| Approved pages with no route | 8 Tier 2 neighborhood pages (Whitney, Winchester, Seven Hills, Desert Inn / West Sahara Corridor, Sunrise Manor, Desert Shores, Tropicana Area, Enterprise Southwest Las Vegas) |
| Lint | PASS (`npm run lint`, exit 0, no output) |
| Build | PASS (`npm run build`, exit 0, static export, 137 HTML files, no warnings or deprecation notices) |

**Overall:** heroes are in good shape. The gaps are in the body of the pages, where every content section below the hero except service cards is text only, and in repetition: 42 distinct hero images carry 132 routes, and the same handful of card photos repeat across 18 to 25 files each.

## 2. Route inventory vs approved page set

| Approved set | Expected | Routed | Result |
|:-|:-|:-|:-|
| Core pages (Home, About, Plumbing Services, Service Areas, Contact) | 5 | 5 | OK |
| Core service pages | 18 | 18 | OK, all 18 slugs match the build list |
| Tier 1 location hubs | 11 | 11 | OK (`/north-las-vegas/aliante-area-plumbing/` matches build list section 4.11) |
| Tier 1 service-location pages (build list section 5) | 98 | 98 | OK, none missing, none extra |
| Tier 2 neighborhood targets | 8 | 0 | MISSING ROUTES, not yet built (build list Phase 5 and 6) |
| Routes outside the approved set | 0 | 3 | `/privacy-policy/`, `/terms-and-conditions/`, `/thank-you/` (utility and legal, added in recent commits) |

No dynamic routes and no `generateStaticParams` exist. Every route is a literal `page.tsx` folder. `app/sitemap.ts`, `app/manifest.ts` and the `404` route are also present.

Tier 1 hubs: `/boulder-city-plumbing-services/`, `/enterprise-plumbing-services/`, `/green-valley-plumbing-services/`, `/henderson-plumbing-services/`, `/lake-las-vegas-plumbing-services/`, `/las-vegas-plumbing-services/`, `/north-las-vegas-plumbing-services/`, `/north-las-vegas/aliante-area-plumbing/`, `/paradise-plumbing-services/`, `/spring-valley-plumbing-services/`, `/summerlin-plumbing-services/`.

Core service pages: `/emergency-plumbing/`, `/drain-cleaning/`, `/leak-detection-repair/`, `/water-heater-repair-installation/`, `/slab-leak-detection-repair/`, `/sewer-line-services/`, `/repiping/`, `/water-pipe-repair-replacement/`, `/gas-line-plumbing/`, `/commercial-plumbing/`, `/toilet-repair-installation/`, `/faucet-sink-repair-installation/`, `/garbage-disposal-repair-installation/`, `/backflow-prevention/`, `/video-camera-plumbing-inspections/`, `/trenchless-piping/`, `/water-meter-pressure-regulator-services/`, `/plumbing-fixture-repair-replacement-installation/`.

## 3. Image inventory

207 files, 27.0 MB total. 198 WebP, 9 PNG (logo and favicon set). Smallest hero is 1184 px wide, largest hero file is 254 KB.

| Purpose | Folder | Files | Notes |
|:-|:-|:-|:-|
| Service heroes and cards | `services/*` (18 folders) | 178 | One `-hero` per service plus 8 to 12 `-card` photos each. Card images are 1254 px wide or more. |
| Location heroes | `locations/*` (11 folders) | 12 | One unique hero per Tier 1 hub, plus one Las Vegas Valley section background. |
| Homepage hero set | `homepage/` | 5 | Used as the homepage crossfade slides. |
| Company | `company/{contact,thank-you,vehicles}` | 3 | All three are service-van photos with readable livery. |
| Brand | `brand/logo`, `brand/favicon` | 1 + 8 | Logo PNG is 1080x1058 and 641 KB, rendered at 220x73 and 300x85. |
| Team, equipment, job-site, blog, social | none | 0 | No such folders exist. |

**Unused files (10):**

| File | Size | Likely use |
|:-|:-|:-|
| `brand/favicon/favicon-source.png` | 1024x1024, 437 KB | Source or spare icon, not a page asset |
| `brand/favicon/site-icon-512x512.png` | 512x512, 123 KB | Source or spare icon, not a page asset |
| `services/gas-line-plumbing/red-carpet-plumbing-gas-line-plumbing-las-vegas.webp` | 1659x948, 137 KB | Spare service photo, usable as an alternate hero or section image |
| `services/repiping/red-carpet-plumbing-exposed-wall-repiping-las-vegas.webp` | 1672x941, 109 KB | Spare service photo, usable as an alternate hero or section image |
| `services/repiping/red-carpet-plumbing-old-pipe-new-pipe-replacement-las-vegas.webp` | 1672x941, 133 KB | Spare service photo, usable as an alternate hero or section image |
| `services/repiping/red-carpet-plumbing-pex-repiping-installation-las-vegas.webp` | 1659x948, 106 KB | Spare service photo, usable as an alternate hero or section image |
| `services/repiping/red-carpet-plumbing-utility-access-pipe-replacement-las-vegas.webp` | 1672x941, 134 KB | Spare service photo, usable as an alternate hero or section image |
| `services/repiping/red-carpet-plumbing-whole-home-repiping-las-vegas.webp` | 1672x941, 97 KB | Spare service photo, usable as an alternate hero or section image |
| `services/toilet-repair-installation/red-carpet-plumbing-commercial-toilet-repair-las-vegas.webp` | 1672x941, 86 KB | Spare service photo, usable as an alternate hero or section image |
| `services/water-pipe-repair-replacement/red-carpet-plumbing-water-pipe-repair-replacement-las-vegas.webp` | 1659x948, 177 KB | Spare service photo, usable as an alternate hero or section image |

Oversize or low-resolution files: `faucet-sink-repair-hero.webp` and `garbage-disposal-repair-installation-hero.webp` are square 1184x1184 files used as full-width `object-cover` heroes (cropped to a wide band and upscaled on 1440 px and wider screens). `red-carpet-plumbing-logo.png` is 641 KB for a logo shown at 300 px wide. `favicon-source.png` (437 KB) is unreferenced.

## 4. Hero audit

**Shared behavior (all `HeroSection` pages):** the background is a `next/image` with `fill`, `priority`, `sizes="100vw"`, `object-cover`, `alt=""` inside an `aria-hidden` wrapper (decorative, correct for a background), with a flat `bg-brand-charcoal/65` scrim. The rendered HTML preloads the hero. The `alt` strings passed in `backgroundImage={{ src, alt }}` are never rendered, so they are dead data. Layout is content left and quote form right on every hero except `/about/`, which has no `formSlot` and uses the centered single-column layout.

**Contrast:** the left half of each hero (the text column) was composited under the scrim. White text against the 95th percentile pixel is 5.5:1 or better for all 42 images, and against the single brightest pixel 5.5:1 or better. WCAG AA for normal text (4.5:1) passes everywhere. Lowest values: `branded-vehicle.webp` 5.5, `faucet-sink-repair-hero` 6.0, `slab-leak-detection-repair-hero` 6.0. Secondary text at `white/85` is the tightest case and still clears 4.5 on these values.

**LCP:** one preloaded hero per page, `priority` set, never lazy. Because `images.unoptimized` is true, no `srcset` is generated and `sizes` has no effect; the browser downloads the full source file (hero files are 31 to 254 KB, which is acceptable).

### 4a. Core pages

| Route | Hero component | Status | Image path | Notes |
|:-|:-|:-|:-|:-|
| `/` | HeroSection (5 slide crossfade) | HAS HERO IMAGE | `homepage/red-carpet-plumbing-las-vegas-branded-service-van-home-hero.webp`<br>`homepage/red-carpet-plumbing-las-vegas-commercial-plumbing-services-hero.webp`<br>`homepage/red-carpet-plumbing-las-vegas-emergency-plumbing-leak-hero.webp`<br>`homepage/red-carpet-plumbing-las-vegas-residential-service-van-equipment-hero.webp`<br>`homepage/red-carpet-plumbing-las-vegas-sewer-drain-services-hero.webp` | Slide 1 is `priority`, later slides load on first display; reduced motion shows slide 1 only. 1672x941, 173 KB; contrast 6.6:1. Five distinct images; two of them show the branded van, and the van with readable livery text is the opening image. |
| `/about/` | HeroSection | HAS HERO IMAGE | `company/vehicles/branded-vehicle.webp` | 2104x1402, 195 KB; contrast 5.5:1. Centered layout, no form: deviates from the two-column standard. Van photo with readable livery text and phone numbers. |
| `/plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/las-vegas/red-carpet-plumbing-las-vegas-nv-skyline-location-hero.webp` | 1672x941, 154 KB; contrast 6.8:1. Reuses the Las Vegas skyline hero (same file as the Las Vegas hub and Service Areas hero). |
| `/service-areas/` | HeroSection | HAS HERO IMAGE | `locations/las-vegas/red-carpet-plumbing-las-vegas-nv-skyline-location-hero.webp` | 1672x941, 154 KB; contrast 6.8:1. Reuses the Las Vegas skyline hero, which is also the Las Vegas card image lower on the same page. |
| `/contact/` | HeroSection | HAS HERO IMAGE | `company/contact/red-carpet-plumbing-las-vegas-contact-page-service-van.webp` | 1672x941, 154 KB; contrast 7.2:1. Van photo with readable livery text and phone numbers. |

### 4b. Core service pages (18)

| Route | Hero component | Status | Image path | Notes |
|:-|:-|:-|:-|:-|
| `/emergency-plumbing/` | HeroSection | HAS HERO IMAGE | `services/emergency-plumbing/red-carpet-plumbing-las-vegas-emergency-plumbing-hero.webp` | 1672x941, 63 KB; contrast 10.6:1. Same file is the hero on 11 routes. |
| `/drain-cleaning/` | HeroSection | HAS HERO IMAGE | `services/drain-cleaning/red-carpet-plumbing-las-vegas-drain-cleaning-hero.webp` | 1672x941, 171 KB; contrast 7.5:1. Same file is the hero on 11 routes. |
| `/leak-detection-repair/` | HeroSection | HAS HERO IMAGE | `services/leak-detection-repair/red-carpet-plumbing-las-vegas-leak-detection-repair-hero.webp` | 1672x941, 78 KB; contrast 8.1:1. Same file is the hero on 12 routes. |
| `/water-heater-repair-installation/` | HeroSection | HAS HERO IMAGE | `services/water-heater-repair-installation/red-carpet-plumbing-las-vegas-water-heater-repair-installation-hero.webp` | 1672x941, 54 KB; contrast 7.3:1. Same file is the hero on 11 routes. |
| `/slab-leak-detection-repair/` | HeroSection | HAS HERO IMAGE | `services/slab-leak-detection-repair/red-carpet-plumbing-las-vegas-slab-leak-detection-repair-hero.webp` | 1672x941, 62 KB; contrast 6:1. Same file is the hero on 10 routes. |
| `/sewer-line-services/` | HeroSection | HAS HERO IMAGE | `services/sewer-line-services/red-carpet-plumbing-las-vegas-sewer-line-services-hero.webp` | 1672x941, 157 KB; contrast 6.5:1. Same file is the hero on 8 routes. |
| `/repiping/` | HeroSection | HAS HERO IMAGE | `services/repiping/red-carpet-plumbing-las-vegas-repiping-services-hero.webp` | 1672x941, 71 KB; contrast 8.1:1. Same file is the hero on 8 routes. |
| `/water-pipe-repair-replacement/` | HeroSection | HAS HERO IMAGE | `services/water-pipe-repair-replacement/red-carpet-plumbing-las-vegas-water-pipe-repair-replacement-primary-hero.webp` | 1672x941, 71 KB; contrast 6.8:1. Same file is the hero on 5 routes. |
| `/gas-line-plumbing/` | HeroSection | HAS HERO IMAGE | `services/gas-line-plumbing/red-carpet-plumbing-las-vegas-gas-line-plumbing-hero.webp` | 1672x941, 254 KB; contrast 7.2:1. Same file is the hero on 5 routes. |
| `/commercial-plumbing/` | HeroSection (7 slide crossfade) | HAS HERO IMAGE | `services/commercial-plumbing/red-carpet-plumbing-las-vegas-commercial-plumbing-system-hero.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-commercial-kitchen-plumbing-las-vegas.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-commercial-mechanical-room-plumbing-las-vegas.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-commercial-pipe-valve-detail-las-vegas.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-commercial-restroom-plumbing-las-vegas.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-commercial-water-heater-plumbing-las-vegas.webp`<br>`services/commercial-plumbing/red-carpet-plumbing-multi-unit-property-plumbing-las-vegas.webp` | Slide 1 is `priority`, later slides load on first display; reduced motion shows slide 1 only. 1672x941, 115 KB; contrast 7:1. Seven slide crossfade (1 hero plus 6 commercial photos). |
| `/toilet-repair-installation/` | HeroSection | HAS HERO IMAGE | `services/toilet-repair-installation/red-carpet-plumbing-las-vegas-toilet-repair-installation-hero.webp` | 1672x940, 71 KB; contrast 7.7:1. Same file is the hero on 6 routes. |
| `/faucet-sink-repair-installation/` | HeroSection | HAS HERO IMAGE | `services/faucet-sink-repair-installation/red-carpet-plumbing-las-vegas-faucet-sink-repair-hero.webp` | 1184x1184, 31 KB; contrast 6:1. 1184x1184 square source, upscaled when cropped to a wide band. Same file is the hero on 5 routes. |
| `/garbage-disposal-repair-installation/` | HeroSection | HAS HERO IMAGE | `services/garbage-disposal-repair-installation/red-carpet-plumbing-las-vegas-garbage-disposal-repair-installation-hero.webp` | 1184x1184, 38 KB; contrast 6.4:1. 1184x1184 square source, upscaled when cropped to a wide band. Same file is the hero on 5 routes. |
| `/backflow-prevention/` | HeroSection | HAS HERO IMAGE | `services/backflow-prevention/red-carpet-plumbing-las-vegas-backflow-prevention-hero.webp` | 1672x941, 144 KB; contrast 6.9:1. Same file is the hero on 4 routes. |
| `/video-camera-plumbing-inspections/` | HeroSection | HAS HERO IMAGE | `services/video-camera-plumbing-inspections/red-carpet-plumbing-las-vegas-video-camera-plumbing-inspections-primary-hero.webp` | 1672x941, 141 KB; contrast 8.8:1. Same file is the hero on 2 routes. Also reused as a Related Services card image on `/drain-cleaning/` (hero used as card). |
| `/trenchless-piping/` | HeroSection | HAS HERO IMAGE | `services/trenchless-piping/red-carpet-plumbing-las-vegas-trenchless-pipe-replacement-hero.webp` | 1672x941, 182 KB; contrast 9.3:1.  |
| `/water-meter-pressure-regulator-services/` | HeroSection | HAS HERO IMAGE | `services/water-meter-pressure-regulator-services/red-carpet-plumbing-las-vegas-water-meter-pressure-regulator-services-primary-hero.webp` | 1672x941, 166 KB; contrast 7.1:1.  |
| `/plumbing-fixture-repair-replacement-installation/` | HeroSection | HAS HERO IMAGE | `services/plumbing-fixture-repair-replacement-installation/red-carpet-plumbing-las-vegas-plumbing-fixture-repair-replacement-installation-hero.webp` | 1672x941, 51 KB; contrast 6.7:1.  |

### 4c. Tier 1 location hubs (11)

| Route | Hero component | Status | Image path | Notes |
|:-|:-|:-|:-|:-|
| `/boulder-city-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/boulder-city/red-carpet-plumbing-boulder-city-nv-downtown-location-hero.webp` | 1672x941, 196 KB; contrast 8:1. Unique location hero. |
| `/enterprise-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/enterprise/red-carpet-plumbing-enterprise-nv-exploration-peak-location-hero.webp` | 1672x941, 136 KB; contrast 7.6:1. Unique location hero. |
| `/green-valley-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/green-valley/red-carpet-plumbing-green-valley-nv-neighborhood-location-hero.webp` | 1672x941, 150 KB; contrast 6.2:1. Unique location hero. |
| `/henderson-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/henderson/red-carpet-plumbing-henderson-nv-water-street-district-location-hero.webp` | 1672x941, 169 KB; contrast 8.3:1. Unique location hero. |
| `/lake-las-vegas-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/lake-las-vegas/red-carpet-plumbing-lake-las-vegas-nv-waterfront-location-hero.webp` | 1672x941, 136 KB; contrast 6.2:1. Unique location hero. |
| `/las-vegas-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/las-vegas/red-carpet-plumbing-las-vegas-nv-skyline-location-hero.webp` | 1672x941, 154 KB; contrast 6.8:1. Skyline hero also reused on `/plumbing-services/` and `/service-areas/`. |
| `/north-las-vegas-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/north-las-vegas/red-carpet-plumbing-north-las-vegas-nv-neighborhood-location-hero.webp` | 1672x941, 111 KB; contrast 7.6:1. Unique location hero. |
| `/north-las-vegas/aliante-area-plumbing/` | HeroSection | HAS HERO IMAGE | `locations/aliante-area/red-carpet-plumbing-aliante-north-las-vegas-nv-location-hero.webp` | 1672x941, 159 KB; contrast 6.4:1. Unique location hero. |
| `/paradise-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/paradise/red-carpet-plumbing-paradise-nv-las-vegas-strip-location-hero.webp` | 1672x941, 156 KB; contrast 6.5:1. Unique location hero. |
| `/spring-valley-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/spring-valley/red-carpet-plumbing-spring-valley-nv-desert-breeze-location-hero.webp` | 1672x941, 224 KB; contrast 7.7:1. Unique location hero. |
| `/summerlin-plumbing-services/` | HeroSection | HAS HERO IMAGE | `locations/summerlin/red-carpet-plumbing-summerlin-nv-red-rock-canyon-location-hero.webp` | 1672x941, 123 KB; contrast 7.3:1. Hero also reused on 3 Summerlin service-location pages. |

### 4d. Tier 1 service-location pages (98), grouped by hero image

Every route below is HAS HERO IMAGE, valid path, same `HeroSection` behavior, flat 65 percent scrim, two-column layout with `QuoteFormPlaceholder` on the right.

| Hero image (path, size, contrast) | Routes |
|:-|:-|
| `services/leak-detection-repair/red-carpet-plumbing-las-vegas-leak-detection-repair-hero.webp`<br>1672x941, 78 KB; 8.1:1 | 11 routes: `/boulder-city/leak-detection-repair/`, `/enterprise/leak-detection-repair/`, `/green-valley/leak-detection-repair/`, `/henderson/leak-detection-repair/`, `/lake-las-vegas/leak-detection-repair/`, `/las-vegas/leak-detection-repair/`, `/north-las-vegas/aliante-area/leak-detection-repair/`, `/north-las-vegas/leak-detection-repair/`, `/paradise/leak-detection-repair/`, `/spring-valley/leak-detection-repair/`, `/summerlin/leak-detection-repair/` |
| `services/drain-cleaning/red-carpet-plumbing-las-vegas-drain-cleaning-hero.webp`<br>1672x941, 171 KB; 7.5:1 | 10 routes: `/boulder-city/drain-cleaning/`, `/enterprise/drain-cleaning/`, `/green-valley/drain-cleaning/`, `/henderson/drain-cleaning/`, `/lake-las-vegas/drain-cleaning/`, `/las-vegas/drain-cleaning/`, `/north-las-vegas/aliante-area/drain-cleaning/`, `/north-las-vegas/drain-cleaning/`, `/paradise/drain-cleaning/`, `/spring-valley/drain-cleaning/` |
| `services/emergency-plumbing/red-carpet-plumbing-las-vegas-emergency-plumbing-hero.webp`<br>1672x941, 63 KB; 10.6:1 | 10 routes: `/boulder-city/emergency-plumbing/`, `/enterprise/emergency-plumbing/`, `/green-valley/emergency-plumbing/`, `/henderson/emergency-plumbing/`, `/lake-las-vegas/emergency-plumbing/`, `/las-vegas/emergency-plumbing/`, `/north-las-vegas/aliante-area/emergency-plumbing/`, `/north-las-vegas/emergency-plumbing/`, `/paradise/emergency-plumbing/`, `/spring-valley/emergency-plumbing/` |
| `services/water-heater-repair-installation/red-carpet-plumbing-las-vegas-water-heater-repair-installation-hero.webp`<br>1672x941, 54 KB; 7.3:1 | 10 routes: `/boulder-city/water-heater-repair-installation/`, `/enterprise/water-heater-repair-installation/`, `/green-valley/water-heater-repair-installation/`, `/henderson/water-heater-repair-installation/`, `/lake-las-vegas/water-heater-repair-installation/`, `/las-vegas/water-heater-repair-installation/`, `/north-las-vegas/aliante-area/water-heater-repair-installation/`, `/north-las-vegas/water-heater-repair-installation/`, `/paradise/water-heater-repair-installation/`, `/spring-valley/water-heater-repair-installation/` |
| `services/slab-leak-detection-repair/red-carpet-plumbing-las-vegas-slab-leak-detection-repair-hero.webp`<br>1672x941, 62 KB; 6:1 | 9 routes: `/enterprise/slab-leak-detection-repair/`, `/green-valley/slab-leak-detection-repair/`, `/henderson/slab-leak-detection-repair/`, `/lake-las-vegas/slab-leak-detection-repair/`, `/las-vegas/slab-leak-detection-repair/`, `/north-las-vegas/aliante-area/slab-leak-detection-repair/`, `/north-las-vegas/slab-leak-detection-repair/`, `/spring-valley/slab-leak-detection-repair/`, `/summerlin/slab-leak-detection-repair/` |
| `services/repiping/red-carpet-plumbing-las-vegas-repiping-services-hero.webp`<br>1672x941, 71 KB; 8.1:1 | 7 routes: `/enterprise/repiping/`, `/green-valley/repiping/`, `/henderson/repiping/`, `/las-vegas/repiping/`, `/north-las-vegas/repiping/`, `/spring-valley/repiping/`, `/summerlin/repiping/` |
| `services/sewer-line-services/red-carpet-plumbing-las-vegas-sewer-line-services-hero.webp`<br>1672x941, 157 KB; 6.5:1 | 7 routes: `/enterprise/sewer-line-services/`, `/henderson/sewer-line-services/`, `/las-vegas/sewer-line-services/`, `/north-las-vegas/sewer-line-services/`, `/paradise/sewer-line-services/`, `/spring-valley/sewer-line-services/`, `/summerlin/sewer-line-services/` |
| `services/commercial-plumbing/red-carpet-plumbing-las-vegas-commercial-plumbing-system-hero.webp`<br>1672x941, 115 KB; 7:1 | 6 routes: `/enterprise/commercial-plumbing/`, `/henderson/commercial-plumbing/`, `/las-vegas/commercial-plumbing/`, `/north-las-vegas/commercial-plumbing/`, `/paradise/commercial-plumbing/`, `/spring-valley/commercial-plumbing/` |
| `services/toilet-repair-installation/red-carpet-plumbing-las-vegas-toilet-repair-installation-hero.webp`<br>1672x940, 71 KB; 7.7:1 | 5 routes: `/green-valley/toilet-repair-installation/`, `/henderson/toilet-repair-installation/`, `/las-vegas/toilet-repair-installation/`, `/north-las-vegas/toilet-repair-installation/`, `/summerlin/toilet-repair-installation/` |
| `services/faucet-sink-repair-installation/red-carpet-plumbing-las-vegas-faucet-sink-repair-hero.webp`<br>1184x1184, 31 KB; 6:1 | 4 routes: `/green-valley/faucet-sink-repair-installation/`, `/henderson/faucet-sink-repair-installation/`, `/las-vegas/faucet-sink-repair-installation/`, `/summerlin/faucet-sink-repair-installation/` |
| `services/garbage-disposal-repair-installation/red-carpet-plumbing-las-vegas-garbage-disposal-repair-installation-hero.webp`<br>1184x1184, 38 KB; 6.4:1 | 4 routes: `/henderson/garbage-disposal-repair-installation/`, `/las-vegas/garbage-disposal-repair-installation/`, `/north-las-vegas/garbage-disposal-repair-installation/`, `/summerlin/garbage-disposal-repair-installation/` |
| `services/gas-line-plumbing/red-carpet-plumbing-las-vegas-gas-line-plumbing-hero.webp`<br>1672x941, 254 KB; 7.2:1 | 4 routes: `/henderson/gas-line-plumbing/`, `/las-vegas/gas-line-plumbing/`, `/paradise/gas-line-plumbing/`, `/summerlin/gas-line-plumbing/` |
| `services/water-pipe-repair-replacement/red-carpet-plumbing-las-vegas-water-pipe-repair-replacement-primary-hero.webp`<br>1672x941, 71 KB; 6.8:1 | 4 routes: `/henderson/water-pipe-repair-replacement/`, `/las-vegas/water-pipe-repair-replacement/`, `/north-las-vegas/water-pipe-repair-replacement/`, `/summerlin/water-pipe-repair-replacement/` |
| `services/backflow-prevention/red-carpet-plumbing-las-vegas-backflow-prevention-hero.webp`<br>1672x941, 144 KB; 6.9:1 | 3 routes: `/henderson/backflow-prevention/`, `/las-vegas/backflow-prevention/`, `/paradise/backflow-prevention/` |
| `locations/summerlin/red-carpet-plumbing-summerlin-nv-red-rock-canyon-location-hero.webp`<br>1672x941, 123 KB; 7.3:1 | 3 routes: `/summerlin/drain-cleaning/`, `/summerlin/emergency-plumbing/`, `/summerlin/water-heater-repair-installation/` |
| `services/video-camera-plumbing-inspections/red-carpet-plumbing-las-vegas-video-camera-plumbing-inspections-primary-hero.webp`<br>1672x941, 141 KB; 8.8:1 | 1 routes: `/las-vegas/video-camera-plumbing-inspections/` |

Findings for this group:

- The same 16 hero images cover 98 pages. The city is never visible in the hero, so a Henderson drain cleaning page and a Boulder City drain cleaning page open with the identical photo. This is the main templating signal on the site.
- Summerlin is inconsistent. `/summerlin/drain-cleaning/`, `/summerlin/emergency-plumbing/` and `/summerlin/water-heater-repair-installation/` use the Summerlin Red Rock location hero, while the other nine Summerlin service pages use the service hero.
- Aliante service-location pages (5) use the generic service heroes, not the unique Aliante location hero that the Aliante hub uses.

### 4e. Legal and utility pages

| Route | Hero component | Status | Image path | Notes |
|:-|:-|:-|:-|:-|
| `/thank-you/` | Custom section (not `HeroSection`) | HAS HERO IMAGE | `company/thank-you/red-carpet-plumbing-las-vegas-service-request-thank-you.webp` | `priority`, `alt=""` in `aria-hidden` wrapper, same 65 percent scrim. Van photo with readable livery text. |
| `/privacy-policy/`, `/terms-and-conditions/` | `LegalDocument` | MISSING HERO IMAGE | none | Intentional: plain legal text pages. No action needed. |

## 5. Section image audit

**How to read this:** section tables are by page type because the 98 service-location pages and 18 core service pages share one section pattern. Every route is named in section 4 and in the lists below. Status is based on the rendered HTML (image counts per page) plus source review of one or more pages in each class and the section comment map in each file.

**What exists today:** every `ServiceCard` and every service or location card grid has a real photo (0 placeholders render). All meaningful card images carry non-empty, specific alt text (173 distinct alt strings, none generic, none contain em dashes or double hyphens). All below-the-fold images are `loading="lazy"`. All use `fill` plus `sizes`, so no `width` or `height` is required.

### 5a. Homepage

| Section | Status | Image path | Notes |
|:-|:-|:-|:-|
| 1 Hero | HAS IMAGE | 5 homepage slides | See section 4a. |
| 2.5 AEO direct answer | NOT NEEDED | n/a | Short answer block. |
| 3 24/7 Emergency CTA | HAS IMAGE | `services/emergency-plumbing/red-carpet-plumbing-las-vegas-emergency-plumbing-active-water-leak.webp` | Decorative background, `alt=""`, 65 percent scrim, no `priority` (correct, below fold). |
| 4 Core services preview | HAS IMAGE | 4 service cards (sewer, repiping, water heater, slab leak) | Lazy, specific alt. The repiping card uses the repiping hero file. |
| 5 Local plumbing issues (5 items) | MISSING IMAGE | none | Text only, 5 items. Should be image-backed issue cards. |
| 6 Service areas preview | HAS IMAGE | `locations/las-vegas/red-carpet-plumbing-las-vegas-valley-residential-commercial-service-area.webp` | Section background only; the city links have no per-city image. Local scrim override is `/70`. |
| 7 Why choose us (6 items) | MISSING IMAGE | none | Text only. |
| 8 FAQ | NOT NEEDED | n/a | Q and A block. |
| 9 Final CTA | MISSING IMAGE | none | Text only, deliberate centered moment. Low priority. |

### 5b. About, Contact, Plumbing Services, Service Areas

| Route | Section | Status | Image path | Notes |
|:-|:-|:-|:-|:-|
| `/about/` | Who we are, commitment, what we do, Las Vegas context | NOT NEEDED | n/a | Narrative sections. The van hero already covers the company visual. |
| `/about/` | Service areas (11 city grid) | HAS IMAGE | `locations/las-vegas/...valley-residential-commercial-service-area.webp` | Section background, `alt=""`, `/70` scrim. Same photo as the homepage areas section. |
| `/about/` | License and trust credentials | NOT NEEDED | n/a | Text credentials. |
| `/about/` | Final CTA | MISSING IMAGE | none | Low priority. |
| `/contact/` | Contact details card, process steps, service area summary, quick links, FAQ | NOT NEEDED | n/a | Functional content. |
| `/contact/` | Map placeholder | PLACEHOLDER ONLY | none | Waiting on a confirmed public address or map embed (documented in the file). Not an image gap. |
| `/contact/` | Emergency CTA strip | MISSING IMAGE | none | Low priority. |
| `/plumbing-services/` | Full services grid (18 cards) | HAS IMAGE | 18 card or hero photos | All 18 resolve, lazy, specific alt. |
| `/plumbing-services/` | Residential, Commercial | NOT NEEDED | n/a | Short two-block text. Optional image. |
| `/plumbing-services/` | Service areas preview | MISSING IMAGE | none | Text links only. |
| `/plumbing-services/` | Why choose us | MISSING IMAGE | none | |
| `/plumbing-services/` | Emergency CTA strip, final CTA | MISSING IMAGE | none | `CTASection` supports no image. |
| `/service-areas/` | Primary service areas grid (11 cards) | HAS IMAGE | 11 location heroes | The Las Vegas card repeats the page hero file (the only same-page duplicate on the site). |
| `/service-areas/` | Neighborhoods, nearby areas, popular services by area | NOT NEEDED | n/a | Plain text and link lists. |
| `/service-areas/` | Mid CTA, emergency CTA, final CTA | MISSING IMAGE | none | |
| `/service-areas/` | Why Red Carpet Plumbing | MISSING IMAGE | none | |

### 5c. Core service pages (18)

Applies to: `/emergency-plumbing/`, `/drain-cleaning/`, `/leak-detection-repair/`, `/water-heater-repair-installation/`, `/slab-leak-detection-repair/`, `/sewer-line-services/`, `/repiping/`, `/water-pipe-repair-replacement/`, `/gas-line-plumbing/`, `/commercial-plumbing/`, `/toilet-repair-installation/`, `/faucet-sink-repair-installation/`, `/garbage-disposal-repair-installation/`, `/backflow-prevention/`, `/video-camera-plumbing-inspections/`, `/trenchless-piping/`, `/water-meter-pressure-regulator-services/`, `/plumbing-fixture-repair-replacement-installation/`.

| Section | Status | Notes |
|:-|:-|:-|
| Hero | HAS IMAGE | Section 4b. |
| Signs you need X, or why Las Vegas X problems happen (local issue content) | MISSING IMAGE | Text list or cards without photos on all 18 pages. |
| Service types or services we provide | HAS IMAGE | 8 or 9 type cards plus 3 or 4 related cards, all with photos (13 images per page including the hero). |
| Process steps (HowTo) | NOT NEEDED | Step content must stay text to match HowTo schema. |
| Mid-page CTA, final CTA | MISSING IMAGE | Text panel, no image. |
| Service areas | MISSING IMAGE | Text and links, no per-city image. |
| Related services | HAS IMAGE | 3 or 4 cards with photos. |
| FAQ | NOT NEEDED | |

Cross-page reuse on these pages: the five homepage featured card photos (slab leak, water heater, leak detection, drain cleaning, sewer) and the emergency card appear on 18 to 25 files each as Related Services cards, so every service page ends with the same three or four thumbnails.

### 5d. Tier 1 location hubs (11)

Applies to: `/boulder-city-plumbing-services/`, `/enterprise-plumbing-services/`, `/green-valley-plumbing-services/`, `/henderson-plumbing-services/`, `/lake-las-vegas-plumbing-services/`, `/las-vegas-plumbing-services/`, `/north-las-vegas-plumbing-services/`, `/north-las-vegas/aliante-area-plumbing/`, `/paradise-plumbing-services/`, `/spring-valley-plumbing-services/`, `/summerlin-plumbing-services/`.

| Section | Status | Notes |
|:-|:-|:-|
| Hero | HAS IMAGE | Unique location photo on every hub. |
| Direct answer | NOT NEEDED | |
| Local plumbing context (3 to 4 items) | MISSING IMAGE | Left-rule text items, no photos. |
| Services grid | HAS IMAGE | 4 featured `ServiceCard` photos, remaining services are pills. Same four photos on all 11 hubs. |
| Communities we serve | MISSING IMAGE | Text and pills. Child hubs (for example Green Valley, Lake Las Vegas under Henderson) have their own location heroes that could back linked cards. |
| Emergency CTA (mid), final CTA | MISSING IMAGE | |
| Trust and credentials, FAQ | NOT NEEDED | |

Stale comments: 11 hub files carry a note saying "ServiceCard ServiceImagePlaceholder fallback (no image prop passed)" next to arrays where every item now passes an image. Documentation only.

### 5e. Tier 1 service-location pages (98)

Hero-only pages (82), no other image anywhere on the page: `/boulder-city/drain-cleaning/`, `/boulder-city/emergency-plumbing/`, `/boulder-city/leak-detection-repair/`, `/boulder-city/water-heater-repair-installation/`, `/enterprise/commercial-plumbing/`, `/enterprise/drain-cleaning/`, `/enterprise/emergency-plumbing/`, `/enterprise/leak-detection-repair/`, `/enterprise/sewer-line-services/`, `/enterprise/slab-leak-detection-repair/`, `/enterprise/water-heater-repair-installation/`, `/green-valley/drain-cleaning/`, `/green-valley/faucet-sink-repair-installation/`, `/green-valley/leak-detection-repair/`, `/green-valley/slab-leak-detection-repair/`, `/green-valley/toilet-repair-installation/`, `/green-valley/water-heater-repair-installation/`, `/henderson/backflow-prevention/`, `/henderson/drain-cleaning/`, `/henderson/emergency-plumbing/`, `/henderson/faucet-sink-repair-installation/`, `/henderson/garbage-disposal-repair-installation/`, `/henderson/gas-line-plumbing/`, `/henderson/leak-detection-repair/`, `/henderson/sewer-line-services/`, `/henderson/slab-leak-detection-repair/`, `/henderson/toilet-repair-installation/`, `/henderson/water-heater-repair-installation/`, `/henderson/water-pipe-repair-replacement/`, `/lake-las-vegas/drain-cleaning/`, `/lake-las-vegas/emergency-plumbing/`, `/lake-las-vegas/leak-detection-repair/`, `/lake-las-vegas/slab-leak-detection-repair/`, `/lake-las-vegas/water-heater-repair-installation/`, `/las-vegas/backflow-prevention/`, `/las-vegas/drain-cleaning/`, `/las-vegas/emergency-plumbing/`, `/las-vegas/faucet-sink-repair-installation/`, `/las-vegas/garbage-disposal-repair-installation/`, `/las-vegas/gas-line-plumbing/`, `/las-vegas/leak-detection-repair/`, `/las-vegas/sewer-line-services/`, `/las-vegas/slab-leak-detection-repair/`, `/las-vegas/toilet-repair-installation/`, `/las-vegas/video-camera-plumbing-inspections/`, `/las-vegas/water-heater-repair-installation/`, `/las-vegas/water-pipe-repair-replacement/`, `/north-las-vegas/commercial-plumbing/`, `/north-las-vegas/drain-cleaning/`, `/north-las-vegas/emergency-plumbing/`, `/north-las-vegas/garbage-disposal-repair-installation/`, `/north-las-vegas/leak-detection-repair/`, `/north-las-vegas/repiping/`, `/north-las-vegas/sewer-line-services/`, `/north-las-vegas/toilet-repair-installation/`, `/north-las-vegas/water-heater-repair-installation/`, `/north-las-vegas/water-pipe-repair-replacement/`, `/paradise/backflow-prevention/`, `/paradise/commercial-plumbing/`, `/paradise/drain-cleaning/`, `/paradise/emergency-plumbing/`, `/paradise/gas-line-plumbing/`, `/paradise/leak-detection-repair/`, `/paradise/sewer-line-services/`, `/paradise/water-heater-repair-installation/`, `/spring-valley/drain-cleaning/`, `/spring-valley/emergency-plumbing/`, `/spring-valley/leak-detection-repair/`, `/spring-valley/sewer-line-services/`, `/spring-valley/slab-leak-detection-repair/`, `/spring-valley/water-heater-repair-installation/`, `/summerlin/drain-cleaning/`, `/summerlin/emergency-plumbing/`, `/summerlin/faucet-sink-repair-installation/`, `/summerlin/garbage-disposal-repair-installation/`, `/summerlin/gas-line-plumbing/`, `/summerlin/leak-detection-repair/`, `/summerlin/sewer-line-services/`, `/summerlin/slab-leak-detection-repair/`, `/summerlin/toilet-repair-installation/`, `/summerlin/water-heater-repair-installation/`, `/summerlin/water-pipe-repair-replacement/`.

Pages with additional images (16): `/enterprise/repiping/` (6 images), `/green-valley/emergency-plumbing/` (6 images), `/green-valley/repiping/` (8 images), `/henderson/commercial-plumbing/` (9 images), `/henderson/repiping/` (8 images), `/las-vegas/commercial-plumbing/` (9 images), `/las-vegas/repiping/` (8 images), `/north-las-vegas/aliante-area/drain-cleaning/` (5 images), `/north-las-vegas/aliante-area/emergency-plumbing/` (5 images), `/north-las-vegas/aliante-area/leak-detection-repair/` (5 images), `/north-las-vegas/aliante-area/slab-leak-detection-repair/` (6 images), `/north-las-vegas/aliante-area/water-heater-repair-installation/` (5 images), `/north-las-vegas/slab-leak-detection-repair/` (5 images), `/spring-valley/commercial-plumbing/` (9 images), `/spring-valley/repiping/` (8 images), `/summerlin/repiping/` (6 images). These add ServiceCard grids for materials or commercial services, or Related Services cards.

| Section | Status | Notes |
|:-|:-|:-|
| Hero | HAS IMAGE | Section 4d. Service photo shared across cities. |
| Direct answer, FAQ | NOT NEEDED | |
| Why local homes have this problem (local issue content) | MISSING IMAGE | All 98 pages. |
| Services we provide in the city | MISSING IMAGE on hero-only pages | Rendered as text list items. The parent core page shows the same list as photo cards. |
| Process steps (HowTo) | NOT NEEDED | |
| Mid CTA, final CTA | MISSING IMAGE | |
| Why choose us | MISSING IMAGE | |
| Communities we serve | MISSING IMAGE | Text, pills, buttons. |
| Related services | MISSING IMAGE on hero-only pages | Link list with arrow glyphs, no photos. The 16 pages with extra images use cards. |

### 5f. Totals used in the summary

Content-section gaps (local issue, why choose, services list, communities, related services, location cards): **521**. CTA-panel gaps: **261**. Placeholder-only sections: **1** (contact map). These are class-level counts: a page-type gap is counted once per route that renders it. The CTA-panel figure is lower priority because `CTASection` has no image slot and these panels are text and button by design; decide whether that standard applies before spending on assets.

## 6. Code-level violations

| # | Check | Result | Detail |
|:-|:-|:-|:-|
| 1 | `Images/` paths or `duplicates-review` in code | PASS | 0 matches in `app/`, `components/`, `lib/`, `seo-automation/`. `Images/` is in `.gitignore` and the folder no longer exists. |
| 2 | `<img>` instead of `next/image` | PASS | 0 `<img>` tags. 9 files import `next/image`. |
| 3 | `next/image` without alt | PASS | Rendered HTML: 0 images without an `alt` attribute. |
| 4 | Empty alt on meaningful images | PASS | 136 empty alts, all on decorative full-bleed backgrounds inside `aria-hidden` wrappers (heroes, homepage emergency band, areas bands, thank-you). No card or content photo has empty alt. |
| 5 | Missing width, height or sizes | PASS with note | Card and background images use `fill` plus `sizes`, so no dimensions are needed. Logo has 220x73 header and 300x85 footer dimensions. `sizes` is inert because images are unoptimized, see check 9. |
| 6 | Hard-coded paths that do not resolve | **FAIL (1)** | `app/page.tsx:297` homepage Organization JSON-LD: `image: "https://redcarpetplumbing.com/images/hero/homepage/hero-primary.webp"`. `public/images/hero/` does not exist (the file was copied to `homepage/` and renamed). This is a 404 in production. All 197 distinct relative `/images/...` references in code resolve to real files. Schema edit needs approval. |
| 7 | Embedded text in images | **FLAG (7 files)** | See the list below. |
| 8 | Missing `og:image` | NOTE | No page exports an Open Graph or Twitter image. Not an image-path violation, but it means shared links show no preview. Metadata is approval-gated, so only reported. |
| 9 | `next.config` and static export | PASS | `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`. Build produced `out/` with 137 pages and 0 `/_next/image` URLs. Cloudflare Pages compatible. |
| 10 | Hero alt props never rendered | NOTE | `HeroSection` ignores `backgroundImage.alt` and renders `alt=""`. Correct for decoration, but 135 hand-written alt strings are dead data. |
| 11 | Favicon and manifest | PASS | All 6 icons referenced in `app/layout.tsx` and 2 in `app/manifest.ts` exist. |
| 12 | Image weight | NOTE | Logo PNG 641 KB. Faucet and garbage disposal heroes are 1184 px square sources. |

**Images with readable text (check 7).** Rule: no images with readable text unless approved.

| File | Text | Used on |
|:-|:-|:-|
| `company/contact/red-carpet-plumbing-las-vegas-contact-page-service-van.webp` | Van livery: company name, phone numbers | `/contact/` hero |
| `company/thank-you/red-carpet-plumbing-las-vegas-service-request-thank-you.webp` | Van livery | `/thank-you/` hero |
| `company/vehicles/branded-vehicle.webp` | Van livery, phone numbers | `/about/` hero |
| `homepage/...branded-service-van-home-hero.webp` | Van livery, phone numbers | `/` slide 1 (the opening image) |
| `homepage/...residential-service-van-equipment-hero.webp` | Van livery, phone numbers | `/` slide 4 |
| `services/slab-leak-detection-repair/...epoxy-pipe-lining-card.webp` | "EPOXY PIPE LINING" on two containers | `/slab-leak-detection-repair/` card |
| `services/slab-leak-detection-repair/...slab-leak-detection-card.webp` | "Red Carpet PLUMBING" on a case and equipment | `/slab-leak-detection-repair/` card |

The van photos show two phone numbers, (702) 567-9172 (which matches the site) and a second "734-9515" number that appears nowhere in the project context or code. The text in AI-generated images can also drift from the real vehicle. The Aliante hero shows a real "ALIANTE" entrance sign, which is location signage and acceptable. All other 190 WebP files were visually checked and show no readable text.

## 7. Recommended image assignments

No MISSING or BROKEN hero exists, so P1 to P4 below cover the broken reference, section gaps, repetition and quality. Every path is an existing file in `public/images/`. Alt text suggestions are descriptions to confirm by eye before use. Where no fitting file exists the item is marked TODO and listed in section 8.

### P1: homepage and core pages

| # | Target | Recommendation | Path | Suggested alt |
|:-|:-|:-|:-|:-|
| 1 | Homepage Organization JSON-LD `image` (BROKEN) | Point at a file that exists and matches what the page shows. Needs approval because it is schema. | `/images/homepage/red-carpet-plumbing-las-vegas-branded-service-van-home-hero.webp` (absolute URL `https://redcarpetplumbing.com/images/homepage/...`) | n/a (schema field) |
| 2 | Homepage local issue 1, hard water | Water heater flush photo | `/images/services/water-heater-repair-installation/red-carpet-plumbing-las-vegas-water-heater-flush-maintenance-card.webp` | Water heater flush and maintenance in a Las Vegas home |
| 3 | Homepage local issue 2, slab leaks | Existing slab leak card | `/images/services/slab-leak-detection-repair/red-carpet-plumbing-las-vegas-slab-leak-detection-repair-card.webp` | Leak analyzer and headphones beside taped tile in a hallway (existing alt) |
| 4 | Homepage local issue 3, desert heat on pipes | Pinhole leak photo | `/images/services/water-pipe-repair-replacement/red-carpet-plumbing-las-vegas-pinhole-leak-repair-card.webp` | Pinhole leak repair on a copper water line |
| 5 | Homepage local issue 4, water pressure | Pressure diagnosis photo | `/images/services/water-meter-pressure-regulator-services/red-carpet-plumbing-las-vegas-water-pressure-diagnosis-card.webp` | Water pressure diagnosis at a pressure regulator |
| 6 | Homepage local issue 5, older pipes | Galvanized replacement photo | `/images/services/repiping/red-carpet-plumbing-galvanized-steel-pipe-replacement-card.webp` | Galvanized steel pipe being replaced inside an open wall |
| 7 | Homepage why choose us, About final CTA, home final CTA | TODO: image needed | none | See section 8 (crew or technician photo). Van photos are not suitable because of embedded text. |
| 8 | `/plumbing-services/` hero | Stop sharing the Las Vegas skyline hero with the Las Vegas hub. Use an existing homepage-set photo (it is also homepage slide 5). Needs a visual check. | `/images/homepage/red-carpet-plumbing-las-vegas-sewer-drain-services-hero.webp` | Sewer and drain service equipment at a Las Vegas home |
| 9 | `/service-areas/` Las Vegas card | Remove the same-page duplicate of the hero | `/images/locations/las-vegas/red-carpet-plumbing-las-vegas-valley-residential-commercial-service-area.webp` | Las Vegas Valley residential and commercial neighborhoods |
| 10 | `/about/` hero | Decide whether to follow the two-column standard (add a form or contact card). Design decision, no asset needed. | n/a | n/a |
| 11 | Van photos with readable text (5 routes) | Client to confirm the second phone number on the van and approve the text. If not approved, replace. | TODO | See section 8 |

### P2: core service pages (18)

| # | Target | Recommendation | Path | Suggested alt |
|:-|:-|:-|:-|:-|
| 1 | `/faucet-sink-repair-installation/` and `/garbage-disposal-repair-installation/` heroes | TODO: wide replacement (see section 8). Until then the 1184 px squares are acceptable but soft. | TODO | n/a |
| 2 | `/gas-line-plumbing/` second image | Unused photo, use as a section image or alternate hero | `/images/services/gas-line-plumbing/red-carpet-plumbing-gas-line-plumbing-las-vegas.webp` | Black iron gas line with a regulator and shutoff beside a Las Vegas home |
| 3 | `/repiping/` signs or material guide section | Unused repiping photos | `/images/services/repiping/red-carpet-plumbing-whole-home-repiping-las-vegas.webp`, `...exposed-wall-repiping-las-vegas.webp`, `...old-pipe-new-pipe-replacement-las-vegas.webp`, `...pex-repiping-installation-las-vegas.webp`, `...utility-access-pipe-replacement-las-vegas.webp` | Describe after viewing; all show opened wall repiping |
| 4 | `/water-pipe-repair-replacement/` | Unused photo | `/images/services/water-pipe-repair-replacement/red-carpet-plumbing-water-pipe-repair-replacement-las-vegas.webp` | Water pipe repair and replacement work in progress |
| 5 | `/toilet-repair-installation/` commercial restroom mention | Unused photo | `/images/services/toilet-repair-installation/red-carpet-plumbing-commercial-toilet-repair-las-vegas.webp` | Commercial restroom toilet repair in Las Vegas |
| 6 | Signs or local issue sections on the other 15 service pages | Reuse that service folder's existing `-card` photos that are not already on the page. | per folder | per file |
| 7 | Slab leak cards with embedded text (2 files) | Replace or approve | see section 6 | n/a |

### P3: Tier 1 hubs and service-location pages

| # | Target | Recommendation | Path | Suggested alt |
|:-|:-|:-|:-|:-|
| 1 | Summerlin drain, emergency, water heater pages | Use the matching service hero, as the other nine Summerlin pages do | `/images/services/drain-cleaning/red-carpet-plumbing-las-vegas-drain-cleaning-hero.webp` (and the emergency and water heater heroes) | existing |
| 2 | Henderson hub communities cards | Link cards using the child hub heroes | `/images/locations/green-valley/red-carpet-plumbing-green-valley-nv-neighborhood-location-hero.webp`, `/images/locations/lake-las-vegas/red-carpet-plumbing-lake-las-vegas-nv-waterfront-location-hero.webp` | Green Valley neighborhood street in Henderson; Lake Las Vegas waterfront |
| 3 | North Las Vegas hub communities card | Aliante hero | `/images/locations/aliante-area/red-carpet-plumbing-aliante-north-las-vegas-nv-location-hero.webp` | Aliante community entrance in North Las Vegas |
| 4 | 5 Aliante service-location pages | Use the Aliante location hero, as the Aliante hub does, or add it as a section image | same file as row 3 | same |
| 5 | Hub emergency CTA bands | Reuse the homepage emergency band photo with the same 65 percent scrim | `/images/services/emergency-plumbing/red-carpet-plumbing-las-vegas-emergency-plumbing-active-water-leak.webp` | decorative, `alt=""` |
| 6 | Hero repetition across the 98 service-location pages | TODO: city-specific variants (see section 8). Cheapest fix: pair each service hero with its city location photo as a second image in the local context section. | location heroes per city | existing alts |

### P4: Tier 2 neighborhood pages

No routes exist yet and no neighborhood photos exist. TODO for all 8 pages. See section 8.

## 8. TODO list: images that must be sourced

| # | Priority | Need | Subject | Orientation and minimum size |
|:-|:-|:-|:-|:-|
| 1 | P1 | Team or technician photo | Licensed Red Carpet Plumbing technician or crew at work, uniform visible, no readable text, real people only | Landscape 16:9, 1600 px wide or more |
| 2 | P1 | Van photo without readable text, or client approval of the existing van photos | Branded van where livery is angled or blurred, or approved artwork with the confirmed phone number | Landscape 16:9, 1600 px wide or more |
| 3 | P2 | Faucet and sink hero | Faucet and sink repair or install, wide kitchen or bath scene | Landscape 16:9, 1600 px wide or more (current is 1184x1184 square) |
| 4 | P2 | Garbage disposal hero | Disposal install under a sink, wide scene | Landscape 16:9, 1600 px wide or more (current is 1184x1184 square) |
| 5 | P2 | Slab leak cards without text | Epoxy lining and detection equipment photos with labels removed | Landscape 4:3 or 16:10, 1254 px wide or more |
| 6 | P3 | City-specific service heroes | One service photo per top city (Henderson, Summerlin, North Las Vegas, Paradise) for the top five services | Landscape 16:9, 1600 px wide or more |
| 7 | P3 | Local issue photos for hubs | Hard water scale, desert soil, older homes in the hub city, no text | Landscape 4:3, 1254 px wide or more |
| 8 | P4 | 8 Tier 2 neighborhood photos | Whitney, Winchester, Seven Hills, Desert Inn / West Sahara Corridor, Sunrise Manor, Desert Shores, Tropicana Area, Enterprise Southwest | Landscape 16:9, 1600 px wide or more, one per neighborhood |
| 9 | Optional | Optimized logo file | Resize the 1080x1058 logo to about 2x display size (600 px wide) | PNG or WebP, under 100 KB |
| 10 | Optional | Open Graph image | 1200x630 brand image without small text | 1200x630 |

## 9. Risks and open questions

1. **Broken schema image URL** on the homepage is live data going to search engines. It needs an approved fix (section 6, item 6).
2. **Readable van livery text on 5 routes.** The second number on the van (734-9515) is not in the project context. If it is wrong or retired, the home, About, Contact and Thank You pages all advertise it. Please confirm.
3. **AI-generated look.** The service and card photos are editorial style renders, not real job photos. The brand guide asks for real or approved images, so confirm they are approved.
4. **Priority for service-location pages.** The request defines P2 as service pages and P3 as Tier 1 hubs. This report treats the 98 service-location pages as P3 because they sit under Tier 1 cities. Say so if they should be P2.
5. **CTA panels.** `CTASection` has no image slot. Counting CTA panels as image gaps inflates the gap total (261 of 782). Confirm whether the Site OS CTA layout expects a photo before building anything.
6. **Repeated heroes.** Only 16 hero images serve 98 pages. Search engines and visitors can read this as templated. The fix is a sourcing task, not a code task.
7. **Tier 2 pages do not exist,** so P4 cannot be audited beyond the missing assets.
8. **Outside scope, noticed in passing:** `/about/` hero note shows "4.8 Stars, 76 Reviews" and the homepage Organization schema carries a license number and "over 40 years" copy. CLAUDE.md forbids invented ratings and license numbers unless confirmed. These are not image findings; I made no change. Please confirm they are client-verified.
9. **Build side effect:** `npm run build` runs `seo-automation/scripts/scan-routes.mjs` as `prebuild`. `git status` stayed clean after the build, so nothing tracked was modified. `out/` and `.next/` are gitignored.
10. **Limits of this audit:** contrast was computed on a downscaled copy of each image under the stated scrim, text column only, not in a browser. Section gap counts are class-level. Alt text suggestions in section 7 are inferred from file names and thumbnails and should be confirmed.
