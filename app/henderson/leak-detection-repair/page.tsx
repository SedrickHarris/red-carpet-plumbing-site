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
// "Over 40 years," and "24/7 emergency service" trust claims are source-site
// claims surfaced in the approved brief and shown on this page. License
// #0048585A and transparent-pricing are also source-site claims. Confirm all
// before final launch.
// NOTE (schema): this page uses the established site-wide schema shape used by
// the 10 sibling Batch-5 service-location pages and the location hubs
// (Service.provider = Plumber; areaServed City Henderson + containedInPlace
// State Nevada, no sameAs; WebPage isPartOf WebSite; separate JsonLd blocks;
// HowTo for the visible process steps). The brief's publisher/LocalBusiness/
// breadcrumb-@id/single-block variant and the areaServed sameAs Q491269 were not
// used — the site references Henderson as Q491204 elsewhere, so a conflicting ID
// was avoided. See build report.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional leak detection and repair in Henderson, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, and all Henderson communities.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection and repair throughout Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging. Green Valley and Lake Las Vegas included.",
    url: "https://redcarpetplumbing.com/henderson/leak-detection-repair/",
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
const HENDERSON_LEAK_FAQS = [
  {
    question: "How do I know if I have a hidden water leak in my Henderson home?",
    answer:
      "The most common signs of a hidden water leak in a Henderson home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. If you notice one or more of these signs, a professional leak detection inspection can locate the source.",
  },
  {
    question: "How can I check for a water leak myself in Henderson?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the meter reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes pipe leaks in Henderson, NV homes?",
    answer:
      "The most common causes in Henderson are aging copper supply lines in Green Valley homes built from the mid-1980s through the mid-1990s, which have been thinned by 30 to 40 years of hard water mineral corrosion. Caliche and expansive clay soil movement beneath slab foundations adds mechanical stress to pipes. Closed-loop system pressure cycling accelerates pipe fatigue. Some older Green Valley homes also contain polybutylene pipe, which is prone to failure without warning.",
  },
  {
    question:
      "Does Green Valley have more pipe leaks than newer Henderson neighborhoods?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the mid-1980s through the mid-1990s, have copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 40 years. Hard water mineral corrosion thins pipe walls continuously over that period. Combined with caliche soil movement beneath slab foundations, original Green Valley homes carry a higher leak risk than newer Henderson construction such as Green Valley Ranch and communities developed after 2000.",
  },
  {
    question: "How does non-invasive leak detection work in Henderson?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows the plumber to pinpoint the leak location without opening large sections of the home. Pressure testing confirms which line is losing pressure, and thermal imaging identifies temperature differences caused by hot water leaks. Together these methods locate hidden leaks precisely before any repair begins.",
  },
  {
    question: "Can a small hidden leak cause serious damage in my Henderson home?",
    answer:
      "Yes. A small hidden leak inside a wall can promote mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign above the surface. An underground supply line leak can waste hundreds of gallons per month and create soil saturation conditions near the foundation. Early detection and repair limits damage and reduces total repair cost.",
  },
];

const HERO_SUBHEADING =
  "Hidden water leaks in Henderson homes cause serious damage before they become visible. Red Carpet Plumbing locates leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, Seven Hills, and all Henderson communities.";

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
  "Serving Henderson and the Valley",
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
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line it is on. Pressure testing is a standard step in the leak detection process and is also used to verify that repairs are complete.",
  },
  {
    title: "Thermal Imaging",
    body: "For hot water line leaks, thermal imaging identifies temperature differences on floor and wall surfaces caused by escaping hot water. Thermal imaging narrows the search area before acoustic confirmation and pressure testing pinpoint the location.",
  },
];

const CAUSES_INTRO =
  "Henderson's plumbing conditions create a higher rate of hidden water leaks than in many other cities. Four factors drive elevated leak risk throughout Henderson and its communities.";

const HENDERSON_LEAK_CAUSES = [
  {
    title: "Aging Copper Pipes in Green Valley's Original Neighborhoods",
    body: "Green Valley's original neighborhoods were developed from the mid-1980s through the mid-1990s. Homes in this era were built primarily with copper supply lines that have now been exposed to Las Vegas Valley hard water for 30 to 40 years. Over that period, dissolved minerals have continuously thinned pipe walls from the inside out, creating conditions where pinhole leaks and pipe failures are increasingly common. Some homes built between 1985 and 1995 also contain polybutylene pipe, a gray plastic material known to fail without warning that was widely installed during that period. Green Valley Ranch, developed from the mid-1990s through the mid-2000s, carries a lower but still present risk as those homes approach 20 to 30 years of age.",
  },
  {
    title: "Hard Water Mineral Corrosion",
    body: "Henderson receives Las Vegas Valley municipal water from Lake Mead, which measures 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This places Henderson among the hardest municipal water supplies in the United States. Sustained hard water exposure accelerates corrosion inside copper and galvanized pipe walls, thinning them faster than in cities with softer water. The result is a higher rate of pinhole leaks, supply line failures, and fixture connection leaks throughout Henderson.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "The Las Vegas Valley, including Henderson, sits on caliche and expansive clay soils that shift with seasonal temperature changes and rare rainfall events. This soil movement places ongoing mechanical stress on pipes running beneath concrete slab foundations, creating friction points where pipe contacts rebar or aggregate and stressing pipe joints and connections. Original Green Valley neighborhoods, where copper pipes are already thinned by hard water corrosion, carry the highest combined risk from this factor.",
  },
  {
    title: "Closed-Loop System Pressure Stress",
    body: "Most Henderson homes operate on closed-loop plumbing systems due to backflow preventers at the street meter. When water is heated in a tank or tankless system, thermal expansion creates pressure increases in the closed system that stress pipe walls and connections. Repeated pressure cycling over years accelerates pipe fatigue, particularly in older pipes already compromised by mineral corrosion. This pressure stress is a contributing factor in hidden wall leaks and supply line connection failures throughout Henderson.",
  },
];

// Service items. Card 4 (slab) links to the built Henderson slab page.
// ACTIVATED: /henderson/slab-leak-detection-repair/ built (P14)
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Electronic Leak Detection",
    body: "Using professional acoustic sensors, we locate hidden leaks in walls, floors, underground supply lines, and slab areas without opening large sections of your home. Electronic detection pinpoints the leak location so repairs are targeted and precise.",
    link: { href: "/leak-detection-repair/", text: "leak detection" },
  },
  {
    label: "Wall and Ceiling Leak Detection",
    body: "Corroded supply lines, failed connection fittings, and leaking drain lines inside wall and ceiling cavities can cause mold and structural damage before any visible surface sign appears. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
    link: { href: "/leak-detection-repair/", text: "leak detection and repair" },
  },
  {
    label: "Underground Supply Line Leak Detection",
    body: "Underground supply line leaks increase water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground leaks and provide targeted repair or pipe replacement recommendations.",
  },
  {
    label: "Slab Leak Detection",
    body: "Slab leaks in Henderson's Green Valley neighborhoods are particularly common due to aging copper pipe and caliche soil movement. Red Carpet Plumbing provides slab leak detection using acoustic sensors, thermal imaging, and pressure testing.",
    link: {
      href: "/henderson/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
  {
    label: "Pressure Testing and Leak Confirmation",
    body: "Pressure testing confirms active water loss in the plumbing system and identifies which line is affected. We also use pressure testing after repairs to verify that the repair is complete and the system holds pressure.",
  },
];

const LEAK_STEPS = [
  {
    name: "Assessment",
    body: "We start with a visual inspection and review of your reported symptoms to understand where the leak may be located and which detection methods are appropriate for your home.",
  },
  {
    name: "Detection",
    body: "Using acoustic sensors, pressure testing, and thermal imaging where applicable, we locate the leak precisely. We identify the affected line and the location before any repair work is discussed.",
  },
  {
    name: "Repair Options",
    body: "We present the repair options for the specific leak location, pipe type, and condition. For older Green Valley homes with aging copper pipe, we discuss whether the surrounding pipe condition suggests a targeted repair or a more comprehensive approach is appropriate.",
  },
  {
    name: "Repair and Confirmation",
    body: "We complete the approved repair and confirm the system holds pressure after work is finished. We clean up the work area before leaving.",
  },
];

// Communities. Green Valley and Lake Las Vegas link to their built hubs.
const COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Seven Hills" },
  { name: "MacDonald Ranch" },
  { name: "Anthem" },
  { name: "Tuscany Village" },
  { name: "Inspirada" },
  { name: "Whitney Ranch" },
  { name: "Downtown Henderson" },
];

// Related services. All live (Pages 2, 5, 8 of Batch 5).
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing in Henderson",
    href: "/henderson/emergency-plumbing/",
  },
  { label: "Drain Cleaning in Henderson", href: "/henderson/drain-cleaning/" },
  {
    label: "Water Heater Repair and Installation in Henderson",
    href: "/henderson/water-heater-repair-installation/",
  },
  { label: "Slab Leak Detection and Repair", href: "/slab-leak-detection-repair/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (established site-wide shape; see NOTE at top of file).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional leak detection and repair in Henderson, NV. Red Carpet Plumbing locates hidden water leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging.",
  url: "https://redcarpetplumbing.com/henderson/leak-detection-repair/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in Henderson",
      item: "https://redcarpetplumbing.com/henderson/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Henderson",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional non-invasive leak detection and repair for homes and businesses in Henderson, NV, using acoustic sensors, pressure testing, and thermal imaging to locate hidden water leaks and provide targeted repairs.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Henderson",
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
  name: "How Red Carpet Plumbing Handles Leak Detection in Henderson NV",
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
  mainEntity: HENDERSON_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonLeakDetectionPage() {
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
              label: "Henderson Plumbing",
              href: "/henderson-plumbing-services/",
            },
            { label: "Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Henderson, NV"
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
            alt: "Professional leak detection service in Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why Henderson customers choose Red Carpet Plumbing for leak detection"
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
                Signs of a Hidden Water Leak in Your Henderson Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden water leaks inside walls, beneath floors, or underground
                can cause significant damage before any visible sign appears.
                Recognizing the early warning signs helps Henderson homeowners
                act before a small leak becomes a major repair.
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
              If you notice one or more of these signs in your Henderson home, a
              professional leak detection inspection can locate the source before
              further damage occurs. Call Red Carpet Plumbing at (702) 567-9172
              or request service online.
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

        {/* SECTION 4: HENDERSON-SPECIFIC LEAK CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Pipe Leaks Are Common in Henderson, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {CAUSES_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {HENDERSON_LEAK_CAUSES.map((c) => (
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

        {/* SECTION 5: LEAK DETECTION SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Henderson Leak Detection and Repair Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides comprehensive leak detection and
                repair services throughout Henderson. Our licensed plumbers
                locate the source of hidden leaks precisely before recommending a
                repair approach.
              </p>
            </div>
            {/* ACTIVATED: /henderson/slab-leak-detection-repair/ built (P14) */}
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
                    How Red Carpet Plumbing Handles Leak Detection in Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    leak detection service in Henderson.
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
                  Suspected Water Leak in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides non-invasive leak detection and
                  repair throughout Henderson, including Green Valley, Lake Las
                  Vegas, and Seven Hills. Call or request service online.
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
                Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides leak detection and repair throughout
                Henderson and its communities. For full coverage details, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson plumbing services
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
              Not sure if we serve your Henderson address? Call (702) 567-9172 to
              confirm coverage.
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
                Frequently Asked Questions About Leak Detection in Henderson
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_LEAK_FAQS.map((faq) => (
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
          headline="Leak Detection and Repair Throughout Henderson, NV"
          body="Red Carpet Plumbing provides professional non-invasive leak detection and repair throughout Henderson, including Green Valley, Lake Las Vegas, Seven Hills, and all Henderson communities. We locate hidden water leaks precisely before any repair begins."
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
