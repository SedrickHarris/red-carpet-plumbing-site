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

// FLAG: VERIFY before publishing. "Emergency plumbing service available" and
// "transparent pricing, no hidden fees" are source-site claims shown on this
// page. License #0048585A is a verified business claim. Gas line scope (FLAG:
// verify gas line scope before publishing) is carried forward from sibling
// emergency pages.
// SCHEMA NOTE: Lake Las Vegas is a master-planned community within the
// incorporated City of Henderson, so Service.areaServed uses the Green Valley
// pattern: Place (Lake Las Vegas, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// No AggregateRating schema. FAQPage schema derives from LLV_EMERGENCY_FAQS and
// HowTo from LLV_EMERGENCY_STEPS (character-for-character with visible text).
// Lake Las Vegas is never described as a city or as unincorporated.

export const metadata: Metadata = {
  title:
    "Emergency Plumbing in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  // FLAG: approved brief description (~215 chars) exceeds the site's ≤160
  // meta-description standard; kept as approved pending a trim decision.
  description:
    "Emergency plumbing service in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing handles burst pipes, slab leaks, sewer backups, and water heater failures for Lake Las Vegas resort residential homes. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/",
  },
  openGraph: {
    title:
      "Emergency Plumbing in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed emergency plumbers serving Lake Las Vegas and Henderson, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip. FLAG comments retained per established sibling pattern.
const LLV_EMERGENCY_TRUST = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: source-site claim -- verify before final launch.
  "Emergency plumbing service available",
  // FLAG: source-site claim -- verify before final launch.
  "Transparent pricing, no hidden fees",
  "Serving Lake Las Vegas and Henderson, NV",
];

// ---------------------------------------------------------------------------
// Emergency scenarios (bold label + body). Slab and water-heater carry inline
// links to built core pages. Gas line carries the verify FLAG. Lake Las Vegas
// is a 2000-2010 copper build era -- the material risk is mineral corrosion,
// not polybutylene or Kitec.
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_SCENARIOS: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Burst pipes and supply line failures",
    body: "Lake Las Vegas homes were primarily built between 2000 and 2010 using copper plumbing. Hard water from Lake Mead, which measures 17 to 24 grains per gallon, corrodes copper pipe walls over time. After 15 to 25 years of mineral exposure, copper supply lines can develop pin-hole leaks or burst suddenly. Shut off the main water supply and call Red Carpet Plumbing at (702) 567-9172 immediately.",
  },
  {
    label: "Slab leaks",
    body: "Slab leaks occur when supply or drain lines running beneath a concrete slab foundation begin to fail. In Lake Las Vegas, hard water mineral corrosion and caliche soil movement beneath the slab are the most common contributing factors. Signs include warm spots on the floor, the sound of running water when all fixtures are off, or an unexplained increase in your water bill.",
    link: {
      pre: " See our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page for details.",
    },
  },
  {
    label: "Sewer line backups",
    body: "Sewage backing up into tubs, drains, or toilets is a health hazard requiring immediate service. Do not use any drains or water fixtures during a sewer backup. In Lake Las Vegas homes, sewer laterals that have not been cleaned or inspected since original construction may accumulate debris and begin backing up as the property ages.",
  },
  {
    label: "Water heater failures",
    body: "An actively leaking water heater, loss of hot water combined with visible damage, or unusual pressure sounds from the tank require prompt attention. Hard water sediment from the Las Vegas Valley supply accelerates tank wear. Lake Las Vegas homes built 2000-2010 may be on their first or second water heater unit.",
    link: {
      pre: " See our ",
      href: "/water-heater-repair-installation/",
      text: "water heater repair and installation",
      post: " page.",
    },
  },
  {
    label: "Gas line emergencies",
    // FLAG: verify gas line scope before publishing.
    body: "If you smell gas in your Lake Las Vegas home, leave the building immediately without operating any light switches or electrical devices. Call your gas utility from outside the building. After the area is declared safe, call Red Carpet Plumbing at (702) 567-9172. Red Carpet Plumbing holds NV License #0048585A, C-1 Plumbing and Heating, which covers gas line work.",
  },
];

// ---------------------------------------------------------------------------
// What to do during a plumbing emergency (bold label + body).
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_WHAT_TO_DO = [
  {
    label: "Shut off the water",
    body: "For a burst pipe, major leak, or overflowing fixture, shut off the water at the nearest fixture shutoff valve or at your home's main supply shutoff. In most Lake Las Vegas homes, the main shutoff valve is located in a ground-level box near the front of the property or near the water meter at the street.",
  },
  {
    label: "If you smell gas, leave immediately",
    body: "Do not use any electrical switches, open flames, or anything that could cause a spark. Leave the building, move away from the property, and call your gas company from a safe location. Call Red Carpet Plumbing after the gas company has assessed the situation.",
  },
  {
    label: "Do not use electricity near standing water",
    body: "If water has entered a room with electrical outlets, panels, or appliances, do not enter or use electrical switches until the power has been shut off at the breaker.",
  },
  {
    label: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 to reach a plumber. Describe what you are experiencing so we can advise you on immediate protective steps while our team responds.",
  },
];

// ---------------------------------------------------------------------------
// Emergency services list. Gas line item carries the verify FLAG.
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_SERVICES = [
  "Burst pipe detection and repair",
  "Copper supply line repair and replacement",
  "Slab leak detection and emergency repair",
  "Sewer backup clearing and sewer line inspection",
  "Water heater emergency repair and replacement",
  "Main water line repair",
  "Pressure regulator assessment and replacement",
  "Supply line failure repair at fixtures and appliances",
  "Fixture leak containment and repair",
  // FLAG: verify gas line scope before publishing.
  "Gas line emergency response (leave building and call gas company first)",
  "Emergency drain clearing and main line backup response",
];

// ---------------------------------------------------------------------------
// Process steps -- HowTo schema source of truth.
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_STEPS = [
  {
    name: "Call and assess",
    body: "Call (702) 567-9172 to reach Red Carpet Plumbing. We gather information about what you are experiencing and advise you on immediate protective steps, including water shutoff and safety precautions, while our team prepares to respond.",
  },
  {
    name: "Diagnose on arrival",
    body: "A licensed plumber arrives at your Lake Las Vegas property, inspects the situation, identifies the source and scope of the problem, and provides a clear assessment and pricing before any repair work begins.",
  },
  {
    name: "Complete the repair",
    body: "We repair the immediate problem, whether that is a burst copper supply line, a slab leak, a sewer backup, a water heater failure, or a pressure regulator issue, and verify the repair is holding before we leave.",
  },
  {
    name: "Follow-up assessment",
    body: "After the repair, we advise you on whether the emergency was an isolated event or a sign of a broader system issue. For Lake Las Vegas homes now 15 to 25 years old, a single supply line failure or water heater emergency can be the first indicator that other original components are approaching end of service life. If a permit is required for the work performed, we handle filing with the City of Henderson.",
  },
];

// ---------------------------------------------------------------------------
// FAQ -- FAQPage schema source of truth.
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_FAQS = [
  {
    question:
      "Does Red Carpet Plumbing serve Lake Las Vegas for emergency plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service in Lake Las Vegas as part of its Henderson, NV service area. Lake Las Vegas is a master-planned resort community within the incorporated City of Henderson. Call (702) 567-9172 for emergency response.",
  },
  {
    question: "What counts as a plumbing emergency in Lake Las Vegas?",
    answer:
      "A plumbing emergency includes any situation that involves active water damage, loss of water supply, sewage backing up into the home, signs of a gas leak, water heater failure causing flooding, or a suspected slab leak with running water sounds or warm floor areas. Issues like slow drains or a dripping faucet can typically wait for a scheduled appointment.",
  },
  {
    question:
      "What should I do first when a pipe bursts in my Lake Las Vegas home?",
    answer:
      "Shut off the water at the main supply valve as quickly as possible. In most Lake Las Vegas homes, the main shutoff valve is located in a ground-level box near the front of the property or near the water meter at the street. Once the water is off, call Red Carpet Plumbing at (702) 567-9172.",
  },
  {
    question:
      "Why are Lake Las Vegas homes at risk for burst pipes and slab leaks?",
    answer:
      "Lake Las Vegas homes were primarily built between 2000 and 2010 using copper plumbing. The Las Vegas Valley water supply from Lake Mead measures 17 to 24 grains per gallon, which is considered very hard. Over 15 to 25 years, dissolved minerals corrode copper pipe walls, thinning them and increasing the risk of pin-hole leaks, burst pipes, and under-slab failures. Caliche soil and slab foundations add additional stress to buried lines.",
  },
  {
    // FLAG: VERIFY 24/7 availability before final launch.
    question: "Is there a 24-hour plumber available in Lake Las Vegas?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service for Lake Las Vegas and the Henderson area. Call (702) 567-9172 to reach a plumber.",
  },
  {
    question:
      "Who issues plumbing permits for emergency repairs in Lake Las Vegas?",
    answer:
      "Plumbing permits for Lake Las Vegas properties are issued by the City of Henderson, which is the governing jurisdiction for the Lake Las Vegas community. Red Carpet Plumbing holds Nevada Contractor License #0048585A and works within City of Henderson permit and inspection requirements.",
  },
];

// ---------------------------------------------------------------------------
// Related-services rerouting cards. All link to built Lake Las Vegas routes
// (drain cleaning, slab leak detection, water heater) — fully activated.
// ---------------------------------------------------------------------------
const LLV_EMERGENCY_REROUTING = [
  {
    title: "Drain Cleaning",
    body: "If a drain backup was the start of the problem, professional drain cleaning can clear the obstruction and help prevent a recurrence. Red Carpet Plumbing provides drain cleaning throughout Lake Las Vegas and Henderson.",
    // ACTIVATED: /lake-las-vegas/drain-cleaning/ built (P35)
    linkHref: "/lake-las-vegas/drain-cleaning/",
    linkText: "Lake Las Vegas drain cleaning",
  },
  {
    title: "Slab Leak Detection and Repair",
    body: "If your emergency involved warm floor areas, running water sounds, or a sudden pressure drop, a slab leak may be the underlying cause. Red Carpet Plumbing provides non-invasive slab leak detection for Lake Las Vegas homes.",
    // ACTIVATED: /lake-las-vegas/slab-leak-detection-repair/ built (P39)
    linkHref: "/lake-las-vegas/slab-leak-detection-repair/",
    linkText: "Slab leak detection and repair",
  },
  {
    title: "Water Heater Repair and Installation",
    body: "If a water heater failure was part of your plumbing emergency, Red Carpet Plumbing provides water heater repair and replacement for Lake Las Vegas and Henderson homes.",
    // ACTIVATED: /lake-las-vegas/water-heater-repair-installation/ built (P37)
    linkHref: "/lake-las-vegas/water-heater-repair-installation/",
    linkText: "Water heater repair and installation",
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
  name: "Emergency Plumbing in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes in Lake Las Vegas, Henderson, NV. Burst pipes, slab leaks, sewer backups, and water heater failures handled by licensed plumbers.",
  url: "https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/",
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
      name: "Emergency Plumbing in Lake Las Vegas",
      item: "https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Lake Las Vegas, Henderson, NV",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and resort residential properties in Lake Las Vegas, Henderson, NV. Burst pipes, slab leaks, sewer backups, water heater failures, and gas line emergencies handled by licensed plumbers. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
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

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Emergency Plumbing Help in Lake Las Vegas",
  description:
    "Steps for reaching Red Carpet Plumbing and resolving a plumbing emergency in Lake Las Vegas, Henderson, NV.",
  step: LLV_EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LLV_EMERGENCY_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function LakeLasVegasEmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing in Lake Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Lake Las Vegas, Henderson, NV"
          subheading="Red Carpet Plumbing provides emergency plumbing service for homes and resort residential properties throughout Lake Las Vegas and Henderson, NV. Burst pipes, slab leaks, sewer backups, and water heater failures handled by licensed plumbers. Call (702) 567-9172 now."
          trustItems={LLV_EMERGENCY_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Serving Lake Las Vegas and Henderson, NV."
          formSlot={
            <QuoteFormPlaceholder title="Get Emergency Plumbing Help" />
          }
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "emergency plumbing service in Lake Las Vegas, Henderson, NV",
          }}
        />

        {/* SECTION 2: AEO DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Is a Plumbing Emergency in Lake Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                A plumbing emergency is any situation that causes active water
                damage, creates a health or safety hazard, or requires immediate
                action to prevent further harm to your home. In Lake Las Vegas,
                common emergencies include burst copper supply lines, slab leaks
                beneath concrete foundations, sewer backups into the home, water
                heater failures with active flooding, and gas line concerns. Red
                Carpet Plumbing provides emergency plumbing service throughout
                Lake Las Vegas and Henderson, NV. For general emergency plumbing
                information, see our{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: EMERGENCY SCENARIOS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Plumbing Emergencies in Lake Las Vegas Homes
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LLV_EMERGENCY_SCENARIOS.map((s) => (
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
                            {s.link.pre}
                            <Link
                              href={s.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {s.link.text}
                            </Link>
                            {s.link.post}
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: WHAT TO DO */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What to Do During a Plumbing Emergency in Lake Las Vegas
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LLV_EMERGENCY_WHAT_TO_DO.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {item.label}.
                    </strong>{" "}
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: EMERGENCY SERVICES LIST */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services for Lake Las Vegas and Henderson
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LLV_EMERGENCY_SERVICES.map((s) => (
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

        {/* SECTION 6: PROCESS STEPS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Responds to a Plumbing Emergency in
                    Lake Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LLV_EMERGENCY_STEPS.map((step, index) => (
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

        {/* SECTION 7: SERVICE AREA NOTE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving Lake Las Vegas as Part of Henderson, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Lake Las Vegas is a master-planned resort community within the
                incorporated City of Henderson, Nevada. Plumbing permits for Lake
                Las Vegas properties, including emergency repair work, are issued
                by the City of Henderson. Red Carpet Plumbing serves Lake Las
                Vegas as part of its broader Henderson service area. For a full
                list of plumbing services available in this area, visit our{" "}
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

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Questions for Lake Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LLV_EMERGENCY_FAQS.map((faq) => (
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

        {/* SECTION 9: RELATED SERVICES (rerouting cards) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in Lake Las Vegas
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LLV_EMERGENCY_REROUTING.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Need Emergency Plumbing Help<br />in Lake Las Vegas?</>}
          body="Red Carpet Plumbing serves Lake Las Vegas and Henderson, NV for emergency plumbing calls. Burst pipes, sewer backups, slab leaks, water heater failures, and major leaks handled by licensed plumbers. Call now or request service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
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
