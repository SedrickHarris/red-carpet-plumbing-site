# Red Carpet Plumbing Page Inventory

- **Generated:** 2026-11-19
- **Sources:** `docs/seo/route-manifest.json` (routes and source files) and `out/` (titles, indexability, sitemap)
- **Branch head when generated:** `19a2212 fix(images): unify card alt text so each image path has one alt sitewide`
- **Regenerate:** run `npm run build`, then `node scripts/gen-page-inventory.mjs`. The file is overwritten; do not hand-edit it.

## Inventory Summary

| Type | Routes |
|---|---|
| Core pages (`/`, `/about/`, `/contact/`) | 3 |
| Hub pages (`/plumbing-services/`, `/service-areas/`) | 2 |
| City hub pages (`/{city}-plumbing-services/`) | 10 |
| Core service pages (`/{service}/`) | 18 |
| Service-location pages (`/{city}/{service}/`) | 93 |
| Aliante area hub (`/north-las-vegas/aliante-area-plumbing/`) | 1 |
| Aliante area service pages (`/north-las-vegas/aliante-area/{service}/`) | 5 |
| Legal pages | 2 |
| Utility pages (`/sitemap/`, `/thank-you/`) | 2 |
| **Total routes in manifest** | **136** |

| Build check | Value |
|---|---|
| Manifest routes | 136 (`routeCount` 136) |
| Total built pages (manifest routes plus the not-found page) | 137 |
| Sitemap URLs (`out/sitemap.xml`) | 135 |
| Noindex pages | 2 (`/thank-you/`, `/_not-found/`) |

## All Routes

Titles are read from the built HTML, so title length reflects what search engines receive. Rows are in route order.

| Route | Type | Source file | Indexable | Title length |
|---|---|---|---|---|
| `/` | Core | `app/page.tsx` | yes | 55 |
| `/about/` | Core | `app/about/page.tsx` | yes | 54 |
| `/backflow-prevention/` | Core service | `app/backflow-prevention/page.tsx` | yes | 45 |
| `/boulder-city-plumbing-services/` | City hub | `app/boulder-city-plumbing-services/page.tsx` | yes | 59 |
| `/boulder-city/drain-cleaning/` | Service-location | `app/boulder-city/drain-cleaning/page.tsx` | yes | 56 |
| `/boulder-city/emergency-plumbing/` | Service-location | `app/boulder-city/emergency-plumbing/page.tsx` | yes | 60 |
| `/boulder-city/leak-detection-repair/` | Service-location | `app/boulder-city/leak-detection-repair/page.tsx` | yes | 45 |
| `/boulder-city/water-heater-repair-installation/` | Service-location | `app/boulder-city/water-heater-repair-installation/page.tsx` | yes | 56 |
| `/commercial-plumbing/` | Core service | `app/commercial-plumbing/page.tsx` | yes | 58 |
| `/contact/` | Core | `app/contact/page.tsx` | yes | 49 |
| `/drain-cleaning/` | Core service | `app/drain-cleaning/page.tsx` | yes | 53 |
| `/emergency-plumbing/` | Core service | `app/emergency-plumbing/page.tsx` | yes | 56 |
| `/enterprise-plumbing-services/` | City hub | `app/enterprise-plumbing-services/page.tsx` | yes | 57 |
| `/enterprise/commercial-plumbing/` | Service-location | `app/enterprise/commercial-plumbing/page.tsx` | yes | 59 |
| `/enterprise/drain-cleaning/` | Service-location | `app/enterprise/drain-cleaning/page.tsx` | yes | 54 |
| `/enterprise/emergency-plumbing/` | Service-location | `app/enterprise/emergency-plumbing/page.tsx` | yes | 58 |
| `/enterprise/leak-detection-repair/` | Service-location | `app/enterprise/leak-detection-repair/page.tsx` | yes | 43 |
| `/enterprise/repiping/` | Service-location | `app/enterprise/repiping/page.tsx` | yes | 57 |
| `/enterprise/sewer-line-services/` | Service-location | `app/enterprise/sewer-line-services/page.tsx` | yes | 59 |
| `/enterprise/slab-leak-detection-repair/` | Service-location | `app/enterprise/slab-leak-detection-repair/page.tsx` | yes | 48 |
| `/enterprise/water-heater-repair-installation/` | Service-location | `app/enterprise/water-heater-repair-installation/page.tsx` | yes | 54 |
| `/faucet-sink-repair-installation/` | Core service | `app/faucet-sink-repair-installation/page.tsx` | yes | 56 |
| `/garbage-disposal-repair-installation/` | Core service | `app/garbage-disposal-repair-installation/page.tsx` | yes | 57 |
| `/gas-line-plumbing/` | Core service | `app/gas-line-plumbing/page.tsx` | yes | 56 |
| `/green-valley-plumbing-services/` | City hub | `app/green-valley-plumbing-services/page.tsx` | yes | 59 |
| `/green-valley/drain-cleaning/` | Service-location | `app/green-valley/drain-cleaning/page.tsx` | yes | 56 |
| `/green-valley/emergency-plumbing/` | Service-location | `app/green-valley/emergency-plumbing/page.tsx` | yes | 60 |
| `/green-valley/faucet-sink-repair-installation/` | Service-location | `app/green-valley/faucet-sink-repair-installation/page.tsx` | yes | 59 |
| `/green-valley/leak-detection-repair/` | Service-location | `app/green-valley/leak-detection-repair/page.tsx` | yes | 45 |
| `/green-valley/repiping/` | Service-location | `app/green-valley/repiping/page.tsx` | yes | 59 |
| `/green-valley/slab-leak-detection-repair/` | Service-location | `app/green-valley/slab-leak-detection-repair/page.tsx` | yes | 50 |
| `/green-valley/toilet-repair-installation/` | Service-location | `app/green-valley/toilet-repair-installation/page.tsx` | yes | 50 |
| `/green-valley/water-heater-repair-installation/` | Service-location | `app/green-valley/water-heater-repair-installation/page.tsx` | yes | 56 |
| `/henderson-plumbing-services/` | City hub | `app/henderson-plumbing-services/page.tsx` | yes | 56 |
| `/henderson/backflow-prevention/` | Service-location | `app/henderson/backflow-prevention/page.tsx` | yes | 45 |
| `/henderson/commercial-plumbing/` | Service-location | `app/henderson/commercial-plumbing/page.tsx` | yes | 58 |
| `/henderson/drain-cleaning/` | Service-location | `app/henderson/drain-cleaning/page.tsx` | yes | 53 |
| `/henderson/emergency-plumbing/` | Service-location | `app/henderson/emergency-plumbing/page.tsx` | yes | 57 |
| `/henderson/faucet-sink-repair-installation/` | Service-location | `app/henderson/faucet-sink-repair-installation/page.tsx` | yes | 56 |
| `/henderson/garbage-disposal-repair-installation/` | Service-location | `app/henderson/garbage-disposal-repair-installation/page.tsx` | yes | 57 |
| `/henderson/gas-line-plumbing/` | Service-location | `app/henderson/gas-line-plumbing/page.tsx` | yes | 56 |
| `/henderson/leak-detection-repair/` | Service-location | `app/henderson/leak-detection-repair/page.tsx` | yes | 42 |
| `/henderson/repiping/` | Service-location | `app/henderson/repiping/page.tsx` | yes | 56 |
| `/henderson/sewer-line-services/` | Service-location | `app/henderson/sewer-line-services/page.tsx` | yes | 58 |
| `/henderson/slab-leak-detection-repair/` | Service-location | `app/henderson/slab-leak-detection-repair/page.tsx` | yes | 47 |
| `/henderson/toilet-repair-installation/` | Service-location | `app/henderson/toilet-repair-installation/page.tsx` | yes | 47 |
| `/henderson/water-heater-repair-installation/` | Service-location | `app/henderson/water-heater-repair-installation/page.tsx` | yes | 53 |
| `/henderson/water-pipe-repair-replacement/` | Service-location | `app/henderson/water-pipe-repair-replacement/page.tsx` | yes | 50 |
| `/lake-las-vegas-plumbing-services/` | City hub | `app/lake-las-vegas-plumbing-services/page.tsx` | yes | 39 |
| `/lake-las-vegas/drain-cleaning/` | Service-location | `app/lake-las-vegas/drain-cleaning/page.tsx` | yes | 58 |
| `/lake-las-vegas/emergency-plumbing/` | Service-location | `app/lake-las-vegas/emergency-plumbing/page.tsx` | yes | 40 |
| `/lake-las-vegas/leak-detection-repair/` | Service-location | `app/lake-las-vegas/leak-detection-repair/page.tsx` | yes | 47 |
| `/lake-las-vegas/slab-leak-detection-repair/` | Service-location | `app/lake-las-vegas/slab-leak-detection-repair/page.tsx` | yes | 52 |
| `/lake-las-vegas/water-heater-repair-installation/` | Service-location | `app/lake-las-vegas/water-heater-repair-installation/page.tsx` | yes | 58 |
| `/las-vegas-plumbing-services/` | City hub | `app/las-vegas-plumbing-services/page.tsx` | yes | 49 |
| `/las-vegas/backflow-prevention/` | Service-location | `app/las-vegas/backflow-prevention/page.tsx` | yes | 60 |
| `/las-vegas/commercial-plumbing/` | Service-location | `app/las-vegas/commercial-plumbing/page.tsx` | yes | 51 |
| `/las-vegas/drain-cleaning/` | Service-location | `app/las-vegas/drain-cleaning/page.tsx` | yes | 46 |
| `/las-vegas/emergency-plumbing/` | Service-location | `app/las-vegas/emergency-plumbing/page.tsx` | yes | 57 |
| `/las-vegas/faucet-sink-repair-installation/` | Service-location | `app/las-vegas/faucet-sink-repair-installation/page.tsx` | yes | 49 |
| `/las-vegas/garbage-disposal-repair-installation/` | Service-location | `app/las-vegas/garbage-disposal-repair-installation/page.tsx` | yes | 50 |
| `/las-vegas/gas-line-plumbing/` | Service-location | `app/las-vegas/gas-line-plumbing/page.tsx` | yes | 49 |
| `/las-vegas/leak-detection-repair/` | Service-location | `app/las-vegas/leak-detection-repair/page.tsx` | yes | 57 |
| `/las-vegas/repiping/` | Service-location | `app/las-vegas/repiping/page.tsx` | yes | 49 |
| `/las-vegas/sewer-line-services/` | Service-location | `app/las-vegas/sewer-line-services/page.tsx` | yes | 51 |
| `/las-vegas/slab-leak-detection-repair/` | Service-location | `app/las-vegas/slab-leak-detection-repair/page.tsx` | yes | 40 |
| `/las-vegas/toilet-repair-installation/` | Service-location | `app/las-vegas/toilet-repair-installation/page.tsx` | yes | 40 |
| `/las-vegas/video-camera-plumbing-inspections/` | Service-location | `app/las-vegas/video-camera-plumbing-inspections/page.tsx` | yes | 43 |
| `/las-vegas/water-heater-repair-installation/` | Service-location | `app/las-vegas/water-heater-repair-installation/page.tsx` | yes | 46 |
| `/las-vegas/water-pipe-repair-replacement/` | Service-location | `app/las-vegas/water-pipe-repair-replacement/page.tsx` | yes | 43 |
| `/leak-detection-repair/` | Core service | `app/leak-detection-repair/page.tsx` | yes | 42 |
| `/north-las-vegas-plumbing-services/` | City hub | `app/north-las-vegas-plumbing-services/page.tsx` | yes | 40 |
| `/north-las-vegas/aliante-area-plumbing/` | Aliante hub | `app/north-las-vegas/aliante-area-plumbing/page.tsx` | yes | 45 |
| `/north-las-vegas/aliante-area/drain-cleaning/` | Aliante service | `app/north-las-vegas/aliante-area/drain-cleaning/page.tsx` | yes | 42 |
| `/north-las-vegas/aliante-area/emergency-plumbing/` | Aliante service | `app/north-las-vegas/aliante-area/emergency-plumbing/page.tsx` | yes | 46 |
| `/north-las-vegas/aliante-area/leak-detection-repair/` | Aliante service | `app/north-las-vegas/aliante-area/leak-detection-repair/page.tsx` | yes | 53 |
| `/north-las-vegas/aliante-area/slab-leak-detection-repair/` | Aliante service | `app/north-las-vegas/aliante-area/slab-leak-detection-repair/page.tsx` | yes | 58 |
| `/north-las-vegas/aliante-area/water-heater-repair-installation/` | Aliante service | `app/north-las-vegas/aliante-area/water-heater-repair-installation/page.tsx` | yes | 51 |
| `/north-las-vegas/commercial-plumbing/` | Service-location | `app/north-las-vegas/commercial-plumbing/page.tsx` | yes | 42 |
| `/north-las-vegas/drain-cleaning/` | Service-location | `app/north-las-vegas/drain-cleaning/page.tsx` | yes | 59 |
| `/north-las-vegas/emergency-plumbing/` | Service-location | `app/north-las-vegas/emergency-plumbing/page.tsx` | yes | 58 |
| `/north-las-vegas/garbage-disposal-repair-installation/` | Service-location | `app/north-las-vegas/garbage-disposal-repair-installation/page.tsx` | yes | 59 |
| `/north-las-vegas/leak-detection-repair/` | Service-location | `app/north-las-vegas/leak-detection-repair/page.tsx` | yes | 48 |
| `/north-las-vegas/repiping/` | Service-location | `app/north-las-vegas/repiping/page.tsx` | yes | 40 |
| `/north-las-vegas/sewer-line-services/` | Service-location | `app/north-las-vegas/sewer-line-services/page.tsx` | yes | 42 |
| `/north-las-vegas/slab-leak-detection-repair/` | Service-location | `app/north-las-vegas/slab-leak-detection-repair/page.tsx` | yes | 53 |
| `/north-las-vegas/toilet-repair-installation/` | Service-location | `app/north-las-vegas/toilet-repair-installation/page.tsx` | yes | 53 |
| `/north-las-vegas/water-heater-repair-installation/` | Service-location | `app/north-las-vegas/water-heater-repair-installation/page.tsx` | yes | 59 |
| `/north-las-vegas/water-pipe-repair-replacement/` | Service-location | `app/north-las-vegas/water-pipe-repair-replacement/page.tsx` | yes | 56 |
| `/paradise-plumbing-services/` | City hub | `app/paradise-plumbing-services/page.tsx` | yes | 55 |
| `/paradise/backflow-prevention/` | Service-location | `app/paradise/backflow-prevention/page.tsx` | yes | 44 |
| `/paradise/commercial-plumbing/` | Service-location | `app/paradise/commercial-plumbing/page.tsx` | yes | 57 |
| `/paradise/drain-cleaning/` | Service-location | `app/paradise/drain-cleaning/page.tsx` | yes | 52 |
| `/paradise/emergency-plumbing/` | Service-location | `app/paradise/emergency-plumbing/page.tsx` | yes | 55 |
| `/paradise/gas-line-plumbing/` | Service-location | `app/paradise/gas-line-plumbing/page.tsx` | yes | 55 |
| `/paradise/leak-detection-repair/` | Service-location | `app/paradise/leak-detection-repair/page.tsx` | yes | 41 |
| `/paradise/sewer-line-services/` | Service-location | `app/paradise/sewer-line-services/page.tsx` | yes | 57 |
| `/paradise/water-heater-repair-installation/` | Service-location | `app/paradise/water-heater-repair-installation/page.tsx` | yes | 52 |
| `/plumbing-fixture-repair-replacement-installation/` | Core service | `app/plumbing-fixture-repair-replacement-installation/page.tsx` | yes | 57 |
| `/plumbing-services/` | Hub | `app/plumbing-services/page.tsx` | yes | 56 |
| `/privacy-policy/` | Legal | `app/privacy-policy/page.tsx` | yes | 36 |
| `/repiping/` | Core service | `app/repiping/page.tsx` | yes | 56 |
| `/service-areas/` | Hub | `app/service-areas/page.tsx` | yes | 42 |
| `/sewer-line-services/` | Core service | `app/sewer-line-services/page.tsx` | yes | 58 |
| `/sitemap/` | Utility | `app/sitemap/page.tsx` | yes | 29 |
| `/slab-leak-detection-repair/` | Core service | `app/slab-leak-detection-repair/page.tsx` | yes | 47 |
| `/spring-valley-plumbing-services/` | City hub | `app/spring-valley-plumbing-services/page.tsx` | yes | 60 |
| `/spring-valley/commercial-plumbing/` | Service-location | `app/spring-valley/commercial-plumbing/page.tsx` | yes | 40 |
| `/spring-valley/drain-cleaning/` | Service-location | `app/spring-valley/drain-cleaning/page.tsx` | yes | 57 |
| `/spring-valley/emergency-plumbing/` | Service-location | `app/spring-valley/emergency-plumbing/page.tsx` | yes | 39 |
| `/spring-valley/leak-detection-repair/` | Service-location | `app/spring-valley/leak-detection-repair/page.tsx` | yes | 46 |
| `/spring-valley/repiping/` | Service-location | `app/spring-valley/repiping/page.tsx` | yes | 60 |
| `/spring-valley/sewer-line-services/` | Service-location | `app/spring-valley/sewer-line-services/page.tsx` | yes | 40 |
| `/spring-valley/slab-leak-detection-repair/` | Service-location | `app/spring-valley/slab-leak-detection-repair/page.tsx` | yes | 51 |
| `/spring-valley/water-heater-repair-installation/` | Service-location | `app/spring-valley/water-heater-repair-installation/page.tsx` | yes | 57 |
| `/summerlin-plumbing-services/` | City hub | `app/summerlin-plumbing-services/page.tsx` | yes | 56 |
| `/summerlin/drain-cleaning/` | Service-location | `app/summerlin/drain-cleaning/page.tsx` | yes | 53 |
| `/summerlin/emergency-plumbing/` | Service-location | `app/summerlin/emergency-plumbing/page.tsx` | yes | 56 |
| `/summerlin/faucet-sink-repair-installation/` | Service-location | `app/summerlin/faucet-sink-repair-installation/page.tsx` | yes | 56 |
| `/summerlin/garbage-disposal-repair-installation/` | Service-location | `app/summerlin/garbage-disposal-repair-installation/page.tsx` | yes | 57 |
| `/summerlin/gas-line-plumbing/` | Service-location | `app/summerlin/gas-line-plumbing/page.tsx` | yes | 56 |
| `/summerlin/leak-detection-repair/` | Service-location | `app/summerlin/leak-detection-repair/page.tsx` | yes | 42 |
| `/summerlin/repiping/` | Service-location | `app/summerlin/repiping/page.tsx` | yes | 56 |
| `/summerlin/sewer-line-services/` | Service-location | `app/summerlin/sewer-line-services/page.tsx` | yes | 58 |
| `/summerlin/slab-leak-detection-repair/` | Service-location | `app/summerlin/slab-leak-detection-repair/page.tsx` | yes | 47 |
| `/summerlin/toilet-repair-installation/` | Service-location | `app/summerlin/toilet-repair-installation/page.tsx` | yes | 47 |
| `/summerlin/water-heater-repair-installation/` | Service-location | `app/summerlin/water-heater-repair-installation/page.tsx` | yes | 53 |
| `/summerlin/water-pipe-repair-replacement/` | Service-location | `app/summerlin/water-pipe-repair-replacement/page.tsx` | yes | 50 |
| `/terms-and-conditions/` | Legal | `app/terms-and-conditions/page.tsx` | yes | 42 |
| `/thank-you/` | Utility | `app/thank-you/page.tsx` | no | 31 |
| `/toilet-repair-installation/` | Core service | `app/toilet-repair-installation/page.tsx` | yes | 47 |
| `/trenchless-piping/` | Core service | `app/trenchless-piping/page.tsx` | yes | 43 |
| `/video-camera-plumbing-inspections/` | Core service | `app/video-camera-plumbing-inspections/page.tsx` | yes | 50 |
| `/water-heater-repair-installation/` | Core service | `app/water-heater-repair-installation/page.tsx` | yes | 53 |
| `/water-meter-pressure-regulator-services/` | Core service | `app/water-meter-pressure-regulator-services/page.tsx` | yes | 60 |
| `/water-pipe-repair-replacement/` | Core service | `app/water-pipe-repair-replacement/page.tsx` | yes | 50 |

## Approved in Build List, Not Built

Routes named in `docs/site-os/inputs/red-carpet-plumbing-build-list.md` that have no route in the manifest. 43 routes.

### Service-location combinations listed as link targets (6)

- `/enterprise/water-pipe-repair-replacement/`
- `/enterprise/gas-line-plumbing/`
- `/north-las-vegas/backflow-prevention/`
- `/henderson/video-camera-plumbing-inspections/`
- `/north-las-vegas/video-camera-plumbing-inspections/`
- `/summerlin/video-camera-plumbing-inspections/`

### Neighborhood hubs (13)

- `/henderson/seven-hills-plumbing/`
- `/paradise/south-strip-plumbing/`
- `/paradise/airport-corridor-plumbing/`
- `/summerlin/summerlin-north-plumbing/`
- `/summerlin/summerlin-south-plumbing/`
- `/spring-valley/desert-inn-west-sahara-plumbing/`
- `/enterprise/southwest-las-vegas-plumbing/`
- `/enterprise/commercial-parks-plumbing/`
- `/las-vegas/whitney-plumbing/`
- `/las-vegas/winchester-plumbing/`
- `/las-vegas/sunrise-manor-plumbing/`
- `/las-vegas/desert-shores-plumbing/`
- `/las-vegas/tropicana-area-plumbing/`

### Tier 2 neighborhood service-location pages (24)

- `/las-vegas/whitney/drain-cleaning/`
- `/las-vegas/whitney/water-heater-repair-installation/`
- `/las-vegas/whitney/leak-detection-repair/`
- `/las-vegas/winchester/drain-cleaning/`
- `/las-vegas/winchester/water-heater-repair-installation/`
- `/las-vegas/winchester/leak-detection-repair/`
- `/henderson/seven-hills/drain-cleaning/`
- `/henderson/seven-hills/water-heater-repair-installation/`
- `/henderson/seven-hills/leak-detection-repair/`
- `/spring-valley/desert-inn-west-sahara/drain-cleaning/`
- `/spring-valley/desert-inn-west-sahara/water-heater-repair-installation/`
- `/spring-valley/desert-inn-west-sahara/leak-detection-repair/`
- `/las-vegas/sunrise-manor/drain-cleaning/`
- `/las-vegas/sunrise-manor/water-heater-repair-installation/`
- `/las-vegas/sunrise-manor/leak-detection-repair/`
- `/las-vegas/desert-shores/drain-cleaning/`
- `/las-vegas/desert-shores/water-heater-repair-installation/`
- `/las-vegas/desert-shores/leak-detection-repair/`
- `/las-vegas/tropicana-area/drain-cleaning/`
- `/las-vegas/tropicana-area/water-heater-repair-installation/`
- `/las-vegas/tropicana-area/leak-detection-repair/`
- `/enterprise/southwest-las-vegas/drain-cleaning/`
- `/enterprise/southwest-las-vegas/water-heater-repair-installation/`
- `/enterprise/southwest-las-vegas/leak-detection-repair/`

## Unclear in Build List

Routes the build list marks as conditional ("Possible Future Pages", build only if demand appears).

- `/las-vegas/downtown-las-vegas-commercial-plumbing/`
- `/paradise/south-strip-commercial-plumbing/`
- `/paradise/airport-corridor-commercial-plumbing/`

## Cards Without Routes

Sub-service cards on 25 service pages use `ServiceCard` with `built={false}`. They render the title as plain text with no link, because their routes are not built. Examples include the "Types of service" cards on `/sewer-line-services/`.
