---
name: emil-kowalski-motion-design
description: Required Site OS Master design skill governing intentional motion, scroll reveals, hover states, microinteractions, page transitions, and motion restraint for every website page build.
---

# emil-kowalski-motion-design

## Purpose

Make motion intentional. Animation exists to clarify state changes, draw the eye to the next action, and make interactions feel responsive — not to decorate. This skill governs scroll reveals, hover states, microinteractions, page transitions, and the restraint that separates premium motion from busy motion. Inspired by the design philosophy of Emil Kowalski: motion should be felt more than noticed.

## When to Use

Use this skill on every page build, after the frontend-design-engineer foundation is set. Specifically:

- During Prompt 02 page outline — to declare the motion intent of each section (does this section need motion at all?)
- During Prompt 05 developer build brief — to declare the motion plan: which elements animate, when, how, and why
- During Prompt 06 Gate 2 — to translate the motion plan into specific component prop changes (no inline animation values)
- During Prompt 06 Gate 3 — to implement using the project's existing motion primitives and tokens
- During Prompt 06 Gate 4 — to verify motion is reduced-motion-safe, performs well, and does not block content

## Required Behavior

- Motion must have a reason. If you cannot state why an element animates, remove the animation.
- Default to restraint. Most pages need scroll reveals on key sections, hover states on interactive elements, and one or two microinteractions on primary CTAs — nothing more.
- Respect `prefers-reduced-motion`. Every animation must have a reduced-motion-safe fallback (typically a fade or an instant state change, never a transform-only animation when reduced motion is requested).
- Keep durations under 300ms for microinteractions, under 500ms for scroll reveals. Longer durations feel sluggish.
- Use easing that matches the project's existing motion tokens. Linear easing rarely feels right; default to `ease-out` for entrances and `ease-in-out` for state changes.
- Never use motion to gate access to content. Scroll-jacking, forced staggered reveals that delay reading, and modal entrance animations that prevent interaction are all forbidden.
- Never animate on every scroll position. Reveal-on-scroll fires once per element; do not loop reveals as the user scrolls back and forth.

## Page Build Responsibilities

For each page, this skill must produce:

- A section-by-section motion plan — which sections animate, which do not, and why
- A microinteraction list — primary CTA hover, form field focus, accordion expand, modal open, etc.
- A scroll-reveal plan — which elements fade or rise on first reveal, with timing and easing
- A page-transition plan if the framework supports it (Next.js App Router transitions, view transitions API, route change animations)
- A reduced-motion fallback declaration for every animation
- A performance note — confirm animations use transform/opacity, not layout-affecting properties

## Claude Project Usage

Claude Project uses this skill during strategy and planning. Specifically:

- During Prompt 02 — include the motion intent per section in the page outline
- During Prompt 05 — include the full motion plan (section-by-section reveals, microinteractions, page transitions, reduced-motion fallbacks, performance note) in the developer build brief
- Flag any section that does not need motion as "no motion" explicitly, so Prompt 06 does not invent decoration

## Claude Code Usage

Claude Code uses this skill during implementation. Specifically:

- Gate 1 — confirm the project's existing motion primitives (Framer Motion, CSS transitions, view transitions, project-specific motion utilities) support the planned motion plan; surface any missing primitive as a Gate 1 blocker
- Gate 2 — translate the motion plan into specific component changes; declare every animation duration, easing, and reduced-motion fallback in the plan, not in implementation
- Gate 3 — implement using existing motion primitives; do not introduce a new motion library
- Gate 4 — verify every animation has a reduced-motion-safe fallback, animations use transform/opacity (not layout-affecting properties), durations match the declared plan, scroll reveals fire once per element, no scroll-jacking, no content gating
- Gate 5 — report which sections received motion, which did not, and any carry-forward items

## QA Checks

A page cannot pass this skill until:

- [ ] Every animation has a stated reason
- [ ] Every animation respects `prefers-reduced-motion`
- [ ] Microinteraction durations are under 300ms; scroll-reveal durations are under 500ms
- [ ] Animations use transform/opacity only; no layout-affecting properties (width, height, margin, padding, top/left)
- [ ] Scroll reveals fire once per element; no looped reveals on scroll back
- [ ] No scroll-jacking
- [ ] No content is gated by animation completion
- [ ] Page transitions (if used) do not delay first interaction
- [ ] No animation library was introduced beyond what the project already uses
- [ ] No motion-only signaling (interactive elements still indicate state without motion, for reduced-motion users)

## Design Vision

The best motion on a website is the motion the visitor does not consciously notice.
They only notice that the page feels alive, smooth, and responsive. If they notice the
animation, the animation is probably too much.

Motion targets for well-executed non-generic sites:
- Scroll reveal: opacity 0 to 1 and translateY 16px to 0, duration 400ms ease-out.
  Apply to section headings, card grids with per-card stagger, and stat blocks.
  This is the single most impactful motion addition on any marketing site.
- Card hover: translateY(-2px) duration-200. One behavior. No scale, glow, or shadow spread.
- Button hover: background color shift to darker brand shade, duration-150.
  The fastest, most reliable interactive signal.
- Page load: hero content fades in with a 200-300ms delay after mount.
  Feels intentional. Never blocks perceived load.

Card grid stagger:
- Stagger delay: index multiplied by 50ms.
- Cap at 4 cards maximum in a stagger sequence.
  Staggering 12 cards looks broken on slower connections and feels gimmicky.

Motion patterns that age well versus patterns that date a site:
Ages well: fade-up on scroll, subtle hover lifts, smooth color transitions
Dates quickly: parallax backgrounds, typing text effects, section-to-section slide transitions,
  elements flying in from alternating sides, loading screen animations

Performance requirement:
- All animated elements use will-change: transform.
- Every scroll-triggered animation must be tested for Cumulative Layout Shift.
  CLS from animation is a Core Web Vitals failure and affects search ranking.
- prefers-reduced-motion: none of the above runs without this check passing first.
  The reduced-motion fallback is not optional and is not a future TODO.

Site-type motion calibration:
- High-energy site types (creative agency, event, product launch): motion can be more
  expressive. Still within the hard limits. Still restrained relative to the content.
- Trust-first site types (professional services, legal, medical, financial):
  motion should be nearly invisible. Smooth, fast, imperceptible.
- The site type overlay provides the calibration target.

## Hard Rules

- Do not animate decoratively. Every animation must clarify state, draw attention to the next action, or make a transition feel responsive.
- Do not exceed declared durations. If 300ms is the cap, do not ship 400ms because it "feels nicer."
- Do not gate content behind animation completion.
- Do not introduce a new animation library when CSS transitions or the project's existing motion library will work.
- Do not skip the reduced-motion fallback. A page that animates without a reduced-motion path is incomplete.
- Do not use motion to compensate for weak visual hierarchy. Polish the layout first; motion is the last layer, not a substitute.

## Output Expectations

When this skill runs, the output must include:

- Section-by-section motion plan (animate / no motion / why)
- Microinteraction list with duration, easing, and reduced-motion fallback per item
- Scroll-reveal plan with duration, easing, and reduced-motion fallback per element
- Page-transition plan (if applicable)
- Performance note confirming transform/opacity-only animation
- Carry-forward items — any motion primitive, duration, or pattern that needs project-owner confirmation
