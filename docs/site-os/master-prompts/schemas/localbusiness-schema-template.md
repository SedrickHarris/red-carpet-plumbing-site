# LocalBusiness Schema Template

## Purpose
Use LocalBusiness schema to support local SEO, local entity clarity, service-area relevance, and local business visibility.

## Use For
- Local business homepage
- Contact page
- Location pages
- Local service pages when appropriate

## Required Data
- Business name
- Website URL
- Phone number if public
- Address if public and accurate
- Service area if applicable
- Business category
- Description
- Opening hours if verified

## Recommended Schema Type
LocalBusiness

## Fields to Prepare
- @context
- @type
- name
- url
- telephone
- description
- address
- areaServed
- openingHoursSpecification

## Service-Area Business Notes
If the business serves customers at their location and does not display a public street address, do not invent or expose an address. Use verified service area information only.

## Do Not Include
- Fake address
- Fake reviews
- Fake ratings
- Fake hours
- Fake service areas
- Coordinates unless verified
- Unsupported licensing or certification claims

## Claude Code Notes
Confirm whether the business is location-based or service-area based before implementing. Match schema to visible page content.
