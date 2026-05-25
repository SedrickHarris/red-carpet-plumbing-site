# Prompt Mode Selector Skill

Use this skill to choose the correct Site OS workflow mode before starting a task.

The goal is to prevent overusing long workflows when a smaller workflow is enough.

## Available Modes

1. Fast Mode
2. Core Mode
3. Beyond-Elite Mode
4. Full Competitive Build Mode

## Fast Mode

Use Fast Mode when:

- Speed matters
- The page is simple
- The page is low to medium priority
- The structure is already known
- The content is not highly competitive
- The task is a quick update

Prompt sequence:

1. 01-keyword-strategy-prompt.md
2. 02-page-outline-prompt.md
3. 05-developer-build-brief-prompt.md
4. 06-claude-code-build-prompt.md
5. 07-qa-review-prompt.md

## Core Mode

Use Core Mode when:

- The page is a normal service page
- The page is a normal location page
- The page is a regular blog post
- The page needs good SEO/AEO/conversion structure
- The page is important but not highly competitive

Prompt sequence:

1. 01-keyword-strategy-prompt.md
2. 02-page-outline-prompt.md
3. 03-ten-metric-analysis-prompt.md
4. 20-visibility-conversion-alignment-prompt.md if important
5. 04-gap-fix-prompt.md
6. 05-developer-build-brief-prompt.md
7. 06-claude-code-build-prompt.md
8. 07-qa-review-prompt.md

## Beyond-Elite Mode

Use Beyond-Elite Mode when:

- The page is high value
- The page is a homepage
- The page is a core service page
- The page is a primary location page
- The page is a main category page
- The page is a strategic landing page

Prompt sequence:

1. 01-keyword-strategy-prompt.md
2. 08-serp-competitive-analysis-prompt.md
3. 09-entity-topical-authority-prompt.md
4. 02-page-outline-prompt.md
5. 03-ten-metric-analysis-prompt.md
6. 20-visibility-conversion-alignment-prompt.md
7. 04-gap-fix-prompt.md
8. 10-internal-linking-strategy-prompt.md
9. 11-schema-strategy-prompt.md
10. 12-conversion-optimization-prompt.md
11. 05-developer-build-brief-prompt.md
12. 06-claude-code-build-prompt.md
13. 07-qa-review-prompt.md

## Full Competitive Build Mode

Use Full Competitive Build Mode when:

- The page is directly tied to revenue
- The page is highly competitive
- The goal is to dominate a search category
- The content must outperform and outpace competitors
- The client expects high strategic depth

Prompt sequence:

1. 01-keyword-strategy-prompt.md
2. 08-serp-competitive-analysis-prompt.md
3. 09-entity-topical-authority-prompt.md
4. 15-page-variant-battle-prompt.md
5. 16-search-intent-defense-prompt.md
6. 18-page-moat-prompt.md
7. 02-page-outline-prompt.md
8. 03-ten-metric-analysis-prompt.md
9. 20-visibility-conversion-alignment-prompt.md
10. 04-gap-fix-prompt.md
11. 10-internal-linking-strategy-prompt.md
12. 11-schema-strategy-prompt.md
13. 12-conversion-optimization-prompt.md
14. 17-ai-citation-readiness-prompt.md
15. 13-content-quality-editor-prompt.md
16. 05-developer-build-brief-prompt.md
17. 06-claude-code-build-prompt.md
18. 07-qa-review-prompt.md
19. 14-page-template-evaluation-prompt.md
20. 19-template-eval-rubric-prompt.md

## Mode Selection Output

Return:

Recommended mode:
[Mode]

Why:
[Reason]

Prompts to use:
[List]

Prompts to skip:
[List]

Estimated output depth:
[Compact, Standard, Deep]

Token-saving note:
[How to avoid overuse]

Escalation trigger:
[When to move to a deeper mode]
