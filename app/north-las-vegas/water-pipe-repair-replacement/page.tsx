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
// /north-las-vegas/sewer-line-services/ (Plumber provider; areaServed City +
// containedInPlace State, plus the ten client-confirmed NLV ZIP codes as
// PostalCodeSpecification nodes; no sameAs, no hasCredential, no
// LocalBusiness, no AggregateRating, no Review; 5 JsonLd blocks in order
// WebPage -> BreadcrumbList -> Service -> HowTo -> FAQPage). HowTo and
// FAQPage derive from the same consts that render visibly, so schema text and
// page text cannot drift apart.
//
// Hero deliberately omits trustItems, matching the sibling NLV sewer page
// rather than the core /water-pipe-repair-replacement/ page. The core page's
// trustItems restate "76 Google Reviews" and "Over 40 Years in Las Vegas",
// neither of which is part of this build's approved content.
//
// TODO: Hero reuses /images/services/water-pipe-repair-replacement/hero.webp,
// the same asset the core water pipe page uses. That page carries an open
// TODO questioning the asset's resolution at hero display size; the flag is
// carried forward here rather than dropped. Requires client confirmation
// before launch.

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
  title:
    "Water Pipe Repair and Replacement in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and replaces water pipes throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Leak repair, burst pipe repair, section replacement. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/",
  },
  openGraph: {
    title:
      "Water Pipe Repair and Replacement in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing repairs and replaces water pipes throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Leak repair, burst pipe repair, section replacement. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/",
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
  "Red Carpet Plumbing repairs and replaces water supply pipes for homes and businesses throughout North Las Vegas, NV. Leak repair, section replacement, and full repiping evaluation. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const DIRECT_ANSWER_BODY =
  "A leaking, burst, or corroded water pipe in North Las Vegas needs a licensed plumber who can tell you whether the fix is a spot repair or a section replacement. Red Carpet Plumbing inspects the affected pipe, identifies the cause, and completes the repair or replacement needed to restore your water supply. For a burst pipe, shut off the main water supply first, then call (702) 567-9172.";

const REPAIR_VS_REPLACEMENT_BODY =
  "Spot repair is the right fix when the damage is limited to one section or joint and the rest of the pipe system is sound. Full or partial replacement is the better choice when a home has polybutylene pipe, galvanized pipe that has corroded enough to restrict flow, or copper pipe with recurring pinhole leaks in more than one location. Red Carpet Plumbing inspects the full system and explains which option fits your home before any work begins.";

const TRUST_BODY =
  "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A) rated 4.8 stars. Every water pipe job includes a full inspection, an upfront explanation of your repair or replacement options, and transparent pricing with no hidden fees.";

const URGENCY_BODY =
  "Need water pipe repair in North Las Vegas? Same-day service is available, subject to scheduling. Call (702) 567-9172 to reach Red Carpet Plumbing and get an inspection scheduled.";

// Section 5 service list. Matches the parent /water-pipe-repair-replacement/
// page's service list exactly, minus Full Repiping, which is the separate
// /repiping/ service and is cross-linked from FAQ 6 rather than listed here.
// The two hrefs below are not new judgment: they are the same destinations the
// core page already assigns to these service entries.
const NLV_WATER_PIPE_SERVICES: { label: string; href?: string }[] = [
  { label: "burst pipe repair", href: "/emergency-plumbing/" },
  { label: "pinhole leak repair" },
  {
    label: "pipe section replacement",
    href: "/water-pipe-repair-replacement/",
  },
  { label: "galvanized pipe replacement" },
  { label: "polybutylene pipe replacement" },
  { label: "main water line repair" },
  { label: "supply line and shut-off valve replacement" },
];

// Section 6 process steps. Drives both the visible numbered list and the HowTo
// schema, so the two cannot drift apart.
const NLV_WATER_PIPE_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call (702) 567-9172 and describe what you're experiencing. For a burst pipe or active leak, shut off the main water supply first, then call us.",
  },
  {
    name: "Inspection and Pipe Assessment",
    body: "A licensed plumber inspects the pipe, assesses the material and condition, and identifies whether the issue is isolated or part of a larger pattern.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain the repair or replacement options and what the work involves. You approve the scope before any work begins.",
  },
  {
    name: "Repair or Replacement with Pressure Test",
    body: "Our licensed plumber completes the work, restores your water supply, and confirms the repair holds pressure before the job is done.",
  },
];

type Faq = {
  question: string;
  answer: string;
  // Optional inline link. `phrase` must occur verbatim inside `answer`. The
  // visible answer is rendered by splitting `answer` around `phrase` and
  // reassembling it, so the rendered text is the schema string itself and the
  // two cannot drift. See FaqAnswer below.
  link?: { phrase: string; href: string };
};

// Section 10 FAQs. Drives both the visible accordion and the FAQPage schema.
const NLV_WATER_PIPE_FAQS: Faq[] = [
  {
    question: "What are the signs of a failing water pipe in North Las Vegas?",
    answer:
      "Common signs include a drop in water pressure, discolored or rust-tinged water, the sound of running water when no fixtures are in use, water stains on walls or ceilings, wet patches in the yard above buried lines, and a water bill that rises without a change in usage. A licensed plumber can identify the source.",
  },
  {
    question: "Should I repair my water pipe or replace it?",
    answer:
      "Spot repair works when the damage is limited to one section and the rest of the pipe system is sound. Replacement is the better option when a home has polybutylene pipe, corroded galvanized pipe, or recurring pinhole leaks in multiple locations. A licensed plumber can assess your system and recommend the right approach.",
  },
  {
    question: "What causes pinhole leaks in copper pipe?",
    answer:
      "Pinhole leaks are caused by pitting corrosion, which develops on the interior surface of the pipe over time. Las Vegas Valley's hard water and water chemistry contribute to accelerated pitting corrosion in copper supply lines, especially in pipe installed in the 1980s and 1990s.",
  },
  {
    question:
      "My North Las Vegas home was built in the 1980s. Could it have polybutylene pipe?",
    answer:
      "Homes built in the Las Vegas Valley between approximately 1978 and 1995 may have polybutylene supply pipe. Polybutylene can degrade from chlorinated water and fail without warning. A licensed plumber can confirm whether polybutylene pipe is present in your home.",
  },
  {
    question: "Can you repair a burst water pipe?",
    answer:
      "Yes. If a pipe has burst, shut off the main water supply to the home as quickly as possible, then call (702) 567-9172. Burst pipe repair typically involves replacing the damaged section and checking adjacent pipe for signs of stress or corrosion.",
  },
  {
    question: "What is the difference between water pipe repair and repiping?",
    answer:
      "Water pipe repair addresses a specific section of damaged or leaking pipe. Repiping replaces the entire supply pipe system, typically because the existing pipe material is failing throughout the home. Red Carpet Plumbing provides both spot pipe repair and full repiping through our separate repiping service.",
    link: { phrase: "full repiping", href: "/repiping/" },
  },
  {
    question: "Do you replace galvanized pipe in North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing replaces galvanized steel supply pipe that has corroded internally, which reduces water pressure and water quality over time.",
  },
  {
    question:
      "Do you offer water pipe service for commercial properties in North Las Vegas?",
    answer:
      "Red Carpet Plumbing services water supply pipes for commercial properties in North Las Vegas, from inspection through repair or replacement.",
    link: { phrase: "commercial properties", href: "/commercial-plumbing/" },
  },
  {
    question: "Do you offer same-day water pipe repair in North Las Vegas?",
    answer:
      "Same-day water pipe repair is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
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
  name: "Water Pipe Repair and Replacement in North Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/",
  description:
    "Red Carpet Plumbing repairs and replaces water pipes throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Leak repair, burst pipe repair, section replacement. Licensed plumbers. Call (702) 567-9172.",
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
      name: "Water Pipe Repair and Replacement in North Las Vegas, NV",
      item: "https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/",
    },
  ],
};

// description is derived strictly from the approved Section 5 service list.
// No service is described that the visible list does not name.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Pipe Repair and Replacement",
  serviceType: "Water Pipe Repair and Replacement",
  description:
    "Red Carpet Plumbing provides burst pipe repair, pinhole leak repair, pipe section replacement, galvanized pipe replacement, polybutylene pipe replacement, main water line repair, and supply line and shut-off valve replacement for homes and businesses in North Las Vegas, NV.",
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
// as distinct h3 headings. Derived from NLV_WATER_PIPE_STEPS for a guaranteed
// match with the visible text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Water Pipe Repair and Replacement",
  step: NLV_WATER_PIPE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_WATER_PIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasWaterPipeRepairReplacementPage() {
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
            {
              label: "Water Pipe Repair and Replacement in North Las Vegas, NV",
            },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Water Pipe Repair and Replacement
              <br className="hidden sm:block" /> in North Las Vegas, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Water Pipe Service",
            href: "/contact/",
          }}
          formSlot={<QuoteFormPlaceholder title="Get Water Pipe Help" />}
          backgroundImage={{
            // Reused from the core /water-pipe-repair-replacement/ page.
            // See the file header TODO on resolution at hero display size.
            src: "/images/services/water-pipe-repair-replacement/hero.webp",
            alt: "Red Carpet Plumbing water pipe repair technician in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER / PROBLEM-SOLUTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Dealing with a Water Pipe Problem in North Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NORTH LAS VEGAS WATER PIPE CONTEXT */}
        {/* The approved paragraph is split only to wrap the existing phrase
            "pinhole leaks" as the leak detection link. No words added,
            removed, or altered. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Pipe Issues Common to North Las Vegas Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                North Las Vegas has a mix of older neighborhoods with galvanized
                or copper supply pipe and newer construction built with PEX. Las
                Vegas Valley&apos;s hard water accelerates corrosion inside
                copper pipe, producing the{" "}
                <Link href="/leak-detection-repair/" className={LINK_CLASS}>
                  pinhole leaks
                </Link>{" "}
                that are one of the most common plumbing calls in North Las
                Vegas. Homes built between roughly 1978 and 1995 may also have
                polybutylene pipe, which can fail without warning. Red Carpet
                Plumbing&apos;s licensed plumbers assess the pipe material and
                condition before recommending a repair or replacement approach.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: REPAIR VS. REPLACEMENT GUIDANCE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Do You Need Pipe Repair or Full Replacement?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {REPAIR_VS_REPLACEMENT_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Pipe Services We Provide in North Las Vegas
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NLV_WATER_PIPE_SERVICES.map((s) => (
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
                    How We Handle Water Pipe Repair and Replacement
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_WATER_PIPE_STEPS.map((step, index) => (
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
                  Water Pipe Problem
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
                  Request Water Pipe Service
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
                Red Carpet Plumbing provides water pipe repair and replacement
                throughout North Las Vegas, NV, including ZIP codes{" "}
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
                Water Pipe Repair FAQs
                <br className="hidden sm:block" /> North Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_WATER_PIPE_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <FaqChevron />
                  </summary>
                  <p className="mt-4 text-base leading-7 text-brand-dark/80">
                    <FaqAnswer faq={faq} />
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
              Have a Water Pipe Problem?
              <br className="hidden sm:block" /> Call Red Carpet Plumbing
            </>
          }
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Water Pipe Service",
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

// Renders a FAQ answer, optionally wrapping one phrase in an internal link.
//
// ASSERTION: the rendered output is the schema string itself. `before`,
// `phrase`, and `after` are slices of `faq.answer` taken at the phrase
// boundary, so `before + phrase + after === faq.answer` holds by construction.
// The visible answer and the FAQPage `acceptedAnswer.text` therefore cannot
// drift apart, no matter how either is later edited. If `phrase` is not found
// the answer renders as plain text rather than dropping content.
function FaqAnswer({ faq }: { faq: Faq }) {
  if (!faq.link) return <>{faq.answer}</>;

  const start = faq.answer.indexOf(faq.link.phrase);
  if (start === -1) return <>{faq.answer}</>;

  const before = faq.answer.slice(0, start);
  const after = faq.answer.slice(start + faq.link.phrase.length);

  return (
    <>
      {before}
      <Link href={faq.link.href} className={LINK_CLASS}>
        {faq.link.phrase}
      </Link>
      {after}
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
