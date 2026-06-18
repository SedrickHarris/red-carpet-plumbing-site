---
name: seo-aeo-llm-page-architecture
description: Required Site OS Master design skill governing H1/H2 structure, direct answers, semantic sections, FAQ strategy, schema planning, internal links, metadata, and LLM-ready page structure for every website page build.
---

# seo-aeo-llm-page-architecture

## Purpose

Ensure the page is structured for Google Search, Bing, voice search, AEO featured snippets, People Also Ask, ChatGPT, Perplexity, and AI assistants. This skill governs heading hierarchy, direct-answer formatting, semantic landmarks, FAQ structure, schema planning, internal link routing, metadata, and the underlying architecture that makes a page indexable, snippet-eligible, voice-search-friendly, and citation-ready.

## When to Use

Use this skill on every page build, regardless of vertical or page type. Specifically:

- During Prompt 01 keyword strategy — to inform the heading and direct-answer structure that maps to keyword intent
- During Prompt 02 page outline — to declare the H1, H2/H3 hierarchy, direct-answer placement, FAQ structure, schema plan, internal link plan, and metadata
- During Prompt 05 developer build brief — to consolidate the SEO/AEO/LLM architecture into the brief
- During Prompt 06 Gate 1 — to confirm the project's metadata pattern, schema pattern, and internal link pattern support the planned architecture
- During Prompt 06 Gate 2 — to translate the architecture into specific file scope, metadata config, and schema implementation
- During Prompt 06 Gate 3 — to implement using the project's existing patterns
- During Prompt 06 Gate 4 — to verify heading hierarchy, direct answers, schema visible-text match, internal link resolution, and metadata correctness

## Required Behavior

- One clear H1 per page. The H1 matches the search intent and includes the primary keyword naturally.
- Logical H2/H3 hierarchy. No skipped levels. H2s structure the page; H3s structure subsections within H2s.
- Direct-answer blocks near the top of the page. A short, citation-quality sentence (1–2 sentences) that answers the page's primary question — placed before any long-form expansion.
- Question-based headings where natural. AEO and People Also Ask favor question-format H2s and H3s ("How does ___ work?", "What does ___ cost?").
- FAQ section with at least 5–10 real customer questions (more for FAQ-hub pages). Each FAQ answer uses the direct-answer format: first sentence answers, second sentence clarifies, optional third sentence adds CTA / local detail / process note.
- Schema plan must match visible content. FAQ schema only marks visible FAQs. BreadcrumbList only marks visible breadcrumbs. LocalBusiness uses verified business data only. Aggregate Rating only when verified.
- Internal links route the user and the crawler through topical authority. Link to related services, related locations, related categories, the relevant hub, and the conversion page. Do not link to nonexistent routes.
- Metadata is unique per page. Meta title and meta description are tailored, not templated. Canonical, robots, OG, and Twitter metadata follow the project's existing pattern.
- Entity-rich content. The page must clearly name the business, the service, the location (if applicable), and the relationships between them. AI assistants cite entity-rich pages.
- Page is structured for LLM citation. Direct answers, factual statements, and clear definitions are easier for ChatGPT, Perplexity, and Claude to summarize and cite.

## Page Build Responsibilities

For each page, this skill must produce:

- An H1 declaration with rationale (why this H1 matches search intent)
- An H2/H3 hierarchy map with logical nesting
- A direct-answer block plan — what question, what answer, where it sits on the page
- A question-based heading list — which H2s and H3s use question format
- An FAQ strategy — number of FAQs, list of questions, direct-answer formatting plan, FAQPage schema plan with visible-text match
- A schema plan — which schema types apply (LocalBusiness, Service, FAQPage, BreadcrumbList, Article, Organization, WebPage), what fields, what data sources, what fields are TODO-flagged because data is unverified
- An internal link plan — which internal pages this page links to, with verified routes only
- A metadata plan — meta title, meta description, canonical, robots, OG, Twitter (all unique to this page)
- An entity map — business, service, location, related entities, relationships
- An LLM citation note — which sentences are citation-quality (specific, factual, attributable)

## Claude Project Usage

Claude Project uses this skill during strategy and planning. Specifically:

- During Prompt 01 — declare the keyword-to-heading mapping
- During Prompt 02 — declare the H1, H2/H3 hierarchy, direct-answer placement, FAQ structure, and entity map
- During Prompt 05 — consolidate the full SEO/AEO/LLM architecture into the developer build brief, including schema plan, internal link plan, and metadata plan
- During Prompt 11 schema strategy and Prompt 17 AI citation readiness — apply deeper schema and citation review for Beyond-Elite and Full Competitive Build pages
- Flag any place a required data point (verified review, verified rating, verified license, verified credential) is missing as a launch blocker that Prompt 06 must carry forward as a TODO

## Claude Code Usage

Claude Code uses this skill during implementation. Specifically:

- Gate 1 — confirm the project's existing metadata pattern (Next.js Metadata API, Astro frontmatter, manual head injection, CMS metadata), schema pattern (JSON-LD script tags, framework utility), internal link routing (existing routes only), and sitemap behavior support the planned architecture; surface any missing pattern as a Gate 1 blocker
- Gate 2 — translate the architecture into specific file scope, metadata config, schema implementation, internal link list (with verified targets), and FAQ implementation
- Gate 3 — implement using the project's existing patterns; never invent schema field values (per `docs/no-fake-data-policy.md` §7); never link to nonexistent internal routes
- Gate 4 — verify single H1, logical H2/H3 hierarchy, direct-answer block exists and is near the top, FAQPage schema visible-text match, BreadcrumbList visible-text match, LocalBusiness verified data only, AggregateRating only if verified, HowTo only if visible steps qualify, internal links resolve, metadata is unique, canonical is correct
- Gate 5 — report schema added, schema skipped (and why), AggregateRating status, HowTo status, internal links added and skipped, metadata status, and any LLM citation carry-forward items

## QA Checks

A page cannot pass this skill until:

- [ ] One clear H1; no competing H1s
- [ ] H2/H3 hierarchy is logical; no skipped levels
- [ ] Direct-answer block exists near the top
- [ ] Question-based headings are used where natural
- [ ] FAQ section has at least 5–10 real customer questions (or 30+ for FAQ-hub pages per `prompts/aeo-faq-hub-prompt.md`)
- [ ] Each FAQ answer uses the direct-answer format (first sentence answers, second clarifies, optional third adds CTA / local detail / process note)
- [ ] FAQPage schema exactly matches visible FAQ text
- [ ] BreadcrumbList schema matches visible breadcrumb
- [ ] LocalBusiness schema uses verified data only; no invented phone/address/hours/reviews/ratings/credentials
- [ ] AggregateRating is included only if verified rating data was provided; omitted otherwise
- [ ] HowTo schema is included only if visible process steps match; omitted otherwise
- [ ] All internal links resolve to real routes
- [ ] Meta title and meta description are unique to this page
- [ ] Canonical URL is correct
- [ ] Robots directives are correct (indexable when appropriate; noindex only when intended)
- [ ] OG and Twitter metadata are populated
- [ ] Entity map (business, service, location, relationships) is clear in visible content
- [ ] Page contains at least 2–3 citation-quality factual sentences for LLM consumption

## Design Vision

Pages built under this skill should be structured so that a search engine, an AI assistant,
and a human reader all reach the same correct understanding of what the page is, what
question it answers, and what to do next, without needing to read the whole page.

Heading patterns that earn featured snippets and PAA:
- H2s are either answerable questions or clear declarative topic statements.
  "How Much Does X Cost?" not "Pricing".
  "What Is Included in X?" not "Our Process".
  "Why Choose X?" not "About Us".
- The first paragraph after every H2 answers the heading directly in 2-3 sentences.
  This is the featured snippet target. Write it to stand alone out of context.

Direct answer block:
- Every page should open with a 2-3 sentence direct answer block above the first H2.
  What is this page about. Who is it for. What should they do.
- Style it distinctly: bg-neutral-50 border-l-4 border-brand-600 p-6 rounded-r-xl.
- Write it as a quotable statement. AI assistants cite the clearest, most specific answer
  they find. This block is the citation target.

FAQ section architecture:
- Minimum 5 questions per standard page. 8-10 for competitive service or location pages.
- Questions come from keyword research, not from what the business wants to say.
- Answers: 2-4 sentences. Specific. No throat-clearing phrases like
  "Great question" or "It depends on many factors."
- Accordion UI with visible question text at all times.
  Search engines and AI crawlers read both open and closed states.

Entity and local signals:
- Every page has a declared primary entity: the business, service, location, or topic.
- Supporting entities are woven into headings, body, and FAQ naturally.
  Entity stuffing is as problematic as keyword stuffing.
- For local pages: city or region in H1, first paragraph body, and at least one H2.
  This is a structural requirement, not a suggestion.

Schema priorities (in order of universal applicability):
- BreadcrumbList: every page, no exceptions
- FAQPage: every page with a FAQ section, questions must match visible text exactly
- Service or Product: service and product pages
- LocalBusiness: homepage and contact page only
- AggregateRating: only with confirmed real review data, never estimated or invented
- WebPage or WebSite: homepage
- The site type overlay specifies additional schema relevant to that vertical.

Metadata standards:
- Title: primary keyword + brand name, 50-60 characters, unique per page
- Description: 140-160 characters, includes primary keyword, reads as a complete sentence
- Canonical: always set, matches the intended indexable URL exactly
- OG title and description: set independently of meta title and description
  They serve different rendering contexts.

## Hard Rules

- Do not ship multiple H1s. Do not skip heading levels.
- Do not include FAQPage schema unless the visible FAQ text matches the schema text exactly.
- Do not invent schema field values. Missing values → TODO-flag, do not invent (per `docs/no-fake-data-policy.md` §7).
- Do not include AggregateRating, Review, or HowTo schema unless verified data backs every required field.
- Do not link to nonexistent internal routes. Verify or omit.
- Do not template metadata across multiple pages. Each page gets unique meta title and meta description.
- Do not skip the direct-answer block. AEO, voice search, and AI citation all depend on it.
- Do not relax this architecture for visual or motion reasons. SEO/AEO/LLM structure and premium visual design are not in conflict.

## Output Expectations

When this skill runs, the output must include:

- H1 declaration with rationale
- H2/H3 hierarchy map
- Direct-answer block plan
- Question-based heading list
- FAQ strategy (count, questions, formatting, schema plan with visible-text match)
- Schema plan (types, fields, data sources, TODO-flagged fields)
- Internal link plan (verified targets)
- Metadata plan (title, description, canonical, robots, OG, Twitter — unique per page)
- Entity map (business, service, location, relationships)
- LLM citation note (citation-quality sentences identified)
- Carry-forward items — any missing data, missing route, or unverified value, marked as launch blocker where applicable
