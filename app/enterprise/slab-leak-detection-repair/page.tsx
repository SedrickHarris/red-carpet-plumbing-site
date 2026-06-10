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
// (Clark County) -> State (Nevada), NOT City. Matches the Enterprise emergency,
// drain-cleaning, water-heater, and leak-detection siblings. No
// AggregateRating/Review. No sameAs. Provider Plumber (name, url, telephone). 5
// separate JsonLd blocks.
//
// CONTENT NOTE: The Enterprise slab-leak cause story is first-service-cycle
// copper (20-to-25-year-old homes), hard water pitting corrosion, caliche soil
// movement, closed-loop pressure, and connection fatigue. There is intentionally
// NO galvanized-pipe and NO polybutylene language; those belong to older
// neighborhoods, not Enterprise's newer copper construction.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Professional slab leak detection and repair in Enterprise, NV. Non-invasive detection using acoustic sensors, pressure testing, and thermal imaging. Serving Rhodes Ranch, Mountain's Edge, and all Enterprise communities. NV #0048585A.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Non-invasive slab leak detection and repair throughout Enterprise, NV. Rhodes Ranch, Mountain's Edge, Southwest Las Vegas. All repair options explained. NV #0048585A.",
    url: "https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/",
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
const ENT_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in an Enterprise, NV home?",
    answer:
      "The most common signs of a slab leak in an Enterprise home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the slab and cannot be seen directly. If you notice one or more of these signs, contact a licensed plumber for a non-invasive slab leak inspection.",
  },
  {
    question: "What causes slab leaks in Enterprise homes?",
    answer:
      "The primary causes in Enterprise are hard water mineral corrosion that has been thinning copper supply line walls in homes now 20 to 25 years old since original construction, caliche and expansive clay soil movement that stresses pipes beneath slab foundations, repeated pressure spikes from closed-loop plumbing systems, and age-related stress on pipe joints and under-slab connections. Enterprise homes in Rhodes Ranch and Mountain's Edge are entering the age range where these compounding factors produce the first under-slab failures.",
  },
  {
    question: "How is a slab leak detected without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific supply line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the leak precisely before any concrete cutting begins.",
  },
  {
    question: "What are my options for slab leak repair in Enterprise?",
    answer:
      "The three main options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the damaged pipe section; pipe rerouting, which bypasses the damaged pipe entirely by running a new line through walls or above-slab pathways; and epoxy pipe lining, which seals cracks from the inside without excavation. The right option depends on the leak location, pipe age, pipe condition, and what is above the repair area. Red Carpet Plumbing explains all three options before any work begins.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in my Enterprise home?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For Enterprise homes where the surrounding copper pipe has been assessed and shows signs of thinning from 20 to 25 years of hard water exposure, or where the first slab leak suggests other failure points may exist on the same aging line, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely. We assess the pipe condition and explain both options before any work begins.",
  },
  {
    question: "How long does slab leak repair take in Enterprise?",
    answer:
      "Detection typically takes a few hours. Spot repair through concrete usually takes one to two days including concrete patching. Pipe rerouting typically takes one to three days depending on the complexity of the plumbing layout. Epoxy lining timelines vary based on pipe length and configuration. Red Carpet Plumbing will give you a timeline estimate before work begins.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Enterprise, Nevada and the Southwest Las Vegas area. Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities built in the late 1990s and early 2000s are now 20 to 25 years old, and the copper supply lines beneath their slab foundations have been continuously exposed to Las Vegas hard water since original construction. We use acoustic sensors, pressure testing, and thermal imaging to locate slab leaks precisely before any concrete cutting begins, and we explain all repair options before starting work. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Non-Invasive Slab Leak Detection",
  "All Repair Options Explained",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — slab-specific warning signs (distinct from the general hidden-leak
// list on the leak-detection page).
const SLAB_WARNING_SIGNS = [
  "Warm or hot spots on the floor, particularly on tile or concrete",
  "The sound of running water when all fixtures and appliances are off",
  "An unexplained and persistent increase in your water bill",
  "Damp or wet flooring without an obvious visible source",
  "Cracks appearing in walls or flooring",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// Section 3 — non-invasive detection methods (bold label + body).
const DETECTION_METHODS = [
  {
    label: "Acoustic sensors",
    body: "Acoustic leak detection equipment amplifies the sound of pressurized water escaping from pipes beneath the slab. Trained technicians use this equipment to identify the leak location to within a few inches through the floor surface without any cutting or demolition.",
  },
  {
    label: "Pressure testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which supply line is affected. For Enterprise homes with multiple aging pipe runs, pressure testing helps narrow the detection area efficiently.",
  },
  {
    label: "Thermal imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates temperature differences visible on floor surfaces. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

// Section 4 — what causes slab leaks (bold label + body). Four copper /
// first-service-cycle causes; no galvanized or polybutylene language.
const SLAB_CAUSES = [
  {
    label:
      "Hard water mineral corrosion in first-service-cycle copper supply lines",
    body: "Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities were built primarily in the late 1990s and early 2000s. Their copper supply lines are now 20 to 25 years old and have been continuously exposed to Las Vegas Valley hard water since original construction. Las Vegas municipal water at 17 to 24 grains per gallon, approximately 280 parts per million of dissolved minerals, deposits calcium and magnesium scale inside copper pipe walls over time. This process thins the pipe walls from the inside out. As pipe walls thin, the pressure of the water supply creates stress fractures and pinhole leaks at the weakest points, including where pipes pass through or beneath the slab. Enterprise homes are now entering the age range where this corrosion accumulation produces the first under-slab failures.",
  },
  {
    label: "Caliche and expansive clay soil movement beneath slab foundations",
    body: "Enterprise is built predominantly on concrete slab foundations, and the caliche and expansive clay soils beneath those slabs shift with seasonal temperature changes and infrequent rainfall throughout Clark County. This soil movement creates ongoing mechanical stress on copper supply lines embedded in and running beneath the slab. Friction points where pipe contacts concrete rebar or aggregate wear through pipe walls over time. Soil settlement and expansion also stress pipe joints and connections beneath the slab. First-service-cycle copper pipes that have been subject to this movement for 20 to 25 years are at elevated risk of under-slab failure.",
  },
  {
    label: "Closed-loop pressure stress and thermal expansion",
    body: "Most Enterprise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating creates repeated pressure spikes in the closed system. Over 20 to 25 years, these pressure cycles accelerate pipe fatigue, particularly in supply lines running beneath or embedded in the slab. Homes without properly installed thermal expansion tanks are subject to more frequent and more severe pressure spikes.",
  },
  {
    label: "Age-related pipe joint and connection stress",
    body: "In Enterprise homes now 20 to 25 years old, the original mechanical joints, elbow connections, and transition fittings in the under-slab supply line system have been stressed by two decades of pressure cycling, thermal expansion, and soil movement. These connections are often the first point of failure in aging under-slab systems, producing leaks that present with the same slab-leak warning signs as pipe wall failures.",
  },
];

// Section 5 — repair options (H3 + body, optional inline link). Rendered as three
// visible H3 sections per guardrail 6. Both inline links target built core
// service pages.
const REPAIR_OPTIONS: {
  heading: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    heading: "Spot repair through concrete",
    body: "Spot repair involves cutting the concrete slab directly above the leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is the most targeted approach and is appropriate for an isolated leak in a pipe that is otherwise in good condition. For Enterprise homes with 20 to 25 year old copper supply lines, spot repair can be appropriate when a leak is genuinely isolated and the surrounding pipe wall condition is assessed and confirmed to be acceptable. We evaluate the pipe condition before recommending spot repair to ensure a second failure on the same aging line is not likely.",
    link: {
      pre: " See our ",
      href: "/water-pipe-repair-replacement/",
      text: "water pipe repair and replacement",
      post: " page for information on targeted pipe repairs.",
    },
  },
  {
    heading: "Pipe rerouting",
    body: "Pipe rerouting abandons the damaged pipe beneath the slab entirely and installs a new supply line through walls, ceilings, or above-slab pathways to bypass the foundation. Rerouting eliminates the source of future slab leaks on the affected line and avoids ongoing foundation disruption. For Enterprise homes where the assessment reveals that the surrounding pipe condition warrants concern, or where a second leak on the same line is likely, rerouting is typically the more durable long-term solution.",
    link: {
      pre: " See our ",
      href: "/re-piping/",
      text: "re-piping services",
      post: " page for information on full and partial pipe replacement options.",
    },
  },
  {
    heading: "Epoxy pipe lining",
    body: "For some slab leak situations, epoxy pipe lining is a viable option. A specialized epoxy coating is applied to the interior of the existing pipe, sealing cracks and restoring pipe integrity from the inside without concrete cutting. This method works best for pipes with localized damage where the overall pipe structure remains intact. We assess pipe condition and the nature of the damage before recommending epoxy lining as the repair approach.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const SLAB_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Precise detection is essential because the correct repair method and scope of work depend entirely on knowing the exact location and the condition of the affected pipe.",
  },
  {
    name: "Assess pipe condition and repair options",
    body: "We assess the age and condition of the affected pipe, the scope of the leak, and the surrounding pipe condition to determine whether spot repair, pipe rerouting, or epoxy lining is the most appropriate approach. For Enterprise homes with first-service-cycle copper, we explain the implications of each option before any work begins.",
  },
  {
    name: "Present repair options and obtain approval",
    body: "We explain what we found, what the repair or rerouting involves, the scope of work, and the cost before starting. We do not begin work without your approval.",
  },
  {
    name: "Complete the repair and verify",
    body: "We complete the approved repair, restore concrete where cutting was required, and pressure-test the affected section to confirm the leak is resolved and the system holds pressure before we leave.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Enterprise's first-service-cycle housing stock, Rhodes Ranch and Mountain's Edge copper pipe conditions, and Clark County slab foundation conditions",
  "Non-invasive slab leak detection that locates the leak precisely before any concrete cutting begins",
  "All three repair options explained before work starts so you can make an informed decision",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// Section 7 — related services (built sibling routes).
const RELATED_SERVICES = [
  {
    href: "/enterprise/leak-detection-repair/",
    text: "Enterprise leak detection and repair",
  },
  {
    href: "/enterprise/water-heater-repair-installation/",
    text: "Enterprise water heater repair and installation",
  },
  {
    href: "/enterprise/emergency-plumbing/",
    text: "Enterprise emergency plumbing",
  },
];

// Section 8 — coverage area chips (plain text only; no Enterprise sub-area routes
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
  name: "Slab Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair in Enterprise, NV using acoustic sensors, pressure testing, and thermal imaging.",
  url: "https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/",
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
      name: "Slab Leak Detection and Repair in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in Enterprise, NV",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes and businesses in Enterprise, NV. Detection uses acoustic sensors, pressure testing, and thermal imaging. Repair options include spot repair, pipe rerouting, and epoxy pipe lining.",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Slab Leaks in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for slab leak detection and repair in Enterprise, NV.",
  step: SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENT_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseSlabLeakPage() {
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
            { label: "Slab Leak Detection and Repair in Enterprise" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Enterprise, NV"
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
          ctaNote="Licensed plumbers. Non-invasive detection. Transparent pricing."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Slab leak detection and repair in Enterprise, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS (slab-specific) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Warning Signs of a Slab Leak in Enterprise
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                The following signs may indicate a slab leak in your Enterprise
                home. Slab leaks occur beneath the concrete foundation and cannot
                be seen directly, which is why non-invasive detection methods are
                essential for accurate diagnosis. For our full slab leak service
                overview, see our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {SLAB_WARNING_SIGNS.map((item) => (
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

        {/* SECTION 3: NON-INVASIVE DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Non-Invasive Slab Leak Detection Methods
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing uses professional non-invasive detection
                methods to locate slab leaks precisely before any repair work
                begins.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {DETECTION_METHODS.map((m) => (
                <li
                  key={m.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {m.label}.
                    </strong>{" "}
                    {m.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES SLAB LEAKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Slab Leaks in Enterprise, NV Homes
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {SLAB_CAUSES.map((c) => (
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

        {/* SECTION 5: SLAB LEAK REPAIR OPTIONS (three visible H3 options) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Repair Options for Enterprise Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing explains all three slab leak repair options
                before any work begins. The right choice depends on the leak
                location, pipe age and condition, and the scope of work involved.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {REPAIR_OPTIONS.map((o) => (
                <article
                  key={o.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {o.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {o.body}
                    {o.link ? (
                      <>
                        {o.link.pre}
                        <Link
                          href={o.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {o.link.text}
                        </Link>
                        {o.link.post}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR SLAB LEAK PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Slab Leak Process in Enterprise
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {SLAB_STEPS.map((step, index) => (
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners Choose Red Carpet Plumbing for Slab Leak
                Service
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
              including drain cleaning, water heater repair, leak detection, and
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

        {/* SECTION 8: COVERAGE AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Slab Leak Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides slab leak detection and repair
                throughout Enterprise and the Southwest Las Vegas area.
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
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak FAQs for Enterprise Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENT_SLAB_FAQS.map((faq) => (
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
          headline="Suspect a Slab Leak in Enterprise? Call Red Carpet Plumbing."
          body="Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Enterprise, NV, including Rhodes Ranch, Mountain's Edge, and the Southwest Las Vegas area. Call (702) 567-9172 or request service online."
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
