# TODO-BATCH Marker Survey

Read-only survey. No file was modified, no marker removed, no link changed.

Date: 2026-08-26
Branch: main
Status: survey complete, no code changes

## 1. Headline

**96 `TODO-BATCH` markers across 37 files. Zero of them represent a missing
internal link.**

Every marker that could be checked describes work that has already been done,
or work correctly blocked on a page that genuinely does not exist yet. The
markers are stale documentation, not a backlog.

The only real outstanding work they point to is **11 unbuilt sub-area routes**,
and 11 of 11 are in the approved build list, so nothing has drifted outside
the plan.

## 2. Inventory

| Variant | Count |
|---|---|
| `TODO-BATCH-6` | 36 |
| `TODO-BATCH-5` | 21 |
| `TODO-BATCH-PHASE4` | 19 |
| `TODO-BATCH-TIER2` | 14 |
| `TODO-BATCH-TIER3` | 2 |
| `TODO-BATCH-NEXT` | 2 |
| `TODO-BATCH` (bare) | 2 |
| **Total** | **96** |

| Classification | Count |
|---|---|
| Self-marked `ACTIVATED` or `BUILT` | 10 |
| Names a route that **is** built | 21 |
| Names a route **not** built | 16 |
| Names no route, makes a family-level claim | 49 |

There are also **94 plain `TODO` markers**, a separate concern: 42 are
"Replace ServiceImagePlaceholder", 7 are location image swaps, and the rest
are image resolution and asset-availability notes. All belong to the image
work item, not here.

## 3. Method, and Why Source Grep Was Not Enough

Source-only inspection produced 23 candidate problems. Verified against the
rendered build, **all 23 dissolved**.

This is the third time in this session that a source-only measurement gave a
wrong answer. Links on these pages are generated from data arrays and
components, so a page can carry a live link to a route while its source file
contains no literal `href="/that/route/"` anywhere. `/henderson-plumbing-services/`
is the clearest case: **1** literal href in source, **9** rendered.

Every claim below was therefore checked against `.next/server/app/*.html`.

## 4. Findings

### 4.1 Markers naming a built route: 21, all already linked

Split by what the page actually does:

| Sub-case | Count | Meaning |
|---|---|---|
| Page already links to the route, comment obsolete | 3 | pure noise |
| Comment already admits the page is built, awaiting copy approval | 5 | deliberate, documented |
| Comment not updated, page appeared unlinked in source | 13 | **all 13 verified linked in rendered HTML** |

The 13 were the most promising lead in the survey. Each was checked by
loading the built HTML for the page the marker sits on and testing for
`href="<route>"`. Result: **13 already linked, 0 real gaps.**

### 4.2 `TODO-BATCH-PHASE4`: five family-level claims, all false

Five city hubs carry a marker stating that `/<city>/[service]/`
service-location pages are "not yet built":

| Hub | Pages built | Distinct links rendered | Verdict |
|---|---|---|---|
| `/henderson-plumbing-services/` | 9 | 9 | comment stale |
| `/las-vegas-plumbing-services/` | 14 | 14 | comment stale |
| `/summerlin-plumbing-services/` | 6 | 6 | comment stale |
| `/paradise-plumbing-services/` | 5 | 5 | comment stale |
| `/north-las-vegas-plumbing-services/` | 11 | 6 | see below |

North Las Vegas looked like a 5-link gap and is not one. Five of its eleven
pages sit under `/north-las-vegas/aliante-area/<service>/`, one level deeper
than the others. The hub links to the `aliante-area-plumbing` sub-hub, and
that sub-hub links to **5 of 5** of its service pages. Hub to sub-hub to
service is correct information architecture, not a missing link.

### 4.3 `TODO-BATCH-5`: the replacement it asks for is already done

Eleven pages carry a marker saying to "replace the core-route links with the
location-specific `/<city>/[service]/` children once those pages are built."

On several of them the array **directly beneath the comment** already uses the
location-specific hrefs. The work was done and the comment was never updated.

Checking every `RELATED_SERVICES` entry on those 11 pages for a core route
that has a built local child:

| Measure | Count |
|---|---|
| Core links correctly kept, because no local child exists | 3 |
| Core links that could be localised but were not | **0** |

The 3 are `/video-camera-plumbing-inspections/` on a Henderson page,
`/sewer-line-services/` and `/commercial-plumbing/` on North Las Vegas pages.
No `/henderson/video-camera-plumbing-inspections/`,
`/north-las-vegas/sewer-line-services/`, or
`/north-las-vegas/commercial-plumbing/` exists, so pointing at the core route
is the correct behaviour, not a shortfall.

One earlier measurement in this survey was misleading and is corrected here:
counting core-route links across the whole page gave a flat "8 core links" on
every one of the 11, which suggested the replacement had not happened. That
count included navigation and footer links. Scoped to the
`RELATED_SERVICES` array, which is what the marker is about, 4 to 5 of 6
entries are already location-specific.

### 4.4 Genuinely pending: 11 unbuilt routes

These are named by markers and do not exist. Every one is a sub-area page.

| Route | Markers | In approved build list |
|---|---|---|
| `/henderson/seven-hills-plumbing/` | 3 | yes |
| `/enterprise/southwest-las-vegas-plumbing/` | 2 | yes |
| `/paradise/south-strip-plumbing/` | 2 | yes |
| `/spring-valley/desert-inn-west-sahara-plumbing/` | 2 | yes |
| `/las-vegas/whitney-plumbing/` | 1 | yes |
| `/las-vegas/winchester-plumbing/` | 1 | yes |
| `/las-vegas/sunrise-manor-plumbing/` | 1 | yes |
| `/las-vegas/desert-shores-plumbing/` | 1 | yes |
| `/las-vegas/tropicana-area-plumbing/` | 1 | yes |
| `/summerlin/summerlin-north-plumbing/` | 1 | yes |
| `/summerlin/summerlin-south-plumbing/` | 1 | yes |

**11 of 11 appear in `docs/site-os/inputs/red-carpet-plumbing-build-list.md`.**
No marker points at an invented or unapproved route, and the markers holding
those links as plain text are behaving correctly: they are preventing links to
pages that would 404.

## 5. What This Means

The markers are a record of a build sequence that has since moved past them.
They were written to hold links inactive until pages existed; the pages now
exist and the links were activated, but the comments stayed.

Their cost is not broken output. It is that the codebase currently tells a
reader that 5 city hubs have no service-location pages, that 11 pages still
need their related-services links localised, and that roughly 21 links are
waiting on pages that shipped some time ago. All three statements are false,
and a future batch that trusts them will start from a wrong map.

## 6. Options, Not Recommendations

No change is proposed here, since the survey was the request.

1. **Delete the stale markers.** Roughly 85 of 96 are obsolete. Comment-only
   change, zero rendered output difference, and it would make the remaining 11
   legible as a real backlog.
2. **Delete stale and rewrite the survivors** to name the 11 unbuilt routes
   explicitly, so the remaining work is stated in one place rather than
   inferred from scattered comments.
3. **Leave them and build the 11 sub-area pages**, after which nearly every
   marker becomes obsolete anyway.
4. **Leave entirely.** Defensible: they are inert, and they cost nothing at
   runtime.

Worth noting for option 1 or 2: several markers double as genuine design
notes, such as the `summerlin/slab-leak-detection-repair` comment recording
that a page is built but its approved copy contains no anchor phrase, so no
link was injected without approval. That reasoning is worth keeping even
when the marker prefix goes.

## 7. Verification Summary

| Check | Result |
|---|---|
| Markers surveyed | 96 across 37 files |
| Built routes cross-referenced | 110 |
| Candidate problems from source grep | 23 |
| Confirmed against rendered HTML | **0 real gaps** |
| City hub families claimed unbuilt | 5, all built and fully linked |
| `RELATED_SERVICES` core links that could be localised | 0 |
| Unbuilt routes genuinely pending | 11, all approved in the build list |
| Files modified by this survey | **0** |

## 8. Commit Status

Nothing to commit beyond this report. No source file was touched.
