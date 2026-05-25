# FAQ Schema Template

## Purpose
Use FAQ schema when a page includes visible question-and-answer content.

## Use For
- Service pages with FAQs
- Location pages with FAQs
- Blog posts with FAQs
- Landing pages with FAQs
- Category pages with FAQs

## Required Data
- FAQ questions
- FAQ answers
- FAQs must be visible on the page

## Recommended Schema Type
FAQPage

## Fields to Prepare
- @context
- @type
- mainEntity
- Question
- name
- acceptedAnswer
- Answer
- text

## FAQ Quality Rules
Good FAQs should:
- Match real user questions
- Support AEO
- Support voice search
- Be clear and concise
- Include service or location context naturally
- Avoid repetitive answers
- Avoid fake or unsupported claims

## Do Not Include
- FAQs not visible on the page
- Fake policies
- Fake guarantees
- Fake prices
- Overly promotional answers
- Duplicate questions

## Claude Code Notes
Before implementing FAQ schema, confirm the FAQ section exists on the page and that the schema answers match the visible answers.
