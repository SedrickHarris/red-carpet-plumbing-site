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
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing — license #0048585A, transparent-pricing,
// gas-line scope, commercial scope, and any rating/24-7/40-year claims are
// source-site/project claims. This page uses the conservative wording from the
// approved brief and does NOT assert rating, review count, or "40 years" here.
// The Las Vegas hard-water figure (17 to 24 grains/gallon) and detection/repair
// methods carry forward from the verified core leak detection page.

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~280 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair in Las Vegas, NV. Hidden leaks, slab leaks, wall leaks, and underground lines located with acoustic sensors and electronic detection equipment. No unnecessary demolition. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Professional leak detection in Las Vegas from licensed local plumbers. Hidden leaks located precisely without unnecessary demolition. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/las-vegas/leak-detection-repair/",
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
const LV_LEAK_FAQS = [
  {
    question: "What are the signs of a hidden water leak in a Las Vegas home?",
    answer:
      "The most common signs are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. In Las Vegas, hidden leaks are especially common in older homes due to hard water pipe corrosion and desert soil movement.",
  },
  {
    question: "How do I check if I have a water leak using my meter?",
    answer:
      "Turn off every water fixture and appliance in the home. Find your water meter near the street in a ground-level box and check whether the dial or digital display is still moving. If the meter continues to advance with all water off, water is being used somewhere in your system. Call a plumber for a professional inspection to locate the source.",
  },
  {
    question: "What causes hidden leaks in Las Vegas homes?",
    answer:
      "The most common causes in Las Vegas are hard water mineral corrosion inside copper and galvanized pipes, desert soil movement that stresses underground pipes and slab connections, aging plumbing in homes built before 2000, and tree root intrusion into underground sewer lines. Las Vegas pipes develop leaks faster than in most cities due to the valley's extremely hard water.",
  },
  {
    question: "How does non-invasive leak detection work?",
    answer:
      "Non-invasive leak detection uses acoustic sensors to listen for the sound of pressurized water escaping from pipes through walls, floors, and underground. Electronic detection equipment amplifies these sounds to pinpoint the leak location within a few inches without opening large sections of the home. Thermal imaging can also identify temperature differences caused by water escaping from hot water lines.",
  },
  {
    question: "Can a small hidden leak really cause serious damage?",
    answer:
      "Yes. A small hidden leak inside a wall can cause significant mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign. A slab leak can erode soil beneath the foundation and cause concrete cracking. Even a slow drip from an underground supply line can waste hundreds of gallons per month and create saturated soil conditions that affect the foundation.",
  },
  {
    question: "What is the difference between a slab leak and a wall leak?",
    answer:
      "A slab leak is a leak in water or sewer pipes running beneath the concrete foundation of a home. Signs include warm spots on floors, running water sounds when fixtures are off, and unexplained water bill increases. A wall leak is a leak inside the wall cavity from supply lines, drain lines, or connections behind finished surfaces. Signs include damp spots, discoloration, bubbling paint, and musty odors. Both require professional detection equipment to locate precisely.",
  },
];

// Warning signs (visible list).
const LV_LEAK_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

// Why Las Vegas homes are prone to hidden leaks (bold label + description). Four
// Las Vegas-specific causes. The build brief used " -- " separators; rendered
// with the label and a period per the project no-double-hyphen copy rule.
const LV_LEAK_CAUSES = [
  {
    label: "Hard water mineral corrosion inside pipes",
    body: "Las Vegas water averages 17 to 24 grains of hardness per gallon, making it among the hardest municipal water in the United States. Over years of exposure, calcium and magnesium deposits build up inside copper and galvanized steel pipes, thinning the pipe walls from the inside out. This process, called mineral corrosion, is the primary cause of pinhole leaks in Las Vegas homes, particularly in properties built before 2000 with original copper plumbing. A pipe that looks fine on the outside can have significant internal thinning that eventually leads to a hidden leak.",
  },
  {
    label: "Desert soil movement and slab pressure",
    body: "The Las Vegas Valley sits on caliche and expansive clay soils that shift with temperature changes and seasonal rainfall. This movement puts constant stress on pipes buried beneath slabs and underground. When soil shifts, it can crack pipe walls, separate joints, and stress connections on older pipes, creating leaks that develop gradually before any surface sign appears.",
  },
  {
    label: "Aging plumbing in older Las Vegas neighborhoods",
    body: "Many Las Vegas homes built from the 1970s through the early 1990s still have original plumbing approaching or past expected service life. Galvanized steel pipes corrode from the inside out. Copper pipes in hard water environments develop pinhole leaks as the pipe wall thins. In established Las Vegas neighborhoods, hidden leaks are a common maintenance reality.",
  },
  {
    label: "Tree root intrusion in underground lines",
    body: "Desert-adapted trees and shrubs have aggressive root systems that actively seek moisture. Underground water and sewer lines are reliable moisture sources, and small cracks or aging joints provide root entry points. Root intrusion into underground pipes is a frequent cause of hidden sewer line leaks in Las Vegas properties with established landscaping.",
  },
];

// Detection / repair services (bold label + description). Two items carry an
// inline link to a live core service page (slab leak -> slab-leak-detection-repair;
// video camera referenced in the underground item via related links instead).
const LV_LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Electronic leak detection",
    body: "We use professional electronic detection equipment and acoustic sensors to locate hidden leaks inside walls, beneath floors, and underground with precision that allows targeted repairs without opening large sections of the home.",
  },
  {
    label: "Wall and ceiling leak detection",
    body: "We locate leaks inside wall cavities and ceilings from supply lines, drain lines, and failed connections using acoustic and moisture detection equipment.",
  },
  {
    label: "Slab leak detection",
    body: "Slab leaks occur when pipes beneath a concrete foundation crack or develop pinhole leaks. We locate slab leaks using acoustic sensors, thermal imaging, and pressure testing. Slab leaks are among the most common plumbing problems in Las Vegas due to hard water corrosion and desert soil movement.",
    link: {
      href: "/las-vegas/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
  {
    label: "Underground line leak detection",
    body: "We locate buried water supply, irrigation, and sewer line leaks using electronic detection equipment and pressure testing. For sewer lines, we can confirm the condition of the line with a camera inspection.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Gas line leak detection",
    body: "If you smell gas, leave the building immediately and call your gas utility. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line leaks under NV License #0048585A.",
  },
  {
    label: "Water supply line repair",
    body: "Once a leak is located, we repair or replace the damaged pipe section with targeted repairs that minimize disruption to walls, floors, and foundations.",
  },
  {
    label: "Slab leak repair",
    body: "Repair options include direct access through the concrete, pipe rerouting through walls or ceilings, or epoxy pipe lining. We present the options and the pros and cons before any repair begins.",
  },
  {
    label: "Commercial leak detection",
    body: "We provide leak detection and repair for commercial buildings, retail properties, office buildings, and multi-unit residential properties throughout Las Vegas.",
  },
];

const LEAK_STEPS = [
  {
    name: "Gather information and identify symptoms",
    body: "We ask about the signs you have noticed, review the age and type of plumbing in your home, and identify the most likely leak locations before deploying detection equipment.",
  },
  {
    name: "Perform pressure testing and meter verification",
    body: "We isolate sections of the plumbing system and perform pressure tests to confirm where water loss is occurring. We also verify the water meter reading with all water off to confirm active water loss.",
  },
  {
    name: "Use electronic detection equipment to locate the leak",
    body: "We deploy acoustic sensors, electronic detection equipment, and where appropriate thermal imaging to locate the precise source of the leak. This non-invasive process allows us to identify the leak location within a few inches without opening walls, removing flooring, or excavating unnecessarily.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "Once the leak is located, we explain the repair options, the scope of work, and the cost before starting. We make targeted repairs and retest the affected section before we leave.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company with extensive experience locating hidden leaks caused by hard water corrosion and desert soil conditions",
  "Non-invasive detection equipment that locates leaks precisely without unnecessary demolition",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Residential and commercial leak detection throughout Las Vegas",
];

const LEAK_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Non-Invasive Detection",
  "Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_NEIGHBORHOODS = [
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Downtown Las Vegas",
];

// Related services. /las-vegas/emergency-plumbing/ (Page 1),
// /las-vegas/drain-cleaning/ (Page 4), /las-vegas/water-heater-repair-installation/
// (Page 7), and /las-vegas/slab-leak-detection-repair/ (Page 13) are live.
// ACTIVATED: /las-vegas/slab-leak-detection-repair/ built (P13)
const RELATED_SERVICES = [
  {
    label: "Slab Leak Detection and Repair",
    href: "/las-vegas/slab-leak-detection-repair/",
  },
  { label: "Emergency Plumbing in Las Vegas", href: "/las-vegas/emergency-plumbing/" },
  { label: "Drain Cleaning in Las Vegas", href: "/las-vegas/drain-cleaning/" },
  {
    label: "Water Heater Repair and Installation in Las Vegas",
    href: "/las-vegas/water-heater-repair-installation/",
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair in Las Vegas, NV. Hidden leaks, slab leaks, wall leaks, and underground lines located with acoustic sensors and electronic detection equipment.",
  url: "https://redcarpetplumbing.com/las-vegas/leak-detection-repair/",
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
      name: "Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in Las Vegas",
      item: "https://redcarpetplumbing.com/las-vegas/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Las Vegas",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair for homes and businesses in Las Vegas, NV, using acoustic sensors, electronic detection equipment, and thermal imaging to locate hidden leaks without unnecessary demolition.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema is included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Detects Leaks in Las Vegas",
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
  mainEntity: LV_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasLeakDetectionPage() {
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
              label: "Las Vegas Plumbing Services",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Leak Detection and Repair in Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides professional leak detection and repair for homes and businesses throughout Las Vegas, NV. Las Vegas hard water is among the most corrosive in the country, and hidden leaks are more common here than in most cities. Our licensed plumbers use acoustic sensors, electronic detection equipment, and thermal imaging to locate hidden leaks precisely, without unnecessary demolition. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Non-Invasive Leak Detection Equipment",
            "Serving the Las Vegas Valley",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Non-invasive detection. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Professional leak detection service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LEAK_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for leak detection"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Leak Detection and Repair in Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Professional leak detection uses acoustic sensors, pressure
                testing, and electronic equipment to locate hidden water leaks
                inside walls, beneath floors, underground, and below slab
                foundations without opening large sections of the home. In Las
                Vegas, hard water mineral corrosion inside copper and galvanized
                pipes is the leading cause of hidden leaks, and many homes built
                before 2000 have pipe systems that have been thinning from the
                inside out for decades. When a hidden leak is suspected, the goal
                is to locate it precisely before any repair work begins.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers leak detection specific to Las Vegas. For a
                broader overview, see our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Warning Signs of a Hidden Water Leak in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Warning signs that may indicate a hidden leak in your Las Vegas
                home:
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {LV_LEAK_SIGNS.map((sign) => (
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
              If you notice one or more of these signs, call Red Carpet Plumbing
              at (702) 567-9172. In Las Vegas, hidden leaks often go undetected
              longer than in other cities because hard water damage develops
              slowly inside pipe walls before becoming visible.
            </p>
          </div>
        </section>

        {/* SECTION 5: WHY LAS VEGAS HOMES ARE PRONE TO HIDDEN LEAKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homes Are Prone to Hidden Leaks
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LV_LEAK_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
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

        {/* SECTION 6: LEAK DETECTION SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection Services We Provide in Las Vegas
              </h2>
            </div>
            {/* ACTIVATED: /las-vegas/slab-leak-detection-repair/ built (P13) */}
            <ul className="mt-10 space-y-5">
              {LV_LEAK_SERVICES.map((s) => (
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

        {/* SECTION 7 (mid-page): CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Think You Have a Hidden Leak in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  We locate hidden leaks precisely with non-invasive equipment,
                  without unnecessary demolition. Call Red Carpet Plumbing and we
                  will find the source before any repair begins.
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
                  Request Leak Detection Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: HOW WE DETECT LEAKS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Detect Leaks in Las Vegas
                  </h2>
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

        {/* SECTION 9: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Las Vegas Homeowners Choose
                <br className="hidden sm:block" /> Red Carpet Plumbing for Leak
                Detection
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
          </div>
        </section>

        {/* SECTION 10: NEIGHBORHOODS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Neighborhoods We Serve for Leak Detection
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides leak detection and repair throughout
                Las Vegas, NV, including the Desert Inn and West Sahara corridors,
                Desert Shores, Sunrise Manor, Whitney, Winchester, Southwest Las
                Vegas, Downtown Las Vegas, and surrounding neighborhoods. Older
                Las Vegas neighborhoods built from the 1970s through the early
                1990s carry the highest hidden leak risk due to decades of hard
                water pipe exposure. We also serve the broader Las Vegas Valley
                including Henderson, North Las Vegas, Summerlin, Paradise, Spring
                Valley, and Enterprise.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LV_NEIGHBORHOODS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-left">
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

        {/* SECTION 11: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
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

        {/* SECTION 12: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection FAQs for Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_LEAK_FAQS.map((faq) => (
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

        {/* SECTION 13: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Suspected Hidden Leak<br />in Las Vegas?</>}
          body="Do not let a hidden leak cause growing damage. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide professional leak detection and repair throughout Las Vegas using non-invasive equipment that locates leaks precisely without unnecessary demolition."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Leak Detection Service",
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
