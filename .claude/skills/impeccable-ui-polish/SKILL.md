---
name: impeccable-ui-polish
description: Required Site OS Master design skill governing visual refinement, spacing, alignment, rhythm, typography hierarchy, card polish, section balance, and premium finish for every website page build.
---

# impeccable-ui-polish

## Purpose

Turn a competent layout into a premium one. This skill governs the polish layer — spacing rhythm, alignment, vertical balance between sections, typographic hierarchy, card detailing, and the finish that separates a generic template from a page that looks expensive. The frontend-design-engineer skill sets the foundation; this skill makes the foundation feel premium.

## When to Use

Use this skill on every page build, after the foundation and motion plans are set. Specifically:

- During Prompt 02 page outline — to declare the visual hierarchy intent per section (which section is the visual anchor; which sections support it)
- During Prompt 05 developer build brief — to declare the polish plan: spacing scale, alignment grid, typographic hierarchy, card detailing, section balance
- During Prompt 06 Gate 2 — to translate the polish plan into specific component-prop and token choices
- During Prompt 06 Gate 3 — to implement using the project's polish tokens and refined-pattern components
- During Prompt 06 Gate 4 — to verify spacing rhythm, alignment, typographic hierarchy, and section balance feel premium

## Required Behavior

- Use a consistent spacing scale across every section. Do not mix tight and loose spacing without intent.
- Align elements to a shared grid. Within a section, vertical and horizontal alignment must read intentionally.
- Establish a clear typographic hierarchy: display weight for H1, distinct weight or size for H2, supporting weight for body, distinct treatment for eyebrow/label text.
- Treat cards as miniature pages — they have their own spacing, alignment, hierarchy, and balance.
- Balance section vertical rhythm. Long copy-heavy sections need breathing room before and after; dense sections need air around them.
- Refine borders, shadows, radii, and dividers to the project's design tokens. Default shadows almost always look generic; project tokens almost always look premium.
- Refine hover states and focus states visually — they are part of the polish layer, not afterthoughts.
- Avoid raw default browser styling on form fields, lists, tables, and inputs. Every default needs a polished override.

## Page Build Responsibilities

For each page, this skill must produce:

- A spacing-scale declaration — which spacing tokens apply to which sections, gutters, and component internals
- An alignment grid plan — how elements in each section align to each other and to the container
- A typographic hierarchy declaration — heading sizes/weights, body treatment, eyebrow/label treatment, link treatment
- A card-detailing plan — internal spacing, alignment, border/shadow/radius treatment, hover refinement
- A section-balance plan — which section is the visual anchor; how supporting sections balance vertically and visually
- A polish-token audit — list of project tokens used; flag any place a non-token value was needed and why

## Claude Project Usage

Claude Project uses this skill during strategy and planning. Specifically:

- During Prompt 02 — declare the visual anchor section and the supporting-section roles
- During Prompt 05 — include the full polish plan (spacing, alignment, hierarchy, cards, balance, tokens) in the developer build brief
- Flag any place the project's existing tokens do not cover a required polish need as a build blocker for Prompt 06

## Claude Code Usage

Claude Code uses this skill during implementation. Specifically:

- Gate 1 — confirm the project's existing polish tokens (spacing, typography, borders, shadows, radii) support the planned polish plan; surface any missing token as a Gate 1 blocker
- Gate 2 — translate the polish plan into specific component-prop and token choices; flag every place a non-token value is required
- Gate 3 — implement using the polish tokens; do not introduce raw values
- Gate 4 — verify spacing rhythm reads intentionally, alignment is consistent, typographic hierarchy is clear, cards are internally polished, section balance is correct, no raw values appear
- Gate 5 — report which polish tokens were used and any non-token values that required project-owner confirmation

## QA Checks

A page cannot pass this skill until:

- [ ] Spacing scale is consistent within and across sections
- [ ] Alignment within each section reads intentionally (vertical and horizontal)
- [ ] Typographic hierarchy is clear at a glance (H1 stands out, H2/H3 are distinct, body is comfortable, labels/eyebrows are distinct)
- [ ] Cards have internal spacing, alignment, and hierarchy of their own; no card looks empty or cramped
- [ ] Section balance reads correctly — the visual anchor is the visual anchor; supporting sections support
- [ ] No raw hex, raw spacing values, or default browser styling on form fields, lists, tables, or inputs
- [ ] Borders, shadows, radii match project tokens (or have explicit project-owner approval for an override)
- [ ] Hover and focus states are visually polished, not default
- [ ] No premium-looking section ruins the premium feel of the next section (no jarring transitions between polished and unpolished blocks)

## Design Vision

Premium design is mostly spacing and type. Clients and visitors cannot name what makes
a site feel expensive, but they feel it immediately. It is almost never the components.
It is the rhythm, the hierarchy, and the restraint.

Spacing rules:
- Card grids: gap-8 md:gap-12. Never gap-4 for major content grids.
- Card padding: p-6 or p-8. Never p-4.
- Between a section heading block and the content grid: mb-10 or mb-12.
- Between eyebrow and H2: mb-3. Between H2 and subtext: mt-4.
  These small gaps compound into either rhythm or chaos.

Section heading pattern, required for every non-hero section:
- Eyebrow label (optional but strongly recommended): all-caps, brand color, small, tracked wide
- H2: clear, direct, large
- One-sentence subtext: body size, muted color, max-w-2xl
- This three-part pattern gives every section visual structure before the content starts.

Card standards:
- Border radius: rounded-2xl. Softer corners read as more considered.
- Border: border border-neutral-200. Use border over box-shadow as the primary container signal.
- Hover: translate-y-[-2px] transition-transform duration-200. One subtle behavior only.
- Icon containers: rounded-xl bg-brand-100 text-brand-600 p-3 inline-flex.
  Never drop a raw SVG icon directly into text flow.

Breaking visual monotony:
- Every page should have at least one section that uses large display numbers, a bold
  pull quote, or a full-bleed image treatment. Uniform section height top to bottom reads
  as a template.
- Stat callouts: text-4xl md:text-5xl font-bold text-brand-600 with a short descriptor label.
  These are the fastest way to add visual hierarchy without adding complexity.

Section background discipline:
- Use surface-1 and surface-2 alternation only.
- One dark or brand-colored section per page maximum, typically the final CTA band.
- No section should use a background color that does not exist in the defined token set.

Details that separate considered from generic:
- Replace default bullet lists with icon-prefixed rows in feature and benefit lists.
- Trust logos: grayscale filter, consistent height, equal spacing.
- Dividers: whitespace only. No hr elements in content sections.
- Empty states and placeholder areas should follow the same spacing and type rules
  as populated content.

## Hard Rules

- Do not mix spacing scales without intent.
- Do not introduce raw hex, magic spacing, or default browser styling. Every value comes from a token or has explicit override approval.
- Do not ship a card that looks empty, cramped, or unbalanced.
- Do not skip polish on hover/focus states — they are part of the surface, not afterthoughts.
- Do not let one polished section sit next to an unpolished section. Polish is a per-page commitment, not a per-section opt-in.
- Do not use polish to mask weak conversion UX or weak SEO/AEO structure. Polish layers on top of correctness, not in place of it.

## Output Expectations

When this skill runs, the output must include:

- Spacing-scale declaration with explicit tokens per section
- Alignment grid plan
- Typographic hierarchy declaration with sizes/weights per role
- Card-detailing plan (internal spacing, alignment, borders/shadows/radii, hover refinement)
- Section-balance plan (visual anchor + supporting roles)
- Polish-token audit
- Carry-forward items — any token gap, non-token value, or polish refinement that needs project-owner confirmation
