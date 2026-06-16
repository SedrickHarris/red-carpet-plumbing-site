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
// SCHEMA NOTE: Spring Valley is an unincorporated Clark County community; it is
// not an incorporated city. Per the Batch 6 schema normalization,
// Service.areaServed uses Place -> AdministrativeArea (Clark County) -> State
// (Nevada), matching the Paradise and Summerlin pages. Plain City is reserved
// for incorporated cities (Las Vegas, Henderson, North Las Vegas). Provider
// Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Drain Cleaning in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Professional drain cleaning in Spring Valley, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Spring Valley homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/spring-valley/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in Spring Valley, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Spring Valley homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley/drain-cleaning/",
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
const SV_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Spring Valley?",
    answer:
      "Spring Valley homes face two clog-accelerating conditions. All Spring Valley homes receive Las Vegas Valley water that carries 17 to 24 grains of hardness per gallon, approximately 280 parts per million. This is among the hardest municipal water in the United States, and it causes calcium and magnesium deposits to build up inside pipe walls, narrowing the pipe interior and creating surfaces that trap grease and soap faster than in softer-water cities. Older homes in the Desert Inn and West Sahara corridors built in the 1970s through 1990s face an additional challenge: original galvanized steel drain lines that have been corroding from the inside out for 30 to 50 years, significantly narrowing the pipe interior and producing faster, more stubborn clogs than any other housing vintage in the Las Vegas Valley.",
  },
  {
    question:
      "How do I know if I need professional drain cleaning in Spring Valley?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage that DIY methods have not cleared, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures after using a drain. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing.",
  },
  {
    question: "Are chemical drain cleaners safe for older Spring Valley pipes?",
    answer:
      "Chemical drain cleaners are not recommended for older Spring Valley homes with galvanized steel drain lines. Chemical cleaners can accelerate corrosion in already-degraded galvanized pipe walls, and they typically dissolve only part of the clog rather than addressing the corroded pipe interior that is the underlying cause of recurring clogs. Professional drain cleaning removes the actual blockage and allows a visual assessment of the pipe's condition.",
  },
  {
    question:
      "Is hydro jetting safe for older galvanized drain lines in Spring Valley?",
    answer:
      "Hydro jetting uses high-pressure water that is effective at removing grease, mineral scale, and debris from pipe walls. For older Spring Valley homes with galvanized drain lines that have been corroding for 30 to 50 years, a pipe condition assessment is required before applying full hydro jetting pressure. Heavily corroded galvanized pipe walls may not withstand the full pressure of hydro jetting. Red Carpet Plumbing assesses pipe condition before recommending this method on older Spring Valley drain lines.",
  },
  {
    question: "How much does drain cleaning cost in Spring Valley?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, the method required, and the pipe material. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question: "Who handles plumbing permits in Spring Valley?",
    answer:
      "Spring Valley is an unincorporated community in Clark County, Nevada. Plumbing permits and inspections in Spring Valley are handled through Clark County, not the City of Las Vegas. Red Carpet Plumbing holds NV License #0048585A and works within the applicable Clark County permit process for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional drain cleaning throughout Spring Valley, Nevada, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. From slow kitchen drains and bathroom clogs to main sewer line cleaning and hydro jetting, our licensed plumbers clear Spring Valley drains completely. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Drain Cleaning and Hydro Jetting",
  "Serving Spring Valley and Clark County",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Spring Valley drains clog (bold label + description). Hard
// water leads per the established pattern. The galvanized and caliche items
// reference TODO-BATCH-6 routes (/spring-valley/re-piping/,
// /spring-valley/slab-leak-detection-repair/) as PLAIN TEXT only — no anchors
// until those pages are built.
const SV_DRAIN_CAUSES = [
  {
    label: "Hard water mineral bonding",
    body: "Las Vegas Valley water carries 17 to 24 grains of hardness per gallon, approximately 280 parts per million of dissolved minerals. This is among the hardest municipal water in the United States. Calcium and magnesium deposits collect inside pipe walls, narrowing the pipe interior and creating rough surfaces that trap grease, soap scum, and debris. Hard water is the primary reason all Spring Valley drains clog faster and more stubbornly than drains in softer-water cities.",
  },
  {
    label: "Galvanized steel pipe corrosion in older homes",
    body: "Homes built along the Desert Inn and West Sahara corridors primarily in the 1970s through 1990s were often constructed with galvanized steel drain and supply lines. Unlike copper, galvanized steel corrodes from the inside out. As corrosion builds up on the pipe's interior walls over decades under Las Vegas hard water conditions, the pipe's interior diameter narrows significantly. A galvanized drain line that started at a standard diameter may now have an interior passage half that size or less, clogging with debris that would flow freely through a newer pipe. Spring Valley homes in this corridor with original galvanized drain lines are dealing with a combination of corroded pipe walls and hard water mineral buildup that produces faster, more stubborn clogs than in any other housing vintage in the Las Vegas Valley. Homes experiencing recurring drain problems in the Desert Inn and West Sahara corridor may also benefit from re-piping in Spring Valley.",
  },
  {
    label: "Grease and soap bonding with mineral scale",
    body: "Cooking oils, grease, and soap scum do not dissolve easily in Las Vegas hard water. Instead, they bond with calcium deposits already lining the pipe walls, forming a sticky accumulation that builds faster than in homes with soft water. This effect is compounded in galvanized drain lines where the corroded interior surface provides even more surface area for grease and soap to grip.",
  },
  {
    label: "Caliche soil and slab foundation movement",
    body: "Caliche and expansive clay soils beneath Spring Valley slab foundations shift with temperature changes and seasonal rainfall. Over time, this soil movement stresses underground drain lines and sewer laterals, contributing to pipe joint separation and root intrusion pathways in older Spring Valley neighborhoods. For homes where slab movement may have affected under-slab drain lines, see our slab leak detection in Spring Valley services.",
  },
];

// Section 4 — drain services (bold label + description). Two items carry an
// inline link to a built core service page.
const SV_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines over time. In Spring Valley homes with hard water and older galvanized drain lines, this process is accelerated significantly. We clear kitchen drains completely from the sink trap to the main connection and assess the pipe condition as part of the service.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. In older Spring Valley homes with galvanized drain lines, soap scum bonds with corroded pipe walls faster than in newer construction. We clear all bathroom drain types and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains in a Spring Valley home are slow or backing up at the same time, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting based on the type and location of the blockage. For Spring Valley homes with sewer line concerns, see our",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris completely from the pipe walls rather than just punching a hole through the clog. Hydro jetting is the most thorough drain cleaning method for Spring Valley homes. However, older Spring Valley homes with galvanized drain lines require a pipe condition assessment before high-pressure hydro jetting is applied. Corroded galvanized pipe walls may not withstand the pressure of full hydro jetting. We assess pipe condition before recommending and applying this method on older Spring Valley drain lines.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside a drain or sewer line: the type and location of a blockage, whether the line is fully clear after cleaning, whether galvanized corrosion has significantly narrowed the pipe interior, and whether structural damage or root intrusion is present. Learn more about our",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and desert dust. We clear floor drains and inspect the line for structural issues, including galvanized corrosion in older Spring Valley homes.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const DRAIN_STEPS = [
  {
    name: "Assess the drain, pipe material, and clog",
    body: "We gather information about which drains are affected, how long the problem has been present, and the age of the home's plumbing. For older Desert Inn and West Sahara corridor homes, we assess whether galvanized drain lines are present before selecting a clearing method.",
  },
  {
    name: "Select the right clearing method",
    body: "We match the method to the pipe material and clog type. For older Spring Valley homes with galvanized drain lines, we assess pipe condition and interior diameter before applying high-pressure methods. Cable machines handle hair and soap clogs safely across pipe types. Hydro jetting handles mineral scale and grease buildup where pipes are in suitable condition.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains. For homes where galvanized corrosion has been identified as a contributing factor, we advise on the long-term outlook for the affected lines.",
  },
];

// Section 6 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's older housing stock, Desert Inn and West Sahara corridor galvanized drain lines, and hard water clog conditions",
  "Pipe condition assessment before applying high-pressure methods on older Spring Valley drain lines",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Residential drain cleaning service throughout Spring Valley including the Desert Inn and West Sahara corridors",
  "Hydro jetting available where pipe condition allows",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Spring Valley is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Spring Valley, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Spring Valley homes. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/drain-cleaning/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Spring Valley, NV",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for Spring Valley homes, including kitchen drains, bathroom drains, main sewer line cleaning, hydro jetting, video camera drain inspection, and floor drain cleaning.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Spring Valley",
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
  name: "How Red Carpet Plumbing Cleans Drains in Spring Valley",
  description:
    "The process Red Carpet Plumbing follows for drain cleaning service in Spring Valley, NV.",
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
  mainEntity: SV_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyDrainCleaningPage() {
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
              label: "Spring Valley Plumbing Services",
              href: "/spring-valley-plumbing-services/",
            },
            { label: "Drain Cleaning in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Spring Valley, NV"
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
            alt: "Licensed drain cleaning plumbers serving Spring Valley, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Drain Cleaning Services in Spring Valley
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Spring Valley, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification and have been serving the Las Vegas Valley
                for over 40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Spring Valley is an unincorporated Clark County community, and
                our license covers plumbing work throughout Clark County
                including Spring Valley. We provide complete drain cleaning
                services throughout Spring Valley, including kitchen drain
                cleaning, bathroom drain clearing, main sewer line cleaning,
                hydro jetting, video camera drain inspection, and floor drain
                cleaning.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                For full-service plumbing in Spring Valley, visit our{" "}
                <Link
                  href="/spring-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Spring Valley plumbing services
                </Link>{" "}
                page. For drain cleaning information across the Las Vegas Valley,
                visit our{" "}
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

        {/* SECTION 3: WHY DRAINS CLOG FASTER IN SPRING VALLEY */}
        {/* TODO-BATCH-6: when built, link the galvanized callout to */}
        {/* /spring-valley/re-piping/ and the caliche callout to */}
        {/* /spring-valley/slab-leak-detection-repair/. Rendered as plain text */}
        {/* only until then. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Drains Clog Faster in Spring Valley Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Spring Valley homes face two distinct clog-accelerating
                    conditions depending on the age of the home. Older homes in
                    the Desert Inn and West Sahara corridors have a drain
                    challenge that goes beyond hard water, and all Spring Valley
                    homes face the same Las Vegas Valley hard water conditions
                    that accelerate buildup throughout the plumbing system.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {SV_DRAIN_CAUSES.map((c) => (
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
                Drain Cleaning Services We Provide in Spring Valley
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {SV_DRAIN_SERVICES.map((s) => (
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
                        .
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
                    Our Drain Cleaning Process in Spring Valley
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
                Why Spring Valley Homeowners Choose Red Carpet Plumbing
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
            {/* TODO-BATCH-6: re-piping in Spring Valley renders as PLAIN TEXT */}
            {/* until that route exists. Emergency plumbing, water heater repair, */}
            {/* and leak detection in Spring Valley are built anchors. */}
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              including{" "}
              <Link
                href="/spring-valley/emergency-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                emergency plumbing in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/water-heater-repair-installation/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                water heater repair in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                leak detection in Spring Valley
              </Link>
              , and re-piping in Spring Valley. We also serve communities near
              Spring Valley including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning in Spring Valley &mdash; Frequently Asked
                Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_DRAIN_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-brand-surface-alt p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
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

        {/* SECTION 8: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Schedule Drain Cleaning<br />in Spring Valley Today</>}
          body="Red Carpet Plumbing provides professional drain cleaning throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Call (702) 567-9172 or request service online."
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
