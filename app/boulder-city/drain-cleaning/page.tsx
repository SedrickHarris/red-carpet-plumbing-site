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

// FLAG: VERIFY before publishing — rating (4.8 stars / 76 Google reviews)
// and "Over 40 years" trust claims are source-site claims shown on this page.
// License #0048585A, permit handling, and transparent-pricing are also
// source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Boulder City IS an incorporated city (not an unincorporated
// Clark County community), so Service.areaServed uses City + containedInPlace
// State (Nevada), matching the Henderson and North Las Vegas siblings. Do NOT
// use Place/AdministrativeArea here. No AggregateRating/Review. No sameAs
// Wikidata IDs on this service-location page. No hasCredential. Provider
// Plumber (name, url, telephone). 5 separate JsonLd blocks. HowTo included
// because Section 7 renders the matching visible <ol>.
//
// CONTENT NOTE: The Boulder City drain story leads with galvanized steel drain
// line corrosion — the rough, pitted interior of a 60-to-90-year-old galvanized
// line traps grease and mineral deposits far more aggressively than copper or
// plastic. Hard water mineral bonding from the Lake Mead supply is the second
// factor. This differs from the hard-water-first framing used for newer
// communities.

export const metadata: Metadata = {
  title: "Drain Cleaning in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Boulder City, NV. Galvanized pipe buildup, hard water scale, grease clogs, and main sewer line clearing for historic and newer homes. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/boulder-city/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Boulder City, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in Boulder City from licensed local plumbers. Galvanized drain pipe buildup, hard water mineral scale, grease clogs, and sewer line clearing for historic and newer homes.",
    url: "https://redcarpetplumbing.com/boulder-city/drain-cleaning/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const BC_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Boulder City?",
    answer:
      "Boulder City's historic homes, many built between the 1930s and 1960s, often still have original galvanized steel drain lines. Galvanized steel corrodes from the inside out under hard water conditions, creating a rough, pitted pipe interior that catches and holds grease, soap scum, and mineral deposits far more aggressively than copper or plastic lines. Boulder City also receives hard water from the Lake Mead supply, which carries approximately 280 parts per million of dissolved minerals. The combination of aged, corroded pipe interiors and hard water mineral bonding is why drain clogs in older Boulder City homes are more frequent and more stubborn than in newer construction.",
  },
  {
    question:
      "Is hydro jetting safe for the older drain pipes in Boulder City historic homes?",
    answer:
      "It depends on the condition of the pipe. Hydro jetting is highly effective for clearing mineral scale and grease from lines in good condition. For Boulder City homes with original galvanized drain lines that may be thinned or structurally compromised by decades of corrosion, we assess pipe condition before recommending high-pressure methods. A video camera inspection can help determine whether hydro jetting is the right approach for a specific line.",
  },
  {
    question: "How do I know if I need professional drain cleaning in Boulder City?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing.",
  },
  {
    question: "How often should Boulder City homeowners have their drains cleaned?",
    answer:
      "Most Boulder City homeowners benefit from professional drain cleaning every one to two years. Homes in the historic downtown and original neighborhoods with aging galvanized drain lines and significant hard water mineral buildup may benefit from annual cleaning. Commercial properties with heavy drain use should be cleaned more frequently based on usage and drain condition.",
  },
  {
    question: "Who issues permits for plumbing work in Boulder City?",
    answer:
      "Boulder City is an incorporated city with its own building department. Plumbing permits in Boulder City are processed through the Boulder City Building Department. Red Carpet Plumbing holds Nevada Contractor License #0048585A and works within the Boulder City permit process for projects that require permits.",
  },
  {
    question: "How much does drain cleaning cost in Boulder City?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, and the method required. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional drain cleaning services for homes and businesses in Boulder City, Nevada. From kitchen and bathroom drains to main sewer line clearing and hydro jetting, our licensed plumbers diagnose the source of the problem and clear the blockage completely. Call (702) 567-9172 to schedule service. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 Years Serving Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-Star Rating, 76 Google Reviews",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Boulder City drains clog (bold label + body). Galvanized drain
// line corrosion leads; hard water mineral bonding is second.
const BC_DRAIN_CAUSES = [
  {
    label: "Galvanized steel drain lines in historic homes",
    body: "Homes built in Boulder City from the 1930s through the 1960s were typically plumbed with galvanized steel drain lines. Over 60 to 90 years of hard water exposure, galvanized steel corrodes from the inside out. As corrosion progresses, the pipe interior becomes rough and pitted. This roughened surface catches and holds grease, soap scum, and mineral deposits far more aggressively than smooth copper or plastic lines, making recurring slow drains and blockages significantly more common in historic Boulder City homes than in newer construction anywhere in the valley.",
  },
  {
    label: "Hard water mineral bonding from the Lake Mead supply",
    body: "Boulder City receives water from the Lake Mead supply, which carries approximately 280 parts per million of dissolved minerals and is among the hardest municipal water in the United States. Hard water leaves calcium and magnesium deposits inside drain pipe walls that narrow the pipe interior, slow water flow, and create surfaces that trap grease and debris. In older Boulder City homes where galvanized pipe corrosion has already roughened the interior, hard water mineral deposits accelerate clog formation significantly.",
  },
  {
    label: "Grease and food particles in kitchen drains",
    body: "Grease, cooking oils, and food particles are a primary cause of kitchen drain clogs throughout the Las Vegas Valley. In Boulder City kitchens with older galvanized drain lines, grease bonds to the rough, corroded pipe walls faster and more completely than in newer copper or plastic lines. The result is a dense, hard-to-clear accumulation that resists simple snaking.",
  },
  {
    label: "Root intrusion in aging sewer laterals",
    body: "Boulder City's established residential neighborhoods have mature trees whose root systems can penetrate aging sewer lateral joints over time. Root intrusion causes recurring main sewer line blockages and can damage the line structurally if left unaddressed. A video camera inspection confirms whether root intrusion is the source of a recurring main line backup.",
  },
  {
    label: "Hair and soap scum in bathroom drains",
    body: "Bathroom sink, shower, and tub drains accumulate hair and soap scum in every home. In older Boulder City homes, the rough interior of corroded galvanized drain lines makes this buildup adhere to the pipe walls rather than flushing through, shortening the interval between clogs compared to smoother modern pipe materials.",
  },
];

// Section 4 — drain cleaning services (bold label + body). Two items carry an
// inline link to a live core service page (main sewer -> sewer-line-services;
// video camera -> video-camera-plumbing-inspections). Link connector matches the
// /henderson/drain-cleaning/ sibling pattern (Guardrail 13).
const BC_DRAIN_SERVICES: {
  label: string;
  body: string;
  link: { href: string; text: string } | null;
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines, and Boulder City hard water accelerates the bonding process in aging pipe interiors. We clear kitchen drains completely from the sink trap to the main connection.",
    link: null,
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. In Boulder City's older homes, these materials adhere to corroded galvanized pipe walls more stubbornly than in newer construction. We clear bathroom drains and verify full flow is restored.",
    link: null,
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains are slow or backing up simultaneously, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting matched to the type and location of the blockage. For Boulder City homes with older sewer laterals, a pre-cleaning camera inspection helps confirm pipe condition before selecting the clearing method.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. For Boulder City homes with newer or structurally sound drain lines, hydro jetting provides a thorough and long-lasting result. For historic homes with original galvanized drain lines that may be thinned or structurally compromised by decades of corrosion, we assess pipe condition before recommending high-pressure methods. A video camera inspection can help determine the right approach for an older line.",
    link: null,
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line before and after cleaning. We identify blockage type and location, confirm the line is fully clear after cleaning, and check for root intrusion, pipe damage, or structural issues in the line itself.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and mineral buildup over time. We clear floor drains and inspect the line for structural issues.",
    link: null,
  },
];

// Section 7 — visible <ol>, HowTo schema source.
const BC_DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the source of the clog",
    body: "We start by gathering information about which drains are affected, how long the problem has been present, and whether multiple fixtures are involved. For Boulder City's older homes, we also consider the likely pipe material and age when determining the right diagnostic approach.",
  },
  {
    name: "Select the right clearing method for the pipe and clog type",
    body: "Not every clog requires the same approach. Soft clogs from hair and soap scum respond well to cable machines. Hard mineral scale and grease buildup in main lines benefit from hydro jetting. For Boulder City's older galvanized drain lines, we assess pipe condition before recommending high-pressure methods to avoid stressing compromised pipe walls.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line. For branch drains, we address the specific fixture and verify the line is clear to the main connection.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains. If we used a video camera inspection to identify the clog, we confirm the line is clear on camera before completing the job.",
  },
];

// Section 8 — neighborhood chips (plain text only; no Boulder City sub-area
// routes are built).
const BOULDER_CITY_AREAS = [
  "Historic Downtown Boulder City",
  "King Street Area",
  "Nevada Way Corridor",
  "Veterans Memorial Drive Area",
  "Buchanan Boulevard Area",
  "Newer Boulder City Neighborhoods",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Boulder City IS incorporated, so Service.areaServed uses
// City + containedInPlace State (Nevada). Do NOT use Place/AdministrativeArea.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Boulder City, NV. Galvanized pipe buildup, hard water scale, grease clogs, and main sewer line clearing for historic and newer homes.",
  url: "https://redcarpetplumbing.com/boulder-city/drain-cleaning/",
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
      name: "Boulder City Plumbing Services",
      item: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Boulder City",
      item: "https://redcarpetplumbing.com/boulder-city/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Boulder City, NV",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses in Boulder City, NV, including kitchen and bathroom drains, main sewer line clearing, hydro jetting, and video camera drain inspections.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Boulder City",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Drains in Boulder City",
  description:
    "The process Red Carpet Plumbing follows for drain cleaning in Boulder City, NV.",
  step: BC_DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BC_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BoulderCityDrainCleaningPage() {
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
              label: "Boulder City Plumbing Services",
              href: "/boulder-city-plumbing-services/",
            },
            { label: "Drain Cleaning in Boulder City" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Boulder City, NV"
          subheading={HERO_SUBHEADING}
          trustItems={TRUST_STRIP_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "drain cleaning service in Boulder City, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Professional Drain Cleaning for Boulder City Homes
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Red Carpet Plumbing is a local, family-owned plumbing company
                  providing drain cleaning services throughout Boulder City,
                  Nevada. Boulder City is an incorporated city in Clark County
                  with some of the oldest residential plumbing in the Las Vegas
                  region, and drain problems in historic Boulder City homes often
                  reflect the specific condition of aging galvanized steel drain
                  lines rather than a simple grease clog. Our licensed plumbers
                  diagnose the cause before recommending a solution.
                </p>
                <p>
                  Nevada Contractor License #0048585A covers plumbing work
                  throughout Nevada including Boulder City. For a full range of
                  plumbing services in Boulder City, visit our{" "}
                  <Link
                    href="/boulder-city-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Boulder City plumbing services
                  </Link>{" "}
                  page. For information on our broader drain cleaning coverage
                  across the Las Vegas Valley, see our{" "}
                  <Link
                    href="/drain-cleaning/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    drain cleaning services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY BOULDER CITY DRAINS CLOG */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Drains Clog in Boulder City Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Boulder City&apos;s combination of historic housing stock,
                    aging galvanized drain lines, and hard water from Lake Mead
                    creates drain clog conditions that are more severe than in
                    most other Las Vegas Valley communities.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {BC_DRAIN_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: DRAIN CLEANING SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services for Boulder City Homes
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {BC_DRAIN_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.link ? (
                      <>
                        {" "}
                        Learn more about our{" "}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Recurring Drain Clogs in Boulder City?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water buildup and aging pipe interiors cause drains to
                  clog again and again. Red Carpet Plumbing clears the blockage
                  completely and assesses pipe condition to determine whether a
                  one-time cleaning or a longer-term solution is the right
                  approach for your home.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Drain Cleaning Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY OLDER BOULDER CITY HOMES NEED MORE FREQUENT DRAIN CLEANING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Historic Boulder City Homes Need More Frequent Drain Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Boulder City was established in the early 1930s to house workers
                building Hoover Dam. Many homes in the historic downtown and
                surrounding original neighborhoods were built between the 1930s
                and the 1960s, and a significant number still have original or
                early-replacement galvanized steel drain lines. These pipes have
                been carrying hard water drainage for 60 to 90 years.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  What Happens Inside an Aging Galvanized Drain Line
                </h3>
                <div className="mt-3 space-y-4 text-base leading-7 text-brand-dark/80">
                  <p>
                    Galvanized steel drain pipe corrodes from the inside out. As
                    the zinc coating wears away under repeated exposure to hard
                    water, the steel beneath corrodes and develops a rough, pitted
                    interior surface. Unlike a smooth copper or plastic drain
                    line, this roughened surface creates thousands of small
                    surfaces for grease, soap, and mineral deposits to bond to.
                    The pipe also narrows as corrosion reduces the interior
                    diameter over time. The result is a drain line that clogs
                    faster, clogs more completely, and resists clearing more
                    stubbornly than a newer pipe of the same diameter.
                  </p>
                  <p>
                    For Boulder City homeowners in historic homes, professional
                    drain cleaning every year rather than every two years is often
                    necessary to maintain adequate drainage. When a video camera
                    inspection reveals significant interior corrosion, re-piping
                    the drain lines may be the more practical long-term solution
                    than repeated cleaning.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Hydro Jetting and Pipe Condition in Boulder City
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Hydro jetting is one of the most effective tools for clearing
                  mineral scale and grease buildup from drain and sewer lines.
                  However, high-pressure water can stress pipe walls that have been
                  weakened by decades of corrosion. For Boulder City homes with
                  original galvanized drain lines, we assess pipe condition before
                  recommending hydro jetting. A video camera inspection of the line
                  gives us the information we need to choose the right method for
                  the specific pipe rather than applying the same approach
                  regardless of pipe age and condition.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW WE CLEAN DRAINS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Cleans Drains in Boulder City
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {BC_DRAIN_STEPS.map((step, index) => (
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

        {/* SECTION 8: BOULDER CITY NEIGHBORHOODS WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Boulder City Neighborhoods We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides drain cleaning service throughout
                Boulder City. Call (702) 567-9172 to confirm coverage for your
                address.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {BOULDER_CITY_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For our full range of plumbing services, visit our{" "}
              <Link
                href="/plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                plumbing services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning FAQs for Boulder City Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BC_DRAIN_FAQS.map((faq) => (
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Ready to Schedule Drain Cleaning<br />in Boulder City?</>}
          body="Red Carpet Plumbing provides professional drain cleaning throughout Boulder City and the Las Vegas Valley. We diagnose the cause before recommending a solution. Transparent pricing. No hidden fees."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service Online",
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
