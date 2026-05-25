# Token Saving Rules

Use these rules to increase output while minimizing token usage.

## Core Rules

1. Use the lowest effective workflow mode.
2. Do not run Full Competitive Build Mode unless the page is high value or highly competitive.
3. Do not generate full content until the outline is approved.
4. Do not repeat full strategy context when creating Claude Code prompts.
5. Summarize approved strategy before handoff.
6. Use tables for analysis-heavy outputs.
7. Use compact summaries for implementation tasks.
8. Use direct recommendations instead of long explanations when building.
9. Use stronger reasoning only for high-value strategy, debugging, final QA, or prompt evaluation.
10. Stop adding sections, links, FAQs, or schema if they do not improve search intent, trust, topical authority, or conversion.

## Claude Online Rules

Use Claude online for:

- Strategy
- Keyword planning
- SERP analysis
- Entity mapping
- Page outlines
- Gap analysis
- Developer briefs
- Prompt evaluation

Do not ask Claude online to produce code-heavy implementation unless the codebase is available.

## Claude Code Rules

Use Claude Code for:

- Inspecting files
- Building pages
- Updating routes
- Adding metadata
- Adding schema
- Running QA
- Fixing build errors

Do not make Claude Code redo strategy unless the strategy is missing.

## Context Rules

Use /clear when switching:

- Clients
- Websites
- Page types
- Major workflows

Use /context before:

- Large builds
- Multi-page updates
- Major refactors
- Long sessions
- Complex debugging

## Output Control Rules

Ask for compact output when:

- The task is a handoff
- The strategy is already approved
- Claude Code only needs instructions
- You are creating a checklist
- You are making a small update

Ask for deep output when:

- The page is high value
- The task is final QA
- The task is competitive analysis
- The task is prompt evaluation
- The task impacts site architecture

## Reuse Rules

Reuse existing:

- Page briefs
- Approved outlines
- Approved keyword maps
- Approved schema plans
- Approved internal link plans
- Approved build briefs

Do not regenerate unless something changed.

## Stop Conditions

Stop expanding the output if:

- The page goal is already satisfied
- The added detail is not actionable
- The recommendation repeats earlier advice
- The section does not support SEO, AEO, GEO, LLM search, trust, or conversion
- Claude Code does not need the extra detail

## Final Rule

More detail is only better when it improves the decision, strategy, implementation, or QA result.
