# Red Carpet Plumbing — Design Intelligence Config

## Active Skills

- UI/UX Pro Max (installed at `.claude/skills/ui-ux-pro-max/`)
- frontend-design (installed at `.claude/skills/frontend-design/SKILL.md`)

## Product Type

Local service business — residential and commercial plumbing, Las Vegas, NV.
Emergency services, trust-first conversion path, mobile-first audience.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Brand Color Tokens (already in app/globals.css)

- `--color-brand-primary`: #981C1E (main CTA, emergency accent)
- `--color-brand-primary-hover`: #7A1618 (hover state)
- `--color-brand-secondary`: #17469E (small icon accents only, not CTA)
- `--color-brand-dark`: #231F20 (headings, body)
- `--color-brand-charcoal`: #111827 (footer, dark sections)
- `--color-brand-surface`: #FFFFFF (cards, forms)
- `--color-brand-surface-alt`: #F3F4F6 (alternating sections)
- `--color-brand-muted`: #6B7280 (secondary text)

## Design Rules for Claude Code

1. Read UI/UX Pro Max skill before every design or component build.
2. Read frontend-design skill before every design or component build.
3. Use brand tokens from `app/globals.css` — do not scatter raw hex values.
4. Primary Brand Red `#981C1E` is the only CTA color. Do not use blue as CTA.
5. Use Framer Motion for all animation. Do not introduce other animation libraries.
6. Use Tailwind utility classes. Do not introduce CSS-in-JS or plain CSS modules.
7. Two-column hero layout: content left, form or contact card right.
8. Mobile-first. Single column on mobile, content before form.
9. No fake badges, fake reviews, fake ratings, or fake awards.
10. No em dashes. No double hyphens. No invented business claims.
11. Motion must be subtle, reduced-motion-safe, durations under 300ms.
12. All animations must not scroll-jack.
13. Minimum touch target: 44px. Primary actions: 48px.

## Font Direction

Current: Geist Sans (functional, not distinctive).
Recommended next step: evaluate a brand-appropriate font pairing using
UI/UX Pro Max typography database. Must pass WCAG AA contrast.
Do not implement new fonts without explicit approval.

## UX Priority for This Project

- Emergency call-to-action visibility (above the fold, mobile)
- Trust signals near every CTA
- Fast load performance
- Clear service clarity
- Local Las Vegas relevance in headlines and copy
