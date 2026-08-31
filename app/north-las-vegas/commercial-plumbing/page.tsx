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
// TWO DISTINCT AVAILABILITY CLAIMS. They are deliberately kept apart and must
// never be blended, reworded to resemble each other, or cross-applied:
//   1. 24/7 emergency response. Unqualified. Scoped to commercial plumbing
//      emergencies only. Confirmed and live on the core /commercial-plumbing/
//      page. Appears in the hero subheading, Section 7, Section 8, FAQ 4.
//   2. Same-day service. Qualified with "subject to scheduling". Company-wide.
//      Appears in FAQ 9 only.
// Do not describe non-emergency same-day work as 24/7, and do not attach
// "subject to scheduling" to the 24/7 claim.
//
// North Las Vegas service-location schema pattern: matches
// /north-las-vegas/sewer-line-services/,
// /north-las-vegas/water-pipe-repair-replacement/, and
// /north-las-vegas/repiping/ (Plumber provider; areaServed City +
// containedInPlace State, plus the ten client-confirmed NLV ZIP codes as
// PostalCodeSpecification nodes; no sameAs, no hasCredential, no
// LocalBusiness, no AggregateRating, no Review; 5 JsonLd blocks in order
// WebPage -> BreadcrumbList -> Service -> HowTo -> FAQPage). HowTo and
// FAQPage derive from the same consts that render visibly, so schema text and
// page text cannot drift apart.
//
// Hero deliberately omits trustItems, matching the sibling NLV pages rather
// than the core /commercial-plumbing/ page, whose trustItems restate
// review-count and years-in-business claims not part of this build's approved
// content.
//
// Hero uses the shared commercial-plumbing hero asset, which the client
// supplied after this page was first built. The same asset is used by the core
// /commercial-plumbing/ page and the Las Vegas, Henderson, Paradise, Spring
// Valley, and Enterprise variants, all of which were wired in the same pass.

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
  title: "Commercial Plumbing in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. 24/7 emergency response. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. 24/7 emergency response. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/",
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
  "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout North Las Vegas, NV. 24/7 emergency response. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const DIRECT_ANSWER_BODY =
  "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, retail properties, and multi-unit buildings throughout North Las Vegas. We work with property managers and business owners to minimize disruption to operations. For a commercial plumbing emergency, call (702) 567-9172 for 24/7 response.";

const TRUST_BODY =
  "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A) rated 4.8 stars. We provide 24/7 emergency response for commercial plumbing situations, transparent pricing with no hidden fees, and permit coordination for applicable commercial projects.";

// Claim 1 of 2: 24/7 emergency response. Unqualified by design. Scoped to
// commercial plumbing emergencies. Section 7 only. See the file header.
const URGENCY_24_7_BODY =
  "Have a commercial plumbing emergency in North Las Vegas? Red Carpet Plumbing provides 24/7 emergency response for burst pipes, sewer backups, water heater failures, and major leaks. Call (702) 567-9172 now.";

// Section 4 audience list.
const NLV_WHO_WE_SERVE = [
  "Property managers overseeing multi-unit residential and mixed-use buildings",
  "Restaurants and commercial kitchens",
  "Retail properties",
  "Office buildings",
  "Warehouses and distribution centers",
  "HOAs and commercial associations",
];

// Section 5 service list. Wording is this build's approved list, which is
// intentionally shorter than the core page's for two entries ("commercial leak
// detection" and "commercial pipe repair", vs. the core page's "... and Repair"
// and "... and Repiping"). The content lock governs: implemented as approved.
const NLV_COMMERCIAL_SERVICES: { label: string; href?: string }[] = [
  { label: "commercial drain cleaning", href: "/drain-cleaning/" },
  { label: "commercial water heater repair and installation" },
  { label: "commercial leak detection" },
  { label: "commercial sewer line services", href: "/sewer-line-services/" },
  {
    label: "backflow prevention and testing",
    href: "/backflow-prevention/",
  },
  { label: "commercial pipe repair" },
  { label: "grease trap and floor drain service" },
  { label: "emergency commercial plumbing", href: "/emergency-plumbing/" },
];

// Section 6 process steps. Drives both the visible numbered list and the HowTo
// schema, so the two cannot drift apart.
const NLV_COMMERCIAL_STEPS = [
  {
    name: "Call and Describe the Job",
    body: "Call (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, and property managers. For emergencies, we respond 24/7.",
  },
  {
    name: "Site Assessment and Diagnosis",
    body: "A licensed plumber assesses the commercial plumbing system, diagnoses the issue, and documents what needs to be addressed.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found and what the repair or installation involves. You approve the full scope before any work begins.",
  },
  {
    name: "Licensed Repair or Installation with Inspection",
    body: "Our licensed plumber completes the work and confirms all connections and systems meet code requirements, coordinating permit inspections when required.",
  },
];

// Section 10 FAQs. Drives both the visible accordion and the FAQPage schema.
// FAQ 4 carries the unqualified 24/7 claim; FAQ 9 carries the qualified
// same-day claim. Neither may be reworded toward the other.
const NLV_COMMERCIAL_FAQS = [
  {
    question: "What does commercial plumbing include?",
    answer:
      "Commercial plumbing covers the installation, repair, and maintenance of plumbing systems in businesses, restaurants, office buildings, multi-unit residential properties, and industrial facilities, including drain systems, water supply lines, water heaters, grease traps, floor drains, backflow prevention devices, and sewer line connections.",
  },
  {
    question:
      "Do I need a licensed plumber for commercial plumbing work in North Las Vegas?",
    answer:
      "Yes. Commercial plumbing work in Nevada must be performed by a licensed contractor. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which covers commercial plumbing repair and installation.",
  },
  {
    question:
      "Does Red Carpet Plumbing work with property managers in North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for property managers overseeing multi-unit residential buildings, mixed-use properties, and commercial facilities in North Las Vegas, from individual unit repairs to shared line maintenance.",
  },
  {
    question: "Do you handle commercial plumbing emergencies in North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency service for commercial plumbing situations including burst pipes, sewer backups, water heater failures, and major leaks. Commercial plumbing emergencies that disrupt business operations require fast, licensed response.",
  },
  {
    question:
      "What are common commercial plumbing problems for North Las Vegas businesses?",
    answer:
      "Common commercial plumbing problems include grease buildup and drain clogs in restaurant kitchens, high-demand water heater failures, backflow preventer issues, aging supply lines in older commercial buildings, and slab leaks in single-story commercial properties.",
  },
  {
    question:
      "Do you service warehouses and distribution centers in North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing services warehouses, distribution centers, and manufacturing facilities along North Las Vegas's industrial corridors, including floor drain maintenance and high-capacity water heater systems.",
  },
  {
    question:
      "Do you provide backflow prevention testing for commercial properties?",
    answer:
      "Yes. Red Carpet Plumbing installs, tests, and repairs backflow prevention devices required for commercial properties and irrigation systems in North Las Vegas.",
  },
  {
    question: "How often should commercial plumbing be inspected?",
    answer:
      "Most commercial plumbing professionals recommend annual inspections. High-traffic facilities such as restaurants and multi-unit buildings may benefit from more frequent inspection of drains, grease traps, water heaters, and backflow prevention devices.",
  },
  {
    question:
      "Do you offer same-day commercial plumbing service in North Las Vegas?",
    answer:
      "Same-day commercial plumbing service is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
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
  name: "Commercial Plumbing in North Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. 24/7 emergency response. Call (702) 567-9172.",
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
      name: "Commercial Plumbing in North Las Vegas, NV",
      item: "https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/",
    },
  ],
};

// description is derived strictly from the approved Section 4 and Section 5
// content. No service or audience is described that the visible page does not
// name.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing",
  serviceType: "Commercial Plumbing",
  description:
    "Red Carpet Plumbing provides commercial drain cleaning, commercial water heater repair and installation, commercial leak detection, commercial sewer line services, backflow prevention and testing, commercial pipe repair, grease trap and floor drain service, and emergency commercial plumbing for property managers, restaurants, retail properties, office buildings, warehouses, and HOAs in North Las Vegas, NV.",
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
// as distinct h3 headings. Derived from NLV_COMMERCIAL_STEPS for a guaranteed
// match with the visible text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Commercial Plumbing in North Las Vegas",
  step: NLV_COMMERCIAL_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasCommercialPlumbingPage() {
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
            { label: "Commercial Plumbing in North Las Vegas, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Commercial Plumbing
              <br className="hidden sm:block" /> in North Las Vegas, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Commercial Plumbing Service",
            href: "/contact/",
          }}
          formSlot={
            <QuoteFormPlaceholder title="Get Commercial Plumbing Help" />
          }
          backgroundImage={{
            src: "/images/services/commercial-plumbing/red-carpet-plumbing-las-vegas-commercial-plumbing-system-hero.webp",
            alt: "Red Carpet Plumbing commercial plumbing in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER / PROBLEM-SOLUTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Need Commercial Plumbing Service in North Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER_BODY}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NORTH LAS VEGAS COMMERCIAL PLUMBING CONTEXT */}
        {/* The approved paragraph is split only to wrap the existing phrase
            "commercial plumbing" in the final sentence as the core commercial
            plumbing link. No words added, removed, or altered. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing Needs Along North Las Vegas&apos;s
                Industrial Corridors
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                North Las Vegas has a significant commercial and industrial base
                along the Interstate 15 corridor, Craig Road, Cheyenne Avenue,
                and the Losee Road area, including warehouses, distribution
                centers, and manufacturing facilities alongside retail and
                office properties. These businesses need licensed commercial
                plumbing service for floor drain maintenance, high-capacity
                water heater systems, backflow prevention, and plumbing
                inspections for lease turnovers and tenant improvements. Red
                Carpet Plumbing holds Nevada Contractor License #0048585A under
                the C-1 Plumbing and Heating classification, covering{" "}
                <Link href="/commercial-plumbing/" className={LINK_CLASS}>
                  commercial plumbing
                </Link>{" "}
                work throughout North Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Who We Serve in North Las Vegas
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NLV_WHO_WE_SERVE.map((audience) => (
                <li key={audience} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {audience}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing Services We Provide in North Las Vegas
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {NLV_COMMERCIAL_SERVICES.map((s) => (
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
                    How We Handle Commercial Plumbing in North Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_COMMERCIAL_STEPS.map((step, index) => (
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
            No new words. Body carries the unqualified 24/7 emergency claim
            only; the qualified same-day claim lives in FAQ 9 and the two are
            never combined. */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need Commercial Plumbing Service?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {URGENCY_24_7_BODY}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Commercial Plumbing Service
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
                Why North Las Vegas Businesses Choose Red Carpet Plumbing
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
                Red Carpet Plumbing provides commercial plumbing services
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
                Commercial Plumbing FAQs
                <br className="hidden sm:block" /> North Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_COMMERCIAL_FAQS.map((faq) => (
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
              Need Commercial Plumbing Service?
              <br className="hidden sm:block" /> Call Red Carpet Plumbing
            </>
          }
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Commercial Plumbing Service",
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
