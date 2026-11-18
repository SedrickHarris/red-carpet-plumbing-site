# Internal Linking Batch 4: Hub and Cross-City Sentences Report (Henderson, Green Valley, Spring Valley, Summerlin)

Base commit: `ba87b8a`. Nothing staged, committed, pushed, or deployed.

## Files changed (8) and insertions

8 approved sentences on 8 pages: 3 Henderson hub sentences and 5 cross-city sentences. 43 added lines, 3 removed lines. The 3 removed lines are the `AREAS_CROSS_LINKS` lines on `henderson/water-pipe-repair-replacement`, `summerlin/water-pipe-repair-replacement` and `spring-valley/sewer-line-services` (approved LinkSeg edit shape). No existing text, heading, FAQ, schema, metadata, button, or image line changed.

## Validation

| check | result |
|---|---|
| Diff | 8 app files; 43 added, 3 removed (the three `AREAS_CROSS_LINKS` lines) |
| Lint, `tsc --noEmit`, build | exit 0, exit 0, exit 0; `check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)` |
| Whole-page visible text, before vs after, 8 pages | one pure word-level insertion on every page; inserted text equals the approved sentence (8 of 8) |
| Space before the new sentence | exactly one space on all 8 pages |
| New anchor in the edited paragraph | exactly as approved on all 8 pages |
| JSON-LD hash, before vs after | identical on all 10 pages |
| Visible text hash on 2 controls | identical |
| `<details>` count | unchanged (7 to 7) on all 8 pages |
| Manifest and sitemap | manifest 136 routes, `/thank-you/` present; 135 sitemap URLs; `/thank-you/` linked from nowhere |
| Em dash or `--` in added lines | none |

Hashes are SHA-256 cut to 16 hex characters.

## Hash comparison

| page | JSON-LD before | JSON-LD after | text before | text after |
|---|---|---|---|---|
| henderson/drain-cleaning | 4288114fbc259b15 | 4288114fbc259b15 | 24c03cd19a4811ae | 59fe524f2feaec9d |
| henderson/emergency-plumbing | 79dc69da023e536c | 79dc69da023e536c | a70bb982ad04d080 | 24663aa11c32558e |
| henderson/water-heater-repair-installation | f87b13e25b34dcc3 | f87b13e25b34dcc3 | fb8692f6a5476628 | 479c98e7677dacd8 |
| green-valley/faucet-sink-repair-installation | 870cdc688656f274 | 870cdc688656f274 | 1a1a3fc661a6d7ea | 10fad9233da1e9d7 |
| green-valley/toilet-repair-installation | 810a350f1e53b65e | 810a350f1e53b65e | fb847c67b5c6247a | f542c29a7722fe60 |
| henderson/water-pipe-repair-replacement | 10f11ecbdc560b56 | 10f11ecbdc560b56 | fb429cc31fdfa358 | a9a2bb0c8c0dc7ec |
| summerlin/water-pipe-repair-replacement | aa4f5405f495c2f0 | aa4f5405f495c2f0 | 7798169c88d1b63b | 92ad6bb829671ff4 |
| spring-valley/sewer-line-services | bff0eb52db698ff8 | bff0eb52db698ff8 | 37ba6c5b7026ef89 | 6a1a9d8274e241b4 |
| henderson/slab-leak-detection-repair (control) | 986c19e41cc5e357 | 986c19e41cc5e357 | 3869d37da5ff90ec | 3869d37da5ff90ec |
| summerlin/slab-leak-detection-repair (control) | 1a12b6597ec9d42c | 1a12b6597ec9d42c | f913a306b3cf8d37 | f913a306b3cf8d37 |

## Contextual inbound (from `out/`)

| target | before | after | expected |
|---|---|---|---|
| /henderson-plumbing-services/ | 38 | 41 | 41 |
| /henderson/faucet-sink-repair-installation/ | 6 | 7 | 7 |
| /henderson/toilet-repair-installation/ | 5 | 6 | 6 |
| /las-vegas/water-pipe-repair-replacement/ | 6 | 8 | 8 |
| /las-vegas/sewer-line-services/ | 13 | 14 | 14 |

## Risks and notes

- Existing text on `/henderson/water-pipe-repair-replacement/` (and the same on Summerlin): "We also provide water pipe repair and replacement in North Las Vegas." This is the committed source text and the built HTML, not a plan slip. It lists only North Las Vegas as the other city. Left unchanged; a candidate for a separate follow-up.
- `/green-valley/toilet-repair-installation/` now reads: "For full Henderson coverage, see Henderson plumbing services. For Henderson toilet repair and installation, visit our Henderson toilet repair page." Two Henderson-pointing sentences back to back, as approved.
- `docs/seo/route-manifest.json` is still modified by the rebuild and unstaged. `scripts/audit/` is untracked.

## Final rendered paragraphs (built HTML)

### /green-valley/faucet-sink-repair-installation/
BEFORE: We also serve the broader Henderson community and the Las Vegas Valley. For full Henderson coverage, see Henderson plumbing services. For other fixture services in Green Valley, see our toilet repair and installation in Green Valley page.
AFTER:  We also serve the broader Henderson community and the Las Vegas Valley. For full Henderson coverage, see Henderson plumbing services. For other fixture services in Green Valley, see our toilet repair and installation in Green Valley page. For Henderson faucet and sink repair and installation, visit our Henderson faucet and sink page.

### /green-valley/toilet-repair-installation/
BEFORE: We also serve the broader Henderson community and the Las Vegas Valley. For full Henderson coverage, see Henderson plumbing services.
AFTER:  We also serve the broader Henderson community and the Las Vegas Valley. For full Henderson coverage, see Henderson plumbing services. For Henderson toilet repair and installation, visit our Henderson toilet repair page.

### /henderson/water-pipe-repair-replacement/
BEFORE: We also provide water pipe repair and replacement in North Las Vegas. For every service we offer in your community, visit our Henderson plumbing services page.
AFTER:  We also provide water pipe repair and replacement in North Las Vegas. For every service we offer in your community, visit our Henderson plumbing services page. For Las Vegas water pipe repair and replacement, visit our Las Vegas water pipe repair page.

### /summerlin/water-pipe-repair-replacement/
BEFORE: We also provide water pipe repair and replacement in North Las Vegas. For every service we offer in your community, visit our Summerlin plumbing services page.
AFTER:  We also provide water pipe repair and replacement in North Las Vegas. For every service we offer in your community, visit our Summerlin plumbing services page. For Las Vegas water pipe repair and replacement, visit our Las Vegas water pipe repair page.

### /spring-valley/sewer-line-services/
BEFORE: We also provide sewer line services in Summerlin and Enterprise. For every service we offer in your community, visit our Spring Valley plumbing services page.
AFTER:  We also provide sewer line services in Summerlin and Enterprise. For every service we offer in your community, visit our Spring Valley plumbing services page. For Las Vegas sewer line services, visit our Las Vegas sewer line services page.

## Full `git diff -U0 -- app/`

```diff
diff --git a/app/green-valley/faucet-sink-repair-installation/page.tsx b/app/green-valley/faucet-sink-repair-installation/page.tsx
index 72e9953..9bd94eb 100644
--- a/app/green-valley/faucet-sink-repair-installation/page.tsx
+++ b/app/green-valley/faucet-sink-repair-installation/page.tsx
@@ -659,0 +660,8 @@ export default function GreenValleyFaucetSinkPage() {
+                For Henderson faucet and sink repair and installation, visit our{" "}
+                <Link
+                  href="/henderson/faucet-sink-repair-installation/"
+                  className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
+                >
+                  Henderson faucet and sink page
+                </Link>
+                .
diff --git a/app/green-valley/toilet-repair-installation/page.tsx b/app/green-valley/toilet-repair-installation/page.tsx
index fe9555c..7714fdd 100644
--- a/app/green-valley/toilet-repair-installation/page.tsx
+++ b/app/green-valley/toilet-repair-installation/page.tsx
@@ -697,0 +698,8 @@ export default function GreenValleyToiletPage() {
+                For Henderson toilet repair and installation, visit our{" "}
+                <Link
+                  href="/henderson/toilet-repair-installation/"
+                  className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
+                >
+                  Henderson toilet repair page
+                </Link>
+                .
diff --git a/app/henderson/drain-cleaning/page.tsx b/app/henderson/drain-cleaning/page.tsx
index 390e62f..0549d6c 100644
--- a/app/henderson/drain-cleaning/page.tsx
+++ b/app/henderson/drain-cleaning/page.tsx
@@ -577,0 +578,8 @@ export default function HendersonDrainCleaningPage() {
+                For full Henderson plumbing coverage, see our{" "}
+                <Link
+                  href="/henderson-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson plumbing services
+                </Link>{" "}
+                page.
diff --git a/app/henderson/emergency-plumbing/page.tsx b/app/henderson/emergency-plumbing/page.tsx
index e16ee17..ab584de 100644
--- a/app/henderson/emergency-plumbing/page.tsx
+++ b/app/henderson/emergency-plumbing/page.tsx
@@ -526,0 +527,8 @@ export default function HendersonEmergencyPlumbingPage() {
+                For full Henderson plumbing coverage, see our{" "}
+                <Link
+                  href="/henderson-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson plumbing services
+                </Link>{" "}
+                page.
diff --git a/app/henderson/water-heater-repair-installation/page.tsx b/app/henderson/water-heater-repair-installation/page.tsx
index 6ce582b..fd1b601 100644
--- a/app/henderson/water-heater-repair-installation/page.tsx
+++ b/app/henderson/water-heater-repair-installation/page.tsx
@@ -601,0 +602,8 @@ export default function HendersonWaterHeaterPage() {
+                For full Henderson plumbing coverage, see our{" "}
+                <Link
+                  href="/henderson-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson plumbing services
+                </Link>{" "}
+                page.
diff --git a/app/henderson/water-pipe-repair-replacement/page.tsx b/app/henderson/water-pipe-repair-replacement/page.tsx
index 80d3096..02f5efa 100644
--- a/app/henderson/water-pipe-repair-replacement/page.tsx
+++ b/app/henderson/water-pipe-repair-replacement/page.tsx
@@ -224 +224 @@ const AREA_CHIPS = [
-const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/henderson-plumbing-services/", text: "Henderson plumbing services" }, " page."];
+const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/henderson-plumbing-services/", text: "Henderson plumbing services" }, " page. For Las Vegas water pipe repair and replacement, visit our ", { href: "/las-vegas/water-pipe-repair-replacement/", text: "Las Vegas water pipe repair page" }, "."];
diff --git a/app/spring-valley/sewer-line-services/page.tsx b/app/spring-valley/sewer-line-services/page.tsx
index b722dd9..dd0e3b0 100644
--- a/app/spring-valley/sewer-line-services/page.tsx
+++ b/app/spring-valley/sewer-line-services/page.tsx
@@ -211 +211 @@ const AREA_CHIPS = [
-const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide sewer line services in ", { href: "/summerlin/sewer-line-services/", text: "Summerlin" }, " and ", { href: "/enterprise/sewer-line-services/", text: "Enterprise" }, ". For every service we offer in your community, visit our ", { href: "/spring-valley-plumbing-services/", text: "Spring Valley plumbing services" }, " page."];
+const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide sewer line services in ", { href: "/summerlin/sewer-line-services/", text: "Summerlin" }, " and ", { href: "/enterprise/sewer-line-services/", text: "Enterprise" }, ". For every service we offer in your community, visit our ", { href: "/spring-valley-plumbing-services/", text: "Spring Valley plumbing services" }, " page. For Las Vegas sewer line services, visit our ", { href: "/las-vegas/sewer-line-services/", text: "Las Vegas sewer line services page" }, "."];
diff --git a/app/summerlin/water-pipe-repair-replacement/page.tsx b/app/summerlin/water-pipe-repair-replacement/page.tsx
index 0f00de9..39fdfbd 100644
--- a/app/summerlin/water-pipe-repair-replacement/page.tsx
+++ b/app/summerlin/water-pipe-repair-replacement/page.tsx
@@ -225 +225 @@ const AREA_CHIPS = [
-const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/summerlin-plumbing-services/", text: "Summerlin plumbing services" }, " page."];
+const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/summerlin-plumbing-services/", text: "Summerlin plumbing services" }, " page. For Las Vegas water pipe repair and replacement, visit our ", { href: "/las-vegas/water-pipe-repair-replacement/", text: "Las Vegas water pipe repair page" }, "."];
```
