# Hairline Weight — white/10 to white/30

Closes the hairline-weight deferral raised in the singletons report and
carried forward by the Phase 2C report. Content-lock observed: no copy,
heading text, anchor text, or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 45 |
| Lines changed | 45 (+45 / -45) |
| Borders moved to `white/30` | 45 |
| Pre-existing `white/10` left untouched | 46 |

44 files under `app/`, plus `components/SiteFooter.tsx`.

## 2. Why This Batch Exists

The footer top edge was shipped at `border-white/10` in `fe24f35`, and the
report for that batch flagged a measurement that ran against the stated
intent: the brief was a token that reads on charcoal, but `white/10` measured
**fainter** than the red rule it replaced.

`ffd511e` then applied the same token to 44 section dividers, which multiplied
the same tradeoff across the site and made the two decisions inseparable. The
Phase 2C report recorded that any change should be applied to both surfaces
together. This batch does that.

| Treatment | Weight | Contrast vs charcoal |
|---|---|---|
| `border-brand-primary`, original | 4px | 2.13:1 |
| `border-white/10`, shipped in `fe24f35` and `ffd511e` | 1px | 1.32:1 |
| `border-white/30`, this batch | 1px | **2.69:1** |

The edge now exceeds what the red achieved, at 2.69:1 against 2.13:1, while
remaining a 1px hairline rather than a 4px band. No contrast floor applies
either way, since this is decorative structure rather than information; the
figures are comparative, not compliance claims.

## 3. Scoping Was the Whole Risk

`border-white/10` is not a campaign-specific value. It was the site's
established hairline on dark surfaces long before this work, appearing **46
times** in `app` and `components` before either of the two commits above.
After them the total was 91.

Changing the token globally would have altered 46 pre-existing elements that
this campaign never touched, including the footer's own internal divider and
43 footer link chips.

The 45 introduced by the campaign are distinguishable by the classes they sit
beside, so the substitutions were anchored on those rather than on the bare
token:

| Substitution | Count |
|---|---|
| `border-t border-white/10 bg-brand-charcoal text-white` | 44 |
| `className="border-t border-white/10"`, the `CTASection` prop | 1 |

The first covers the footer element and all 43 literal `<section>` dividers
in one anchored pattern, because both carry the identical
`bg-brand-charcoal text-white` suffix. The second is the one divider passed
as a prop, on `/plumbing-services/`.

**Verified in both directions after the edit:**

| Measure | Result |
|---|---|
| Campaign borders now at `/30` | 45 |
| Pre-existing `/10` still intact | 46 |
| `SiteFooter` L149 internal divider | unchanged, still `/10` |
| Footer top edge L66 | now `/30` |

46 plus 45 equals the 91 that existed before this batch. Nothing was missed
and nothing extra was caught.

## 4. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 24.7s
                      Finished TypeScript in 26.7s
                      Generating static pages (114/114) in 6.3s
                      110 routes written to route-manifest.json
git status .......... 45 modified files
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 5. Rendered Verification

Rebuilt, then checked against build output rather than source.

- All 110 rendered pages rescanned: **44 adjacent charcoal pairs, 44 carrying
  a `/30` divider on the second section, 0 uncovered, 0 strays.** Phase 2C
  coverage survived the token change intact.
- The footer renders as
  `<footer class="border-t border-white/30 bg-brand-charcoal text-white">`.
- `.border-white\/30` is present in the shipped production CSS. This was
  checked because a Tailwind v4 opacity modifier is only emitted if some
  source file references it, and a missing utility would have rendered the
  border with no color rather than failing the build.

## 6. Diff Audit

Three line-pattern pairs, nothing else:

| Pattern | Count |
|---|---|
| `<section ...>` divider, `/10` to `/30` | 43 |
| `<footer ...>` top edge, `/10` to `/30` | 1 |
| `className="border-t border-white/..."` prop | 1 |

Machine-checked assertions, all zero:

| Assertion | Count |
|---|---|
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Em dashes or double hyphens introduced | 0 |

## 7. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed |

## 8. Rule Deviations

None.

## 9. Campaign Status

One open item remains.

**`ServiceImagePlaceholder` brand hairline.** `border-b border-brand-primary/40`
on a `bg-brand-surface-alt` placeholder tile in
`components/ServiceImagePlaceholder.tsx`. Never inventoried by `787da01`, and
its rendered count depends on how many service cards lack a real image rather
than on source lines, so it belongs with image work rather than with a color
pass.

Everything else raised across `787da01`, the Phase 2A report, and every batch
report since is now either resolved or explicitly closed by decision.

## 10. Commit Status

Not committed. Held for review, per standing protocol. Report will be
committed alongside its code.
