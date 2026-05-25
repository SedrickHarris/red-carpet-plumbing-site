# Prompt Change Log

Use this file to track changes made to Site OS prompts.

## Change Entry Template

### Date

[Date]

### Prompt Updated

[Prompt file name]

### Change Type

Choose one:

- New prompt
- Minor revision
- Major revision
- Beyond-elite upgrade
- Competitive outperformance upgrade
- Evaluation update
- Bug fix
- Simplification

### Reason for Change

[Explain why the prompt was changed]

### What Changed

- [Change 1]
- [Change 2]
- [Change 3]

### Expected Improvement

[What should improve because of this change]

### Risks

[Could this make the prompt too long, too complex, too rigid, or too expensive?]

### Test Needed

[What benchmark or sample page should be used to test this change?]

---

## Prompt Change Entries

Add entries below this line.

---

### Date

2026-05-14

### Prompt Updated

prompts/05-developer-build-brief-prompt.md (v2.0 → v2.1)

### Change Type

Minor revision

### Reason for Change

Align Prompt 05 with the supporting-prompt header convention, acknowledge Prompt 20 v1.2 as an upstream source for its Secondary Position pre-build alignment gate review, and enforce frontend dependency discipline so the build brief handed to Prompt 06 respects the project's installed stack (Tailwind CSS, Framer Motion) and does not silently introduce new dependencies.

### What Changed

- Added canonical File, Position, and Upstream Sources Acknowledged header fields.
- Added Prompt 20 v1.2 as recognized upstream source.
- Added formal Does Not Replace list covering Prompts 06–20.
- Added frontend dependency inspection requirement.
- Added installed/approved dependency handling for Tailwind CSS and Framer Motion.
- Added new dependency approval rule for Prompt 06 handoff safety.
- No routing logic changed.
- No Prompt 06 handoff logic changed.

### Expected Improvement

Prompt 06 receives build briefs that plan around the project's installed frontend stack rather than proposing libraries that do not fit. Prompt 20 v1.2 alignment outputs (when run in Secondary Position) are formally consumable by Prompt 05. The supporting-prompt header convention is now consistent across the prompt set.

### Risks

Low. Patch is clarifying and dependency-discipline only. No routing logic, Prompt 06 handoff language, validation rules, carry-forward vocabulary, Required Output Format, Acceptance Criteria, or Safety Rule was modified. No prompt other than Prompt 05 was touched.

### Test Needed

Lightweight confirmation test — completed on 2026-05-14.

### Confirmation Result

PASS — Clean. 10/10 lightweight confirmation checks passed. No flagged items.

### Commit Reference

Prompt 05 v2.1 patch commit: 457f264 — "prompts(05): apply v2.1 developer build brief patch".

### Readiness

Prompt 05 v2.1 is ready to support the first controlled website build.

---

### Date

2026-05-14

### Prompt Updated

prompts/05-developer-build-brief-prompt.md (v2.1 status-header cleanup)

### Change Type

Bug fix

### Reason for Change

Resolve the one cosmetic documentation flag raised by the lightweight confirmation test of Prompt 05 v2.1. After the confirmation test passed, the Status header in the prompt file still read "v2.1 Patch Applied — Awaiting Confirmation Test"; this update flips it to "v2.1 — Confirmed" so the file's self-declared status matches the master status record and the changelog.

### What Changed

- prompts/05-developer-build-brief-prompt.md: Status header line changed from "v2.1 Patch Applied — Awaiting Confirmation Test" to "v2.1 — Confirmed". No other prompt content modified.
- No routing logic changed.
- No Prompt 06 handoff logic changed.

### Confirmation Result

PASS WITH FLAGGED ITEMS — 10/10 functional checks passed; 1 cosmetic status-header flag resolved by this update.

### Commit Reference

Prompt 05 v2.1 patch commit: 457f264 — "prompts(05): apply v2.1 developer build brief patch".
Prompt 05 v2.1 status/changelog confirmation commit: 33924d8 — "docs(prompt-05): confirm v2.1 status and changelog".

### Readiness

Prompt 05 v2.1 is fully confirmed and ready to support the first controlled website build.
