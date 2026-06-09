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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", the
// 4.8/76 rating, and the gas-line leak detection scope are source-site/project
// claims. Each visible instance carries an inline FLAG comment.
//
// SCHEMA NOTE: Summerlin is a master-planned community spanning both the City of
// Las Vegas and unincorporated Clark County; it is not itself an incorporated
// city. Per the Batch 6 schema normalization, Service.areaServed for
// non-incorporated communities uses Place -> AdministrativeArea (Clark County) ->
// State (Nevada), matching the Paradise and Spring Valley pages. Plain City is
// reserved for incorporated cities (Las Vegas, Henderson, North Las Vegas).
// Provider Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Non-invasive leak detection and repair in Summerlin, NV. Hidden leaks, slab leaks, wall and ceiling leaks. Licensed plumbers. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection and repair in Summerlin, NV. Hidden leaks, slab leaks, wall and ceiling leaks. Licensed plumbers. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/leak-detection-repair/",
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
const SUMMERLIN_LEAK_FAQS = [
  {
    question: "What are the signs of a hidden water leak in a Summerlin home?",
    answer:
      "The most common signs are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. In Summerlin, hidden leaks are most common in original village homes built in the 1990s where copper supply lines have been thinned by decades of hard water mineral corrosion.",
  },
  {
    question: "How do I check for a water leak using my meter in Summerlin?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes hidden pipe leaks in Summerlin homes?",
    answer:
      "The most common causes in Summerlin are hard water mineral corrosion inside copper supply lines that have been thinning since the original 1990s village construction, caliche and expansive clay soil movement beneath slab foundations that stresses underground pipes and connections, closed-loop pressure cycling that fatigues pipe joints over time, and aging pre-2000 plumbing in homes where the pipe systems have reached or are approaching end of typical service life.",
  },
  {
    question: "How does non-invasive leak detection work in Summerlin?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows the plumber to pinpoint the leak location without opening large sections of the home. Thermal imaging can also identify temperature differences caused by water escaping from hot water lines beneath slabs or inside walls. The result is a precise leak location before any disruption to your Summerlin home.",
  },
  {
    question: "Can a small hidden leak really cause serious damage?",
    answer:
      "Yes. A small hidden leak inside a wall can cause significant mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign. A slab leak can erode soil beneath the foundation and cause concrete cracking. Even a slow drip from an underground supply line can waste hundreds of gallons per month and create saturated soil conditions that affect the foundation.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve all Summerlin villages for leak detection?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair throughout Summerlin, including Summerlin North, Summerlin South, The Hills, The Trails, The Arbors, The Canyons, The Ridges, The Willows, The Gardens, and all Summerlin communities. Call (702) 567-9172 to confirm coverage for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive leak detection and repair throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. From hidden pipe leaks and wall leaks to slab leak detection and supply line repair, our licensed plumbers locate and fix Summerlin leaks with minimal disruption to your home. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Non-Invasive Leak Detection",
  "Slab Leaks, Wall Leaks, Supply Lines",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul> warning signs.
const WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

// Section 4 — what causes hidden leaks (bold label + body). Factor 4 carries the
// plain-text "re-piping in Summerlin" phrase (TODO-BATCH-6, not yet linkable).
const LEAK_CAUSES = [
  {
    label: "Hard water mineral corrosion",
    body: "Las Vegas Valley water carries 17 to 24 grains of hardness per gallon, approximately 280 parts per million. This is among the hardest municipal water in the United States. Calcium and magnesium deposits accumulate inside copper pipe walls and continuously thin the pipe from the inside out. In original Summerlin village homes built in The Hills, The Trails, The Arbors, and The Canyons during the 1990s, copper supply lines have now experienced 25 to 35 years of this process. Pipes that have been thinned over decades of hard water exposure are significantly more prone to pinhole leaks and connection failures.",
  },
  {
    label: "Caliche and expansive clay soil movement",
    body: "Caliche and expansive clay soils beneath Summerlin's slab foundations shift and move with temperature changes and seasonal rainfall. This soil movement creates mechanical stress on underground supply lines and sewer laterals, and on the points where pipes pass through or connect to the slab. Older Summerlin village homes with copper lines running under caliche-heavy soils carry a higher baseline leak risk than newer construction on more stable ground.",
  },
  {
    label: "Closed-loop pressure cycling",
    body: "Most Summerlin homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating and pressure spikes in closed systems create repeated stress on pipe joints and connections over years of cycling. Homes without properly sized thermal expansion tanks are particularly vulnerable to this type of fatigue failure.",
  },
  {
    // TODO-BATCH-6: /summerlin/re-piping/ not yet built — the "re-piping in
    // Summerlin" phrase below is rendered as plain text (no anchor).
    label: "Aging pre-2000 plumbing in original villages",
    body: "Homes built in the original Summerlin western villages during the 1990s have plumbing systems that are now 25 to 35 years old. Copper supply lines in this age range, combined with Las Vegas hard water and caliche soil conditions, are at a stage where leak risk is meaningful. Homeowners in these original communities should be aware of the warning signs listed above. Homes that have already had one or more leak events may also be candidates for re-piping in Summerlin.",
  },
];

// Section 5 — leak detection and repair services (label + body, optional inline
// link). The slab item links the built core /slab-leak-detection-repair/ page;
// the Summerlin-specific slab page is not built yet (TODO-BATCH-6). The gas line
// item carries a scope FLAG.
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Electronic acoustic leak detection",
    body: "We use professional electronic detection equipment with acoustic sensors to identify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows us to pinpoint leak locations precisely without opening up your Summerlin home.",
  },
  {
    // TODO-BATCH-6: /summerlin/slab-leak-detection-repair/ not yet built — do not
    // link it. The live link below targets the built core service page.
    label: "Slab leak detection",
    body: "Slab leaks occur when water or sewer pipes running beneath a home's concrete foundation develop cracks or holes. They are among the most serious plumbing problems in Las Vegas due to hard water corrosion and desert soil movement. We locate slab leaks using acoustic sensors, thermal imaging, and pressure testing before any repair begins.",
    link: {
      pre: " For full slab leak repair options, see our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page.",
    },
  },
  {
    label: "Wall and ceiling leak detection",
    body: "Corroded copper pipes, failed supply line connections, and leaking drain lines can all release water inside walls and ceilings without visible signs until significant damage has occurred. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
  },
  {
    label: "Water supply line repair",
    body: "Once a leak is located, we repair or replace the damaged pipe section with targeted repairs that minimize disruption to walls, floors, and foundations.",
  },
  {
    label: "Video camera inspection",
    body: "For drain lines and sewer laterals, a video camera inspection confirms the condition of the line and identifies root intrusion, pipe damage, or structural issues contributing to leaks.",
    link: {
      pre: " Learn more about our ",
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
      post: ".",
    },
  },
  {
    // FLAG: verify gas line leak detection scope before publishing.
    label: "Gas line leak detection",
    body: "If you smell gas, leave the building immediately and call your gas utility. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line leaks under NV License #0048585A.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const LEAK_STEPS = [
  {
    name: "Gather information and identify symptoms",
    body: "We ask about the signs you have noticed, review the age and type of plumbing in your Summerlin home, and identify the most likely leak locations before deploying detection equipment.",
  },
  {
    name: "Perform pressure testing and meter verification",
    body: "We isolate sections of the plumbing system and perform pressure tests to confirm where water loss is occurring. We also verify the water meter reading with all water off to confirm active water loss.",
  },
  {
    name: "Use electronic detection equipment to locate the leak",
    body: "We deploy acoustic sensors, electronic detection equipment, and where appropriate thermal imaging to locate the precise source of the leak. This non-invasive process allows us to identify the leak location without opening walls, removing flooring, or excavating unnecessarily.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "Once the leak is located, we explain the repair options, the scope of work, and the cost before starting. We make targeted repairs and retest the affected section before we leave.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Summerlin's original village copper pipe systems, hard water conditions, and caliche soil leak risks",
  "Non-invasive leak detection equipment that locates leaks precisely before any repair work begins",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Residential leak detection throughout all Summerlin villages and Summerlin South",
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
  name: "Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in Summerlin, NV. Hidden leaks, slab leaks, wall and ceiling leaks. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/summerlin/leak-detection-repair/",
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
      name: "Leak Detection and Repair in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Summerlin, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair for Summerlin homes, including electronic acoustic detection, slab leak detection, wall and ceiling leak detection, water supply line repair, and video camera inspection.",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Detects and Repairs Leaks in Summerlin",
  description:
    "The process Red Carpet Plumbing follows for leak detection and repair in Summerlin, NV.",
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
  mainEntity: SUMMERLIN_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SummerlinLeakDetectionPage() {
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
            { label: "Leak Detection and Repair in Summerlin" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Summerlin, NV"
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
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Non-invasive leak detection and repair in Summerlin, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS AND WATER METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Hidden Water Leak in Your Summerlin Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Recognizing early warning signs helps Summerlin homeowners act
                before a small leak becomes a major repair. The following are the
                most common indicators of a hidden water leak.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((item) => (
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              If you notice one or more of these signs in your Summerlin home, a
              professional leak detection inspection can locate the source before
              further damage occurs. Call Red Carpet Plumbing at (702) 567-9172 or{" "}
              <Link
                href="/contact/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                request service online
              </Link>
              .
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                The Water Meter Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off every water fixture and appliance in the home. Find your
                water meter near the street in a ground-level box and check whether
                the dial or digital display is still moving. If the meter continues
                to advance with all water off, water is being used somewhere in
                your system. Call a plumber for a professional inspection to locate
                the source.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW NON-INVASIVE LEAK DETECTION WORKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Leak Detection Works in Summerlin
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a hidden leak does not require opening up large sections
                of wall, floor, or concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods that pinpoint the leak
                location before any repair work begins. For a broader overview, see
                our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair
                </Link>{" "}
                services.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Electronic acoustic sensors amplify the sound of pressurized water
                escaping from pipes through walls, floors, and underground. This
                allows our plumbers to identify the leak location within a few
                inches without cutting open large sections of your Summerlin home.
                Thermal imaging can also identify temperature differences caused by
                water escaping from hot water supply lines beneath slabs or inside
                walls.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                The result is a precise leak location before any disruption to your
                home, allowing targeted repairs rather than exploratory demolition.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES HIDDEN LEAKS IN SUMMERLIN */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Hidden Leaks in Summerlin Homes
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LEAK_CAUSES.map((c) => (
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

        {/* SECTION 5: LEAK DETECTION AND REPAIR SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection and Repair Services in Summerlin
              </h2>
            </div>
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
          </div>
        </section>

        {/* SECTION 6: OUR LEAK DETECTION PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Leak Detection Process in Summerlin
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Summerlin Homeowners Choose Red Carpet Plumbing for Leak
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

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection and Repair in Summerlin &mdash; Frequently Asked
                Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SUMMERLIN_LEAK_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Schedule Non-Invasive Leak Detection in Summerlin Today"
          body="Red Carpet Plumbing provides non-invasive leak detection and repair throughout Summerlin, NV, including Summerlin North, Summerlin South, The Hills, The Trails, The Arbors, The Canyons, and all Summerlin villages. Call (702) 567-9172 or request service online."
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
