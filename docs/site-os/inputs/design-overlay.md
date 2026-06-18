# Design Vision Overlay — Local Service Business

Site type: Local Service Business
Business: Red Carpet Plumbing
Location: Las Vegas, NV
Overlay source: docs/design/design-vision-overlays.md (Site OS Master)

This overlay layers on top of the universal Design Vision sections in the five
required SKILL.md files. Claude Code reads this file at Gate 1 alongside the
canonical skill files.

---

## Hero Layout

Two-column default: service and location headline left, lead capture form or
trust block right. Stack single column on mobile with content above form.

H1 format: "[Service] in Las Vegas" or "Las Vegas [Service]". Direct and indexable.

Trust strip below hero: 3-5 signals in one horizontal row.
Years in business, review count, license or insurance, response time, guarantee.
Icon plus short label only. No prose.

## Trust and Conversion

Tap-to-call link visible above the fold on mobile. This is not optional for service sites.

Review count shown alongside star rating. "94 reviews" not just a star graphic.

Project photos or before and after images placed between service copy and FAQ.
Not at the bottom.

Contact form: 3-4 fields maximum. Name, phone, service type, optional message.

## Local SEO

NAP must match Google Business Profile exactly: business name, address format, phone.

Service area list on every service page, not just the homepage.

Neighborhood or landmark references strengthen local relevance on location pages.

City name in H1, opening paragraph, and at least one H2.

## Schema Required

- Service with areaServed and provider as LocalBusiness
- FAQPage
- BreadcrumbList
- LocalBusiness on homepage and contact page only
- AggregateRating only with confirmed real reviews

## Motion Calibration

Trust-first. Nearly invisible. Fast hover states, subtle fade-up on scroll,
no dramatic transitions.

## Anti-Patterns for This Site Type

- Hero with centered text on a background image
- CTA that says "Learn More" or "Contact Us" instead of "Get a Free Estimate"
- Reviews section below the FAQ
- Form with more than 4 fields
- No phone number visible on mobile above the fold

---
