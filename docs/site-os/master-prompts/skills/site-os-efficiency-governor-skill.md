# Site OS Efficiency Governor Skill

Use this skill before starting any Site OS task.

The goal is to maximize output while minimizing token usage.

This skill decides:

- Whether the task needs a prompt
- Which prompt should be used
- Which workflow mode should be used
- Which model/effort level should be used
- What output depth is appropriate
- What context should be reused
- What context should be skipped
- When to stop

## Core Efficiency Rule

Use the smallest workflow that can produce the needed result.

Do not use advanced prompts, deep output, or high reasoning unless the task requires it.

## Step 1: Task Classification

Classify the task as one of these:

1. Quick answer
2. File/folder setup
3. Prompt update
4. Keyword strategy
5. Page outline
6. Competitive analysis
7. Entity/topical authority
8. Schema planning
9. Internal linking
10. Conversion review
11. Content editing
12. Developer build brief
13. Claude Code build prompt
14. QA review
15. Debugging
16. Prompt evaluation
17. Benchmark testing
18. Client handoff

## Step 2: Page Value Classification

Classify the page or task value:

- Low value
- Medium value
- High value
- Revenue-critical

Use low value for minor pages or simple updates.

Use medium value for normal service, location, blog, or content pages.

Use high value for homepages, core service pages, primary location pages, category pages, and important landing pages.

Use revenue-critical for pages tied directly to lead generation, paid traffic, competitive rankings, or client revenue.

## Step 3: Competition Level

Classify competition level:

- Low
- Moderate
- High
- Unknown

If unknown, do not automatically assume high competition.

Use Core Mode unless the user says the page is highly competitive or revenue-critical.

## Step 4: Workflow Mode Decision

Choose the workflow mode:

### Fast Mode

Use when:
- Task is simple
- Page value is low or medium
- Competition is low
- Output can be short
- Existing structure is already approved

### Core Mode

Use when:
- Page value is medium
- Competition is moderate
- Page needs SEO, AEO, GEO, schema, internal links, and conversion basics

### Beyond-Elite Mode

Use when:
- Page value is high
- Page is a homepage, core service page, primary location page, or category page
- The page needs stronger search, AI, and conversion strategy

### Full Competitive Build Mode

Use only when:
- Page is revenue-critical
- Competition is high
- User explicitly wants to outperform competitors aggressively
- Page requires content moat, AI citation readiness, and full platform alignment

## Step 5: Model/Effort Decision

Choose effort level:

### Low Effort

Use for:
- Folder setup
- File creation
- Formatting
- Simple updates
- Short summaries
- Checklist updates

### Medium Effort

Use for:
- Keyword maps
- Standard page outlines
- Build briefs
- Claude Code prompts
- Standard implementation planning

### High Effort

Use for:
- 10-metric analysis
- Full visibility alignment
- Competitive analysis
- Conversion analysis
- Final QA
- Prompt evaluation

### Strongest Effort

Use for:
- Complex architecture
- Broken builds
- Major debugging
- Revenue-critical strategy
- Prompt system redesign
- High-stakes launch review

## Step 6: Output Depth Decision

Choose output depth:

### Compact

Use for:
- Handoffs
- Commands
- Small updates
- Confirmations
- Claude Code prompts

### Standard

Use for:
- Normal strategy
- Page outlines
- Keyword maps
- Build briefs
- QA summaries

### Deep

Use for:
- Competitive pages
- Final QA
- Prompt evaluation
- Full visibility alignment
- Complex strategy

## Step 7: Context Reuse

Before producing output, decide:

- What context is already approved?
- What can be summarized?
- What does not need to be repeated?
- What details are required for the next step?
- What can be omitted?

Do not repeat full project details unless required.

Use short context summaries instead.

## Step 8: Stop Conditions

Stop expanding output when:

- The recommendation is actionable
- The next step is clear
- More detail would not improve the decision
- The task does not require deep strategy
- Claude Code only needs implementation instructions

## Required Router Output

Before major tasks, return:

Task type:
[Task type]

Page/task value:
[Low, Medium, High, Revenue-critical]

Competition level:
[Low, Moderate, High, Unknown]

Recommended workflow mode:
[Fast, Core, Beyond-Elite, Full Competitive Build]

Recommended prompt:
[Prompt file]

Prompts to skip:
[Prompt files not needed]

Recommended model/effort:
[Low, Medium, High, Strongest]

Output depth:
[Compact, Standard, Deep]

Context reuse plan:
[What to reuse or summarize]

Token-saving instruction:
[How to avoid waste]

Expected deliverable:
[What should be produced]

Next step:
[What to do after this]

## Final Rule

Efficiency does not mean less quality.

Efficiency means using the right amount of strategy, detail, model effort, and prompts for the task.
