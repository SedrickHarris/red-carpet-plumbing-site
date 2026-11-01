# og:url, og:site_name and og:type on 12 Pages (Gate 2, Plan and Confirm Only)

Date: 2026-10-28. Local HEAD: a259d5d. Nothing was edited, built, staged, committed, pushed, or deployed in this gate. The only file created is this plan. Analysis scripts ran in memory or wrote only to the session scratchpad.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, em dashes and double hyphens would show as [em dash] and [dbl-hyphen]. Nothing else was altered.

Decisions recorded from Sedrick: add url, siteName and type to the openGraph block of the 12 indexable pages that lack them. Do not add locale anywhere (the 8 pages with og:url but no og:locale stay as they are). Do not touch the 4 noindex pages or app/thank-you/page.tsx. Do not change any title, description, image, canonical, schema, or copy.

## 1. Summary

- Value consistency passed. All 123 page files that already have an openGraph url use exactly one siteName value, `"Red Carpet Plumbing"` (123 of 123), and exactly one type value, `"website"` (123 of 123). No stop condition was triggered.
- Each of the 12 files gets exactly three new lines inside its existing openGraph block, directly above the existing `images: OG_IMAGES,` line, in the order url, siteName, type. That is the same order and 4-space style as the comparison page /drain-cleaning/ (title, description, url, siteName, type, images). 36 lines are added in total and no existing line changes. The new url is each page's existing canonical string, character for character.
- Simulating the edit in memory against seo-automation/scripts/scan-routes.mjs shows no change to any manifest field for any of the 12 pages, including wordEstimate. So even a future `npm run build` would not alter docs/seo/route-manifest.json because of this edit.
- One finding changes how Gate 3 must edit: the working copies of all 12 files use CRLF line endings (`git ls-files` with its eol option shows i/lf w/crlf for each; git is set to core.autocrlf=true). The inserted lines must use the same line endings as the rest of the file, and the diff must still show exactly three added lines per file. Section 3.2 covers this.
- Expected validation result after Gate 3: after normalizing the Next build ID, exactly 48 files in out/ differ from the snapshot (4 per route: index.html, index.txt, __next._full.txt, __next._head.txt, for 12 routes), and every HTML diff is exactly three added meta tags.
- out/ is older than HEAD by commit time (built 15:35, HEAD commit 15:49), so Gate 3 builds first, then snapshots, then edits, then rebuilds, as the instructions require.

## 2. Value consistency across the 123 page files (raw output)

Section 2 output, part 1 of 1 (lines 1 to 33)

```text
$ node ogvals.mjs (parse the openGraph block of every app/**/page.tsx)
page.tsx files: 136; openGraph with url: 123; openGraph without url: 12

siteName values (value as written in source):
   123  "Red Carpet Plumbing"

type values:
   123  "website"

locale values (informational only, not to be added):
   115  "en_US"
     8  (absent)

openGraph top-level key order (4-space-indented keys):
   115  title,description,url,siteName,locale,type,images
     7  title,description,url,siteName,type,images
     1  title,description,url,siteName,type

indent width of url/siteName/type lines:
   123  4
[exit=0]

$ rg -c "^\s+siteName:" app [dbl-hyphen]glob "page.tsx" | wc -l  (files with a siteName line)
123

$ rg -n -o "siteName: .*" app [dbl-hyphen]glob "page.tsx" | sed "s/^[^:]*:[0-9]*://" | sort | uniq -c
    123 siteName: "Red Carpet Plumbing",

$ rg -n -o "^    type: .*" app [dbl-hyphen]glob "page.tsx" | sed "s/^[^:]*:[0-9]*://" | sort | uniq -c   (4-space-indented type lines, openGraph level)
    123     type: "website",

$ rg -n -o "^    url: .*" app [dbl-hyphen]glob "page.tsx" | wc -l  (openGraph-level url lines)
348
```


Reading the output:
- siteName: 123 of 123 use `siteName: "Red Carpet Plumbing",`. One distinct value.
- type: 123 of 123 use `type: "website",`. One distinct value.
- Key order among the 123: 115 pages use title, description, url, siteName, locale, type, images; 7 use title, description, url, siteName, type, images (no locale); 1 uses title, description, url, siteName, type (no images key). For the 12 pages, which have no locale and will not get one, the matching order is the 7-page order: url, siteName, type, then the existing images line. This is the order the comparison page /drain-cleaning/ uses.
- The last grep line (348 lines starting with 4 spaces then url:) counts every url key at that indent in any page.tsx, including non-openGraph ones such as schema fields, so it is not a count of openGraph urls. The openGraph-level count (123) comes from the script above it.
- The one page with no images key was not investigated and is not one of the 12.

## 3. Exact edits per page

Method summary: for each file, three lines are inserted at the line number of the existing `images: OG_IMAGES,` line, so that line and the closing brace move down by three. The block below shows existing and proposed text with line numbers. The proposed url line is shown next to the page's canonical line so the strings can be compared directly; the script also confirms they are equal.

### 3.1 Per-page blocks (raw output)

Section 3 output, part 1 of 6 (lines 1 to 60)

```text
##### app/about/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 28, directly above the existing "images: OG_IMAGES," line (currently line 28); that line and the closing brace shift down by 3
canonical line in source: line 21

[dbl-hyphen]- canonical (source line 21):   canonical: "https://redcarpetplumbing.com/about/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/about/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 23 to 29)
  23:   openGraph: {
  24:     title:
  25:       "About Red Carpet Plumbing | Las Vegas Plumbing Company",
  26:     description:
  27:       "Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.",
  28:     images: OG_IMAGES,
  29:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  23     openGraph: {
  24       title:
  25         "About Red Carpet Plumbing | Las Vegas Plumbing Company",
  26       description:
  27         "Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.",
  28 +     url: "https://redcarpetplumbing.com/about/",
  29 +     siteName: "Red Carpet Plumbing",
  30 +     type: "website",
  31       images: OG_IMAGES,
  32     },

##### app/backflow-prevention/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 36, directly above the existing "images: OG_IMAGES," line (currently line 36); that line and the closing brace shift down by 3
canonical line in source: line 29

[dbl-hyphen]- canonical (source line 29):   canonical: "https://redcarpetplumbing.com/backflow-prevention/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/backflow-prevention/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 31 to 37)
  31:   openGraph: {
  32:     title:
  33:       "Backflow Prevention Services in Las Vegas, NV",
  34:     description:
  35:       "Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.",
  36:     images: OG_IMAGES,
  37:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  31     openGraph: {
  32       title:
  33         "Backflow Prevention Services in Las Vegas, NV",
  34       description:
  35         "Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.",
  36 +     url: "https://redcarpetplumbing.com/backflow-prevention/",
  37 +     siteName: "Red Carpet Plumbing",
  38 +     type: "website",
  39       images: OG_IMAGES,
  40     },

##### app/commercial-plumbing/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 29, directly above the existing "images: OG_IMAGES," line (currently line 29); that line and the closing brace shift down by 3
```

Section 3 output, part 2 of 6 (lines 61 to 120)

```text
canonical line in source: line 23

[dbl-hyphen]- canonical (source line 23):   canonical: "https://redcarpetplumbing.com/commercial-plumbing/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/commercial-plumbing/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 25 to 30)
  25:   openGraph: {
  26:     title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27:     description:
  28:       "Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.",
  29:     images: OG_IMAGES,
  30:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  25     openGraph: {
  26       title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27       description:
  28         "Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.",
  29 +     url: "https://redcarpetplumbing.com/commercial-plumbing/",
  30 +     siteName: "Red Carpet Plumbing",
  31 +     type: "website",
  32       images: OG_IMAGES,
  33     },

##### app/faucet-sink-repair-installation/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Faucet and Sink Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Faucet and Sink Repair and Installation in Las Vegas, NV",
  30       description:
  31         "Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/garbage-disposal-repair-installation/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
```

Section 3 output, part 3 of 6 (lines 121 to 180)

```text
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Garbage Disposal Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Garbage Disposal Repair and Installation in Las Vegas, NV",
  30       description:
  31         "Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/gas-line-plumbing/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 29, directly above the existing "images: OG_IMAGES," line (currently line 29); that line and the closing brace shift down by 3
canonical line in source: line 23

[dbl-hyphen]- canonical (source line 23):   canonical: "https://redcarpetplumbing.com/gas-line-plumbing/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/gas-line-plumbing/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 25 to 30)
  25:   openGraph: {
  26:     title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27:     description:
  28:       "Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.",
  29:     images: OG_IMAGES,
  30:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  25     openGraph: {
  26       title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  27       description:
  28         "Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.",
  29 +     url: "https://redcarpetplumbing.com/gas-line-plumbing/",
  30 +     siteName: "Red Carpet Plumbing",
  31 +     type: "website",
  32       images: OG_IMAGES,
  33     },

##### app/plumbing-fixture-repair-replacement-installation/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
```

Section 3 output, part 4 of 6 (lines 181 to 240)

```text
  28:     title:
  29:       "Plumbing Fixture Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Plumbing Fixture Repair and Installation in Las Vegas, NV",
  30       description:
  31         "Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/toilet-repair-installation/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/toilet-repair-installation/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/toilet-repair-installation/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Toilet Repair and Installation in Las Vegas, NV",
  30:     description:
  31:       "Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Toilet Repair and Installation in Las Vegas, NV",
  30       description:
  31         "Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/toilet-repair-installation/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/trenchless-piping/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 31, directly above the existing "images: OG_IMAGES," line (currently line 31); that line and the closing brace shift down by 3
canonical line in source: line 24

[dbl-hyphen]- canonical (source line 24):   canonical: "https://redcarpetplumbing.com/trenchless-piping/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/trenchless-piping/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 26 to 32)
  26:   openGraph: {
  27:     title:
  28:       "Trenchless Piping Services in Las Vegas, NV",
```

Section 3 output, part 5 of 6 (lines 241 to 300)

```text
  29:     description:
  30:       "Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.",
  31:     images: OG_IMAGES,
  32:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  26     openGraph: {
  27       title:
  28         "Trenchless Piping Services in Las Vegas, NV",
  29       description:
  30         "Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.",
  31 +     url: "https://redcarpetplumbing.com/trenchless-piping/",
  32 +     siteName: "Red Carpet Plumbing",
  33 +     type: "website",
  34       images: OG_IMAGES,
  35     },

##### app/video-camera-plumbing-inspections/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Video Camera Plumbing Inspections in Las Vegas, NV",
  30:     description:
  31:       "Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Video Camera Plumbing Inspections in Las Vegas, NV",
  30       description:
  31         "Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/water-meter-pressure-regulator-services/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Water Meter and Pressure Regulator Services in Las Vegas, NV",
  30:     description:
  31:       "Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.",
```

Section 3 output, part 6 of 6 (lines 301 to 351)

```text
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Water Meter and Pressure Regulator Services in Las Vegas, NV",
  30       description:
  31         "Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### app/water-pipe-repair-replacement/page.tsx  (working-copy line endings: CRLF)
insertion: 3 lines inserted at line 32, directly above the existing "images: OG_IMAGES," line (currently line 32); that line and the closing brace shift down by 3
canonical line in source: line 25

[dbl-hyphen]- canonical (source line 25):   "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
[dbl-hyphen]- proposed url line:                    url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
[dbl-hyphen]- url string equals canonical string character for character: true

[dbl-hyphen]- EXISTING openGraph block (lines 27 to 33)
  27:   openGraph: {
  28:     title:
  29:       "Water Pipe Repair and Replacement in Las Vegas, NV",
  30:     description:
  31:       "Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.",
  32:     images: OG_IMAGES,
  33:   },

[dbl-hyphen]- PROPOSED openGraph block (new numbering; "+" marks the 3 added lines)
  27     openGraph: {
  28       title:
  29         "Water Pipe Repair and Replacement in Las Vegas, NV",
  30       description:
  31         "Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.",
  32 +     url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
  33 +     siteName: "Red Carpet Plumbing",
  34 +     type: "website",
  35       images: OG_IMAGES,
  36     },

##### Added lines (36 total, 3 per file), checked for forbidden characters
em dash count: 0
double hyphen count: 0
distinct siteName lines: 1
distinct type lines: 1
distinct url lines: 12
total added lines: 36
```


### 3.2 Line endings, and how Gate 3 must insert

Evidence output, part 1 of 2 (lines 1 to 60)

```text
$ ls -R out/about (files that belong to one route directory)
out/about/__next._full.txt
out/about/__next._head.txt
out/about/__next._index.txt
out/about/__next._tree.txt
out/about/__next.about.txt
out/about/__next.about/__PAGE__.txt
out/about/index.html
out/about/index.txt

$ for each of the 12 route dirs: file count, and which files contain the page og:title tag text or RSC og data (expected-to-change set)
out/about: files=8 subdirs=1 files_with_og_metadata=4
out/backflow-prevention: files=8 subdirs=1 files_with_og_metadata=4
out/commercial-plumbing: files=8 subdirs=1 files_with_og_metadata=4
out/faucet-sink-repair-installation: files=8 subdirs=1 files_with_og_metadata=4
out/garbage-disposal-repair-installation: files=8 subdirs=1 files_with_og_metadata=4
out/gas-line-plumbing: files=8 subdirs=1 files_with_og_metadata=4
out/plumbing-fixture-repair-replacement-installation: files=8 subdirs=1 files_with_og_metadata=4
out/toilet-repair-installation: files=8 subdirs=1 files_with_og_metadata=4
out/trenchless-piping: files=8 subdirs=1 files_with_og_metadata=4
out/video-camera-plumbing-inspections: files=8 subdirs=1 files_with_og_metadata=4
out/water-meter-pressure-regulator-services: files=8 subdirs=1 files_with_og_metadata=4
out/water-pipe-repair-replacement: files=8 subdirs=1 files_with_og_metadata=4
total files containing og metadata across the 12 routes: 48

$ which files in out/about contain og:title
out/about/index.html
out/about/index.txt
out/about/__next._full.txt
out/about/__next._head.txt

$ built og:url, og:site_name, og:type tags on the control page /drain-cleaning/ and their position among the og tags
<meta property="og:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Drain cleaning in Las Vegas and the Valley. Kitchen and bathroom drains, main sewer lines, hydro jetting. Licensed, 4.8-star rated. Call (702) 567-9172."/>
<meta property="og:url" content="https://redcarpetplumbing.com/drain-cleaning/"/>
<meta property="og:site_name" content="Red Carpet Plumbing"/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta property="og:type" content="website"/>

$ same on /las-vegas/drain-cleaning/ (has locale)
<meta property="og:title" content="Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing"/>
<meta property="og:description" content="Drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetti
<meta property="og:url" content="https://redcarpetplumbing.com/las-vegas/drain-cleaning/"/>
<meta property="og:site_name" content="Red Carpet Plumbing"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>
<meta property="og:type" content="website"/>

$ same on /about/ (current, missing the three)
<meta property="og:title" content="About Red Carpet Plumbing | Las Vegas Plumbing Company"/>
<meta property="og:description" content="Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers 
<meta property="og:image" content="https://redcarpetplumbing.com/opengraph-image.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
```

Evidence output, part 2 of 2 (lines 61 to 88)

```text
<meta property="og:image:alt" content="Red Carpet Plumbing logo"/>

$ git ls-files [dbl-hyphen]eol for the 12 files and 3 controls
i/lf    w/crlf  attr/                 	app/about/page.tsx
i/lf    w/crlf  attr/                 	app/backflow-prevention/page.tsx
i/lf    w/crlf  attr/                 	app/commercial-plumbing/page.tsx
i/lf    w/crlf  attr/                 	app/faucet-sink-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/garbage-disposal-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/gas-line-plumbing/page.tsx
i/lf    w/crlf  attr/                 	app/plumbing-fixture-repair-replacement-installation/page.tsx
i/lf    w/crlf  attr/                 	app/toilet-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/trenchless-piping/page.tsx
i/lf    w/crlf  attr/                 	app/video-camera-plumbing-inspections/page.tsx
i/lf    w/crlf  attr/                 	app/water-meter-pressure-regulator-services/page.tsx
i/lf    w/crlf  attr/                 	app/water-pipe-repair-replacement/page.tsx
i/lf    w/lf    attr/                 	app/contact/page.tsx
i/lf    w/crlf  attr/                 	app/drain-cleaning/page.tsx
i/lf    w/lf    attr/                 	app/las-vegas/drain-cleaning/page.tsx

$ git config [dbl-hyphen]get core.autocrlf
true

$ du -sh out ; find out -type f | wc -l
79M	out
1468

$ git status [dbl-hyphen]short app lib components public
(empty = clean)
```


Reading the line ending lines: all 12 target files show `i/lf w/crlf` (12 of 12). The index copy is LF, so git stores LF and converts on checkout. Of the 3 comparison files, contact and las-vegas/drain-cleaning are `w/lf` and drain-cleaning is `w/crlf`, so the working tree already holds both styles.

Plan for Gate 3:
1. Insert the three lines with a small byte-level script (kept in the scratchpad, not in the repo), not with a text editor tool. The script reads the file as bytes, finds the single line equal to `    images: OG_IMAGES,` inside the openGraph block, and inserts the three lines using the same line ending the file uses (CRLF), then writes the bytes back. It must refuse to run if the match count is not exactly 1 or if the file already contains an og url line.
2. After the edit, check each file: `git ls-files` with its eol option must still say `w/crlf` (not `w/mixed`), and `git diff` with its stat option must show exactly 3 insertions and 0 deletions per file.
3. If the Edit tool is used instead, UNVERIFIED how it treats CRLF files, so the same two checks apply and any file showing w/mixed must be fixed by correcting only the three inserted lines.

### 3.3 No other changes: why canonical, robots, schema, and content cannot be affected

- Only three lines inside the `openGraph` object of each `export const metadata` are added. `alternates.canonical` is a separate key and is not touched. The proposed url equals it.
- None of the 12 built pages has a robots meta tag today (all 12 are among the 19 untagged pages in the noindex audit). Nothing in the edit touches robots.
- JSON-LD is generated from other constants in the page body, not from the metadata export. No schema line changes. Gate 3 still verifies this by hashing each page's JSON-LD blocks before and after (Section 5, V8).
- The edit is inside the metadata export, so no JSX, no visible text, and no copy changes. No title, description, or image line changes.
- The 4 noindex pages and app/thank-you/page.tsx are not edited. No locale line is added anywhere.
- The added text contains no em dash and no double hyphen: 0 and 0 (script output, last block of Section 3.1). Distinct added line counts: siteName 1, type 1, url 12, total 36.
- Scan-routes simulation (in memory, nothing written): for all 12 files the current parsed record equals the committed manifest record (true for all 12, which also validates the simulation), and after the simulated edit no field differs and wordEstimate is unchanged. So a future `npm run build` would not change docs/seo/route-manifest.json because of this edit.

Scan-routes simulation, part 1 of 1 (lines 1 to 20)

```text
$ node simulate.mjs (in memory only, no file written)
| File | current record equals committed manifest record | wordEstimate now | wordEstimate after simulated edit | any other field differs after edit |
|-|-|-|-|-|
| app/about/page.tsx | true | 732 | 732 | none |
| app/backflow-prevention/page.tsx | true | 413 | 413 | none |
| app/commercial-plumbing/page.tsx | true | 416 | 416 | none |
| app/faucet-sink-repair-installation/page.tsx | true | 393 | 393 | none |
| app/garbage-disposal-repair-installation/page.tsx | true | 369 | 369 | none |
| app/gas-line-plumbing/page.tsx | true | 357 | 357 | none |
| app/plumbing-fixture-repair-replacement-installation/page.tsx | true | 385 | 385 | none |
| app/toilet-repair-installation/page.tsx | true | 393 | 393 | none |
| app/trenchless-piping/page.tsx | true | 392 | 392 | none |
| app/video-camera-plumbing-inspections/page.tsx | true | 391 | 391 | none |
| app/water-meter-pressure-regulator-services/page.tsx | true | 391 | 391 | none |
| app/water-pipe-repair-replacement/page.tsx | true | 396 | 396 | none |
[exit=0]

$ git status [dbl-hyphen]short (confirm no repo change)
?? docs/site-os/reports/og-url-inspection-report.md
?? metadata-rewrite-v3.csv
```


scan-routes extraction rules, part 1 of 1 (lines 1 to 13)

```text
$ rg -n "possibleTitles|title|Title|internalHrefs|schemaTypeHints|openGraph|metadata|siteName" seo-automation/scripts/scan-routes.mjs
118:function extractTitles(content) {
119:  const titles = [];
120:  const metaTitle = /title:\s*["'`]([^"'`]+)["'`]/g;
122:  while ((m = metaTitle.exec(content)) !== null) titles.push(m[1].trim());
123:  const tagTitle = /<title[^>]*>([^<]+)<\/title>/g;
124:  while ((m = tagTitle.exec(content)) !== null) titles.push(m[1].trim());
125:  return uniq(titles).slice(0, 10);
173:    possibleTitles: extractTitles(content),
176:    internalHrefs: extractInternalHrefs(content),
177:    schemaTypeHints: extractSchemaHints(content),
178:    wordEstimate: estimateWords(content),
[exit=0]
```


## 4. Pre-change snapshot plan (Gate 3 order of operations)

out/ was built at 15:35 and HEAD's commit is at 15:49, so by the stated rule out/ counts as older than HEAD (the commits since the build touched only public/_headers, already in that build, and docs). Gate 3 therefore starts with a fresh build.

1. Confirm a clean source tree: `git status` in short form on app, lib, components and public must be empty.
2. Build: `npx next build` (never `npm run build`, because its prebuild hook rewrites the tracked docs/seo/route-manifest.json). Full raw log kept. Then `node scripts/check-sitemap-sync.mjs`. Expect exit 0, 139 HTML files.
3. Snapshot: copy the whole out/ directory to the session scratchpad. Planned path (record this in the Gate 3 report):
   `<session scratchpad folder>\out-snapshot-og-url` (the full absolute path is given in the chat message that accompanies this plan, because the real folder name contains two consecutive hyphens)
   Command: `cp -a out "<that path>"`. Size is about 79 MB, 1468 files. Verify: file count equals out/, and write a SHA-256 list of the snapshot. The snapshot must exist before any source edit.
4. Edit the 12 files (Section 3.2), then check `git diff` with its stat option shows 12 files, 36 insertions, 0 deletions.
5. Rebuild with `npx next build`, then run the check-sitemap-sync script, then validate against the snapshot (Section 5).
6. Keep the snapshot until Sedrick approves the commit. The scratchpad is a session-specific folder, so whether it survives a new session is UNVERIFIED; if Gate 3 runs in a different session, the path may differ and must be re-recorded.

## 5. Validation plan (pass or fail criteria)

Preparation: both builds have a different Next build ID, which appears in every HTML and RSC text file (the earlier Gate 3 run found all 139 HTML and 1062 RSC text files contained it). To isolate real changes, copy both trees to scratch folders, replace each tree's build ID string (the folder name under out/_next/static/ that is not chunks or media) with the token BUILDID in every html and txt file, then compare. Tokenize HTML for comparison by inserting a newline before every `<` so a diff is line based.

| ID | Check | Method | Pass criterion |
|-|-|-|-|
| V1 | Build and sitemap check | npx next build, then node scripts/check-sitemap-sync.mjs | Both exit 0. Sync check reports 137 pages built, 135 sitemap URLs, 2 noindex excluded. TypeScript step in the build passes (it type checks the new openGraph keys). |
| V2 | Page count | find out -name "*.html" then count | 139 |
| V3 | Full content diff versus snapshot, after build ID normalization | diff -rq on the two normalized trees | Exactly 48 files differ and no file is added or removed: for each of the 12 routes, out/ROUTE/index.html, out/ROUTE/index.txt, out/ROUTE/__next._full.txt, out/ROUTE/__next._head.txt. Every differing path is listed in the report. Any other differing path is a FAIL. |
| V4 | HTML diff per page | Tokenized diff of each of the 12 index.html files | Exactly 3 added lines and 0 removed lines per file: the og:url tag (content equals the canonical), og:site_name (content Red Carpet Plumbing), og:type (content website). Anything else is a FAIL. |
| V5 | RSC text files | For each of the 36 changed txt files, compare the sets of quoted string literals in snapshot versus new | No string present in the snapshot is missing from the new file. The only new strings are the three property names, the url value, the siteName value, and the type value. UNVERIFIED expectation: React flight data numbers its head items, so other bytes may shift (renumbered indexes). If so the report shows the raw diff, and the pass test is the string-set test above, not a byte test. |
| V6 | og:url equals canonical on all 135 indexable pages | Script over all 139 built HTML files | 135 of 135 have og:url, and og:url equals the canonical string for each (raw count and a list of any mismatches, expected none). Trailing slash must match exactly. |
| V7 | The 4 noindex pages | Normalized compare of /404.html, /404/index.html, /_not-found/index.html, /thank-you/index.html and their txt files | Identical to the snapshot. They still have no og:url. |
| V8 | Canonical, robots, JSON-LD for the 12 pages | Extract canonical, robots meta, and SHA-256 of every ld+json block, before and after | All equal for all 12. Also the earlier noindex scan: 4 noindex, 135 indexable, 0 canonicals pointing elsewhere, robots values unchanged on all 139 pages. |
| V9 | Everything else unchanged | Normalized hash compare of every other file | All other files identical (JS and CSS chunks, images, sitemap.xml, robots.txt, _headers, the other 123 pages' html and txt). |
| V10 | Manifest | git diff on docs/seo/route-manifest.json | Empty (0 lines), and git status shows no entry under docs/seo. |
| V11 | Source diff shape | git diff with the stat option, and git diff with zero context lines, on the 12 files | 12 files changed, 36 insertions, 0 deletions. Every added line is one of the three allowed forms. git ls-files with its eol option still shows w/crlf for all 12 (not w/mixed). |
| V12 | Forbidden characters | grep for an em dash and for two consecutive hyphens on every added source line and on the three added HTML tags | 0 matches |
| V13 | The 3 comparison pages | Normalized compare of /contact/, /drain-cleaning/, /las-vegas/drain-cleaning/ | Identical to the snapshot |

## 6. Commit plan (Gate 3 ends with an uncommitted working tree; commit only after approval)

- Stage the 12 source files by explicit path, one git add per path, never git add . and never a directory path:
  - git add app/about/page.tsx
  - git add app/backflow-prevention/page.tsx
  - git add app/commercial-plumbing/page.tsx
  - git add app/faucet-sink-repair-installation/page.tsx
  - git add app/garbage-disposal-repair-installation/page.tsx
  - git add app/gas-line-plumbing/page.tsx
  - git add app/plumbing-fixture-repair-replacement-installation/page.tsx
  - git add app/toilet-repair-installation/page.tsx
  - git add app/trenchless-piping/page.tsx
  - git add app/video-camera-plumbing-inspections/page.tsx
  - git add app/water-meter-pressure-regulator-services/page.tsx
  - git add app/water-pipe-repair-replacement/page.tsx
- Do not stage the reports (docs/site-os/reports/og-url-inspection-report.md, this plan, and the Gate 3 report) in the same commit. They are untracked and tracked separately by the standing rule.
- Draft commit message (no em dashes, no double hyphens):

```text
Add og:url, og:site_name and og:type to 12 pages

Add url, siteName and type to the openGraph block of the about page and
11 root service pages that had only title, description and images.
url equals each page's existing canonical. siteName and type match the
other 123 pages. No title, description, image, canonical, schema or
copy changed.

```

- No push and no deploy in the commit step. Push approval and deploy approval are separate and held back.
- git add may print the CRLF to LF warning (core.autocrlf=true), as it did for earlier files. The staged blob must be LF. Check that `git diff` of the staged changes, with its stat option, shows 12 files and 36 insertions.

## 7. Post-deploy plan (after separate push approval)

Poll until the new tags appear, then run production first.

```text
for r in about backflow-prevention commercial-plumbing faucet-sink-repair-installation garbage-disposal-repair-installation gas-line-plumbing plumbing-fixture-repair-replacement-installation toilet-repair-installation trenchless-piping video-camera-plumbing-inspections water-meter-pressure-regulator-services water-pipe-repair-replacement; do
  u="https://redcarpetplumbing.com/${r}/?v=1"
  echo "== ${u}"
  curl -sIL -m 30 "${u}" | tr -d '\r' | grep -i -E "^(HTTP/|x-robots-tag)"
  curl -s -m 30 "${u}" | grep -o -E '<meta property="og:(url|site_name|type)"[^>]*>|<link rel="canonical"[^>]*>|<meta name="robots"[^>]*>'
done
```

Expected per page: HTTP/1.1 200 OK, no x-robots-tag line, three tags (og:url with the page canonical, og:site_name Red Carpet Plumbing, og:type website), one canonical link equal to the og:url value, and no robots meta tag (these pages have none today, so none is expected). Pass: all 12 pages match. Fail: any x-robots-tag on production (revert immediately, as in the earlier header work), any missing tag, any canonical change.

Also check on production: / and /drain-cleaning/ and /las-vegas/drain-cleaning/ are unchanged (robots meta and canonical as in the noindex audit baseline), and /thank-you/ still has robots meta `noindex, nofollow`, no canonical and no og:url. Then pages.dev:

```text
for r in about backflow-prevention gas-line-plumbing; do
  u="https://red-carpet-plumbing-site.pages.dev/${r}/?v=1"
  echo "== ${u}"
  curl -sIL -m 30 "${u}" | tr -d '\r' | grep -i -E "^(HTTP/|x-robots-tag)"
  curl -s -m 30 "${u}" | grep -o -E '<meta property="og:(url|site_name|type)"[^>]*>|<link rel="canonical"[^>]*>'
done
```

Expected on pages.dev: 200, `x-robots-tag: noindex` still present (from public/_headers), the three new tags, and a canonical and og:url that point to https://redcarpetplumbing.com (not pages.dev). A pages.dev og:url pointing at redcarpetplumbing.com is correct because the value is the hardcoded canonical. Hash URL checks remain UNVERIFIED until a real hash URL is provided.

## 8. Risks and how validation catches them

| Risk | Effect | Caught by |
|-|-|-|
| Trailing slash mismatch between url and canonical | og:url differs from canonical | V6 (exact string equality on all 135 pages) and the side-by-side check in Section 3.1 |
| Typo in a route inside a url string | og:url points at a wrong page | V6 and V4 (content must equal the canonical) |
| Edit lands in the wrong place or twice (images line matched in another block) | Extra tags or a broken object | The script refuses unless exactly one match; V11 (36 insertions, 0 deletions); V4 (exactly three added tags) |
| Mixed line endings (CRLF files edited with LF lines) | Noisy git diff, w/mixed | V11 eol check and the git diff stat showing 3 insertions per file |
| TypeScript rejects a key | Build fails | V1 (TypeScript runs in next build) |
| Other tags change because Next re-orders head output | Unexpected diff | V4 tokenized diff (any added or removed line other than the three is a fail) |
| Wrong file edited (a lookalike route, or a noindex page) | Unapproved change | V3 (exactly 48 expected paths), V7, V13 |
| Manifest regenerated | Tracked file changes | Build uses npx next build only; V10 |
| Build ID noise hides a real difference | Missed change | Normalization step replaces only the two build ID strings; V9 compares every other file |
| Fix goes live but canonical or robots altered | SEO regression | V8 before deploy, Section 7 after deploy |
| Production gets an X-Robots-Tag header by accident | Whole site noindex | Section 7 header check right after deploy; the edit does not touch public/_headers |

## 9. UNVERIFIED items

1. How the Edit tool handles CRLF files (avoided by using a byte-level insert script and checking eol after).
2. Whether the React flight RSC payload renumbers other bytes when three head items are added (V5 uses a string-set test, and the real diff will be shown in the Gate 3 report).
3. That Next.js will emit the three tags for these pages in the same relative position as for the comparison pages (the comparison pages show og:url and og:site_name after og:description and og:type after the og:image tags; V4 verifies actual output).
4. That the live production HTML for the 12 pages matches local out/ today (no live check in this gate).
5. Whether the session scratchpad snapshot survives into a later session.
6. What build command Cloudflare runs (the repo has no Cloudflare config). If it runs npm run build, the prebuild hook regenerates the manifest in the deploy environment only. The simulation shows the manifest would not differ because of this edit.
7. The one page.tsx whose openGraph has no images key (key order tally); not one of the 12 and not investigated.
8. Social platform behavior with og:url, og:site_name and og:type is not tested.

## 10. Housekeeping and questions for Sedrick

- docs/site-os/reports/og-url-inspection-report.md and this plan are untracked. Commit them separately later, as before.
- Question: the Gate 3 insert will be done with a byte-level script to preserve CRLF. Is that acceptable, or do you prefer the Edit tool with an eol check?
- Question: approve Gate 3 (build, snapshot, edit 12 files, rebuild, validate, no commit)?
