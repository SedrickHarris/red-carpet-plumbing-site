# Public Image Selection Audit

**Generated:** 2026-05-25
**Source:** Organized `Images/` tree (176 files, post v2 migration)
**Mode:** AUDIT ONLY (no files moved, copied, deleted, or committed)
**Sidecar inventory:** `docs/site-os/qa/_img-inventory.txt`

This audit recommends a curated subset of images for eventual copy into `public/images/` for the initial Next.js build. Nothing is acted on. Approve specific files before the copy operation runs.

## Selection Rules Applied

- **No copying performed.** Source files remain in `Images/`.
- **No `Images/duplicates-review/` files recommended.** Every item flagged there is a SHA256 twin of a file already kept in an organized service folder. Recommending the kept copy in every case.
- **WebP preferred** over PNG/JPG when both exist.
- Used the most descriptively-named file in each folder as the primary card/hero choice (file name maps cleanly to the depicted scene).
- File size used as a quality proxy when names are ambiguous (larger usually means higher source resolution).
- **All alt text drafted is em-dash free, double-hyphen free, and plain-language descriptive** per project rules.

## Recommended `public/images/` Folder Structure

```
public/images/
├── brand/
│   ├── logo/
│   └── favicon/
├── hero/
│   ├── homepage/
│   └── locations/
├── services/
│   ├── emergency-plumbing/
│   ├── drain-cleaning/
│   ├── leak-detection-repair/
│   ├── water-heater-repair-installation/
│   ├── slab-leak-detection-repair/
│   ├── sewer-line-services/                (no source images yet)
│   ├── re-piping/
│   ├── water-pipe-repair-replacement/
│   ├── gas-line-plumbing/
│   ├── commercial-plumbing/                (no source images yet)
│   ├── toilet-repair-installation/
│   ├── faucet-sink-repair-installation/
│   ├── garbage-disposal-repair-installation/
│   ├── backflow-prevention/
│   ├── video-camera-plumbing-inspections/
│   ├── water-meter-pressure-regulator-services/
│   ├── trenchless-piping/
│   └── plumbing-fixture-repair-replacement-installation/
├── locations/
│   ├── las-vegas/
│   ├── henderson/
│   ├── north-las-vegas/                    (no source images yet)
│   ├── paradise/                            (no source images yet)
│   ├── summerlin/
│   ├── spring-valley/
│   ├── enterprise/                          (no source images yet)
│   ├── boulder-city/                        (no source images yet)
│   ├── green-valley/                        (no source images yet)
│   └── lake-las-vegas/                      (no source images yet)
├── company/
│   ├── vehicles/
│   ├── team/                                (no source images yet)
│   ├── equipment/                           (no source images yet)
│   └── job-sites/                           (no source images yet)
├── blog/
└── social/                                  (no source images yet)
```

## Headline Counts

| Group | Recommended for `public/images/` |
|---|---:|
| Brand (logo + favicon) | 2 (1 + 0; favicon is a gap) |
| Homepage hero | 3 |
| Homepage service cards | 6 |
| Core service page heroes | 16 |
| Core service page supporting images | up to 32 (2 per service, optional) |
| Tier 1 location hub heroes | 4 (Las Vegas, Henderson, Summerlin, Spring Valley) |
| Blog placeholders | 7 |
| Company / trust section | 2 vehicle photos |
| Emergency CTA section | 2 |
| **Recommended minimum (required + recommended)** | **42** |
| **With optional supporting images** | **74** |

---

## 1. Homepage Hero

Pick one primary; the others as alternates for A/B testing or rotating hero.

| Source | Recommended public path | Usage | Alt text | Priority | Optimization notes | Visual review notes |
|---|---|---|---|---|---|---|
| `Images/hero/homepage/pixelcut-export (41).webp` | `public/images/hero/homepage/hero-primary.webp` | Homepage hero, two-column layout, left column | Red Carpet Plumbing plumber at work in a Las Vegas home | Required | Already WebP, 289 KB. Generate `srcSet` at 1920 / 1280 / 768. Lazy-load below-fold variants only. | Verify the scene reads at small sizes; verify face/figure positioning works behind a right-column form. |
| `Images/hero/homepage/pixelcut-export (49).webp` | `public/images/hero/homepage/hero-alt-1.webp` | Hero rotation / secondary landing variant | Las Vegas plumber inspecting plumbing fixtures | Recommended | 274 KB WebP. Same srcSet treatment. | Confirm scene matches brand tone (professional, not staged). |
| `Images/hero/homepage/pixelcut-export (35).webp` | `public/images/hero/homepage/hero-alt-2.webp` | Hero rotation / mobile hero crop | Red Carpet Plumbing technician with tools on a service call | Optional | 139 KB WebP. Mobile-first crop may be needed (taller framing). | Hold for A/B testing only. |

**Note on the `plumber-hero-1.jpg` through `plumber-hero-5.webp` set:** these range from 17 to 77 KB and likely sit at thumbnail resolution, not hero resolution. Do not promote unless visual review confirms otherwise.

## 2. Homepage Service Cards

Six service cards is the suggested home grid. Pick one image per featured service.

| Source | Recommended public path | Usage | Alt text | Priority | Optimization notes | Visual review notes |
|---|---|---|---|---|---|---|
| `Images/services/emergency-plumbing/24-7-emergency-plumbing.webp` | `public/images/services/emergency-plumbing/card.webp` | Homepage service card: Emergency Plumbing | Twenty four hour emergency plumbing service in Las Vegas | Required | 294 KB. Resize to ~800 px wide for card use. | Confirm the scene reads as urgent without being alarmist. |
| `Images/services/drain-cleaning/Hydro Jetting in Action  Tough Drain Clog Removal  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/drain-cleaning/card.webp` | Homepage service card: Drain Cleaning | Hydro jetting equipment clearing a tough drain clog | Required | 336 KB. Resize to ~800 px wide. | Verify equipment is clearly visible at card size. |
| `Images/services/water-heater-repair-installation/Modern Water Heater Installation  Energy Efficient Plumbing  Red Carpet Plumbing Las Vegas_enhanced_enhanced.png` | `public/images/services/water-heater-repair-installation/card.webp` | Homepage service card: Water Heater Repair and Installation | Modern energy efficient water heater installation | Required | 511 KB PNG. **Convert to WebP** before publishing to drop ~70%. | Source is PNG, not WebP. Worth re-encoding. |
| `Images/services/leak-detection-repair/shharris0117_Editorial-style_image_showcasing_advanced_leak_det_7534aa8c-5a8e-482f-bdd4-793341d9612c.webp` | `public/images/services/leak-detection-repair/card.webp` | Homepage service card: Leak Detection and Repair | Advanced leak detection equipment in use at a Las Vegas home | Required | 14 KB. Verify source resolution is adequate (small file size suggests low-res). | If pixelated at card size, swap for another from the same folder. |
| `Images/services/slab-leak-detection-repair/shharris0117_Editorial-style_image_of_a_homes_foundation_with_v_50eeb815-b1ff-4d1a-bbc7-b5145529758e.webp` | `public/images/services/slab-leak-detection-repair/card.webp` | Homepage service card: Slab Leak Detection and Repair | Home foundation showing signs of a slab leak | Required | 90 KB. Confirm scene communicates "foundation" not "construction site". | Visual review required. |
| `Images/services/water-pipe-repair-replacement/shharris0117_Editorial-style_image_showing_a_side-by-side_compa_3a2a19d4-4f08-41ab-87cf-756a4b41fdc6.webp` | `public/images/services/water-pipe-repair-replacement/card.webp` | Homepage service card: Water Pipe Repair and Replacement | Side by side comparison of old and new water pipes | Recommended | 35 KB. Verify side-by-side framing works at card size. | Pick a different file from the same folder if not clear at small sizes. |

## 3. Core Service Page Heroes

One primary image per service page (16 services with source images; 2 service slugs have no source).

| Service | Source | Recommended public path | Alt text | Priority |
|---|---|---|---|---|
| Emergency Plumbing | `Images/services/emergency-plumbing/Expert Plumbing Diagnosis & Emergency Inspection  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/emergency-plumbing/hero.webp` | Red Carpet Plumbing technician performing an emergency plumbing diagnosis in Las Vegas | Required |
| Drain Cleaning | `Images/services/drain-cleaning/Comprehensive Drain Cleaning Methods  Snaking, Hydro Jetting, Enzymatic  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/drain-cleaning/hero.webp` | Drain cleaning methods including snaking, hydro jetting, and enzymatic treatment | Required |
| Leak Detection and Repair | `Images/services/leak-detection-repair/shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_b936e585-8508-4548-925d-086a98066ed9 (1) (1).webp` | `public/images/services/leak-detection-repair/hero.webp` | Licensed plumber locating a hidden water leak in a Las Vegas home | Required |
| Water Heater Repair and Installation | `Images/services/water-heater-repair-installation/Expert Water Heater Installation  Red Carpet Plumbing Las Vegas, NV.webp` | `public/images/services/water-heater-repair-installation/hero.webp` | Expert water heater installation in a Las Vegas home | Required |
| Slab Leak Detection and Repair | `Images/services/slab-leak-detection-repair/shharris0117_Editorial-style_close-up_image_of_advanced_leak_de_7b32d18f-500f-42aa-afe5-59dcfb3f9ba5.webp` | `public/images/services/slab-leak-detection-repair/hero.webp` | Close up of advanced slab leak detection equipment | Required |
| Sewer Line Services | (no source) | (none) | n/a | **GAP** |
| Re-Piping | `Images/services/re-piping/re-piping-services.webp` | `public/images/services/re-piping/hero.webp` | Whole home re-piping service in Las Vegas | Required |
| Water Pipe Repair and Replacement | `Images/services/water-pipe-repair-replacement/shharris0117_Editorial-style_high-resolution_image_of_a_profess_10a3ec07-eabb-4093-b5f6-e012e40e5f3b (1) (1).webp` | `public/images/services/water-pipe-repair-replacement/hero.webp` | Professional water pipe repair work in progress | Required |
| Gas Line Plumbing | `Images/services/gas-line-plumbing/Professional Gas Line Installation in Progress  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/gas-line-plumbing/hero.webp` | Professional gas line installation in progress in Las Vegas | Required |
| Commercial Plumbing | (no source) | (none) | n/a | **GAP** |
| Toilet Repair and Installation | `Images/services/toilet-repair-installation/shharris0117_Editorial-style_image_of_a_stylish_modern_toilet_i_8b240458-6703-4bcd-a29c-e6d4cb8957f0.webp` | `public/images/services/toilet-repair-installation/hero.webp` | Stylish modern toilet installation in a Las Vegas bathroom | Required |
| Faucet and Sink Repair and Installation | `Images/services/faucet-sink-repair-installation/faucet-sink-repair-replacement-installation.webp` | `public/images/services/faucet-sink-repair-installation/hero.webp` | Faucet and sink repair, replacement, and installation services | Required |
| Garbage Disposal Repair and Installation | `Images/services/garbage-disposal-repair-installation/Modern Garbage Disposal Installation  Aesthetic & Functional  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/garbage-disposal-repair-installation/hero.webp` | Modern garbage disposal installation in a Las Vegas kitchen | Required |
| Backflow Prevention | `Images/services/backflow-prevention/Backflow Prevention Device Installation  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/backflow-prevention/hero.webp` | Professional backflow prevention device installation | Required |
| Video Camera Plumbing Inspections | `Images/services/video-camera-plumbing-inspections/shharris0117_High-resolution_editorial-style_image_of_a_license_9f02cebf-186d-454d-b6bf-bd82b6fc18c3 (1).webp` | `public/images/services/video-camera-plumbing-inspections/hero.webp` | Licensed plumber performing a video camera pipe inspection | Required |
| Water Meter and Pressure Regulator Services | `Images/services/water-meter-pressure-regulator-services/shharris0117_High-resolution_editorial-style_image_of_a_license_d731b012-8b7e-4a35-8d75-75872bf78a40 (1) (1).webp` | `public/images/services/water-meter-pressure-regulator-services/hero.webp` | Licensed technician servicing a water meter and pressure regulator | Required |
| Trenchless Piping Services | `Images/services/trenchless-piping/shharris0117_Editorial-style_image_of_a_small_excavation_site_i_69bb8c5a-fdeb-4461-bf94-d452cbd1262f (1) (1).webp` | `public/images/services/trenchless-piping/hero.webp` | Small excavation site for trenchless piping service in Las Vegas | Required |
| Plumbing Fixture Repair, Replacement and Installation | `Images/services/plumbing-fixture-repair-replacement-installation/Plumbing Fixture Installation & Repair  Professional Service  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/plumbing-fixture-repair-replacement-installation/hero.webp` | Professional plumbing fixture installation and repair | Required |

### Optional Supporting Images Per Service Page

Each service folder has 3 to 8 images. For service pages that use a "what we do / process / before-after" layout, consider promoting 1 to 2 additional images per service folder as supporting visuals. Tag these as **Optional** for the initial build. Specific picks to be selected at template-implementation time once the service-page layout is finalized; the strongest secondary candidates by folder are:

- `backflow-prevention`: "Backflow Preventer Installation..." + "Different Types of Backflow Preventers..."
- `drain-cleaning`: "Professional Drain Cleaning Tools..." + "Spotless Drains After Professional Cleaning..."
- `emergency-plumbing`: any one of the "burst pipe" close-ups (use sparingly to avoid alarmist tone)
- `garbage-disposal-repair-installation`: "Licensed Plumber Installing Garbage Disposal..."
- `gas-line-plumbing`: "Safe Gas Line Installation with Safety Gear..."
- `slab-leak-detection-repair`: "Editorial close-up image of cracks forming..."
- `water-heater-repair-installation`: "Types of Water Heaters..." for an inline diagram-ish slot
- `re-piping`: "Editorial close-up image of corroded or rusted..." for a problem-state visual

## 4. Tier 1 Location Hub Pages

| Location | Source | Recommended public path | Alt text | Priority |
|---|---|---|---|---|
| Las Vegas | `Images/locations/las-vegas/View_of_Las_Vegas'_strip_from_the_helicopter.jpg` | `public/images/locations/las-vegas/hero.webp` | View of the Las Vegas Strip from above | Required (**convert JPG to WebP**) |
| Las Vegas (alt) | `Images/hero/locations/las-vegas-night-skyline-hero.webp` | `public/images/locations/las-vegas/hero-night.webp` | Las Vegas skyline at night | Recommended |
| Henderson | `Images/locations/henderson/Henderson,_NV_-_District1.jpg` | `public/images/locations/henderson/hero.webp` | Henderson, Nevada residential district | Required (**convert JPG to WebP**) |
| Summerlin | `Images/locations/summerlin/SummerlinEntrance.jpg` | `public/images/locations/summerlin/hero.webp` | Summerlin community entrance in Las Vegas | Required (**convert JPG to WebP**) |
| Summerlin (alt) | `Images/locations/summerlin/The_Ridges_in_Summerlin.jpg` | `public/images/locations/summerlin/hero-alt.webp` | The Ridges neighborhood in Summerlin | Optional |
| Spring Valley | `Images/locations/spring-valley/Las_Vegas_Spring_Valley_1.jpg` | `public/images/locations/spring-valley/hero.webp` | Spring Valley neighborhood near Las Vegas | Required (**convert JPG to WebP**) |

**Las Vegas supporting / inset images** (for service-area sections inside the Las Vegas hub):
- `Images/locations/las-vegas/LasVegasBeautifulMontage.jpg` (1.1 MB — **resize and convert**; high-quality source)
- `Images/locations/las-vegas/shharris0117_Editorial-style_image_featuring_the_iconic_Welcome_e8c14efd-06d0-47a2-ae0a-becec30af95a.webp` (Welcome to Las Vegas sign — useful for "About Las Vegas" inline)
- The four `shharris0117_Editorial-style_aerial_*` files — generic aerials; visual review required to confirm any are actually Las Vegas vs. another Valley city.

## 5. Blog Placeholders

The 7 blog images are generic editorial plumbing scenes. Use them as featured-image placeholders until real article photos are produced. All are WebP at 17-53 KB so optimization is already adequate.

| Source | Recommended public path | Suggested alt text | Priority | Notes |
|---|---|---|---|---|
| `Images/blog/shharris0117_An_editorial-style_high-resolution_photograph_feat_fe2215c8-3251-4746-95ae-be42e0b758d2.webp` | `public/images/blog/placeholder-01.webp` | Editorial photo of a plumbing scene | Recommended | Generic; assign to first published post. |
| `Images/blog/shharris0117_An_editorial-style_high-resolution_photograph_of_a_af7c4a13-b449-4e02-a97f-9a8367bdee4f.webp` | `public/images/blog/placeholder-02.webp` | Editorial photo of a plumbing scene | Recommended | |
| `Images/blog/shharris0117_An_editorial-style_high-resolution_photograph_of_a_c2ea8aa6-5c75-4bfe-9d44-91921860acd4.webp` | `public/images/blog/placeholder-03.webp` | Editorial photo of a plumbing scene | Recommended | |
| `Images/blog/shharris0117_An_editorial-style_image_depicting_safety_precauti_cfb6755a-a951-4214-b3ab-32f64ad06a6d.webp` | `public/images/blog/placeholder-04-safety.webp` | Plumbing safety precautions in a residential setting | Recommended | Filename suggests "safety" theme; reserve for safety articles. |
| `Images/blog/shharris0117_An_editorial-style_photograph_featuring_common_non_c199ceac-ea91-4a96-9aa8-1c1aa25d4f70.webp` | `public/images/blog/placeholder-05.webp` | Editorial photo of common household plumbing | Recommended | Filename suggests "common non[?]"; visual review for topic alignment. |
| `Images/blog/shharris0117_An_editorial-style_photograph_of_a_professional_pl_6e2b0e1c-33a7-4acf-9fc2-415ec72a6f16.webp` | `public/images/blog/placeholder-06-pro.webp` | Professional plumber at work | Recommended | Generic professional shot; good for "who we are" style posts. |
| `Images/blog/shharris0117_An_editorial-style_photograph_showcasing_a_sleek_m_c0d85408-40e6-4d54-86a3-593cd570c930.webp` | `public/images/blog/placeholder-07-modern.webp` | Sleek modern bathroom fixtures | Optional | Filename suggests modern fixtures; reserve for fixtures-themed articles. |

## 6. Brand Logo and Favicon Assets

| Source | Recommended public path | Usage | Alt text | Priority | Notes |
|---|---|---|---|---|---|
| `Images/brand/logo/Red Carpet Plumbing  Transparent Logo  Las Vegas Plumbing Experts  Trenchless Piping & Leak Detection.png` | `public/images/brand/logo/red-carpet-plumbing-logo.png` | Site header, footer, structured-data `logo` field | Red Carpet Plumbing logo | Required | 641 KB. **Resize to header dimensions (~240×80) before publishing.** Optionally produce SVG version if vector source becomes available. |
| `Images/brand/logo/Red Carpet Plumbing logo-trimmed.png` | `public/images/brand/logo/red-carpet-plumbing-logo-trimmed.png` | Email signatures, social previews, alternate trimmed contexts | Red Carpet Plumbing logo | Recommended | 121 KB. Trimmed bounds; useful for tight layouts. |
| `Images/brand/logo/Logo.png` | (do not copy) | Source-only archive copy | n/a | **Source only** | Older / lower-quality variant. Keep in `Images/` as archival; do not promote. |
| **Favicon set** | (none) | `public/favicon.ico` and PWA icons | n/a | **GAP — Required** | `Images/brand/favicon/` is empty. Generate a multi-size favicon set (16, 32, 48, 180, 192, 512) from the brand mark before launch. The existing `app/favicon.ico` from the Next scaffold is the current placeholder. |

## 7. Company / Trust Section

| Source | Recommended public path | Usage | Alt text | Priority | Notes |
|---|---|---|---|---|---|
| `Images/company/vehicles/pixelcut-export.webp` | `public/images/company/vehicles/branded-vehicle.webp` | About page, trust strip, footer accent | Red Carpet Plumbing service vehicle in Las Vegas | Required | 195 KB WebP. Likely the cleanest of the four (others are larger JPGs). |
| `Images/company/vehicles/277677637_379577077509730_8812256990604806774_n.jpg` | `public/images/company/vehicles/vehicle-on-site.webp` | About page secondary image | Red Carpet Plumbing vehicle on a service call | Optional | 231 KB JPG. **Convert to WebP.** Visual review required (filename is a Facebook upload ID, content unverified). |
| `Images/company/vehicles/12901284_*.jpg` and `12901393_*.jpg` | (do not copy) | Source-only archive | n/a | Source only | Older Facebook-source uploads. Hold until visual review confirms quality and ownership/usage rights. |

**Team, equipment, and job-sites folders are empty.** See gap list below.

## 8. Emergency CTA Section

The Emergency CTA strip is a high-conversion element. Image choice should communicate urgency without being alarmist.

| Source | Recommended public path | Usage | Alt text | Priority | Notes |
|---|---|---|---|---|---|
| `Images/services/emergency-plumbing/24-7-emergency-plumbing.webp` | `public/images/services/emergency-plumbing/cta-banner.webp` | Emergency CTA strip on Home, Service pages, and Location pages | Twenty four hour emergency plumbing service in Las Vegas | Required | Same source as Section 2's service card; in Section 8 use a different crop/component context, not a duplicate file copy. |
| `Images/services/emergency-plumbing/On-Site Plumbing Assessment  Professional Problem-Solving  Red Carpet Plumbing Las Vegas.webp` | `public/images/services/emergency-plumbing/cta-banner-alt.webp` | Alt emergency strip (variant) | Red Carpet Plumbing technician arriving on site for an emergency call | Recommended | Reads more "we are here to help" than "you are in crisis"; better fit for upper-funnel CTAs. |

## Gap Analysis

### Services with no source images (required for build)

- **Sewer Line Services** — 0 images. Required for the `sewer-line-services` page on the build list. Source new photos or licensed stock.
- **Commercial Plumbing** — 0 images. Required for the `commercial-plumbing` page. Source new photos depicting commercial sites (restaurants, offices, multi-tenant buildings).

### Services with limited image options (visual review recommended)

- **Leak Detection and Repair** — 5 images, all of which may actually depict drain clog scenes per the v2 audit's manual-review note. Visual review required before any are promoted; some may belong in `drain-cleaning/` instead.
- **Video Camera Plumbing Inspections** — only 3 images. Service page hero is covered, but supporting images are thin.
- **Faucet and Sink Repair and Installation** — 6 images, but several files are 16-30 KB (low resolution risk).
- **Water Heater Repair and Installation** — 6 images, but most are 10-30 KB. Visual review for resolution adequacy.

### Locations with no source images (required for full build)

All Tier 1 hub pages from the project context that have **zero** source images:

- North Las Vegas
- Paradise
- Enterprise
- Boulder City
- Green Valley
- Lake Las Vegas
- North Las Vegas Aliante Area

For each, source either a recognizable landmark photo or a generic neighborhood/streetscape shot. Until then, location pages can launch with the Las Vegas Strip aerial as a fallback or a stylized map illustration.

### Company / brand gaps

- `Images/company/team/` — empty. Team photos strengthen the "local family-owned" claim. Source on-site staff photos before launch if approved.
- `Images/company/equipment/` — empty. Useful for service page "what we use" sections; not blocking.
- `Images/company/job-sites/` — empty. Useful for case-study-style content; not blocking.
- `Images/brand/favicon/` — empty. **Required for launch.** Generate a multi-size favicon set from the brand mark.
- `Images/social/google-business-profile/`, `instagram/`, `notebooklm/` — all empty. Not required for the website build, but flagged for the social ops track.

## Images Needing Visual Review Before Use

1. **Five files in `services/leak-detection-repair/`** — may depict drain clogs rather than leaks per the v2 audit note. Reassign to `services/drain-cleaning/` if visual review confirms.
2. **Four `shharris0117_Editorial-style_aerial_*` files in `locations/las-vegas/`** — generic aerials may depict Henderson, Summerlin, Aliante, etc., not Las Vegas proper. Visual review before promoting any to a city-specific location hub.
3. **`hero/homepage/pixelcut-export (NN).webp` series (19 files)** — filenames give no scene hint. Manual triage required before final hero picks lock in.
4. **The `plumber-hero-1` through `plumber-hero-5` set** — small file sizes (16-77 KB) suggest these may be thumbnail-sized. Confirm pixel dimensions before relying on any as a hero.
5. **`company/vehicles/277677637_*.jpg` and the two `12901*.jpg` files** — Facebook-upload filenames; visual review required to confirm scene quality and that they show a branded Red Carpet vehicle.
6. **All large JPGs flagged for WebP conversion** above. Side-by-side compare original JPG vs. re-encoded WebP at 80 quality before locking the build.

## Images That Should Stay in Raw `Images/` Only

Do not promote these to `public/images/` at all:

- Everything in `Images/duplicates-review/` (19 files). Every one of them is a SHA256 twin of a kept copy that is already covered in the recommendations above. Keep them in `duplicates-review/` for archival until you decide whether to delete them outright. None are listed in any recommendation in this audit.
- `Images/brand/logo/Logo.png` — older logo variant; the trimmed and transparent versions supersede it.
- The three Facebook-uploaded vehicle JPGs unless visual review approves them.
- `Images/brand/social/Red Carpet Plumbing Discount.jpg` — promotional asset, not part of the website build; reserve for social channels.

## Duplicate-Review Images to Ignore for `public/`

Confirmed: none of the 19 files in `Images/duplicates-review/` are recommended for `public/images/`. Every service card and service hero recommendation in Sections 2 and 3 uses the **kept** copy (the file the v2 audit retained in the organized subfolder), not the duplicate twin in `duplicates-review/`.

## Constraint Compliance

| Constraint | Result |
|---|---|
| No files moved | Confirmed |
| No files copied | Confirmed |
| No files deleted | Confirmed |
| Nothing committed | Confirmed |
| Source files remain in `Images/` | Confirmed |
| `public/images/` not created | Confirmed (does not exist) |

## Next Step

When ready, approve a subset (start with the **Required** rows: 42 files) and run a copy operation that:

1. Creates the `public/images/` tree shown above.
2. Copies the source from `Images/...` to the recommended public path.
3. Converts JPG/PNG sources marked for conversion into WebP at quality 80, with original retained in `Images/` as the master.
4. Generates resized variants per the optimization notes (hero `srcSet`, card thumbnails, etc.).
5. Updates `app/` page components to reference the new public paths.

Until then, this report is documentation only.
