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
// SCHEMA NOTE: Summerlin is a master-planned community spanning both the City of
// Las Vegas and unincorporated Clark County; it is not itself an incorporated
// city. Per the Batch 6 schema normalization, Service.areaServed for
// non-incorporated communities uses Place -> AdministrativeArea (Clark County) ->
// State (Nevada), matching the Paradise and Spring Valley pages. Plain City is
// reserved for incorporated cities (Las Vegas, Henderson, North Las Vegas).
// Provider Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Drain Cleaning in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Professional drain cleaning in Summerlin, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Summerlin homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in Summerlin, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Summerlin homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/drain-cleaning/",
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
const SUMMERLIN_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Summerlin?",
    answer:
      "Las Vegas Valley water carries 17 to 24 grains per gallon of dissolved minerals, approximately 280 parts per million. This is among the hardest municipal water in the United States. Hard water leaves calcium and magnesium deposits inside pipe walls that narrow the pipe, slow water flow, and create rough surfaces that trap grease, soap scum, and debris. This is why Summerlin drains tend to clog faster and more stubbornly than drains in cities with softer water.",
  },
  {
    question: "How do I know if I need professional drain cleaning in Summerlin?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing.",
  },
  {
    question: "Are chemical drain cleaners safe for Summerlin pipes?",
    answer:
      "Chemical drain cleaners can damage pipe linings, especially in older copper or galvanized pipes common in original Summerlin villages. They typically dissolve only part of the clog and do not address mineral buildup or root intrusion. Professional drain cleaning removes the entire blockage and is safer for aging Summerlin pipe systems.",
  },
  {
    question: "What is hydro jetting and when is it needed in Summerlin?",
    answer:
      "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. It is recommended for recurring clogs, main sewer line cleaning, and lines with significant hard water mineral buildup, all common conditions in Summerlin homes. We assess pipe condition before recommending hydro jetting on older village home drain lines.",
  },
  {
    question: "How much does drain cleaning cost in Summerlin?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, and the method required. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question: "Who issues permits for plumbing work in Summerlin?",
    answer:
      "Permit jurisdiction in Summerlin depends on which side of the city boundary the property sits. Summerlin spans both the City of Las Vegas and unincorporated Clark County. Red Carpet Plumbing is licensed for plumbing work throughout Nevada under NV License #0048585A and works within the applicable permit process for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional drain cleaning throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. From slow kitchen drains and bathroom clogs to main sewer line cleaning and hydro jetting, our licensed plumbers clear Summerlin drains completely. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Drain Cleaning and Hydro Jetting",
  "Serving Summerlin and the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Summerlin drains clog (bold label + description). Hard water
// leads per the established pattern.
const SUMMERLIN_DRAIN_CAUSES = [
  {
    label: "Hard water mineral bonding",
    body: "Las Vegas Valley water carries 17 to 24 grains per gallon of dissolved minerals, approximately 280 parts per million. This is among the hardest municipal water in the United States. Calcium and magnesium deposits collect inside pipe walls, narrowing the pipe interior and creating rough surfaces that trap grease, soap scum, and debris. Las Vegas Valley hard water is the primary reason Summerlin drains clog faster and more stubbornly than drains in softer-water cities.",
  },
  {
    label: "Aging copper in original Summerlin villages",
    body: "Homes in The Hills, The Trails, The Arbors, The Canyons, and other villages built during Summerlin's first decade of development are now 25 to 35 years old. Copper drain and supply lines in these homes have experienced decades of hard water mineral exposure. Narrowed pipe interiors in older village homes mean even moderate grease and soap buildup causes slow drains faster than in newer construction.",
  },
  {
    label: "Grease and soap bonding with mineral scale",
    body: "Cooking oils, grease, and soap scum do not dissolve easily in Las Vegas hard water. Instead, they bond with calcium deposits already lining the pipe walls, forming a sticky accumulation that builds faster than in homes with soft water and is more resistant to DIY clearing methods.",
  },
  {
    label: "Tankless water heater households and drain line cleanliness",
    body: "Many Summerlin South homes built in the mid-2000s and newer Summerlin communities installed tankless water heaters. Tankless units are sensitive to restricted flow anywhere in the plumbing system. Clean drain lines and properly maintained supply lines support efficient tankless water heater operation throughout the home.",
  },
  {
    label: "Caliche soil and slab foundation movement",
    body: "Caliche and expansive clay soils beneath Summerlin's slab foundations shift with temperature and seasonal rainfall. Over time, this movement stresses underground drain lines and sewer laterals, contributing to pipe joint separation and root intrusion pathways in established Summerlin neighborhoods.",
  },
];

// Section 4 — drain services (bold label + description). Two items carry an
// inline link to a built core service page.
const SUMMERLIN_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines over time. Las Vegas hard water accelerates this process by bonding with grease to form a thick accumulation inside the pipe walls. We clear kitchen drains completely from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. In Summerlin homes with hard water, soap scum bonds with mineral deposits faster than in softer-water cities. We clear all bathroom drain types and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains in a Summerlin home are slow or backing up at the same time, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting based on the type and location of the blockage. For Summerlin homes with sewer line concerns, see our",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just punching a hole through the clog. Hydro jetting is the most thorough drain cleaning method for Summerlin homes with hard water mineral buildup. We assess pipe condition before recommending hydro jetting on older village home drain lines.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside a drain or sewer line. We identify the type and location of a blockage, confirm the line is fully clear after cleaning, and check for pipe damage, root intrusion, or structural issues. Learn more about our",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and desert dust. We clear floor drains and inspect the line for structural issues.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the clog",
    body: "We gather information about which drains are affected and how long the problem has been present to determine whether the clog is in a branch drain or the main sewer line.",
  },
  {
    name: "Select the right clearing method",
    body: "We match the method to the pipe material and clog type. For older village homes in Summerlin, we assess pipe condition before applying high-pressure methods. Cable machines handle hair and soap clogs. Hydro jetting handles mineral scale and grease buildup where pipes are in suitable condition.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains.",
  },
];

// Section 6 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Summerlin's housing stock, hard water conditions, and original village pipe systems",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Residential drain cleaning service throughout all Summerlin villages and Summerlin South",
  "Hydro jetting available for stubborn or recurring clogs where pipe condition allows",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service schema uses the site-wide service-location pattern
// (areaServed City -> State "Nevada"), overriding the brief's Block 3 variant.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Summerlin, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Summerlin homes. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/summerlin/drain-cleaning/",
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
      name: "Summerlin Plumbing Services",
      item: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Summerlin, NV",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for Summerlin homes and businesses, including kitchen drains, bathroom drains, main sewer line cleaning, hydro jetting, video camera drain inspection, and floor drain cleaning.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Summerlin",
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
  name: "How Drain Cleaning Works in Summerlin",
  description:
    "The process Red Carpet Plumbing follows for drain cleaning service in Summerlin, NV.",
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
  mainEntity: SUMMERLIN_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SummerlinDrainCleaningPage() {
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
              label: "Summerlin Plumbing Services",
              href: "/summerlin-plumbing-services/",
            },
            { label: "Drain Cleaning in Summerlin" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Summerlin, NV"
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
            src: "/images/locations/summerlin/hero.webp",
            alt: "Licensed drain cleaning plumbers serving Summerlin, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Drain Cleaning Services in Summerlin
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Summerlin, Nevada and the Las Vegas Valley. We hold Nevada
                Contractor License #0048585A under the C-1 Plumbing and Heating
                classification and have been serving Summerlin homeowners for over
                40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                We provide complete drain cleaning services in Summerlin,
                including kitchen drain cleaning, bathroom drain clearing, main
                sewer line cleaning, hydro jetting, video camera drain inspection,
                and floor drain cleaning. Our licensed plumbers serve homes
                throughout Summerlin, from the original western villages to the
                newest Summerlin South communities.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                For full-service plumbing in Summerlin, visit our{" "}
                <Link
                  href="/summerlin-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Summerlin plumbing services
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

        {/* SECTION 3: WHY DRAINS CLOG FASTER IN SUMMERLIN */}
        {/* TODO-BATCH-6: when built, link the tankless callout to */}
        {/* /summerlin/water-heater-repair-installation/, and the aging-copper */}
        {/* callout to /summerlin/slab-leak-detection-repair/ and */}
        {/* /summerlin/re-piping/. Rendered as plain text only until then. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Drains Clog Faster in Summerlin Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Summerlin homes share the same hard water supply as the rest
                    of the Las Vegas Valley, and Summerlin&apos;s mix of older
                    village homes and newer premium builds creates specific drain
                    challenges that make professional service a regular need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {SUMMERLIN_DRAIN_CAUSES.map((c) => (
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
                Drain Cleaning Services We Provide in Summerlin
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {SUMMERLIN_DRAIN_SERVICES.map((s) => (
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
                    Our Drain Cleaning Process in Summerlin
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
                Why Summerlin Homeowners Choose Red Carpet Plumbing
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
              </Link>{" "}
              including emergency plumbing, water heater repair, slab leak
              detection, and re-piping. We also serve communities near Summerlin
              including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
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
                Drain Cleaning in Summerlin &mdash; Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SUMMERLIN_DRAIN_FAQS.map((faq) => (
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
          headline={<>Schedule Drain Cleaning<br />in Summerlin Today</>}
          body="Red Carpet Plumbing provides professional drain cleaning throughout Summerlin, NV, including Summerlin North, Summerlin South, The Hills, The Trails, The Arbors, and all Summerlin villages. Call (702) 567-9172 or request service online."
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
