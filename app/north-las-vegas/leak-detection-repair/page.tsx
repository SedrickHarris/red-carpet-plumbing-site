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

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency service" trust claims, plus license
// #0048585A and transparent-pricing, are source-site claims surfaced in the
// approved brief and shown on this page. Confirm before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed City + containedInPlace State Nevada, no sameAs; WebPage
// isPartOf WebSite; separate JsonLd blocks; HowTo for the visible process steps),
// per the standing guardrail — not the brief's publisher/LocalBusiness/single-
// block/sameAs Q494541 variant.

export const metadata: Metadata = {
  title:
    "Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Professional leak detection and repair in North Las Vegas, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Aliante, central North Las Vegas, and all NLV communities.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection and repair throughout North Las Vegas, NV. Acoustic sensors, pressure testing, and thermal imaging. Aliante and older NLV neighborhoods included.",
    url: "https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/",
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
const NLV_LEAK_FAQS = [
  {
    question:
      "How do I know if I have a hidden water leak in my North Las Vegas home?",
    answer:
      "The most common signs of a hidden water leak in a North Las Vegas home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. If you notice one or more of these signs, a professional leak detection inspection can locate the source.",
  },
  {
    question: "How can I check for a water leak myself in North Las Vegas?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the meter reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "Do galvanized pipes cause leaks in older North Las Vegas homes?",
    answer:
      "Yes. Many homes in central and southern North Las Vegas built from the 1960s through the 1980s were constructed with galvanized steel supply lines. Galvanized steel corrodes from the inside out under hard water conditions, gradually narrowing the pipe interior and developing leak points at joints and fittings as the material deteriorates. After 40 to 60 years of Las Vegas Valley hard water exposure, these lines are often well past their service life. Discolored water, severely reduced pressure, and recurring leaks along the same line are indicators that galvanized pipe replacement should be evaluated.",
  },
  {
    question:
      "What plumbing issues are common in Aliante homes in North Las Vegas?",
    answer:
      "Aliante homes were built primarily between 2000 and 2008, placing them at 16 to 25 years old. These homes are entering the first major plumbing service cycle. Common issues include water heaters reaching the end of their service life under Las Vegas hard water conditions, early signs of mineral corrosion in copper supply lines, aging pressure regulators, and first-generation fixture and fitting wear. A pinhole leak in an Aliante home is often an early indicator of pipe wall thinning that warrants a broader pipe condition assessment.",
  },
  {
    question: "How does non-invasive leak detection work in North Las Vegas?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows the plumber to pinpoint the leak location without opening large sections of the home. Pressure testing confirms which line is losing pressure, and thermal imaging identifies temperature differences caused by hot water leaks. Together these methods locate hidden leaks precisely before any repair begins.",
  },
  {
    question:
      "Can a small hidden leak cause serious damage in my North Las Vegas home?",
    answer:
      "Yes. A small hidden leak inside a wall can promote mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign above the surface. An underground supply line leak can waste hundreds of gallons per month and create soil saturation conditions near the foundation. Early detection and repair limits damage and reduces total repair cost.",
  },
];

const HERO_SUBHEADING =
  "Hidden water leaks in North Las Vegas homes can cause serious damage long before they become visible. Red Carpet Plumbing locates leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Aliante, central North Las Vegas, and all NLV communities.";

// FLAG: VERIFY rating, "40 years," and 24/7 claims before publishing (see top).
const HERO_TRUST_ITEMS = [
  "4.8 stars, 76 Google reviews",
  "NV Licensed #0048585A",
  "Over 40 years serving the Las Vegas Valley",
  "Transparent pricing, no hidden fees",
];

const LEAK_TRUST_STRIP = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  "24/7 Emergency Service",
  "Residential and Commercial",
];

const WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

const DETECTION_METHODS = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This method allows Red Carpet Plumbing to locate leaks precisely through finished surfaces without cutting or demolition.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line is affected. Pressure testing is also used to verify that repairs are complete after work is finished.",
  },
  {
    title: "Thermal Imaging",
    body: "For hot water line leaks, thermal imaging identifies temperature differences on floor and wall surfaces caused by escaping hot water. Thermal imaging narrows the search area before acoustic confirmation and pressure testing pinpoint the location.",
  },
];

const CAUSES_INTRO =
  "North Las Vegas has two distinct housing vintages with different plumbing risk profiles, and both face elevated leak risk from the Las Vegas Valley's hard water conditions and desert soil movement.";

const NLV_LEAK_CAUSES = [
  {
    title: "Galvanized Steel Pipes in Older Central North Las Vegas",
    body: "The central and southern portions of North Las Vegas include neighborhoods built from the 1960s through the 1980s. Many of these homes were built with galvanized steel supply lines. Unlike copper pipe, which develops pinhole leaks as mineral corrosion thins the pipe wall, galvanized steel corrodes from the inside out, gradually narrowing the interior diameter and developing leak points at joints and fittings as the material deteriorates. After 40 to 60 years of exposure to Las Vegas Valley hard water, galvanized steel lines in older North Las Vegas homes are often well past their service life. Discolored water, severely reduced water pressure, and recurring leak points along the same line are common indicators that galvanized supply lines need replacement rather than repeated repair.",
  },
  {
    title: "Aliante and Mid-2000s Homes Entering Their First Service Cycle",
    body: "The Aliante master-planned community and other North Las Vegas neighborhoods developed between 2000 and 2008 now have homes that are 16 to 25 years old. These homes were built with copper supply lines rather than galvanized steel, but they are entering the age range where the first signs of hard water mineral corrosion appear and where original plumbing connections, fittings, and fixtures begin showing wear. A pinhole leak in a 20-year-old copper line in an Aliante home is often an early indicator that the pipe walls have thinned, making a professional assessment of the pipe condition worthwhile alongside the leak repair.",
  },
  {
    title: "Hard Water Mineral Corrosion Throughout North Las Vegas",
    body: "North Las Vegas receives Las Vegas Valley municipal water from Lake Mead, which measures 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This places North Las Vegas among the hardest municipal water supplies in the United States. Sustained hard water exposure accelerates corrosion inside both copper and galvanized pipe walls, thinning them faster than in cities with softer water and contributing to higher rates of pinhole leaks, supply line failures, and fixture connection leaks.",
  },
  {
    title: "Caliche Soil Movement and Closed-Loop Pressure Stress",
    body: "The Las Vegas Valley, including North Las Vegas, sits on caliche and expansive clay soils that shift with temperature changes and rare rainfall events. This soil movement stresses pipes beneath concrete slab foundations throughout North Las Vegas. Most North Las Vegas homes also operate on closed-loop plumbing systems due to backflow preventers at the street meter, which creates repeated pressure spikes from thermal expansion that accelerate pipe fatigue over time.",
  },
];

// Service items. Card 4 (slab) links to the built core slab page.
// TODO-BATCH-5: when /north-las-vegas/slab-leak-detection-repair/ is built,
// switch the slab card link to that location-specific child.
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Electronic Leak Detection",
    body: "Using professional acoustic sensors, we locate hidden leaks in walls, floors, underground supply lines, and slab areas without opening large sections of your home. Electronic detection pinpoints the leak location so repairs are targeted and precise.",
    link: { href: "/leak-detection-repair/", text: "leak detection and repair" },
  },
  {
    label: "Wall and Ceiling Leak Detection",
    body: "Corroded supply lines, failed connection fittings, and leaking drain lines inside wall and ceiling cavities can cause mold and structural damage before any visible surface sign appears. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
  },
  {
    label: "Underground Supply Line Leak Detection",
    body: "Underground supply line leaks increase water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground leaks in both older galvanized and copper supply lines and provide targeted repair or replacement recommendations.",
  },
  {
    label: "Slab Leak Detection",
    body: "Slab leaks are a risk throughout North Las Vegas, particularly in older central neighborhoods and Aliante homes where pipe aging and caliche soil movement combine. Red Carpet Plumbing provides slab leak detection using acoustic sensors, thermal imaging, and pressure testing.",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
  {
    label: "Pressure Testing and Leak Confirmation",
    body: "Pressure testing confirms active water loss in the plumbing system and identifies which line is affected. We also use pressure testing after repairs to verify that the repair is complete and the line holds pressure.",
  },
];

const LEAK_STEPS = [
  {
    name: "Assessment",
    body: "We start with a visual inspection and review of your reported symptoms to understand where the leak may be located and which detection methods are appropriate for your home's pipe type and age.",
  },
  {
    name: "Detection",
    body: "Using acoustic sensors, pressure testing, and thermal imaging where applicable, we locate the leak precisely. For older North Las Vegas homes with galvanized steel lines, we assess the condition of the surrounding pipe as part of the detection process.",
  },
  {
    name: "Repair Options",
    body: "We present the repair options for the specific leak location, pipe type, and condition. For homes with aging galvanized steel or older copper lines, we discuss whether the pipe condition suggests a targeted repair or a more comprehensive approach is appropriate.",
  },
  {
    name: "Repair and Confirmation",
    body: "We complete the approved repair and confirm the system holds pressure after work is finished. We clean up the work area before leaving.",
  },
];

const COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
  { name: "Central North Las Vegas" },
  { name: "Craig Road Corridor" },
  { name: "Cheyenne Avenue Area" },
  { name: "Carey Area" },
  { name: "Simmons Street Corridor" },
  { name: "Losee Road Area" },
  { name: "Downtown North Las Vegas" },
  { name: "Northwest North Las Vegas" },
];

// Related services. All live (Pages 3, 6, 9 of Batch 5).
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing in North Las Vegas",
    href: "/north-las-vegas/emergency-plumbing/",
  },
  {
    label: "Drain Cleaning in North Las Vegas",
    href: "/north-las-vegas/drain-cleaning/",
  },
  {
    label: "Water Heater Repair and Installation in North Las Vegas",
    href: "/north-las-vegas/water-heater-repair-installation/",
  },
  { label: "Slab Leak Detection and Repair", href: "/slab-leak-detection-repair/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (established site-wide shape; see NOTE at top of file).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Professional leak detection and repair in North Las Vegas, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging.",
  url: "https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/",
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in North Las Vegas",
      item: "https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in North Las Vegas",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional non-invasive leak detection and repair for homes and businesses in North Las Vegas, NV, using acoustic sensors, pressure testing, and thermal imaging to locate hidden water leaks and provide targeted repairs.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "North Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Leak Detection in North Las Vegas NV",
  step: LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasLeakDetectionPage() {
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
              label: "North Las Vegas Plumbing",
              href: "/north-las-vegas-plumbing-services/",
            },
            { label: "Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in North Las Vegas, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request a Free Quote",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Non-invasive detection. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Professional leak detection service in North Las Vegas, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why North Las Vegas customers choose Red Carpet Plumbing for leak detection"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEAK_TRUST_STRIP.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 2: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Hidden Water Leak in Your North Las Vegas Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden water leaks inside walls, beneath floors, or underground
                can cause significant damage before any visible sign appears.
                Recognizing the early warning signs helps North Las Vegas
                homeowners act before a small leak becomes a major repair.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-base leading-7 text-brand-dark/80">
              If you notice one or more of these signs in your North Las Vegas
              home, a professional leak detection inspection can locate the
              source before further damage occurs. Call Red Carpet Plumbing at
              (702) 567-9172 or request service online.
            </p>
          </div>
        </section>

        {/* SECTION 3: HOW NON-INVASIVE DETECTION WORKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Leak Detection Works
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a hidden leak does not require opening up large sections
                of wall, floor, or concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods that pinpoint the
                leak location before any repair work begins. For a broader
                overview, see our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair
                </Link>{" "}
                services.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {DETECTION_METHODS.map((m) => (
                <article
                  key={m.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: NLV-SPECIFIC LEAK CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Pipe Leaks Are Common in North Las Vegas, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {CAUSES_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {NLV_LEAK_CAUSES.map((c) => (
                    <li
                      key={c.title}
                      className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                North Las Vegas Leak Detection and Repair Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides comprehensive leak detection and
                repair services throughout North Las Vegas. Our licensed plumbers
                locate the source of hidden leaks precisely before recommending a
                repair approach.
              </p>
            </div>
            {/* TODO-BATCH-5: when /north-las-vegas/slab-leak-detection-repair/ is */}
            {/* built, switch the Slab Leak Detection card link to that child route. */}
            <ul className="mt-10 space-y-5">
              {LEAK_SERVICES.map((s) => (
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

        {/* SECTION 6: PROCESS STEPS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Leak Detection in North Las
                    Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    leak detection service in North Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LEAK_STEPS.map((step, index) => (
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

        {/* SECTION 7: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspected Water Leak in North Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides non-invasive leak detection and
                  repair throughout North Las Vegas, including Aliante, central
                  North Las Vegas, and commercial properties along Craig Road and
                  Cheyenne Avenue. Call or request service online.
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
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: COMMUNITIES SERVED */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                North Las Vegas Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides leak detection and repair throughout
                North Las Vegas and its neighborhoods. For full coverage details,
                see our{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  North Las Vegas plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-white px-5 py-3 font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-white/80">
              Not sure if we serve your North Las Vegas address? Call (702)
              567-9172 to confirm coverage.
            </p>

            <div className="mt-8 text-left">
              <Link
                href="/service-areas/"
                className="inline-flex items-center text-base font-semibold text-white hover:text-white/80"
              >
                Las Vegas Valley service areas
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9 (FAQ) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Leak Detection in North Las
                Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_LEAK_FAQS.map((faq) => (
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
          headline="Leak Detection and Repair Throughout North Las Vegas, NV"
          body="Red Carpet Plumbing provides professional non-invasive leak detection and repair throughout North Las Vegas, including Aliante, central North Las Vegas, and all NLV communities. We locate hidden water leaks precisely before any repair begins."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request a Free Quote",
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
