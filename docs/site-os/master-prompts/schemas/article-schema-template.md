# Article Schema Template

## Purpose
Use Article schema for blog posts, articles, guides, and educational content.

## Use For
- Blog posts
- Guides
- Educational articles
- News-style updates
- Case studies when article-like

## Required Data
- Headline
- Description
- Article URL
- Author
- Publisher
- Date published if available
- Date modified if available
- Image if available

## Recommended Schema Type
Article or BlogPosting

## Fields to Prepare
- @context
- @type
- headline
- description
- mainEntityOfPage
- author
- publisher
- datePublished
- dateModified
- image

## Do Not Include
- Fake author names
- Fake publish dates
- Fake modified dates
- Images that do not exist
- Unsupported publisher details

## Claude Code Notes
Use Article schema for educational pages and blog posts. Use BlogPosting instead if the project already uses BlogPosting schema.
