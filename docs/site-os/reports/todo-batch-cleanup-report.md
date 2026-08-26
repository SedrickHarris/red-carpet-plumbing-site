# TODO-BATCH Marker Cleanup

Removes the stale markers identified in the marker survey, keeps the
load-bearing ones. Comment-only change apart from three JSX line merges,
which are explained and verified below.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Value |
|---|---|
| Files changed | 32 |
| Lines | 29 insertions, 185 deletions |
| Markers before | 96 |
| Markers removed | **77** |
| Markers kept | **19** |
| Rendered pages with changed visible content | **0** |

Image work was explicitly out of scope. The 94 plain `TODO` markers, 42 of
them `ServiceImagePlaceholder`, were not touched, and neither was `Images/`.

## 2. What Was Kept, and Why

19 markers across 9 files. Every one was retained for a stated reason, not by
omission.

### 2.1 Genuinely unbuilt routes: 16

These hold links inactive so the site does not link to pages that would 404.
All are `TIER2` or `TIER3`, and all 11 distinct routes are in the approved
build list.

| File | Line | Route |
|---|---|---|
| `enterprise-plumbing-services` | 202 | `/enterprise/southwest-las-vegas-plumbing/` |
| `henderson-plumbing-services` | 198 | `/henderson/seven-hills-plumbing/` |
| `henderson-plumbing-services` | 508 | `/henderson/seven-hills-plumbing/` |
| `paradise-plumbing-services` | 199 | `/paradise/south-strip-plumbing/`, `/paradise/airport-corridor-plumbing/` |
| `paradise-plumbing-services` | 513 | same pair |
| `spring-valley-plumbing-services` | 201 | `/spring-valley/desert-inn-west-sahara-plumbing/` |
| `summerlin-plumbing-services` | 194 | `/summerlin/summerlin-north-plumbing/` |
| `summerlin-plumbing-services` | 195 | `/summerlin/summerlin-south-plumbing/` |
| `service-areas` | 200, 202, 204, 206, 208 | five `/las-vegas/` sub-areas |
| `service-areas` | 213 | `/henderson/seven-hills-plumbing/` |
| `service-areas` | 218 | `/spring-valley/desert-inn-west-sahara-plumbing/` |
| `service-areas` | 220 | `/enterprise/southwest-las-vegas-plumbing/` |

### 2.2 Design notes disguised as markers: 3

The survey warned these existed and that a bulk regex delete would lose them.
Each was read individually and kept.

| File | Line | Why it is load-bearing |
|---|---|---|
| `summerlin/slab-leak-detection-repair` | 442 | Records that the target page **is** built, but the approved copy contains no anchor phrase, so no link was injected without approval. Deleting it would invite someone to "fix" a link that was deliberately not added. |
| `las-vegas/commercial-plumbing` | 594 | Explains why the brief's Guardrail 14 fallback to `/commercial-plumbing/` is unnecessary, because `/henderson/commercial-plumbing/` is live. Still accurate. |
| `green-valley/re-piping` | 196 | States that all cluster siblings are live and no marker entries remain. True, and it documents completeness rather than pending work. |

## 3. What Was Removed: 77 Markers

Grouped by why they were false. Every deletion was verified against the
**rendered** build, not the source, because links here are generated from data
arrays and a source file can contain no literal `href` for a route it links.

| Group | Removed | Basis for removal |
|---|---|---|
| `PHASE4` family claims on 5 city hubs | 12 | Claimed `/<city>/[service]/` pages were unbuilt. All built, and every hub renders a link to each: Henderson 9/9, Las Vegas 14/14, Summerlin 6/6, Paradise 5/5, North Las Vegas 6/6 direct children plus a sub-hub carrying 5/5. |
| `BATCH-5` "replace core links with location-specific" | 21 | The replacement was already done. In several files the array directly beneath the comment already used the location-specific hrefs. 0 core links remain that have a built local child. |
| `BATCH-6` "link X when built" | 30 | Target route built **and** already linked on that page. All 13 borderline cases were individually confirmed in the built HTML. |
| `ACTIVATED` / `BUILT` self-marked notes | 10 | Self-documented as complete; historical noise. |
| `TODO-BATCH` hub promotions | 2 | Green Valley, Lake Las Vegas, and Aliante Area hubs are built and linked. |
| `TODO-BATCH-NEXT` on `service-areas` | 2 | Claimed all Tier-1 card links were "forward routes that do not yet exist on disk". All 11 card hrefs are built. |

Where a comment block mixed a false claim with still-true description, only
the false sentences were removed and the description was rewritten to stand on
its own. That is why there are 29 insertions against 185 deletions rather than
a pure deletion.

Two guardrails were explicitly preserved while deleting the false claim around
them: `las-vegas-plumbing-services` keeps "ServiceCards link to core service
pages only. Do not add /las-vegas/ prefixed hrefs here." on both its data
array and its JSX, because that instruction is still the intended design even
though its stated reason, that the pages were unbuilt, was not.

## 4. The Three Non-Comment Edits

Three markers sat **between two JSX text nodes** rather than between elements.
Deleting those lines outright would have merged the surrounding text into one
node and changed the rendered spacing.

| File | Line | Treatment |
|---|---|---|
| `enterprise/commercial-plumbing` | 533-535 | Text merged onto one line: `...in Enterprise, call Red Carpet Plumbing at{" "}` |
| `enterprise/re-piping` | 688-690 | Same merge |
| `enterprise/re-piping` | 607 | Comment replaced with the bare `{" "}` it carried, which supplies the space in "repair page." |

Verified in raw HTML from both builds:

```
before:  emergencies in Enterprise<!-- -->, call Red Carpet Plum
after :  emergencies in Enterprise, call Red Carpet Plumbing at<!--
```

React emits `<!-- -->` to separate adjacent text nodes. It renders nothing, so
both forms display `Enterprise, call Red Carpet Plumbing at`. After the merge
the separator is simply no longer needed at that position.

## 5. Method: Guarded, Marker by Marker

A blanket regex delete was avoided, as instructed. Each of the 74 edit
operations named an explicit file, line range, and an expected substring, and
the applier verified every expectation against the file **before** writing
anything, aborting the whole file on any mismatch.

```
ops: 74   verified-ok: 74   mismatches: 0   net lines removed: 156
```

The dry run passed 74/74 before a single byte was written.

## 6. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 24.3s
                      Generating static pages (114/114) in 7.3s
                      110 routes written to route-manifest.json
git status .......... 32 modified files, all under app/
```

**Generated-file churn.** `prebuild` rewrote `generatedAt` in
`docs/seo/route-manifest.json` on each build. Restored with
`git checkout --`, never staged.

## 7. Proof of Zero Rendered Difference

Raw HTML hashing was tried first and was **not** a valid test: all 112 pages
differed, including pages never touched, because Turbopack embeds per-build
module ids in the RSC payload. Normalising asset filenames did not fix it,
since the ids are inside `self.__next_f.push` data.

The valid comparison extracts what a reader actually gets: visible text with
all `<script>` payloads stripped, every `href` in document order, and the
JSON-LD blocks. Both trees were built from the same working copy via
`git stash`, so the toolchain was identical.

| Measure | Result |
|---|---|
| Pages compared | 112 |
| Text, links, and JSON-LD identical | **110** |
| Differing | 2 |
| Differing by | exactly 1 character each, at the JSX merge sites |

Both differences were traced to the `<!-- -->` separator described in section
4 and confirmed against raw HTML from each build. **Visible content, link
targets, and schema are unchanged on all 112 pages.**

## 8. An Incident Worth Recording

During verification a `git stash pop` reported "The stash entry is kept in
case you need it again" and **did not apply**. The build had regenerated
`docs/seo/route-manifest.json`, and that untracked-at-the-time modification
blocked the pop. For a short window the working tree was back to 96 markers
while the edits sat in `stash@{0}`.

It was caught because marker count was re-checked after the pop rather than
assumed. Restoring the manifest first, then popping, applied cleanly and the
stash list is now empty. Nothing was lost.

The lesson generalises: this project's `prebuild` step dirties the tree on
every build, so any stash-based workflow must restore the manifest before
popping.

## 9. Diff Audit

| Assertion | Count |
|---|---|
| Changed lines that are not comments | 9, all in section 4 |
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Files changed outside `app/` | 0 |
| `Images/` or image TODOs touched | 0 |

## 10. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged, verified by content comparison |
| Anchor text and link destinations | unchanged, every href compared |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, JSON-LD compared per page |
| Alt text | unchanged |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged |
| Routes | unchanged, 110 |

## 11. Rule Deviations

None.

## 12. What the Codebase Now Says

Before this change the source told a reader that five city hubs had no
service-location pages, that eleven pages still needed their related-services
links localised, and that roughly twenty links were waiting on pages that had
already shipped. All three were false.

It now names exactly one open thing: **11 sub-area routes that are approved
but unbuilt**, held as plain text so nothing links to a 404.

### 12.1 Still Open, Deliberately Untouched

1. **Image assets.** `Images/` remains an unorganised gitignored working
   folder pending approval of the final structure. Separate task, own review.
2. **94 plain `TODO` markers**, 42 of them `ServiceImagePlaceholder`. Tied to
   the same image decision and not touched.

## 13. Commit Status

Not committed. Held for review, per standing protocol. Report will be
committed alongside its code.
