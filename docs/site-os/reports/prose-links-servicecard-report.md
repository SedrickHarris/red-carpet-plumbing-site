# Hover-to-Red Prose Links and ServiceCard

Closes the last hover-to-red behaviour on the site and the ServiceCard
component. Content-lock observed: no copy, heading text, anchor text, or link
destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 3 |
| Lines changed | 7 (+7 / -7) |
| Declarations recolored | 7 |
| ServiceCard render sites affected | 63, across 45 pages |

The smallest diff of the campaign and the largest visual reach per line. Two
edits in `components/ServiceCard.tsx` change every service card on the site.

## 2. This Batch Is Not Uniform

Every prior batch applied one treatment to one device. These seven
declarations are five different link roles, and applying a single rule to all
of them would have been wrong.

| Role | Where | Count | Rest state |
|---|---|---|---|
| Contact detail links, phone and email | `contact` | 3 | `brand-dark`, `font-medium` |
| Address block link to Google Maps | `contact` | 1 | inherits `brand-dark/80` |
| Return to Home, tertiary action | `thank-you` | 1 | `brand-muted` |
| Service card title link | `ServiceCard` | 1 | inherits `brand-dark` from its `h3` |
| Service card Learn More link | `ServiceCard` | 1 | `brand-primary`, the only resting red |

## 3. The Finding That Set the Treatment

**The campaign hover idiom is wrong for two of these links.**

Every batch so far has used `hover:text-brand-dark/70`, a hover that lightens.
That works when a link rests at full `brand-dark`. Two of these rest lighter
than `brand-dark/70` already, so lightening on hover would have faded them on
interaction rather than strengthening them.

| Link | Rest | `dark/70` hover | Direction |
|---|---|---|---|
| Contact phone, email | 16.30:1 | 6.03:1 | lighten, correct |
| Service card title | 16.30:1 | 6.03:1 | lighten, correct |
| Service card Learn More | 8.33:1 red | 6.03:1 | lighten, correct |
| Address block link | **8.49:1** at `dark/80` | 6.03:1 | **fades on hover** |
| Return to Home | **4.83:1** at `brand-muted` | 6.03:1 | barely moves |

The last two were given `hover:text-brand-dark` instead, so hover darkens to
16.30:1. Both also carry `hover:underline`, which is untouched and still
supplies the affordance. This is a deliberate split, not an inconsistency: the
rule is that hover strengthens a link, and which token achieves that depends
on where the link rests.

## 4. Substitutions Applied

| # | Change | Count |
|---|---|---|
| S1 | `font-medium text-brand-dark hover:text-brand-primary` to `hover:text-brand-dark/70` | 3 |
| S2 | `hover:text-brand-primary hover:underline` to `hover:text-brand-dark hover:underline` | 2 |
| S3 | `className="transition-colors hover:text-brand-primary"` to `hover:text-brand-dark/70` | 1 |
| S4 | `text-brand-primary transition-colors hover:text-brand-primary-hover` to `text-brand-dark ... hover:text-brand-dark/70` | 1 |

S2 covers two files at once, the contact address link and the thank-you link,
because both share the same failing pattern and take the same fix.

**A substring collision had to be avoided.** `hover:text-brand-primary` is a
prefix of `hover:text-brand-primary-hover`, and both occur in
`components/ServiceCard.tsx`, fourteen lines apart. An unanchored substitution
for S3 would have corrupted the Learn More link at L56 into a mixed
`hover:text-brand-dark/70-hover` class. S3 was therefore anchored with the
full `className="` prefix and its closing quote, making it unambiguous, and
S4 was written against the longer string.

## 5. ServiceCard

Two lines, 63 render sites across 45 pages.

- **Title link, L42.** Sits inside `<h3 className="text-xl font-semibold
  text-brand-dark">`, so it inherits full dark and now lightens on hover like
  every other neutralized label on the site.
- **Learn More link, L56.** The last resting red outside the kept-red set.
  Moved to `text-brand-dark` with a `dark/70` hover, the same treatment the 12
  resting-red chip labels received.

Worth noting, because it is the counter-example to a deferral: the Learn More
arrow is `<span aria-hidden="true" className="ml-1">`, carrying position but
no color. It therefore inherits the link color and moves with it on hover
automatically. This is exactly the inheritance pattern deferred in the chip
batch, where 52 arrows carry their own color class and so stay at full
`brand-dark` while their label lightens. ServiceCard shows the cleaner shape
already exists in the codebase.

The card keeps its `group` hover shadow and lift, which are untouched and
remain the primary hover affordance for the card as a whole.

## 6. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 27.4s
                      Finished TypeScript in 25.6s
                      Generating static pages (114/114) in 6.2s
                      110 routes written to route-manifest.json
git status .......... 3 modified files
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 7. Diff Audit

Seven changed lines, each a `className` literal. Machine-checked assertions,
all zero:

| Assertion | Count |
|---|---|
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Lines changed touching `aria-label`, `target`, or `rel` | 0 |
| Changed lines not inside a `className` | 0 |
| Em dashes or double hyphens introduced | 0 |

The Google Maps address link keeps `target="_blank"`,
`rel="noopener noreferrer"`, and its `aria-label` exactly as found. Only the
hover color moved.

## 8. Rendered Verification

Checked against the production build output, not the source.

- `/backflow-prevention` renders 4 service cards, each with
  `class="transition-colors hover:text-brand-dark/70"` on the title and
  `class="mt-4 inline-flex items-center text-sm font-semibold text-brand-dark transition-colors hover:text-brand-dark/70"`
  on Learn More.
- Zero `hover:text-brand-primary` remain in any rendered page.

## 9. Sitewide State

**Hover-to-red behaviour is now eliminated.** `hover:text-brand-primary` and
`hover:text-brand-primary-hover` both return 0 across `app` and `components`.
No element on the site turns red on hover any more.

Red declarations remaining: **10**, all resting states, all previously
decided.

| Remaining | Count | Status |
|---|---|---|
| Contact glyphs `h-4 w-4 text-brand-primary` | 5 | kept red by decision, closed |
| List-marker arrows, aliante drain-cleaning | 2 | open, singleton |
| Tinted icon tiles `bg-brand-primary/10` | 2 | open, singleton |
| `Button.tsx` `inverse` variant | 1 | component variant definition |

## 10. Standing Delivery Protocol Checklist

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
| Business facts | unchanged, phone, email, and address all preserved |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 11. Rule Deviations

None. The split treatment in section 3 is a judgment call within the batch
rather than a deviation, and it is recorded above rather than applied
silently.

## 12. Remaining Red Inventory

| Category | Count | Status |
|---|---|---|
| Prose links, all forms | 380 | done, `787da01` + `ec2e8ec` + `1c58957` + this batch |
| Icon fills, benefit checkmarks | 64 marks | done, `4633e54` |
| Left bars and stray dots | 67 | done, `e5272dd` |
| Chip hovers, labels, and arrows | 111 | done, `d8f730b` |
| Step-number circles | 95 | done, `ba68da9` |
| ServiceCard title and Learn More | 2 | done, this batch |
| Icon fills, contact glyphs | 5 | kept red by decision, closed |
| Dots inside red callouts | 43 | kept red by decision, closed |
| `border-l-4` callout borders | 95 | kept red by decision, closed |
| `open:border-l-4` FAQ state borders | 91 | kept red by decision, closed |
| Red flood sections | 19 hand-written | open, by design, one per page |
| List-marker arrows, aliante | 2 | open, singleton |
| Tinted icon tiles | 2 | open, singleton |
| Top rule `h-1 w-16` | 1 | open, singleton |
| Footer `border-t-4` on charcoal | 1 | open, 2.13:1, singleton |
| Skip-link focus fill | 1 | open, singleton |
| `Pill` solid variant | 1 | open, singleton |
| `Button.tsx` `inverse` variant | 1 | open, component variant |
| Focus rings and outlines | 9 | open, deliberate focus affordance |

### 12.1 Deferrals

1. **Seven singletons**, now the entire remaining surface outside the flood
   sections and focus affordances: 2 aliante list arrows, 2 tinted icon
   tiles, the top rule, the footer `border-t-4` at 2.13:1, the skip-link
   focus fill, the `Pill` solid variant, and the `Button.tsx` `inverse`
   variant. Small enough to close in a single pass.
2. **Chip arrow inheritance**, carried forward. ServiceCard demonstrates the
   cleaner pattern, as noted in section 5.
3. **CTASection `inverse` versus `inverse-charcoal`**, carried forward from
   the Phase 2A report. Still unresolved, and related to deferral 1.
4. **The 44 adjacent charcoal section pairs**, assigned to Phase 2C in the
   Phase 2A report and never revisited.

## 13. Commit Status

Not committed. Held for review, per standing protocol.
