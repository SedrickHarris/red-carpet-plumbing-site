# North Las Vegas Cluster Trust Items Audit

Report only. No page, component, copy, schema, or metadata was changed to produce this report.

Method: source scan of every app/north-las-vegas/**/page.tsx for the trustItems prop on HeroSection, cross-checked against the prerendered out/ HTML (the hero trust list is a ul with the classes "mt-8 flex flex-col gap-3"). Route list taken from docs/seo/route-manifest.json. Build state: out/ was produced by the build that followed commit 4ac8c84.

## 1. Routes and page files

- Routes under /north-las-vegas/ in the route manifest: 17
- app/north-las-vegas/**/page.tsx files: 17
- The two lists match one to one.
- Related hub outside that prefix: /north-las-vegas-plumbing-services/ (not counted above). It passes trustItems through its TRUST_STRIP_ITEMS constant (4 items, listed in section 6).

## 2. Per page status

### /north-las-vegas/aliante-area-plumbing/

- Source: app/north-las-vegas/aliante-area-plumbing/page.tsx
- trustItems: yes (const TRUST_STRIP_ITEMS)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - 4.8 stars, 81 Google reviews
  - NV Licensed #048585A
  - Over 40 years serving Las Vegas Valley
  - Transparent pricing, no hidden fees

### /north-las-vegas/aliante-area/drain-cleaning/

- Source: app/north-las-vegas/aliante-area/drain-cleaning/page.tsx
- trustItems: yes (const HERO_TRUST_ITEMS)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Kitchen, Bathroom, and Main Line Drain Cleaning
  - Serving Aliante and North Las Vegas
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/aliante-area/emergency-plumbing/

- Source: app/north-las-vegas/aliante-area/emergency-plumbing/page.tsx
- trustItems: yes (const ALIANTE_EMERGENCY_TRUST)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Emergency Plumbing Service Available
  - Serving Aliante and North Las Vegas
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/aliante-area/leak-detection-repair/

- Source: app/north-las-vegas/aliante-area/leak-detection-repair/page.tsx
- trustItems: yes (const ALIANTE_LEAK_TRUST)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - Non-Invasive Detection
  - NV Licensed, #048585A
  - Serving Aliante and North Las Vegas
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/aliante-area/slab-leak-detection-repair/

- Source: app/north-las-vegas/aliante-area/slab-leak-detection-repair/page.tsx
- trustItems: yes (const ALIANTE_SLAB_TRUST)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - Non-Invasive Detection
  - NV Licensed, #048585A
  - All Repair Options Explained
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/aliante-area/water-heater-repair-installation/

- Source: app/north-las-vegas/aliante-area/water-heater-repair-installation/page.tsx
- trustItems: yes (const HERO_TRUST_ITEMS)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Tank and Tankless Water Heaters
  - Seismic Bracing and Expansion Tanks
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/commercial-plumbing/

- Source: app/north-las-vegas/commercial-plumbing/page.tsx
- trustItems: NO (HeroSection without trustItems)
- Rendered hero list in out/ HTML: no, as expected

### /north-las-vegas/drain-cleaning/

- Source: app/north-las-vegas/drain-cleaning/page.tsx
- trustItems: yes (inline)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Available for Emergency Drain Service
  - Serving North Las Vegas and the Las Vegas Valley
  - Transparent Pricing, No Hidden Fees
  - Drain Cleaning and Hydro Jetting
  - Residential and Commercial

### /north-las-vegas/emergency-plumbing/

- Source: app/north-las-vegas/emergency-plumbing/page.tsx
- trustItems: yes (inline)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Emergency Plumbing Service Available
  - Serving North Las Vegas and the Las Vegas Valley
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/garbage-disposal-repair-installation/

- Source: app/north-las-vegas/garbage-disposal-repair-installation/page.tsx
- trustItems: NO (HeroSection without trustItems)
- Rendered hero list in out/ HTML: no, as expected

### /north-las-vegas/leak-detection-repair/

- Source: app/north-las-vegas/leak-detection-repair/page.tsx
- trustItems: yes (const HERO_TRUST_ITEMS)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - 4.8 stars, 81 Google reviews
  - NV Licensed #048585A
  - Over 40 years serving the Las Vegas Valley
  - Transparent pricing, no hidden fees
  - Non-Invasive Detection
  - 24/7 Emergency Service
  - Residential and Commercial

### /north-las-vegas/repiping/

- Source: app/north-las-vegas/repiping/page.tsx
- trustItems: NO (HeroSection without trustItems)
- Rendered hero list in out/ HTML: no, as expected

### /north-las-vegas/sewer-line-services/

- Source: app/north-las-vegas/sewer-line-services/page.tsx
- trustItems: yes (const HERO_TRUST_ITEMS)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed, #048585A
  - Sewer Camera Inspection Available
  - Residential and Commercial Sewer Service
  - Transparent Pricing, No Hidden Fees
  - 4.8 stars, 81 Google reviews

### /north-las-vegas/slab-leak-detection-repair/

- Source: app/north-las-vegas/slab-leak-detection-repair/page.tsx
- trustItems: yes (const NLV_SLAB_TRUST)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - Nevada Contractor License #048585A
  - Non-Invasive Slab Leak Detection
  - All Repair Options Explained
  - Serving North Las Vegas and the Las Vegas Valley

### /north-las-vegas/toilet-repair-installation/

- Source: app/north-las-vegas/toilet-repair-installation/page.tsx
- trustItems: NO (HeroSection without trustItems)
- Rendered hero list in out/ HTML: no, as expected

### /north-las-vegas/water-heater-repair-installation/

- Source: app/north-las-vegas/water-heater-repair-installation/page.tsx
- trustItems: yes (inline)
- Rendered hero list in out/ HTML: yes
- Items, verbatim:
  - NV Licensed Plumbers, #048585A
  - Emergency Water Heater Service Available
  - Serving North Las Vegas and the Las Vegas Valley
  - Transparent Pricing, No Hidden Fees
  - Installed to Clark County Code
  - Residential and Commercial

### /north-las-vegas/water-pipe-repair-replacement/

- Source: app/north-las-vegas/water-pipe-repair-replacement/page.tsx
- trustItems: NO (HeroSection without trustItems)
- Rendered hero list in out/ HTML: no, as expected

## 3. Summary

- Pages passing trustItems: 12 of 17
- Pages without trustItems (5):
  - /north-las-vegas/commercial-plumbing/
  - /north-las-vegas/garbage-disposal-repair-installation/
  - /north-las-vegas/repiping/
  - /north-las-vegas/toilet-repair-installation/
  - /north-las-vegas/water-pipe-repair-replacement/

## 4. The /north-las-vegas/repiping/ comment

Comment in app/north-las-vegas/repiping/page.tsx, lines 23 to 26: the hero deliberately omits trustItems, matching the sibling NLV pages, rather than the core /repiping/ page, whose trustItems restate review-count and years-in-business claims that are not part of this build's approved content.

Findings:
- The claim "matching the sibling NLV pages" is not accurate today. 12 of the 17 North Las Vegas pages pass trustItems, including drain cleaning, leak detection, emergency plumbing, slab leak, water heater, and sewer line services. Only 5 pages share the gap: commercial-plumbing, garbage-disposal-repair-installation, repiping, toilet-repair-installation, water-pipe-repair-replacement.
- It was also only partly accurate when written. The comment arrived with the page in commit edc788e (2026-08-30). At that commit drain cleaning, leak detection, and emergency plumbing already passed trustItems; sewer line services did not (it gained trustItems in commit 4ac8c84 on 2026-10-13).
- Every other-city repiping page passes trustItems (Enterprise, Green Valley, Henderson, Las Vegas, Spring Valley, Summerlin, plus the core pages). The NLV repiping page is the only repiping page without one.
- The stated reason (review count and years in business are "not part of this build's approved content") is stale. The sewer line services page in this cluster now carries "4.8 stars, 81 Google reviews" with owner confirmation, and the leak detection page already carries the rating and the "Over 40 years" item.
- The comment is a source comment only. Nothing visible depends on it.

## 5. Gaps in other city clusters

HeroSection used without trustItems, outside the NLV cluster (source scan of every app/**/page.tsx):
- /contact/
- /service-areas/

Both are the known, intentionally excluded pages (/contact/ and /service-areas/). The gap is therefore isolated to the North Las Vegas cluster: no other city cluster has a service page with a bare hero.

## 6. Reusable sibling arrays for each NLV gap (suggestions only, nothing applied)

Location-specific items are excluded from every suggestion: any "Serving ..." line naming a city or community, and any item tied to another service. Items shown in full are the verbatim shared strings in the sibling pages.

### /north-las-vegas/commercial-plumbing/

Same-service arrays on other pages:
- Used by commercial-plumbing, commercial-plumbing
  - Licensed Commercial Plumbers, NV #048585A
  - 4.8 Stars, 81 Google Reviews
  - Residential and Commercial Service
  - Transparent Pricing, No Hidden Fees
  - Over 40 Years in Las Vegas
- Used by enterprise/commercial-plumbing
  - NV Licensed #048585A
  - Over 40 Years Serving Las Vegas Valley
  - 4.8-Star Rating, 81 Google Reviews
  - Clark County Permits and Inspections
  - Transparent Pricing, No Hidden Fees
- Used by henderson/commercial-plumbing, las-vegas/commercial-plumbing
  - NV Licensed #048585A
  - 4.8 Stars, 81 Google Reviews
  - Over 40 Years Serving the Las Vegas Valley
  - 24/7 Emergency Commercial Service
  - Transparent Pricing, No Hidden Fees
  - Permits Coordinated
- Used by paradise/commercial-plumbing
  - Nevada Contractor License #048585A
  - Commercial plumbing for restaurants, hospitality, and property managers
  - 4.8-star rating, 81 Google reviews
  - Serving Paradise and the Las Vegas Valley for over 40 years
  - 24/7 emergency commercial service
- Used by spring-valley/commercial-plumbing
  - NV Licensed #048585A
  - 4.8 Stars, 81 Google Reviews
  - Over 40 Years Serving the Las Vegas Valley
  - 24/7 Emergency Commercial Service
  - Transparent Pricing, No Hidden Fees
  - Clark County Permits Coordinated

### /north-las-vegas/garbage-disposal-repair-installation/

Same-service arrays on other pages:
- Used by garbage-disposal-repair-installation, garbage-disposal-repair-installation
  - Licensed Plumbers, NV #048585A
  - 4.8 Stars, 81 Google Reviews
  - 24/7 Emergency Service
  - Transparent Pricing, No Hidden Fees
  - Over 40 Years in Las Vegas
- Used by henderson/garbage-disposal-repair-installation
  - NV Licensed, #048585A
  - Garbage Disposal Repair and Replacement
  - Serving All Henderson Communities
  - Transparent Pricing, No Hidden Fees
- Used by las-vegas/garbage-disposal-repair-installation
  - NV Licensed Plumbers, #048585A
  - Garbage Disposal Repair and Installation
  - Serving Las Vegas and the Valley
  - Transparent Pricing, No Hidden Fees
- Used by summerlin/garbage-disposal-repair-installation
  - NV Licensed, #048585A
  - Garbage Disposal Repair and Replacement
  - Serving All Summerlin Villages
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/repiping/

Same-service arrays on other pages:
- Used by enterprise/repiping
  - Licensed Plumbers, NV #048585A
  - Over 40 Years Serving Las Vegas Valley
  - 4.8-Star Rating, 81 Google Reviews
  - Clark County Permits Pulled
  - Transparent Pricing, No Hidden Fees
- Used by green-valley/repiping, henderson/repiping, las-vegas/repiping
  - 4.8 stars, 81 Google reviews
  - NV Licensed, #048585A
  - Over 40 years serving the Las Vegas Valley
  - Permits pulled and inspections scheduled
  - Transparent pricing, no hidden fees
  - Whole-House and Partial Repiping
  - PEX and Copper Repiping
- Used by repiping, repiping
  - 4.8 stars, 81 Google reviews
  - NV Licensed Plumbers, #048585A
  - Over 40 years serving Las Vegas
  - Transparent pricing, no hidden fees
  - Permits Pulled and Inspections Scheduled
- Used by spring-valley/repiping
  - 4.8 stars, 81 Google reviews
  - NV Licensed #048585A
  - Over 40 years serving the Las Vegas Valley
  - Transparent pricing, no hidden fees
- Used by summerlin/repiping
  - NV Licensed, #048585A
  - Whole-House and Partial Repiping
  - Permits Pulled and Inspections Scheduled
  - Transparent Pricing, No Hidden Fees

### /north-las-vegas/toilet-repair-installation/

Same-service arrays on other pages:
- Used by green-valley/toilet-repair-installation
  - NV Licensed, #048585A
  - Toilet Repair and Installation
  - Serving Green Valley and Henderson
  - Transparent Pricing, No Hidden Fees
- Used by henderson/toilet-repair-installation
  - NV Licensed, #048585A
  - Toilet Repair and Installation
  - Serving All Henderson Communities
  - Transparent Pricing, No Hidden Fees
- Used by las-vegas/toilet-repair-installation
  - NV Licensed Plumbers, #048585A
  - Toilet Repair and Installation
  - Serving Las Vegas and the Valley
  - Transparent Pricing, No Hidden Fees
- Used by summerlin/toilet-repair-installation
  - NV Licensed, #048585A
  - Toilet Repair and Installation
  - Serving All Summerlin Villages
  - Transparent Pricing, No Hidden Fees
- Used by toilet-repair-installation, toilet-repair-installation
  - Licensed Plumbers, NV #048585A
  - 4.8 Stars, 81 Google Reviews
  - 24/7 Emergency Service
  - Transparent Pricing, No Hidden Fees
  - Over 40 Years in Las Vegas

### /north-las-vegas/water-pipe-repair-replacement/

Same-service arrays on other pages:
- Used by henderson/water-pipe-repair-replacement
  - NV Licensed, #048585A
  - Burst Pipe and Leak Repair
  - Serving All Henderson Communities
  - Transparent Pricing, No Hidden Fees
- Used by las-vegas/water-pipe-repair-replacement
  - NV Licensed, #048585A
  - Burst Pipe and Leak Repair
  - Serving Neighborhoods Across Las Vegas
  - Transparent Pricing, No Hidden Fees
- Used by summerlin/water-pipe-repair-replacement
  - NV Licensed, #048585A
  - Burst Pipe and Leak Repair
  - Serving All Summerlin Villages
  - Transparent Pricing, No Hidden Fees
- Used by water-pipe-repair-replacement, water-pipe-repair-replacement
  - Licensed Plumbers, NV #048585A
  - 4.8 Stars, 81 Google Reviews
  - 24/7 Emergency Service
  - Transparent Pricing, No Hidden Fees
  - Over 40 Years in Las Vegas

Reuse notes (location-neutral items only):
- commercial-plumbing: no NLV commercial sibling exists. The location-neutral items shared across the other commercial pages are the license line, "Transparent Pricing, No Hidden Fees", and the rating and years items. Exclude "Serving Paradise and the Las Vegas Valley for over 40 years" (location line).
- garbage-disposal-repair-installation: the Henderson, Las Vegas, and Summerlin arrays share license, a service item, a "Serving ..." line (exclude), and "Transparent Pricing, No Hidden Fees". Reusable: the license line, the service item as worded on the source page, and the pricing line.
- repiping: the Green Valley, Henderson, and Las Vegas arrays share seven items including whole-house and PEX items and a permits item, plus the rating and years items. The Summerlin array has no rating or years items. Which of these is approved for NLV is a decision for the owner.
- toilet-repair-installation: Green Valley, Henderson, Las Vegas, and Summerlin share license, "Toilet Repair and Installation", a "Serving ..." line (exclude), and the pricing line.
- water-pipe-repair-replacement: Henderson, Las Vegas, and Summerlin share "NV Licensed, #048585A", "Burst Pipe and Leak Repair", a "Serving ..." line (exclude), and the pricing line.

License wording differs across these sources ("NV Licensed, #048585A", "NV Licensed Plumbers, #048585A", "NV Licensed #048585A", and others). That variation is inventoried in docs/site-os/reports/license-wording-inventory.md and is not resolved here.

