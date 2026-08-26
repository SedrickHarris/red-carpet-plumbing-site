# Bullet Dots — Decorative Red Shapes

Partially closes the bullet-dot deferral from `787da01`. Content-lock observed:
no copy, heading text, anchor text, or link destination changed.

Date: 2026-08-25
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 40 |
| Lines changed | 67 (+67 / -67) |
| Left bars recolored | 59 |
| Dots recolored | 8 |
| Dots deliberately kept red | 43 |
| Red borders untouched | 190 |

## 2. The Deferral Did Not Describe What Is There

`787da01` recorded 146 bullet dots. There are not 146, and they are not all
dots. The actual inventory of red `bg-brand-primary` shapes in this family:

| Device | Count | What it is |
|---|---|---|
| Round dots, `h-2 w-2 rounded-full` | 51 | list markers |
| Left bars, `before:w-1 before:rounded-full` | 59 | vertical rule on `<article>` blocks |
| Top rule, `h-1 w-16 rounded-r-full` | 1 | short accent rule |
| **Total** | **111** | |

This is the third deferral count from `787da01` to prove inaccurate: 23 prose
links were 21, 64 icon fills were 59 declarations rendering 64 marks, and 146
bullet dots are 111 shapes in three device families. The remaining counts in
that commit (62 chip hovers, 93 step circles) should be re-surveyed rather than
trusted when their turn comes.

All 232 `bg-brand-primary` occurrences were accounted for during the survey. The
6 that sit outside a `className="..."` literal are component variant definitions
in `Button.tsx`, `CTASection.tsx`, `FaqSection.tsx`, `HeroSection.tsx`, and
`Pill.tsx`, not shapes.

## 3. The Finding That Set the Scope

**43 of the 51 dots sit inside callout boxes that carry their own
`border-l-4 border-brand-primary`.** The dot and the box border are one device.
Recoloring the dots as literally requested would have produced a red-bordered
box containing dark dots, on 43 callouts.

The survey also found a red device family `787da01` never inventoried at all:

| Implementation | Count | Role |
|---|---|---|
| `before:w-1 before:bg-brand-primary` | 59 | decorative rule on editorial articles |
| `border-l-4 border-brand-primary` | 97 | callout box edge |
| `open:border-l-4 open:border-brand-primary` | 90 | FAQ open-state indicator |

Those 189 borders are the same visual device as the 59 bars, implemented three
ways. Only the 59 fell inside the "bullet dot" bucket.

Given that, the scope was put to the user rather than inferred, and the chosen
option was to reduce red only where it carries no meaning while leaving the
warning-callout device intact.

## 4. Decision Applied

| Group | Count | Treatment | Reason |
|---|---|---|---|
| Left bars on editorial articles | 59 | recolored to `brand-dark` | decorative rule, no warning semantics |
| Dots not inside a red-bordered callout | 8 | recolored to `brand-dark` | move with the device they belong to |
| Dots inside red-bordered callouts | 43 | **kept red** | part of a deliberate warning callout |
| `border-l-4` callout borders | 97 | **kept red** | the callout device itself |
| `open:border-l-4` FAQ state borders | 90 | **kept red** | color is carrying state, not decoration |
| Top rule `h-1 w-16` | 1 | **kept red** | single hero accent, not in scope of the chosen option |

## 5. The 8 Dots, Individually

Every one was inspected rather than pattern-matched, because 43 dots share a
class string with 7 of these 8. A global substitution would have hit all 50.

| File | Line | Enclosing device | Heading |
|---|---|---|---|
| `app/drain-cleaning/page.tsx` | 419 | bar article | Signs to Call a Plumber Now |
| `app/emergency-plumbing/page.tsx` | 428 | bar article | Situations That Require Immediate Attention |
| `app/leak-detection-repair/page.tsx` | 421 | bar article | Warning Signs to Call a Plumber |
| `app/re-piping/page.tsx` | 422 | bar article | Signs Your Plumbing May Need to Be Replaced |
| `app/sewer-line-services/page.tsx` | 417 | bar article | Signs to Call a Plumber |
| `app/slab-leak-detection-repair/page.tsx` | 423 | bar article | Warning Signs of a Slab Leak |
| `app/water-heater-repair-installation/page.tsx` | 432 | bar article | Signs You May Need Repair |
| `app/green-valley/emergency-plumbing/page.tsx` | 515 | none | services list chips |

Seven sit inside articles carrying one of the 59 bars, so they move with their
bar and the article stays internally consistent. The eighth is a standalone
services-list chip with no red bar and no red border, the clearest case of
purely decorative red in the batch, and uses the one-off `mt-0.5` class variant.

### 5.1 Judgment boundary worth recording

Seven of the eight sit under warning headings, and the 43 kept-red dots are also
warning content. The rule applied here is **device-based, not content-based**: a
dot keeps its red when it sits inside the red-bordered callout box, and loses it
when it sits in a bar-marked article, because that bar is itself being
neutralized. That keeps every block internally coherent, which was the point of
the chosen option, but it does mean two blocks with similar warning copy can now
carry different treatments depending on which container they use. Flagging in
case a content-based rule is preferred later; it would be a different batch.

## 6. Substitutions Applied

Bars, applied globally after verifying uniformity. All 59 matched the same bar
form, and `before:bg-brand-primary` occurs nowhere else:

```
- before:bg-brand-primary
+ before:bg-brand-dark
```

Seven dots, applied by line number rather than by string, because the string
`h-2 w-2 flex-none rounded-full bg-brand-primary` occurs 50 times and only 7
were in scope:

```
- rounded-full bg-brand-primary
+ rounded-full bg-brand-dark
```

One dot, applied globally since its `mt-0.5` variant is unique:

```
- mt-0.5 h-2 w-2 flex-none rounded-full bg-brand-primary
+ mt-0.5 h-2 w-2 flex-none rounded-full bg-brand-dark
```

## 7. Validation — Gate 4

| Check | Command | Exit | Result |
|---|---|---|---|
| Lint | `npx eslint` over the 40 changed files | 0 | clean, no output |
| Types | `npx tsc --noEmit` | 0 | clean, no output |
| Build | `npm run build` | 0 | compiled in 39.1s, 114/114 static pages, no warnings |

Next.js 16.2.6 (Turbopack). Route count held at 110.

### 7.1 Post-change counts

| Assertion | Expected | Actual |
|---|---|---|
| Red bars remaining | 0 | 0 |
| Red dots remaining (the callouts) | 43 | 43 |
| New dark dots | 8 | 8 |
| New dark bars | 59 | 59 |
| Red borders still present | 190 | 190 |

The border figure is 190 rather than 189 because it includes the one
`border-brand-primary/40` variant.

### 7.2 Diff shape

Grouped, the diff is only two substitutions and nothing else:

```
     59 - BAR  before:bg-brand-primary      59 + BAR  before:bg-brand-dark
      8 - DOT  bg-brand-primary              8 + DOT  bg-brand-dark
```

### 7.3 Contrast

All shapes are `aria-hidden` decorative, so WCAG 1.4.11 does not strictly apply,
and every one already cleared the 3:1 non-text floor before the change. Nothing
here was failing.

| Surface | Before (red) | After (dark) | Floor |
|---|---|---|---|
| `bg-white` | 8.33:1 | 16.30:1 | 3:1 |
| `bg-brand-surface-alt` | 7.57:1 | 14.81:1 | 3:1 |

## 8. Scope Verification

`npm run build` again rewrote the `generatedAt` timestamp in
`docs/seo/route-manifest.json` with no content change. Restored with
`git checkout --` as build churn.

After restore, `git status --porcelain` shows 40 modified tracked files under
`app/` and nothing else, plus the untracked `docs/site-os/reports/` directory.

## 9. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, shapes are `aria-hidden` decorative |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 10. Rule Deviations

None. Scope was referred to the user rather than chosen unilaterally, since the
literal request would have produced an incoherent result on 43 callouts.

## 11. Remaining Red Inventory

| Category | Count | Status |
|---|---|---|
| Prose links, both forms | 373 | done, `787da01` + `ec2e8ec` + `1c58957` |
| Icon fills, benefit checkmarks | 64 marks | done, `4633e54` |
| Icon fills, contact glyphs | 5 | kept red by decision, closed |
| Left bars on editorial articles | 59 | done, this batch |
| Dots outside the callout device | 8 | done, this batch |
| Dots inside red callouts | 43 | kept red by decision, closed |
| `border-l-4` callout borders | 97 | kept red by decision, closed |
| `open:border-l-4` FAQ state borders | 90 | kept red by decision, closed |
| Top rule `h-1 w-16` | 1 | open, not in the chosen scope |
| Chip and pill hovers | 62 per `787da01`, unverified | open |
| Step-number circles | 93 in survey, `h-12 w-12 rounded-full` | open |
| Footer `border-t-4` on charcoal | 1 | open, see below |

### 11.1 Two items worth a look when their turn comes

**Footer top border.** `components/SiteFooter.tsx:66` carries
`border-t-4 border-brand-primary bg-brand-charcoal`. Red on charcoal measures
**2.13:1**, below the 3:1 non-text floor. As a purely decorative brand rule it is
almost certainly exempt from WCAG 1.4.11, and it is out of scope here, but it is
the only place on the site where red sits on a dark ground and it reads as
nearly black. Worth a deliberate decision rather than leaving it to be found
later.

**Step-number circles.** These are `bg-brand-primary` with `text-white` labels
inside, so unlike every shape in this batch they are not decorative: the white
numeral on red is real text and measures 8.33:1. Recoloring them is a different
kind of decision, because the fill and its label move together.

## 12. Commit Status

Not committed. Held for review, per standing protocol.
