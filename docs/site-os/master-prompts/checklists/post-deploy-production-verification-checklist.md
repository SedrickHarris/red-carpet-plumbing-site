# Post-Deploy Production Verification Checklist

Use this checklist immediately after every production deploy of a client website.

## Purpose

A deploy can succeed at the CLI level while publishing stale, incorrect, or partially-broken content to production. This checklist verifies that production actually reflects the source code at the intended commit. It exists because the 702Xchange Tier 6A initial deploy on 2026-05-17 succeeded in Wrangler output (new Worker Version ID issued) while serving pre-commit content — detected only by a CTA-wording spot-check during this verification.

## When to Use

- Immediately after every production deploy (paired with `checklists/deploy-workflow-checklist.md`)
- After any redeploy
- After any DNS, Cloudflare route, or worker-binding change
- After any infrastructure change that could affect content delivery (cache invalidation, edge-rule updates, etc.)
- Before announcing a deploy as "live" to client or stakeholders

## 1. Verification Principle — Live Production, Not Local

All checks in this checklist must run against the live production domain, not against local files or build output.

- [ ] All HTTP requests target the public domain (e.g. `https://<client>.com`), not `localhost`, `*.workers.dev`, or staging
- [ ] All content checks read the rendered HTML returned by production, not the source in the repo
- [ ] All checks complete after the deploy is propagated (most Cloudflare Workers deploys are live within seconds)

## 2. Production Route Status Code Checks

Confirm all key routes return successful status codes:

- [ ] Homepage (`/`) returns 200
- [ ] Primary index pages (e.g. `/categories`, `/locations`, `/directory`) return 200
- [ ] Representative dynamic routes (e.g. `/categories/<one>`, `/locations/<one>`) return 200
- [ ] Conversion routes (e.g. `/contact`, `/add-business`, `/claim-listing`) return 200
- [ ] Legal routes (e.g. `/privacy-policy`, `/terms-and-conditions`) return 200
- [ ] `/sitemap.xml` returns 200
- [ ] `/robots.txt` returns 200
- [ ] No unexpected 404, 500, or 502 codes on key paths

## 3. Key Route Content Checks

Read the rendered HTML of key routes and confirm:

- [ ] Homepage HTML byte size is roughly consistent with prior production (a sudden 10x drop or rise is a red flag)
- [ ] Each key route returns rendered HTML, not an empty placeholder or generic error page
- [ ] Each key route shows the expected H1
- [ ] Each key route shows the expected primary CTA wording

## 4. CTA Wording Spot-Checks

Verify the most recently changed user-visible strings appear in production HTML. This is the check that catches stale-artifact deploys, including the 702Xchange Tier 6A incident on 2026-05-17.

- [ ] Identify 2 to 4 user-visible strings that changed in the most recent commit(s)
- [ ] Fetch the page that should contain each string
- [ ] Confirm the new string is present in the production HTML
- [ ] Confirm the old/pre-change string is NOT present in the production HTML
- [ ] If any new string is missing or any old string is still present, the deploy is publishing stale artifacts — stop and rerun build then deploy per `checklists/deploy-workflow-checklist.md` §6

## 5. Canonical URL Checks

For every indexable page, the canonical URL should be the apex domain (or the chosen canonical host), not the www variant or the workers.dev URL.

- [ ] Homepage canonical points to the apex root (e.g. `https://<client>.com`)
- [ ] Primary index page canonicals point to apex paths
- [ ] Representative dynamic-route canonicals point to apex paths
- [ ] Legal page canonicals point to apex paths
- [ ] No canonical points to `www.<client>.com`
- [ ] No canonical points to `*.workers.dev`
- [ ] No canonical points to a staging or preview URL
- [ ] All canonicals use HTTPS

## 6. www to Apex Redirect Check (Path and Query Preserved)

If the apex domain is canonical and a www variant exists, the www variant must redirect to apex with path and query preserved:

- [ ] `https://www.<client>.com/<some-path>?<some-query>` returns a 301 (preferred) or 302
- [ ] The Location header points to `https://<client>.com/<same-path>?<same-query>`
- [ ] The path is preserved exactly
- [ ] The query string is preserved exactly
- [ ] No protocol downgrade (HTTPS to HTTP) occurs in the redirect chain
- [ ] No redirect chain has more than one hop

## 7. robots.txt Check

- [ ] `/robots.txt` exists and returns 200
- [ ] `Sitemap:` directive points to the apex sitemap URL (e.g. `https://<client>.com/sitemap.xml`)
- [ ] `User-Agent` and `Allow`/`Disallow` directives match the intended indexing policy
- [ ] No accidental `Disallow: /` exists unless intentional
- [ ] No `Disallow:` blocks important production paths

## 8. sitemap.xml Check

- [ ] `/sitemap.xml` exists and returns 200
- [ ] Sitemap contains apex URLs (e.g. `https://<client>.com/...`)
- [ ] Sitemap does NOT contain www URLs (when apex is canonical)
- [ ] Sitemap does NOT contain staging or preview URLs
- [ ] Sitemap entries match the route inventory in the build output
- [ ] No noindex pages appear in the sitemap

## 9. Cloudflare Worker Version ID (or Platform Deployment ID) Recording

Record the deployed Worker Version ID (or platform-equivalent deployment ID) for audit trail:

- [ ] Worker Version ID is recorded in the deploy notes
- [ ] Date and time of deploy is recorded
- [ ] Source commit hash that was deployed is recorded
- [ ] Person or process that ran the deploy is recorded (Claude, human operator, automated CI)
- [ ] Verification status is recorded (PASS, FAIL, or PASS WITH NOTES)

## 10. Evidence Capture Guidance

When verification fails or finds unexpected results:

- [ ] Capture the exact response headers (status, content-length, cache-control, server, x-nextjs-cache, x-opennext, cf-ray, etc.)
- [ ] Capture the relevant HTML snippet showing the unexpected content
- [ ] Capture the timestamps (request time, deploy time, last source commit time)
- [ ] Capture the Worker Version ID and any previous Version ID for comparison
- [ ] Note whether the issue is reproducible or transient
- [ ] If escalating, include all of the above in the report

## 11. Final Production Verification Summary Format

Record the verification result in this format:

```
Production Verification Summary
Date: [DATE]
Client: [CLIENT NAME]
Domain: [APEX DOMAIN]
Source commit: [SHORT HASH] — [COMMIT SUBJECT]
Worker Version ID: [VERSION]
Previous Worker Version ID: [VERSION]
Deployed by: [Claude / human / CI]

HTTP status checks: PASS / FAIL — [notes]
Key route content checks: PASS / FAIL — [notes]
CTA wording spot-checks: PASS / FAIL — [notes]
Canonical URL checks: PASS / FAIL — [notes]
www to apex redirect: PASS / FAIL — [notes]
robots.txt: PASS / FAIL — [notes]
sitemap.xml: PASS / FAIL — [notes]
sitemap excludes www: PASS / FAIL — [notes]

Final decision:
[ ] Production reflects source — deploy complete
[ ] Production does not reflect source — rebuild and redeploy required
[ ] Production reflects source but other issues found — see notes
```

## 12. Stop Conditions If Production Does Not Match Source

If any of these are true, the deploy is incomplete or incorrect:

- [ ] CTA wording check shows old text in production
- [ ] HTML byte size of a key route differs from expected by more than approximately 20% without explanation
- [ ] Any key route returns 404, 500, or 502
- [ ] Canonical URL points to the wrong host or wrong path
- [ ] www to apex redirect missing or returns wrong Location
- [ ] sitemap contains www URLs when apex is canonical
- [ ] robots.txt has unintended Disallow rules

Required actions when a stop condition trips:

- [ ] Do not announce the deploy as live
- [ ] Re-run `cf:build` then `cf:deploy` per `checklists/deploy-workflow-checklist.md`
- [ ] Re-run this verification checklist
- [ ] If issue persists, escalate before continuing — do not retry the same broken sequence

## 13. Handoff to Indexing and Launch

Only after this checklist passes:

- [ ] Hand off to `checklists/seo-indexing-checklist.md` for indexing submission and ongoing monitoring
- [ ] Hand off to `checklists/launch-readiness-checklist.md` for any final launch decisions
- [ ] Update the client's `docs/site-os/changelog/` with the deploy summary (when the client repo doc structure is in place)

## Related Files

- `checklists/deploy-workflow-checklist.md` — must be completed before this checklist runs
- `checklists/launch-readiness-checklist.md` — pre-launch readiness (page-level)
- `checklists/seo-indexing-checklist.md` — runs after this checklist for indexing
- `efficiency-governor/client-intake-gate.md` — must clear before any build or deploy

---

Site OS Master — Post-Deploy Production Verification Checklist v1.0
Status: Tier R1 Final Readiness Patch — implemented 2026-05-17
Reason for creation: 702Xchange stale-artifact deployment lesson (Tier 6A initial deploy 2026-05-17)
