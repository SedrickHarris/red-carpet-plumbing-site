// FLAG: VERIFY before publishing:
// - Telephone +17025679172 — project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating — project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees" — source-site claim, present in
//   the approved Section 8 copy; confirm documentation.
// - "4.8-star rated" — appears in the approved hero subheading and Section 8
//   copy. Visible text only. Deliberately NOT expressed as AggregateRating
//   schema: no verified review count or source was provided for this build.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// North Las Vegas service-location schema pattern: matches
// /north-las-vegas/sewer-line-services/ and
// /north-las-vegas/water-pipe-repair-replacement/ (Plumber provider;
// areaServed City + containedInPlace State, plus the ten client-confirmed NLV
// ZIP codes as PostalCodeSpecification nodes; no sameAs, no hasCredential, no
// LocalBusiness, no AggregateRating, no Review; 5 JsonLd blocks in order
// WebPage -> BreadcrumbList -> Service -> HowTo -> FAQPage). HowTo and
// FAQPage derive from the same consts that render visibly, so schema text and
// page text cannot drift apart.
//
// Hero deliberately omits trustItems, matching the sibling NLV pages rather
// than the core /repiping/ page, whose trustItems restate review-count and
// years-in-business claims that are not part of this build's approved content.
//
// Hero reuses /images/services/repiping/hero.webp, the same asset the core
// /repiping/ page and the North Las Vegas hub card already use. No resolution
// TODO applies: at 347KB this asset is high-resolution, unlike the water pipe
// hero.
//
// SKIPPED LINKS (routes do not exist in this repo, verified at Gate 1):
// /repiping/whole-house/ and /repiping/partial/. Both were specified in this
// build's internal linking table. Neither directory exists under app/. Per the
// brief, the links are skipped rather than invented. The core /repiping/ page
// previously linked to both dead routes; those links were fixed separately and
// now point at /repiping/ itself. The routes still do not exist, so the skip
// above stands.
//
// Spelling standard: "Repiping", one word, no hyphen, everywhere.

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
  title: "Repiping in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/north-las-vegas/repiping/",
  },
  openGraph: {
    title: "Repiping in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides whole-house and partial repiping throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/repiping/",
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
  "Red Carpet Plumbing provides whole-house and partial repiping for homes and businesses throughout North Las Vegas, NV. PEX and copper repiping, polybutylene, Kitec, and galvanized pipe replacement. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const DIRECT_ANSWER_BODY =
  "Recurring leaks, low water pressure, or known problem pipe materials like polybutylene or Kitec are common reasons North Las Vegas homeowners consider repiping. Red Carpet Plumbing assesses your plumbing system, explains whether a whole-house or partial repipe fits your situation, and completes the work with PEX or copper. Call (702) 567-9172 to schedule an assessment.";

const TRUST_BODY =
  "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A) rated 4.8 stars. Every repiping job includes a full system assessment, an upfront explanation of your material and approach options, and transparent pricing with no hidden fees.";

// Note: this page says "same-day evaluations", while FAQ 9 says "same-day
// repiping service". Both are approved as written and are deliberately NOT
// reconciled with each other. Repiping is a multi-day project per the core
// page's confirmed timeline, so neither string may be strengthened into a
// same-day completion claim, and the "subject to scheduling" qualifier stays.
const URGENCY_BODY =
  "Need repiping service in North Las Vegas? Same-day evaluations are available, subject to scheduling. Call (702) 567-9172 to reach Red Carpet Plumbing and get an assessment scheduled.";

// Section 4 signs list. Written fresh for this page; structurally mirrors the
// core page's REPIPING_SIGNS without reusing its wording.
const NLV_REPIPING_SIGNS = [
  "Recurring leaks in more than one location",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipe",
  "Known problem pipe materials such as polybutylene or Kitec",
  "A home built before 1990 with original plumbing still in place",
  "More than one slab leak on the same plumbing system",
];

// Section 6 process steps. Drives both the visible numbered list and the HowTo
// schema, so the two cannot drift apart.
const NLV_REPIPING_STEPS = [
  {
    name: "Assess Your Plumbing System",
    body: "We identify the pipe materials present, the age and condition of the system, and whether a whole-house or partial repipe is the right approach, including any permit requirements.",
  },
  {
    name: "Present Material and Approach Options",
    body: "We explain your PEX and copper options and the scope of the project. You approve the plan before any work begins.",
  },
  {
    name: "Complete the Repipe",
    body: "We protect your home, install the new piping, connect all fixtures, and restore water service with minimal disruption.",
  },
  {
    name: "Pressure Test and Close Out",
    body: "We pressure-test the completed system, pull the required permit, and schedule the city inspection.",
  },
];

// Section 10 FAQs. Drives both the visible accordion and the FAQPage schema.
// No FAQ carries an inline link in this build, so the split-on-phrase
// FaqAnswer renderer used on /north-las-vegas/water-pipe-repair-replacement/
// is deliberately not ported here rather than shipped unused.
const NLV_REPIPING_FAQS = [
  {
    question: "What are the signs I need to repipe my North Las Vegas home?",
    answer:
      "Recurring leaks in multiple locations, discolored water, consistently low water pressure, frequent pinhole leaks in copper pipe, known problem materials like polybutylene or Kitec, and a pre-1990 home with original plumbing are the most common signs. A licensed plumber can assess your system and confirm what's needed.",
  },
  {
    question:
      "What is the difference between whole-house and partial repiping?",
    answer:
      "Whole-house repiping replaces every supply line in the home. Partial repiping replaces only the affected section when the rest of the system is sound. Red Carpet Plumbing assesses your system and recommends the right approach.",
  },
  {
    question: "What is the difference between PEX and copper for repiping?",
    answer:
      "PEX is flexible, resists hard water scale, and requires fewer fittings. Copper is a proven material with a long track record and excellent water quality. Red Carpet Plumbing can help you evaluate which material fits your North Las Vegas home.",
  },
  {
    question: "Do I need a permit to repipe my house in North Las Vegas?",
    answer:
      "Yes. A permit is required for whole-house repiping in Las Vegas, Henderson, and North Las Vegas. Red Carpet Plumbing pulls the required permits and schedules the city inspection as part of the repiping project.",
  },
  {
    question: "What is Kitec pipe and why does it need to be replaced?",
    answer:
      "Kitec is a plumbing pipe installed in many Las Vegas Valley homes between the late 1990s and mid-2000s. It has brass fittings that corrode when exposed to minerals in the water, eventually failing at the connection points. If your North Las Vegas home has Kitec plumbing, replacement is strongly recommended.",
  },
  {
    question:
      "My North Las Vegas home was built in the 1980s. Could it have polybutylene pipe?",
    answer:
      "Homes in the Las Vegas Valley built between approximately 1978 and 1995 may have polybutylene supply pipe. Polybutylene can degrade from chlorinated water and fail without warning. A licensed plumber can confirm whether polybutylene pipe is present in your home.",
  },
  {
    question: "Does repiping increase home value in North Las Vegas?",
    answer:
      "A documented repipe with closed permits and final inspection sign-off removes a major concern for home buyers and inspectors, and can support the home's value in a sale.",
  },
  {
    question:
      "Do you offer repiping for commercial properties in North Las Vegas?",
    answer:
      "Red Carpet Plumbing provides repiping services for commercial buildings and multi-unit properties in North Las Vegas.",
  },
  {
    question: "Do you offer same-day repiping service in North Las Vegas?",
    answer:
      "Same-day repiping service is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
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
  name: "Repiping in North Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/north-las-vegas/repiping/",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers. Call (702) 567-9172.",
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
      name: "Repiping in North Las Vegas, NV",
      item: "https://redcarpetplumbing.com/north-las-vegas/repiping/",
    },
  ],
};

// description is derived strictly from the approved Section 4 and Section 5
// content. No service is described that the visible page does not name.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Repiping",
  serviceType: "Repiping",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping for homes and businesses in North Las Vegas, NV, replacing polybutylene, Kitec, and galvanized pipe as well as copper pipe with pinhole leaks in multiple areas.",
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
// as distinct h3 headings. Derived from NLV_REPIPING_STEPS for a guaranteed
// match with the visible text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Repiping in North Las Vegas",
  step: NLV_REPIPING_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_REPIPING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasRepipingPage() {
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
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            { label: "Repiping in North Las Vegas, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Repiping
              <br className="hidden sm:block" /> in North Las Vegas, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Repiping Service",
            href: "/contact/",
          }}
          formSlot={<QuoteFormPlaceholder title="Get Repiping Help" />}
          backgroundImage={{
            src: "/images/services/repiping/hero.webp",
            alt: "Red Carpet Plumbing repiping technician in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER / PROBLEM-SOLUTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Considering a Repipe in North Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NORTH LAS VEGAS REPIPING CONTEXT */}
        {/* The approved paragraph is split only to wrap the existing trailing
            word "repiping" as the core repiping link. No words added,
            removed, or altered. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Repiping Needs Common to North Las Vegas Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                North Las Vegas has homes spanning several decades of
                construction, which means a mix of pipe materials with different
                failure patterns. Older neighborhoods may have galvanized steel
                or original copper, while homes built between the late 1970s and
                mid-2000s may have polybutylene or Kitec pipe, both known to
                fail without warning. Red Carpet Plumbing&apos;s licensed
                plumbers identify the pipe material and condition in your North
                Las Vegas home before recommending whole-house or partial{" "}
                <Link href="/repiping/" className={LINK_CLASS}>
                  repiping
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU NEED REPIPING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your North Las Vegas Home May Need Repiping
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NLV_REPIPING_SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {sign}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: WHOLE-HOUSE VS. PARTIAL REPIPING */}
        {/* The approved paragraph is split only to wrap the existing phrase
            "pinhole leaks" as the North Las Vegas water pipe repair link. No
            words added, removed, or altered. The /repiping/whole-house/ and
            /repiping/partial/ links specified for this section are skipped:
            neither route exists in this repo. See the file header. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Whole-House or Partial Repipe: Which Do You Need?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Whole-house repiping replaces every supply line in the home,
                from the main water line to each fixture. It&apos;s the right
                fit when a home has polybutylene, Kitec, or galvanized pipe
                throughout, or copper pipe with{" "}
                <Link
                  href="/north-las-vegas/water-pipe-repair-replacement/"
                  className={LINK_CLASS}
                >
                  pinhole leaks
                </Link>{" "}
                in multiple areas. Partial repiping replaces only the affected
                section, such as a single bathroom or the hot water distribution
                lines, when the rest of the system is sound. Red Carpet Plumbing
                assesses the full system and recommends the option that fits
                your home.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Repiping in North Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_REPIPING_STEPS.map((step, index) => (
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
        {/* Heading is a strict subset of the approved Section 11 heading,
            chosen so it does not duplicate the Section 2 heading verbatim.
            No new words. */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Considering a Repipe?
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
                  Request Repiping Service
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
                Red Carpet Plumbing provides repiping services throughout North
                Las Vegas, NV, including ZIP codes{" "}
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
                Repiping FAQs
                <br className="hidden sm:block" /> North Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_REPIPING_FAQS.map((faq) => (
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
              Considering a Repipe?
              <br className="hidden sm:block" /> Call Red Carpet Plumbing
            </>
          }
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Repiping Service",
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
