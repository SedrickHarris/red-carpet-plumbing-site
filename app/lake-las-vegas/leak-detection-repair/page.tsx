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

// FLAG: VERIFY before publishing. "24/7 Emergency Service" and
// "transparent pricing, no hidden fees" are source-site claims shown on this
// page. License #0048585A is a verified business claim.
// SCHEMA NOTE: Lake Las Vegas is a master-planned community within the
// incorporated City of Henderson, so Service.areaServed uses the Green Valley
// pattern: Place (Lake Las Vegas, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// No AggregateRating schema. FAQPage schema derives from LLV_LEAK_FAQS and
// HowTo from LLV_LEAK_STEPS (character-for-character with visible text).
// Non-invasive framing appears in the hero subheading, the trust strip, the
// Section 3 H2, FAQ Q4, and the final CTA (5 placements).
// CONTENT NOTE: Lake Las Vegas homes are 2000-2010 copper only. No galvanized
// or polybutylene pipe risk applies; that older-vintage copy is intentionally
// absent. Lake Las Vegas is never described as a city or as unincorporated.

export const metadata: Metadata = {
  title:
    "Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  // FLAG: approved brief description (~250 chars) exceeds the site's ≤160
  // meta-description standard; kept as approved pending a trim decision.
  description:
    "Non-invasive leak detection and repair in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing locates hidden water leaks using acoustic sensors, pressure testing, and thermal imaging for Lake Las Vegas resort residential homes. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection for Lake Las Vegas homes. Acoustic sensors, pressure testing, thermal imaging. Copper pipe mineral corrosion expertise. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip. FLAG comment retained per established sibling pattern.
const LLV_LEAK_TRUST = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  // FLAG: source-site claim -- verify before final launch.
  "24/7 Emergency Service",
  "Serving Lake Las Vegas and Henderson",
];

// Section 2 -- visible <ul> warning signs.
const LLV_LEAK_WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

// ---------------------------------------------------------------------------
// Non-invasive detection methods (Section 3). Three titled cards.
// ---------------------------------------------------------------------------
const LLV_LEAK_METHODS = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This method allows Red Carpet Plumbing to locate leaks precisely through finished surfaces without cutting or demolition. In Lake Las Vegas homes with copper plumbing in slab and wall chases, acoustic detection identifies the exact leak point before any repair discussion begins.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line it is on. For Lake Las Vegas homes with multiple zones or closed-loop systems, pressure testing provides a clear confirmation of the leak before acoustic detection narrows the location.",
  },
  {
    title: "Thermal Imaging",
    body: "Thermal imaging cameras identify temperature differences caused by water escaping from hot water lines beneath slabs or inside walls. This method is particularly useful for detecting slow leaks on hot water supply lines where temperature contrast can be measured through flooring or wall surfaces without any physical intrusion.",
  },
];

// ---------------------------------------------------------------------------
// Cause factors (Section 4). Copper mineral corrosion leads; the 2000-2010 era
// has no galvanized/polybutylene risk, stated explicitly.
// ---------------------------------------------------------------------------
const LLV_LEAK_CAUSES = [
  {
    title: "Copper Pipe Mineral Corrosion",
    body: "Lake Las Vegas homes were built between 2000 and 2010 using copper plumbing. Unlike older Las Vegas Valley communities, there is no galvanized steel or polybutylene pipe risk in this era. What is present is 15 to 25 years of exposure to Lake Mead hard water measuring 17 to 24 grains per gallon. Dissolved calcium and magnesium deposit inside copper pipe walls over time, thinning them gradually until pinhole leaks develop. Homes now in their first major service cycle are at the peak age for this type of leak.",
  },
  {
    title: "Caliche Soil and Slab Foundation Movement",
    body: "The Las Vegas Valley, including Lake Las Vegas, sits on caliche and expansive clay soils that shift with seasonal temperature changes and occasional rainfall. This soil movement places ongoing mechanical stress on copper pipes running beneath concrete slab foundations, creating friction points where pipe contacts concrete or rebar and stressing joints and fittings. Slab-adjacent and underground copper leaks in Lake Las Vegas homes are often caused by a combination of hard water corrosion thinning the pipe wall and soil movement applying external stress at the same location.",
  },
  {
    title: "Closed-Loop System Pressure Cycling",
    body: "Most Lake Las Vegas homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When water is heated, thermal expansion creates pressure increases in the closed system that stress pipe walls, joints, and fixture connections. Repeated pressure cycling over years accelerates fatigue in copper pipes already thinned by mineral corrosion, contributing to hidden leaks at connections, elbows, and straight pipe runs.",
  },
];

// ---------------------------------------------------------------------------
// Leak detection services (Section 5). Two items carry inline links to built
// core pages, rendered with the established "Learn more about our X" connector.
// ---------------------------------------------------------------------------
const LLV_LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Electronic Leak Detection",
    body: "Using professional acoustic sensors, we locate hidden leaks in walls, floors, underground supply lines, and slab areas without opening large sections of your home. Electronic detection pinpoints the leak location so repairs are targeted and precise.",
    link: {
      href: "/leak-detection-repair/",
      text: "leak detection and repair services",
    },
  },
  {
    label: "Wall and Ceiling Leak Detection",
    body: "Corroded copper supply lines and failed connection fittings inside wall and ceiling cavities can cause mold and structural damage before any visible surface sign appears. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
  },
  {
    label: "Underground Supply Line Leak Detection",
    body: "Underground supply line leaks raise water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground leaks beneath slabs and in the yard supply run, then provide targeted repair or pipe replacement recommendations.",
  },
  {
    label: "Slab Leak Detection",
    body: "Slab leaks occur when supply or drain lines running beneath the concrete foundation develop failures. In Lake Las Vegas, hard water mineral corrosion and caliche soil movement are the most common contributing factors. We provide slab leak detection using acoustic sensors, thermal imaging, and pressure testing.",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
  {
    label: "Pressure Testing and Leak Confirmation",
    body: "Pressure testing confirms active water loss in the plumbing system and identifies which line is affected. We also use pressure testing after repairs to verify the system holds pressure and the repair is complete.",
  },
];

// ---------------------------------------------------------------------------
// Process steps -- HowTo schema source of truth.
// ---------------------------------------------------------------------------
const LLV_LEAK_STEPS = [
  {
    name: "Assessment",
    body: "We start with a visual inspection and a review of your reported symptoms to understand where the leak may be located and which detection methods are appropriate for your Lake Las Vegas home. We note the property's build era and pipe material context before selecting the detection approach.",
  },
  {
    name: "Detection",
    body: "Using acoustic sensors, pressure testing, and thermal imaging where applicable, we locate the leak precisely. We identify the affected line and the exact location before any repair work is discussed.",
  },
  {
    name: "Repair Options",
    body: "We present the repair options for the specific leak location, pipe type, and condition. For Lake Las Vegas homes where the surrounding copper pipe has been exposed to hard water for 15 to 25 years, we discuss whether the pipe condition near the leak suggests a targeted repair or a more comprehensive approach is appropriate.",
  },
  {
    name: "Repair and Confirmation",
    body: "We complete the approved repair and pressure-test the system to confirm it is holding before we leave. We clean up the work area and advise you on any follow-up steps, including whether the pipe condition warrants scheduling a broader inspection.",
  },
];

// ---------------------------------------------------------------------------
// FAQ -- FAQPage schema source of truth.
// ---------------------------------------------------------------------------
const LLV_LEAK_FAQS = [
  {
    question:
      "How do I know if I have a hidden water leak in my Lake Las Vegas home?",
    answer:
      "The most common signs of a hidden water leak in a Lake Las Vegas home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint on walls or ceilings, a persistent musty odor in part of the home, reduced water pressure with no other explanation, and unexplained cracks in walls or flooring. If you notice one or more of these signs, a professional leak detection inspection can locate the source.",
  },
  {
    question:
      "How can I check for a water leak using my meter in Lake Las Vegas?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes hidden pipe leaks in Lake Las Vegas homes?",
    answer:
      "The most common cause in Lake Las Vegas is mineral corrosion inside copper supply lines from hard water. Lake Las Vegas homes were built between 2000 and 2010 using copper plumbing, and the Las Vegas Valley water supply from Lake Mead measures 17 to 24 grains per gallon. Over 15 to 25 years, dissolved minerals corrode copper pipe walls from the inside, thinning them until pinhole leaks develop. Caliche soil movement beneath slab foundations adds mechanical stress to buried copper lines. Unlike older Las Vegas Valley communities, Lake Las Vegas homes do not have galvanized steel or polybutylene pipe.",
  },
  {
    question:
      "What is non-invasive leak detection and why does it matter for Lake Las Vegas homes?",
    answer:
      "Non-invasive leak detection uses acoustic sensors, thermal imaging, and pressure testing to locate a hidden leak without opening walls, cutting into slabs, or removing flooring until the exact leak location is confirmed. This approach is particularly important for Lake Las Vegas resort residential homes where unnecessary demolition is disruptive and costly. Red Carpet Plumbing locates the leak precisely first, then discusses repair options before any work begins.",
  },
  {
    question:
      "Can a small hidden leak in my Lake Las Vegas home cause serious damage?",
    answer:
      "Yes. A small hidden leak inside a wall can promote mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible surface sign. An underground supply line leak can waste hundreds of gallons per month and create soil saturation conditions near the foundation. Early detection and repair limits damage and reduces total repair cost.",
  },
  {
    question: "Does Red Carpet Plumbing serve Lake Las Vegas for leak detection?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair for homes throughout Lake Las Vegas as part of its Henderson, NV service area. Lake Las Vegas is a master-planned resort community within the incorporated City of Henderson. Call (702) 567-9172 to schedule a leak detection inspection.",
  },
];

// ---------------------------------------------------------------------------
// Related-services rerouting cards. All link to built Lake Las Vegas routes
// (emergency, slab leak detection, drain cleaning) — fully activated.
// ---------------------------------------------------------------------------
const LLV_LEAK_REROUTING = [
  {
    title: "Emergency Plumbing",
    body: "If an active leak is causing water damage or you need immediate response, emergency plumbing support is available for Lake Las Vegas and Henderson homes.",
    // ACTIVATED: /lake-las-vegas/emergency-plumbing/ built (P36)
    linkHref: "/lake-las-vegas/emergency-plumbing/",
    linkText: "Lake Las Vegas emergency plumbing",
  },
  {
    title: "Slab Leak Detection and Repair",
    body: "If detection confirms a leak beneath your slab foundation, Red Carpet Plumbing provides full slab leak repair options including spot repair, pipe rerouting, and epoxy lining for Lake Las Vegas homes.",
    // ACTIVATED: /lake-las-vegas/slab-leak-detection-repair/ built (P39)
    linkHref: "/lake-las-vegas/slab-leak-detection-repair/",
    linkText: "Slab leak detection and repair",
  },
  {
    title: "Drain Cleaning",
    body: "If your investigation reveals drain line issues alongside supply line leaks, Red Carpet Plumbing provides professional drain cleaning throughout Lake Las Vegas and Henderson.",
    // ACTIVATED: /lake-las-vegas/drain-cleaning/ built (P35)
    linkHref: "/lake-las-vegas/drain-cleaning/",
    linkText: "Lake Las Vegas drain cleaning",
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
  name: "Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  description:
    "Non-invasive leak detection and repair for homes in Lake Las Vegas, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate hidden leaks without demolition. Licensed plumbers. Nevada Contractor License #0048585A.",
  url: "https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/",
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
      name: "Leak Detection and Repair in Lake Las Vegas",
      item: "https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Lake Las Vegas, Henderson, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Non-invasive leak detection and repair for homes in Lake Las Vegas, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate hidden water leaks without demolition. Wall leaks, underground supply line leaks, and slab-adjacent leaks. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
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
  name: "How Red Carpet Plumbing Handles a Leak Detection Call in Lake Las Vegas",
  description:
    "The leak detection and repair process used by Red Carpet Plumbing for Lake Las Vegas, Henderson, NV homes.",
  step: LLV_LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LLV_LEAK_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function LakeLasVegasLeakDetectionPage() {
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
            { label: "Leak Detection and Repair in Lake Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Lake Las Vegas, Henderson, NV"
          subheading="Hidden water leaks in Lake Las Vegas homes can cause serious damage before they become visible. Red Carpet Plumbing locates leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, without opening walls or floors until the exact location is confirmed. Serving Lake Las Vegas as part of Henderson, NV. Call (702) 567-9172."
          trustItems={LLV_LEAK_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Leak Detection Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Non-invasive detection. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "leak detection and repair in Lake Las Vegas, Henderson, NV",
          }}
        />

        {/* SECTION 2: AEO DIRECT ANSWER + WARNING SIGNS + METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Do You Know If You Have a Hidden Leak in Lake Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden water leaks often go undetected for weeks or months
                because they develop inside walls, beneath concrete slabs, or
                underground where no surface sign is visible. The most reliable
                early indicators are a rising water bill with no change in usage,
                the sound of running water when all fixtures are off, and warm or
                wet spots on floors or walls. If you notice any of these in your
                Lake Las Vegas home, a professional leak detection inspection can
                confirm whether a leak is present and locate it precisely. For
                general information, see our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair services
                </Link>{" "}
                page.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Common Warning Signs of a Hidden Leak in Lake Las Vegas
              </h3>
              <div className="mt-4 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
                <ul className="space-y-3">
                  {LLV_LEAK_WARNING_SIGNS.map((sign) => (
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
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                How to Check for a Water Leak Using Your Meter in Lake Las Vegas
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off all water fixtures and appliances in your home. Locate
                your water meter at the street and record the reading. Do not use
                any water for 30 minutes, then check the meter again. If the
                reading has changed, water is being used somewhere in your system,
                which indicates an active leak. This test confirms a leak is
                present but does not locate it. Call Red Carpet Plumbing at (702)
                567-9172 for a professional inspection to find the source.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Non-Invasive Leak Detection Methods Used in Lake Las Vegas Homes
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LLV_LEAK_METHODS.map((m) => (
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

        {/* SECTION 4: CAUSE FACTORS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Hidden Pipe Leaks in Lake Las Vegas Homes?
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LLV_LEAK_CAUSES.map((c) => (
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

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection and Repair Services for Lake Las Vegas and
                Henderson Homes
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LLV_LEAK_SERVICES.map((s) => (
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
                    How Red Carpet Plumbing Handles a Leak Detection Call in Lake
                    Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LLV_LEAK_STEPS.map((step, index) => (
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
                incorporated City of Henderson, Nevada. Plumbing work in Lake Las
                Vegas, including leak detection and repair, falls under City of
                Henderson permit jurisdiction. Red Carpet Plumbing serves Lake Las
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
                Leak Detection Questions for Lake Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LLV_LEAK_FAQS.map((faq) => (
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
              {LLV_LEAK_REROUTING.map((card) => (
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
          headline="Suspect a Hidden Leak in Your Lake Las Vegas Home?"
          body="Red Carpet Plumbing provides non-invasive leak detection for homes throughout Lake Las Vegas and Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate leaks without demolition. Licensed plumbers. Call us or request service online."
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
