# Page After Build Checklist

Use this checklist after Claude Code builds or updates a page.

## Purpose

This checklist confirms the page was implemented correctly and follows the approved strategy.

## 1. Route and Rendering

- [ ] Page route exists
- [ ] Page route is correct
- [ ] Page renders without obvious errors
- [ ] No duplicate route was created
- [ ] No unrelated route was modified
- [ ] Navigation still works
- [ ] Page is linked where appropriate
- [ ] No broken page-level imports
- [ ] No obvious console/build errors

## 2. Approved Strategy Match

- [ ] Page follows approved section structure
- [ ] Page matches the approved page goal
- [ ] Page matches the approved target audience
- [ ] Page matches the approved search intent
- [ ] Page includes the approved primary CTA
- [ ] Page includes the approved secondary CTA if required
- [ ] Page does not add unsupported claims
- [ ] Page does not remove important approved content

## 3. SEO Implementation

- [ ] Unique meta title is added
- [ ] Unique meta description is added
- [ ] URL slug is clean
- [ ] One clear H1 exists
- [ ] H2/H3 structure is logical
- [ ] Primary keyword appears naturally
- [ ] Secondary keywords appear naturally
- [ ] Page avoids keyword stuffing
- [ ] Content supports search intent
- [ ] Images have descriptive alt text
- [ ] Page is indexable unless intentionally noindexed

## 4. Multi-Platform Search Readiness

The page supports:

- [ ] Google Search
- [ ] Bing
- [ ] Apple Search / Apple Maps if local
- [ ] Google Business Profile if local
- [ ] AI assistants
- [ ] ChatGPT
- [ ] Perplexity
- [ ] Featured snippets
- [ ] People Also Ask
- [ ] Rich snippets
- [ ] Topical authority
- [ ] Lead generation

## 5. AEO and LLM Readiness

- [ ] Quick answer section exists where planned
- [ ] Main search intent is answered early
- [ ] Direct answer statements are clear
- [ ] Question-based headings are included where natural
- [ ] FAQ section exists if required
- [ ] FAQ answers are concise and useful
- [ ] Content uses clear, factual, low-hype language
- [ ] Important entities are clear
- [ ] Page includes citation-worthy statements
- [ ] Page is easy for AI assistants to summarize

## 6. GEO and Local Readiness

If local intent applies:

- [ ] Target location appears naturally
- [ ] Nearby areas are included where useful
- [ ] Local relevance section exists
- [ ] Local customer problems are addressed
- [ ] Local trust signals are included
- [ ] Google Business Profile relevance is supported
- [ ] Bing Places relevance is supported
- [ ] Apple Maps / Apple Search relevance is supported
- [ ] Duplicate location content risk is low
- [ ] Page avoids generic city-name swapping

If local intent does not apply:

- [ ] Local requirements are not applicable

## 7. Schema Implementation

- [ ] WebPage schema added or prepared where applicable
- [ ] Organization schema added or prepared where applicable
- [ ] LocalBusiness schema added or prepared where applicable
- [ ] Service schema added or prepared where applicable
- [ ] FAQPage schema added or prepared where FAQs are visible
- [ ] BreadcrumbList schema added or prepared where hierarchy exists
- [ ] Article/BlogPosting schema added or prepared for blog posts
- [ ] Schema matches visible page content
- [ ] No fake reviews, ratings, pricing, address, hours, credentials, or awards were added

## 8. Internal Linking

- [ ] Required outbound internal links are included
- [ ] Required inbound link opportunities are noted
- [ ] Anchor text is natural
- [ ] Links support topical authority
- [ ] Links support user journey
- [ ] Links support conversion where appropriate
- [ ] Page is not an orphan page
- [ ] Too many distracting links are avoided

## 9. Conversion Implementation

- [ ] Primary CTA is visible near the top
- [ ] Mid-page CTA exists if planned
- [ ] Final CTA exists
- [ ] CTA language is clear
- [ ] Contact, quote, booking, or next-step path is clear
- [ ] Trust signals are visible
- [ ] Objections are addressed
- [ ] Mobile conversion path is considered
- [ ] Page does not distract users from the main conversion goal

## 10. Design and Accessibility

- [ ] Existing design system is followed
- [ ] Existing component patterns are followed
- [ ] Mobile layout works or uses responsive patterns
- [ ] Desktop layout works or uses existing patterns
- [ ] Buttons are easy to identify
- [ ] Links are clear
- [ ] Text contrast is acceptable
- [ ] Heading hierarchy supports accessibility
- [ ] Images support the content
- [ ] No text is embedded inside images unless unavoidable

## 11. Guardrails

Confirm Claude Code did not:

- [ ] Create duplicate routes
- [ ] Modify unrelated files
- [ ] Remove working code unnecessarily
- [ ] Add fake claims
- [ ] Add fake reviews or ratings
- [ ] Add unsupported prices
- [ ] Add fake business credentials
- [ ] Add unnecessary dependencies
- [ ] Break navigation
- [ ] Over-optimize keywords

## 12. Final After-Build Decision

Choose one:

- [ ] Ready for QA review
- [ ] Needs minor fixes
- [ ] Needs major fixes
- [ ] Do not publish yet
