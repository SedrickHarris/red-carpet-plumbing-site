# Image Organization Audit Report (v2)

**Generated:** 2026-05-25 09:10:38  
**Source:** `Images/`  
**Mode:** DRY RUN ONLY (no files moved, renamed, or deleted)  
**Revision note:** Regenerated with user overrides — three previously-unmapped service subfolders are now approved as project services and mapped accordingly. The 7 empty target folders have been pre-created. No files moved.

## Overrides Applied

1. Three new approved service slugs added:
   - `services/plumbing-fixture-repair-replacement-installation/`
   - `services/trenchless-piping/`
   - `services/water-meter-pressure-regulator-services/`
2. `Images/services/Plumbing Fixtures/` → `Images/services/plumbing-fixture-repair-replacement-installation/`
3. `Images/services/Trenchless Piping/` → `Images/services/trenchless-piping/`
4. `Images/services/Water Meter/` → `Images/services/water-meter-pressure-regulator-services/`
5. `Images/services/Water Leak and Clog/` continues to map to `Images/services/leak-detection-repair/` — see manual review note below.
6. `Red Carpet Plumbing Discount.jpg` continues to map to `Images/brand/social/`.
7. Pre-created the 7 empty target folders: `brand/favicon/`, `company/team/`, `company/equipment/`, `company/job-sites/`, `social/google-business-profile/`, `social/instagram/`, `social/notebooklm/`.

## Summary

| Metric | Value |
|---|---|
| Total image files found | 176 |
| Total size of Images/ | 25.76 MB |
| Root-level loose files | 1 |
| Distinct proposed target folders | 27 |
| Files proposed for `unsorted/` | 0 |
| Files proposed for `duplicates-review/` | 19 |
| New approved service folders added | 3 |
| Empty folders pre-created | 7 |

## Current Folder Inventory

| Current folder | Files | Notes |
|---|---|---|
| Images/ (root, loose) | 1 | `Red Carpet Plumbing Discount.jpg` |
| Images/blog/ | 7 |  |
| Images/brand/ | 0 | pre-created (favicon/ empty; social/ will receive Discount.jpg) |
| Images/company/ | 0 | pre-created (team/, equipment/, job-sites/ empty; vehicles/ awaits move) |
| Images/company vehicle/ | 4 | needs normalization: space + singular |
| Images/emergency plumbing/ | 15 | needs normalization: space; will merge into services/emergency-plumbing |
| Images/hero/ | 25 |  |
| Images/locations/ | 11 |  |
| Images/logo/ | 3 | needs normalization: nest under brand/ |
| Images/services/ | 110 |  |
| Images/social/ | 0 | pre-created (all 3 channel subfolders empty) |

### Subfolders inside Images/services/

| Current subfolder | Files | Proposed slug | Status |
|---|---|---|---|
| services/Backflow Prevention Services/ | 6 | backflow-prevention | mapped |
| services/Drain Cleaning Services/ | 6 | drain-cleaning | mapped |
| services/Emergency Plumbing/ | 5 | emergency-plumbing | mapped |
| services/Garbage Disposal/ | 6 | garbage-disposal-repair-installation | mapped |
| services/Natural Gas/ | 5 | gas-line-plumbing | mapped |
| services/Plumbing Fixtures/ | 6 | plumbing-fixture-repair-replacement-installation | mapped (NEW — added by override) |
| services/Re-Piping/ | 6 | re-piping | mapped |
| services/Sink Repair Services/ | 6 | faucet-sink-repair-installation | mapped |
| services/Slab Leak/ | 6 | slab-leak-detection-repair | mapped |
| services/Toilet Repair/ | 6 | toilet-repair-installation | mapped |
| services/Trenchless Piping/ | 5 | trenchless-piping | mapped (NEW — added by override) |
| services/Video Camera Inspection/ | 5 | video-camera-plumbing-inspections | mapped |
| services/Water Heater Services/ | 6 | water-heater-repair-installation | mapped |
| services/Water Leak and Clog/ | 6 | leak-detection-repair | mapped |
| services/Water Meter/ | 8 | water-meter-pressure-regulator-services | mapped (NEW — added by override) |
| services/Water Pipe/ | 8 | water-pipe-repair-replacement | mapped |
| services/ (loose files) | 14 | per-file mapping below | all mapped (water-meter loose file now mapped) |

## Proposed Target Structure

```
Images/
├── brand/
│   ├── logo/         (3 mapped)
│   ├── favicon/      (0 — pre-created empty)
│   └── social/       (1 mapped — Discount jpg)
├── hero/
│   ├── homepage/     (24 mapped)
│   ├── services/    
│   ├── locations/    (1 mapped — Las Vegas night skyline)
│   └── blog/        
├── services/         (18 service slugs total — 15 from build list + 3 added by override)
├── locations/        (11 city slugs available; mapped subset populated)
├── company/
│   ├── vehicles/     (4 mapped)
│   ├── team/         (0 — pre-created empty)
│   ├── equipment/    (0 — pre-created empty)
│   └── job-sites/    (0 — pre-created empty)
├── blog/             (7 mapped)
├── social/
│   ├── google-business-profile/  (0 — pre-created empty)
│   ├── instagram/                (0 — pre-created empty)
│   └── notebooklm/               (0 — pre-created empty)
├── unsorted/         (created on-demand)
└── duplicates-review/ (created on-demand)
```

## Proposed Move Counts By Target

| Target folder | Files |
|---|---|
| Images/blog/ | 7 |
| Images/brand/logo/ | 3 |
| Images/brand/social/ | 1 |
| Images/company/vehicles/ | 4 |
| Images/duplicates-review/ | 19 |
| Images/hero/homepage/ | 24 |
| Images/hero/locations/ | 1 |
| Images/locations/henderson/ | 1 |
| Images/locations/las-vegas/ | 7 |
| Images/locations/spring-valley/ | 1 |
| Images/locations/summerlin/ | 2 |
| Images/services/backflow-prevention/ | 6 |
| Images/services/drain-cleaning/ | 6 |
| Images/services/emergency-plumbing/ | 20 |
| Images/services/faucet-sink-repair-installation/ | 6 |
| Images/services/garbage-disposal-repair-installation/ | 6 |
| Images/services/gas-line-plumbing/ | 5 |
| Images/services/leak-detection-repair/ | 5 |
| Images/services/plumbing-fixture-repair-replacement-installation/ (NEW) | 6 |
| Images/services/re-piping/ | 6 |
| Images/services/slab-leak-detection-repair/ | 6 |
| Images/services/toilet-repair-installation/ | 5 |
| Images/services/trenchless-piping/ (NEW) | 5 |
| Images/services/video-camera-plumbing-inspections/ | 3 |
| Images/services/water-heater-repair-installation/ | 6 |
| Images/services/water-meter-pressure-regulator-services/ (NEW) | 8 |
| Images/services/water-pipe-repair-replacement/ | 7 |

## Root-Level Loose Files

| File | Size | Proposed target | Reason |
|---|---|---|---|
| `Images/Red Carpet Plumbing Discount.jpg` | 132 KB | `Images/brand/social/` | Promo/discount asset; routed to brand/social per override |

## Folder Renames / Normalizations

| Current | Target | Reason |
|---|---|---|
| `Images/logo/` | `Images/brand/logo/` | Nest brand assets under brand/ |
| `Images/company vehicle/` | `Images/company/vehicles/` | Slugify space; pluralize; nest under company/ |
| `Images/emergency plumbing/` | `Images/services/emergency-plumbing/` | Slugify; nest under services/; merge with existing services/Emergency Plumbing/ |
| `Images/services/Backflow Prevention Services/` | `Images/services/backflow-prevention/` | Slugify; drop 'Services' suffix |
| `Images/services/Drain Cleaning Services/` | `Images/services/drain-cleaning/` | Slugify; drop 'Services' suffix |
| `Images/services/Emergency Plumbing/` | `Images/services/emergency-plumbing/` | Lowercase + hyphenate |
| `Images/services/Garbage Disposal/` | `Images/services/garbage-disposal-repair-installation/` | Match approved-list slug |
| `Images/services/Natural Gas/` | `Images/services/gas-line-plumbing/` | Match approved-list slug |
| `Images/services/Plumbing Fixtures/` | `Images/services/plumbing-fixture-repair-replacement-installation/` | **NEW** — added as approved service per override |
| `Images/services/Re-Piping/` | `Images/services/re-piping/` | Lowercase |
| `Images/services/Sink Repair Services/` | `Images/services/faucet-sink-repair-installation/` | Match approved-list slug |
| `Images/services/Slab Leak/` | `Images/services/slab-leak-detection-repair/` | Match approved-list slug |
| `Images/services/Toilet Repair/` | `Images/services/toilet-repair-installation/` | Match approved-list slug |
| `Images/services/Trenchless Piping/` | `Images/services/trenchless-piping/` | **NEW** — added as approved service per override |
| `Images/services/Video Camera Inspection/` | `Images/services/video-camera-plumbing-inspections/` | Match approved-list slug |
| `Images/services/Water Heater Services/` | `Images/services/water-heater-repair-installation/` | Match approved-list slug |
| `Images/services/Water Leak and Clog/` | `Images/services/leak-detection-repair/` | Best match to approved-list slug — see Manual Review note |
| `Images/services/Water Meter/` | `Images/services/water-meter-pressure-regulator-services/` | **NEW** — added as approved service per override |
| `Images/services/Water Pipe/` | `Images/services/water-pipe-repair-replacement/` | Match approved-list slug |

## Files Flagged For `unsorted/` (Manual Review)

_None._ All files are mapped to approved-structure folders.

## Files Flagged For `duplicates-review/` (Hash Identical)

| # | File (to duplicates-review/) | Identical to (kept) | Size |
|---|---|---|---|
| 1 | `Images/services\backflow-prevention-services.webp` | `Images/services\Backflow Prevention Services\Backflow Preventer Installation  Red Carpet Plumbing Las Vegas, NV.webp` | 63.2 KB |
| 2 | `Images/services\drain-cleaning-clog-removal.webp` | `Images/services\Drain Cleaning Services\Comprehensive Drain Cleaning Methods  Snaking, Hydro Jetting, Enzymatic  Red Carpet Plumbing Las Vegas.webp` | 400.2 KB |
| 3 | `Images/services\Emergency Plumbing\Water Heater Leak Repair  Emergency Plumbing Services  Red Carpet Plumbing Las Vegas.webp` | `Images/services\24-7-emergency-plumbing.webp` | 294.5 KB |
| 4 | `Images/services\garbage-disposal-services.webp` | `Images/services\Garbage Disposal\Modern Garbage Disposal Installation  Aesthetic & Functional  Red Carpet Plumbing Las Vegas.webp` | 251.2 KB |
| 5 | `Images/services\natural-gas-line-services.webp` | `Images/services\Natural Gas\Licensed Plumber Installing Natural Gas Line  Professional Gas Services  Red Carpet Plumbing Las Vegas (1) (1).webp` | 106.4 KB |
| 6 | `Images/services\Re-Piping\shharris0117_Editorial-style_photo_of_a_licensed_plumber_in_nav_cc67b215-6cbb-4eb8-8a74-81d82dcac4b3.webp` | `Images/services\re-piping-services.webp` | 339.1 KB |
| 7 | `Images/services\Sink Repair Services\Modern Bathroom and Kitchen Faucet Installation  Red Carpet Plumbing Las Vegas, NV.webp` | `Images/services\faucet-sink-repair-replacement-installation.webp` | 226.9 KB |
| 8 | `Images/services\slab-leak-detection-repair.webp` | `Images/services\Slab Leak\shharris0117_Editorial-style_close-up_image_of_cracks_forming_i_8551c50a-cf54-466b-846b-d264bd63b74c.webp` | 18.7 KB |
| 9 | `Images/services\Toilet Repair\shharris0117_Editorial-style_image_of_a_professional_plumber_in_931a9fe1-dd82-4fe1-be43-0244f66d108e.webp` | `Images/hero\plumber-hero-5.webp` | 20.4 KB |
| 10 | `Images/services\toilet-repair-installation.webp` | `Images/services\Toilet Repair\shharris0117_Editorial-style_image_of_a_stylish_modern_toilet_i_8b240458-6703-4bcd-a29c-e6d4cb8957f0.webp` | 69.9 KB |
| 11 | `Images/services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_2c7976fd-8dce-481e-9415-ace9884cd9f0.webp` | `Images/hero\plumber-hero-3.webp` | 26.2 KB |
| 12 | `Images/services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_35ee85c6-8a18-4137-987c-e05bde7a5419.webp` | `Images/hero\plumber-hero-4.webp` | 16.9 KB |
| 13 | `Images/services\video-camera-plumbing-inspections.webp` | `Images/services\Video Camera Inspection\shharris0117_High-resolution_editorial-style_image_of_a_license_9f02cebf-186d-454d-b6bf-bd82b6fc18c3 (1).webp` | 103.6 KB |
| 14 | `Images/services\Water Leak and Clog\shharris0117_High-resolution_editorial-style_image_of_a_profess_ec57a48a-0498-4971-8f66-e1732b0af135 (1).jpg` | `Images/hero\plumber-hero-1.jpg` | 77.1 KB |
| 15 | `Images/services\Water Pipe\shharris0117_Editorial-style_image_of_a_professional_plumber_in_0b7a229e-244b-4bd3-b7ad-8ac5b329cbe6.webp` | `Images/hero\plumber-hero-2.webp` | 21.5 KB |
| 16 | `Images/services\water-heater-repair-replacement-installation.webp` | `Images/services\Water Heater Services\Skilled Plumbers at Work  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp` | 10.2 KB |
| 17 | `Images/services\water-leak-clog-troubleshooting.webp` | `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_professional_plumber_in_6f3f529a-fe67-4a03-92fa-33ccc122c63c.webp` | 19.4 KB |
| 18 | `Images/services\water-meter-pressure-regulator-services.webp` | `Images/services\Water Meter\shharris0117_Editorial-style_image_of_a_technician_in_a_navy_bl_d8a714c1-ffac-44e6-a10f-600fc1766158.webp` | 28.3 KB |
| 19 | `Images/services\water-pipe-repair-replacement-installation.webp` | `Images/hero\plumber-hero-2.webp` | 21.5 KB |

## Manual Review Note: Water Leak and Clog → leak-detection-repair

The files currently in `Images/services/Water Leak and Clog/` are mapped to `Images/services/leak-detection-repair/` because leak-detection-repair is the closest match in the approved services list. **However**, some images in this folder may actually depict drain clogs rather than plumbing leaks. After moves are executed, perform a per-file visual review and reassign clog-focused images to `Images/services/drain-cleaning/` if appropriate.

Files currently slated for `services/leak-detection-repair/` from this source folder:

- `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_b936e585-8508-4548-925d-086a98066ed9 (1) (1).webp`
- `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_professional_plumber_in_69719a35-087f-48e0-8eb5-abd19febbbc0.webp`
- `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_professional_plumber_in_6f3f529a-fe67-4a03-92fa-33ccc122c63c.webp`
- `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_of_damp_spots_visible_on_wal_3580f10c-bb19-496d-aeac-ef03364d0397.webp`
- `Images/services\Water Leak and Clog\shharris0117_Editorial-style_image_showcasing_advanced_leak_det_7534aa8c-5a8e-482f-bdd4-793341d9612c.webp`

## Full Per-File Plan

Files grouped by proposed target folder. All paths shown relative to `Images/`.

### Images/blog/ (7 files)

- `blog\shharris0117_An_editorial-style_high-resolution_photograph_feat_fe2215c8-3251-4746-95ae-be42e0b758d2.webp`
- `blog\shharris0117_An_editorial-style_high-resolution_photograph_of_a_af7c4a13-b449-4e02-a97f-9a8367bdee4f.webp`
- `blog\shharris0117_An_editorial-style_high-resolution_photograph_of_a_c2ea8aa6-5c75-4bfe-9d44-91921860acd4.webp`
- `blog\shharris0117_An_editorial-style_image_depicting_safety_precauti_cfb6755a-a951-4214-b3ab-32f64ad06a6d.webp`
- `blog\shharris0117_An_editorial-style_photograph_featuring_common_non_c199ceac-ea91-4a96-9aa8-1c1aa25d4f70.webp`
- `blog\shharris0117_An_editorial-style_photograph_of_a_professional_pl_6e2b0e1c-33a7-4acf-9fc2-415ec72a6f16.webp`
- `blog\shharris0117_An_editorial-style_photograph_showcasing_a_sleek_m_c0d85408-40e6-4d54-86a3-593cd570c930.webp`

### Images/brand/logo/ (3 files)

- `logo\Logo.png`
- `logo\Red Carpet Plumbing  Transparent Logo  Las Vegas Plumbing Experts  Trenchless Piping & Leak Detection.png`
- `logo\Red Carpet Plumbing logo-trimmed.png`

### Images/brand/social/ (1 files)

- `Red Carpet Plumbing Discount.jpg`

### Images/company/vehicles/ (4 files)

- `company vehicle\12901284_1533805563583104_6875853539832409429_o.jpg`
- `company vehicle\12901393_1533805526916441_2072960707534303400_o.jpg`
- `company vehicle\277677637_379577077509730_8812256990604806774_n.jpg`
- `company vehicle\pixelcut-export.webp`

### Images/duplicates-review/ (19 files)

- `services\backflow-prevention-services.webp`
- `services\drain-cleaning-clog-removal.webp`
- `services\Emergency Plumbing\Water Heater Leak Repair  Emergency Plumbing Services  Red Carpet Plumbing Las Vegas.webp`
- `services\garbage-disposal-services.webp`
- `services\natural-gas-line-services.webp`
- `services\Re-Piping\shharris0117_Editorial-style_photo_of_a_licensed_plumber_in_nav_cc67b215-6cbb-4eb8-8a74-81d82dcac4b3.webp`
- `services\Sink Repair Services\Modern Bathroom and Kitchen Faucet Installation  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\slab-leak-detection-repair.webp`
- `services\Toilet Repair\shharris0117_Editorial-style_image_of_a_professional_plumber_in_931a9fe1-dd82-4fe1-be43-0244f66d108e.webp`
- `services\toilet-repair-installation.webp`
- `services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_2c7976fd-8dce-481e-9415-ace9884cd9f0.webp`
- `services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_professional_plumber_in_35ee85c6-8a18-4137-987c-e05bde7a5419.webp`
- `services\video-camera-plumbing-inspections.webp`
- `services\Water Leak and Clog\shharris0117_High-resolution_editorial-style_image_of_a_profess_ec57a48a-0498-4971-8f66-e1732b0af135 (1).jpg`
- `services\Water Pipe\shharris0117_Editorial-style_image_of_a_professional_plumber_in_0b7a229e-244b-4bd3-b7ad-8ac5b329cbe6.webp`
- `services\water-heater-repair-replacement-installation.webp`
- `services\water-leak-clog-troubleshooting.webp`
- `services\water-meter-pressure-regulator-services.webp`
- `services\water-pipe-repair-replacement-installation.webp`

### Images/hero/homepage/ (24 files)

- `hero\pixelcut-export (27).webp`
- `hero\pixelcut-export (28).webp`
- `hero\pixelcut-export (29).webp`
- `hero\pixelcut-export (32).webp`
- `hero\pixelcut-export (33).webp`
- `hero\pixelcut-export (34).webp`
- `hero\pixelcut-export (35).webp`
- `hero\pixelcut-export (36).webp`
- `hero\pixelcut-export (37).webp`
- `hero\pixelcut-export (38).webp`
- `hero\pixelcut-export (39).webp`
- `hero\pixelcut-export (40).webp`
- `hero\pixelcut-export (41).webp`
- `hero\pixelcut-export (42).webp`
- `hero\pixelcut-export (44).webp`
- `hero\pixelcut-export (45).webp`
- `hero\pixelcut-export (46).webp`
- `hero\pixelcut-export (47).webp`
- `hero\pixelcut-export (49).webp`
- `hero\plumber-hero-1.jpg`
- `hero\plumber-hero-2.webp`
- `hero\plumber-hero-3.webp`
- `hero\plumber-hero-4.webp`
- `hero\plumber-hero-5.webp`

### Images/hero/locations/ (1 files)

- `hero\las-vegas-night-skyline-hero.webp`

### Images/locations/henderson/ (1 files)

- `locations\Henderson,_NV_-_District1.jpg`

### Images/locations/las-vegas/ (7 files)

- `locations\LasVegasBeautifulMontage.jpg`
- `locations\shharris0117_Editorial-style_aerial_photo_capturing_the_area_ne_2ffdbbae-091d-4892-91f4-fdd1d1674b1a (1).webp`
- `locations\shharris0117_Editorial-style_aerial_photo_capturing_the_area_ne_fbfbeede-37f6-44da-99f0-beb008369070.webp`
- `locations\shharris0117_Editorial-style_aerial_photo_capturing_the_vast_an_b38a25f8-d70f-430f-9d6b-9e7a617d947a.webp`
- `locations\shharris0117_Editorial-style_aerial_shot_of_the_Las_Vegas_NV_sk_4ca974be-9288-4d5c-84c6-2531b099d9bc.webp`
- `locations\shharris0117_Editorial-style_image_featuring_the_iconic_Welcome_e8c14efd-06d0-47a2-ae0a-becec30af95a.webp`
- `locations\View_of_Las_Vegas'_strip_from_the_helicopter.jpg`

### Images/locations/spring-valley/ (1 files)

- `locations\Las_Vegas_Spring_Valley_1.jpg`

### Images/locations/summerlin/ (2 files)

- `locations\SummerlinEntrance.jpg`
- `locations\The_Ridges_in_Summerlin.jpg`

### Images/services/backflow-prevention/ (6 files)

- `services\Backflow Prevention Services\Backflow Preventer Installation  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\Backflow Prevention Services\Backflow Prevention Device Installation  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp`
- `services\Backflow Prevention Services\Contaminated Water from Backflow  Backflow Preventer Services  Red Carpet Plumbing Las Vegas.webp`
- `services\Backflow Prevention Services\Customer Satisfaction with Backflow Prevention Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Backflow Prevention Services\Different Types of Backflow Preventers  RPZ, DCVA, and More  Red Carpet Plumbing Las Vegas.webp`
- `services\Backflow Prevention Services\Range of Backflow Preventer Devices  RPZ, Double Check Valves  Red Carpet Plumbing Las Vegas.webp`

### Images/services/drain-cleaning/ (6 files)

- `services\Drain Cleaning Services\Comprehensive Drain Cleaning Methods  Snaking, Hydro Jetting, Enzymatic  Red Carpet Plumbing Las Vegas.webp`
- `services\Drain Cleaning Services\Hydro Jetting in Action  Tough Drain Clog Removal  Red Carpet Plumbing Las Vegas.webp`
- `services\Drain Cleaning Services\Professional Drain Cleaning Tools  Comprehensive Services  Red Carpet Plumbing Las Vegas.webp`
- `services\Drain Cleaning Services\Professional Plumbing Team  Certified Plumbers  Red Carpet Plumbing Las Vegas.webp`
- `services\Drain Cleaning Services\Slow Draining Sink Repair  Drain Blockage Services  Red Carpet Plumbing Las Vegas.webp`
- `services\Drain Cleaning Services\Spotless Drains After Professional Cleaning  Red Carpet Plumbing Las Vegas (2).webp`

### Images/services/emergency-plumbing/ (20 files)

- `emergency plumbing\shharris0117_An_editorial_style_image_of_a_flooded_bathroom_wit_46023b13-03da-4d07-8523-0891357e5618.webp`
- `emergency plumbing\shharris0117_An_editorial_style_image_of_a_flooded_bathroom_wit_75d3a5c0-c325-4416-80d8-8069b4d3b2f7.webp`
- `emergency plumbing\shharris0117_An_editorial_style_image_of_water_gushing_from_und_5cc853ef-f2fa-448b-9471-5e0fcc5cc641.webp`
- `emergency plumbing\shharris0117_An_editorial_style_image_of_water_gushing_from_und_7f23bfcb-560a-4a41-9f87-735c7adb96e7.webp`
- `emergency plumbing\shharris0117_An_editorial_style_image_of_water_gushing_from_und_9ef3d94c-284d-4538-b7bb-435fb9bdc104.webp`
- `emergency plumbing\shharris0117_editorial-style_image_of_a_water_heater_emergency__0979555b-4101-4053-9c62-e198c32cac1a.webp`
- `emergency plumbing\shharris0117_editorial-style_image_of_a_water_heater_emergency__68289758-7773-4d13-8fd9-222886cc3528.webp`
- `emergency plumbing\shharris0117_editorial-style_image_of_a_water_heater_emergency__b0b451c3-1b95-4bcb-bec9-86641e02e1e5.webp`
- `emergency plumbing\shharris0117_Editorial-style_image_of_an_overflowing_toilet_in__77c9edd0-8b54-415c-9ac6-53e9f9c3bc5c.webp`
- `emergency plumbing\shharris0117_Editorial-style_image_of_an_overflowing_toilet_in__83ef4603-3bd1-48c8-847c-ab985dc4af80.webp`
- `emergency plumbing\shharris0117_Editorial-style_image_of_an_overflowing_toilet_in__eab2df91-42ee-4265-9f76-96345b9d0132.webp`
- `emergency plumbing\shharris0117_Image_A_close-up_photo_of_a_burst_pipe_emphasizing_30ce6443-c56a-49fd-b6db-ff439e2cb0cd.webp`
- `emergency plumbing\shharris0117_Image_A_close-up_photo_of_a_burst_pipe_emphasizing_683733c3-5901-4f4c-8aee-ef7637ea83bb.webp`
- `emergency plumbing\shharris0117_Image_A_close-up_photo_of_a_burst_pipe_emphasizing_6e80e5a9-4c04-4d03-a8fa-5f1857b1fcbf.webp`
- `emergency plumbing\shharris0117_Image_A_close-up_photo_of_a_burst_pipe_emphasizing_b93a9336-1d5d-4caf-b24e-27f0e3b365e7.webp`
- `services\24-7-emergency-plumbing.webp`
- `services\Emergency Plumbing\Emergency Plumbing Tools & Equipment  Prepared for Plumbing Emergencies  Red Carpet Plumbing Las Vegas.webp`
- `services\Emergency Plumbing\Expert Plumbing Diagnosis & Emergency Inspection  Red Carpet Plumbing Las Vegas.webp`
- `services\Emergency Plumbing\Happy Customers After Emergency Plumbing Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Emergency Plumbing\On-Site Plumbing Assessment  Professional Problem-Solving  Red Carpet Plumbing Las Vegas.webp`

### Images/services/faucet-sink-repair-installation/ (6 files)

- `services\faucet-sink-repair-replacement-installation.webp`
- `services\Sink Repair Services\Beautiful Kitchen and Bathroom Faucet Installations  Red Carpet Plumbing, Las Vegas.webp`
- `services\Sink Repair Services\Expert Faucet Installation by Red Carpet Plumbing  Las Vegas, NV.webp`
- `services\Sink Repair Services\Leaky, Corroded Faucet Repair  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\Sink Repair Services\Step-by-Step Faucet Installation Process  Red Carpet Plumbing Las Vegas.webp`
- `services\Sink Repair Services\Trusted Plumbing Services by Red Carpet Plumbing  Las Vegas, NV.webp`

### Images/services/garbage-disposal-repair-installation/ (6 files)

- `services\Garbage Disposal\Different Garbage Disposal Models for Repair & Installation  Red Carpet Plumbing Las Vegas.webp`
- `services\Garbage Disposal\Leaking Garbage Disposal Repair  Emergency Plumbing Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Garbage Disposal\Licensed Plumber Installing Garbage Disposal  Professional Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Garbage Disposal\Modern Garbage Disposal Installation  Aesthetic & Functional  Red Carpet Plumbing Las Vegas.webp`
- `services\Garbage Disposal\Modern Garbage Disposal Unit  Efficient & Durable  Red Carpet Plumbing Las Vegas.webp`
- `services\Garbage Disposal\Professional Garbage Disposal Installation  Red Carpet Plumbing Las Vegas.webp`

### Images/services/gas-line-plumbing/ (5 files)

- `services\Natural Gas\Certified Plumber Working on Gas Line Installation  Red Carpet Plumbing Las Vegas.webp`
- `services\Natural Gas\Licensed Plumber Installing Natural Gas Line  Professional Gas Services  Red Carpet Plumbing Las Vegas (1) (1).webp`
- `services\Natural Gas\Natural Gas Meter Installation  Safe & Professional Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Natural Gas\Professional Gas Line Installation in Progress  Red Carpet Plumbing Las Vegas.webp`
- `services\Natural Gas\Safe Gas Line Installation with Safety Gear  Red Carpet Plumbing Las Vegas.webp`

### Images/services/leak-detection-repair/ (5 files)

- `services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_b936e585-8508-4548-925d-086a98066ed9 (1) (1).webp`
- `services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_professional_plumber_in_69719a35-087f-48e0-8eb5-abd19febbbc0.webp`
- `services\Water Leak and Clog\shharris0117_Editorial-style_image_of_a_professional_plumber_in_6f3f529a-fe67-4a03-92fa-33ccc122c63c.webp`
- `services\Water Leak and Clog\shharris0117_Editorial-style_image_of_damp_spots_visible_on_wal_3580f10c-bb19-496d-aeac-ef03364d0397.webp`
- `services\Water Leak and Clog\shharris0117_Editorial-style_image_showcasing_advanced_leak_det_7534aa8c-5a8e-482f-bdd4-793341d9612c.webp`

### Images/services/plumbing-fixture-repair-replacement-installation/ (6 files)

- `services\Plumbing Fixtures\Plumbing Fixture Installation & Repair  Professional Service  Red Carpet Plumbing Las Vegas.webp`
- `services\Plumbing Fixtures\shharris0117_Editorial-style_close-up_image_of_a_faucet_with_wa_6913427e-9004-4202-8e43-a01e7c47b96a.webp`
- `services\Plumbing Fixtures\shharris0117_Editorial-style_image_of_a_professional_plumber_in_240756b5-946e-4aba-bd5c-b8524a046a6a.webp`
- `services\Plumbing Fixtures\shharris0117_Editorial-style_image_of_a_professional_plumber_in_2eec825d-42a0-44f2-85b3-3b7b9376ab60.webp`
- `services\Plumbing Fixtures\shharris0117_Editorial-style_image_of_a_professional_plumber_in_9c33a9be-245e-4706-b586-8ce401581b49.webp`
- `services\Plumbing Fixtures\shharris0117_High-resolution_editorial-style_image_of_a_stylish_da714c6c-1948-48a5-a202-2be349a48659.webp`

### Images/services/re-piping/ (6 files)

- `services\re-piping-services.webp`
- `services\Re-Piping\shharris0117_Editorial-style_close-up_image_of_corroded_or_rust_3fe4d2bc-4140-4198-84c8-8f73d53a418b.webp`
- `services\Re-Piping\shharris0117_Editorial-style_image_of_a_professional_plumber_in_0f808841-74d5-47f7-bfcb-bf9e3048f7bd.webp`
- `services\Re-Piping\shharris0117_Editorial-style_image_of_a_professional_plumber_in_e889a115-5cb2-4f99-bda2-3a96904ae60e.webp`
- `services\Re-Piping\shharris0117_Editorial-style_image_of_clear_clean_water_flowing_bf6e7558-3dec-4046-91bf-fb84b070cd4d.webp`
- `services\Re-Piping\shharris0117_Editorial-style_image_showing_discolored_water_flo_1826a800-4745-426f-bb6a-1fccf69e2ef0.webp`

### Images/services/slab-leak-detection-repair/ (6 files)

- `services\Slab Leak\shharris0117_Editorial-style_close-up_image_of_advanced_leak_de_7b32d18f-500f-42aa-afe5-59dcfb3f9ba5.webp`
- `services\Slab Leak\shharris0117_Editorial-style_close-up_image_of_cracks_forming_i_8551c50a-cf54-466b-846b-d264bd63b74c.webp`
- `services\Slab Leak\shharris0117_Editorial-style_image_of_a_homes_foundation_with_v_50eeb815-b1ff-4d1a-bbc7-b5145529758e.webp`
- `services\Slab Leak\shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_f0b89ad6-3e51-4a8a-ae40-277619031906.webp`
- `services\Slab Leak\shharris0117_Editorial-style_image_of_a_professional_plumber_in_287ee338-c799-4a9c-a302-4168b5141139.webp`
- `services\Slab Leak\shharris0117_Editorial-style_image_of_a_professional_plumber_in_b5d5e82c-7041-46f7-a5f8-154469a7f21f.webp`

### Images/services/toilet-repair-installation/ (5 files)

- `services\Toilet Repair\shharris0117_Editorial-style_close-up_image_of_a_toilet_tank_wi_af4bb7b9-bc81-405f-8c28-fb73138d6c1c.webp`
- `services\Toilet Repair\shharris0117_Editorial-style_detailed_image_showcasing_various__775fcf64-50db-460e-b320-50872cfb2ce6.webp`
- `services\Toilet Repair\shharris0117_Editorial-style_image_of_a_professional_plumber_in_780476fb-1474-4f79-bbba-6e926be608b6.webp`
- `services\Toilet Repair\shharris0117_Editorial-style_image_of_a_professional_plumber_in_d2cd0e28-77ad-4241-acdd-0243ce0bb5fc.webp`
- `services\Toilet Repair\shharris0117_Editorial-style_image_of_a_stylish_modern_toilet_i_8b240458-6703-4bcd-a29c-e6d4cb8957f0.webp`

### Images/services/trenchless-piping/ (5 files)

- `services\Trenchless Piping\shharris0117_Editorial-style_action_shot_of_the_pipe_bursting_m_7d06f03d-2eb3-4fb9-9eab-ebdccad5fe1d.webp`
- `services\Trenchless Piping\shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_6ddd73b4-afde-4746-8abd-b4772600fc37.webp`
- `services\Trenchless Piping\shharris0117_Editorial-style_image_of_a_professional_plumber_in_0eb26fea-6e37-4e18-a6d6-78d5be7dfd59.webp`
- `services\Trenchless Piping\shharris0117_Editorial-style_image_of_a_satisfied_family_standi_ca8ed04c-0149-4edc-9185-4866e8d610fa.webp`
- `services\Trenchless Piping\shharris0117_Editorial-style_image_of_a_small_excavation_site_i_69bb8c5a-fdeb-4461-bf94-d452cbd1262f (1) (1).webp`

### Images/services/video-camera-plumbing-inspections/ (3 files)

- `services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_clear_view_inside_a_pip_295ebcea-d995-4e50-bcfb-58a724474d69.webp`
- `services\Video Camera Inspection\shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_50f0248d-770a-4df7-8ef4-d9c7f614f3b0.webp`
- `services\Video Camera Inspection\shharris0117_High-resolution_editorial-style_image_of_a_license_9f02cebf-186d-454d-b6bf-bd82b6fc18c3 (1).webp`

### Images/services/water-heater-repair-installation/ (6 files)

- `services\Water Heater Services\Expert Water Heater Installation  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\Water Heater Services\Leaky Water Heater Repair  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\Water Heater Services\Modern Water Heater Installation  Energy Efficient Plumbing  Red Carpet Plumbing Las Vegas_enhanced_enhanced.png`
- `services\Water Heater Services\Skilled Plumbers at Work  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp`
- `services\Water Heater Services\Types of Water Heaters  Installation Services  Red Carpet Plumbing Las Vegas, NV.webp`
- `services\Water Heater Services\Water Heater Repair Tools  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp`

### Images/services/water-meter-pressure-regulator-services/ (8 files)

- `services\Water Meter\shharris0117_Close-up_editorial-style_image_of_a_professional_p_692ed471-1d95-47b2-9a58-a6919894ac18.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_illustrating_the_water_hamme_47e267c1-b265-4e73-bea2-c2213a622c47.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_of_a_licensed_technician_fro_f969f25c-d3fb-4e2f-94e9-3111200778c2.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_of_a_professional_plumber_in_2e74496f-5888-46a4-abce-ca4c3e577e6d.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_of_a_technician_in_a_navy_bl_c15bd05c-1156-4516-a504-86c66ab3d4b0.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_of_a_technician_in_a_navy_bl_d8a714c1-ffac-44e6-a10f-600fc1766158.webp`
- `services\Water Meter\shharris0117_Editorial-style_image_showcasing_water_conservatio_333da796-8fee-41d1-8ca7-dab79b795ecd.webp`
- `services\Water Meter\shharris0117_High-resolution_editorial-style_image_of_a_license_d731b012-8b7e-4a35-8d75-75872bf78a40 (1) (1).webp`

### Images/services/water-pipe-repair-replacement/ (7 files)

- `services\Water Pipe\shharris0117_Editorial-style_close-up_image_of_high-quality_pip_f90a1471-a919-493b-b182-8a8d8e81d0e3.webp`
- `services\Water Pipe\shharris0117_Editorial-style_close-up_image_of_water_damage_vis_fe3d275b-4270-44cf-9b36-d0774728d6ee.webp`
- `services\Water Pipe\shharris0117_Editorial-style_high-resolution_image_of_a_profess_10a3ec07-eabb-4093-b5f6-e012e40e5f3b (1) (1).webp`
- `services\Water Pipe\shharris0117_Editorial-style_image_of_a_professional_plumber_in_915cb2b4-4751-4c7e-97c0-c0e526f10721.webp`
- `services\Water Pipe\shharris0117_Editorial-style_image_of_a_professional_technician_6a30a0a8-b9b8-4f7f-8776-b45c65f74680.webp`
- `services\Water Pipe\shharris0117_Editorial-style_image_showing_a_side-by-side_compa_3a2a19d4-4f08-41ab-87cf-756a4b41fdc6.webp`
- `services\Water Pipe\shharris0117_Editorial-style_image_showing_the_installation_of__3cf64585-f739-4cee-b247-bf62556055f4.webp`

## Risks & Manual Review Notes

1. **Filename collisions on merge.** Merging `Images/emergency plumbing/` into `Images/services/emergency-plumbing/` may produce duplicate-name conflicts because both folders contain `shharris0117_*` files. Resolution: hash-check before move; identical-hash files become duplicates-review candidates, different-hash files with same name need rename.
2. **Water Leak and Clog → leak-detection-repair is a judgment call.** Files may actually depict drain clogs (drain-cleaning) rather than leaks. Recommend per-file visual review after moves.
3. **'Pixelcut export' hero filenames** give no scope hint. All 19 `pixelcut-export (NN).webp` files default to `hero/homepage/`. If any are meant for service or location heroes, reassign during manual review.
4. **Generic aerial location shots** (`shharris0117_Editorial-style_aerial_*`) default to `locations/las-vegas/` because the filenames lack a city keyword. If they depict Henderson, Summerlin, Aliante, etc., reassign during manual review.
5. **No favicon image in Images/.** `brand/favicon/` was pre-created empty. The scaffold's `app/favicon.ico` is the current site favicon. Create source PNGs/SVGs in `brand/favicon/` only when a higher-res brand favicon set is prepared.
6. **No social-channel images mapped.** `social/google-business-profile/`, `social/instagram/`, and `social/notebooklm/` are pre-created empty. The .docx scripts that match those channel names live in `docs/site-os/inputs/`, not in Images/.
7. **No source images for sewer-line-services, commercial-plumbing,** or several other approved-list services. Expected content-sourcing gap; not a blocker for the reorganization.
8. **`Images/` remains gitignored.** This plan does not promote anything to `public/images/`; that decision and any commit happens later.
9. **Hash duplicates still present.** 19 duplicates between organized subfolders are flagged for `duplicates-review/` rather than auto-deleted.

## Approval Gate

This is dry-run v2. **No files were moved, renamed, or deleted.** No commits made. The only filesystem change since v1 was the pre-creation of 7 empty target folders (per override 7).

To execute: `Approve image organization plan`.
