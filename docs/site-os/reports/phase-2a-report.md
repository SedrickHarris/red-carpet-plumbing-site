# Phase 2A Cleanup — Final Report

Red-flood reassignment and inline prose-link recolor, plus the
`service-areas` restoration. Prepared after Commit 2 was amended.
Nothing has been pushed.

---

## 1. Outcome

The correction and the Commit 2 rewrite both succeeded.

| Position | Hash | Exact commit message |
| --- | --- | --- |
| 1 | `edb1e5b` | `refactor(cta): move mid-page CTA sections to charcoal` |
| 2 | `787da01` | `style(links): improve inline prose-link contrast` |

- **Pushed:** No. Nothing has been pushed at any point.
- **Branch / divergence:** `## main...origin/main [ahead 2]`
- **Working tree:** clean apart from this report file, which is new and untracked.
- **Exactly two local commits ahead of `origin/main`:** confirmed. No third
  corrective commit was created.

Commit 2 was rewritten with `git commit --amend`. That was the safest
workflow available because Commit 2 was `HEAD`: amending it leaves Commit 1
untouched as its parent, with no rebase and no rewrite of unrelated history.
Commit 1's hash is unchanged at `edb1e5b`. Commit 2's hash changed from
`5b071cc` to `787da01`, which is expected and unavoidable when a commit's
content changes.

---

## 2. Why one link was excluded and restored

Phase 2A targeted the class pattern
`text-brand-primary hover:text-brand-primary-hover`, which occurred exactly
**352** times. **351** were recolored. **One was excluded and restored** to
its prior state.

**The link:** `app/service-areas/page.tsx`, line 465.

```tsx
<Link
  // TODO-BATCH-NEXT: card.href location route not yet built
  href={card.href}
  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
>
  See Plumbing Services
  <span aria-hidden="true" className="ml-1">
    →
  </span>
</Link>
```

It is the "See Plumbing Services" call-to-action on each area card in the
service-areas grid. It is a single source line that renders **22 times**,
because it sits inside a `.map()` over 22 area cards.

**Why it was treated differently.** Nothing about the link itself is
unusual; it matched the target pattern exactly and was recolored along with
the other 351 in the original Commit 2. The exclusion is about the *page*,
not the link.

`service-areas` is the one page in the codebase carrying **three**
full-viewport red floods rather than the two that every other page has. The
mid-page-versus-final distinction that drove all 80 flood reassignments is
genuinely ambiguous with three, so `service-areas` was flagged at Gate 5 and
deliberately left out of Commit 1 pending a separate decision.

When the original Commit 2 nonetheless touched the page for the link
recolor, the page was no longer byte-identical to its pre-Phase-2A state.
That is a problem for the deferral: a later decision about the three-flood
hierarchy is cleaner to reason about, and to diff, against an untouched
baseline than against a page already carrying one unrelated Phase 2A edit.
Restoring the link keeps the whole page frozen until that decision is made.

The restored line is byte-identical to its pre-Phase-2A form. No alternative
treatment was substituted.

**This is exactly the class of per-instance judgment the build prompt asked
to be flagged rather than resolved silently.** It was reported at Gate 5,
and the deviation was called out explicitly rather than being folded into a
blanket "service-areas untouched" claim, which would have been inaccurate at
that point.

---

## 3. Commit inventory

### Commit 1 — `edb1e5b` (UNCHANGED)

| Field | Value |
| --- | --- |
| Hash | `edb1e5b` — byte-for-byte unchanged, verified as parent of `HEAD` |
| Message | `refactor(cta): move mid-page CTA sections to charcoal` |
| Files changed | 80 |
| Insertions / deletions | 80 insertions(+), 80 deletions(-) — one line per page |
| File-location scope | all 80 under `app/`, all `.tsx`; 0 files elsewhere |
| Change category | mid-page flood background only |

Composition, stated precisely rather than as "80 prop edits":

| Kind | Count | Change |
| --- | --- | --- |
| Hand-written section class swaps | **78** | `bg-brand-primary text-white` to `bg-brand-charcoal text-white` |
| CTASection prop swaps | **2** | `background="red"` to `background="dark"` |
| **Total affected pages** | **80** | |

No unrelated changes: 0 `service-areas`, 0 non-`app/`, 0 non-`.tsx`,
0 generated files.

### Commit 2 — `787da01` (AMENDED)

| Field | Value |
| --- | --- |
| Hash | `787da01` |
| Message | `style(links): improve inline prose-link contrast` |
| Files changed | **87** |
| Insertions / deletions | 351 insertions(+), 351 deletions(-) |
| File-location scope | all 87 under `app/`, all `.tsx`; 0 files elsewhere |

**Change category:** 351 substitutions of
`text-brand-primary hover:text-brand-primary-hover`
to
`text-brand-dark underline hover:text-brand-dark/70`.

- `service-areas` excluded: confirmed, 0 occurrences in the commit's file list.
- No other class pattern or element type changed. SVG icon fills, chip and
  pill hovers, bullet dots, step-number circles, FAQ borders, callout
  borders, flood backgrounds, and buttons are all untouched.
- No unrelated changes: 0 non-`app/`, 0 non-`.tsx`, 0 generated files.

The commit message was updated to record the exclusion and the 351-of-352
count, so the message matches what the commit actually contains.

### Cross-contamination

61 files carry edits from both parts. Partial staging reconstructed
HEAD-plus-Part-1-only blobs for all 80 Part-1 files via `git hash-object -w`
and `git update-index --cacheinfo`, leaving the working tree intact. Each
staged tree was then verified by normalizing the expected change out and
diffing against HEAD:

- Commit 1 staged tree: identical to HEAD once flood background tokens are
  normalized, so it contains no link changes.
- Commit 2 staged tree: identical to HEAD once the link class pattern is
  normalized, so it contains no flood changes.

---

## 4. Validation results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 35.6s
                      Generating static pages using 3 workers (114/114) in 7.9s
git status .......... clean (porcelain returned 0 lines)
dev server .......... Next.js 16.2.6 (Turbopack)
                      - Local:   http://localhost:3100
                      - Network: http://192.168.0.97:3100
                      Ready in 1175ms
                      200 on all six QA routes
```

**Generated-file churn.** `prebuild` rewrote `docs/seo/route-manifest.json`'s
`generatedAt` timestamp during the build (`20:59:02.473Z` to
`22:42:50.717Z`). Timestamp line only. It was reverted, never staged, and
never committed.

**Dev-server 404 incident, resolved.** After the first restart, every
depth-2 route returned 404 (`/henderson/drain-cleaning/`,
`/las-vegas/drain-cleaning/`, `/paradise/drain-cleaning/` and others) while
depth-1 routes returned 200. This was **not** a code defect: the production
build had already generated all 114 pages including those routes, and
`out/henderson/drain-cleaning/index.html` existed with correct content. Root
cause was a polluted `.next` directory from running `next build`, which
writes production export artifacts such as `BUILD_ID` and
`export-marker.json`, and then `next dev` against the same directory.
Clearing `.next` and restarting resolved it; all six QA routes then returned
200. No source file was touched. `.next/` and `out/` are both gitignored.

---

## 5. Scope verification

- `app/service-areas/page.tsx` is byte-identical to its pre-Phase-2A
  baseline. Blob `fcc403e1b6882611c6848fbba02b0ba9bfdd308c` at both
  `1dd6ae2` (pre-2A) and `HEAD`. Verified by SHA, not by inspection.
- `service-areas` has no change in either final commit: 0 occurrences in
  `edb1e5b`, 0 in `787da01`.
- Commit 1 retains all 80 flood reassignments: 78 class swaps + 2 prop swaps.
- All 80 affected pages retain a final red CTA: **80 / 80**.
- Commit 2 contains exactly **351** link-class substitutions across **87**
  files.
- The 23 `text-brand-primary hover:underline` links remain untouched: still
  exactly 23 in the tree.
- No generated files, non-TSX files, components, tokens, docs, copy,
  headings, CTA labels, hrefs, schema, or logic changed. 0 non-`app/` and
  0 non-`.tsx` files across both commits. Content equivalence was
  established at Gate 4 against a rebuilt pre-2A tree: 6,370 content hrefs,
  2,873 headings, and 526 JSON-LD blocks all byte-identical.
- No third corrective commit exists: exactly 2 ahead of `origin/main`.
- Commit 1 hash remains `edb1e5b`.

### Red-flood trajectory

**Red floods sitewide: 111, down from 191.**

| Stage | Hand-written | CTASection prop | Total |
| --- | --- | --- | --- |
| Pre-Phase-1 (`af3492b`, session start) | 98 | 93 | **191** |
| Pre-Phase-2A (`1dd6ae2`) | 98 | 93 | **191** |
| Post-Phase-2A (`HEAD`) | 20 | 91 | **111** |

The 191 baseline was unchanged by Phase 1, which only flattened
CTASection's gradient to a solid fill without changing how many floods
exist.

**Does 111 match the plan?** Yes. The Phase 2A scope projected 191 to
approximately 110, on the reasoning that 80 pages had two floods each and
would give up one. The outcome is 111: the 80 reassignments landed exactly,
and the residual over a hypothetical "one per page" floor is accounted for
by the 28 pages that already had a single flood, plus `service-areas`
retaining all three. 191 minus 80 equals 111 exactly.

One measurement caveat worth recording, because it nearly produced a false
correction: a `git grep` pathspec of `app/**/*.tsx` silently **excludes**
`app/page.tsx`, since `**` does not match at depth 1. That undercounts the
homepage's 2 flood sections and yields 189 instead of 191. Use a plain
`app` pathspec. The same glob trap appeared earlier with `app/**/page.tsx`.

---

## 6. Visual QA findings

Checked live on the dev server after the cache clear.
Legend: `C` charcoal, `w` white, `a` surface-alt, `R` red.

| Route / family | Section sequence | Red floods | Last is red | Dark links | white/60 |
| --- | --- | --- | --- | --- | --- |
| Core service, `/drain-cleaning/` | `CwawaCCwaR` | 1 | yes | 0 | 6 |
| Location-service, `/henderson/drain-cleaning/` | `CwwaCwaCwaR` | 1 | yes | 6 | 4 |
| Location hub, `/henderson-plumbing-services/` | `CwwaCCwaR` | 1 | yes | 4 | 4 |
| Homepage, `/` | `CwCawCwaR` | 1 | yes | 0 | 6 |
| About, `/about/` | `CwwawaCwaR` | 1 | yes | 0 | 4 |
| `service-areas`, `/service-areas/` | `CwRawaRwaR` | 3 | yes | 0 | 4 |

- **Charcoal mid-page CTAs render correctly.** `/drain-cleaning/` renders
  `<section class="bg-brand-charcoal text-white">` with its `text-3xl` h2
  and `text-white/90` body copy intact; layout unchanged.
- **Final red CTAs remain red and remain final.** `/drain-cleaning/` closes
  with `<section class="bg-brand-primary text-white">` carrying the
  `text-4xl` h2. Every checked family shows exactly one red flood, in final
  position.
- **Recolored inline prose links are dark, underlined, and readable**, for
  example
  `<a class="font-semibold text-brand-dark underline hover:text-brand-dark/70" href="/henderson/sewer-line-services/">`.
  Contrast 16.30:1 on white and 14.81:1 on surface-alt; hover 6.03:1 and
  5.76:1. All three utilities confirmed present in the shipped CSS.
- **`white/60` fine print is readable on charcoal** at 7.02:1, up from
  3.85:1 on red, which was a pre-existing WCAG AA failure. All 18 instances
  moved; none remain on red.
- **`service-areas` is visually and structurally unchanged from baseline.**

### The "3 reds versus 1" reconciliation

An exact-string grep for `<section class="bg-brand-primary text-white"` on
the rendered `service-areas` page returned **1**, while the section-sequence
scan showed **3** red floods. Both are correct; the grep was too strict.

CTASection builds its class attribute by interpolating the background into a
template, which emits a **trailing space** before the closing quote. The two
CTASection-rendered floods therefore serialize as
`bg-brand-primary text-white ` with that trailing space, and only the single
hand-written flood matches the exact no-space string.

| Source | Rendered class string | Count |
| --- | --- | --- |
| CTASection | `<section class="bg-brand-primary text-white "` | 2 |
| Hand-written | `<section class="bg-brand-primary text-white"` | 1 |
| **Total** | | **3** |

`service-areas` retains all three original red floods and gained zero
charcoal floods. A related count worth noting: the restored red link renders
**22** times from **1** source line, because it sits inside a `.map()` over
22 area cards.

### The 44 adjacent charcoal section pairs

- **They were created by Commit 1.** All 44 were reassigned by `edb1e5b`;
  zero had adjacent charcoal beforehand. They are neither pre-existing nor
  fixed.
- **They are an accepted Phase 2A composition tradeoff**, the direct and
  predictable cost of halving the red floods.
- **They were not changed or remediated during this cleanup.**
- **They are assigned to Phase 2C for possible refinement.**

Distribution: 18 core service (`CwawaCCwaR`), 11 location hubs
(`CwwaCCwaR`), 15 location-service (varied) — 44 total.

---

## 7. Deferred follow-ups — listed, not changed

1. **The 23 alternate-form red prose links**
   (`text-brand-primary hover:underline`), outside the target pattern.
   Concentrated on `/about/` (8), homepage (4), and location hubs (2 each).
2. **`service-areas` three-flood hierarchy.** Three red floods remain at
   L481, L614, L693. Mid-versus-final is ambiguous with three; needs a
   decision on whether one or two move to charcoal. Untouched by both
   commits, and the page is now byte-identical to its pre-2A baseline.
3. **CTASection `inverse` versus `inverse-charcoal`.** `CTA_VARIANTS`
   resolves the primary button to `inverse` (white surface, red label) on
   both red and charcoal surfaces, while `Button.tsx` documents a
   purpose-built `inverse-charcoal` that CTASection never uses. Latent
   inconsistency, not a defect.
4. **Refinement of the 44 adjacent charcoal section pairs**, assigned to
   Phase 2C.

---

## 8. Push recommendation

The rewritten two-commit series, `edb1e5b` unchanged and `787da01` amended,
is ready to push unchanged.
