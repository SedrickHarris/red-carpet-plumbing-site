# Context Reuse Rules

Use these rules to reduce token usage by reusing approved strategy instead of regenerating it.

## Core Rule

Reuse approved decisions.

Do not regenerate strategy unless the page goal, target audience, service, location, or business context has changed.

## Reuse These

Reuse:

- Project brief
- Design style
- Site architecture
- Page type template
- Approved keyword map
- Approved outline
- Approved metadata
- Approved schema plan
- Approved internal linking plan
- Approved CTA plan
- Approved Claude Code build brief

## Do Not Repeat

Do not repeat:

- Full previous conversations
- Full prompt instructions
- Full analysis outputs
- Rejected options
- Generic SEO explanations
- Full benchmark files
- Full rubrics unless evaluating

## Summary Before Handoff

Before giving instructions to Claude Code, summarize:

- Page name
- Route
- Sections
- Metadata
- Schema
- Internal links
- CTA
- Guardrails
- QA checks

## Reuse Decision

Before starting a task, ask:

1. Has this strategy already been approved?
2. Can I summarize instead of paste everything?
3. Is the full prior output needed?
4. Does Claude Code need this detail?
5. Can this be converted into a short build brief?

## Final Rule

Approved strategy should become a compact brief.

Do not carry unnecessary context into implementation.
