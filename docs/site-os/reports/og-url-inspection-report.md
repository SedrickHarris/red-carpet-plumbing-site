# Missing og:url Inspection (Gate 1, Inspect and Report Only)

Date: 2026-10-28. Local HEAD: a259d5d. Nothing was edited, built, staged, committed, pushed, or deployed in this gate. The only file created is this report.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, em dashes (in git commit titles) are shown as [em dash]. Nothing else was altered.

## 1. Summary (verified counts only)

- 16 of 139 built HTML files have no og:url. 12 are indexable pages and 4 are noindex pages (/404.html, /404/, /_not-found/, /thank-you/). This matches the earlier audit.
- Cause for all 12 indexable pages: the page's own `openGraph` object contains only `title`, `description`, and `images`. There is no `url`, `siteName`, or `type` key. Because of that, the same 16 pages also lack og:site_name and og:type (matrix in Section 5), not just og:url.
- Nothing is dropped from the layout: app/layout.tsx sets no openGraph and no twitter metadata, so there is nothing to inherit. No page uses generateMetadata or a shared metadata helper (rg found none). The only shared piece is `OG_IMAGES` in lib/social-image.ts, which supplies images only.
- History: none of the 12 files has ever contained an og url or a siteName (git log -S shows 0 commits for both on all 12). They were all created on 2026-06-01 (about in a81d0d4, the other 11 in b006b52) with a title and description only openGraph. The sitewide commit 489c0f2 on 2026-10-13 added `images` to them and did not add a url.
- In source, 135 page.tsx files have an openGraph block. 123 contain a `url` and 12 do not. The 12 without are exactly the 12 pages listed. app/thank-you/page.tsx is the only page.tsx with no openGraph block.
- The 4 noindex pages are not defects. They define no openGraph in source and show Next.js fallback tags built from the title, description and the app/opengraph-image file convention.
- For each of the 12, the canonical in the built HTML equals the canonical string in the source, so the value that would be used for og:url is that same string (Section 3).
- Earlier finding about no Twitter card tags and no social image is out of date. In the current build, twitter:card, twitter:title, twitter:description, twitter:image, og:image, og:title and og:description are present on all 139 pages (0 pages lack any of them).
- Other page types are not affected: every page missing og:url is in the list of 16. Location hubs, neighborhood pages and service-location pages all have og:url.

## 2. Is out/ current? (raw)

The task said to rebuild only if out/ is missing or older than HEAD. out/ was built at 15:35, before the last two commits (15:38 and 15:49). Those commits added only public/_headers (already included in the build, out/_headers exists) and files under docs/site-os/reports. No source file changed after the build, so no rebuild was done.

Freshness check, part 1 of 1 (lines 1 to 15)

```text
$ stat -c "%y %n" out out/index.html out/_headers
2026-10-28 15:35:18.605412700 -0700 out
2026-10-28 15:35:11.368546200 -0700 out/index.html
2026-10-28 15:34:29.725078800 -0700 out/_headers

$ git log -3 [dbl-hyphen]format="%h %cd %s" [dbl-hyphen]date=iso
a259d5d 2026-10-28 15:49:52 -0700 Track noindex and pages.dev audit reports
792bba2 2026-10-28 15:38:55 -0700 Add noindex header for pages.dev hosts
948771f 2026-10-13 20:07:22 -0700 seo: omit sitemap lastmod when git history is shallow

$ git diff [dbl-hyphen]name-only 948771f HEAD | rg -v "^docs/site-os/reports/"
public/_headers

$ find out -name "*.html" | wc -l
139
```


## 3. The 12 indexable pages: route, source, cause, canonical, proposed og:url

| Route | Source file | Cause | Canonical (built HTML and source match) | Proposed og:url |
|-|-|-|-|-|
| /about/ | app/about/page.tsx | openGraph lines 23-29 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/about/ | https://redcarpetplumbing.com/about/ |
| /backflow-prevention/ | app/backflow-prevention/page.tsx | openGraph lines 31-37 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/backflow-prevention/ | https://redcarpetplumbing.com/backflow-prevention/ |
| /commercial-plumbing/ | app/commercial-plumbing/page.tsx | openGraph lines 25-30 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/commercial-plumbing/ | https://redcarpetplumbing.com/commercial-plumbing/ |
| /faucet-sink-repair-installation/ | app/faucet-sink-repair-installation/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/faucet-sink-repair-installation/ | https://redcarpetplumbing.com/faucet-sink-repair-installation/ |
| /garbage-disposal-repair-installation/ | app/garbage-disposal-repair-installation/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/garbage-disposal-repair-installation/ | https://redcarpetplumbing.com/garbage-disposal-repair-installation/ |
| /gas-line-plumbing/ | app/gas-line-plumbing/page.tsx | openGraph lines 25-30 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/gas-line-plumbing/ | https://redcarpetplumbing.com/gas-line-plumbing/ |
| /plumbing-fixture-repair-replacement-installation/ | app/plumbing-fixture-repair-replacement-installation/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/ | https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/ |
| /toilet-repair-installation/ | app/toilet-repair-installation/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/toilet-repair-installation/ | https://redcarpetplumbing.com/toilet-repair-installation/ |
| /trenchless-piping/ | app/trenchless-piping/page.tsx | openGraph lines 26-32 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/trenchless-piping/ | https://redcarpetplumbing.com/trenchless-piping/ |
| /video-camera-plumbing-inspections/ | app/video-camera-plumbing-inspections/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/video-camera-plumbing-inspections/ | https://redcarpetplumbing.com/video-camera-plumbing-inspections/ |
| /water-meter-pressure-regulator-services/ | app/water-meter-pressure-regulator-services/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/water-meter-pressure-regulator-services/ | https://redcarpetplumbing.com/water-meter-pressure-regulator-services/ |
| /water-pipe-repair-replacement/ | app/water-pipe-repair-replacement/page.tsx | openGraph lines 27-33 has title, description, images only; no url, siteName, or type | https://redcarpetplumbing.com/water-pipe-repair-replacement/ | https://redcarpetplumbing.com/water-pipe-repair-replacement/ |

For all 12, the canonical in the built HTML equals the canonical string in the page source (checked by script, Section 4 output shows both lines per page).

## 4. Raw output per page: built og and twitter tags, and the source openGraph block

Controls (pages that do have og:url): /contact/ (core page), /drain-cleaning/ (core service page), /las-vegas/drain-cleaning/ (service-location page). Each section shows the source file, the metadata export line range, the built tags, the numbered openGraph block, and both canonicals.

Per-page output, part 1 of 9 (lines 1 to 60)

```text
##### MISSING og:url: /about/
source file: app/about/page.tsx
metadata export at lines 15 to 30; openGraph block lines 23 to 29

[dbl-hyphen]- built og:* and twitter:* tags (from out/about/index.html)
<meta property="og:title" content="About Red Carpet Plumbing | Las Vegas Plumbing Company"/>
<meta property="og:description" content="Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="About Red Carpet Plumbing | Las Vegas Plumbing Company"/>
<meta name="twitter:description" content="Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/about/page.tsx, with line numbers)
  23:   openGraph: {
  24:     title:
  25:       "About Red Carpet Plumbing | Las Vegas Plumbing Company",
  26:     description:
  27:       "Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.",
  28:     images: OG_IMAGES,
  29:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/about/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/about/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /backflow-prevention/
source file: app/backflow-prevention/page.tsx
metadata export at lines 23 to 38; openGraph block lines 31 to 37

[dbl-hyphen]- built og:* and twitter:* tags (from out/backflow-prevention/index.html)
<meta property="og:title" content="Backflow Prevention Services in Las Vegas, NV"/>
<meta property="og:description" content="Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Backflow Prevention Services in Las Vegas, NV"/>
<meta name="twitter:description" content="Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/backflow-prevention/page.tsx, with line numbers)
  31:   openGraph: {
  32:     title:
  33:       "Backflow Prevention Services in Las Vegas, NV",
  34:     description:
  35:       "Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.",
  36:     images: OG_IMAGES,
```

Per-page output, part 2 of 9 (lines 61 to 120)

```text
  37:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/backflow-prevention/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/backflow-prevention/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /commercial-plumbing/
source file: app/commercial-plumbing/page.tsx
metadata export at lines 18 to 31; openGraph block lines 25 to 30

[dbl-hyphen]- built og:* and twitter:* tags (from out/commercial-plumbing/index.html)
<meta property="og:title" content="Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/commercial-plumbing/page.tsx, with line numbers)
  25:   openGraph: {
  26:     title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27:     description:
  28:       "Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.",
  29:     images: OG_IMAGES,
  30:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/commercial-plumbing/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/commercial-plumbing/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /faucet-sink-repair-installation/
source file: app/faucet-sink-repair-installation/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/faucet-sink-repair-installation/index.html)
<meta property="og:title" content="Faucet and Sink Repair and Installation in Las Vegas, NV"/>
<meta property="og:description" content="Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Faucet and Sink Repair and Installation in Las Vegas, NV"/>
<meta name="twitter:description" content="Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/faucet-sink-repair-installation/page.tsx, with line numbers)
  27:   openGraph: {
```

Per-page output, part 3 of 9 (lines 121 to 180)

```text
  28:     title:
  29:       "Faucet and Sink Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/faucet-sink-repair-installation/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/faucet-sink-repair-installation/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /garbage-disposal-repair-installation/
source file: app/garbage-disposal-repair-installation/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/garbage-disposal-repair-installation/index.html)
<meta property="og:title" content="Garbage Disposal Repair and Installation in Las Vegas, NV"/>
<meta property="og:description" content="Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Garbage Disposal Repair and Installation in Las Vegas, NV"/>
<meta name="twitter:description" content="Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/garbage-disposal-repair-installation/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Garbage Disposal Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/garbage-disposal-repair-installation/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/garbage-disposal-repair-installation/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /gas-line-plumbing/
source file: app/gas-line-plumbing/page.tsx
metadata export at lines 18 to 31; openGraph block lines 25 to 30

[dbl-hyphen]- built og:* and twitter:* tags (from out/gas-line-plumbing/index.html)
<meta property="og:title" content="Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
```

Per-page output, part 4 of 9 (lines 181 to 240)

```text
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/gas-line-plumbing/page.tsx, with line numbers)
  25:   openGraph: {
  26:     title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27:     description:
  28:       "Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.",
  29:     images: OG_IMAGES,
  30:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/gas-line-plumbing/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/gas-line-plumbing/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /plumbing-fixture-repair-replacement-installation/
source file: app/plumbing-fixture-repair-replacement-installation/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/plumbing-fixture-repair-replacement-installation/index.html)
<meta property="og:title" content="Plumbing Fixture Repair and Installation in Las Vegas, NV"/>
<meta property="og:description" content="Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Plumbing Fixture Repair and Installation in Las Vegas, NV"/>
<meta name="twitter:description" content="Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/plumbing-fixture-repair-replacement-installation/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Plumbing Fixture Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /toilet-repair-installation/
source file: app/toilet-repair-installation/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/toilet-repair-installation/index.html)
<meta property="og:title" content="Toilet Repair and Installation in Las Vegas, NV"/>
<meta property="og:description" content="Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
```

Per-page output, part 5 of 9 (lines 241 to 300)

```text
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Toilet Repair and Installation in Las Vegas, NV"/>
<meta name="twitter:description" content="Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/toilet-repair-installation/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Toilet Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/toilet-repair-installation/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/toilet-repair-installation/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /trenchless-piping/
source file: app/trenchless-piping/page.tsx
metadata export at lines 18 to 33; openGraph block lines 26 to 32

[dbl-hyphen]- built og:* and twitter:* tags (from out/trenchless-piping/index.html)
<meta property="og:title" content="Trenchless Piping Services in Las Vegas, NV"/>
<meta property="og:description" content="Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Trenchless Piping Services in Las Vegas, NV"/>
<meta name="twitter:description" content="Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/trenchless-piping/page.tsx, with line numbers)
  26:   openGraph: {
  27:     title:
  28:       "Trenchless Piping Services in Las Vegas, NV",
  29:     description:
  30:       "Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.",
  31:     images: OG_IMAGES,
  32:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/trenchless-piping/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/trenchless-piping/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /video-camera-plumbing-inspections/
source file: app/video-camera-plumbing-inspections/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/video-camera-plumbing-inspections/index.html)
```

Per-page output, part 6 of 9 (lines 301 to 360)

```text
<meta property="og:title" content="Video Camera Plumbing Inspections in Las Vegas, NV"/>
<meta property="og:description" content="Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Video Camera Plumbing Inspections in Las Vegas, NV"/>
<meta name="twitter:description" content="Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/video-camera-plumbing-inspections/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Video Camera Plumbing Inspections in Las Vegas, NV",
  30:     description:
  31:       "Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/video-camera-plumbing-inspections/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/video-camera-plumbing-inspections/
[dbl-hyphen]- built og:url present: false

##### MISSING og:url: /water-meter-pressure-regulator-services/
source file: app/water-meter-pressure-regulator-services/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/water-meter-pressure-regulator-services/index.html)
<meta property="og:title" content="Water Meter and Pressure Regulator Services in Las Vegas, NV"/>
<meta property="og:description" content="Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Water Meter and Pressure Regulator Services in Las Vegas, NV"/>
<meta name="twitter:description" content="Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/water-meter-pressure-regulator-services/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Water Meter and Pressure Regulator Services in Las Vegas, NV",
  30:     description:
  31:       "Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/water-meter-pressure-regulator-services/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/water-meter-pressure-regulator-services/
[dbl-hyphen]- built og:url present: false
```

Per-page output, part 7 of 9 (lines 361 to 420)

```text

##### MISSING og:url: /water-pipe-repair-replacement/
source file: app/water-pipe-repair-replacement/page.tsx
metadata export at lines 18 to 34; openGraph block lines 27 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/water-pipe-repair-replacement/index.html)
<meta property="og:title" content="Water Pipe Repair and Replacement in Las Vegas, NV"/>
<meta property="og:description" content="Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Water Pipe Repair and Replacement in Las Vegas, NV"/>
<meta name="twitter:description" content="Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/water-pipe-repair-replacement/page.tsx, with line numbers)
  27:   openGraph: {
  28:     title:
  29:       "Water Pipe Repair and Replacement in Las Vegas, NV",
  30:     description:
  31:       "Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/water-pipe-repair-replacement/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/water-pipe-repair-replacement/
[dbl-hyphen]- built og:url present: false

##### HAS og:url (control): /contact/
source file: app/contact/page.tsx
metadata export at lines 15 to 33; openGraph block lines 22 to 31

[dbl-hyphen]- built og:* and twitter:* tags (from out/contact/index.html)
<meta property="og:title" content="Contact a Las Vegas Plumber | Red Carpet Plumbing"/>
<meta property="og:description" content="Contact Red Carpet Plumbing for residential and commercial plumbing in Las Vegas. Call (702) 567-9172 or submit a service request online."/>
<meta property="og:url" content="https://redcarpetplumbing.com/contact/"/>
<meta property="og:site_name" content="Red Carpet Plumbing"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Contact a Las Vegas Plumber | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Contact Red Carpet Plumbing for residential and commercial plumbing in Las Vegas. Call (702) 567-9172 or submit a service request online."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/contact/page.tsx, with line numbers)
  22:   openGraph: {
```

Per-page output, part 8 of 9 (lines 421 to 480)

```text
  23:     title: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
  24:     description:
  25:       "Contact Red Carpet Plumbing for residential and commercial plumbing in Las Vegas. Call (702) 567-9172 or submit a service request online.",
  26:     url: "https://redcarpetplumbing.com/contact/",
  27:     siteName: "Red Carpet Plumbing",
  28:     locale: "en_US",
  29:     type: "website",
  30:     images: OG_IMAGES,
  31:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/contact/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/contact/
[dbl-hyphen]- built og:url present: true

##### HAS og:url (control): /drain-cleaning/
source file: app/drain-cleaning/page.tsx
metadata export at lines 18 to 34; openGraph block lines 25 to 33

[dbl-hyphen]- built og:* and twitter:* tags (from out/drain-cleaning/index.html)
<meta property="og:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Drain cleaning in Las Vegas and the Valley. Kitchen and bathroom drains, main sewer lines, hydro jetting. Licensed, 4.8-star rated. Call (702) 567-9172."/>
<meta property="og:url" content="https://redcarpetplumbing.com/drain-cleaning/"/>
<meta property="og:site_name" content="Red Carpet Plumbing"/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Drain cleaning in Las Vegas and the Valley. Kitchen and bathroom drains, main sewer lines, hydro jetting. Licensed, 4.8-star rated. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/drain-cleaning/page.tsx, with line numbers)
  25:   openGraph: {
  26:     title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  27:     description:
  28:       "Drain cleaning in Las Vegas and the Valley. Kitchen and bathroom drains, main sewer lines, hydro jetting. Licensed, 4.8-star rated. Call (702) 567-9172.",
  29:     url: "https://redcarpetplumbing.com/drain-cleaning/",
  30:     siteName: "Red Carpet Plumbing",
  31:     type: "website",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/drain-cleaning/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/drain-cleaning/
[dbl-hyphen]- built og:url present: true

##### HAS og:url (control): /las-vegas/drain-cleaning/
source file: app/las-vegas/drain-cleaning/page.tsx
metadata export at lines 24 to 45; openGraph block lines 34 to 43

[dbl-hyphen]- built og:* and twitter:* tags (from out/las-vegas/drain-cleaning/index.html)
<meta property="og:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers. Call (702) 567-9172."/>
<meta property="og:url" content="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>
```

Per-page output, part 9 of 9 (lines 481 to 511)

```text
<meta property="og:site_name" content="Red Carpet Plumbing"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers. Call (702) 567-9172."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>

[dbl-hyphen]- source openGraph block (file app/las-vegas/drain-cleaning/page.tsx, with line numbers)
  34:   openGraph: {
  35:     title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  36:     description:
  37:       "Drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers. Call (702) 567-9172.",
  38:     url: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
  39:     siteName: "Red Carpet Plumbing",
  40:     locale: "en_US",
  41:     type: "website",
  42:     images: OG_IMAGES,
  43:   },

[dbl-hyphen]- canonical in built HTML: https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[dbl-hyphen]- canonical in source:     https://redcarpetplumbing.com/las-vegas/drain-cleaning/
[dbl-hyphen]- built og:url present: true
```


### 4.1 Cause table (script output)

| Route | Group | Source | openGraph lines | url in source | siteName in source | type in source | locale in source | images in source | og:url built | Canonical built equals source |
|-|-|-|-|-|-|-|-|-|-|-|
| /about/ | MISSING og:url | app/about/page.tsx | 23-29 | false | false | false | false | true | false | true |
| /backflow-prevention/ | MISSING og:url | app/backflow-prevention/page.tsx | 31-37 | false | false | false | false | true | false | true |
| /commercial-plumbing/ | MISSING og:url | app/commercial-plumbing/page.tsx | 25-30 | false | false | false | false | true | false | true |
| /faucet-sink-repair-installation/ | MISSING og:url | app/faucet-sink-repair-installation/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /garbage-disposal-repair-installation/ | MISSING og:url | app/garbage-disposal-repair-installation/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /gas-line-plumbing/ | MISSING og:url | app/gas-line-plumbing/page.tsx | 25-30 | false | false | false | false | true | false | true |
| /plumbing-fixture-repair-replacement-installation/ | MISSING og:url | app/plumbing-fixture-repair-replacement-installation/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /toilet-repair-installation/ | MISSING og:url | app/toilet-repair-installation/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /trenchless-piping/ | MISSING og:url | app/trenchless-piping/page.tsx | 26-32 | false | false | false | false | true | false | true |
| /video-camera-plumbing-inspections/ | MISSING og:url | app/video-camera-plumbing-inspections/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /water-meter-pressure-regulator-services/ | MISSING og:url | app/water-meter-pressure-regulator-services/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /water-pipe-repair-replacement/ | MISSING og:url | app/water-pipe-repair-replacement/page.tsx | 27-33 | false | false | false | false | true | false | true |
| /contact/ | HAS og:url (control) | app/contact/page.tsx | 22-31 | true | true | true | true | true | true | true |
| /drain-cleaning/ | HAS og:url (control) | app/drain-cleaning/page.tsx | 25-33 | true | true | true | false | true | true | true |
| /las-vegas/drain-cleaning/ | HAS og:url (control) | app/las-vegas/drain-cleaning/page.tsx | 34-43 | true | true | true | true | true | true | true |

## 5. Social tag matrix across all 139 built pages, and pages lacking og:url

Matrix output, part 1 of 2 (lines 1 to 60)

```text
HTML files scanned: 139

| Tag | Pages lacking it |
|-|-|
| og:title | 0 |
| og:description | 0 |
| og:url | 16 |
| og:image | 0 |
| og:type | 16 |
| og:site_name | 16 |
| og:locale | 24 |
| twitter:card | 0 |
| twitter:title | 0 |
| twitter:description | 0 |
| twitter:image | 0 |

Pages lacking og:url (raw list):
  /404.html
  /404/
  /_not-found/
  /about/
  /backflow-prevention/
  /commercial-plumbing/
  /faucet-sink-repair-installation/
  /garbage-disposal-repair-installation/
  /gas-line-plumbing/
  /plumbing-fixture-repair-replacement-installation/
  /thank-you/
  /toilet-repair-installation/
  /trenchless-piping/
  /video-camera-plumbing-inspections/
  /water-meter-pressure-regulator-services/
  /water-pipe-repair-replacement/

Pages lacking og:site_name (raw list):
  /404.html
  /404/
  /_not-found/
  /about/
  /backflow-prevention/
  /commercial-plumbing/
  /faucet-sink-repair-installation/
  /garbage-disposal-repair-installation/
  /gas-line-plumbing/
  /plumbing-fixture-repair-replacement-installation/
  /thank-you/
  /toilet-repair-installation/
  /trenchless-piping/
  /video-camera-plumbing-inspections/
  /water-meter-pressure-regulator-services/
  /water-pipe-repair-replacement/

Pages lacking og:type (raw list):
  /404.html
  /404/
  /_not-found/
  /about/
  /backflow-prevention/
  /commercial-plumbing/
  /faucet-sink-repair-installation/
```

Matrix output, part 2 of 2 (lines 61 to 91)

```text
  /garbage-disposal-repair-installation/
  /gas-line-plumbing/
  /plumbing-fixture-repair-replacement-installation/
  /thank-you/
  /toilet-repair-installation/
  /trenchless-piping/
  /video-camera-plumbing-inspections/
  /water-meter-pressure-regulator-services/
  /water-pipe-repair-replacement/

Pages lacking og:locale: 24 (list omitted, see counts; locale is optional)

Pages lacking twitter:card (first 30 of 0):


Pages lacking twitter:title (first 30 of 0):


Pages lacking twitter:description (first 30 of 0):


Pages lacking twitter:image (first 30 of 0):


Pages lacking og:image (first 30 of 0):


Pages lacking og:title (first 30 of 0):


Pages lacking og:description (first 30 of 0):
```


Reading the matrix: 16 pages lack og:url, og:site_name, and og:type, always the same 16. 24 pages lack og:locale: the 16 plus the 8 listed in Section 6.1. og:locale is optional and was not part of the question. All twitter tags and og:image, og:title and og:description are present on all 139 pages.

## 6. Cause investigation: layout, helper, source counts, noindex pages

Cause output, part 1 of 2 (lines 1 to 60)

```text
$ rg -n "openGraph|twitter|OG_IMAGES" app/layout.tsx
[exit=1] (1 = layout sets no openGraph, so nothing to inherit)

$ cat lib/social-image.ts
// Shared Open Graph image for every page that defines its own `openGraph` object.
//
// Next.js replaces a parent's `openGraph` with a child's rather than merging, so the
// file-based app/opengraph-image.jpg only reaches routes without their own openGraph.
// Pages pass this array as `openGraph.images`. The relative url resolves against
// `metadataBase` in app/layout.tsx. The alt must match app/opengraph-image.alt.txt.
export const OG_IMAGES = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Red Carpet Plumbing logo",
  },
];

$ ls app/opengraph-image* app/twitter-image* (file conventions)
app/opengraph-image.alt.txt
app/opengraph-image.jpg
app/twitter-image.alt.txt
app/twitter-image.jpg

$ rg -n "generateMetadata" app (any page using generateMetadata)
[exit=1]

$ source-level count: page files with openGraph block, and how many have url: inside it
page.tsx files: 136 | with openGraph block: 135 | with url inside: 123
openGraph WITHOUT url (12):
  app/about/page.tsx
  app/backflow-prevention/page.tsx
  app/commercial-plumbing/page.tsx
  app/faucet-sink-repair-installation/page.tsx
  app/garbage-disposal-repair-installation/page.tsx
  app/gas-line-plumbing/page.tsx
  app/plumbing-fixture-repair-replacement-installation/page.tsx
  app/toilet-repair-installation/page.tsx
  app/trenchless-piping/page.tsx
  app/video-camera-plumbing-inspections/page.tsx
  app/water-meter-pressure-regulator-services/page.tsx
  app/water-pipe-repair-replacement/page.tsx
page.tsx WITHOUT any openGraph block (1):
  app/thank-you/page.tsx

$ thank-you metadata (app/thank-you/page.tsx lines 17-22)
     1	export const metadata: Metadata = {
     2	  title: "Thank You | Red Carpet Plumbing",
     3	  description:
     4	    "Your plumbing service request has been received. Red Carpet Plumbing will be in touch shortly.",
     5	  robots: { index: false, follow: false },
     6	};

$ built social tags for the 4 noindex pages
== out/thank-you/index.html
<meta property="og:title" content="Thank You | Red Carpet Plumbing"/>
<meta property="og:description" content="Your plumbing service request has been received. Red Carpet Plumbing will be in touch shortly."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg?opengraph-image.04ayulqi2o_fe.jpg"/>
<meta property="og:image:type" content="image/jpeg"/>
```

Cause output, part 2 of 2 (lines 61 to 87)

```text
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Thank You | Red Carpet Plumbing"/>
<meta name="twitter:description" content="Your plumbing service request has been received. Red Carpet Plumbing will be in touch shortly."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>
== out/404.html
<meta property="og:title" content="Red Carpet Plumbing"/>
<meta property="og:description" content="Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities."/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg?opengraph-image.04ayulqi2o_fe.jpg"/>
<meta property="og:image:type" content="image/jpeg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Red Carpet Plumbing"/>
<meta name="twitter:description" content="Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities."/>
<meta name="twitter:image" content="https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg"/>
<meta name="twitter:image:alt" content="Red Carpet Plumbing logo"/>
<meta name="twitter:image:type" content="image/jpeg"/>
<meta name="twitter:image:width" content="1200"/>
<meta name="twitter:image:height" content="630"/>
```


### 6.1 Other pages that lack og:locale (but do have og:url)

Insertion anchors and locale list, part 1 of 1 (lines 1 to 24)

```text
$ rg -n "images: OG_IMAGES" for the 12 files (insertion anchor line) and the line above it
app/about/page.tsx:28:    images: OG_IMAGES,
app/backflow-prevention/page.tsx:36:    images: OG_IMAGES,
app/commercial-plumbing/page.tsx:29:    images: OG_IMAGES,
app/faucet-sink-repair-installation/page.tsx:32:    images: OG_IMAGES,
app/garbage-disposal-repair-installation/page.tsx:32:    images: OG_IMAGES,
app/gas-line-plumbing/page.tsx:29:    images: OG_IMAGES,
app/plumbing-fixture-repair-replacement-installation/page.tsx:32:    images: OG_IMAGES,
app/toilet-repair-installation/page.tsx:32:    images: OG_IMAGES,
app/trenchless-piping/page.tsx:31:    images: OG_IMAGES,
app/video-camera-plumbing-inspections/page.tsx:32:    images: OG_IMAGES,
app/water-meter-pressure-regulator-services/page.tsx:32:    images: OG_IMAGES,
app/water-pipe-repair-replacement/page.tsx:32:    images: OG_IMAGES,

$ pages lacking og:locale but NOT among the 16 lacking og:url (built HTML)
count: 8
  /
  /drain-cleaning/
  /emergency-plumbing/
  /leak-detection-repair/
  /repiping/
  /sewer-line-services/
  /slab-leak-detection-repair/
  /water-heater-repair-installation/
```


## 7. History: when these pages got their openGraph

Git history, commit lists, part 1 of 9 (lines 1 to 60)

```text
$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/about/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
2408f47 2026-09-03 Add scrimmed background photos to two homepage sections and the about grid
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
1c58957 2026-08-25 style(links): recolor the remaining hover-underline prose links
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
1a91170 2026-07-24 Migrate hub, About, and Contact FAQs to the shared FaqSection component
79bf896 2026-06-16 feat(about): add AEO direct-answer block and Plumber schema
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
a81d0d4 2026-06-01 feat(about): About page, sitemap entry, SiteFooter NAP address [em dash] QA pass

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/backflow-prevention/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
aaa00fd 2026-09-03 Alt text batch 3: backflow, gas line, water heater
bbba82e 2026-09-03 Wire Commercial Plumbing cross-link card image
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
9d57bce 2026-08-31 Wire backflow prevention service card images
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/commercial-plumbing/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
ba0650e 2026-09-03 Give each commercial plumbing photo one alt across all city pages
cdb183e 2026-09-03 Alt text: collapse 12 divergent alts for one image into one description
71b3721 2026-09-03 Wire the commercial plumbing card images across all four commercial pages
4b74651 2026-09-03 Wire five more cross-link card images by reuse
4131d17 2026-08-31 Add service-card images to commercial plumbing and sewer line grids
```

Git history, commit lists, part 2 of 9 (lines 61 to 120)

```text
4274c0e 2026-08-31 Add hero background carousel and use it on two pages
98a379c 2026-08-31 Wire hero background images into the remaining 22 pages
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
50a71d3 2026-08-28 Move the repiping routes off the hyphenated URL
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
f87b5e0 2026-08-11 Align section CTAs to the container each one sits in
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
3404910 2026-08-06 Fix blank mobile sections, service-area grid wrapping, emergency CTA contrast
bdbe271 2026-08-04 Distinguish linked service areas by icon color
ceafc3a 2026-08-04 Restyle hub service-area grid: 3 columns, white cards, location icons
e2de6ff 2026-08-04 Replace stale hub service-area lists with linked/unlinked grid
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/faucet-sink-repair-installation/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
a0bab50 2026-09-03 Rewrite templated card alt text on three fixture service pages
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
7e77788 2026-09-03 Wire service card images across ten core service pages
ada513b 2026-08-31 Wire existing service photos into empty service card slots
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
f87b5e0 2026-08-11 Align section CTAs to the container each one sits in
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
3404910 2026-08-06 Fix blank mobile sections, service-area grid wrapping, emergency CTA contrast
bdbe271 2026-08-04 Distinguish linked service areas by icon color
ceafc3a 2026-08-04 Restyle hub service-area grid: 3 columns, white cards, location icons
e2de6ff 2026-08-04 Replace stale hub service-area lists with linked/unlinked grid
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/garbage-disposal-repair-installation/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
```

Git history, commit lists, part 3 of 9 (lines 121 to 180)

```text
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
a0bab50 2026-09-03 Rewrite templated card alt text on three fixture service pages
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
33bb519 2026-08-31 Wire garbage disposal service card images
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/gas-line-plumbing/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
d3739fe 2026-10-12 Add 911 to gas-leak call instructions and correct Southwest Gas number
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
aaa00fd 2026-09-03 Alt text batch 3: backflow, gas line, water heater
cdb183e 2026-09-03 Alt text: collapse 12 divergent alts for one image into one description
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
7e77788 2026-09-03 Wire service card images across ten core service pages
ada513b 2026-08-31 Wire existing service photos into empty service card slots
59383fe 2026-08-31 Wire recreated card images for five services
b399f6a 2026-08-31 Wire recreated hero images for seven services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
f87b5e0 2026-08-11 Align section CTAs to the container each one sits in
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
3404910 2026-08-06 Fix blank mobile sections, service-area grid wrapping, emergency CTA contrast
bdbe271 2026-08-04 Distinguish linked service areas by icon color
ceafc3a 2026-08-04 Restyle hub service-area grid: 3 columns, white cards, location icons
e2de6ff 2026-08-04 Replace stale hub service-area lists with linked/unlinked grid
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready
```

Git history, commit lists, part 4 of 9 (lines 181 to 240)

```text

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/plumbing-fixture-repair-replacement-installation/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
a0bab50 2026-09-03 Rewrite templated card alt text on three fixture service pages
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
7e77788 2026-09-03 Wire service card images across ten core service pages
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/toilet-repair-installation/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
36cf545 2026-09-03 Rewrite templated card alt text on slab leak and toilet pages
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
7e77788 2026-09-03 Wire service card images across ten core service pages
ada513b 2026-08-31 Wire existing service photos into empty service card slots
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
f87b5e0 2026-08-11 Align section CTAs to the container each one sits in
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
3404910 2026-08-06 Fix blank mobile sections, service-area grid wrapping, emergency CTA contrast
bdbe271 2026-08-04 Distinguish linked service areas by icon color
ceafc3a 2026-08-04 Restyle hub service-area grid: 3 columns, white cards, location icons
e2de6ff 2026-08-04 Replace stale hub service-area lists with linked/unlinked grid
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready
```

Git history, commit lists, part 5 of 9 (lines 241 to 300)

```text

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/trenchless-piping/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
073694d 2026-09-03 Rewrite templated card alt text on trenchless and camera pages
cdb183e 2026-09-03 Alt text: collapse 12 divergent alts for one image into one description
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
7e77788 2026-09-03 Wire service card images across ten core service pages
744f26d 2026-08-31 Wire recreated hero images for the remaining square-source services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
9a2f278 2026-08-28 Point image references at the renamed repiping asset folder
50a71d3 2026-08-28 Move the repiping routes off the hyphenated URL
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/video-camera-plumbing-inspections/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
073694d 2026-09-03 Rewrite templated card alt text on trenchless and camera pages
cdb183e 2026-09-03 Alt text: collapse 12 divergent alts for one image into one description
56f6019 2026-09-03 Wire the last six service card images: zero placeholders sitewide
4b74651 2026-09-03 Wire five more cross-link card images by reuse
7e77788 2026-09-03 Wire service card images across ten core service pages
744f26d 2026-08-31 Wire recreated hero images for the remaining square-source services
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
```

Git history, commit lists, part 6 of 9 (lines 301 to 360)

```text
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/water-meter-pressure-regulator-services/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
e528643 2026-09-03 Rewrite templated card alt text on meter and water pipe pages
4b74651 2026-09-03 Wire five more cross-link card images by reuse
7e77788 2026-09-03 Wire service card images across ten core service pages
744f26d 2026-08-31 Wire recreated hero images for the remaining square-source services
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
9a2f278 2026-08-28 Point image references at the renamed repiping asset folder
50a71d3 2026-08-28 Move the repiping routes off the hyphenated URL
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/water-pipe-repair-replacement/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
e528643 2026-09-03 Rewrite templated card alt text on meter and water pipe pages
488c9ec 2026-09-03 Wire polybutylene pipe replacement card image
7e77788 2026-09-03 Wire service card images across ten core service pages
ada513b 2026-08-31 Wire existing service photos into empty service card slots
744f26d 2026-08-31 Wire recreated hero images for the remaining square-source services
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
9a2f278 2026-08-28 Point image references at the renamed repiping asset folder
50a71d3 2026-08-28 Move the repiping routes off the hyphenated URL
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
3692742 2026-08-24 Convert the last 7 service hubs to the linked service-area pattern
```

Git history, commit lists, part 7 of 9 (lines 361 to 420)

```text
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/contact/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
98a379c 2026-08-31 Wire hero background images into the remaining 22 pages
50a71d3 2026-08-28 Move the repiping routes off the hyphenated URL
d5e396d 2026-08-28 Standardize on the repiping spelling across site copy
8e10955 2026-08-26 style(links): end hover-to-red and neutralize ServiceCard
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
d8f730b 2026-08-26 style(chips): neutralize chip labels, hovers, and arrow glyphs
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
1a91170 2026-07-24 Migrate hub, About, and Contact FAQs to the shared FaqSection component
fce3e4d 2026-06-16 feat: dark hero, split name field, and sitewide layout polish
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
35c7866 2026-06-08 feat(contact): activate email address, wire privacy policy link stub
a81d0d4 2026-06-01 feat(about): About page, sitemap entry, SiteFooter NAP address [em dash] QA pass
43a71d0 2026-05-25 feat: add contact page

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/drain-cleaning/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
0de89fe 2026-10-13 Remove C-1 classification wording from page copy and schema
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
25a2899 2026-09-03 Give each reused cross-link photo a single alt sitewide
38e458f 2026-09-03 Alt text batch 2: drain cleaning, emergency, leak detection
cdb183e 2026-09-03 Alt text: collapse 12 divergent alts for one image into one description
b1e019e 2026-09-03 Wire cross-link card images across eight service pages
d891cb8 2026-08-31 Wire drain cleaning service card images
59383fe 2026-08-31 Wire recreated card images for five services
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
2958967 2026-08-28 Add same-day availability FAQ to 18 core service pages
e8c4472 2026-08-28 Break 16 service page headings onto owner-specified lines
72af6f5 2026-08-26 style(sections): strengthen dark-surface hairlines to white/30
ffd511e 2026-08-26 style(sections): divide adjacent charcoal pairs with a hairline
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
e5272dd 2026-08-25 style(shapes): neutralize decorative red bars and stray dots
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
6170cc1 2026-08-24 Break before "in Las Vegas" on 6 core service Final CTA headlines
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
f87b5e0 2026-08-11 Align section CTAs to the container each one sits in
7b23345 2026-08-11 Center the See All / View All section buttons; break the Section 5 H2
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
3404910 2026-08-06 Fix blank mobile sections, service-area grid wrapping, emergency CTA contrast
bdbe271 2026-08-04 Distinguish linked service areas by icon color
ceafc3a 2026-08-04 Restyle hub service-area grid: 3 columns, white cards, location icons
e2de6ff 2026-08-04 Replace stale hub service-area lists with linked/unlinked grid
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
b8f8945 2026-07-24 Add FAQ category pill filter component and migrate three pilot pages
fce3e4d 2026-06-16 feat: dark hero, split name field, and sitewide layout polish
```

Git history, commit lists, part 8 of 9 (lines 421 to 480)

```text
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
8c70d2a 2026-06-10 fix: add /green-valley/drain-cleaning/ to core drain cleaning service areas section
68977aa 2026-06-09 feat(batch-5): add 18 service-location pages for LV, Henderson, NLV
b006b52 2026-06-01 feat(service-pages): QA pass + Prompt 08 patch [em dash] 18 service pages production-ready
70f53ea 2026-06-01 feat(drain-cleaning): Beyond-Elite upgrade [em dash] 11 sections, HowTo schema, Las Vegas content moat
15fb2ca 2026-05-25 feat: add drain cleaning service page

$ git log [dbl-hyphen]format='%h %ad %s' [dbl-hyphen]date=short [dbl-hyphen] app/las-vegas/drain-cleaning/page.tsx
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
83762c9 2026-10-12 Shorten page titles and meta descriptions to search-result lengths
7cd24a8 2026-10-09 Add city and service-area images, replace checkmarks with item icons
52570f3 2026-10-09 Image audit fixes, verified business facts, and public asset cleanup
7d08cb2 2026-08-31 Rename image assets to descriptive filenames and fix all references
e924186 2026-08-28 Add same-day availability FAQ to 74 service-location pages
0c78927 2026-08-26 docs(markers): remove 77 stale TODO-BATCH markers, keep 19
ba68da9 2026-08-26 style(steps): move step-number circles off brand red
d8f730b 2026-08-26 style(chips): neutralize chip labels, hovers, and arrow glyphs
4633e54 2026-08-25 style(icons): neutralize benefit-list checkmarks
787da01 2026-08-25 style(links): improve inline prose-link contrast
edb1e5b 2026-08-25 refactor(cta): move mid-page CTA sections to charcoal
818def8 2026-08-25 Remove synthetic bold from all H1 and H2 headings
84cd437 2026-08-24 Repoint 88 core-fallback links to their built location-specific pages
7ae4f20 2026-08-24 Add cross-city sibling links across 18 location-service pages
16df01a 2026-08-11 Move breadcrumbs into the hero on a dark variant
02a438e 2026-08-11 Route the remaining 223 page CTAs through the Button component
fab038d 2026-07-25 Site-wide page sweep: red mid-page CTAs, forced H1 breaks, TrustStrip removal
fce3e4d 2026-06-16 feat: dark hero, split name field, and sitewide layout polish
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
68977aa 2026-06-09 feat(batch-5): add 18 service-location pages for LV, Henderson, NLV

$ git log [dbl-hyphen]format="%h %ad %s" [dbl-hyphen]date=short -S"siteName:" [dbl-hyphen] app | head -30 (commits that added or removed a siteName line anywhere in app/)
0bf222b 2026-10-13 feat: add HTML sitemap page at /sitemap/ and footer link
dc728da 2026-10-09 Add privacy policy and terms pages, legal footer nav, quote form consent line
79989b5 2026-10-07 Add Paradise gas line and backflow, Las Vegas water pipe, and North Las Vegas garbage disposal pages
066da1c 2026-10-07 Add Henderson water pipe, toilet, faucet and sink, garbage disposal, and backflow prevention pages
d5c048c 2026-10-07 Add Summerlin water pipe, gas line, toilet, faucet and sink, and garbage disposal pages
c83af44 2026-10-07 Add sewer line services pages for Summerlin, Spring Valley, Enterprise and Paradise
a96625f 2026-08-30 Add North Las Vegas toilet repair and installation page
0e0094b 2026-08-30 Add North Las Vegas commercial plumbing page
edc788e 2026-08-30 Add North Las Vegas repiping page
d3a3aaa 2026-08-30 Add North Las Vegas water pipe repair and replacement page
539f4c9 2026-08-28 Add North Las Vegas sewer line services page
08519ef 2026-06-22 Add GV emergency plumbing, NLV slab leak pages; homepage audit; activate hub cards
cf79f95 2026-06-16 feat: shared TrustStrip component and sitewide UI/content polish
f8e7ec8 2026-06-11 feat: add Las Vegas service-location pages P47-P53
042541b 2026-06-11 Batch 6: Lake Las Vegas, Aliante, and Green Valley fixture service pages
8ffa5c9 2026-06-10 feat: add Summerlin emergency plumbing page (Batch 6)
71fbdc5 2026-06-10 feat: add Paradise service-location pages (Batch 6)
713ab00 2026-06-10 feat: add Enterprise re-piping and commercial plumbing pages (Batch 6, Pages 24-25)
a582a46 2026-06-10 feat: add Boulder City service-location pages (Batch 6, Pages 26-29)
90fea66 2026-06-10 feat: add Green Valley service-location pages (Batch 6, Pages 30-34)
328e7d7 2026-06-09 feat: add Enterprise slab leak detection and repair service-location page (/enterprise/slab-leak-detection-repair/)
4d4b40a 2026-06-09 feat: add Enterprise leak detection and repair service-location page (/enterprise/leak-detection-repair/)
8baf222 2026-06-09 feat: add Enterprise water heater repair and installation service-location page (/enterprise/water-heater-repair-installation/)
37d3dc8 2026-06-09 feat: add Enterprise drain cleaning service-location page (/enterprise/drain-cleaning/)
cfac409 2026-06-09 feat: add Enterprise emergency plumbing service-location page (/enterprise/emergency-plumbing/)
dc986a6 2026-06-09 feat: add Spring Valley commercial plumbing service-location page (/spring-valley/commercial-plumbing/)
1e89fb7 2026-06-09 feat: add Spring Valley re-piping service-location page (/spring-valley/re-piping/)
b6df3ac 2026-06-09 feat: add Spring Valley slab leak detection and repair service-location page (/spring-valley/slab-leak-detection-repair/)
3b73c54 2026-06-09 feat: add Spring Valley leak detection and repair service-location page (/spring-valley/leak-detection-repair/)
```

Git history, commit lists, part 9 of 9 (lines 481 to 485)

```text
48f9c1d 2026-06-09 feat: add Spring Valley water heater repair and installation service-location page (/spring-valley/water-heater-repair-installation/)

$ git log [dbl-hyphen]format="%h %ad %s" [dbl-hyphen]date=short -S"OG_IMAGES" [dbl-hyphen] app lib | head -10
0bf222b 2026-10-13 feat: add HTML sitemap page at /sitemap/ and footer link
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide
```


Git history, siteName and og url tests, part 1 of 2 (lines 1 to 60)

```text
$ for each of the 12 files: commits that ever added or removed the string "siteName" or an og url line (git log -S)
app/about/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/backflow-prevention/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/commercial-plumbing/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/faucet-sink-repair-installation/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/garbage-disposal-repair-installation/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/gas-line-plumbing/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/plumbing-fixture-repair-replacement-installation/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/toilet-repair-installation/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/trenchless-piping/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/video-camera-plumbing-inspections/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/water-meter-pressure-regulator-services/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0
app/water-pipe-repair-replacement/page.tsx: siteName commits=0; openGraph commits=1; ever contained og url 'url: "https://redcarpetplumbing.com' commits=0

$ same three counts for the 3 control pages
app/contact/page.tsx: siteName commits=1; openGraph commits=1
app/drain-cleaning/page.tsx: siteName commits=1; openGraph commits=1
app/las-vegas/drain-cleaning/page.tsx: siteName commits=1; openGraph commits=1

$ git show 489c0f2 [dbl-hyphen] app/about/page.tsx (the sitewide social-image commit, diff for one affected page)
489c0f2 2026-10-13 Add social share image and Twitter card metadata sitewide

diff [dbl-hyphen]git a/app/about/page.tsx b/app/about/page.tsx
index 2a45517..3601326 100644
[dbl-hyphen]- a/app/about/page.tsx
+++ b/app/about/page.tsx
@@ -10,6 +10,7 @@ import { SiteHeader } from "@/components/SiteHeader";
 import { StickyMobileCTA } from "@/components/StickyMobileCTA";
 import { FaqSection } from "@/components/FaqSection";
 import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";
+import { OG_IMAGES } from "@/lib/social-image";
 
 export const metadata: Metadata = {
   title:
@@ -24,6 +25,7 @@ export const metadata: Metadata = {
       "About Red Carpet Plumbing | Las Vegas Plumbing Company",
     description:
       "Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.",
+    images: OG_IMAGES,
   },
 };
 

$ git show [dbl-hyphen]stat [dbl-hyphen]format="%h %s" 489c0f2 | head -5 ; files changed count
 142 files changed, 441 insertions(+), 2 deletions(-)

$ git log [dbl-hyphen]format="%h %ad %s" [dbl-hyphen]date=short -S"openGraph" [dbl-hyphen] app/about/page.tsx
a81d0d4 2026-06-01 feat(about): About page, sitemap entry, SiteFooter NAP address [em dash] QA pass

$ git show b006b52:app/about/page.tsx is not that commit; show about openGraph at its first openGraph commit
commit a81d0d4
17-  },
18:  openGraph: {
19-    title:
20-      "About Red Carpet Plumbing | Las Vegas Plumbing Company",
21-    description:
22-      "Local, family-owned Las Vegas plumbing company with over 40 years of experience. NV Licensed #0048585A. 4.8 stars, 76 reviews.",
23-  },
24-};
25-
```

Git history, siteName and og url tests, part 2 of 2 (lines 61 to 61)

```text
26-const ABOUT_FAQS = [
```


Reading the history:
- All 12 pages were created before 2026-06-02 (about on 2026-06-01, the 11 service pages on 2026-06-01 in commit b006b52 "service-pages: QA pass and Prompt 08 patch"). Each has exactly one commit that touched openGraph (its creation) and none that touched siteName or an og url line.
- The 3 control pages each have one commit that touched siteName. So the pattern is: pages whose openGraph was extended with url, siteName and type got that in a later commit, and these 12 were not included.
- Commit 489c0f2 (2026-10-13, "Add social share image and Twitter card metadata sitewide", 142 files) added only the OG_IMAGES import and the `images` line to these pages, as the about page diff above shows. lib/social-image.ts explains why that was needed: Next.js replaces a parent's openGraph with a child's rather than merging. That comment also supports the finding that nothing is inherited from the layout.
- Conclusion for the cause: the "page predates a template change" explanation holds. The other candidate causes tested do not apply: no layout openGraph is being dropped, no different metadata helper is used, and no generateMetadata exists.

## 8. Fix list (text only, not applied)

Per page, one line to add inside the existing openGraph block. The value is each page's existing canonical, so no new copy is written. Line numbers are the current numbers in the files.

1. app/about/page.tsx: insert a `url` line inside the openGraph block (block spans lines 23-29), directly above the existing `images: OG_IMAGES,` line at line 28. Value: `https://redcarpetplumbing.com/about/` (the page's existing canonical, character for character).
2. app/backflow-prevention/page.tsx: insert a `url` line inside the openGraph block (block spans lines 31-37), directly above the existing `images: OG_IMAGES,` line at line 36. Value: `https://redcarpetplumbing.com/backflow-prevention/` (the page's existing canonical, character for character).
3. app/commercial-plumbing/page.tsx: insert a `url` line inside the openGraph block (block spans lines 25-30), directly above the existing `images: OG_IMAGES,` line at line 29. Value: `https://redcarpetplumbing.com/commercial-plumbing/` (the page's existing canonical, character for character).
4. app/faucet-sink-repair-installation/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/faucet-sink-repair-installation/` (the page's existing canonical, character for character).
5. app/garbage-disposal-repair-installation/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/garbage-disposal-repair-installation/` (the page's existing canonical, character for character).
6. app/gas-line-plumbing/page.tsx: insert a `url` line inside the openGraph block (block spans lines 25-30), directly above the existing `images: OG_IMAGES,` line at line 29. Value: `https://redcarpetplumbing.com/gas-line-plumbing/` (the page's existing canonical, character for character).
7. app/plumbing-fixture-repair-replacement-installation/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/` (the page's existing canonical, character for character).
8. app/toilet-repair-installation/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/toilet-repair-installation/` (the page's existing canonical, character for character).
9. app/trenchless-piping/page.tsx: insert a `url` line inside the openGraph block (block spans lines 26-32), directly above the existing `images: OG_IMAGES,` line at line 31. Value: `https://redcarpetplumbing.com/trenchless-piping/` (the page's existing canonical, character for character).
10. app/video-camera-plumbing-inspections/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/video-camera-plumbing-inspections/` (the page's existing canonical, character for character).
11. app/water-meter-pressure-regulator-services/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/water-meter-pressure-regulator-services/` (the page's existing canonical, character for character).
12. app/water-pipe-repair-replacement/page.tsx: insert a `url` line inside the openGraph block (block spans lines 27-33), directly above the existing `images: OG_IMAGES,` line at line 32. Value: `https://redcarpetplumbing.com/water-pipe-repair-replacement/` (the page's existing canonical, character for character).

Optional, same blocks (needs your decision, because the audit question was og:url): add `siteName` and `type` lines using the same values the control pages already use (`siteName: "Red Carpet Plumbing"`, `type: "website"`), so these 12 match the other 123 pages. Without them the 12 pages will still lack og:site_name and og:type after an og:url fix. This would use existing values, not new copy. The 4 noindex pages need no change.

Expected result after a fix and rebuild: og:url present on 135 of 139 pages (the 4 noindex pages remain without it), 0 changes to canonicals, titles, descriptions, robots, or schema. Page metadata edits require Sedrick's approval under CLAUDE.md.

## 9. UNVERIFIED

1. How each social platform and crawler treats a missing og:url (this report did not test any platform; it only shows the tag is absent from the HTML).
2. Whether the live production HTML for the 12 pages matches the local out/. Only local out/ was inspected in this gate. The earlier live check covered other pages. To verify: a live curl of the 12 URLs.
3. Whether og:site_name, og:type or og:locale were left out of the 12 pages on purpose. The history shows no commit message explaining it.
4. Whether the 8 pages that have og:url but no og:locale (Section 6.1) are intended. Optional tag, not investigated further.
5. Why the 4 noindex pages show an og:title (derived by Next.js from the page title, as the built tags show). Considered expected and not a defect.

## 10. Questions for Sedrick

1. Fix og:url only, or og:url plus siteName and type so all 12 match the other 123 pages?
2. Include the 8 pages with og:url but no og:locale in the same pass, or leave them?
3. Approve a Gate 2 plan for the fix?
