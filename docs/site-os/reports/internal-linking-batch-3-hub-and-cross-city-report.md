# Internal Linking Batch 3: Hub and Cross-City Sentences Report (Las Vegas and North Las Vegas)

Base commit: `4be2470`. Nothing staged, committed, pushed, or deployed.

## Files changed (17) and insertions

21 approved sentences: 11 hub sentences (4 Las Vegas, 7 North Las Vegas) and 10 cross-city sentences. Four North Las Vegas pages (commercial plumbing, repiping, sewer line services, water pipe repair and replacement) carry both. Each insertion is added after the last line of the paragraph in the page's existing service area or neighborhoods section, as the final sentence. No existing text, heading, FAQ, schema, metadata, or image line changed. The only changed (not added) line in the diff is `AREAS_CROSS_LINKS` in `app/las-vegas/water-pipe-repair-replacement/page.tsx`, which is the approved LinkSeg edit.

## Validation

| check | result |
|---|---|
| Diff | 17 app files; 160 added lines plus 1 replaced line (`AREAS_CROSS_LINKS`); 0 other removals |
| Lint, `tsc --noEmit`, build | exit 0, exit 0, exit 0; `check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)` |
| Whole-page visible text, before vs after, 17 pages | one pure insertion on every page; inserted text equals the approved sentence(s) exactly (17 of 17) |
| Space before the new sentence | exactly one space on all 17 pages (paragraph after = paragraph before + one space + approved sentence(s)) |
| New anchors in the edited paragraph | exactly as approved on all 17 pages (href and anchor text) |
| JSON-LD hash, before vs after | identical on all 19 pages (17 edited and 2 controls) |
| Visible text hash on 2 controls | identical |
| `<details>` count | unchanged on all 17 pages |
| Em dash or `--` in added lines | none |

Hashes are SHA-256 cut to 16 hex characters. Edited pages' visible-text hashes change by design; the word-level comparison above shows the change is only the approved sentence(s).

## Contextual inbound (from `out/`)

| target | before | after |
|---|---|---|
| /las-vegas-plumbing-services/ | 39 | 43 |
| /north-las-vegas-plumbing-services/ | 20 | 27 |
| /henderson/backflow-prevention/ | 3 | 4 |
| /henderson/faucet-sink-repair-installation/ | 5 | 6 |
| /henderson/garbage-disposal-repair-installation/ | 4 | 5 |
| /henderson/toilet-repair-installation/ | 4 | 5 |
| /henderson/water-pipe-repair-replacement/ | 7 | 8 |
| /las-vegas/commercial-plumbing/ | 9 | 10 |
| /las-vegas/repiping/ | 11 | 12 |
| /las-vegas/sewer-line-services/ | 12 | 13 |
| /las-vegas/water-pipe-repair-replacement/ | 5 | 6 |
| /las-vegas/toilet-repair-installation/ | 5 | 6 |

## Risks and notes

- The six cross-city Las Vegas pages end with two or three link sentences in one paragraph (Las Vegas hub, Henderson, and on the water pipe page the North Las Vegas and Summerlin list); approved in Gate 2.
- `docs/seo/route-manifest.json` is still modified (rebuild) and unstaged. `scripts/audit/` is untracked.
- Henderson, Green Valley, Spring Valley and Summerlin pages are the next cluster and are not touched.

## Edited paragraph, before and after (built HTML)

### /las-vegas/drain-cleaning/
BEFORE: Red Carpet Plumbing provides drain cleaning throughout Las Vegas, NV, including Downtown Las Vegas, the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, and surrounding neighborhoods. We also provide drain cleaning throughout the Las Vegas Valley, including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise.
AFTER:  Red Carpet Plumbing provides drain cleaning throughout Las Vegas, NV, including Downtown Las Vegas, the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, and surrounding neighborhoods. We also provide drain cleaning throughout the Las Vegas Valley, including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.

### /las-vegas/emergency-plumbing/
BEFORE: Red Carpet Plumbing responds to plumbing emergencies throughout Las Vegas and the surrounding Las Vegas Valley. We also serve Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, and Lake Las Vegas.
AFTER:  Red Carpet Plumbing responds to plumbing emergencies throughout Las Vegas and the surrounding Las Vegas Valley. We also serve Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, and Lake Las Vegas. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.

### /las-vegas/leak-detection-repair/
BEFORE: Red Carpet Plumbing provides leak detection and repair throughout Las Vegas, NV, including the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, Downtown Las Vegas, and surrounding neighborhoods. Older Las Vegas neighborhoods built from the 1970s through the early 1990s carry the highest hidden leak risk due to decades of hard water pipe exposure. We also serve the broader Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise.
AFTER:  Red Carpet Plumbing provides leak detection and repair throughout Las Vegas, NV, including the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, Downtown Las Vegas, and surrounding neighborhoods. Older Las Vegas neighborhoods built from the 1970s through the early 1990s carry the highest hidden leak risk due to decades of hard water pipe exposure. We also serve the broader Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.

### /las-vegas/water-heater-repair-installation/
BEFORE: Red Carpet Plumbing provides water heater repair and installation throughout Las Vegas, NV, including the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, Downtown Las Vegas, and surrounding neighborhoods. We also serve the broader Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise.
AFTER:  Red Carpet Plumbing provides water heater repair and installation throughout Las Vegas, NV, including the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, Downtown Las Vegas, and surrounding neighborhoods. We also serve the broader Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.

### /las-vegas/backflow-prevention/
BEFORE: We commonly serve Las Vegas properties that have received compliance notices from LVVWD, properties adding irrigation systems requiring backflow protection, and commercial properties with annual containment device testing and maintenance needs. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.
AFTER:  We commonly serve Las Vegas properties that have received compliance notices from LVVWD, properties adding irrigation systems requiring backflow protection, and commercial properties with annual containment device testing and maintenance needs. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub. For Henderson backflow prevention service, visit our Henderson backflow prevention page.

### /las-vegas/faucet-sink-repair-installation/
BEFORE: We commonly service older Las Vegas homes where original compression faucets and corroded under-sink valves need replacement, as well as newer properties where kitchen and bathroom faucet upgrades and new sink installations are part of renovation projects. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.
AFTER:  We commonly service older Las Vegas homes where original compression faucets and corroded under-sink valves need replacement, as well as newer properties where kitchen and bathroom faucet upgrades and new sink installations are part of renovation projects. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub. For Henderson faucet and sink repair and installation, visit our Henderson faucet and sink page.

### /las-vegas/garbage-disposal-repair-installation/
BEFORE: We commonly service Las Vegas kitchens in older tract homes where original disposal units are approaching end of life, and high-use investment and rental properties where proactive replacement prevents inconvenient failures. For kitchen drain and faucet service, see faucet and sink repair in Las Vegas. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.
AFTER:  We commonly service Las Vegas kitchens in older tract homes where original disposal units are approaching end of life, and high-use investment and rental properties where proactive replacement prevents inconvenient failures. For kitchen drain and faucet service, see faucet and sink repair in Las Vegas. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub. For Henderson garbage disposal repair and installation, visit our Henderson garbage disposal page.

### /las-vegas/toilet-repair-installation/
BEFORE: We commonly serve older Las Vegas neighborhoods where original toilet fixtures and aging wax rings are most likely to need service, as well as newer communities where new toilet installation and replacement are part of renovation and upgrade projects. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub.
AFTER:  We commonly serve older Las Vegas neighborhoods where original toilet fixtures and aging wax rings are most likely to need service, as well as newer communities where new toilet installation and replacement are part of renovation and upgrade projects. For all Las Vegas plumbing services, visit our Las Vegas plumbing services hub. For Henderson toilet repair and installation, visit our Henderson toilet repair page.

### /las-vegas/water-pipe-repair-replacement/
BEFORE: We also provide water pipe repair and replacement in North Las Vegas and Summerlin. For every service we offer in your community, visit our Las Vegas plumbing services page.
AFTER:  We also provide water pipe repair and replacement in North Las Vegas and Summerlin. For every service we offer in your community, visit our Las Vegas plumbing services page. For Henderson water pipe repair and replacement, visit our Henderson water pipe repair page.

### /north-las-vegas/commercial-plumbing/
BEFORE: Red Carpet Plumbing provides commercial plumbing services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area.
AFTER:  Red Carpet Plumbing provides commercial plumbing services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub. For Las Vegas commercial plumbing service, visit our Las Vegas commercial plumbing page.

### /north-las-vegas/repiping/
BEFORE: Red Carpet Plumbing provides repiping services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area.
AFTER:  Red Carpet Plumbing provides repiping services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub. For Las Vegas repiping service, visit our Las Vegas repiping page.

### /north-las-vegas/sewer-line-services/
BEFORE: Red Carpet Plumbing provides sewer line services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area.
AFTER:  Red Carpet Plumbing provides sewer line services throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub. For Las Vegas sewer line services, visit our Las Vegas sewer line services page.

### /north-las-vegas/water-pipe-repair-replacement/
BEFORE: Red Carpet Plumbing provides water pipe repair and replacement throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area.
AFTER:  Red Carpet Plumbing provides water pipe repair and replacement throughout North Las Vegas, NV, including ZIP codes 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. We also serve the North Las Vegas Aliante Area. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub. For Las Vegas water pipe repair and replacement, visit our Las Vegas water pipe repair page.

### /north-las-vegas/drain-cleaning/
BEFORE: Red Carpet Plumbing provides drain cleaning throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, Simmons Street, and surrounding neighborhoods. We also serve the broader Las Vegas Valley.
AFTER:  Red Carpet Plumbing provides drain cleaning throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, Simmons Street, and surrounding neighborhoods. We also serve the broader Las Vegas Valley. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub.

### /north-las-vegas/emergency-plumbing/
BEFORE: Red Carpet Plumbing responds to plumbing emergencies throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, and surrounding neighborhoods. We also provide emergency plumbing across Las Vegas and the broader Las Vegas Valley.
AFTER:  Red Carpet Plumbing responds to plumbing emergencies throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, and surrounding neighborhoods. We also provide emergency plumbing across Las Vegas and the broader Las Vegas Valley. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub.

### /north-las-vegas/water-heater-repair-installation/
BEFORE: Red Carpet Plumbing provides water heater repair and installation throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, and surrounding neighborhoods and commercial corridors.
AFTER:  Red Carpet Plumbing provides water heater repair and installation throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas, the Craig Road corridor, the Cheyenne area, the Carey area, Losee Road, and surrounding neighborhoods and commercial corridors. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub.

### /north-las-vegas/toilet-repair-installation/
BEFORE: Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, including 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub.
AFTER:  Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, including 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087. For the full list of plumbing services available in North Las Vegas, visit our North Las Vegas plumbing services hub. For Las Vegas toilet repair and installation, visit our Las Vegas toilet repair page.


## Full `git diff -U0 -- app/`

```diff
diff --git a/app/las-vegas/backflow-prevention/page.tsx b/app/las-vegas/backflow-prevention/page.tsx
index 4b13f2e..1002775 100644
--- a/app/las-vegas/backflow-prevention/page.tsx
+++ b/app/las-vegas/backflow-prevention/page.tsx
@@ -702,0 +703,8 @@ export default function LasVegasBackflowPreventionPage() {
+                For Henderson backflow prevention service, visit our{" "}
+                <Link
+                  href="/henderson/backflow-prevention/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson backflow prevention page
+                </Link>
+                .
diff --git a/app/las-vegas/drain-cleaning/page.tsx b/app/las-vegas/drain-cleaning/page.tsx
index bb61186..6bdd9ec 100644
--- a/app/las-vegas/drain-cleaning/page.tsx
+++ b/app/las-vegas/drain-cleaning/page.tsx
@@ -567,0 +568,8 @@ export default function LasVegasDrainCleaningPage() {
+                For all Las Vegas plumbing services, visit our{" "}
+                <Link
+                  href="/las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/las-vegas/emergency-plumbing/page.tsx b/app/las-vegas/emergency-plumbing/page.tsx
index 90ea5c2..927217d 100644
--- a/app/las-vegas/emergency-plumbing/page.tsx
+++ b/app/las-vegas/emergency-plumbing/page.tsx
@@ -524,0 +525,8 @@ export default function LasVegasEmergencyPlumbingPage() {
+                For all Las Vegas plumbing services, visit our{" "}
+                <Link
+                  href="/las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/las-vegas/faucet-sink-repair-installation/page.tsx b/app/las-vegas/faucet-sink-repair-installation/page.tsx
index 653fdb6..99c91d9 100644
--- a/app/las-vegas/faucet-sink-repair-installation/page.tsx
+++ b/app/las-vegas/faucet-sink-repair-installation/page.tsx
@@ -678,0 +679,8 @@ export default function LasVegasFaucetSinkPage() {
+                For Henderson faucet and sink repair and installation, visit our{" "}
+                <Link
+                  href="/henderson/faucet-sink-repair-installation/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson faucet and sink page
+                </Link>
+                .
diff --git a/app/las-vegas/garbage-disposal-repair-installation/page.tsx b/app/las-vegas/garbage-disposal-repair-installation/page.tsx
index 42ac396..9114cff 100644
--- a/app/las-vegas/garbage-disposal-repair-installation/page.tsx
+++ b/app/las-vegas/garbage-disposal-repair-installation/page.tsx
@@ -700,0 +701,8 @@ export default function LasVegasGarbageDisposalPage() {
+                For Henderson garbage disposal repair and installation, visit our{" "}
+                <Link
+                  href="/henderson/garbage-disposal-repair-installation/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson garbage disposal page
+                </Link>
+                .
diff --git a/app/las-vegas/leak-detection-repair/page.tsx b/app/las-vegas/leak-detection-repair/page.tsx
index 7572aec..a9ff49e 100644
--- a/app/las-vegas/leak-detection-repair/page.tsx
+++ b/app/las-vegas/leak-detection-repair/page.tsx
@@ -627,0 +628,8 @@ export default function LasVegasLeakDetectionPage() {
+                For all Las Vegas plumbing services, visit our{" "}
+                <Link
+                  href="/las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/las-vegas/toilet-repair-installation/page.tsx b/app/las-vegas/toilet-repair-installation/page.tsx
index 9b2ec7f..c24cb91 100644
--- a/app/las-vegas/toilet-repair-installation/page.tsx
+++ b/app/las-vegas/toilet-repair-installation/page.tsx
@@ -661,0 +662,8 @@ export default function LasVegasToiletPage() {
+                For Henderson toilet repair and installation, visit our{" "}
+                <Link
+                  href="/henderson/toilet-repair-installation/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Henderson toilet repair page
+                </Link>
+                .
diff --git a/app/las-vegas/water-heater-repair-installation/page.tsx b/app/las-vegas/water-heater-repair-installation/page.tsx
index 8d3589a..3cd5dd4 100644
--- a/app/las-vegas/water-heater-repair-installation/page.tsx
+++ b/app/las-vegas/water-heater-repair-installation/page.tsx
@@ -604,0 +605,8 @@ export default function LasVegasWaterHeaterPage() {
+                For all Las Vegas plumbing services, visit our{" "}
+                <Link
+                  href="/las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/las-vegas/water-pipe-repair-replacement/page.tsx b/app/las-vegas/water-pipe-repair-replacement/page.tsx
index e4f4e60..3abc507 100644
--- a/app/las-vegas/water-pipe-repair-replacement/page.tsx
+++ b/app/las-vegas/water-pipe-repair-replacement/page.tsx
@@ -225 +225 @@ const AREA_CHIPS = [
-const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, " and ", { href: "/summerlin/water-pipe-repair-replacement/", text: "Summerlin" }, ". For every service we offer in your community, visit our ", { href: "/las-vegas-plumbing-services/", text: "Las Vegas plumbing services" }, " page."];
+const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, " and ", { href: "/summerlin/water-pipe-repair-replacement/", text: "Summerlin" }, ". For every service we offer in your community, visit our ", { href: "/las-vegas-plumbing-services/", text: "Las Vegas plumbing services" }, " page. For Henderson water pipe repair and replacement, visit our ", { href: "/henderson/water-pipe-repair-replacement/", text: "Henderson water pipe repair page" }, "."];
diff --git a/app/north-las-vegas/commercial-plumbing/page.tsx b/app/north-las-vegas/commercial-plumbing/page.tsx
index 4088d09..e1a37ea 100644
--- a/app/north-las-vegas/commercial-plumbing/page.tsx
+++ b/app/north-las-vegas/commercial-plumbing/page.tsx
@@ -585,0 +586,16 @@ export default function NorthLasVegasCommercialPlumbingPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className={LINK_CLASS}
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
+                For Las Vegas commercial plumbing service, visit our{" "}
+                <Link
+                  href="/las-vegas/commercial-plumbing/"
+                  className={LINK_CLASS}
+                >
+                  Las Vegas commercial plumbing page
+                </Link>
+                .
diff --git a/app/north-las-vegas/drain-cleaning/page.tsx b/app/north-las-vegas/drain-cleaning/page.tsx
index e625629..6fbf1b5 100644
--- a/app/north-las-vegas/drain-cleaning/page.tsx
+++ b/app/north-las-vegas/drain-cleaning/page.tsx
@@ -575,0 +576,8 @@ export default function NorthLasVegasDrainCleaningPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/north-las-vegas/emergency-plumbing/page.tsx b/app/north-las-vegas/emergency-plumbing/page.tsx
index 75393ec..d6e2a6a 100644
--- a/app/north-las-vegas/emergency-plumbing/page.tsx
+++ b/app/north-las-vegas/emergency-plumbing/page.tsx
@@ -640,0 +641,8 @@ export default function NorthLasVegasEmergencyPlumbingPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/north-las-vegas/repiping/page.tsx b/app/north-las-vegas/repiping/page.tsx
index 425e219..38708a4 100644
--- a/app/north-las-vegas/repiping/page.tsx
+++ b/app/north-las-vegas/repiping/page.tsx
@@ -567,0 +568,16 @@ export default function NorthLasVegasRepipingPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className={LINK_CLASS}
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
+                For Las Vegas repiping service, visit our{" "}
+                <Link
+                  href="/las-vegas/repiping/"
+                  className={LINK_CLASS}
+                >
+                  Las Vegas repiping page
+                </Link>
+                .
diff --git a/app/north-las-vegas/sewer-line-services/page.tsx b/app/north-las-vegas/sewer-line-services/page.tsx
index a1cf6fe..8b05f79 100644
--- a/app/north-las-vegas/sewer-line-services/page.tsx
+++ b/app/north-las-vegas/sewer-line-services/page.tsx
@@ -551,0 +552,16 @@ export default function NorthLasVegasSewerLinePage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className={LINK_CLASS}
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
+                For Las Vegas sewer line services, visit our{" "}
+                <Link
+                  href="/las-vegas/sewer-line-services/"
+                  className={LINK_CLASS}
+                >
+                  Las Vegas sewer line services page
+                </Link>
+                .
diff --git a/app/north-las-vegas/toilet-repair-installation/page.tsx b/app/north-las-vegas/toilet-repair-installation/page.tsx
index 46bfe8f..770783f 100644
--- a/app/north-las-vegas/toilet-repair-installation/page.tsx
+++ b/app/north-las-vegas/toilet-repair-installation/page.tsx
@@ -709,0 +710,8 @@ export default function NorthLasVegasToiletRepairInstallationPage() {
+                For Las Vegas toilet repair and installation, visit our{" "}
+                <Link
+                  href="/las-vegas/toilet-repair-installation/"
+                  className={LINK_CLASS}
+                >
+                  Las Vegas toilet repair page
+                </Link>
+                .
diff --git a/app/north-las-vegas/water-heater-repair-installation/page.tsx b/app/north-las-vegas/water-heater-repair-installation/page.tsx
index 14ee8f1..d585e0e 100644
--- a/app/north-las-vegas/water-heater-repair-installation/page.tsx
+++ b/app/north-las-vegas/water-heater-repair-installation/page.tsx
@@ -614,0 +615,8 @@ export default function NorthLasVegasWaterHeaterPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
diff --git a/app/north-las-vegas/water-pipe-repair-replacement/page.tsx b/app/north-las-vegas/water-pipe-repair-replacement/page.tsx
index 780522a..e016c24 100644
--- a/app/north-las-vegas/water-pipe-repair-replacement/page.tsx
+++ b/app/north-las-vegas/water-pipe-repair-replacement/page.tsx
@@ -545,0 +546,16 @@ export default function NorthLasVegasWaterPipeRepairReplacementPage() {
+                For the full list of plumbing services available in North Las Vegas, visit our{" "}
+                <Link
+                  href="/north-las-vegas-plumbing-services/"
+                  className={LINK_CLASS}
+                >
+                  North Las Vegas plumbing services
+                </Link>{" "}
+                hub.
+                For Las Vegas water pipe repair and replacement, visit our{" "}
+                <Link
+                  href="/las-vegas/water-pipe-repair-replacement/"
+                  className={LINK_CLASS}
+                >
+                  Las Vegas water pipe repair page
+                </Link>
+                .
```
