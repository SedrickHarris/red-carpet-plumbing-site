# Red Carpet Plumbing Style Guide

## 1. Style Guide Purpose

This style guide defines the visual direction, layout standards, component patterns, spacing rules, image usage, accessibility expectations, and conversion-focused UI standards for the Red Carpet Plumbing website build.

The goal is to preserve the current brand foundation while improving the site into a modern, trustworthy, fast, mobile-first, SEO-ready, AEO-ready, and conversion-focused plumbing website.

## 2. Source Brand Reference

Primary source:

- https://redcarpetplumbing.com/

Current live-site brand signals:

- Local Las Vegas plumbing company
- 24/7 plumbing service positioning
- Emergency plumbing support
- Comprehensive plumbing services
- Local, family-owned business claim
- Affordable pricing claim
- Transparent pricing and no hidden fees claim
- Licensed plumbers claim
- Customer satisfaction guarantee claim
- Community-focused service
- Residential and business plumbing support

Claims above should be treated as source-site claims and verified before final publishing where supporting proof is needed.

## 3. Visual Direction

The visual direction should be:

- Professional
- Clean
- Modern
- Trustworthy
- Responsive
- Local-service focused
- Conversion-focused
- Easy to scan
- Mobile-first
- Polished but not overly corporate

The site should feel like a dependable Las Vegas plumbing company that can respond quickly, explain the problem clearly, and help homeowners or businesses take action.

## 4. Brand Color System

The color system should preserve the current Red Carpet Plumbing brand identity while supporting a polished, modern, high-conversion service website.

Exact color values should come from logo files and live-site styling where possible. Any color not directly confirmed should be marked as a best estimate.

### 4.1 Confirmed or Working Color Tokens

| Color Role | Hex | Usage | Source | Status |
|---|---:|---|---|---|
| Primary Brand Red | `#981C1E` | Primary buttons, CTA accents, active states, emergency highlights | Logo asset (`Images/brand/logo/Logo.png` wordmark; dominant red cluster on pixel histogram) | Confirmed from logo asset |
| Deep Red / Dark Accent | `#7A1618` | Button hover states, dark red CTA accents, dividers | Derived as a darker shade of the primary red for interaction states | Best estimate, needs confirmation |
| Secondary Brand Blue | `#17469E` | Small icon accents, informational highlights, secondary illustration-aligned accents, and selected service-card details. Do not use as the primary CTA color. | Logo asset illustration color | Confirmed from logo asset, optional supporting token |
| Dark Neutral | `#231F20` | Headings, body text on light backgrounds, header text, illustration outlines | Logo asset (dominant outline/wordmark stroke; near-Pantone Process Black) | Confirmed from logo asset |
| Charcoal / Footer Dark | `#111827` | Footer background, strong CTA sections, dark cards | Neutral deep gray chosen to sit heavier than the logo black so footer reads distinct | Best estimate, needs confirmation |
| White | `#FFFFFF` | Main backgrounds, cards, form fields, text on dark backgrounds | Standard UI; also the logo background color | Confirmed |
| Off White / Warm Background | `#FAF8F5` | Page background, alternating sections, soft cards | Warm-neutral tint to pair with brand red without feeling clinical | Best estimate, needs confirmation |
| Light Gray | `#F3F4F6` | Section backgrounds, service grid backings, form outlines | Neutral UI gray | Best estimate, needs confirmation |
| Medium Gray | `#6B7280` | Secondary text, helper text, muted labels | Passes WCAG AA on white (4.5:1+) | Best estimate, needs confirmation |
| Emergency Accent | `#981C1E` | Emergency callouts, 24/7 badges, call-now strip | Reuses the brand red rather than introducing a competing alert hue; the brand already carries urgency | Confirmed from logo asset |
| Success / Confirmation | `#15803D` | Form success states and positive UI feedback only | UI support color chosen to complement brand red without clashing | Best estimate, needs confirmation |
| Warning / Attention | `#B45309` | Non-emergency notices and caution UI only | UI support color | Best estimate, needs confirmation |

### 4.2 Color Usage Rules

- Use Primary Brand Red for the main conversion path.
- Use dark neutrals for readability, footer sections, and high-trust content blocks.
- Use white and off-white backgrounds to keep the site clean and service-focused.
- Use light gray backgrounds to separate service grids, FAQ sections, and location blocks.
- Use Emergency Accent only for urgent plumbing support, 24/7 callouts, and call-now prompts.
- Do not overuse red across every section. Reserve it for CTAs, accents, and important conversion signals.
- Do not use low-contrast red text on dark backgrounds.
- Do not place long paragraphs on dark red backgrounds unless contrast is verified.
- Do not create fake badges, fake awards, or fake review graphics with brand colors.

### 4.3 Recommended Tailwind Token Mapping

Use this as the future Tailwind/theme reference:

| Token | Suggested Hex | Use |
|---|---:|---|
| `brand.primary` | `#981C1E` | Main CTA and brand accents |
| `brand.primaryHover` | `#7A1618` | CTA hover state |
| `brand.secondary` | `#17469E` | Optional supporting accent for small icons, info highlights, and illustration-aligned details. Not a CTA color. |
| `brand.dark` | `#231F20` | Headings, illustration outlines, dark UI elements |
| `brand.text` | `#1F2937` | Default body text |
| `brand.muted` | `#6B7280` | Secondary text |
| `brand.border` | `#E5E7EB` | Borders and dividers |
| `brand.surface` | `#FFFFFF` | Cards and forms |
| `brand.surfaceAlt` | `#F3F4F6` | Alternating sections |
| `brand.emergency` | `#981C1E` | Emergency CTA treatment |

### 4.4 Accessibility Requirements

- Primary buttons must pass WCAG AA contrast against their text color. (`#981C1E` on white = 7.2:1, which passes AAA for normal text.)
- Body text must pass WCAG AA contrast on all backgrounds.
- Red should not be the only indicator of urgency or error. Pair with an icon or a text label.
- Focus states must be visible. Use an outline ring that is distinct on both light and dark backgrounds.
- Link states must be distinguishable from body text. Underline on hover at minimum.
- Dark sections must use high-contrast text and clear CTA treatment.

### 4.5 Pending Color Confirmation Notes

The following items are not yet locked and should be reviewed before the production Tailwind config is finalized:

- **Deep Red / Dark Accent (`#7A1618`)** is a derived hover shade. Confirm against the production design system, brand glassware (vehicle wraps, business cards), or any approved interaction-state mock.
- **Charcoal / Footer Dark (`#111827`)** and **Off White / Warm Background (`#FAF8F5`)** are UI choices, not brand-locked tones. Confirm against any existing print or signage palette before lock.
- **Light Gray (`#F3F4F6`)** and **Medium Gray (`#6B7280`)** are neutral UI support tones; verify they pair correctly with the brand red and the chosen body font once typography is selected.
- **Success (`#15803D`)** and **Warning (`#B45309`)** are UI-only support colors with no logo source; confirm before any form or notification component goes live.
- **Secondary Brand Blue (`#17469E`)** is confirmed from the logo illustration (cap and overalls of the mascot plumber, 5928-pixel dominant cluster) and mapped as an optional supporting token (`brand.secondary`). It must not be used as the primary CTA color; Primary Brand Red (`#981C1E`) remains the main CTA and emergency accent. Reserve the blue for small icon accents, informational highlights, and illustration-aligned details on service cards.
- All sampled values came from logo PNG assets. The live site (`https://redcarpetplumbing.com/`) inline HTML did not expose a CSS palette during fetch; only a placeholder fill `#cfd4db` at 10% opacity appeared inside SVG image stand-ins. Re-confirm against the rendered live site CSS (DevTools color picker on the live page) before locking tokens.

## 5. Typography

Use a clean, modern, readable font system.

Recommended direction:

- Headings: bold, confident, service-business appropriate
- Body: highly readable, simple, and professional
- Buttons: clear, bold, action-focused
- Labels: compact and accessible

Recommended type scale:

- H1: large, bold, clear, 44 to 64px desktop, 34 to 42px mobile
- H2: 32 to 44px desktop, 28 to 34px mobile
- H3: 22 to 28px
- Body: 16 to 18px
- Small text: 14 to 15px
- Button text: 15 to 17px, semibold

Typography rules:

- Avoid overly decorative fonts.
- Avoid small low-contrast text.
- Use clear line-height for readability.
- Keep paragraphs short.
- Use strong section headings that clearly describe the page content.

## 6. Layout Standards

### 6.1 Global Layout

Use:

- Max-width containers for readability
- Wide containers where conversion sections need more room
- Consistent vertical spacing
- Alternating section backgrounds
- Clear page hierarchy
- Sticky or prominent phone CTA on mobile if approved

Recommended container widths:

- Standard content: 1120 to 1200px
- Wide conversion sections: 1280 to 1440px
- Text-only sections: 760 to 900px

### 6.2 Two-Column Hero Standard

For service business pages, use a two-column hero where appropriate:

- Left column: headline, short value proposition, trust bullets, CTAs
- Right column: contact card, quote form, emergency CTA card, or service image

This pattern should be used on:

- Homepage
- Core service pages
- Location hub pages
- Service-location pages
- Contact-focused landing sections

### 6.3 Section Spacing

Recommended spacing:

- Desktop section padding: 72 to 112px top/bottom
- Mobile section padding: 48 to 72px top/bottom
- Card padding: 24 to 32px
- Small cards: 20 to 24px
- Grid gaps: 20 to 32px

## 7. Page Design Standards

### 7.1 Homepage

The homepage should include:

- Strong two-column hero
- Click-to-call CTA above the fold
- Request service CTA
- Emergency plumbing callout
- Service cards with image placeholders
- Local Las Vegas plumbing issues section
- Service areas preview
- Trust and differentiation section
- FAQ section
- Final CTA

Homepage visual style:

- Bold local hero
- Service cards with clean icon/image support
- High-contrast CTA sections
- Strong mobile conversion path

### 7.2 Core Service Pages

Each service page should include:

- Two-column service hero
- Direct answer section
- Signs you need service
- What the service includes
- Local Las Vegas relevance section
- Process section
- Related services
- FAQs
- Final CTA

Visual standards:

- Use service image placeholder near the top.
- Use scannable bullet cards.
- Use numbered process steps.
- Use related service cards.
- Keep CTA visible and repeated.

### 7.3 Location Hub Pages

Each location hub should include:

- Localized hero
- Direct answer intro
- Services offered in that location
- Local plumbing issues
- Nearby areas served
- Service-location links
- FAQs
- CTA

Visual standards:

- Use local imagery when available.
- Use location cards.
- Use nearby-area link blocks.
- Use structured service cards.

### 7.4 Service-Location Pages

Each service-location page should include:

- Service plus location H1
- Direct answer intro
- Local issue context
- Service details
- Signs you need service
- Process
- Related services in that location
- Nearby areas
- FAQs
- CTA

Visual standards:

- Keep these pages lighter than primary service pages but not thin.
- Use a consistent reusable template.
- Include breadcrumbs.

### 7.5 Blog / Resource Pages

Blog posts should support service and location pages.

Visual standards:

- Clean article layout
- Table of contents for longer posts
- FAQ block
- Related service CTA
- Related location CTA
- Internal links to service pages
- Clear author or brand attribution if approved

## 8. Component Standards

### 8.1 Header

Header should include:

- Logo
- Main navigation
- Services dropdown
- Service Areas dropdown
- Contact link
- Phone CTA
- Mobile menu

Recommended nav:

- Home
- Services
- Service Areas
- About
- Contact
- Call Now

Header rules:

- Keep navigation clean.
- Do not place every service-location page in the main nav.
- Use Tier 1 locations only in the Service Areas dropdown.
- Use core services only in the Services dropdown.

### 8.2 Footer

Footer should include:

- Logo
- Short brand summary
- Contact information
- Core services
- Tier 1 service areas
- Legal links
- Sitemap link
- Social links if verified

Footer should support crawlability and local SEO without becoming cluttered.

### 8.3 Buttons

Primary button:

- High contrast
- Clear action text
- Used for main CTAs

Secondary button:

- Outline or lighter style
- Used for supporting navigation

Emergency button:

- Strong visual weight
- Used for emergency plumbing CTAs and call-now prompts

Approved CTA labels:

- Call Now
- Request Plumbing Service
- Get Instant Plumbing Help
- Request a Free Quote
- Schedule Service
- Get Emergency Plumbing Help
- See How We Can Help
- Discover Our Plumbing Solutions
- Talk to a Las Vegas Plumber
- Get Started Today

### 8.4 Service Cards

Service cards must include:

- Image placeholder or approved image
- Service name
- Short description
- 2 to 4 benefit points or problem points
- Link to service page
- Clear hover/focus state

Card rules:

- Keep cards consistent.
- Avoid long paragraphs in cards.
- Use accessible image alt text.
- Do not place text inside images.

### 8.5 Location Cards

Location cards should include:

- Location name
- Short service-area sentence
- Link to location hub
- Optional list of nearby services
- Optional image placeholder

### 8.6 Forms

Forms should be simple and conversion-focused.

Recommended fields:

- Name
- Phone
- ZIP Code
- Service Needed
- Message, optional

Form UI rules:

- Clear labels
- Accessible focus states
- Mobile-friendly inputs
- Short helper text
- Strong submit CTA
- Do not request unnecessary information

### 8.7 FAQ Blocks

FAQ blocks should be:

- Easy to scan
- Expandable or stacked
- Written in direct-answer style
- Matched exactly by FAQPage schema when schema is used

FAQ UI rules:

- Use clear question headings.
- Keep answers concise.
- Link to related service pages when helpful.

### 8.8 Trust Cards

Trust cards can include:

- 24/7 emergency service
- Transparent pricing
- Licensed plumbers
- Customer satisfaction focus
- Local service
- Clean workmanship
- Reliable response

Only use claims that are approved or source-supported.

## 9. Image Style Guide

### 9.1 Image Direction

Images should feel:

- Realistic
- Professional
- Local-service focused
- Clean
- Trustworthy
- Practical
- Helpful

Use images for:

- Hero sections
- Service cards
- Location pages
- Process sections
- Company vehicle/team sections
- Blog images

### 9.2 Image Rules

- Do not use images with readable text unless approved.
- Do not use fake badges or awards.
- Do not use fake review graphics.
- Do not use misleading before-and-after images.
- Service cards should include image placeholders.
- Organize images by scope before moving into `public/images/`.
- Do not commit `Images/` until approved.
- Optimize images before production use.
- Prefer WebP where possible.

### 9.3 Image Folder Direction

Use scoped image folders:

- Brand images
- Hero images
- Service images
- Location images
- Company images
- Blog images
- Social images
- Unsorted images
- Duplicates review

## 10. Icon Style

Use icons sparingly and consistently.

Recommended icon direction:

- Simple line icons
- Rounded edges
- Consistent stroke width
- Service-specific but not cartoonish
- Used to support labels, not replace text

Icon use cases:

- Trust strips
- Service cards
- Process steps
- FAQ support
- Location highlights

## 11. Accessibility Standards

The site must support:

- Keyboard navigation
- Visible focus states
- Proper heading order
- Sufficient color contrast
- Descriptive button text
- Accessible form labels
- Meaningful image alt text
- Skip-to-content link
- Responsive touch targets
- No text-only color indicators

Avoid:

- Low contrast text
- Tiny tap targets
- Hover-only interactions
- Autoplay media without controls
- Text embedded in images

## 12. SEO, AEO, and Schema UI Standards

Every page should visually support:

- One clear H1
- Logical H2 and H3 structure
- Direct-answer section near top
- FAQ section when useful
- Breadcrumbs
- Internal links
- Related services
- Clear CTAs
- Location/service clarity

Schema must match visible content.

Recommended page-level schema:

- WebPage
- BreadcrumbList
- Service
- FAQPage when visible FAQs exist
- LocalBusiness or Plumber when NAP is confirmed
- Article or BlogPosting for blog posts
- HowTo only when visible step-by-step instructions exist
- Review or AggregateRating only when real, visible, verified reviews exist

## 13. Conversion Standards

Every page should answer:

- What do you do?
- Where do you do it?
- Who do you help?
- Why should I trust you?
- How do I contact you?
- What happens next?

Conversion elements:

- Hero CTA
- Mid-page CTA
- Final CTA
- Click-to-call links
- Contact form
- Emergency callout
- Trust proof near CTA
- Related services for next-click navigation

## 14. Mobile Standards

Mobile design must prioritize:

- Fast page load
- Clear headline
- Click-to-call access
- Short forms
- Easy navigation
- Large tap targets
- Scannable sections
- Sticky CTA if approved
- No cramped cards
- No oversized dropdowns

## 15. Design Do Not Use List

Do not use:

- Fake awards
- Fake badges
- Fake reviews
- Fake star ratings
- Fake license graphics
- Overly dark unreadable sections
- Excessive animations
- Tiny text
- Text embedded inside images
- Overly generic stock imagery
- Heavy layouts that slow performance
- Em dashes in customer-facing copy
- Double hyphens in customer-facing copy

## 16. Tailwind / Component Implementation Notes

### Color Implementation Note

Before production build styling is locked, convert the confirmed color system into reusable Tailwind design tokens or CSS variables. Do not scatter raw hex values throughout page components unless a token does not exist yet.

When implementing:

- Use reusable layout components.
- Use shared button components.
- Use shared card components.
- Use shared section heading components.
- Use consistent spacing tokens.
- Keep page templates scalable.
- Use image placeholders until final images are approved.
- Avoid hardcoding page-specific styles where reusable patterns make sense.

Suggested reusable components:

- SiteHeader
- SiteFooter
- HeroWithForm
- SectionHeading
- ServiceCard
- LocationCard
- TrustStrip
- CTASection
- FAQSection
- Breadcrumbs
- ContactCard
- ProcessSteps
- RelatedServices
- RelatedLocations

## 17. Style Compliance Checklist

Before any page is approved, confirm:

- Visual style matches the Red Carpet Plumbing brand direction
- Layout is mobile-first
- Page has one clear H1
- Buttons are clear and consistent
- CTAs are visible
- Forms are simple and accessible
- Service cards include image placeholders or approved images
- Internal links are present
- FAQ section is clean and schema-ready
- No fake claims are used
- No em dashes are used
- No double hyphens are used
- Schema matches visible content
- Page supports SEO, GEO, AEO, LLM search, and conversion
