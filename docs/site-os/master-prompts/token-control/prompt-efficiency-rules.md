# Prompt Efficiency Rules

Use these rules to avoid wasting tokens with unnecessary prompts.

## Core Rule

Run only the prompts needed for the task.

## Required Prompt Discipline

Before using a prompt, identify:

- Task type
- Page type
- Page value
- Competition level
- Output needed
- Next step

## Prompt Use Rules

Use 01 keyword strategy when:
- Starting a new page
- Building a keyword map
- Creating a page outline

Skip 01 when:
- Keywords are already approved
- Only implementation is needed

Use 02 page outline when:
- Creating a new page strategy
- Revising a page structure

Skip 02 when:
- Outline is already approved
- Only coding or QA is needed

Use 03 ten-metric analysis when:
- The page strategy needs review
- The page is important enough to justify scoring

Skip 03 when:
- Task is a quick edit
- Page is low priority
- Only a build prompt is needed

Use 04 gap fix when:
- Prompt 03, Prompt 07, or owner-reviewed analysis identifies a real gap requiring strategy repair before build
- Competitor gap, alignment gap, or search-intent gap is flagged

Skip 04 when:
- Strategy is already approved and no gap has been flagged
- Task is a quick edit or implementation-only

Use 20 visibility alignment when:
- Page is high value
- Page must support multi-platform visibility
- The page is tied to lead generation or local visibility

Skip 20 when:
- Page is minor
- Task is only formatting
- Speed matters more than deep audit

Use 08, 09, 15, 16, 17, 18 when:
- Page is high value or highly competitive
- User wants to outperform competitors
- Page is revenue-critical

Skip these when:
- Page is standard
- Time/token savings matter
- Existing strategy is sufficient

Use 05 and 06 when:
- Strategy is approved
- Claude Code needs implementation instructions

Use 07 when:
- Page was built
- Launch readiness or QA is needed

Use 10 client data collection when:
- Missing client data blocks launch, schema, CTA, legal copy, forms, contact details, analytics, indexing, or final production approval

Do not use 10 to invent missing data.

## Prompt Chaining Rules

Do not chain prompts automatically unless the next step is needed.

After each major output, decide:

- Is this ready for the next step?
- Does it need review?
- Can we skip deeper analysis?
- Is the next prompt worth the tokens?

## Strategy-Approved Shortcut

Use the shortcut Prompt 05 → Prompt 06 → Prompt 07 when all of the following are true:

- Strategy is already approved
- No competitor gap, alignment gap, or search-intent gap is flagged
- The task can be described by Prompt 05 or the Compact Strategy Summary without re-running upstream strategy prompts

Higher modes (Beyond-Elite, Full Competitive Build) do not qualify for the shortcut.

## Over-Prompting Prevention

Do not run Prompts 03, 04, or 20 for Fast Mode or Core Mode unless explicitly required by a flagged gap or owner approval.

Do not escalate Fast Mode or Core Mode work into Beyond-Elite or Full Competitive Build work without explicit owner approval.

## Efficiency Governor References

The Efficiency Governor layer is supported by these files:

- efficiency-governor/client-intake-gate.md — hard gate checklist; no build begins until cleared
- efficiency-governor/compact-strategy-summary-template.md — one-page strategy handoff used when prior strategy is approved

## Final Rule

A skipped prompt is a token savings win if quality is not reduced.
