# Breadcrumb Schema Template

## Purpose
Use BreadcrumbList schema to help search engines understand the page position in the site structure.

## Use For
- Service pages
- Location pages
- Category pages
- Blog posts
- Landing pages when hierarchy exists

## Required Data
- Homepage URL
- Parent page URL if applicable
- Current page URL
- Page names
- Correct page hierarchy

## Recommended Schema Type
BreadcrumbList

## Fields to Prepare
- @context
- @type
- itemListElement
- ListItem
- position
- name
- item

## Do Not Include
- Breadcrumbs that do not match the site structure
- Broken URLs
- Duplicate positions
- Pages that do not exist
- Fake parent categories

## Claude Code Notes
Confirm the page hierarchy before implementing. Match visible breadcrumbs if the site displays them.
