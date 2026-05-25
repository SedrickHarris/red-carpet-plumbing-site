# Site OS Master

Site OS Master is a reusable website production system for building SEO, AEO, GEO, SERP, voice search, rich snippet, AI/LLM citation, engagement, and conversion optimized websites using Claude, Claude Code, and VS Code.

## Purpose

This system helps create consistent, high quality website projects across multiple clients and brands.

It supports:

- Website strategy
- Keyword planning
- Search intent mapping
- Page outlines
- AEO FAQ planning
- Technical SEO planning
- Schema planning
- Claude Code build prompts
- QA reviews
- Client handoff documentation

## Recommended Workflow

1. Copy this master system into a new website project.
2. Fill out the project brief.
3. Fill out the design style guide.
4. Build the site architecture.
5. Generate page keyword strategy.
6. Generate page outline.
7. Run 10 metric analysis.
8. Apply gap fixes.
9. Create developer build brief.
10. Create Claude Code prompt.
11. Build the page in Claude Code and VS Code.
12. Run QA checklist.
13. Save final notes.

## Core Philosophy

Claude is used for strategy, content planning, SEO, AEO, and prompt creation.

Claude Code is used for codebase inspection, implementation, routing, metadata, schema, QA, and debugging.

Do not make Claude Code solve strategy and implementation at the same time unless necessary.

## Folder Overview

- `/docs`: Project strategy and operating documents.
- `/prompts`: Reusable Claude prompts.
- `/page-templates`: Reusable page structure templates.
- `/schemas`: Schema templates.
- `/checklists`: Build, QA, launch, and indexing checklists.
- `/examples`: Example briefs and prompts.
- `/client-projects`: Optional folder for client-specific working copies.

## Prompt Operating Guide

The main operating guide for using Site OS is located at:

`docs/site-os-prompt-operating-guide.md`

Use this guide to choose the correct workflow mode:

- Fast Mode
- Core Mode
- Beyond-Elite Mode
- Full Competitive Build Mode

The guide explains which prompts to use, when to use them, when to skip them, and how to evaluate prompt performance over time.

## Router, Skills, and Token Control

Site OS includes a router system to help choose the right prompt, workflow mode, model/effort level, and output depth.

Key folders:

- `skills`: Task routing, model/effort selection, prompt mode selection, and evaluation skills.
- `routing`: Maps tasks to prompts, models, and workflow modes.
- `token-control`: Rules for minimizing token usage while maintaining output quality.

Use the router before major tasks to avoid overusing advanced prompts when a smaller workflow is enough.

## Efficiency Governor

Site OS includes an Efficiency Governor to increase output while minimizing token usage.

Use these files before major tasks:

- `skills/site-os-efficiency-governor-skill.md`
- `skills/context-compression-skill.md`
- `skills/output-depth-controller-skill.md`
- `routing/efficiency-decision-tree.md`
- `token-control/context-reuse-rules.md`
- `token-control/prompt-efficiency-rules.md`
- `token-control/model-effort-efficiency-rules.md`

The Efficiency Governor helps decide:

- Which workflow mode to use
- Which prompt to use
- Which prompts to skip
- Which model/effort level to use
- Which output depth to use
- What context to compress or reuse
- When to stop

The goal is to produce more high-quality work with fewer wasted tokens.

## Deploy and Client Handoff Discipline

Site OS Master includes safe-deploy, post-deploy production verification, standing approval, and reusable client-repo documentation structure templates. Use these files when deploying client websites or handing builds between sessions, owners, or contractors.

### Safe Deploy

- `checklists/deploy-workflow-checklist.md` — required deploy sequence (build before deploy), correct-repo rule, stack-specific Next.js + OpenNext + Cloudflare Workers procedure, stop conditions, and command examples for PowerShell and Bash.
- `checklists/post-deploy-production-verification-checklist.md` — verify production content (not local files), HTTP status, CTA wording, canonical URLs, www → apex redirect, robots.txt, sitemap.xml, and Worker Version ID recording.

### Workflow and Handoff Discipline

- `docs/standing-approval-rule-template.md` — codified pattern for reducing yes/no friction across low-risk internal workflow steps (Gate 1 → Gate 2 → Gate 3 → QA → commit → push) while preserving hard stops for deploys, package installs, route changes, lib/data edits, image assets, external API wiring, and other high-risk actions.
- `docs/client-repo-doc-structure.md` — reusable `docs/site-os/{inputs, outputs, qa, changelog}` folder structure for client repos, with scaffolding commands for PowerShell and Bash and a paste-ready README template.

These templates reduce ad-hoc decisions during multi-session builds and make client handoffs predictable.
