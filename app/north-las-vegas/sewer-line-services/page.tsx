// FLAG: VERIFY before publishing:
// - Telephone +17025679172 — project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating — project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees" — source-site claim, present in
//   the approved Section 4 and Section 8 copy; confirm documentation.
// - "4.8-star rated" — appears in the approved hero subheading and Section 8
//   copy. Visible text only. Deliberately NOT expressed as AggregateRating
//   schema: no verified review count or source was provided for this build.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// North Las Vegas service-location schema pattern: matches the Henderson and
// Las Vegas sewer pages (Plumber provider; areaServed City + containedInPlace
// State; no sameAs, no hasCredential, no AggregateRating; 5 JsonLd blocks in
// order WebPage -> BreadcrumbList -> Service -> HowTo -> FAQPage). HowTo and
// FAQPage derive from the same consts that render visibly, so schema text and
// page text cannot drift apart.
//
// Deviation from the sibling pattern, approved in this build's Gate 2:
// Service.areaServed carries a PostalCodeSpecification array alongside the
// City node, surfacing the ten client-confirmed North Las Vegas ZIP codes
// recorded in docs/site-os/client-context/. No other page does this yet.
//
// Hero renders the gradient with no background image, matching the Henderson
// and Las Vegas sewer pages. TODO: /images/services/sewer-line-services/ holds
// five real assets that no sewer page uses, and both sibling pages carry a
// stale comment claiming the directory is absent. Flagged for a future
// cleanup pass; deliberately not addressed in this build.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Sewer Line Services in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// Approved copy. Every string below is implemented verbatim from the approved
// build prompt. Paragraphs that carry no inline link live here as plain
// strings; paragraphs that must wrap an existing phrase in a link are built as
// JSX in the section itself, splitting the approved sentence without adding,
// removing, or altering a single word.
// ---------------------------------------------------------------------------
const HERO_SUBHEADING =
  "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout North Las Vegas, NV. Trenchless options available. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const DIRECT_ANSWER_BODY =
  "Sewer line backups, slow drains, tree root intrusion, and collapsed pipes are common sewer line problems in North Las Vegas homes and businesses. Red Carpet Plumbing diagnoses the cause with a camera inspection, then repairs, replaces, or relines the line, including trenchless options that avoid digging up your yard. Call (702) 567-9172 to schedule an inspection.";

const NLV_CONTEXT_BODY =
  "Many North Las Vegas neighborhoods have older clay or cast iron sewer lines that are more prone to root intrusion, cracking, and joint separation over time. Desert soil conditions can also shift and settle around buried lines. Red Carpet Plumbing's licensed plumbers inspect the full line with a camera before recommending a repair, replacement, or trenchless option, so you know exactly what you're dealing with before any work begins.";

const TRUST_BODY =
  "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A) rated 4.8 stars. Every sewer line job includes a camera inspection, an upfront explanation of your options, and transparent pricing with no hidden fees.";

const URGENCY_BODY =
  "Need sewer line service in North Las Vegas? Same-day service is available, subject to scheduling. Call (702) 567-9172 to reach Red Carpet Plumbing and get an inspection scheduled.";

// Section 5 service list. Matches the parent /sewer-line-services/ page list
// exactly. The camera inspection entry links to the dedicated inspections page.
const NLV_SEWER_SERVICES: { label: string; href?: string }[] = [
  { label: "sewer line inspection" },
  { label: "sewer line cleaning" },
  { label: "sewer line repair" },
  { label: "sewer line replacement" },
  { label: "trenchless sewer line repair" },
  {
    label: "sewer line camera inspection",
    href: "/video-camera-plumbing-inspections/",
  },
];

// Section 6 process steps. Drives both the visible numbered list and the HowTo
// schema, so the two cannot drift apart.
const NLV_SEWER_STEPS = [
  {
    name: "Camera Inspection",
    body: "A licensed plumber runs a video camera through the sewer line to find the exact cause and location of the problem.",
  },
  {
    name: "Diagnosis and Options",
    body: "You'll get a clear explanation of what's wrong and the repair options available, including trenchless repair where the line qualifies.",
  },
  {
    name: "Repair, Replacement, or Reline",
    body: "Red Carpet Plumbing completes the recommended fix, from targeted repair to full replacement or trenchless relining.",
  },
];

// Section 10 FAQs. Drives both the visible accordion and the FAQPage schema.
const NLV_SEWER_FAQS = [
  {
    question: "What causes a sewer line backup in North Las Vegas?",
    answer:
      "Tree root intrusion, aging clay or cast iron pipe, and grease or debris buildup are the most common causes of sewer line backups. A camera inspection identifies the exact cause before any repair work begins.",
  },
  {
    question: "How do I know if my sewer line is collapsed or just clogged?",
    answer:
      "Multiple slow drains throughout the house, gurgling sounds, and sewage odor often point to a bigger problem than a single clog. A camera inspection is the only reliable way to tell the difference.",
  },
  {
    question: "Can tree roots really break a sewer line?",
    answer:
      "Yes. Tree roots seek out moisture and can enter small cracks or joints in a sewer line, eventually growing large enough to crack or collapse the pipe.",
  },
  {
    question: "Is trenchless sewer line repair available in North Las Vegas?",
    answer:
      "Trenchless sewer line repair is available for qualifying lines. Red Carpet Plumbing inspects the line first to determine if trenchless repair or replacement is the right fit.",
  },
  {
    question: "How much does sewer line repair cost in North Las Vegas?",
    answer:
      "Sewer line repair cost depends on the cause, access, and repair method. Red Carpet Plumbing provides transparent pricing with no hidden fees after a camera inspection identifies the exact problem.",
  },
  {
    question: "Why does my yard smell like sewage?",
    answer:
      "A sewage smell in the yard often means a sewer line is cracked, leaking, or backed up below the surface. This should be inspected promptly to prevent further damage.",
  },
  {
    question: "Are you licensed to do sewer line work in Nevada?",
    answer:
      "Red Carpet Plumbing holds Nevada C-1 Plumbing and Heating Contractor License #0048585A and performs all sewer line work with licensed plumbers.",
  },
  {
    question:
      "Do you provide sewer line camera inspections before buying a home?",
    answer:
      "Yes. A pre-purchase sewer line camera inspection identifies existing damage, root intrusion, or aging pipe before you close on a North Las Vegas home.",
  },
  {
    question:
      "Do you offer sewer line service for commercial properties in North Las Vegas?",
    answer:
      "Red Carpet Plumbing services sewer lines for commercial properties in North Las Vegas, from inspection through repair or replacement.",
  },
  {
    question: "Do you offer same-day sewer line service in North Las Vegas?",
    answer:
      "Same-day sewer line service is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
  },
];

// Client-confirmed North Las Vegas ZIP codes. Single source for the visible
// Section 9 list and the Service schema areaServed postal codes.
const NLV_ZIPS = [
  "89030",
  "89031",
  "89032",
  "89033",
  "89036",
  "89081",
  "89084",
  "89085",
  "89086",
  "89087",
];

const LINK_CLASS =
  "font-semibold text-brand-dark underline hover:text-brand-dark/70";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in North Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Licensed plumbers. Call (702) 567-9172.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://redcarpetplumbing.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sewer Line Services in North Las Vegas, NV",
      item: "https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services in North Las Vegas, NV",
  serviceType: "Sewer Line Services",
  description:
    "Red Carpet Plumbing provides sewer line inspection, sewer line cleaning, sewer line repair, sewer line replacement, trenchless sewer line repair, and sewer line camera inspection for homes and businesses in North Las Vegas, NV.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
  },
  areaServed: [
    {
      "@type": "City",
      name: "North Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    ...NLV_ZIPS.map((postalCode) => ({
      "@type": "PostalCodeSpecification",
      postalCode,
      addressCountry: "US",
    })),
  ],
};

// HowTo included because Section 6 renders the matching visible numbered steps
// as distinct headings. Derived from NLV_SEWER_STEPS for a guaranteed match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Diagnose and Fix Sewer Line Problems",
  step: NLV_SEWER_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_SEWER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasSewerLinePage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        {/* Hero renders its gradient background: no sewer-line hero asset is
            wired on any sewer page. See the file header TODO. */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            { label: "Sewer Line Services in North Las Vegas, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Sewer Line Services
              <br className="hidden sm:block" /> in North Las Vegas, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
            href: "/contact/",
          }}
          formSlot={<QuoteFormPlaceholder title="Get Sewer Line Help" />}
        />

        {/* SECTION 2: DIRECT ANSWER / PROBLEM-SOLUTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Dealing with a Sewer Line Problem in North Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER_BODY}
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                If you&apos;re dealing with an active sewage backup or flooding,
                see our{" "}
                <Link
                  href="/north-las-vegas/emergency-plumbing/"
                  className={LINK_CLASS}
                >
                  emergency plumbing in North Las Vegas
                </Link>{" "}
                page for immediate help.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NORTH LAS VEGAS SEWER LINE CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Issues Common to North Las Vegas Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {NLV_CONTEXT_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: COST EXPECTATION / SERVICE OVERVIEW */}
        {/* The approved sentence is split only to wrap the existing phrase
            "trenchless repair" as the trenchless piping link. No words added. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What to Expect: Sewer Line Repair, Replacement, and Trenchless
                Options
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Sewer line repair cost depends on what the camera inspection
                finds, how the line is accessed, and whether{" "}
                <Link href="/trenchless-piping/" className={LINK_CLASS}>
                  trenchless repair
                </Link>{" "}
                is possible. Red Carpet Plumbing provides transparent pricing
                with no hidden fees, and explains every option before work
                begins so you can make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Services We Provide in North Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the following{" "}
                <Link href="/sewer-line-services/" className={LINK_CLASS}>
                  sewer line services
                </Link>{" "}
                for homes and businesses in North Las Vegas, including{" "}
                <Link href="/commercial-plumbing/" className={LINK_CLASS}>
                  commercial plumbing services
                </Link>{" "}
                for commercial properties.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NLV_SEWER_SERVICES.map((s) => (
                <li key={s.label} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s.href ? (
                      <Link href={s.href} className={LINK_CLASS}>
                        {s.label}
                      </Link>
                    ) : (
                      s.label
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Diagnose and Fix Sewer Line Problems
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_SEWER_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-dark text-lg font-semibold text-white"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {step.name}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-brand-dark/80">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 7: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Sewer Line Problem
                  <br className="hidden sm:block" /> in North Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {URGENCY_BODY}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Sewer Line Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING / TRUST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why North Las Vegas Homeowners Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {TRUST_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: LOCAL SERVICE AREA / GEO */}
        {/* The approved sentence is split only to wrap the existing phrase
            "North Las Vegas Aliante Area" as a link. No words added. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving North Las Vegas and the Surrounding Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides sewer line services throughout
                North Las Vegas, NV, including ZIP codes{" "}
                {NLV_ZIPS.slice(0, -1).join(", ")}, and{" "}
                {NLV_ZIPS[NLV_ZIPS.length - 1]}. We also serve the{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className={LINK_CLASS}
                >
                  North Las Vegas Aliante Area
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Service FAQs
                <br className="hidden sm:block" /> North Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_SEWER_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <FaqChevron />
                  </summary>
                  <p className="mt-4 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <CTASection
          background="red"
          headline={
            <>
              Have a Sewer Line Problem?
              <br className="hidden sm:block" /> Call Red Carpet Plumbing
            </>
          }
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
            href: "/contact/",
          }}
        />
      </main>

      <SiteFooter />

      {/* Spacer so the fixed sticky mobile CTA never covers footer content. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      <StickyMobileCTA />
    </>
  );
}

function CheckMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-none text-brand-dark"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}

function FaqChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none text-brand-muted transition-transform group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
