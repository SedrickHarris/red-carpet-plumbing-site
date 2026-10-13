# Local Environment File Scaffolding Report

Written 2026-10-13. Names only; no secret value was requested, received, read, printed or written. No commit and no push were made by this task.

## Files changed

| File | Tracked | Contents |
|---|---|---|
| `.dev.vars.example` | yes | 12 variable names with empty values, 2 comment lines |
| `.env.example` | yes | 1 variable name (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) with an empty value, 1 comment line |
| `.dev.vars` | no (gitignored) | same contents as `.dev.vars.example`, all values empty. Not opened after creation. |
| `.env.local` | no (gitignored) | same contents as `.env.example`, value empty. Not opened after creation. |
| `.gitignore` | unchanged | existing rules already cover `.dev.vars`, `.env.local`, `.env*.local` and `.wrangler/`; `.env.example` is un-ignored by an existing `!.env.example` rule |

`NEXT_PUBLIC_` is used on exactly one variable, the Turnstile site key, which is public by design. No secret is in `.env.local`.

## Validation (raw output)

### Gate 1 (before any file was created)

```
$ git check-ignore -v .dev.vars .env.local .wrangler
.gitignore:55:.dev.vars	.dev.vars
.gitignore:63:*.local	.env.local
(.wrangler printed nothing: the directory did not exist; with a trailing slash it is ignored by line 54)

$ git ls-files .dev.vars .env.local .dev.vars.example .env.example
(no output: none tracked)

Existence before creation: .dev.vars absent, .dev.vars.example absent, .env.local absent, .env.example absent.
```

### Gate 4

```
### 1 git status (including untracked)
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
	.dev.vars.example
	.env.example
	docs/site-os/reports/metadata-length-audit.csv
	docs/site-os/reports/metadata-length-audit.md
	docs/site-os/reports/remove-c1-gate2-plan.md
	metadata-rewrite-v3.csv

nothing added to commit but untracked files present (use "git add" to track)

### 1b staged paths: 0

### 2 git check-ignore -v .dev.vars .env.local .wrangler/
.gitignore:55:.dev.vars	.dev.vars
.gitignore:63:*.local	.env.local
.gitignore:54:.wrangler/	.wrangler/
exit=0

### 3 git ls-files .dev.vars .env.local
(no output: neither tracked)

### 4a grep -nE '=.+' .dev.vars.example
(no matches, exit 1)

### 4b grep -nE '=.+' .env.example
(no matches, exit 1)

### 6 em dash or double hyphen in the two example files
(no matches, exit 1)

### extra: NEXT_PUBLIC_ names in the example files
.env.example:2:NEXT_PUBLIC_TURNSTILE_SITE_KEY=

### extra: line counts and trailing newline
 14 .dev.vars.example
  2 .env.example
 both files end with a newline
```

### Gate 4 step 5: vendor-name grep

Skipped by owner decision for the two example files. The grep was not run for the committed version. A read of the two example files shows only generic names (`CRM_*`, `LEAD_ALLOWED_ORIGINS`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) and no CRM vendor or platform name.

## Staging plan (after owner approval, explicit paths only)

- `.dev.vars.example`
- `.env.example`
- `docs/site-os/reports/env-scaffolding-report.md`

Not staged: `.dev.vars`, `.env.local` (ignored), `.gitignore` (unchanged), and the four files that were already untracked before this task: `docs/site-os/reports/metadata-length-audit.csv`, `docs/site-os/reports/metadata-length-audit.md`, `docs/site-os/reports/remove-c1-gate2-plan.md`, `metadata-rewrite-v3.csv`.

## Checklist for Sedrick

1. Open `.dev.vars` and `.env.local` in your editor and type the values yourself. Do not paste them into chat or into Claude Code.
2. In Cloudflare Pages, add the same names under Settings, Variables and Secrets, for Production and Preview: `CRM_API_TOKEN` and `TURNSTILE_SECRET_KEY` as Secrets, `CRM_LOCATION_ID` and the CRM field ID names as variables, and `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a build variable.
3. Redeploy after setting them, because variables apply only to new deployments.

## Risks and notes

- The other server-side names (`CRM_API_BASE_URL`, `CRM_API_VERSION`, `LEAD_ALLOWED_ORIGINS`) are not secrets but should still be set under the same scope in Cloudflare Pages.
- `wrangler pages dev` reads `.dev.vars`; Next.js reads `.env.local` at build time. A `NEXT_PUBLIC_` value is inlined into the static export at build, so changing it requires a rebuild.
- No `functions/` code was written or changed. The forms and the lead Function are a separate task.
