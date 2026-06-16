import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// FLAG: VERIFY before publishing. The "24/7 plumbing support" and
// "transparent pricing, no hidden fees" trust claims are source-site claims
// shown on this page. License #0048585A is a verified business claim. Confirm
// 24/7 availability and transparent pricing before final launch.
// SCHEMA NOTE: Lake Las Vegas is a master-planned community within the
// incorporated City of Henderson, so Service.areaServed uses the Green Valley
// pattern: Place (Lake Las Vegas, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// No AggregateRating schema. FAQPage schema derives from LLV_DRAIN_FAQS and
// HowTo schema from LLV_DRAIN_STEPS (character-for-character with visible text).
// Lake Las Vegas is never described as a city or as unincorporated.

export const metadata: Metadata = {
  title: "Drain Cleaning in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  // FLAG: approved brief description (~205 chars) exceeds the site's ≤160
  // meta-description standard; kept as approved pending a trim decision.
  description:
    "Professional drain cleaning in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing clears kitchen drains, bathroom drains, and main sewer lines for Lake Las Vegas resort residential homes. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/",
  },
  openGraph: {
    title:
      "Drain Cleaning in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed drain cleaning for Lake Las Vegas homes and resort residential properties. Hard water mineral scale, copper pipe buildup, and main sewer line cleaning. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip. FLAG comments retained per established sibling pattern.
const LLV_DRAIN_TRUST = [
  "Nevada Contractor License #0048585A",
  // FLAG: VERIFY source-site claim.
  "24/7 plumbing support available",
  // FLAG: VERIFY source-site claim.
  "Transparent pricing, no hidden fees",
  "Serving Lake Las Vegas and Henderson, NV",
];

// ---------------------------------------------------------------------------
// Local cause factors. Lake Las Vegas is a 2000-2010 resort build era, so the
// pipe story is hard water mineral scale on first-service-cycle copper -- no
// polybutylene or Kitec.
// ---------------------------------------------------------------------------
const LLV_DRAIN_FACTORS = [
  {
    title: "Hard Water Mineral Scale",
    body: "Lake Las Vegas homes are supplied by Lake Mead, which delivers water measuring 17 to 24 grains per gallon. That is considered very hard. Over time, dissolved calcium and magnesium deposits build up inside copper drain lines and slow or block water flow. Homes built between 2000 and 2010 are now 15 to 25 years into their first service cycle, and mineral accumulation is one of the most common causes of drain restriction in the area.",
  },
  {
    title: "Kitchen Grease and Food Debris",
    body: "Cooking grease, food particles, and soap residue accumulate in kitchen drain lines over time. In Lake Las Vegas homes, hard water accelerates this buildup by binding minerals to grease deposits inside the pipe wall. Kitchen drain clogs are among the most frequent service calls in resort and luxury residential communities.",
  },
  {
    title: "Bathroom Soap Scum and Hair",
    body: "Shower drains, bathtub drains, and bathroom sink drains collect soap scum, hair, and personal care product residue. In hard water conditions, soap reacts with dissolved minerals and forms a heavier, stickier residue that clings to pipe walls. Over time, this narrows the drain opening and causes slow drainage or standing water.",
  },
  {
    title: "Main Sewer Line Roots and Sediment",
    body: "Main sewer lines in Lake Las Vegas run through slab foundations and caliche soil. Tree roots, settling soil, and sediment accumulation can partially obstruct exterior sewer lines. If multiple drains in the home are slow at the same time, or if you notice sewer odors, a main sewer line issue may be the cause rather than individual drain clogs.",
  },
];

// Services offered (descriptive list, no per-item links).
const LLV_DRAIN_SERVICES = [
  "Kitchen drain cleaning",
  "Bathroom drain cleaning",
  "Shower and tub drain cleaning",
  "Main sewer line cleaning",
  "Hydro jetting",
  "Video camera drain inspection",
  "Floor drain cleaning",
  "Emergency drain cleaning",
];

// ---------------------------------------------------------------------------
// Process steps -- HowTo schema source of truth. Visible <ol> and howToSchema
// both derive from this array.
// ---------------------------------------------------------------------------
const LLV_DRAIN_STEPS = [
  {
    name: "Call and Schedule Service",
    body: "Contact Red Carpet Plumbing by phone or online request to schedule drain cleaning for your Lake Las Vegas home.",
  },
  {
    name: "Arrival and Initial Inspection",
    body: "A licensed plumber arrives at your property and inspects the affected drain or drains. The plumber identifies the location and likely cause of the clog or restriction.",
  },
  {
    name: "Diagnosis and Explanation",
    body: "The plumber explains what was found and what cleaning method is recommended. For deeper obstructions or recurring clogs, a video camera inspection may be suggested before or during the cleaning.",
  },
  {
    name: "Drain Cleaning",
    body: "The plumber clears the drain using the appropriate method: a cable drain machine for standard clogs, or hydro jetting for heavy buildup, mineral scale accumulation, or main sewer line obstructions. Hard water mineral deposits are common in Lake Las Vegas homes and may require hydro jetting for a thorough cleaning.",
  },
  {
    name: "Final Check and Recommendations",
    body: "The plumber confirms flow is restored and provides recommendations for any follow-up service, such as sewer line inspection or re-piping, if the drain or pipe condition warrants it.",
  },
];

// ---------------------------------------------------------------------------
// FAQ -- FAQPage schema source of truth. Visible accordion and faqSchema both
// derive from this array (character-for-character).
// ---------------------------------------------------------------------------
const LLV_DRAIN_FAQS = [
  {
    q: "Does Red Carpet Plumbing serve Lake Las Vegas?",
    a: "Yes. Red Carpet Plumbing serves Lake Las Vegas as part of its Henderson, NV service area. Lake Las Vegas is a master-planned resort community within the incorporated City of Henderson, and our licensed plumbers provide drain cleaning and other plumbing services throughout the area.",
  },
  {
    q: "What causes drain clogs in Lake Las Vegas homes?",
    a: "The most common cause in Lake Las Vegas is mineral scale buildup from hard water. Lake Las Vegas homes are supplied by Lake Mead, which produces water measuring 17 to 24 grains per gallon. Over time, dissolved minerals deposit inside copper pipes and drain lines, narrowing the flow path. Grease, soap scum, and hair contribute to clogs in kitchen and bathroom drains as well.",
  },
  {
    q: "Is hydro jetting safe for the pipes in my Lake Las Vegas home?",
    a: "Hydro jetting is generally safe for the copper plumbing found in most Lake Las Vegas homes, which were built between 2000 and 2010. A licensed plumber will inspect your pipes before recommending hydro jetting to confirm the lines are in suitable condition. For older or damaged pipes, a cable machine or alternative method may be recommended instead.",
  },
  {
    q: "How do I know if I need drain cleaning or a sewer line inspection?",
    a: "If a single drain is slow or clogged, drain cleaning is usually the right starting point. If multiple drains are slow, you notice sewer odors, or drains back up when you run water elsewhere in the house, a main sewer line problem may be present. In those cases, a video camera inspection can help identify the issue before any cleaning or repair is done.",
  },
  {
    q: "How often should I have my drains cleaned in a Lake Las Vegas home?",
    a: "For most Lake Las Vegas homeowners, having drains professionally cleaned every one to two years is a reasonable maintenance schedule, particularly given the hard water conditions in the area. Kitchen drains and main sewer lines may benefit from more frequent attention depending on usage and prior clog history.",
  },
  {
    q: "Who handles plumbing permits in Lake Las Vegas?",
    a: "Plumbing permits in Lake Las Vegas are issued by the City of Henderson, which is the governing jurisdiction for the Lake Las Vegas community. Red Carpet Plumbing holds Nevada Contractor License #0048585A and works within all applicable City of Henderson permit and inspection requirements.",
  },
];

// ---------------------------------------------------------------------------
// Related-services rerouting cards. The emergency card links to the built
// /lake-las-vegas/emergency-plumbing/ route; sewer and video link to core pages.
// ---------------------------------------------------------------------------
const LLV_DRAIN_REROUTING = [
  {
    title: "Sewer Line Services",
    body: "Recurring or whole-home drain problems often point to a main sewer line issue. Red Carpet Plumbing provides sewer line inspection, cleaning, and repair for Lake Las Vegas and Henderson properties.",
    linkHref: "/sewer-line-services/",
    linkText: "Sewer line services",
  },
  {
    title: "Video Camera Plumbing Inspections",
    body: "A video camera inspection lets our plumbers see inside drain and sewer lines to identify the exact location and cause of a blockage before cleaning or repair begins.",
    linkHref: "/video-camera-plumbing-inspections/",
    linkText: "Video camera plumbing inspections",
  },
  {
    title: "Emergency Plumbing",
    body: "If a drain backup is causing water to overflow or pool in your home, emergency plumbing support is available.",
    // ACTIVATED: /lake-las-vegas/emergency-plumbing/ built (P36)
    linkHref: "/lake-las-vegas/emergency-plumbing/",
    linkText: "Emergency plumbing services",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Lake Las Vegas) -> City (Henderson)
// -> State (Nevada). Do NOT use City for Lake Las Vegas directly. Do NOT use
// AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes in Lake Las Vegas, Henderson, NV. Kitchen drains, bathroom drains, main sewer line cleaning, and hydro jetting for Lake Las Vegas resort residential properties. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
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
      name: "Lake Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Lake Las Vegas",
      item: "https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Lake Las Vegas, Henderson, NV",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and resort residential properties in Lake Las Vegas, Henderson, NV. Services include kitchen drain cleaning, bathroom drain cleaning, main sewer line cleaning, hydro jetting, and video camera drain inspection. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Lake Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 7 renders the matching visible numbered
// process steps.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Drains in Lake Las Vegas",
  description:
    "The drain cleaning process used by Red Carpet Plumbing for Lake Las Vegas, Henderson, NV homes.",
  step: LLV_DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LLV_DRAIN_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function LakeLasVegasDrainCleaningPage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            {
              label: "Lake Las Vegas Plumbing Services",
              href: "/lake-las-vegas-plumbing-services/",
            },
            { label: "Drain Cleaning in Lake Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Lake Las Vegas, Henderson, NV"
          subheading="Professional drain cleaning for homes and resort residential properties in Lake Las Vegas. Serving Lake Las Vegas as part of Henderson, NV."
          trustItems={LLV_DRAIN_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Drain Cleaning Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim -- verify before final launch.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "drain cleaning service in Lake Las Vegas, Henderson, NV",
          }}
        />

        {/* SECTION 2: AEO DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Drain Cleaning Services Are Available in Lake Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides{" "}
                <Link
                  href="/drain-cleaning/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  drain cleaning
                </Link>{" "}
                for homes and resort residential properties throughout Lake Las
                Vegas and Henderson, NV. Services include kitchen drain cleaning,
                bathroom drain cleaning, shower and tub drains, main sewer line
                cleaning, and hydro jetting for mineral scale and heavy buildup.
                Lake Las Vegas homes were primarily built between 2000 and 2010
                and are now in their first major service cycle, with hard water
                mineral deposits from Lake Mead among the most common causes of
                drain restriction. To schedule drain cleaning in Lake Las Vegas,
                call (702) 567-9172 or request service online.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOCAL CAUSE FACTORS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Lake Las Vegas Drains Clog
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LLV_DRAIN_FACTORS.map((f) => (
                    <li
                      key={f.title}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {f.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SERVICES OFFERED */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services for Lake Las Vegas and Henderson Homes
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LLV_DRAIN_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: STEP-BY-STEP PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Drain Cleaning in Lake Las
                    Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LLV_DRAIN_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white"
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

        {/* SECTION 6: SERVICE AREA NOTE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving Lake Las Vegas as Part of Henderson, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Lake Las Vegas is a master-planned resort community within the
                incorporated City of Henderson, Nevada. Plumbing permits for Lake
                Las Vegas properties are issued by the City of Henderson. Red
                Carpet Plumbing serves Lake Las Vegas as part of its broader
                Henderson service area, providing drain cleaning, leak detection,
                water heater service, and other plumbing repairs for homes and
                properties throughout the community. For a full list of services
                available in this area, visit our{" "}
                <Link
                  href="/lake-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Lake Las Vegas plumbing services
                </Link>{" "}
                page or our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Questions for Lake Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LLV_DRAIN_FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <FaqChevron />
                  </summary>
                  <p className="mt-4 text-base leading-7 text-brand-dark/80">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: RELATED SERVICES (rerouting cards) */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in Lake Las Vegas
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LLV_DRAIN_REROUTING.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-brand-dark/80">
                    {card.body}
                  </p>
                  <Link
                    href={card.linkHref}
                    className="mt-4 inline-flex items-center font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    {card.linkText}
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Ready to Clear Your Drains<br />in Lake Las Vegas?</>}
          body="Red Carpet Plumbing provides professional drain cleaning for homes and resort residential properties throughout Lake Las Vegas and Henderson, NV. Call us or request service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Drain Cleaning Service",
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
      className="mt-1 h-5 w-5 flex-none text-brand-primary"
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
