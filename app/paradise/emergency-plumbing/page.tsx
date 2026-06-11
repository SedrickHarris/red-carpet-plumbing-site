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

// FLAG: VERIFY before publishing — source-site / project claims surfaced in the
// approved brief and shown on this page. Each instance carries an inline FLAG:
//   - 24/7 emergency availability (hero trust item + hero sub-label + Step 1 +
//     mid-page CTA + FAQ Q2 + final CTA) — source-site claim
//   - 4.8-star rating, 76 Google reviews — verify before publishing
//   - "Over 40 years" serving the area — verify before publishing
// License #0048585A (C-1 Plumbing and Heating) is the established project value.
// Schema follows the brief: Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City, because Paradise is unincorporated
// Clark County. No AggregateRating. No sameAs.

export const metadata: Metadata = {
  title: "Emergency Plumber in Paradise, NV | Red Carpet Plumbing",
  description:
    "Need an emergency plumber in Paradise, NV? Red Carpet Plumbing provides 24/7 emergency plumbing service near the Las Vegas Strip and throughout Paradise. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumber in Paradise, NV | Red Carpet Plumbing",
    description:
      "24/7 emergency plumbing in Paradise, NV. Burst pipes, sewer backups, water heater failures, and major leaks. Red Carpet Plumbing. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other. FLAG comments live in this source
// only and are NOT part of the visible/schema answer text.
// ---------------------------------------------------------------------------
const PARADISE_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Paradise, NV?",
    answer:
      "Shut off the water supply to the affected area or the main shutoff valve if needed. For a burst pipe, locate the main shutoff near the front of the property or inside a ground-level box near the street. Turn off the water heater if the water supply is off. Do not use any drains or toilets during a sewer backup. If you smell gas, leave the building immediately and call your gas utility before calling us.",
  },
  // FLAG: 24/7 availability claim in this answer — source-site — verify before final launch.
  {
    question: "Is there a 24-hour plumber in Paradise, NV?",
    answer:
      "Red Carpet Plumbing provides 24/7 emergency plumbing service in Paradise, NV. Call (702) 567-9172 at any time for emergency response.",
  },
  {
    question: "Who issues plumbing permits in Paradise, NV?",
    answer:
      "Plumbing permits in Paradise are issued by Clark County, Nevada. Paradise is an unincorporated community within Clark County, so the City of Las Vegas building department does not have jurisdiction over Paradise properties. Red Carpet Plumbing handles permit filing with Clark County for work requiring permits.",
  },
  {
    question:
      "Why are older homes near UNLV at higher risk for plumbing emergencies?",
    answer:
      "Residential neighborhoods near UNLV and along the Tropicana and Flamingo corridors in Paradise include homes built in the 1960s through 1980s. Plumbing systems in these homes are 40 to 60 years old. Decades of exposure to hard Las Vegas Valley water has thinned copper supply lines and accelerated corrosion in older galvanized pipes. Slab leaks, burst pipes, and pin-hole leaks are more common in this housing stock than in newer construction.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle commercial plumbing emergencies near the Las Vegas Strip?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial emergency plumbing for businesses, restaurants, and commercial properties throughout Paradise including the Strip corridor. Our license covers commercial plumbing under Nevada Contractor License #0048585A, C-1 Plumbing and Heating classification.",
  },
  {
    question: "Is a slab leak an emergency in Paradise, NV?",
    answer:
      "A slab leak becomes an emergency when it causes visible water damage, a sudden drop in water pressure, warm or wet spots on the floor, or the sound of running water when all fixtures are off. Early detection prevents major foundation damage. Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Paradise and the Las Vegas Valley.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides 24/7 emergency plumbing service throughout Paradise, NV and the surrounding Las Vegas Valley. Whether you have a burst pipe near the Strip, a sewer backup at a residential property near UNLV, or a water heater failure anywhere in the Paradise area, our licensed plumbers respond promptly. Call us any time.";

const HERO_TRUST_ITEMS = [
  "Licensed: Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: source-site claim (24/7 availability) — verify before final launch.
  "Available 24/7 for plumbing emergencies",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating, 76 Google reviews",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Serving Paradise and the Las Vegas Valley for over 40 years",
];

// FLAG: source-site claim (24/7 availability) — verify before final launch.
const HERO_CTA_NOTE = "Available 24 hours a day, 7 days a week";

// Section 2 — visible <ul>, AEO featured-snippet target.
const EMERGENCY_TYPES = [
  "Burst or ruptured pipe causing active water flow",
  "Sewer backup or sewage overflow inside the building",
  "Gas line odor or suspected gas leak (leave the building, call your gas utility first)",
  "Complete loss of water supply",
  "Water heater failure causing flooding or no hot water",
  "Flooded bathroom, kitchen, or utility area",
  "Major slab leak signs: warm floor areas, running water sounds with all fixtures off, sudden pressure drop",
  "Backed-up main drain line",
];

// Section 5 — emergency services list.
const EMERGENCY_SERVICES = [
  "Burst pipe repair and water shutoff assistance",
  "Sewer backup clearing and sewer line inspection",
  "Emergency water heater repair and replacement",
  "Gas line inspection and repair (leave building and call gas utility for active gas odors first)",
  "Slab leak detection and emergency repair",
  "Emergency drain clearing and main line backup response",
  "Leak detection and emergency pipe repair",
  "Emergency toilet overflow and fixture repair",
  "Emergency shut-off valve replacement",
];

const EMERGENCY_STEPS = [
  // FLAG: 24/7 dispatch claim in this step — verify before final launch.
  {
    name: "Call Us",
    body: "Call (702) 567-9172 any time. Describe the situation. We will confirm your address in Paradise or the surrounding area and dispatch a licensed plumber.",
  },
  {
    name: "Assessment",
    body: "Our plumber arrives and assesses the situation. For burst pipes, we locate the source and shut off water supply as needed. For slab leaks, we use non-invasive detection equipment before any opening of walls or floors.",
  },
  {
    name: "Repair",
    body: "We complete the repair or provide a clear plan if the scope requires additional scheduling. We explain the issue and the repair in plain language before beginning work.",
  },
  // Permit jurisdiction note: Clark County, NV (not City of Las Vegas).
  {
    name: "Follow-Up",
    body: "After the repair, we confirm water pressure is restored, all affected areas are addressed, and you understand any next steps. If a permit is required for the work performed, we handle permit filing with Clark County.",
  },
];

// Section 8 — area chips, no links (established location-page pattern).
const SERVICE_AREAS = [
  "Las Vegas Strip Corridor",
  "UNLV Area",
  "Tropicana Corridor",
  "Flamingo Corridor",
  "Paradise Valley Estates",
  "East Harmon / Harmon Avenue Corridor",
  "Harry Reid Airport Area",
  "Paradise Road Corridor",
  "Swenson Street Corridor",
  "East Sahara Corridor",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (5 separate blocks; areaServed Place -> Clark County per brief).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumber in Paradise, NV | Red Carpet Plumbing",
  description:
    "Need an emergency plumber in Paradise, NV? Red Carpet Plumbing provides 24/7 emergency plumbing service near the Las Vegas Strip and throughout Paradise. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/emergency-plumbing/",
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
      name: "Paradise Plumbing Services",
      item: "https://redcarpetplumbing.com/paradise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Emergency Plumbing in Paradise, NV",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Paradise, NV",
  serviceType: "Emergency Plumbing",
  description:
    "24/7 emergency plumbing service in Paradise, NV. Burst pipes, sewer backups, water heater failures, slab leaks, gas line concerns, and major leaks handled by licensed plumbers.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    // FLAG: VERIFY telephone and address (carried forward from approved brief).
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
      addressCountry: "US",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Paradise",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle an Emergency Plumbing Call in Paradise, NV",
  step: EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARADISE_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParadiseEmergencyPlumbingPage() {
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
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Emergency Plumbing in Paradise, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/locations/paradise/ assets exist yet — using the */}
        {/* established emergency-service hero as the fallback per the image plan. */}
        {/* Swap to a Paradise-specific hero when the client supplies one. */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Paradise, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote={HERO_CTA_NOTE}
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumbing service in Paradise, NV",
          }}
        />

        {/* SECTION 2: WHAT COUNTS AS A PLUMBING EMERGENCY (AEO target) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Counts as a Plumbing Emergency in Paradise, NV?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Not every plumbing issue requires an immediate call, but some
                problems need attention right away to prevent property damage,
                health risk, or service disruption. If you are experiencing any
                of the following, treat it as an emergency and call a licensed
                plumber now.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {EMERGENCY_TYPES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: PLUMBING SERVICE IN PARADISE (jurisdiction context) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Plumbing Service in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Paradise is an unincorporated community in Clark County, Nevada.
                It is geographically adjacent to the City of Las Vegas but
                operates as a separate jurisdiction. Many residents and
                businesses use &quot;Las Vegas&quot; to describe their location,
                but properties with Paradise, NV addresses are served by Clark
                County for permits and code inspections, not the City of Las
                Vegas building department.
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is licensed throughout Nevada including
                Paradise and all unincorporated Clark County communities. Our{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>{" "}
                cover the full Paradise area including the Las Vegas Strip
                corridor, residential neighborhoods near UNLV, properties along
                the Tropicana and Flamingo corridors, and commercial and
                hospitality properties throughout the area. For our full range
                of plumbing services in Paradise, see our{" "}
                <Link
                  href="/paradise-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Paradise plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMMON EMERGENCY PROBLEMS IN PARADISE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Paradise presents a mix of emergency plumbing risks tied to
                    the age of its residential housing stock, the commercial
                    density of the Strip corridor, and the same hard water and
                    soil conditions that affect all Las Vegas Valley plumbing.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Aging Residential Plumbing Near UNLV and Mid-Corridor
                      Neighborhoods
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Residential neighborhoods in Paradise closest to the UNLV
                      campus and running along the Tropicana and Flamingo
                      corridors include homes built in the 1960s, 1970s, and
                      1980s. These properties have plumbing systems 40 to 60
                      years old. Older copper and galvanized supply lines in
                      these areas have thinned from decades of hard water
                      exposure. Burst pipes, pin-hole leaks, and slab leaks are
                      more common in older homes. If you have a sudden pressure
                      loss, discolored water, or unexplained moisture near a
                      slab, contact a licensed plumber. Learn more about{" "}
                      <Link
                        href="/slab-leak-detection-repair/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        slab leak detection and repair
                      </Link>
                      .
                    </p>
                  </article>

                  {/* TODO-BATCH-6: link "commercial plumbing" to /paradise/commercial-plumbing/ when that page is built. */}
                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Strip Corridor and Commercial Properties
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Paradise is home to the Las Vegas Strip and a high
                      concentration of resort, hospitality, restaurant, and
                      commercial properties. High-volume plumbing systems in
                      commercial environments are under sustained stress that
                      residential systems rarely face. Grease accumulation in
                      restaurant drain lines, pressure fluctuations in
                      large-building supply systems, and high-demand water heater
                      failures can all escalate quickly in commercial settings.
                      Red Carpet Plumbing is licensed for{" "}
                      <Link
                        href="/commercial-plumbing/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        commercial plumbing
                      </Link>{" "}
                      under Nevada Contractor License #0048585A, C-1
                      classification.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Hard Water Scale and Pipe Stress
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Las Vegas Valley water carries 17 to 24 grains per gallon
                      of dissolved minerals, approximately 280 ppm. This is among
                      the hardest municipal water in the United States. Mineral
                      scale accumulates inside pipes and water heater tanks over
                      time, accelerating failures. Emergency water heater
                      breakdowns and pipe joint failures in Paradise are
                      frequently linked to scale buildup. Learn more about{" "}
                      <Link
                        href="/water-heater-repair-installation/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        water heater repair and installation
                      </Link>
                      .
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Caliche Soil and Slab Movement
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Caliche and expansive clay soils throughout Clark County
                      shift with temperature changes and rainfall events. This
                      ground movement stresses pipes running through or beneath
                      concrete slabs, and Paradise properties sit on the same
                      soil conditions as the rest of the Las Vegas Valley. Over
                      time, slab movement contributes to both slow slab leaks and
                      sudden pipe failures that require emergency repair.
                    </p>
                  </article>
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: EMERGENCY SERVICES WE PROVIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services We Provide in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles a full range of emergency plumbing
                situations in Paradise. Our licensed plumbers are equipped to
                assess, diagnose, and repair the following:
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EMERGENCY_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
            {/* TODO-BATCH-6: add a "drain cleaning in Paradise" link to */}
            {/* /paradise/drain-cleaning/ here (or in the FAQ) when that page is built. */}
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For{" "}
              <Link
                href="/leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                leak detection and repair
              </Link>{" "}
              or scheduled plumbing service, we also offer non-emergency
              appointments.
            </p>
          </div>
        </section>

        {/* SECTION 6: HOW WE HANDLE AN EMERGENCY (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle an Emergency Plumbing Call in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for an emergency in
                    Paradise, here is what happens.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {EMERGENCY_STEPS.map((step, index) => (
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

        {/* SECTION 7: MID-PAGE EMERGENCY CTA (red band) */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in Paradise, NV?
                </h2>
                {/* FLAG: 24/7 availability claim — source-site — verify before final launch. */}
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing for
                  Paradise homes and businesses near the Strip, near UNLV, and
                  throughout the Paradise area. Licensed plumbers, responsive
                  service, transparent pricing.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-white px-8 text-lg font-semibold text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: AREAS WE SERVE */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Neighborhoods and Areas We Serve in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides emergency plumbing throughout
                Paradise and the surrounding Las Vegas Valley. Service areas
                within Paradise include:
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-white/80">
              If your neighborhood is not listed, call (702) 567-9172 to confirm
              coverage. For broader Las Vegas Valley service, see{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Emergency Plumbing in Paradise,
                NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PARADISE_EMERGENCY_FAQS.map((faq) => (
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
        {/* FLAG: 24/7 availability claim in body — source-site — verify before final launch. */}
        <CTASection
          background="red"
          headline="Ready for Emergency Plumbing Help in Paradise, NV?"
          body="Red Carpet Plumbing is available 24 hours a day for emergency plumbing throughout Paradise and the Las Vegas Valley. Call now or request service online."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
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
