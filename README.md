# Red Carpet Plumbing Site

Website for Red Carpet Plumbing, a plumbing company serving Las Vegas, NV and the surrounding Las Vegas Valley.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- GitHub
- Cloudflare Pages
- Site OS Master workflow

## Site OS Master

This project follows the Site OS Master workflow for SEO, AEO, GEO, local search, LLM citation readiness, and conversion. All planning, prompts, schemas, checklists, and project context live in `docs/site-os/`.

Key files:

- `docs/site-os/client-context/red-carpet-plumbing-project-context.md`
- `docs/site-os/inputs/red-carpet-plumbing-build-list.md`
- `docs/site-os/changelog/project-changelog.md`
- `docs/site-os/master-prompts/` (Site OS Master prompts, schemas, checklists)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Deployment

Target: **Cloudflare Pages**. Deploys are triggered from the `main` branch of `https://github.com/SedrickHarris/red-carpet-plumbing-site`.

Deploy and verification procedures are documented in `docs/site-os/master-prompts/checklists/`:

- `deploy-workflow-checklist.md`
- `post-deploy-production-verification-checklist.md`

## Project Rules

These rules apply to all customer-facing content and code in this repo. They exist because they affect SEO, AEO, schema accuracy, and brand trust.

### Copy

- Do not use em dashes (`—`) in customer-facing copy.
- Do not use double hyphens (`--`) in customer-facing copy.
- Do not invent reviews, ratings, license numbers, warranties, years in business, or any business claims.

### Schema

- Schema must match the visible page content exactly.
- `FAQPage` schema must match visible FAQ text exactly.
- `HowTo` schema only when visible step-by-step content exists.
- `Review` / `AggregateRating` schema only when reviews are real, visible, and verified.

### Layout

- Service business pages use a two-column hero where appropriate: content on the left, contact or quote form on the right.
- Service cards include image placeholders as a standard.

## Repository Layout

```
.
├── app/                     # Next.js App Router
├── public/                  # Static assets (images live here once promoted from Images/)
├── docs/site-os/            # Site OS project docs (context, inputs, prompts, qa, changelog)
├── Images/                  # Raw image working folder (gitignored until dedupe + organization)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```
