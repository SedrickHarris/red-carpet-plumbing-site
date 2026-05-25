# Site OS Task Router Skill

Use this skill before running any major Site OS workflow.

The purpose is to choose the right workflow mode, prompt, model/effort level, and output depth for the task.

The goal is to increase output while minimizing token usage.

## Core Rule

Do not use the heaviest workflow unless the task requires it.

Use the lowest effective workflow mode, prompt set, and model/effort level needed to complete the task correctly.

## Inputs Needed

Before routing, identify:

- Client or project name
- Page type
- Task type
- Page importance
- Competition level
- Desired output
- Whether this is strategy, implementation, QA, or debugging
- Whether full detail or compact output is needed

## Task Types

Classify the request as one of the following:

1. Keyword strategy
2. SERP competitive analysis
3. Entity and topical authority mapping
4. Page outline
5. 10-metric analysis
6. Visibility and conversion alignment
7. Gap fixing
8. Internal linking strategy
9. Schema strategy
10. Conversion optimization
11. Content editing
12. Developer build brief
13. Claude Code build prompt
14. Claude Code implementation
15. QA review
16. Prompt or template evaluation
17. Debugging
18. File organization
19. Client handoff
20. Benchmark testing

## Workflow Mode Selection

Choose one:

### Fast Mode

Use when:
- The task is simple
- The page is low to medium priority
- Speed matters
- The project already has an approved structure

Use prompts:
- 01-keyword-strategy-prompt.md
- 02-page-outline-prompt.md
- 05-developer-build-brief-prompt.md
- 06-claude-code-build-prompt.md
- 07-qa-review-prompt.md

### Core Mode

Use when:
- The page is a normal service, location, category, blog, or landing page
- Quality matters but competition is moderate
- The page needs SEO, AEO, internal links, schema, and conversion planning

Use prompts:
- 01-keyword-strategy-prompt.md
- 02-page-outline-prompt.md
- 03-ten-metric-analysis-prompt.md
- 20-visibility-conversion-alignment-prompt.md if important
- 04-gap-fix-prompt.md
- 05-developer-build-brief-prompt.md
- 06-claude-code-build-prompt.md
- 07-qa-review-prompt.md

### Beyond-Elite Mode

Use when:
- The page is high value
- The page is a core service page, homepage, primary location page, category page, or major landing page
- The goal is stronger ranking, AI search readiness, and conversion

Use prompts:
- 01-keyword-strategy-prompt.md
- 08-serp-competitive-analysis-prompt.md
- 09-entity-topical-authority-prompt.md
- 02-page-outline-prompt.md
- 03-ten-metric-analysis-prompt.md
- 20-visibility-conversion-alignment-prompt.md
- 04-gap-fix-prompt.md
- 10-internal-linking-strategy-prompt.md
- 11-schema-strategy-prompt.md
- 12-conversion-optimization-prompt.md
- 05-developer-build-brief-prompt.md
- 06-claude-code-build-prompt.md
- 07-qa-review-prompt.md

### Full Competitive Build Mode

Use when:
- The page is tied directly to revenue
- The page is highly competitive
- The goal is to outperform and outpace competitors
- The page needs deep strategy, content moat planning, and advanced QA

Use prompts:
- 01-keyword-strategy-prompt.md
- 08-serp-competitive-analysis-prompt.md
- 09-entity-topical-authority-prompt.md
- 15-page-variant-battle-prompt.md
- 16-search-intent-defense-prompt.md
- 18-page-moat-prompt.md
- 02-page-outline-prompt.md
- 03-ten-metric-analysis-prompt.md
- 20-visibility-conversion-alignment-prompt.md
- 04-gap-fix-prompt.md
- 10-internal-linking-strategy-prompt.md
- 11-schema-strategy-prompt.md
- 12-conversion-optimization-prompt.md
- 17-ai-citation-readiness-prompt.md
- 13-content-quality-editor-prompt.md
- 05-developer-build-brief-prompt.md
- 06-claude-code-build-prompt.md
- 07-qa-review-prompt.md
- 14-page-template-evaluation-prompt.md
- 19-template-eval-rubric-prompt.md

## Model and Effort Routing

Use the lowest effective model and effort level.

### Low Effort

Use for:
- File organization
- Simple formatting
- Basic metadata
- Simple checklists
- Small edits
- Renaming
- Basic content cleanup

### Medium Effort

Use for:
- Keyword strategy
- Standard page outlines
- Standard FAQ planning
- Internal links
- Developer build briefs
- Claude Code prompts
- Normal implementation planning

### High Effort

Use for:
- 10-metric analysis
- Visibility and conversion alignment
- Competitive analysis
- Entity mapping
- Conversion optimization
- Final launch QA
- Prompt evaluation

### Strongest Model / Advisor / Ultrathink

Use for:
- Complex site architecture
- High-value homepage strategy
- Competitive money pages
- Stubborn debugging
- Major refactors
- Prompt system redesign
- Evaluation of prompt quality over time

## Output Length Routing

Choose one:

### Compact Output

Use when:
- The user needs speed
- The task is simple
- The output will be followed by another prompt
- Claude Code only needs implementation instructions

### Standard Output

Use when:
- The page needs normal strategy
- The user needs enough detail to review
- The task is part of Core Mode

### Deep Output

Use when:
- The page is high value
- The task is competitive analysis, full alignment, or launch QA
- The goal is outperformance

## Router Output Format

Before running a major task, return:

Task type:
[Task type]

Page type:
[Page type]

Recommended workflow mode:
[Fast, Core, Beyond-Elite, or Full Competitive Build]

Prompt to use:
[Prompt file]

Prompts to skip:
[Prompts that are not needed]

Recommended model/effort:
[Low, Medium, High, Strongest]

Output depth:
[Compact, Standard, Deep]

Token-saving instruction:
[How to keep output efficient]

Expected output:
[What the output should include]

Next step:
[Next prompt or action]

## Token-Saving Rules

- Do not repeat the full project brief unless needed.
- Do not write full page content until the outline is approved.
- Do not run advanced prompts for simple pages.
- Do not use Full Competitive Build Mode unless the page is high value.
- Use tables and scorecards for analysis-heavy work.
- Use concise implementation summaries for Claude Code handoff.
- Use approved strategy summaries instead of pasting all prior outputs.
- Use /clear when switching clients, websites, or page types.
- Use /context before large builds.
- Use stronger reasoning only when the task requires it.

## Final Rule

Route before producing.

Choose the right workflow, prompt, effort level, and output depth before generating the deliverable.
