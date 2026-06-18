---
name: ux-ui-conversion-design
description: Required Site OS Master design skill governing CTA strategy, conversion flow, form placement, trust sections, friction reduction, lead capture, and page clarity for every website page build.
---

# ux-ui-conversion-design

## Purpose

Ensure the page actually converts. This skill governs CTA placement and hierarchy, conversion flow, form design and placement, trust signal placement, friction reduction, lead capture, and overall page clarity. A page can be beautifully composed, smoothly animated, and impeccably polished and still fail to convert. This skill prevents that.

## When to Use

Use this skill on every page build that has any conversion intent — service pages, location pages, conversion pages, homepages, landing pages, FAQ hubs, and any page that aims to generate a lead, a call, a quote request, a booking, or a click-through to a conversion page. Specifically:

- During Prompt 02 page outline — to declare the conversion intent of the page and the conversion role of each section
- During Prompt 05 developer build brief — to declare the conversion plan: primary CTA, secondary CTA, form details, trust placements, friction map, lead-capture path
- During Prompt 06 Gate 2 — to translate the conversion plan into specific component, form, and CTA implementation choices
- During Prompt 06 Gate 3 — to implement using the project's existing conversion components and form patterns
- During Prompt 06 Gate 4 — to verify the conversion path is clear at every scroll position, forms reduce friction, trust signals appear where objections would block conversion

This skill is intentionally not applied to pure-content pages with no conversion intent (legal pages, 404, utility pages). Those follow the existing project pattern only.

## Required Behavior

- Declare one primary CTA per page. Multiple primary CTAs dilute the signal and reduce conversion.
- Place the primary CTA above the fold, repeated at the mid-page, and reinforced at the bottom. The mid-page and bottom CTAs may be text-and-button versions; only the hero (or the inline form on a form-driven hero) is the single primary CTA UI.
- Reduce form friction: ask only for fields the conversion actually requires, label every field clearly, group related fields, use inline validation, never use placeholder-only labels.
- Place trust signals where objections would otherwise stop conversion — typically directly above or beside the CTA, and in the section that addresses the objection (price near the price section, credentials near the trust section, reviews near the proof section).
- Address objections explicitly. A page that ignores known objections (price, trust, time, complexity, regret) loses conversions silently.
- Make the conversion path visible at every scroll position. The user should never have to scroll up to find the next action.
- Use tap-to-call (`tel:`) on phone numbers when phone is a verified conversion path.
- Apply the service-business conversion-layout standard (two-column hero with form right) and the service-card image placeholder standard where applicable — see `docs/service-business-conversion-layout.md` and `docs/service-card-image-placeholder-standard.md`.

## Page Build Responsibilities

For each page, this skill must produce:

- A primary CTA declaration — what action, what label, what destination
- A secondary CTA declaration — what alternative action exists (typically tap-to-call or a low-friction alternative)
- A CTA placement map — hero, mid-page, final CTA section, mobile sticky if applicable
- A form plan — fields, field types, required vs optional, validation rules, submission destination (or TODO if unknown), confirmation behavior, fallback if no handler exists
- A trust signal placement plan — what trust signals appear where, tied to which objection
- An objection map — known objections and where each one is addressed on the page
- A friction audit — every place the conversion path could break (long form, unclear next step, missing trust signal at decision point) with mitigation
- A clarity audit — is the page goal clear within 3 seconds of landing? If not, what must change?

## Claude Project Usage

Claude Project uses this skill during strategy and planning. Specifically:

- During Prompt 02 — declare the conversion intent and section roles
- During Prompt 05 — include the full conversion plan (CTAs, form, trust, objections, friction, clarity) in the developer build brief
- During Prompt 12 conversion optimization — apply the deeper conversion review for Beyond-Elite and Full Competitive Build mode pages
- Flag any place a required conversion element (form handler, phone number, thank-you page, CRM webhook) is missing as a launch blocker that Prompt 06 must carry forward as a TODO

## Claude Code Usage

Claude Code uses this skill during implementation. Specifically:

- Gate 1 — confirm the project's existing CTA components, form components, form handlers, trust-signal components, and thank-you / confirmation patterns support the planned conversion plan; surface any missing component or handler as a Gate 1 blocker
- Gate 2 — translate the conversion plan into specific component, form, and CTA implementation choices; declare form submission method (known or unknown)
- Gate 3 — implement using existing conversion components; never invent a form handler, endpoint, CRM webhook, or thank-you page (per `docs/no-fake-data-policy.md` §9)
- Gate 4 — verify primary CTA is visible at every scroll position, form fields match the plan, validation works, submission destination is connected or clearly TODO-flagged, trust signals are placed where planned, tap-to-call works when phone is verified
- Gate 5 — report CTA placements, form behavior, submission status (connected vs TODO), and any objection or friction items carried forward

## QA Checks

A page cannot pass this skill until:

- [ ] One primary CTA is identifiable at every scroll position
- [ ] Primary CTA appears in the hero, mid-page, and final CTA section
- [ ] No two CTAs compete for primary status
- [ ] Form fields match the approved plan; no invented fields
- [ ] Form has inline validation; labels are real labels, not placeholders only
- [ ] Form submission is connected, or a clear TODO comment marks the missing handler
- [ ] Trust signals appear where objections would block conversion
- [ ] Known objections (price, trust, time, complexity, regret) are explicitly addressed
- [ ] Tap-to-call works on phone numbers when phone is verified
- [ ] Page goal is clear within 3 seconds of landing
- [ ] Service-business conversion layout applies where required (per `docs/service-business-conversion-layout.md`)
- [ ] Service card image placeholder applies where required (per `docs/service-card-image-placeholder-standard.md`)

## Design Vision

The conversion goal determines the page. Every layout decision flows from one question:
what does this visitor need to see, feel, and understand before they take the next step?
Design that does not answer that question is decoration.

Hero conversion pattern:
- The H1 must name what the business does and for whom. Not a tagline. Not a mission
  statement. A direct description: what, for who, where if local.
- The subheadline handles the primary objection or concern the target audience arrives with.
- Primary CTA: solid brand-colored button, large, px-8 py-4, specific label.
  "Get a Free Estimate" outperforms "Contact Us" on every service site.
  "Start Free Trial" outperforms "Sign Up" on every SaaS site.
  The label should complete the sentence "I want to..."
- Secondary CTA or trust signal: immediately below the primary CTA, not competing with it.

CTA system:
- One primary CTA per page. Repeated in hero, mid-page, and final section.
- Primary button: bg-brand-600 hover:bg-brand-700 text-white. Never outline as primary.
- Button size: px-6 py-3 minimum. px-8 py-4 for hero.
- Never place a CTA button inside a text paragraph. Give it vertical breathing room.
- The label must be specific. Vague CTAs signal uncertainty.

Trust architecture:
- Trust signals belong near the top of the page, not at the bottom.
- Place social proof within the first two scroll positions after the hero.
- Match trust signal placement to the objection it answers:
  Price objection: near pricing or estimate CTA
  Quality objection: near service descriptions
  Risk objection: near the primary conversion form
- Never invent trust signals. A missing trust signal is better than a fake one.

Form friction reduction:
- Fewer fields convert more. Ask only what is required to follow up.
- Labels above every field. Placeholder text is not a label.
- Primary submit button: full width on mobile, brand color, specific label.
- Success state: replace the form with a confirmation message in place.
  Never send the user to a blank or generic thank-you page without messaging.

What kills conversion regardless of design quality:
- Unclear primary action in the hero
- Social proof below the FAQ
- A form with more fields than necessary
- A CTA that requires interpretation
- Trust signals that cannot be verified

## Hard Rules

- Do not ship more than one primary CTA per page.
- Do not invent a form endpoint, CRM webhook, thank-you page route, phone number, email address, or analytics ID. If missing, TODO it and report it as a launch blocker.
- Do not invent trust signals (reviews, ratings, certifications, license numbers, years in business). Trust signals come from verified facts only per `docs/no-fake-data-policy.md` §4 and §5.
- Do not bury the primary CTA below the fold or remove it from the mid-page and footer.
- Do not use placeholder-only labels in form fields.
- Do not skip objection mapping. A page that ignores known objections is incomplete.

## Output Expectations

When this skill runs, the output must include:

- Primary CTA declaration (action, label, destination)
- Secondary CTA declaration
- CTA placement map
- Form plan (fields, types, validation, submission destination, confirmation behavior, fallback)
- Trust signal placement plan tied to objections
- Objection map
- Friction audit with mitigation per item
- Clarity audit
- Carry-forward items — any missing handler, missing trust signal, or objection without an addressed plan, marked as launch blocker
