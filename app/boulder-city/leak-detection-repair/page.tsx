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

// FLAG: VERIFY before publishing — rating (4.8 stars / 76 Google reviews)
// and "Over 40 years" trust claims are source-site claims shown on this page.
// License #0048585A, permit handling, and transparent-pricing are also
// source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Boulder City IS an incorporated city (not an unincorporated
// Clark County community), so Service.areaServed uses City + containedInPlace
// State (Nevada), matching the Henderson and North Las Vegas siblings. Do NOT
// use Place/AdministrativeArea here. No AggregateRating/Review. No sameAs
// Wikidata IDs on this service-location page. No hasCredential. Provider
// Plumber (name, url, telephone). 5 separate JsonLd blocks. HowTo included
// because Section 6 renders the matching visible <ol>.
//
// PERMIT NOTE: Boulder City is an incorporated city with its OWN building
// department. Every permit reference on this page names "Boulder City Building
// Department" and "Boulder City" — NEVER Clark County.
//
// CONTENT NOTE: The Boulder City leak story leads with galvanized steel supply
// line failure in 60-to-90-year-old historic homes (sudden failure vs. gradual
// copper pinholes), then hard water corrosion, caliche soil movement, and aging
// copper/early-replacement materials. This differs from the copper-first framing
// used for newer communities.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in Boulder City, NV. Galvanized pipe leaks, slab leaks, and hidden supply line leaks in historic and newer homes. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/boulder-city/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in Boulder City, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection and repair in Boulder City from licensed local plumbers. Galvanized pipe leaks, slab leaks, and hidden supply line leaks for historic and newer homes.",
    url: "https://redcarpetplumbing.com/boulder-city/leak-detection-repair/",
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
const BC_LEAK_FAQS = [
  {
    question:
      "How do I know if I have a hidden water leak in my Boulder City home?",
    answer:
      "The most common signs of a hidden water leak in a Boulder City home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. In older Boulder City homes with galvanized steel supply lines, rust-colored water from a tap can also indicate internal pipe failure. If you notice one or more of these signs, a professional leak detection inspection can locate the source before further damage occurs.",
  },
  {
    question: "How can I check for a water leak myself in Boulder City?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and check whether the dial or digital display is still moving. If the meter continues to advance with all water off, water is being used somewhere in your system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes hidden pipe leaks in Boulder City homes?",
    answer:
      "The most common causes in Boulder City are galvanized steel supply line corrosion in homes built from the 1930s through the 1960s, hard water mineral corrosion from the Lake Mead supply that thins pipe walls over time, caliche and expansive clay soil movement beneath slab foundations that stresses pipe joints, and aging copper and early replacement pipe materials in homes updated in the 1960s and 1970s. Boulder City has some of the oldest residential plumbing in the Las Vegas region, which makes professional leak detection particularly important for historic homes.",
  },
  {
    question:
      "Does non-invasive leak detection work in Boulder City's older homes?",
    answer:
      "Yes. Red Carpet Plumbing uses acoustic sensors, pressure testing, and thermal imaging to locate hidden leaks without opening large sections of wall, floor, or concrete. These methods work effectively on galvanized steel, copper, and other pipe materials found in Boulder City homes regardless of age. Pinpointing the leak location before repair begins allows us to make targeted repairs rather than searching destructively through finished surfaces.",
  },
  {
    question:
      "Are galvanized pipe leaks different from copper pipe leaks in Boulder City?",
    answer:
      "Yes. Copper pipe leaks in hard water environments typically develop as pinhole leaks that start small and grow gradually over time. Galvanized steel pipe leaks can be more sudden, occurring when the corroded pipe wall finally fails after decades of internal corrosion. Galvanized supply lines in Boulder City homes built from the 1930s through the 1960s are now 60 to 90 years old. When a galvanized line develops a leak, the overall condition of the pipe throughout the system should be assessed, as widespread internal corrosion may indicate additional failures are likely.",
  },
  {
    question: "Who handles permits for plumbing repair work in Boulder City?",
    answer:
      "Boulder City is an incorporated city with its own building department. Plumbing repair permits in Boulder City are processed through the Boulder City Building Department. Red Carpet Plumbing holds Nevada Contractor License #0048585A and handles the permit process for repair and replacement projects in Boulder City that require permits.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional non-invasive leak detection and repair for homes and businesses in Boulder City, Nevada. Whether you have a hidden supply line leak, a slab leak, or a failing galvanized pipe in a historic home, our licensed plumbers locate the source without opening large sections of wall or floor before recommending the right repair. Call (702) 567-9172 to schedule an inspection. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const TRUST_STRIP_ITEMS = [
  "NV Licensed Plumbers, #0048585A",
  "Non-Invasive Leak Detection",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 Years Serving Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul> warning signs.
const BC_LEAK_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
  "Rust-colored water from a tap, which may indicate internal galvanized pipe failure",
];

// Section 3 — non-invasive detection methods (bold label + body).
const BC_DETECTION_METHODS = [
  {
    label: "Acoustic sensors",
    body: "Acoustic leak detection equipment amplifies the sound of pressurized water escaping from pipes through walls, floors, and underground. Trained technicians use this equipment to listen through the building surface and identify the leak location to within a few inches without any cutting or demolition. For Boulder City's older homes, acoustic detection is often the primary method for locating leaks in galvanized steel and early copper supply lines.",
  },
  {
    label: "Pressure testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which supply line is affected. For Boulder City homes with multiple aging pipe sections, pressure testing helps narrow the detection area before acoustic work begins.",
  },
  {
    label: "Thermal imaging",
    body: "Hot water line leaks release heat that travels through walls, floors, and slabs, creating temperature differences detectable by thermal imaging cameras. This method helps narrow the search area for leaks in hot water supply lines before acoustic sensors confirm the precise location.",
  },
];

// Section 4 — what causes hidden leaks (bold label + body). Galvanized failure
// leads.
const BC_LEAK_CAUSES = [
  {
    label: "Galvanized steel pipe failure in historic homes",
    body: "Homes built in Boulder City from the 1930s through the 1960s were typically plumbed with galvanized steel supply lines. Galvanized steel corrodes from the inside out over decades of hard water exposure. Unlike copper pinhole leaks, which develop gradually and often present as slow drips, galvanized pipe failures can be more sudden and may release a significant volume of water when the corroded pipe wall finally gives way. Boulder City's historic homes have galvanized supply lines that are now 60 to 90 years old, making them among the oldest residential supply pipes in the entire Las Vegas region. Regular inspections and professional leak detection are particularly important for these properties.",
  },
  {
    label: "Hard water mineral corrosion from Lake Mead",
    body: "Boulder City receives water from the Lake Mead supply, which carries approximately 280 parts per million of dissolved minerals. This is among the hardest municipal water in the United States. Over years of exposure, calcium and magnesium deposits build up inside copper and galvanized steel pipes, thinning the pipe walls from the inside out. In Boulder City's older homes, where the pipe walls have already been reduced by decades of corrosion, hard water mineral buildup accelerates the path to failure.",
  },
  {
    label: "Caliche and expansive clay soil movement beneath slab foundations",
    body: "Boulder City homes sit on the same caliche and expansive clay soils found throughout the Las Vegas Valley. These soils shift with temperature changes and seasonal rainfall, putting constant stress on pipes buried beneath and embedded in concrete foundations. Even small soil shifts can stress pipe joints and connections beneath the slab, creating leaks that develop gradually before any surface sign appears. In older Boulder City homes where slab-embedded pipes have already been weakened by corrosion, soil movement increases the risk of slab leak development.",
  },
  {
    label: "Aging copper and early-replacement pipe materials",
    body: "Homes in Boulder City that were updated in the 1960s and 1970s may have copper supply lines that are now 50 to 60 years old, as well as early plastic materials used in some mid-century updates. These pipes have been exposed to Las Vegas Valley hard water for their entire service life. In homes where one or more leaks have already occurred, it is often an indicator that the rest of the supply system is approaching similar failure.",
  },
];

// Section 5 — leak detection and repair services (bold label + body). Two
// blocks carry an inline link to a built core page; the brief's body already
// includes the in-sentence connector ("See our ... page for ..."), so the body
// is split into prefix + linked anchor + suffix to preserve the approved copy
// exactly. Other blocks have link: null.
const BC_LEAK_SERVICES: {
  label: string;
  body: string;
  link: { href: string; text: string; suffix: string } | null;
}[] = [
  {
    label: "Hidden supply line leak detection",
    body: "Supply line leaks inside walls and under floors are among the most damaging hidden leaks in Boulder City homes because they can go undetected for months. We use acoustic sensors and pressure testing to locate the leak precisely before recommending a targeted repair.",
    link: null,
  },
  {
    label: "Slab leak detection and repair",
    body: "Boulder City homes are built on concrete slab foundations. Hard water corrosion, soil movement, and aging pipe materials all contribute to slab leak development. Red Carpet Plumbing uses non-invasive detection methods to locate slab leaks before recommending spot repair, pipe rerouting, or epoxy lining based on the pipe's condition and location. See our ",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair page",
      suffix: " for full details.",
    },
  },
  {
    label: "Galvanized pipe leak repair",
    body: "When a galvanized steel supply line in a Boulder City historic home develops a leak, the repair decision depends on the pipe's overall condition and the location of the failure. A targeted repair may address the immediate problem, but widespread internal corrosion in a galvanized system may make a broader pipe replacement the more practical long-term solution. See our ",
    link: {
      href: "/water-pipe-repair-replacement/",
      text: "water pipe repair and replacement page",
      suffix: " for options.",
    },
  },
  {
    label: "Water meter line and main supply leak detection",
    body: "Leaks between the water meter and the home's main shutoff can cause unexplained water bill increases without visible signs inside the building. We test and locate meter-to-house supply line leaks using pressure testing and acoustic detection.",
    link: null,
  },
  {
    label: "Commercial leak detection",
    body: "Red Carpet Plumbing provides leak detection and repair for commercial properties in Boulder City including older commercial buildings in the historic downtown area. Commercial properties with aging infrastructure benefit from professional leak detection to identify and address pipe failures before they cause significant water damage or business disruption.",
    link: null,
  },
];

// Section 6 — visible <ol>, HowTo schema source. Step five names Boulder City
// permit, NOT Clark County.
const BC_LEAK_STEPS = [
  {
    name: "Review symptoms and inspect the system",
    body: "We start by gathering information about the signs you have noticed, how long they have been present, and which areas of the home are affected. For Boulder City's older homes, we also note the likely pipe material and age to guide our detection approach.",
  },
  {
    name: "Confirm an active leak with pressure testing",
    body: "We use pressure testing to confirm that an active leak is present and to identify which supply line is losing pressure. This narrows the detection zone before acoustic work begins.",
  },
  {
    name: "Locate the leak precisely with acoustic sensors and thermal imaging",
    body: "Acoustic sensors amplify the sound of escaping pressurized water through walls, floors, and underground. Thermal imaging identifies heat signatures from hot water line leaks. Together, these tools let us pinpoint the leak location to within a few inches without opening the home.",
  },
  {
    name: "Assess the pipe's condition and recommend the right repair",
    body: "For Boulder City's older homes, locating the leak is only part of the picture. We assess the overall condition of the pipe in the affected area. When internal corrosion suggests additional failures are likely, we discuss the full range of repair and replacement options before work begins.",
  },
  {
    name: "Complete the targeted repair",
    body: "We complete the repair using the approach best suited to the pipe material, leak location, and overall pipe condition. For projects that require a Boulder City permit, we handle the permit filing and coordinate the inspection for sign-off.",
  },
];

// Section 7 — why choose (bulleted list). FLAGged items per brief.
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley, including Boulder City",
  "Non-invasive leak detection before any repair begins",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
  "Experienced with galvanized pipe failures in Boulder City historic homes",
  "Boulder City permit process handled for projects that require permits",
  "Transparent pricing, no hidden fees",
];

// Section 8 — neighborhood chips (plain text only; no Boulder City sub-area
// routes are built).
const BOULDER_CITY_AREAS = [
  "Historic Downtown Boulder City",
  "King Street Area",
  "Nevada Way Corridor",
  "Veterans Memorial Drive Area",
  "Buchanan Boulevard Area",
  "Newer Boulder City Neighborhoods",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Boulder City IS incorporated, so Service.areaServed uses
// City + containedInPlace State (Nevada). Do NOT use Place/AdministrativeArea.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in Boulder City, NV. Galvanized pipe leaks, slab leaks, and hidden supply line leaks for historic and newer homes. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/boulder-city/leak-detection-repair/",
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
      name: "Boulder City Plumbing Services",
      item: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in Boulder City",
      item: "https://redcarpetplumbing.com/boulder-city/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Boulder City, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional non-invasive leak detection and repair for homes and businesses in Boulder City, NV, including galvanized pipe leaks, slab leak detection and repair, hidden supply line leaks, and water meter line leaks.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Boulder City",
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
  name: "How Red Carpet Plumbing Detects and Repairs Leaks in Boulder City",
  description:
    "The process Red Carpet Plumbing follows for leak detection and repair in Boulder City, NV.",
  step: BC_LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BC_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BoulderCityLeakDetectionPage() {
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
              label: "Boulder City Plumbing Services",
              href: "/boulder-city-plumbing-services/",
            },
            { label: "Leak Detection and Repair in Boulder City" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Boulder City, NV"
          subheading={HERO_SUBHEADING}
          trustItems={TRUST_STRIP_ITEMS}
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
            alt: "non-invasive leak detection and repair in Boulder City, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS AND WATER METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Hidden Water Leak in Your Boulder City Home
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Recognizing early warning signs helps Boulder City homeowners
                  act before a small leak becomes a major repair. The following
                  are the most common indicators of a hidden water leak. In
                  Boulder City&apos;s oldest homes, where galvanized steel supply
                  lines have been in service for 60 to 90 years, leaks can develop
                  with little visible warning before a significant failure occurs.
                </p>
                <p>
                  Red Carpet Plumbing provides non-invasive leak detection and
                  repair throughout Boulder City. For a full overview of our
                  services, visit our{" "}
                  <Link
                    href="/boulder-city-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Boulder City plumbing services page
                  </Link>{" "}
                  and our{" "}
                  <Link
                    href="/leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    leak detection and repair services page
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {BC_LEAK_SIGNS.map((sign) => (
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

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                The Water Meter Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off every water fixture and appliance in the home. Find your
                water meter near the street in a ground-level box and check
                whether the dial or digital display is still moving. If the meter
                continues to advance with all water off, water is being used
                somewhere in your system. Call a plumber for a professional
                inspection to locate the source.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW NON-INVASIVE LEAK DETECTION WORKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Leak Detection Works in Boulder City
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a hidden leak does not require opening up large sections
                of wall, floor, or concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods that pinpoint the leak
                location before any repair work begins.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {BC_DETECTION_METHODS.map((m) => (
                <article
                  key={m.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {m.label}.
                    </strong>{" "}
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3b: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspect a Leak in Your Boulder City Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Non-invasive detection locates the source before any repair
                  begins. Call Red Carpet Plumbing at (702) 567-9172 or request an
                  inspection online.
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
                  Request Inspection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES HIDDEN LEAKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Hidden Leaks in Boulder City Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Boulder City&apos;s combination of historic housing stock,
                    aging pipe materials, and hard water from Lake Mead creates
                    leak conditions that are distinct from most other Las Vegas
                    Valley communities.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {BC_LEAK_CAUSES.map((c) => (
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
                Leak Detection and Repair Services for Boulder City Homes
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {BC_LEAK_SERVICES.map((s) => (
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
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        {s.link.suffix}
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
                    How Red Carpet Plumbing Detects and Repairs Leaks in Boulder
                    City
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {BC_LEAK_STEPS.map((step, index) => (
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
                Why Boulder City Homeowners Choose Red Carpet Plumbing for Leak
                Detection
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Boulder City and the Las Vegas Valley. We hold Nevada
                Contractor License #0048585A under the C-1 Plumbing and Heating
                classification. We have been serving the Las Vegas Valley,
                including Boulder City, for over 40 years and are familiar with
                the aging infrastructure and hard water conditions that affect
                this community.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Our office is located at{" "}
              <a
                href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-primary hover:underline"
                aria-label="Get directions to Red Carpet Plumbing on Google Maps"
              >
                3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118
              </a>
              . Office hours are Monday through Friday, 7:30 AM to 4:30 PM. For
              our full range of plumbing services, visit our{" "}
              <Link
                href="/plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                plumbing services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 8: BOULDER CITY NEIGHBORHOODS WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Boulder City Neighborhoods We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides leak detection and repair throughout
                Boulder City. Call (702) 567-9172 to confirm coverage for your
                address.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {BOULDER_CITY_AREAS.map((area) => (
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
                Leak Detection FAQs for Boulder City Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BC_LEAK_FAQS.map((faq) => (
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
          headline="Suspect a Leak in Your Boulder City Home?"
          body="Do not wait on a suspected leak. Red Carpet Plumbing provides non-invasive leak detection and repair throughout Boulder City and the Las Vegas Valley. We locate the source before any repair begins. Transparent pricing. No hidden fees."
          primaryCTA={{
            label: "Call (702) 567-9172",
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
