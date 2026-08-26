# Singletons — Pill Row, Footer Edge, and Two Strays

Closes four of the seven remaining singleton items. Three were kept by
explicit decision. Content-lock observed: no copy, heading text, anchor text,
or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 5 |
| Lines changed | 6 (+6 / -6) |
| Rendered marks affected | ~89 |

Six lines, but the reach is uneven: one line in `Pill.tsx` moves 77 rendered
pills, and one line in `SiteFooter.tsx` changes the top edge of every page.

## 2. What Changed and What Did Not

| # | Item | Decls | Rendered | Outcome |
|---|---|---|---|---|
| 1 | `Pill` solid variant | 1 | 77 | neutralized |
| 2 | Footer `border-t-4` | 1 | every page | neutralized |
| 3 | Aliante list arrows | 2 | 2 | neutralized |
| 4 | Tinted icon tiles | 2 | 10 | neutralized |
| 5 | Quote-form top rule | 1 | 107 | **kept red, closed** |
| 6 | `Button` `inverse` CTA label | 1 | 98 | **kept red, closed** |
| 7 | Skip-link focus fill | 1 | every page | **kept red, closed** |

## 3. The Three Keeps Are Decisions, Not Omissions

**Quote-form top rule.** A small `aria-hidden` accent bar on the lead-capture
form card, rendered on 107 pages. Kept red because it marks the actual
conversion element. Once everything decorative around it has been stripped,
this is what red is supposed to mean. Earned red rather than residual red.

**`Button` `inverse` CTA label.** The white primary CTA button carrying a red
label, used 98 times, overwhelmingly on red flood sections where a white
button with red text is the standard treatment. It is the single
highest-stakes conversion element on the site and the one place where red as
signal is unambiguous.

This also closes a deferral rather than carrying it forward. The Phase 2A
report recorded that `Button.tsx` documents an `inverse-charcoal` variant
"that CTASection never uses," implying a latent inconsistency. The survey
shows that framing was wrong: `inverse-charcoal` is used **44 times**
directly by pages, so the pattern is established and in active use.
CTASection does resolve its primary button to `inverse` on any filled
surface, but it renders `background="dark"` only **3 times** against
`background="red"` **90 times**. The inconsistency is three sections, not a
systemic defect. Closed as a non-issue.

**Skip-link focus fill.** `focus:bg-brand-primary focus:text-white` on the
Skip to content link, at 8.33:1. It is a focus affordance, and the campaign
has kept all focus affordances, including the 9 focus rings and outlines.
Consistent with that rule, and changing a correctly functioning accessibility
control for cosmetic reasons has no upside.

## 4. Pill Solid Row

`Pill.tsx` L22, one line, 77 rendered pills across 11 city hub pages.

City hub pages present secondary service navigation as two fixed rows: row
one `outline` (white fill, dark label), row two `solid` (was red fill, white
label). The red was carrying **row differentiation, not meaning**. Both rows
link to the same class of destination and neither is more urgent than the
other.

Moved to `bg-brand-dark text-white hover:bg-brand-dark/90`. The two rows
still read as distinct, now as light against dark rather than white against
red, so the layout intent survives without the color implying a distinction
that does not exist.

| State | Before | After |
|---|---|---|
| Label on fill | 8.33:1 white on red | 16.30:1 white on dark |
| Hover | darker red | 12.28:1 white on `dark/90` |

The pill keeps `focus-visible:outline-brand-primary`, consistent with the
focus-affordance rule in section 3.

## 5. Footer Edge, and a Measurement That Contradicts the Intent

`SiteFooter.tsx` L66. `border-t-4 border-brand-primary` became
`border-t border-white/10`.

`border-white/10` is not an invented value. It is the divider this same
component already uses internally at L149, and it appears **46 times** across
`app` and `components` as the established hairline on dark surfaces.

**The honest measurement, stated plainly: the new edge is less visible than
the red it replaced, not more.**

| Treatment | Weight | Contrast vs charcoal |
|---|---|---|
| `border-brand-primary`, before | 4px | 2.13:1 |
| `border-white/10`, after | 1px | **1.32:1** |
| `border-white/15` | 1px | 1.58:1 |
| `border-white/20` | 1px | 1.88:1 |
| `border-white/30` | 1px | 2.69:1 |
| `border-white/40` | 1px | 3.79:1 |

Two changes compound here: the token got fainter and the rule got thinner,
4px to 1px. The brief was a token that reads on charcoal, and by luminance
ratio this one reads less.

The counter-argument for keeping it as shipped: contrast ratio is a poor
proxy for a hairline's legibility. Red differs from charcoal in hue as well
as luminance, so at 2.13:1 it read as a dark colored band rather than as an
edge. A white tint differs in luminance only, which is precisely why it reads
as a clean edge and why it is the site's established divider. The 1px weight
is what "hairline" asks for.

If more presence is wanted, `border-white/30` at 2.69:1 exceeds what the red
achieved and is a one-token change. This is flagged rather than decided,
because the measurement runs against the stated intent and that should not be
buried.

## 6. The Two Strays

**Aliante list arrows**, 2 marks on
`app/north-las-vegas/aliante-area/drain-cleaning/page.tsx` L461 and L482.
`aria-hidden` arrow glyphs marking list items inside a plain white card, not
a red-bordered callout. The bullet-dot rule from `e5272dd` sends dots and
markers outside the callout device to `brand-dark`, so these follow. They
were identified and deliberately skipped during the chip batch because they
are list markers rather than chip arrows.

**Tinted icon tiles**, 2 declarations rendering 10 tiles on
`plumbing-services` and `service-areas`. A red-tinted rounded square holding
an `aria-hidden` red `CheckIcon`, one per Why Choose label, 5 per page. Same
semantic as the 64 benefit checkmarks neutralized in `4633e54`, implemented
as a tile instead of a bare glyph, so it takes the same treatment. Both the
tint and the glyph moved together, `bg-brand-primary/10 text-brand-primary`
to `bg-brand-dark/10 text-brand-dark`, since recoloring one without the other
would repeat the incoherence this campaign has avoided throughout.

Icon on tint improves from 6.99:1 to 13.43:1.

## 7. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 26.1s
                      Finished TypeScript in 26.2s
                      Generating static pages (114/114) in 6.0s
                      110 routes written to route-manifest.json
git status .......... 5 modified files
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 8. Diff Audit

Six changed lines. Machine-checked assertions, all zero:

| Assertion | Count |
|---|---|
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Changed lines outside a class string or variant map | 0 |
| Em dashes or double hyphens introduced | 0 |

No stale comment was left behind. `Pill.tsx` and `SiteFooter.tsx` were
checked for prose referencing the old red treatment; neither documents color,
so no comment needed updating.

## 9. Rendered Verification

Checked against the production build output, not the source.

- `/henderson-plumbing-services` renders 7 solid pills as
  `bg-brand-dark text-white hover:bg-brand-dark/90`, and zero red pills.
- The footer renders as
  `<footer class="border-t border-white/10 bg-brand-charcoal text-white">`.
- `/plumbing-services` renders 5 tiles as
  `bg-brand-dark/10 text-brand-dark`.

## 10. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged, and the CTA button treatment is untouched |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, all four moved marks are `aria-hidden` |
| Navigation and IA | unchanged, pill destinations and order preserved |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed |

## 11. Rule Deviations

None. Scope was referred to the user, and the one measurement that runs
against the stated intent is surfaced in section 5 rather than shipped
silently.

## 12. Remaining Red Inventory

Red is now confined to four roles: intentional CTA surfaces, the callout and
FAQ border system, focus affordances, and component variant definitions.

| Category | Count | Status |
|---|---|---|
| `border-l-4` callout borders | 95 | kept by decision, closed |
| `open:border-l-4` FAQ state borders | 91 | kept by decision, closed |
| Red flood sections | 19 hand-written | by design, one per page |
| Dots inside red callouts | 43 | kept by decision, closed |
| CTA button variants in components | ~8 | by design |
| Quote-form top rule | 1 | kept by decision, closed |
| `Button` `inverse` label | 1 | kept by decision, closed |
| Contact glyphs | 5 | kept by decision, closed |
| Skip-link focus fill | 1 | kept by decision, closed |
| Focus rings and outlines | 9 | kept by decision, closed |
| `ServiceImagePlaceholder` hairline `/40` | 1 | open, see below |

Every category is now either closed by decision or intentional by design,
with one exception.

### 12.1 The Only Open Item

`components/ServiceImagePlaceholder.tsx` carries
`border-b border-brand-primary/40` on a `bg-brand-surface-alt` placeholder
tile. Its own comment describes it as "a single brand hairline at the bottom
edge, so a grid of placeholders reads as quiet structure rather than a wall
of red," which is the same restraint logic applied to the footer in section
5, reached independently and earlier.

It was never inventoried by `787da01` and has not been surveyed. It renders
wherever a service card lacks a real image, so its count depends on asset
coverage rather than on source lines. Worth a look when image work resumes,
not before.

### 12.2 Deferrals Carried Forward

1. **Chip arrow inheritance.** 52 chip arrows carry their own color class and
   stay at full `brand-dark` while their label lightens on hover.
   `ServiceCard` demonstrates the cleaner inheriting pattern.
2. **Footer hairline weight**, section 5. Shipped at `white/10` matching
   precedent; `white/30` available if more presence is wanted.
3. **The 44 adjacent charcoal section pairs**, assigned to Phase 2C in the
   Phase 2A report and never revisited. This is now the largest unaddressed
   item in the campaign.

The Phase 2A `inverse` versus `inverse-charcoal` deferral is **closed**, not
carried forward. See section 3.

## 13. Commit Status

Not committed. Held for review, per standing protocol. Per the updated
instruction, this report will be committed alongside its code rather than
left untracked.
