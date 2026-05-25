# Model and Effort Selection Skill

Use this skill to choose the right Claude model and reasoning effort for Site OS tasks.

The goal is to use the lowest effective model and effort level while maintaining quality.

## Selection Principle

Use stronger reasoning only when the task has high complexity, high uncertainty, high business impact, or high risk.

## Low Effort Tasks

Use low effort for:

- File organization
- Folder structure updates
- Basic markdown edits
- Simple checklists
- Simple metadata formatting
- Basic prompt placement
- Naming conventions
- Simple content cleanup

Why:
These tasks do not require deep reasoning.

## Medium Effort Tasks

Use medium effort for:

- Keyword strategy
- Standard page outlines
- Standard service page planning
- Standard location page planning
- AEO FAQ planning
- Internal linking recommendations
- Schema planning when data is straightforward
- Developer build briefs
- Claude Code build prompts
- Normal implementation planning

Why:
These tasks need structure and judgment, but not maximum reasoning.

## High Effort Tasks

Use high effort for:

- 10-metric strategic analysis
- Visibility and conversion alignment
- SERP competitive analysis
- Entity and topical authority mapping
- Conversion optimization
- AI citation readiness
- Content moat strategy
- Final launch QA
- Prompt evaluation
- Benchmark comparison

Why:
These tasks require prioritization, scoring, tradeoff analysis, and quality control.

## Strongest Model / Advisor / Ultrathink Tasks

Use the strongest available reasoning option for:

- Homepage strategy for important client sites
- Core money page strategy
- Competitive local SEO pages
- Full site architecture
- Complex Next.js debugging
- Broken build debugging
- Large refactors
- Deployment issues
- Prompt system redesign
- Evaluating whether the Site OS is improving over time

Why:
These tasks have high impact, high complexity, or higher risk of costly mistakes.

## Model/Effort Output Format

When asked which model or effort to use, return:

Task:
[Task]

Recommended model/effort:
[Low, Medium, High, Strongest]

Reason:
[Why this level is appropriate]

Do not use:
[What would be overkill]

Token-saving note:
[How to keep the task efficient]

Escalation trigger:
[When to move to stronger reasoning]

## Escalation Rules

Escalate to higher effort if:

- The output is generic
- The page is high value
- The page is highly competitive
- The task affects many pages
- Claude Code makes repeated mistakes
- The build breaks
- The strategy affects site architecture
- The user asks for strict evaluation
- The task involves final launch QA

## De-escalation Rules

Use lower effort if:

- The task is repetitive
- The structure is already approved
- The user only needs a small edit
- The task is formatting
- The page is low priority
- The prompt output is only a handoff summary
