# Claude Code Instructions — Red Carpet Plumbing Site

You are working on the Red Carpet Plumbing website, built with Next.js (App Router), TypeScript, and Tailwind CSS, following the Site OS Master workflow.

## Required Reading Before Any Substantive Work

1. `docs/site-os/client-context/red-carpet-plumbing-project-context.md` — business, services, locations, primary CTAs, Site OS rules.
2. `docs/site-os/inputs/red-carpet-plumbing-build-list.md` — approved page URLs, H1s, sections, and the full internal linking strategy. Do not invent new routes outside this list without explicit approval.
3. `docs/site-os/master-prompts/` — Site OS Master prompts, schemas, checklists, and skills. Use the appropriate prompt for the task before improvising.

## Do Not Change Without Explicit Approval

- Customer-facing content, copy, or wording.
- Brand colors or design tokens.
- Navigation labels or information architecture.
- Page metadata (title, description, OG).
- Schema (FAQ text, service names, business claims).
- Business facts (services offered, service areas, hours, contact details).
- Approved page URLs or internal linking targets from the build list.

## Customer-Facing Copy Rules

- No em dashes (`—`).
- No double hyphens (`--`).
- No invented reviews, ratings, license numbers, warranties, years in business, or business claims.
- Preserve factual accuracy. If a fact is not in the project context, ask before writing it.

## Schema Rules

- Schema must match visible page content exactly.
- `FAQPage` schema must match visible FAQ text word-for-word.
- `HowTo` schema only when visible step-by-step content exists on the page.
- `Review` / `AggregateRating` schema only when reviews are real, visible, and verified.

## Layout & Component Standards

- Use a two-column hero on service business pages where appropriate: content on the left, contact or quote form on the right.
- Service cards include image placeholders as a standard.
- Mid-page and final CTAs follow the Site OS service-business conversion layout (`docs/site-os/master-prompts/` references).

## Code Standards

- Next.js App Router conventions only. Do not introduce Pages Router patterns.
- TypeScript everywhere. No `any` unless justified in a comment with a concrete reason.
- Tailwind CSS v4. Configuration is in `app/globals.css` (`@theme inline`) and `postcss.config.mjs`. Do not add a v3-style `tailwind.config.{js,ts}` unless explicitly requested.
- Server Components by default. Add `"use client"` only when interactivity, browser APIs, or hooks require it.
- Accessibility: semantic HTML, descriptive `alt` text, logical heading hierarchy with one `<h1>` per page.

## Next.js Version Notice

This project uses **Next.js 16.x**, which has breaking changes from earlier versions and from common training-data assumptions. Verify current APIs against the installed version (`node_modules/next/dist/docs/` or the live docs) before assuming behavior. Heed deprecation notices in build output.

## Image Handling

- `Images/` at the project root is a raw working folder. It is **gitignored** and remains so until dedupe and organization are approved.
- Do not move files into `public/images/` without explicit approval.
- Do not commit anything inside `Images/` until the user approves the final asset structure.

## Git Discipline

- Do not commit unless the user explicitly asks.
- Do not push, force-push, or rewrite history without explicit approval.
- Do not bypass hooks (`--no-verify`) or change git config.
- When committing, prefer surgical staging by path over `git add .`.

## When You Finish a Task

Report:

1. Files changed.
2. Summary of changes.
3. Validation performed (build, lint, manual check).
4. Any rule deviations and why.
5. Whether schema, metadata, alt text, headings, and internal links were updated where applicable.

## Outperformance Standard

Every important page should be more useful, more specific, better structured, easier to trust, and easier to take action from than competing pages. Do not produce generic SEO content. See `docs/site-os/master-prompts/README.md` and the Site OS rules in the project context file for full standards.
