# Internal Linking Batch 1: SERVICE_AREA_LINKS Href Fixes Report

Base commit: `585e825`. Nothing staged, committed, pushed, or deployed.

## Files changed (14, all `app/<slug>/page.tsx`)

backflow-prevention (10), commercial-plumbing (6), faucet-sink-repair-installation (9), garbage-disposal-repair-installation (10), gas-line-plumbing (9), plumbing-fixture-repair-replacement-installation (11), repiping (5), sewer-line-services (9), slab-leak-detection-repair (2), toilet-repair-installation (9), trenchless-piping (11), video-camera-plumbing-inspections (10), water-meter-pressure-regulator-services (11), water-pipe-repair-replacement (11). Total 123 additions: 23 city+service, 100 hub. Untouched: drain-cleaning, emergency-plumbing, leak-detection-repair, water-heater-repair-installation.

## Validation results

| check | result |
|---|---|
| Diff shape | 123 added lines, 123 removed lines; every changed line is a `{ name: "X" }` entry gaining `, href: "..."`; 0 non-matching lines |
| Plan script re-run | 0 ADD, 0 DIFF remain; 75 + 123 entries all OK |
| Unique targets vs manifest | 34 unique targets, 34 PASS, 0 FAIL, none is `/thank-you/` |
| Lint | exit 0 |
| `npx tsc --noEmit` | exit 0 |
| `npm run build` | exit 0; `check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)` |
| Built HTML, 14 pages | 11 of 11 entries are `<a>` on every page, 11 of 11 hrefs equal the rule, 11 of 11 end in a trailing slash |
| JSON-LD hash before vs after | identical on all 18 pages |
| Visible text hash before vs after | identical on all 18 pages |
| 4 untouched pages | `<main>` byte-identical |
| Em dash or `--` in added lines | none |
| FLAG: VERIFY / comments | 0 changed lines contain FLAG or comment markers; 16 FLAG: VERIFY occurrences remain in app, none in the diff |

## Near-orphans (contextual inbound, from `out/`)

| page | before | after |
|---|---|---|
| /henderson/backflow-prevention/ | 2 | 3 |
| /paradise/backflow-prevention/ | 2 | 3 |
| /paradise/gas-line-plumbing/ | 2 | 3 |
| /summerlin/gas-line-plumbing/ | 2 | 3 |

Note: `/sitemap/` is counted as a contextual source because its list sits in `<main>`; it was in both counts.

## Risks and notes

- Hashes are SHA-256 cut to 16 hex characters.
- Git warns that LF will become CRLF on these files; the edits kept the existing LF endings.
- `docs/seo/route-manifest.json` is still modified (rebuild rewrote it), unstaged. `scripts/audit/` untracked.
- Aliante Area always uses the hub; no Aliante page exists for these 14 services.

## Full `git diff -U0 -- app/`

```diff
diff --git a/app/backflow-prevention/page.tsx b/app/backflow-prevention/page.tsx
index 7761af5..bfe646c 100644
--- a/app/backflow-prevention/page.tsx
+++ b/app/backflow-prevention/page.tsx
@@ -244,10 +244,10 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Henderson", href: "/henderson/backflow-prevention/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
+  { name: "Paradise", href: "/paradise/backflow-prevention/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/commercial-plumbing/page.tsx b/app/commercial-plumbing/page.tsx
index 286a294..6daf282 100644
--- a/app/commercial-plumbing/page.tsx
+++ b/app/commercial-plumbing/page.tsx
@@ -246,3 +246,3 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
+  { name: "North Las Vegas", href: "/north-las-vegas/commercial-plumbing/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
@@ -252,3 +252,3 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/faucet-sink-repair-installation/page.tsx b/app/faucet-sink-repair-installation/page.tsx
index d14eb3b..64d5dd3 100644
--- a/app/faucet-sink-repair-installation/page.tsx
+++ b/app/faucet-sink-repair-installation/page.tsx
@@ -244,8 +244,8 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
+  { name: "Henderson", href: "/henderson/faucet-sink-repair-installation/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/faucet-sink-repair-installation/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
@@ -253 +253 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Lake Las Vegas" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/garbage-disposal-repair-installation/page.tsx b/app/garbage-disposal-repair-installation/page.tsx
index bff6131..4a3b203 100644
--- a/app/garbage-disposal-repair-installation/page.tsx
+++ b/app/garbage-disposal-repair-installation/page.tsx
@@ -244,10 +244,10 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Henderson", href: "/henderson/garbage-disposal-repair-installation/" },
+  { name: "North Las Vegas", href: "/north-las-vegas/garbage-disposal-repair-installation/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/garbage-disposal-repair-installation/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/gas-line-plumbing/page.tsx b/app/gas-line-plumbing/page.tsx
index 17010ea..778229b 100644
--- a/app/gas-line-plumbing/page.tsx
+++ b/app/gas-line-plumbing/page.tsx
@@ -243,9 +243,9 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/gas-line-plumbing/" },
+  { name: "Paradise", href: "/paradise/gas-line-plumbing/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/plumbing-fixture-repair-replacement-installation/page.tsx b/app/plumbing-fixture-repair-replacement-installation/page.tsx
index a9f68c8..5cdbd6a 100644
--- a/app/plumbing-fixture-repair-replacement-installation/page.tsx
+++ b/app/plumbing-fixture-repair-replacement-installation/page.tsx
@@ -243,11 +243,11 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Las Vegas" },
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Las Vegas", href: "/las-vegas-plumbing-services/" },
+  { name: "Henderson", href: "/henderson-plumbing-services/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/repiping/page.tsx b/app/repiping/page.tsx
index 41fbd06..7ca1c90 100644
--- a/app/repiping/page.tsx
+++ b/app/repiping/page.tsx
@@ -230,2 +230,2 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
+  { name: "North Las Vegas", href: "/north-las-vegas/repiping/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
@@ -233 +233 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Paradise" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
@@ -236 +236 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Boulder City" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
@@ -238 +238 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Lake Las Vegas" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/sewer-line-services/page.tsx b/app/sewer-line-services/page.tsx
index c21f5de..b2f59a5 100644
--- a/app/sewer-line-services/page.tsx
+++ b/app/sewer-line-services/page.tsx
@@ -231,9 +231,9 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "North Las Vegas", href: "/north-las-vegas/sewer-line-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/sewer-line-services/" },
+  { name: "Paradise", href: "/paradise/sewer-line-services/" },
+  { name: "Spring Valley", href: "/spring-valley/sewer-line-services/" },
+  { name: "Enterprise", href: "/enterprise/sewer-line-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/slab-leak-detection-repair/page.tsx b/app/slab-leak-detection-repair/page.tsx
index ea01e0d..65194cb 100644
--- a/app/slab-leak-detection-repair/page.tsx
+++ b/app/slab-leak-detection-repair/page.tsx
@@ -236 +236 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Paradise" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
@@ -239 +239 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Boulder City" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
diff --git a/app/toilet-repair-installation/page.tsx b/app/toilet-repair-installation/page.tsx
index 9d204a1..0b1b906 100644
--- a/app/toilet-repair-installation/page.tsx
+++ b/app/toilet-repair-installation/page.tsx
@@ -244,8 +244,8 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
+  { name: "Henderson", href: "/henderson/toilet-repair-installation/" },
+  { name: "North Las Vegas", href: "/north-las-vegas/toilet-repair-installation/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/toilet-repair-installation/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
@@ -253 +253 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Lake Las Vegas" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/trenchless-piping/page.tsx b/app/trenchless-piping/page.tsx
index f42509a..ccd9dc8 100644
--- a/app/trenchless-piping/page.tsx
+++ b/app/trenchless-piping/page.tsx
@@ -237,11 +237,11 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Las Vegas" },
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Las Vegas", href: "/las-vegas-plumbing-services/" },
+  { name: "Henderson", href: "/henderson-plumbing-services/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/video-camera-plumbing-inspections/page.tsx b/app/video-camera-plumbing-inspections/page.tsx
index 7b8c041..1bdd4bf 100644
--- a/app/video-camera-plumbing-inspections/page.tsx
+++ b/app/video-camera-plumbing-inspections/page.tsx
@@ -245,10 +245,10 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Henderson", href: "/henderson-plumbing-services/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/water-meter-pressure-regulator-services/page.tsx b/app/water-meter-pressure-regulator-services/page.tsx
index c94d8a5..3b4c831 100644
--- a/app/water-meter-pressure-regulator-services/page.tsx
+++ b/app/water-meter-pressure-regulator-services/page.tsx
@@ -244,11 +244,11 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Las Vegas" },
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Las Vegas", href: "/las-vegas-plumbing-services/" },
+  { name: "Henderson", href: "/henderson-plumbing-services/" },
+  { name: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin-plumbing-services/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
diff --git a/app/water-pipe-repair-replacement/page.tsx b/app/water-pipe-repair-replacement/page.tsx
index 58d7734..e02aeb9 100644
--- a/app/water-pipe-repair-replacement/page.tsx
+++ b/app/water-pipe-repair-replacement/page.tsx
@@ -242,11 +242,11 @@ const SERVICE_AREA_LINKS: { name: string; href?: string }[] = [
-  { name: "Las Vegas" },
-  { name: "Henderson" },
-  { name: "North Las Vegas" },
-  { name: "Aliante Area" },
-  { name: "Summerlin" },
-  { name: "Paradise" },
-  { name: "Spring Valley" },
-  { name: "Enterprise" },
-  { name: "Boulder City" },
-  { name: "Green Valley" },
-  { name: "Lake Las Vegas" },
+  { name: "Las Vegas", href: "/las-vegas/water-pipe-repair-replacement/" },
+  { name: "Henderson", href: "/henderson/water-pipe-repair-replacement/" },
+  { name: "North Las Vegas", href: "/north-las-vegas/water-pipe-repair-replacement/" },
+  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
+  { name: "Summerlin", href: "/summerlin/water-pipe-repair-replacement/" },
+  { name: "Paradise", href: "/paradise-plumbing-services/" },
+  { name: "Spring Valley", href: "/spring-valley-plumbing-services/" },
+  { name: "Enterprise", href: "/enterprise-plumbing-services/" },
+  { name: "Boulder City", href: "/boulder-city-plumbing-services/" },
+  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
+  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
```
