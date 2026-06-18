---
name: frontend-design-engineer
description: Required Site OS Master design skill governing responsive layout, component structure, semantic HTML, accessibility, and scalable UI patterns for every website page build.
---

# frontend-design-engineer

## Purpose

Provide the foundation every other design skill sits on. This skill governs how a page is composed — its components, layout grid, breakpoints, semantic landmarks, accessibility minimums, and the underlying implementation pattern. Without a sound foundation, motion, polish, conversion UX, and SEO/AEO structure cannot succeed.

## When to Use

Use this skill on every page build, before motion, polish, conversion, or SEO/AEO passes. Specifically:

- During Prompt 02 page outline — to declare the section composition and component reuse plan
- During Prompt 05 developer build brief — to declare the responsive plan, component plan, and accessibility minimums
- During Prompt 06 Gate 1 — to confirm the project's existing design system supports the planned components
- During Prompt 06 Gate 2 — to translate the component plan into the file scope
- During Prompt 06 Gate 3 — to implement using the project's existing component patterns
- During Prompt 06 Gate 4 — to verify the responsive layout, semantic HTML, and accessibility minimums

## Required Behavior

- Reuse existing components before creating new ones; surface a justification if a new component is required
- Compose pages from semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) — divs only when no landmark fits
- Declare breakpoints explicitly per section; do not assume the framework's defaults will produce a working mobile layout
- Use the project's existing spacing tokens, color tokens, typography tokens, and component library; do not introduce raw hex or magic numbers
- Honor accessibility minimums: 44px minimum touch targets (48px for primary actions), visible focus states, semantic heading order (single H1, logical H2/H3), descriptive alt text, sufficient color contrast (WCAG AA), keyboard navigability, ARIA only where semantic HTML cannot express the role
- Plan responsive behavior section by section, not page-wide — different sections often need different breakpoint logic

## Page Build Responsibilities

For each page, this skill must produce:

- A component composition list — which existing components will be reused and which (if any) must be created
- A section-by-section responsive plan — breakpoints, layout shifts, ordering changes
- A semantic landmark map — which HTML element wraps each section and why
- An accessibility minimum declaration — touch target sizes, focus states, alt-text plan, ARIA usage, contrast confirmation
- A scalability note — whether the chosen pattern works for future similar pages (service variants, location variants, category variants)

## Claude Project Usage

Claude Project uses this skill during strategy and planning. Specifically:

- During Prompt 02 — include the component composition list and responsive plan in the page outline
- During Prompt 05 — include the full skill output (composition, responsive plan, landmark map, accessibility minimums, scalability note) in the developer build brief
- Flag any place the planned page composition does not fit the project's existing design system as a build blocker for Prompt 06

## Claude Code Usage

Claude Code uses this skill during implementation. Specifically:

- Gate 1 — confirm the project's existing components, breakpoints, spacing/color/typography tokens, and accessibility patterns support the planned composition; surface any missing pattern as a Gate 1 blocker
- Gate 2 — translate the composition list into the file scope (which component files to reuse, which to create, which to leave untouched)
- Gate 3 — implement using the existing patterns; do not invent new component patterns unless explicitly approved
- Gate 4 — verify responsive layout works at every declared breakpoint, semantic landmarks render correctly, touch targets meet minimums, focus states are visible, contrast passes, headings are in logical order
- Gate 5 — report which components were reused, which were created, and any accessibility carry-forward items

## QA Checks

A page cannot pass this skill until:

- [ ] All sections render correctly at mobile, tablet, and desktop breakpoints
- [ ] Semantic landmarks wrap every major section
- [ ] Single H1; logical H2/H3 hierarchy
- [ ] Touch targets are 44px minimum (48px for primary actions)
- [ ] Focus states are visible on every interactive element
- [ ] Alt text is descriptive on every meaningful image; decorative images use `alt=""` and `aria-hidden="true"`
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation reaches every interactive element in a logical order
- [ ] No raw hex values, magic numbers, or off-token spacing in component code
- [ ] No new component pattern was created without explicit Gate 2 approval

## Design Vision

The target aesthetic is confident, purposeful, and distinctly not templated. Every layout
decision should feel chosen, not defaulted.

Layout principles:
- Max content width 1280px. Use consistent container padding: px-4 sm:px-6 lg:px-8.
- Section vertical rhythm: py-16 md:py-24 as the default for major sections.
  py-8 or less reads as cramped and low-budget.
- Generous whitespace between sections signals quality faster than any visual treatment.
- Grids: 1 col mobile, 2 col tablet, 3 col desktop for content cards.
  Match the grid to the content density, not to what fills the screen.
- Hero layout: determined by site type overlay. Do not default to centered text on a
  background image. That is the most generic pattern in existence.

Typography scale (Tailwind):
- Display H1: text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight
- H2: text-2xl md:text-3xl font-semibold tracking-tight
- H3: text-xl font-semibold
- Body: text-base md:text-lg leading-relaxed
- Eyebrow label: text-sm font-semibold uppercase tracking-widest text-brand-600

Font pairing:
- Headings: Inter or Plus Jakarta Sans loaded from Google Fonts in the root layout.
- Body: Inter or system-ui.
- Never leave headings on default system-ui. It reads as unfinished.
- Font choice is the single fastest way to make a site look intentional.

Color system (defined in tailwind.config.js or CSS variables, never raw hex in components):
- brand-50 through brand-900: client primary color ramp
- neutral: warm gray scale (stone or zinc preferred over pure gray)
- accent: one highlight color for interactive states
- surface-1: primary background
- surface-2: alternate section background
- Alternate sections using only surface-1 and surface-2.
  Random background color changes per section reads as amateur.

What generic looks like. Avoid these patterns:
- Full-width dark hero with centered white text and a stock photo
- Three icon boxes in a row immediately below the hero with no visual weight
- Sections with identical visual treatment from top to bottom
- CTAs that say "Learn More" or "Click Here"
- Cards that look identical to every other Tailwind card tutorial

## Hard Rules

- Do not invent new component patterns when an existing one fits. Reuse first.
- Do not skip semantic landmarks because divs are easier.
- Do not relax accessibility minimums for visual reasons. Premium design and accessibility minimums are not in conflict.
- Do not introduce raw hex, magic spacing values, or off-token typography.
- Do not change global styles to fit a single page. Single-page tweaks belong in scoped overrides, not in shared layers.
- Do not improvise responsive behavior. Declare it in Prompt 05, implement it in Prompt 06 Gate 3, verify it in Gate 4.

## Output Expectations

When this skill runs, the output must include:

- Component composition list (reuse vs create)
- Section-by-section responsive plan with breakpoints
- Semantic landmark map
- Accessibility minimum declaration with explicit values (touch target sizes, contrast confirmation, ARIA usage justification)
- Scalability note
- Carry-forward items — any component pattern, breakpoint, or accessibility minimum that needs project-owner confirmation
