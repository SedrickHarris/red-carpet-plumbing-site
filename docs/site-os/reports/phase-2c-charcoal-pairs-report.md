# Phase 2C — Adjacent Charcoal Section Pairs

Closes the Phase 2C deferral carried since the Phase 2A report. Content-lock
observed: no copy, heading text, anchor text, or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 44 |
| Lines changed | 44 insertions, 43 deletions |
| Dividers added | 44 |
| Text, button, or variant changes | **0** |

43 are inline `className` swaps on a literal `<section>`. 1 is a new
`className` prop line on a `CTASection`, which is why insertions exceed
deletions by one.

## 2. The Count Was Right This Time

`787da01` and the Phase 2A report have been wrong about every count this
campaign has checked. Phase 2A recorded **44** adjacent charcoal pairs, and
an independent scan of all 110 rendered pages finds exactly **44**, one per
page, across 44 distinct pages. First inherited figure in the campaign to
survive verification.

The pattern breakdown in that report was not accurate, however. It recorded
"18 core service, 11 location hubs, 15 location-service." The actual
distribution by rendered section sequence:

| Sequence | Pages |
|---|---|
| `CwawaCCwaR` | 21 |
| `CwwaCCwaR` | 11 |
| `CwawawCCwaR` | 5 |
| `CwawaCCaR` | 2 |
| `CwawawCCaR` | 2 |
| `CwawawCCawR` | 2 |
| `CCwawCwaR` | 1 |

Legend: `C` charcoal, `w` white, `a` surface-alt, `R` red.

## 3. What the Pair Actually Is

Surveyed from rendered HTML rather than parsed from source, because component
-rendered sections do not appear as literal `<section>` tags in the page file
and a source-only scan misses them.

| Composition | Count |
|---|---|
| Charcoal mid-page CTA followed by charcoal service-areas band | 32 |
| Charcoal service-areas band followed by charcoal mid-page CTA | 11 |
| Charcoal hero followed by charcoal mid-page CTA | 1 |

Git confirms which half moved: at `1dd6ae2`, pre-Phase-2A, the CTA section on
`/drain-cleaning/` was `bg-brand-primary` and the service-areas band was
already `bg-brand-charcoal`. The service-areas bands were dark by prior
design; Phase 2A darkened the CTAs beside them and created the collision.

## 4. Why a Divider Rather Than Moving a Section

Moving either half to a light surface is the fuller fix for page rhythm, and
it was measured before being set aside. It is not a background swap. Each
mid-page CTA carries `text-white` on its `h2`, `text-white/90` on its body,
`text-white/60` fine print on some pages, and a `Button variant="inverse"`,
which is a white button with a red label and is invisible on a light surface.
Moving the section means moving all of it: roughly 176 targeted edits across
44 files.

The specific hazard that made this worse than the line count suggests:
`variant="inverse"` occurs **57 times across those same 44 files**, because
each page carries one on the mid-page CTA and another on the final red CTA. A
substitution scoped to the file rather than to the section would recolor the
final CTA's button and break the most important control on the page. Three
pages also carry non-uniform heading markup, 41 matches against 44 pages, so
they would need hand inspection.

That is a CTA restyle on 44 pages. The user chose the divider, and the CTA
treatment is untouched: the diff contains zero changes to `text-white`,
`Button`, or `variant=`.

**What the divider does and does not do**, stated plainly: it marks the
boundary so the adjacency reads as one deliberate dark band with internal
structure rather than two sections colliding. It does not shorten the
combined dark run, which remains roughly 400px of unbroken charcoal at
desktop padding. That limit was accepted going in.

## 5. The Token

`border-t border-white/10`, chosen because it is already the site's
established hairline on dark surfaces. It appears 46 times across `app` and
`components`, is used inside `SiteFooter` at L149 as that component's own
internal divider, and was applied to the footer top edge in the immediately
preceding batch. No token was added or redefined.

At 1.32:1 against charcoal it is deliberately faint. This is decorative
structure, not information, so no contrast floor applies; the same
measurement and reasoning are recorded in the singletons report.

## 6. Two Pages Needed Manual Handling

A source-based scan found only 42 of the 44 pairs. The two misses were not
detection bugs but real structural differences, and both were resolved to the
same outcome.

**`/emergency-plumbing/`.** Its mid-page CTA is a `CTASection` with
`background="dark"`, not a literal section, so the source scan saw only one
charcoal literal on the page and no adjacency. The second half of its pair,
the "Emergency Plumbing Service Areas" band, *is* a literal, so the divider
was applied there directly at L594.

**`/plumbing-services/`.** The inverse case, and the one page where the pair
sits at the very top: a charcoal hero immediately followed by a charcoal
CTA. Both halves are component-rendered, so no page-level class could reach
the second one. `CTASection` accepts a `className` passthrough that is
appended to its `<section>`, so the divider was passed as a prop on the
instance at L407.

A trap avoided worth recording: `/plumbing-services/` does contain one
literal charcoal section, at L524, and it is the obvious thing to edit. It is
the wrong one. That section is "Plumbing Services Across the Las Vegas
Valley" at rendered position 6, while the second half of the pair is the CTA
at position 2. Editing by "first charcoal literal in the file" would have put
a divider in the wrong place on that page and left the real pair uncovered.

`background="dark"` is used exactly 3 times sitewide, at
`emergency-plumbing` L579, `plumbing-services` L407, and `service-areas`
L481. Only the first two sit in pairs.

## 7. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 24.8s
                      Finished TypeScript in 26.4s
                      Generating static pages (114/114) in 6.2s
                      110 routes written to route-manifest.json
git status .......... 44 modified files, all under app/
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 8. Rendered Verification

The check that matters, run against all 110 rendered pages after rebuilding:

| Measure | Result |
|---|---|
| Adjacent charcoal pairs found | 44 |
| Pairs **with** a divider on the second section | **44** |
| Pairs without a divider | **0** |
| Dividers on any section that is not the second of a pair | **0** |

Both directions were checked. Full coverage, and no divider landed anywhere
it did not belong.

## 9. Diff Audit

The entire diff reduces to two line patterns plus one added prop:

| Pattern | Count |
|---|---|
| `<section className="bg-brand-charcoal text-white">` removed | 43 |
| `<section className="border-t border-white/10 bg-brand-charcoal text-white">` added | 43 |
| `className="border-t border-white/10"` prop added | 1 |

Machine-checked assertions, all zero:

| Assertion | Count |
|---|---|
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Lines changed touching `text-white/`, `Button`, or `variant=` | 0 |
| Em dashes or double hyphens introduced | 0 |
| Files changed outside `app/` | 0 |

## 10. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged, and CTA button treatment untouched |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed |

## 11. Rule Deviations

None. Scope was referred to the user, and the option not taken is documented
with its real cost in section 4 rather than dismissed.

## 12. Campaign Status

Phase 2C is closed. With it, every item raised in the Phase 2A report is now
resolved:

| Phase 2A deferral | Outcome |
|---|---|
| 23 alternate-form red prose links | done, `1c58957`, actually 21 |
| `service-areas` three-flood hierarchy | done, `ec2e8ec` |
| CTASection `inverse` vs `inverse-charcoal` | closed as a non-issue, `fe24f35` |
| 44 adjacent charcoal pairs | done, this batch |

### 12.1 Remaining Open Items

Two, both small and neither blocking.

1. **Footer hairline weight.** Shipped at `border-white/10`, 1.32:1. The red
   it replaced measured 2.13:1, so the new edge reads fainter.
   `border-white/30` at 2.69:1 is a one-token change if more presence is
   wanted. The same token and the same tradeoff now apply in 44 more places
   after this batch, so a change here should be applied consistently to both.
2. **`ServiceImagePlaceholder` brand hairline.** `border-brand-primary/40` on
   a placeholder tile, never inventoried by `787da01`. Its render count
   depends on image asset coverage rather than source lines, so it is better
   handled when image work resumes.

## 13. Commit Status

Not committed. Held for review, per standing protocol. Report will be
committed alongside its code.
