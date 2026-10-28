# Metadata Length Audit (read-only)

Generated 2026-10-12. Branch main at a280deb, clean working tree before the audit. No source file was edited.

## What was measured

- Source of truth: the prerendered `out/` produced by `npm run build` in the real repo (not a scratch copy). `npm run lint` passed with no output and the build exited 0 (the `prebuild` scan wrote 135 routes). Google Fonts fetched fine, so no `next/font` stub was needed.
- 134 indexable pages measured (every `out/**/index.html` except `/thank-you/`, `/404/`, `/_not-found/`).
- Pixel widths are labeled ESTIMATES: Pillow `getlength` with the Windows Arial TrueType at 20px (titles, truncation near 600px) and 14px (descriptions, about 920px desktop and 680px mobile). Google does not use exactly these metrics, so treat them as approximations.
- Suffix: ` | Red Carpet Plumbing` is 22 characters and is hardcoded in each page's own metadata. 133 of 134 titles carry it; `/about/` does not.
- Full per-page inventory: `docs/site-os/reports/metadata-length-audit.csv`.

## Headline counts

| Check | Count |
|---|---|
| Indexable pages | 134 |
| Titles over 60 characters | 81 |
| Titles over 65 characters | 65 (matches the launch audit) |
| Longest title | 101 (`/north-las-vegas/aliante-area/water-heater-repair-installation/`) |
| Titles over about 600px (estimate) | 73 |
| Descriptions over 155 characters | 98 |
| Descriptions over 165 characters | 91 (matches the launch audit) |
| Longest description | 282 (`/north-las-vegas/water-heater-repair-installation/`) |
| Descriptions under 70 characters | 0 (shortest is 132) |
| Descriptions over about 920px desktop (estimate) | 124 |
| Descriptions over about 680px mobile (estimate) | 134 (every page) |

The launch audit reported a longest title of 79. The measured longest is 101 because the five `/north-las-vegas/aliante-area/` pages carry the longest titles.

## Step 3: per type

| Type | Pages | Title>60 | Title>65 | Title min | Title median | Title max | Desc>155 | Desc>165 | Desc<70 | Desc min | Desc median | Desc max |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 Home | 1 | 0 | 0 | 55 | 55 | 55 | 0 | 0 | 0 | 153 | 153 | 153 |
| 2 Core pages | 6 | 1 | 0 | 36 | 51.5 | 64 | 3 | 3 | 0 | 152 | 161.5 | 203 |
| 3 Core service pages | 18 | 12 | 10 | 53 | 68.0 | 92 | 18 | 18 | 0 | 173 | 219.5 | 230 |
| 4 Location hubs | 11 | 3 | 1 | 55 | 59 | 71 | 2 | 0 | 0 | 145 | 151 | 157 |
| 5 Las Vegas service pages | 15 | 9 | 8 | 53 | 67 | 79 | 14 | 14 | 0 | 149 | 203 | 278 |
| 6 Location + service pages | 83 | 56 | 46 | 52 | 68 | 101 | 61 | 56 | 0 | 132 | 208 | 282 |
| ALL | 134 | 81 | 65 | 36 | 64.5 | 101 | 98 | 91 | 0 | 132 | 202.5 | 282 |

## Step 4.2 top 15 longest titles

| Route | Title | Len | Lead len | Est px (Arial 20) |
|---|---|---|---|---|
| /north-las-vegas/aliante-area/water-heater-repair-installation/ | Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 101 | 79 | 917 |
| /north-las-vegas/aliante-area/slab-leak-detection-repair/ | Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 95 | 73 | 874 |
| /green-valley/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 92 | 70 | 845 |
| /plumbing-fixture-repair-replacement-installation/ | Plumbing Fixture Repair, Replacement and Installation in Las Vegas, NV \| Red Carpet Plumbing | 92 | 70 | 849 |
| /lake-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing | 91 | 69 | 849 |
| /north-las-vegas/aliante-area/leak-detection-repair/ | Leak Detection and Repair in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 90 | 68 | 829 |
| /green-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 89 | 67 | 821 |
| /lake-las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing | 85 | 63 | 806 |
| /north-las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in North Las Vegas, NV \| Red Carpet Plumbing | 85 | 63 | 785 |
| /green-valley/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Green Valley, Henderson, NV \| Red Carpet Plumbing | 83 | 61 | 778 |
| /green-valley/toilet-repair-installation/ | Toilet Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 83 | 61 | 749 |
| /north-las-vegas/aliante-area/emergency-plumbing/ | Emergency Plumbing in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 83 | 61 | 782 |
| /water-meter-pressure-regulator-services/ | Water Meter and Pressure Regulator Services in Las Vegas, NV \| Red Carpet Plumbing | 82 | 60 | 778 |
| /north-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in North Las Vegas, NV \| Red Carpet Plumbing | 81 | 59 | 746 |
| /lake-las-vegas/leak-detection-repair/ | Leak Detection and Repair in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing | 80 | 58 | 761 |

## Top 15 longest descriptions

| Route | Len | Est px (Arial 14) | Description |
|---|---|---|---|
| /north-las-vegas/water-heater-repair-installation/ | 282 | 1828 | Red Carpet Plumbing repairs and installs water heaters throughout North Las Vegas, NV, including the Aliante area. Tank and tankless water heaters, hard water maintenance, commercial high-capacity systems, and Clark County code installations. Licensed plumbers. Call (702) 567-9172. |
| /las-vegas/leak-detection-repair/ | 278 | 1792 | Red Carpet Plumbing provides professional leak detection and repair in Las Vegas, NV. Hidden leaks, slab leaks, wall leaks, and underground lines located with acoustic sensors and electronic detection equipment. No unnecessary demolition. Licensed plumbers. Call (702) 567-9172. |
| /boulder-city/water-heater-repair-installation/ | 269 | 1725 | Red Carpet Plumbing provides water heater repair and installation in Boulder City, NV. Tank and tankless water heaters, sediment flushing, anode rod replacement, thermal expansion tanks. Boulder City code-compliant installations. Licensed plumbers. Call (702) 567-9172. |
| /las-vegas/drain-cleaning/ | 260 | 1675 | Red Carpet Plumbing provides professional drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Las Vegas hard water and aging pipes are the leading causes of drain clogs. Licensed plumbers. Call (702) 567-9172. |
| /henderson/water-heater-repair-installation/ | 257 | 1683 | Red Carpet Plumbing repairs and installs water heaters throughout Henderson, NV, including Green Valley and Lake Las Vegas. Tank and tankless water heaters, hard water maintenance, and Clark County code installations. Licensed plumbers. Call (702) 567-9172. |
| /north-las-vegas/leak-detection-repair/ | 254 | 1630 | Professional leak detection and repair in North Las Vegas, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Aliante, central North Las Vegas, and all NLV communities. |
| /henderson/leak-detection-repair/ | 250 | 1625 | Professional leak detection and repair in Henderson, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, and all Henderson communities. |
| /las-vegas/slab-leak-detection-repair/ | 250 | 1613 | Professional slab leak detection and repair in Las Vegas, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving older Las Vegas neighborhoods and the greater Las Vegas Valley. |
| /enterprise/water-heater-repair-installation/ | 249 | 1623 | Water heater repair and installation in Enterprise, NV. Red Carpet Plumbing serves Rhodes Ranch, Mountain's Edge, and all Enterprise communities. Tank and tankless water heaters. Clark County code-compliant installation. NV #048585A. (702) 567-9172. |
| /spring-valley/commercial-plumbing/ | 248 | 1657 | Licensed commercial plumbing in Spring Valley, NV. Red Carpet Plumbing serves businesses, restaurants, property managers, and HOA communities throughout Spring Valley. NV License #048585A, C-1 Plumbing and Heating. Clark County permits coordinated. |
| /henderson/slab-leak-detection-repair/ | 247 | 1599 | Professional slab leak detection and repair in Henderson, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, and all Henderson communities. |
| /lake-las-vegas/leak-detection-repair/ | 247 | 1604 | Non-invasive leak detection and repair in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing locates hidden water leaks using acoustic sensors, pressure testing, and thermal imaging for Lake Las Vegas resort residential homes. Call (702) 567-9172. |
| /north-las-vegas/repiping/ | 247 | 1631 | Red Carpet Plumbing provides whole-house and partial repiping throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers. Call (702) 567-9172. |
| /enterprise/leak-detection-repair/ | 245 | 1607 | Professional non-invasive leak detection and repair in Enterprise, NV. Red Carpet Plumbing locates hidden water leaks using acoustic sensors, pressure testing, and thermal imaging. Rhodes Ranch, Mountain's Edge, Southwest Las Vegas. NV #048585A. |
| /las-vegas/water-heater-repair-installation/ | 243 | 1581 | Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas, NV. Tank and tankless water heaters, hard water sediment flushing, anode rod replacement, and Clark County code installations. Licensed plumbers. Call (702) 567-9172. |

## 4.3 suffix-drop

pages with suffix: 133 of 134
title>60 now: 81 ; lead>60 (suffix dropped): 12 ; fit <=60 after drop: 122
title>65 now: 65 ; lead>65: 7
lead budget with suffix kept at 60: 38 ; at 65: 43 ; without suffix: 60 / 65

Lead-length histogram: [(14, 1), (20, 1), (27, 1), (30, 1), (31, 5), (32, 1), (33, 4), (34, 15), (35, 7), (36, 8), (37, 5), (38, 3), (39, 2), (40, 3), (41, 2), (42, 7), (43, 2), (44, 1), (45, 5), (46, 1), (47, 9), (48, 3), (49, 2), (50, 6), (51, 2), (52, 1), (53, 6), (54, 2), (56, 7), (57, 6), (58, 1), (59, 1), (60, 1), (61, 3), (63, 2), (67, 1), (68, 1), (69, 1), (70, 2), (73, 1), (79, 1)]

## Px stats

titles est px >600: 73 max 917 | lead-only px >600: n/a
desc est px >920: 124 >680: 134 max 1828

## Step 4.1 templates (types 5, 6): title/desc shapes

5 Las Vegas service pages 15
 shape(has ' in ', has comma, has pipe, ends 'NV | Red Carpet Plumbing') = (True, True, True, True) count 15
   ex: /las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing | 79
   ex: /las-vegas/backflow-prevention/ | Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing | 67
   ex: /las-vegas/commercial-plumbing/ | Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing | 58
6 Location + service pages 83
 shape(has ' in ', has comma, has pipe, ends 'NV | Red Carpet Plumbing') = (True, True, True, True) count 83
   ex: /north-las-vegas/aliante-area/water-heater-repair-installation/ | Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing | 101
   ex: /boulder-city/drain-cleaning/ | Drain Cleaning in Boulder City, NV | Red Carpet Plumbing | 56
   ex: /boulder-city/emergency-plumbing/ | Emergency Plumbing in Boulder City, NV | Red Carpet Plumbing | 60


## 4.1 title templates (types 5,6) by location-phrase

| Location phrase in title | Pages | Min len | Max len | Template |
|---|---|---|---|---|
| the Aliante Area of North Las Vegas, NV | 5 | 79 | 101 | {Service} in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing |
| Green Valley, Henderson, NV | 8 | 67 | 92 | {Service} in Green Valley, Henderson, NV \| Red Carpet Plumbing |
| Lake Las Vegas, Henderson, NV | 5 | 69 | 91 | {Service} in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing |
| North Las Vegas, NV | 11 | 53 | 85 | {Service} in North Las Vegas, NV \| Red Carpet Plumbing |
| Henderson, NV | 14 | 53 | 79 | {Service} in Henderson, NV \| Red Carpet Plumbing |
| Las Vegas, NV | 15 | 53 | 79 | {Service} in Las Vegas, NV \| Red Carpet Plumbing |
| Spring Valley, NV | 8 | 57 | 79 | {Service} in Spring Valley, NV \| Red Carpet Plumbing |
| Summerlin, NV | 12 | 53 | 79 | {Service} in Summerlin, NV \| Red Carpet Plumbing |
| Boulder City, NV | 4 | 56 | 78 | {Service} in Boulder City, NV \| Red Carpet Plumbing |
| Enterprise, NV | 8 | 54 | 76 | {Service} in Enterprise, NV \| Red Carpet Plumbing |
| Paradise, NV | 8 | 52 | 74 | {Service} in Paradise, NV \| Red Carpet Plumbing |

Examples (3 each, longest first):
- the Aliante Area of North Las Vegas, NV
    101 /north-las-vegas/aliante-area/water-heater-repair-installation/ | Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing
    95 /north-las-vegas/aliante-area/slab-leak-detection-repair/ | Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing
    90 /north-las-vegas/aliante-area/leak-detection-repair/ | Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing
- Green Valley, Henderson, NV
    92 /green-valley/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing
    89 /green-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing
    83 /green-valley/toilet-repair-installation/ | Toilet Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing
- Lake Las Vegas, Henderson, NV
    91 /lake-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing
    85 /lake-las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing
    80 /lake-las-vegas/leak-detection-repair/ | Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing
- North Las Vegas, NV
    85 /north-las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing
    81 /north-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing
    78 /north-las-vegas/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in North Las Vegas, NV | Red Carpet Plumbing
- Henderson, NV
    79 /henderson/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing
    78 /henderson/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing
    75 /henderson/water-heater-repair-installation/ | Water Heater Repair and Installation in Henderson, NV | Red Carpet Plumbing
- Las Vegas, NV
    79 /las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    78 /las-vegas/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    75 /las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
- Spring Valley, NV
    79 /spring-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Spring Valley, NV | Red Carpet Plumbing
    73 /spring-valley/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing
    68 /spring-valley/leak-detection-repair/ | Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing
- Summerlin, NV
    79 /summerlin/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Summerlin, NV | Red Carpet Plumbing
    78 /summerlin/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Summerlin, NV | Red Carpet Plumbing
    75 /summerlin/water-heater-repair-installation/ | Water Heater Repair and Installation in Summerlin, NV | Red Carpet Plumbing
- Boulder City, NV
    78 /boulder-city/water-heater-repair-installation/ | Water Heater Repair and Installation in Boulder City, NV | Red Carpet Plumbing
    67 /boulder-city/leak-detection-repair/ | Leak Detection and Repair in Boulder City, NV | Red Carpet Plumbing
    60 /boulder-city/emergency-plumbing/ | Emergency Plumbing in Boulder City, NV | Red Carpet Plumbing
- Enterprise, NV
    76 /enterprise/water-heater-repair-installation/ | Water Heater Repair and Installation in Enterprise, NV | Red Carpet Plumbing
    70 /enterprise/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing
    65 /enterprise/leak-detection-repair/ | Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing
- Paradise, NV
    74 /paradise/water-heater-repair-installation/ | Water Heater Repair and Installation in Paradise, NV | Red Carpet Plumbing
    66 /paradise/backflow-prevention/ | Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing
    63 /paradise/leak-detection-repair/ | Leak Detection and Repair in Paradise, NV | Red Carpet Plumbing

## Description openers (types 5,6)

33 Red Carpet Plumbing
7 Water heater repair
6 Professional drain cleaning
5 Licensed commercial plumbing
5 Non-invasive leak detection
4 Sewer line inspection,
3 Professional slab leak
3 Garbage disposal repair
3 Professional repiping services
3 Water pipe repair
3 Slab leak detection
2 Emergency plumbing in
2 Emergency plumbing service
2 Non-invasive slab leak
2 Backflow preventer installation,
2 Faucet and sink
2 Professional leak detection
2 Toilet repair and
2 Need an emergency
2 Gas line repair,
1 Professional non-invasive leak
1 Whole-house and partial
1 Slow or clogged
1 Need emergency plumbing
1 Professional repiping in

Descriptions ending with phone/call phrase: 88 of 98

## Service-name contribution: avg lead len by service slug (types 5,6, plus 3)

| Service slug | Pages | Avg lead | Max lead |
|---|---|---|---|
| plumbing-fixture-repair-replacement-installation | 1 | 70.0 | 70 |
| water-meter-pressure-regulator-services | 1 | 60.0 | 60 |
| faucet-sink-repair-installation | 5 | 58.8 | 70 |
| water-heater-repair-installation | 12 | 58.8 | 79 |
| garbage-disposal-repair-installation | 5 | 58.2 | 63 |
| slab-leak-detection-repair | 10 | 53.7 | 73 |
| water-pipe-repair-replacement | 5 | 51.2 | 56 |
| toilet-repair-installation | 6 | 50.3 | 61 |
| video-camera-plumbing-inspections | 2 | 50.0 | 50 |
| leak-detection-repair | 12 | 47.8 | 68 |
| backflow-prevention | 4 | 44.8 | 45 |
| trenchless-piping | 1 | 43.0 | 43 |
| emergency-plumbing | 12 | 40.5 | 61 |
| commercial-plumbing | 7 | 37.4 | 42 |
| sewer-line-services | 8 | 37.2 | 42 |
| drain-cleaning | 12 | 36.8 | 57 |
| repiping | 8 | 36.0 | 48 |
| gas-line-plumbing | 5 | 33.8 | 34 |

| City | Pages | Avg title len | Max title len | Titles >60 | Titles >65 |
|---|---|---|---|---|---|
| north-las-vegas/aliante-area | 5 | 89.6 | 101 | 5 | 5 |
| lake-las-vegas | 5 | 79.6 | 91 | 5 | 5 |
| green-valley | 8 | 79.1 | 92 | 8 | 8 |
| north-las-vegas | 11 | 69.7 | 85 | 9 | 6 |
| las-vegas | 15 | 65.5 | 79 | 9 | 8 |
| summerlin | 12 | 65.4 | 79 | 7 | 6 |
| boulder-city | 4 | 65.2 | 78 | 2 | 2 |
| spring-valley | 8 | 65.2 | 79 | 6 | 3 |
| henderson | 14 | 65.1 | 79 | 8 | 7 |
| enterprise | 8 | 62.2 | 76 | 3 | 2 |
| paradise | 8 | 59.9 | 74 | 3 | 2 |

## Step 6.1 duplicates

Duplicate titles: 15 distinct texts, 30 pages

| Route A | Route B | Text | Length |
|---|---|---|---|
| /backflow-prevention/ | /las-vegas/backflow-prevention/ | Backflow Prevention Services in Las Vegas, NV \| Red Carpet Plumbing | 67 |
| /commercial-plumbing/ | /las-vegas/commercial-plumbing/ | Commercial Plumbing in Las Vegas, NV \| Red Carpet Plumbing | 58 |
| /drain-cleaning/ | /las-vegas/drain-cleaning/ | Drain Cleaning in Las Vegas, NV \| Red Carpet Plumbing | 53 |
| /faucet-sink-repair-installation/ | /las-vegas/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Las Vegas, NV \| Red Carpet Plumbing | 78 |
| /garbage-disposal-repair-installation/ | /las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Las Vegas, NV \| Red Carpet Plumbing | 79 |
| /gas-line-plumbing/ | /las-vegas/gas-line-plumbing/ | Gas Line Plumbing in Las Vegas, NV \| Red Carpet Plumbing | 56 |
| /las-vegas-plumbing-services/ | /plumbing-services/ | Plumbing Services in Las Vegas, NV \| Red Carpet Plumbing | 56 |
| /las-vegas/leak-detection-repair/ | /leak-detection-repair/ | Leak Detection and Repair in Las Vegas, NV \| Red Carpet Plumbing | 64 |
| /las-vegas/repiping/ | /repiping/ | Repiping Services in Las Vegas, NV \| Red Carpet Plumbing | 56 |
| /las-vegas/sewer-line-services/ | /sewer-line-services/ | Sewer Line Services in Las Vegas, NV \| Red Carpet Plumbing | 58 |
| /las-vegas/slab-leak-detection-repair/ | /slab-leak-detection-repair/ | Slab Leak Detection and Repair in Las Vegas, NV \| Red Carpet Plumbing | 69 |
| /las-vegas/toilet-repair-installation/ | /toilet-repair-installation/ | Toilet Repair and Installation in Las Vegas, NV \| Red Carpet Plumbing | 69 |
| /las-vegas/video-camera-plumbing-inspections/ | /video-camera-plumbing-inspections/ | Video Camera Plumbing Inspections in Las Vegas, NV \| Red Carpet Plumbing | 72 |
| /las-vegas/water-heater-repair-installation/ | /water-heater-repair-installation/ | Water Heater Repair and Installation in Las Vegas, NV \| Red Carpet Plumbing | 75 |
| /las-vegas/water-pipe-repair-replacement/ | /water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in Las Vegas, NV \| Red Carpet Plumbing | 72 |

Duplicate descriptions: 0 distinct texts, 0 pages

| Route A | Route B | Text | Length |
|---|---|---|---|

## 6.2 core vs LV twin

twin count: 15 

| Core route | LV route | Titles identical | Descriptions identical | Canonical core | Canonical LV | Visible text similarity (est) |
|---|---|---|---|---|---|---|
| /backflow-prevention/ | /las-vegas/backflow-prevention/ | True | False | https://redcarpetplumbing.com/backflow-prevention/ | https://redcarpetplumbing.com/las-vegas/backflow-prevention/ | 0.73 |
| /commercial-plumbing/ | /las-vegas/commercial-plumbing/ | True | False | https://redcarpetplumbing.com/commercial-plumbing/ | https://redcarpetplumbing.com/las-vegas/commercial-plumbing/ | 0.59 |
| /drain-cleaning/ | /las-vegas/drain-cleaning/ | True | False | https://redcarpetplumbing.com/drain-cleaning/ | https://redcarpetplumbing.com/las-vegas/drain-cleaning/ | 0.45 |
| /emergency-plumbing/ | /las-vegas/emergency-plumbing/ | False | False | https://redcarpetplumbing.com/emergency-plumbing/ | https://redcarpetplumbing.com/las-vegas/emergency-plumbing/ | 0.28 |
| /faucet-sink-repair-installation/ | /las-vegas/faucet-sink-repair-installation/ | True | False | https://redcarpetplumbing.com/faucet-sink-repair-installation/ | https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/ | 0.66 |
| /garbage-disposal-repair-installation/ | /las-vegas/garbage-disposal-repair-installation/ | True | False | https://redcarpetplumbing.com/garbage-disposal-repair-installation/ | https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/ | 0.76 |
| /gas-line-plumbing/ | /las-vegas/gas-line-plumbing/ | True | False | https://redcarpetplumbing.com/gas-line-plumbing/ | https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/ | 0.51 |
| /leak-detection-repair/ | /las-vegas/leak-detection-repair/ | True | False | https://redcarpetplumbing.com/leak-detection-repair/ | https://redcarpetplumbing.com/las-vegas/leak-detection-repair/ | 0.59 |
| /repiping/ | /las-vegas/repiping/ | True | False | https://redcarpetplumbing.com/repiping/ | https://redcarpetplumbing.com/las-vegas/repiping/ | 0.51 |
| /sewer-line-services/ | /las-vegas/sewer-line-services/ | True | False | https://redcarpetplumbing.com/sewer-line-services/ | https://redcarpetplumbing.com/las-vegas/sewer-line-services/ | 0.31 |
| /slab-leak-detection-repair/ | /las-vegas/slab-leak-detection-repair/ | True | False | https://redcarpetplumbing.com/slab-leak-detection-repair/ | https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/ | 0.48 |
| /toilet-repair-installation/ | /las-vegas/toilet-repair-installation/ | True | False | https://redcarpetplumbing.com/toilet-repair-installation/ | https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/ | 0.64 |
| /video-camera-plumbing-inspections/ | /las-vegas/video-camera-plumbing-inspections/ | True | False | https://redcarpetplumbing.com/video-camera-plumbing-inspections/ | https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/ | 0.67 |
| /water-heater-repair-installation/ | /las-vegas/water-heater-repair-installation/ | True | False | https://redcarpetplumbing.com/water-heater-repair-installation/ | https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/ | 0.47 |
| /water-pipe-repair-replacement/ | /las-vegas/water-pipe-repair-replacement/ | True | False | https://redcarpetplumbing.com/water-pipe-repair-replacement/ | https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/ | 0.27 |

Twin titles and descriptions (raw):

- /backflow-prevention/
    T: Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses throughout Las Vegas. Annual testing required by LVVWD. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/backflow-prevention/
    T: Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses in Las Vegas, NV. LVVWD compliance. Irrigation PVB installation. NV #048585A. Call (702) 567-9172.
- /commercial-plumbing/
    T: Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout Las Vegas and the Las Vegas Valley. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/commercial-plumbing/
    T: Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing
    D: Licensed commercial plumbing services in Las Vegas, NV. Red Carpet Plumbing serves businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas. NV Licensed #048585A. Call (702) 567-9172.
- /drain-cleaning/
    T: Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/drain-cleaning/
    T: Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides professional drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Las Vegas hard water and aging pipes are the leading causes of drain clogs. Licensed plumbers. Call (702) 567-9172.
- /emergency-plumbing/
    T: Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides 24/7 emergency plumbing in Las Vegas and the Las Vegas Valley. Burst pipes, sewer backups, water heater failures, and more. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/emergency-plumbing/
    T: Emergency Plumbing in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides emergency plumbing service in Las Vegas, NV. Burst pipes, sewer backups, water heater failures, slab leaks, and gas line emergencies. Licensed plumbers. Call (702) 567-9172.
- /faucet-sink-repair-installation/
    T: Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs faucets and sinks for kitchens, bathrooms, and utility areas throughout Las Vegas. Dripping faucets, low pressure, sink installs. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/faucet-sink-repair-installation/
    T: Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs faucets and sinks throughout Las Vegas, NV. Dripping faucets, low pressure, under-sink leaks, sink installation. NV #048585A. Call (702) 567-9172.
- /garbage-disposal-repair-installation/
    T: Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs garbage disposals for kitchens throughout Las Vegas and the Las Vegas Valley. Jammed, leaking, or not working. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/garbage-disposal-repair-installation/
    T: Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs garbage disposals throughout Las Vegas, NV. Jammed, leaking, or not working. Discharge line cleaning. NV #048585A. Call (702) 567-9172.
- /gas-line-plumbing/
    T: Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/gas-line-plumbing/
    T: Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and emergency service in Las Vegas, NV. NV C-1 License #048585A. Call (702) 567-9172.
- /leak-detection-repair/
    T: Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides professional leak detection and repair throughout Las Vegas and the Las Vegas Valley. Hidden leaks, slab leaks, wall leaks, underground lines. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/leak-detection-repair/
    T: Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides professional leak detection and repair in Las Vegas, NV. Hidden leaks, slab leaks, wall leaks, and underground lines located with acoustic sensors and electronic detection equipment. No unnecessary demolition. Licensed plumbers. Call (702) 567-9172.
- /repiping/
    T: Repiping Services in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides whole-house and partial repiping in Las Vegas and the Las Vegas Valley. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/repiping/
    T: Repiping Services in Las Vegas, NV | Red Carpet Plumbing
    D: Professional repiping services in Las Vegas, NV. Red Carpet Plumbing replaces polybutylene, Kitec, galvanized, and aging copper pipe throughout Las Vegas. PEX and copper repiping. Permits pulled and inspections scheduled.
- /sewer-line-services/
    T: Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout Las Vegas and the Las Vegas Valley. Trenchless options available. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/sewer-line-services/
    T: Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement in Las Vegas, NV. Camera inspection before repair. Licensed plumbers. NV #048585A. Call (702) 567-9172.
- /slab-leak-detection-repair/
    T: Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing provides professional slab leak detection and repair throughout Las Vegas and the Las Vegas Valley. Acoustic detection, pipe rerouting, epoxy lining. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/slab-leak-detection-repair/
    T: Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing
    D: Professional slab leak detection and repair in Las Vegas, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving older Las Vegas neighborhoods and the greater Las Vegas Valley.
- /toilet-repair-installation/
    T: Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas and the Las Vegas Valley. Running toilets, base leaks, clogs, and new installations. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/toilet-repair-installation/
    T: Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas, NV. Running toilets, base leaks, wax ring replacement, clogs, and new installations. NV #048585A. Call (702) 567-9172.
- /video-camera-plumbing-inspections/
    T: Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing performs video camera plumbing inspections for homes and businesses throughout Las Vegas. Root intrusion, pipe bellies, blockages, and pre-purchase inspections. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/video-camera-plumbing-inspections/
    T: Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing performs sewer and drain camera inspections in Las Vegas, NV. Root intrusion, pipe belly detection, pre-purchase inspections, post-cleaning confirmation. NV #048585A. Call (702) 567-9172.
- /water-heater-repair-installation/
    T: Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas and the Las Vegas Valley. Tank and tankless water heaters, licensed plumbers, 4.8-star rated. Call (702) 567-9172.
  /las-vegas/water-heater-repair-installation/
    T: Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas, NV. Tank and tankless water heaters, hard water sediment flushing, anode rod replacement, and Clark County code installations. Licensed plumbers. Call (702) 567-9172.
- /water-pipe-repair-replacement/
    T: Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing
    D: Red Carpet Plumbing repairs and replaces water supply pipes throughout Las Vegas and the Las Vegas Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipe replacement. NV Licensed #048585A. Call (702) 567-9172.
  /las-vegas/water-pipe-repair-replacement/
    T: Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing
    D: Water pipe repair and replacement in Las Vegas, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172.

## 6.3 og:image / twitter:card

og:image present: 0 of 134
twitter:card present: 134 of 134 Counter({'summary': 134})
og:title==title: 130 ; og:description==description: 49
og:title absent: 0 ; og:description absent: 0 ; twitter:title absent: 0 ; twitter:description absent: 0
twitter:title==title: 130 ; twitter:description==description: 49
canonical absent: 0


## Step 7 keyword preservation

Location phrase check. A page is flagged when the city phrase or ", NV" would end after character 60, so a hard cut at 60 would remove part of the location. No title lacks its city, and no city name starts after character 60. Column meaning: city start index, city end index, index where ", NV" begins (the comma), and index where it ends. Page type counts for this check are 109 location-bearing pages (hubs, Las Vegas service pages, location service pages).

Titles where city phrase absent: []

flagged: 11 of 109 location-bearing pages

| Route | Title | City starts at (char) | City ends at | 'NV' starts at | 'NV' ends at |
|---|---|---|---|---|---|
| /green-valley/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 43 | 55 | 66 | 70 |
| /green-valley/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Green Valley, Henderson, NV \| Red Carpet Plumbing | 34 | 46 | 57 | 61 |
| /green-valley/toilet-repair-installation/ | Toilet Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 34 | 46 | 57 | 61 |
| /green-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Green Valley, Henderson, NV \| Red Carpet Plumbing | 40 | 52 | 63 | 67 |
| /lake-las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing | 34 | 48 | 59 | 63 |
| /lake-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV \| Red Carpet Plumbing | 40 | 54 | 65 | 69 |
| /north-las-vegas/aliante-area/emergency-plumbing/ | Emergency Plumbing in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 26 | 33 | 57 | 61 |
| /north-las-vegas/aliante-area/leak-detection-repair/ | Leak Detection and Repair in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 33 | 40 | 64 | 68 |
| /north-las-vegas/aliante-area/slab-leak-detection-repair/ | Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 38 | 45 | 69 | 73 |
| /north-las-vegas/aliante-area/water-heater-repair-installation/ | Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV \| Red Carpet Plumbing | 44 | 51 | 75 | 79 |
| /north-las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in North Las Vegas, NV \| Red Carpet Plumbing | 44 | 59 | 59 | 63 |

Service phrase check (slug words in title vs H1):
pages where first-two-slug-words phrase is missing from title or ends beyond char 60: 8
  ('/emergency-plumbing/', 'Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing', 'emergency plumbing', True)
  ('/faucet-sink-repair-installation/', 'Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing', 'faucet sink', False)
  ('/green-valley/faucet-sink-repair-installation/', 'Faucet and Sink Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing', 'faucet sink', False)
  ('/henderson/faucet-sink-repair-installation/', 'Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing', 'faucet sink', False)
  ('/las-vegas/faucet-sink-repair-installation/', 'Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing', 'faucet sink', False)
  ('/paradise/emergency-plumbing/', 'Emergency Plumber in Paradise, NV | Red Carpet Plumbing', 'emergency plumbing', True)
  ('/summerlin/emergency-plumbing/', 'Emergency Plumber in Summerlin, NV | Red Carpet Plumbing', 'emergency plumbing', True)
  ('/summerlin/faucet-sink-repair-installation/', 'Faucet and Sink Repair and Installation in Summerlin, NV | Red Carpet Plumbing', 'faucet sink', False)


Reading of the service check: the four "faucet sink" hits are false positives of the slug heuristic (titles say "Faucet and Sink"). The real finding is that three titles use "Emergency Plumber" while the H1 uses "Emergency Plumbing" (`/emergency-plumbing/`, `/paradise/emergency-plumbing/`, `/summerlin/emergency-plumbing/`). That is a wording difference, not a dropped keyword.

## Step 5 metadata declarations in source

All pages use a hand-written `export const metadata: Metadata` literal. No `generateMetadata`, no title template, no `absolute`, no shared helper. `lib/` holds only `faq.ts`, which does not generate metadata, and nothing under `components/` does either. Titles are plain strings with the suffix hardcoded. `openGraph` is set explicitly on every page (strings duplicated, not inherited).

Root layout (`app/layout.tsx`) default:

```
20: export const metadata: Metadata = {
21:   metadataBase: new URL("https://redcarpetplumbing.com"),
22:   title: "Red Carpet Plumbing",
23:   description:
24:     "Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities.",
25:   verification: {
26:     google: "rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8",
27:   },
```

Representative declarations (raw lines):

```
=== app/page.tsx
17: export const metadata: Metadata = {
18:   title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
19:   description:
20:     "Local, family-owned Las Vegas plumbing company. Emergency plumbing, drain cleaning, water heater repair, slab leak repair, and more. Call (702) 567-9172.",
21:   alternates: {
22:     canonical: "https://redcarpetplumbing.com/",
23:   },
24:   openGraph: {
25:     title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
26:     description:
27:       "Local Las Vegas plumbers available for emergency plumbing, drain cleaning, water heater repair, leak detection, slab leak repair, and more. Serving the full Las Vegas Valley. Call (702) 567-9172.",
28:     url: "https://redcarpetplumbing.com/",
29:     siteName: "Red Carpet Plumbing",
30:     type: "website",
31:   },
32:   robots: { index: true, follow: true },
33: };

=== app/contact/page.tsx
14: export const metadata: Metadata = {
15:   title: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
16:   description:
17:     "Contact Red Carpet Plumbing to request plumbing service in Las Vegas and the Las Vegas Valley. Call or submit a service request for residential and commercial plumbing.",
18:   alternates: {
19:     canonical: "https://redcarpetplumbing.com/contact/",
20:   },
21:   openGraph: {
22:     title: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
23:     description:
24:       "Request plumbing service, ask about service areas, or get a quote from Red Carpet Plumbing. Serving Las Vegas, Henderson, North Las Vegas, Summerlin, and the Las Vegas Valley.",
25:     url: "https://redcarpetplumbing.com/contact/",
26:     siteName: "Red Carpet Plumbing",
27:     locale: "en_US",
28:     type: "website",
29:   },
30:   robots: { index: true, follow: true },
31: };

=== app/drain-cleaning/page.tsx
17: export const metadata: Metadata = {
18:   title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
19:   description:
20:     "Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
21:   alternates: {
22:     canonical: "https://redcarpetplumbing.com/drain-cleaning/",
23:   },
24:   openGraph: {
25:     title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
26:     description:
27:       "Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
28:     url: "https://redcarpetplumbing.com/drain-cleaning/",
29:     siteName: "Red Carpet Plumbing",
30:     type: "website",
31:   },
32: };

=== app/las-vegas-plumbing-services/page.tsx
20: export const metadata: Metadata = {
21:   title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
22:   description:
23:     "Plumbing services in Las Vegas, NV. Emergency plumbing, drain cleaning, water heater repair, slab leak detection. Licensed. NV #048585A. Call (702) 567-9172.",
24:   alternates: {
25:     canonical: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
26:   },
27:   openGraph: {
28:     title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
29:     description:
30:       "Plumbing services in Las Vegas, NV. Emergency plumbing, drain cleaning, water heater repair, slab leak detection. Licensed. NV #048585A. Call (702) 567-9172.",
31:     url: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
32:     siteName: "Red Carpet Plumbing",
33:     locale: "en_US",
34:     type: "website",
35:   },
36:   robots: { index: true, follow: true },
37: };

=== app/las-vegas/drain-cleaning/page.tsx
23: export const metadata: Metadata = {
24:   // FLAG: description below is the approved brief string (~270 chars). It
25:   // exceeds the site's ≤160 meta-description standard; see report. Kept as
26:   // approved pending a trim decision.
27:   title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
28:   description:
29:     "Red Carpet Plumbing provides professional drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Las Vegas hard water and aging pipes are the leading causes of drain clogs. Licensed plumbers. Call (702) 567-9172.",
30:   alternates: {
31:     canonical: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
32:   },
33:   openGraph: {
34:     title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
35:     description:
36:       "Professional drain cleaning in Las Vegas from licensed local plumbers. Hard water, grease buildup, and aging pipes cleared completely. Call Red Carpet Plumbing.",
37:     url: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
38:     siteName: "Red Carpet Plumbing",
39:     locale: "en_US",
40:     type: "website",
41:   },
42:   robots: { index: true, follow: true },
43: };

=== app/henderson/drain-cleaning/page.tsx
23: export const metadata: Metadata = {
24:   // FLAG: description below is the approved brief string (~230 chars). It
25:   // exceeds the site's ≤160 meta-description standard; see report. Kept as
26:   // approved pending a trim decision.
27:   title: "Drain Cleaning in Henderson, NV | Red Carpet Plumbing",
28:   description:
29:     "Red Carpet Plumbing provides professional drain cleaning in Henderson, NV, including Green Valley and Lake Las Vegas. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers. Call (702) 567-9172.",
30:   alternates: {
31:     canonical: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
32:   },
33:   openGraph: {
34:     title: "Drain Cleaning in Henderson, NV | Red Carpet Plumbing",
35:     description:
36:       "Professional drain cleaning in Henderson from licensed local plumbers. Green Valley, Lake Las Vegas, and all Henderson communities served. Call Red Carpet Plumbing.",
37:     url: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
38:     siteName: "Red Carpet Plumbing",
39:     locale: "en_US",
40:     type: "website",
41:   },
42:   robots: { index: true, follow: true },
43: };

=== app/north-las-vegas/aliante-area/drain-cleaning/page.tsx
39: export const metadata: Metadata = {
40:   title:
41:     "Drain Cleaning in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
42:   description:
43:     "Slow or clogged drain in the Aliante area of North Las Vegas? Red Carpet Plumbing provides professional drain cleaning for Aliante homes. Call (702) 567-9172.",
44:   alternates: {
45:     canonical:
46:       "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
47:   },
48:   openGraph: {
49:     title: "Drain Cleaning in the Aliante Area of North Las Vegas, NV",
50:     description:
51:       "Red Carpet Plumbing provides professional drain cleaning in the Aliante area of North Las Vegas. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Aliante homes.",
52:     url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
53:     siteName: "Red Carpet Plumbing",
54:     locale: "en_US",
55:     type: "website",
56:   },
57:   robots: { index: true, follow: true },
58: };

```

Raw grep counts:

```
$ grep -rln "export const metadata" app | wc -l
136

$ grep -rln "generateMetadata" app | wc -l
0

$ grep -rn "openGraph" app --include=*.tsx -l | wc -l
134

$ grep -rn "twitter" app --include=*.tsx -l | wc -l
0

$ grep -rn "Red Carpet Plumbing\"" app --include=page.tsx | wc -l
795

```

Notes on the counts:

- `export const metadata` appears in 136 files: 135 `page.tsx` plus `app/layout.tsx`.
- `twitter` appears in 0 `.tsx` files in `app/`, yet all 134 built pages emit `twitter:card` = `summary`. This is inferred to be Next.js deriving it from `openGraph` (not verified in Next source). It also means `twitter:title` and `twitter:description` mirror the Open Graph values.
- `Red Carpet Plumbing"` matches 795 times across `page.tsx` files because it also matches schema, copy strings, and the title suffix. It is not a clean count of titles.
- A full metadata rewrite touches up to 134 indexable `page.tsx` files by hand (135 including `/thank-you/`). Each file has two title strings and two description strings (top-level and `openGraph`) that must be edited together.

## Open Graph and Twitter findings

- `og:title` equals `<title>` on 130 of 134 pages. The four differences: `/north-las-vegas/aliante-area-plumbing/` (different wording) and three Aliante service pages (`drain-cleaning`, `emergency-plumbing`, `water-heater-repair-installation`) whose `og:title` omits the suffix.
- `og:description` equals the meta description on only 49 of 134 pages (differs on 85, including the home page). Types affected: Home 1, Core pages 4, Core services 14, Las Vegas services 14, Location + service 52.
- `og:image` is absent on all 134 pages. `twitter:card` is `summary` on all 134 (no large image card).
- Canonical is present on all 134 pages.

## Risks and unknowns

- Pixel estimates use Windows Arial, not Google's rendering, and Google's actual cutoff varies. Use character counts as the primary signal.
- The twin similarity ratio is a rough word-level `difflib` ratio over visible text with scripts and styles stripped. It is an estimate only.
- The Step 7 service-phrase match is a slug-word heuristic; only the location check is exact.
- Page-type classification is by URL pattern. There are 18 single-segment service pages, 15 of which have a `/las-vegas/` twin; the other three have none (`/plumbing-fixture-repair-replacement-installation/`, `/trenchless-piping/`, `/water-meter-pressure-regulator-services/`). Of the 15 twins, 14 have byte-identical titles (`/emergency-plumbing/` differs: "Emergency Plumber" vs "Emergency Plumbing"). A fifteenth duplicate title pair is `/plumbing-services/` vs `/las-vegas-plumbing-services/`. No two descriptions are duplicated.
- Content-accuracy observations outside this audit's scope, reported only: some descriptions and Open Graph descriptions contain "4.8-star rated", "4.8 stars, 81 reviews", and "over 40 years of experience". CLAUDE.md forbids unverified ratings and years-in-business claims. I did not verify them and made no changes.
- Source comments in several `las-vegas/*` and `henderson/*` files already note that descriptions exceed a 160 character standard.
- Everything requested was measurable. All numbers come from the real build, not a scratch copy.
