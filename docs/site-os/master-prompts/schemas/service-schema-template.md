# Service Schema Template

## Purpose
Use Service schema to help search engines understand the service being offered, the provider, the area served, and the service description.

## Use For
- Individual service pages
- Local service pages
- Service category pages when appropriate

## Required Data
- Service name
- Service description
- Provider name
- Provider URL
- Area served if applicable
- Service type
- Service page URL

## Recommended Schema Type
Service

## Fields to Prepare
- @context
- @type
- name
- serviceType
- description
- provider
- areaServed
- url

## Do Not Include
- Fake pricing
- Fake offers
- Fake ratings
- Fake reviews
- Service areas not actually served
- Credentials not verified

## Claude Code Notes
Use Service schema when the page is clearly about a service. Do not add Offer schema unless real offer or pricing data is provided.
