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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", and the
// 4.8/76 rating are source-site/project claims. Each visible instance carries an
// inline FLAG comment.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. This matches the Enterprise
// emergency sibling and the Spring Valley, Paradise, and Summerlin
// unincorporated pages. No AggregateRating/Review. No sameAs. Provider Plumber
// (name, url, telephone). 5 separate JsonLd blocks.
//
// CONTENT NOTE: The Enterprise drain story is hard water mineral scale in
// 20-to-25-year-old copper drain lines (first-service cycle). There is
// intentionally NO galvanized-pipe language on this page; galvanized supply
// lines are the Spring Valley / older North Las Vegas story, not Enterprise's
// newer construction.

export const metadata: Metadata = {
  title: "Drain Cleaning in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Professional drain cleaning in Enterprise, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Enterprise homes and businesses. Rhodes Ranch, Mountain's Edge, Southwest Las Vegas. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning throughout Enterprise, NV. Kitchen drains, bathroom drains, main sewer lines, hydro jetting. Rhodes Ranch, Mountain's Edge, 215 Beltway. NV #0048585A.",
    url: "https://redcarpetplumbing.com/enterprise/drain-cleaning/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match.
// ---------------------------------------------------------------------------
const ENT_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Enterprise?",
    answer:
      "Las Vegas Valley water carries 17 to 24 grains per gallon of dissolved minerals, approximately 280 parts per million. This is among the hardest municipal water in the United States. Hard water leaves calcium and magnesium deposits inside pipe walls that narrow the pipe, slow water flow, and create rough surfaces that trap grease, soap scum, and debris. Enterprise homes in Rhodes Ranch and Mountain's Edge have been accumulating this mineral scale in their copper drain lines since original construction in the late 1990s and early 2000s. This is the primary reason Enterprise drains clog more frequently and more stubbornly as homes age.",
  },
  {
    question: "Do I need hydro jetting or drain snaking in my Enterprise home?",
    answer:
      "It depends on the type and location of the clog. Drain snaking (cable cleaning) is appropriate for isolated branch drain clogs from hair, soap, and food debris. Hydro jetting is more effective when mineral scale and grease buildup have coated the pipe walls, which is common in Enterprise homes now 20 to 25 years old. Hydro jetting scours the full pipe interior rather than just clearing a path through the clog, providing a longer-lasting result. We assess pipe condition and clog type before recommending the right method.",
  },
  {
    question: "How often should I clean the drains in my Enterprise home?",
    answer:
      "Most Enterprise homeowners benefit from professional drain cleaning every one to two years. Homes with larger households, frequent cooking, or a history of recurring clogs may benefit from annual cleaning. Enterprise homes that have not had professional drain cleaning since original construction are often overdue regardless of whether visible clogs have appeared, because mineral scale buildup accumulates gradually before causing flow problems.",
  },
  {
    question:
      "Can Red Carpet Plumbing clean commercial drains in the Enterprise area?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial drain cleaning for businesses, restaurants, and commercial properties throughout Enterprise and the Southwest Las Vegas area, including floor drain cleaning and main drain line service for commercial parks and warehouse facilities along the 215 Beltway corridor. Call (702) 567-9172 for commercial drain service.",
  },
  {
    question: "What is the difference between drain snaking and hydro jetting?",
    answer:
      "Drain snaking uses a cable machine to break through or pull out a specific clog. It is effective for solid obstructions like hair clogs or localized blockages. Hydro jetting uses high-pressure water to clean the entire interior of the pipe, removing buildup from the walls rather than just clearing the blockage. For recurring clogs or lines with significant mineral or grease buildup, as is common in Enterprise homes now 20 to 25 years old, hydro jetting provides a more thorough and longer-lasting result.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Enterprise, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. Enterprise is an unincorporated Clark County community, and our license covers plumbing work throughout Clark County including Enterprise.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Enterprise, Nevada and the Southwest Las Vegas area. Enterprise homes built in the late 1990s and early 2000s are now 20 to 25 years old, and Las Vegas hard water has been depositing mineral scale inside their copper drain lines since original construction. Our licensed plumbers clear kitchen drains, bathroom drains, main sewer lines, and floor drains using the right method for your pipe condition and clog type. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed Plumbers, #0048585A",
  // FLAG: VERIFY rating before publishing.
  "4.8 Stars, 76 Google Reviews",
  // FLAG: VERIFY "Over 40 years" before publishing.
  "Over 40 Years Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Enterprise drains clog (bold label + body). Five causes; no
// galvanized item (Enterprise is newer copper construction).
const ENTERPRISE_DRAIN_CAUSES = [
  {
    label: "Hard water mineral scale in 20-25 year old copper drain lines",
    body: "Las Vegas municipal water carries 17 to 24 grains per gallon of dissolved calcium and magnesium, approximately 280 parts per million. Over 20 to 25 years, these minerals deposit inside copper drain line walls, narrowing the pipe interior and creating a rough surface that catches and retains grease, soap scum, and debris. Enterprise homes in Rhodes Ranch and Mountain's Edge have been accumulating this mineral scale since original construction. As scale builds up, drain flow slows and clogs form more easily than in newer pipes or pipes regularly maintained with professional cleaning.",
  },
  {
    label: "Grease and soap scum bonding to mineral deposits",
    body: "Kitchen drain clogs in Enterprise homes form when cooking grease and food particles bond to the mineral scale already coating pipe walls. Hard water accelerates this process because mineral deposits give grease a textured surface to adhere to, rather than the smooth interior of a clean pipe. Bathroom drains experience the same effect with soap scum and hair. Once a clog forms on a mineral-coated pipe surface, it tends to recur quickly after clearing unless the underlying scale buildup is also addressed.",
  },
  {
    label: "Aging drain connections and fixture hardware at 20-25 years",
    body: "In homes now 20 to 25 years old, original P-trap connections, drain basket assemblies, and fixture drain fittings are entering the age range where they begin to accumulate deposits at joints and transitions. Partial blockages at these points are often the first signs that a home's drain system is ready for professional attention.",
  },
  {
    label: "Commercial floor drain buildup in the 215 Beltway corridor",
    body: "The 215 Beltway corridor through Enterprise includes a significant concentration of commercial parks, warehouse and distribution facilities, retail developments, and light industrial properties. Floor drains in these facilities accumulate grease, debris, and sediment that can cause drainage failure if not regularly cleared. Hard water mineral deposits compound floor drain buildup in commercial spaces, particularly in facilities with wash-down operations.",
  },
  {
    label: "Tree root intrusion in maturing Enterprise landscaping",
    body: "Enterprise's residential communities were planted 20 to 25 years ago, and maturing tree root systems are now large enough to begin intruding into sewer lateral joints. Root intrusion in main sewer lines causes recurring blockages and, if left unaddressed, can damage the line. A video camera inspection can confirm whether root intrusion is contributing to recurring main drain problems in your Enterprise home.",
  },
];

// Section 4 — drain services (bold label + body). Items 3 and 4 carry an inline
// link to a built core service page.
const DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Cable drain cleaning (snaking)",
    body: "A cable machine breaks through or pulls out solid blockages including hair clogs, soap buildup, and food debris. Cable cleaning is the right method for isolated branch drain clogs in kitchen and bathroom drains.",
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the full interior of drain and sewer lines, removing mineral scale, grease deposits, and debris from pipe walls rather than just clearing a path through the clog. For Enterprise homes with 20-25 years of hard water mineral buildup in copper drain lines, hydro jetting provides a more thorough and longer-lasting result than cable cleaning alone. We assess pipe condition before recommending hydro jetting.",
  },
  {
    label: "Main sewer line cleaning",
    body: "We clear and clean main sewer lines serving Enterprise homes and commercial properties using cable machines and hydro jetting equipment from cleanout access points. See our",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside a drain or sewer line, confirm the type and location of a blockage, verify the line is fully clear after cleaning, and identify root intrusion or structural issues. See our",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "We clean floor drains in garages, utility rooms, laundry areas, and commercial facilities throughout Enterprise, including warehouse and distribution properties along the 215 Beltway corridor.",
  },
  {
    label: "Commercial drain cleaning",
    body: "Red Carpet Plumbing provides commercial drain cleaning for businesses, restaurants, multi-unit properties, and commercial parks throughout Enterprise. Commercial kitchen drain lines, grease traps, and floor drain systems require regular professional cleaning to maintain drainage capacity under daily use.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the clog",
    body: "We gather information about which drains are affected and how long the problem has been present to determine whether the clog is in a branch drain or the main sewer line. For Enterprise homes now 20 to 25 years old, we also note whether hard water mineral scale is likely contributing to recurring clogs.",
  },
  {
    name: "Select the right clearing method",
    body: "We match the method to the pipe material, the clog type, and the pipe condition. Cable machines handle isolated hair and soap clogs. Hydro jetting handles mineral scale and grease buildup in copper drain lines in suitable condition. We assess pipe condition before applying high-pressure methods.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the full line.",
  },
  {
    name: "Verify full flow is restored",
    body: "We run water through the line to confirm full flow is restored and no partial blockage remains before we leave.",
  },
];

// Section 6 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Enterprise's housing stock, hard water conditions, and Rhodes Ranch and Mountain's Edge drain system conditions",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Residential and commercial drain cleaning throughout Enterprise and Southwest Las Vegas",
  "Hydro jetting available for hard water mineral scale in copper drain lines where pipe condition allows",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// Section 6 — related services (built core/sibling routes).
const RELATED_SERVICES = [
  {
    href: "/water-heater-repair-installation/",
    text: "Water heater repair and installation",
  },
  { href: "/leak-detection-repair/", text: "Leak detection and repair" },
  { href: "/enterprise/emergency-plumbing/", text: "Enterprise emergency plumbing" },
];

// Section 7 — coverage area chips (plain text only; no Enterprise sub-area routes
// are built).
const ENTERPRISE_AREAS = [
  "Rhodes Ranch",
  "Mountain's Edge",
  "Southwest Las Vegas",
  "Enterprise 215 Corridor",
  "Southern Highlands Area",
  "Silverado Ranch Area",
  "Inspirada Adjacent",
  "Enterprise Commercial Parks",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Enterprise is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Enterprise, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Enterprise homes and businesses.",
  url: "https://redcarpetplumbing.com/enterprise/drain-cleaning/",
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
      name: "Enterprise Plumbing Services",
      item: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Enterprise, NV",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses in Enterprise, NV, including cable drain cleaning, hydro jetting, main sewer line cleaning, video camera inspection, floor drain cleaning, and commercial drain cleaning.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Enterprise",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 5 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Drain Cleaning in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for drain cleaning in Enterprise, NV.",
  step: DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENT_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseDrainCleaningPage() {
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
              label: "Enterprise Plumbing Services",
              href: "/enterprise-plumbing-services/",
            },
            { label: "Drain Cleaning in Enterprise" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Enterprise, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
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
            alt: "Drain cleaning service in Enterprise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Drain Cleaning Services in Enterprise, NV
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification. We have been serving the Las Vegas
                Valley, including Enterprise and the Southwest Las Vegas area, for
                over 40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Enterprise homes in Rhodes Ranch, Mountain&apos;s Edge, and
                surrounding communities were built primarily in the late 1990s
                and early 2000s. Their copper drain lines are now 20 to 25 years
                old and have accumulated hard water mineral deposits since
                original construction. Las Vegas hard water at 17 to 24 grains per
                gallon creates calcium and magnesium scale inside pipe walls that
                narrows drain capacity and gives grease and soap scum a rough
                surface to bond to. The result is that Enterprise drains clog more
                frequently and more stubbornly than they did in the first years
                after construction. For our full drain cleaning service overview,
                see our{" "}
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
        </section>

        {/* SECTION 3: WHY ENTERPRISE DRAINS CLOG */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Enterprise Drains Clog
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {ENTERPRISE_DRAIN_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services We Provide in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {DRAIN_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.link ? (
                      <>
                        {" "}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        {" "}
                        page.
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: OUR DRAIN CLEANING PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Drain Cleaning Process in Enterprise
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {DRAIN_STEPS.map((step, index) => (
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

        {/* SECTION 6: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners Choose Red Carpet Plumbing for Drain
                Cleaning
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Services
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {RELATED_SERVICES.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt hover:text-brand-primary-hover"
                    >
                      {r.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/enterprise-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Enterprise plumbing services
              </Link>{" "}
              including water heater repair, slab leak detection, re-piping, and
              emergency plumbing. We also serve communities near Enterprise
              including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/henderson-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Henderson plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 7: COVERAGE AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Drain Cleaning Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides drain cleaning throughout Enterprise
                and the Southwest Las Vegas area.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ENTERPRISE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For drain cleaning services across the Las Vegas Valley, see our{" "}
              <Link
                href="/drain-cleaning/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                drain cleaning services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning FAQs for Enterprise Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENT_DRAIN_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Schedule Drain Cleaning<br />in Enterprise Today</>}
          body="Red Carpet Plumbing provides professional drain cleaning throughout Enterprise, NV, including Rhodes Ranch, Mountain's Edge, and the Southwest Las Vegas area. Call (702) 567-9172 or request service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
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
