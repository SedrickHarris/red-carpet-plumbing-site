# Deploy Workflow Checklist

Use this checklist before any production deploy of a client website.

## Purpose

This checklist codifies the safe deploy procedure for client websites built with Site OS Master. It exists because deploys can succeed in CLI output while still publishing stale build artifacts to production — which happened in the 702Xchange Tier 6A deploy on 2026-05-17 and was caught only by post-deploy content verification.

## When to Use

Use this checklist:

- Before every production deploy
- Before every preview or staging deploy that will be promoted to production
- Whenever a build pipeline is changed
- Whenever a new deploy target is added to a client repo
- Whenever returning to a paused client build before deploying

Pair this checklist with `checklists/post-deploy-production-verification-checklist.md`. Every successful deploy must be followed by production verification.

## 1. Universal Deployment Principles

These apply regardless of stack (Next.js, plain React, static site, etc.):

- [ ] Build before deploy
- [ ] Deploy artifacts must be regenerated from current source
- [ ] Source must be at the intended commit, HEAD verified
- [ ] Working tree must be clean before deploy unless dirty state is intentional and documented
- [ ] Local main must be synchronized with origin/main if production tracks origin/main
- [ ] Run all deploy commands from the correct client repo, never from Site OS Master
- [ ] Verify production content after deploy, not just deploy CLI success

## 2. Correct Repo Rule and Explicit cd

Site OS Master and client repos are separate concerns:

- [ ] Confirm current working directory before any deploy command
- [ ] Never deploy from Site OS Master unless Site OS Master itself is the deploy target
- [ ] Never deploy from a different client repo than the intended one
- [ ] On Windows where the shell harness resets cwd between commands, chain `cd "<repo>"; <command>` in every deploy command
- [ ] Confirm `pwd` after `cd` if there is any doubt

## 3. Pre-Deploy Status Checks

Before any build or deploy, confirm:

- [ ] Branch is correct (typically `main`)
- [ ] HEAD short hash matches the intended source commit
- [ ] Working tree is clean (`nothing to commit, working tree clean`)
- [ ] Local main is up to date with `origin/main`
- [ ] Last commit is the expected commit that should ship to production
- [ ] No uncommitted local edits exist that should ship
- [ ] No staged-but-uncommitted changes exist
- [ ] Recent commit log matches the deploy intent

## 4. Build-Before-Deploy Rule

A production deploy must always be preceded by a fresh build from current source:

- [ ] Run the project build command (e.g. `npm run build` and/or the stack-specific build command)
- [ ] Confirm the build command exits with success
- [ ] Confirm the build output (typically `.next/`, `.open-next/`, `dist/`, or `build/`) shows a fresh modification timestamp
- [ ] Confirm the route inventory matches expectations (route count, route paths)
- [ ] Confirm no new build warnings or errors appeared since the last successful build

## 5. Next.js + OpenNext + Cloudflare Workers Procedure

The 702Xchange stack uses Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers. Other client stacks add their own subsection below as they are first used.

Required two-command sequence:

```
cd "<client repo>"; npm run cf:build
cd "<client repo>"; npm run cf:deploy
```

- [ ] Run `npm run cf:build` first — this rebuilds Next.js, regenerates `.open-next/` artifacts, and bundles the Cloudflare Worker
- [ ] Confirm `cf:build` reports `OpenNext build complete.` and `Worker saved in .open-next\worker.js`
- [ ] Verify route inventory in build output matches expected pages
- [ ] Only then run `npm run cf:deploy`
- [ ] Confirm `cf:deploy` reports the new Worker Version ID
- [ ] Record the new Worker Version ID for the production verification handoff

## 6. cf:deploy Alone Is Unsafe

Do not run `npm run cf:deploy` alone for production releases:

- `cf:deploy` does NOT rebuild — it only uploads what is already in `.open-next/`
- If `.open-next/` is stale (older than the source HEAD), the deploy will succeed at the CLI level while publishing pre-current code to production
- Cloudflare will report a new Worker Version ID even when content is stale, because the worker JS is hash-recomputed even if the underlying source has not changed

### Reference Incident: 702Xchange Tier 6A 2026-05-17

The 702Xchange Tier 6A production deploy on 2026-05-17 hit exactly this case:

- Initial deploy ran `npm run cf:deploy` alone
- Wrangler reported success and assigned Worker Version `516c6e65-8c76-4d91-af8c-6c9155c99978`
- `.open-next/` on disk was dated May 16 23:13 (last `cf:build`)
- Source HEAD was `5ae64e1` committed May 17 11:37
- Production served pre-Tier-6A content with the new Worker Version ID
- Detected by a CTA-wording spot-check against rendered production HTML
- Resolved by running `npm run cf:build` followed by `npm run cf:deploy`, which published the correct content as Worker Version `c6d98246-4200-48f3-9b41-53f2ea9cad0d`

If a fast redeploy is needed and the build artifacts are confirmed fresh (e.g. `cf:build` just ran in the prior step of the same session), then `cf:deploy` alone is acceptable. In that case the production verification checklist still applies.

## 7. Deployment Artifact Freshness Checks

Before deploying, confirm artifacts are fresh:

- [ ] `.open-next/` directory modification time is newer than the most recent source commit
- [ ] If using `.next/` or `dist/`, the same freshness check applies
- [ ] If `cf:build` was run in the prior step of this same session, artifact freshness is implied — manual mtime check may be skipped
- [ ] If returning to a paused session, do NOT assume artifacts are fresh — always rebuild

## 8. Do Not Deploy From the Wrong Repo

Two repos are involved in every Site OS Master client build:

- Site OS Master (`C:\Users\Welcome\Desktop\site-os-master` or equivalent) is the workflow and prompt source of truth. Do not deploy from here. Site OS Master has no production website.
- Client site repo (`C:\Users\Welcome\Desktop\client-sites\<client>` or equivalent) is the actual website code. Deploy from here.

- [ ] Confirm the current working directory is the client site repo, not Site OS Master
- [ ] Confirm the deploy target (Cloudflare Worker name, project name, domain) matches the client
- [ ] If multiple client repos exist on the same machine, double-check the client identity before deploying

## 9. Stop Conditions

Stop and do not deploy if any of these are true:

- [ ] Working tree is not clean and the dirty state is not intentional and approved
- [ ] HEAD does not match the intended source commit
- [ ] `cf:build` or equivalent build command failed
- [ ] Build artifact freshness check failed (artifacts older than HEAD commit)
- [ ] Current working directory is Site OS Master, not the client repo
- [ ] Wrong client repo is current
- [ ] Cloudflare credentials are not configured for the intended account
- [ ] User has not approved the deploy via the standing approval process or an explicit per-deploy approval
- [ ] Any prior deploy stop condition was not resolved

## 10. Post-Deploy Verification Handoff

Every successful deploy must hand off to the post-deploy verification checklist:

- [ ] Record the new Cloudflare Worker Version ID (or deployment ID for non-Cloudflare stacks)
- [ ] Note the deploy timestamp
- [ ] Open `checklists/post-deploy-production-verification-checklist.md`
- [ ] Run the verification commands documented there
- [ ] Do not declare a deploy "done" until production verification passes

## 11. Command Examples — PowerShell (Windows)

```powershell
# Pre-deploy checks
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git status
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git rev-parse --short HEAD
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git log --oneline -5

# Build
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; npm run cf:build

# Deploy
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; npm run cf:deploy
```

Each command above stands alone. The chained `cd "<repo>"; <command>` pattern is required because the shell harness resets cwd between invocations on Windows.

## 12. Command Examples — Bash / curl (cross-platform)

```bash
# Pre-deploy checks
cd "<client repo>" && git status && git rev-parse --short HEAD && git log --oneline -5

# Build
cd "<client repo>" && npm run cf:build

# Deploy
cd "<client repo>" && npm run cf:deploy
```

## 13. Final Deploy Decision

Choose one:

- [ ] Deploy succeeded, production verification passed, deploy is complete
- [ ] Deploy succeeded, production verification revealed stale or incorrect content — rerun `cf:build` then `cf:deploy`
- [ ] Deploy failed at build step — fix build error, do not deploy
- [ ] Deploy failed at upload step — investigate Cloudflare or Wrangler config, do not retry until resolved
- [ ] Deploy not attempted — stop condition tripped, escalate or resolve before retry

## Related Files

- `checklists/post-deploy-production-verification-checklist.md` — run immediately after every deploy
- `checklists/launch-readiness-checklist.md` — pre-launch readiness (page-level)
- `checklists/seo-indexing-checklist.md` — after publish, before/after indexing
- `efficiency-governor/client-intake-gate.md` — intake gate that must clear before build or deploy

---

Site OS Master — Deploy Workflow Checklist v1.0
Status: Tier R1 Final Readiness Patch — implemented 2026-05-17
Reason for creation: 702Xchange stale-artifact deployment lesson (Tier 6A initial deploy 2026-05-17)
