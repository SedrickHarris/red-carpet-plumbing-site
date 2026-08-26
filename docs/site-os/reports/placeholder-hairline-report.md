# ServiceImagePlaceholder Hairline

Closes the last open item in the red-reduction campaign. Content-lock
observed: no copy, heading text, anchor text, or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 1 |
| Lines changed | 11 insertions, 6 deletions |
| Class declarations changed | 1 |
| Rendered marks affected | **442** |

One class edit plus a rewritten doc comment. Insertions exceed deletions
because the comment grew by a paragraph.

## 2. A Correction to How This Was Scoped

This item was twice described in prior reports and in chat as small, with its
count "dependent on image asset coverage," and recommended for deferral until
image work resumes. That framing understated it.

Measured against the rendered build, the placeholder renders **442 tiles
across 27 pages**, up to 20 on a single page. That made it the largest single
red presence remaining on the site, larger than the 43 callout dots, larger
than the 19 flood sections, and larger than any family closed in this
campaign except the ones already done.

The reason the earlier estimate was wrong is worth recording, because it is
the same failure mode this campaign has hit repeatedly: **declaration count
was mistaken for rendered count.** One declaration in one shared component
fans out through `ServiceCard`, which is itself rendered from `.map()` calls
on 27 pages. 63 `ServiceCard` render sites appear in source, 38 of which pass
an `image` prop, and the rest fall through to the placeholder along with two
direct `<ServiceImagePlaceholder />` usages.

The deferral advice was also weaker than it sounded. Image work is gated on
approval of the `Images/` asset structure, which per `CLAUDE.md` is still an
unorganised gitignored working folder, so "wait for image work" was an
indefinite hold on the largest remaining item.

## 3. Weight Was Matched Deliberately

The component's own comment documents the red hairline as a Phase 1 restraint
decision: a single brand hairline so a grid of placeholders "reads as quiet
structure rather than a wall of red." The goal here was to remove the colour
without disturbing that composition, so the replacement opacity was chosen by
measurement rather than by convention.

| Treatment | Contrast vs `brand-surface-alt` |
|---|---|
| `border-brand-primary/40`, before | 2.11:1 |
| `border-brand-dark/25` | 1.67:1 |
| `border-brand-dark/30` | 1.88:1 |
| **`border-brand-dark/35`, chosen** | **2.13:1** |
| `border-brand-dark/40` | 2.40:1 |

`/35` lands at 2.13:1 against the red's 2.11:1, so the tile keeps its exact
visual weight and only the hue changes. This differs from the footer hairline
decision, where the brief was explicitly to strengthen a rule that was doing
no work; here the rule was already correctly weighted and only the colour was
in question.

No contrast floor applies. The tile is `aria-hidden` decoration, and the
accessible name for each card comes from its heading and description.

## 4. The Comment Was Rewritten, Not Left Stale

The existing comment described the border as a "brand hairline" and framed
the design against "a wall of red." Both statements become false the moment
the token changes, so the comment was updated rather than left to mislead the
next reader. It now records what the border is, that it was previously brand
red at 40%, and the measured basis for the replacement opacity.

Spelling was aligned to the codebase while editing: `color` appears 85 times
across `app` and `components` against a single `colour`, so the comment uses
`color`.

## 5. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 26.2s
                      Finished TypeScript in 26.2s
                      Generating static pages (114/114) in 6.3s
                      110 routes written to route-manifest.json
git status .......... 1 modified file
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 6. Rendered Verification

| Measure | Result |
|---|---|
| Placeholder tiles rendering `border-brand-dark/35` | **442** across 27 pages |
| Placeholder tiles still rendering `border-brand-primary/40` | **0** |
| `brand-primary` references left in the component | 0 |

The CSS utility was checked rather than assumed, because
`.border-brand-dark\/35` did not exist in the stylesheet before this batch.
Tailwind v4 emits an opacity modifier only when a source file references it,
and a missing utility renders a border with no colour instead of failing the
build. It is now emitted and resolves correctly:

```
.border-brand-dark\/35{border-color:#231f2059;border-color:lab(12.2462% 2.14991 .0467062/.35)}
```

## 7. Diff Audit

One class declaration and one comment block:

| Change | Count |
|---|---|
| `border-b border-brand-primary/40` to `border-b border-brand-dark/35` | 1 |
| Doc comment lines rewritten | 5 removed, 10 added |

Geometry and semantics are untouched: `flex`, `h-full`, `w-full`,
`items-center`, `justify-center`, `bg-brand-surface-alt`, the `className`
passthrough, `aria-hidden`, the SVG `viewBox`, `stroke`, `strokeWidth`, and
the path data are all unchanged. Only the border colour token moved.

## 8. An Unrelated Finding, Surfaced by This Batch

`.border-brand-primary\/40` is still emitted in the production stylesheet
even though no component references it any more. The cause is that
`app/globals.css` uses a bare `@import "tailwindcss"` with no `@source`
directive, so Tailwind v4 auto-detects sources from the project root,
respecting `.gitignore`. `docs/` is not ignored, so **the batch reports in
`docs/site-os/reports/` are being scanned for class names.** Four of them
mention `border-brand-primary/40` while documenting this very change.

This predates the decision to track the reports in `87ad961`. Auto-detection
keys on `.gitignore` rather than on tracked status, so the reports were being
scanned from the moment they were first written to disk.

**Measured impact, so it is not overstated:** 10 selectors exist in the
stylesheet solely because of `docs/`, occupying roughly 672 bytes, or
**1.11%** of a 60.5KB stylesheet before compression. They are generic
utilities picked up from report prose, such as `border-t-4`, `invisible`,
`contents`, and `tabular-nums`.

Small, but it will grow with every future report, and it means the stylesheet
carries classes the site does not use. The one-line fix is an `@source not
"docs";` directive in `app/globals.css`. That is a build-configuration change
rather than a styling change, so it is recorded here rather than bundled into
this batch.

## 9. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, the tile is `aria-hidden` decoration |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed |

## 10. Rule Deviations

None. The scoping correction in section 2 is stated plainly rather than
quietly fixed.

## 11. Campaign Status

**The red-reduction campaign is complete.** Every item raised in `787da01`,
the Phase 2A report, and every batch report since is resolved or explicitly
closed by decision.

Red now appears only in these roles:

| Role | Approx count | Basis |
|---|---|---|
| Callout and FAQ border system | 186 | kept by decision, carries state and emphasis |
| Flood sections, one per page | 19 | by design |
| Dots inside red callouts | 43 | kept by decision, part of the callout device |
| Focus rings and outlines | 10 | deliberate affordance |
| Contact glyphs | 5 | kept by decision |
| CTA button variants and tokens | ~15 | by design, the conversion control |
| Quote-form top rule | 1 | kept by decision, marks the lead-capture card |

Nothing red remains that is purely decorative and unexamined.

### 11.1 Open, Outside This Campaign

1. **Tailwind scanning `docs/`**, section 8. One-line fix, build config.
2. **Image assets.** `Images/` is still an unorganised gitignored working
   folder pending approval of the final structure. 442 placeholder tiles will
   disappear as real images ship, which also retires this batch's border.

## 12. Commit Status

Not committed. Held for review, per standing protocol. Report will be
committed alongside its code.
