# Public Image Copy Report

**Generated:** 2026-05-25
**Source plan:** `docs/site-os/qa/public-image-selection-audit.md`
**Copy script:** `docs/site-os/qa/copy-public-images.mjs` (Node + sharp)
**Sidecar results:** `docs/site-os/qa/_image-copy-results.json`
**Mode:** LIVE EXECUTION (assets copied to `public/images/`; no commit)

## Count Reconciliation

The audit's "Recommended minimum (required + recommended): **42**" headline figure summed Required **and** Recommended rows. Your explicit scope was "Copy only the **Required** images" plus "Do not copy Recommended images" — so I copied only the rows marked **Required** in the audit. That set is **28 unique source files**. Section 8's Emergency CTA banner reuses the same source file as Section 2's Emergency service card per the audit note ("not a duplicate file copy"), so it does not add a second file copy.

| Item set | Files copied |
|---|---:|
| Section 1 — Homepage hero | 1 |
| Section 2 — Homepage service cards | 5 |
| Section 3 — Core service page heroes | 16 |
| Section 4 — Tier 1 location hub heroes | 4 |
| Section 5 — Blog placeholders | 0 (all Recommended/Optional) |
| Section 6 — Brand logo | 1 (favicon set still a gap, no source) |
| Section 7 — Company / trust | 1 |
| Section 8 — Emergency CTA | 0 (shares Section 2's `card.webp`; no second copy) |
| **Total file copies** | **28** |

If the intent was the full 42 (Required + Recommended), say the word and I will copy the additional 14 Recommended rows in a follow-up pass.

## Summary

| Metric | Value |
|---|---:|
| Required items copied | 28 |
| Files copied as-is (already WebP, or PNG kept for transparency) | 23 |
| Files converted to WebP (sharp, quality 82, effort 5) | 5 |
| Filename conflicts handled | 0 |
| Failed copies | 0 |
| Total source bytes read | 6.42 MB |
| Total bytes written to `public/images/` | 5.69 MB |
| Net savings from WebP conversions | 739 KB |
| Missing required images (gaps with no source) | 4 (favicon set, sewer-line hero, commercial-plumbing hero — counted by audit row, not by copy operation) |
| Source files moved or deleted | 0 |
| `app/` files modified | 0 |

## Per-File Copy Log

### 1. Homepage Hero

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/hero/homepage/pixelcut-export (41).webp` | `public/images/hero/homepage/hero-primary.webp` | webp | webp | 288.8 KB | 288.8 KB | Homepage hero, two-column layout, left column | Red Carpet Plumbing plumber at work in a Las Vegas home | Copied as-is. |

### 2. Homepage Service Cards (5)

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/services/emergency-plumbing/24-7-emergency-plumbing.webp` | `public/images/services/emergency-plumbing/card.webp` | webp | webp | 294.5 KB | 294.5 KB | Emergency Plumbing card; also reused for Emergency CTA strip via component (no second copy) | Twenty four hour emergency plumbing service in Las Vegas | Copied as-is. |
| `Images/services/drain-cleaning/Hydro Jetting in Action  Tough Drain Clog Removal  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/drain-cleaning/card.webp` | webp | webp | 336.3 KB | 336.3 KB | Drain Cleaning service card | Hydro jetting equipment clearing a tough drain clog | Copied as-is. |
| `Images/services/water-heater-repair-installation/Modern Water Heater Installation  Energy Efficient Plumbing  Red Carpet Plumbing Las Vegas_enhanced_enhanced.png` | `public/images/services/water-heater-repair-installation/card.webp` | png | webp | 510.8 KB | 73.0 KB | Water Heater service card | Modern energy efficient water heater installation | **Converted PNG → WebP** (q82, e5). 85.7% size reduction. Visual review recommended at card size. |
| `Images/services/leak-detection-repair/shharris0117_Editorial-style_image_showcasing_advanced_leak_det_7534aa8c-5a8e-482f-bdd4-793341d9612c.webp` | `public/images/services/leak-detection-repair/card.webp` | webp | webp | 14.5 KB | 14.5 KB | Leak Detection card | Advanced leak detection equipment in use at a Las Vegas home | Copied as-is. Small source file — verify resolution at card size. |
| `Images/services/slab-leak-detection-repair/shharris0117_Editorial-style_image_of_a_homes_foundation_with_v_50eeb815-b1ff-4d1a-bbc7-b5145529758e.webp` | `public/images/services/slab-leak-detection-repair/card.webp` | webp | webp | 90.0 KB | 90.0 KB | Slab Leak card | Home foundation showing signs of a slab leak | Copied as-is. Visual review recommended (filename suggests foundation; confirm scene reads as such). |

### 3. Core Service Page Heroes (16)

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/services/emergency-plumbing/Expert Plumbing Diagnosis & Emergency Inspection  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/emergency-plumbing/hero.webp` | webp | webp | 331.2 KB | 331.2 KB | Emergency Plumbing service page hero | Red Carpet Plumbing technician performing an emergency plumbing diagnosis in Las Vegas | Copied as-is. |
| `Images/services/drain-cleaning/Comprehensive Drain Cleaning Methods  Snaking, Hydro Jetting, Enzymatic  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/drain-cleaning/hero.webp` | webp | webp | 400.2 KB | 400.2 KB | Drain Cleaning service page hero | Drain cleaning methods including snaking, hydro jetting, and enzymatic treatment | Copied as-is. |
| `Images/services/leak-detection-repair/shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_b936e585-8508-4548-925d-086a98066ed9 (1) (1).webp` | `public/images/services/leak-detection-repair/hero.webp` | webp | webp | 115.4 KB | 115.4 KB | Leak Detection and Repair service page hero | Licensed plumber locating a hidden water leak in a Las Vegas home | Copied as-is. |
| `Images/services/water-heater-repair-installation/Expert Water Heater Installation  Red Carpet Plumbing Las Vegas, NV.webp` | `public/images/services/water-heater-repair-installation/hero.webp` | webp | webp | 10.6 KB | 10.6 KB | Water Heater service page hero | Expert water heater installation in a Las Vegas home | Copied as-is. Small source; verify hero resolution. |
| `Images/services/slab-leak-detection-repair/shharris0117_Editorial-style_close-up_image_of_advanced_leak_de_7b32d18f-500f-42aa-afe5-59dcfb3f9ba5.webp` | `public/images/services/slab-leak-detection-repair/hero.webp` | webp | webp | 18.0 KB | 18.0 KB | Slab Leak service page hero | Close up of advanced slab leak detection equipment | Copied as-is. Small source; verify hero resolution. |
| `Images/services/re-piping/re-piping-services.webp` | `public/images/services/re-piping/hero.webp` | webp | webp | 339.1 KB | 339.1 KB | Re-Piping service page hero | Whole home re-piping service in Las Vegas | Copied as-is. |
| `Images/services/water-pipe-repair-replacement/shharris0117_Editorial-style_high-resolution_image_of_a_profess_10a3ec07-eabb-4093-b5f6-e012e40e5f3b (1) (1).webp` | `public/images/services/water-pipe-repair-replacement/hero.webp` | webp | webp | 77.1 KB | 77.1 KB | Water Pipe service page hero | Professional water pipe repair work in progress | Copied as-is. |
| `Images/services/gas-line-plumbing/Professional Gas Line Installation in Progress  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/gas-line-plumbing/hero.webp` | webp | webp | 358.3 KB | 358.3 KB | Gas Line service page hero | Professional gas line installation in progress in Las Vegas | Copied as-is. |
| `Images/services/toilet-repair-installation/shharris0117_Editorial-style_image_of_a_stylish_modern_toilet_i_8b240458-6703-4bcd-a29c-e6d4cb8957f0.webp` | `public/images/services/toilet-repair-installation/hero.webp` | webp | webp | 69.9 KB | 69.9 KB | Toilet Repair service page hero | Stylish modern toilet installation in a Las Vegas bathroom | Copied as-is. |
| `Images/services/faucet-sink-repair-installation/faucet-sink-repair-replacement-installation.webp` | `public/images/services/faucet-sink-repair-installation/hero.webp` | webp | webp | 226.9 KB | 226.9 KB | Faucet and Sink service page hero | Faucet and sink repair, replacement, and installation services | Copied as-is. |
| `Images/services/garbage-disposal-repair-installation/Modern Garbage Disposal Installation  Aesthetic & Functional  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/garbage-disposal-repair-installation/hero.webp` | webp | webp | 251.2 KB | 251.2 KB | Garbage Disposal service page hero | Modern garbage disposal installation in a Las Vegas kitchen | Copied as-is. |
| `Images/services/backflow-prevention/Backflow Prevention Device Installation  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/backflow-prevention/hero.webp` | webp | webp | 308.0 KB | 308.0 KB | Backflow Prevention service page hero | Professional backflow prevention device installation | Copied as-is. |
| `Images/services/video-camera-plumbing-inspections/shharris0117_High-resolution_editorial-style_image_of_a_license_9f02cebf-186d-454d-b6bf-bd82b6fc18c3 (1).webp` | `public/images/services/video-camera-plumbing-inspections/hero.webp` | webp | webp | 103.6 KB | 103.6 KB | Video Camera Inspections service page hero | Licensed plumber performing a video camera pipe inspection | Copied as-is. |
| `Images/services/water-meter-pressure-regulator-services/shharris0117_High-resolution_editorial-style_image_of_a_license_d731b012-8b7e-4a35-8d75-75872bf78a40 (1) (1).webp` | `public/images/services/water-meter-pressure-regulator-services/hero.webp` | webp | webp | 72.0 KB | 72.0 KB | Water Meter and Pressure Regulator service page hero | Licensed technician servicing a water meter and pressure regulator | Copied as-is. |
| `Images/services/trenchless-piping/shharris0117_Editorial-style_image_of_a_small_excavation_site_i_69bb8c5a-fdeb-4461-bf94-d452cbd1262f (1) (1).webp` | `public/images/services/trenchless-piping/hero.webp` | webp | webp | 178.3 KB | 178.3 KB | Trenchless Piping service page hero | Small excavation site for trenchless piping service in Las Vegas | Copied as-is. |
| `Images/services/plumbing-fixture-repair-replacement-installation/Plumbing Fixture Installation & Repair  Professional Service  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/plumbing-fixture-repair-replacement-installation/hero.webp` | webp | webp | 74.9 KB | 74.9 KB | Plumbing Fixture service page hero | Professional plumbing fixture installation and repair | Copied as-is. |

### 4. Tier 1 Location Hub Heroes (4)

All four converted from JPG to WebP.

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/locations/las-vegas/View_of_Las_Vegas'_strip_from_the_helicopter.jpg` | `public/images/locations/las-vegas/hero.webp` | jpg | webp | 769.8 KB | 594.1 KB | Las Vegas Tier 1 location hub hero | View of the Las Vegas Strip from above | **Converted JPG → WebP** (q82, e5). 22.8% reduction. |
| `Images/locations/henderson/Henderson,_NV_-_District1.jpg` | `public/images/locations/henderson/hero.webp` | jpg | webp | 139.6 KB | 91.3 KB | Henderson Tier 1 location hub hero | Henderson, Nevada residential district | **Converted JPG → WebP** (q82, e5). 34.6% reduction. |
| `Images/locations/summerlin/SummerlinEntrance.jpg` | `public/images/locations/summerlin/hero.webp` | jpg | webp | 118.1 KB | 81.6 KB | Summerlin Tier 1 location hub hero | Summerlin community entrance in Las Vegas | **Converted JPG → WebP** (q82, e5). 30.9% reduction. |
| `Images/locations/spring-valley/Las_Vegas_Spring_Valley_1.jpg` | `public/images/locations/spring-valley/hero.webp` | jpg | webp | 235.7 KB | 194.9 KB | Spring Valley Tier 1 location hub hero | Spring Valley neighborhood near Las Vegas | **Converted JPG → WebP** (q82, e5). 17.3% reduction. |

### 6. Brand Logo (1)

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/brand/logo/Red Carpet Plumbing  Transparent Logo  Las Vegas Plumbing Experts  Trenchless Piping & Leak Detection.png` | `public/images/brand/logo/red-carpet-plumbing-logo.png` | png | png | 641.0 KB | 641.0 KB | Site header, footer, structured-data logo field | Red Carpet Plumbing logo | **Kept as PNG** to preserve transparency for header overlay. Resize to header dimensions (~240×80) in a follow-up optimization pass. |

### 7. Company / Trust (1)

| Source | Public Path | Orig | Final | Orig Size | Final Size | Usage | Alt | Notes |
|---|---|---|---|---:|---:|---|---|---|
| `Images/company/vehicles/pixelcut-export.webp` | `public/images/company/vehicles/branded-vehicle.webp` | webp | webp | 195.3 KB | 195.3 KB | About page, trust strip, footer accent | Red Carpet Plumbing service vehicle in Las Vegas | Copied as-is. |

## Folder Structure Created Under `public/images/`

```
public/images/
├── brand/
│   ├── favicon/                  (created empty; favicon set still a gap)
│   └── logo/
│       └── red-carpet-plumbing-logo.png
├── hero/
│   ├── homepage/
│   │   └── hero-primary.webp
│   └── locations/                (created empty; the night-skyline alt is Recommended, not Required)
├── services/
│   ├── backflow-prevention/hero.webp
│   ├── drain-cleaning/{card.webp, hero.webp}
│   ├── emergency-plumbing/{card.webp, hero.webp}
│   ├── faucet-sink-repair-installation/hero.webp
│   ├── garbage-disposal-repair-installation/hero.webp
│   ├── gas-line-plumbing/hero.webp
│   ├── leak-detection-repair/{card.webp, hero.webp}
│   ├── plumbing-fixture-repair-replacement-installation/hero.webp
│   ├── re-piping/hero.webp
│   ├── slab-leak-detection-repair/{card.webp, hero.webp}
│   ├── toilet-repair-installation/hero.webp
│   ├── trenchless-piping/hero.webp
│   ├── video-camera-plumbing-inspections/hero.webp
│   ├── water-heater-repair-installation/{card.webp, hero.webp}
│   ├── water-meter-pressure-regulator-services/hero.webp
│   └── water-pipe-repair-replacement/hero.webp
├── locations/
│   ├── henderson/hero.webp
│   ├── las-vegas/hero.webp
│   ├── spring-valley/hero.webp
│   └── summerlin/hero.webp
├── company/
│   └── vehicles/branded-vehicle.webp
├── blog/                         (created empty; all blog placeholders are Recommended, not Required)
└── social/                       (created empty; not part of website build)
```

## Missing Required Items (no source available — could not copy)

These were flagged Required in the audit but have no source asset in `Images/`. They remain gaps to source separately.

| Required item | Gap reason |
|---|---|
| Brand favicon set (16/32/48/180/192/512) | `Images/brand/favicon/` is empty. Need to generate from the brand logo. |
| Sewer Line Services page hero | No source images in `Images/services/sewer-line-services/` (folder not created; no assets). |
| Commercial Plumbing page hero | No source images in `Images/services/commercial-plumbing/` (folder not created; no assets). |

## Files NOT Copied (Per Scope)

- All Recommended-tier rows from the audit (14 files) — not in scope this pass.
- All Optional-tier rows from the audit — not in scope this pass.
- All 19 files in `Images/duplicates-review/` — every one is a SHA256 twin of a kept file already copied.
- The 2 alternative logo files (`Logo.png`, `Red Carpet Plumbing logo-trimmed.png`) — not Required.
- The 3 Facebook-uploaded vehicle JPGs in `company/vehicles/` — not Required and pending visual review.
- The promo `Red Carpet Plumbing Discount.jpg` in `brand/social/` — social-channel asset, not part of the website build.

## Constraint Compliance

| Constraint | Result |
|---|---|
| Only Required images copied | Confirmed (28 files; Recommended and Optional skipped) |
| Nothing copied from `Images/duplicates-review/` | Confirmed |
| No source images moved | Confirmed (`Images/` still at 176 files) |
| No source images deleted | Confirmed |
| File extensions handled per rules (WebP preferred; JPG/PNG converted when safe; logo PNG kept for transparency) | Confirmed |
| Filenames lowercase, URL-safe, descriptive in `public/images/` | Confirmed |
| No file overwrites without check | Confirmed (collision logic ready; 0 collisions occurred) |
| `app/` component code unchanged | Confirmed (no `app/` diff) |
| No `next.config.*` or other config touched | Confirmed |
| Nothing committed | Confirmed |
| `Images/` remains gitignored | Confirmed |
| `docs/site-os/qa/` remains uncommitted | Confirmed |
