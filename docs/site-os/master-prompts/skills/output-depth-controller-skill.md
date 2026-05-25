# Output Depth Controller Skill

Use this skill to control how much detail Claude should produce.

The goal is to avoid oversized outputs while still producing enough detail to act.

## Output Depth Levels

### Compact Output

Use when:
- User needs a command
- User needs a short answer
- User needs a handoff prompt
- User needs a checklist update
- User needs confirmation
- Task is low complexity

Output should include:
- Direct answer
- Required command or next step
- Minimal explanation

Avoid:
- Long reasoning
- Full strategy
- Multiple alternatives unless needed

### Standard Output

Use when:
- User needs a normal workflow step
- User needs page strategy
- User needs a keyword map
- User needs a page outline
- User needs a build brief
- Task is moderate complexity

Output should include:
- Clear sections
- Prioritized recommendations
- Actionable detail
- Next step

Avoid:
- Excessive theory
- Repeating old context
- Writing full content unless asked

### Deep Output

Use when:
- User asks for analysis
- Task is high value
- Page is competitive
- Final QA is needed
- Prompt evaluation is needed
- Strategic tradeoffs matter

Output should include:
- Scorecards
- Risks
- Priorities
- Tradeoffs
- Implementation notes
- Final recommendation

Avoid:
- Unstructured long paragraphs
- Unnecessary repetition
- Generic advice

## Depth Selection Map

Quick setup:
Compact

PowerShell commands:
Compact

Prompt update:
Compact to Standard

Keyword strategy:
Standard

Page outline:
Standard

SERP competitive analysis:
Deep

Entity topical authority:
Deep

Developer build brief:
Standard

Claude Code prompt:
Compact to Standard

QA review:
Standard to Deep

Final launch QA:
Deep

Prompt evaluation:
Deep

## Final Rule

Match output depth to task value.

Do not produce deep output for low-value tasks.
