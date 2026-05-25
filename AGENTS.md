# Agent Instructions — Red Carpet Plumbing Site

Concise rules for any AI agent (Claude Code, Cursor, Copilot, Codex, etc.) working in this repo. For deeper context, see `CLAUDE.md` and the Site OS docs under `docs/site-os/`.

## Stack

- Next.js 16.x (App Router) — has breaking changes vs. earlier versions; verify APIs against the installed version, do not assume from training data.
- TypeScript (strict).
- Tailwind CSS v4 (configured via `app/globals.css` `@theme inline` and `postcss.config.mjs`; no `tailwind.config.{js,ts}` file).
- ESLint (`npm run lint`).

## Routing & Component Rules

- App Router only. No `pages/` directory, no `getServerSideProps`/`getStaticProps`.
- Server Components by default. Add `"use client"` only when needed (state, effects, browser APIs, event handlers).
- Use `next/image` for images, `next/link` for internal navigation, `next/font` for fonts.
- Route segments map to folders under `app/`. Co-locate route-specific components in the segment folder.
- Approved page URLs are defined in `docs/site-os/inputs/red-carpet-plumbing-build-list.md`. Do not invent new public routes outside that list.

## TypeScript Rules

- No `any` without a comment explaining why.
- Prefer `type` over `interface` unless extending.
- Props types live next to the component.
- Run `npm run build` to catch type errors before reporting work complete.

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>` for buttons, `<a>` for navigation).
- One `<h1>` per page; logical `<h2>`/`<h3>` hierarchy.
- All images get descriptive `alt`. Decorative-only images use `alt=""`.
- Color contrast meets WCAG AA.
- Forms have associated labels; inputs are keyboard-reachable; focus states are visible.

## SEO / AEO / Schema

- Every public page has a unique `<title>` and meta description set via Next.js `metadata` export.
- One canonical URL per page.
- Schema must match visible content exactly:
  - `FAQPage` — text must equal the visible FAQ text word-for-word.
  - `HowTo` — only when visible step-by-step content exists.
  - `Review` / `AggregateRating` — only with real, visible, verified reviews.
- Use `Service`, `LocalBusiness` / `Plumber`, `WebPage`, `BreadcrumbList`, `Organization`, `Article` / `BlogPosting` where appropriate.
- Breadcrumbs follow the patterns in the build list (Section 9).
- Internal linking follows the strategy in the build list (Section 8). Every important page reachable within 3 clicks from the homepage.

## Customer-Facing Copy Rules

- No em dashes (`—`).
- No double hyphens (`--`).
- No invented reviews, ratings, license numbers, warranties, years in business, or business claims.
- Use the natural-language patterns from the project context file; do not paraphrase business facts.

## Site OS Documents

Treat these as source of truth. Read before editing related areas:

- `docs/site-os/client-context/red-carpet-plumbing-project-context.md`
- `docs/site-os/inputs/red-carpet-plumbing-build-list.md`
- `docs/site-os/changelog/project-changelog.md`
- `docs/site-os/master-prompts/` (prompts, schemas, checklists, skills, routing, token-control)
- `docs/site-os/qa/` (audits and reports)

Do not edit, rename, or restructure anything under `docs/site-os/` unless explicitly asked.

## Image Handling

- `Images/` at the project root is a raw working folder. **Gitignored.** Do not commit its contents.
- Do not move files into `public/images/` without explicit approval.
- Use `next/image` with explicit `width`/`height` (or `fill`) and descriptive `alt`.
- When approved assets land in `public/`, reference them with absolute paths (e.g., `/images/foo.webp`).

## Git Safety

- Never commit unless the user explicitly asks.
- Never push, force-push, or rewrite history without explicit approval.
- Never bypass hooks (`--no-verify`) or change git config.
- Stage by path, not `git add .`, when intent is surgical.
- Branch from `main`. Default deploy target is Cloudflare Pages, triggered from `main`.

## Verifying Work Before Reporting Done

1. `npm run lint` passes.
2. `npm run build` passes (catches TypeScript and route errors).
3. For UI changes, briefly describe the manual check performed.
4. Report files changed, summary, validation done, and any remaining risks.

## What This File Is Not

This is rules and conventions. It is not a task list or roadmap. For build-order priorities, see `docs/site-os/inputs/red-carpet-plumbing-build-list.md`. For project-specific Claude Code guidance, see `CLAUDE.md`.
