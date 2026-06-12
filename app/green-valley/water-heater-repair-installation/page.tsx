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
// #0048585A, transparent-pricing, and Clark County code-compliance are also
// source-site claims. Confirm all before final launch.
// FLAG: VERIFY gas line scope before publishing (gas water heater service item).
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed Place (Green Valley) + containedInPlace City (Henderson)
// + containedInPlace State Nevada; WebPage isPartOf WebSite; 5 separate JsonLd
// blocks; HowTo for the visible process steps). No AggregateRating schema.
// Green Valley is a community within the incorporated City of Henderson — never
// described as a city or unincorporated community.
//
// CODE/PERMIT NOTE: Green Valley installations follow Clark County plumbing code
// (seismic bracing, thermal expansion tank), while permits are handled through
// the City of Henderson. This is distinct from Boulder City (its own building
// department). Do not substitute Boulder City language here.

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  // FLAG: description below is the approved brief string (~205 chars). It
  // exceeds the site's ≤160 meta-description standard; kept as approved pending
  // a trim decision. See build report.
  description:
    "Water heater repair and installation in Green Valley, Henderson, NV. Red Carpet Plumbing services original Green Valley and Green Valley Ranch homes. Tank and tankless. Clark County code. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed water heater repair and installation for Green Valley and Green Valley Ranch homes. Hard water maintenance, seismic bracing, thermal expansion tanks. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. Visible FAQ section AND FAQPage JSON-LD schema both
// derive from this single array — character-for-character match guaranteed.
// Do not edit one without the other.
// ---------------------------------------------------------------------------
const GV_WH_FAQS = [
  {
    question: "How long do water heaters last in Green Valley?",
    answer:
      "In Green Valley, tank water heaters typically last 8 to 12 years, often shorter than the national average due to Las Vegas Valley hard water. Hard water causes faster sediment buildup and accelerated anode rod depletion, both of which shorten tank life. Original Green Valley homes with plumbing systems 30 to 45 years old have often cycled through multiple water heaters under these hard water conditions. Tankless water heaters generally last 15 to 20 years but require annual descaling to remove mineral deposits from the heat exchanger.",
  },
  {
    question: "Do Green Valley homes have more water heater problems?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the late 1970s through the mid-1990s, have plumbing systems that have operated under Las Vegas Valley hard water conditions for 30 to 45 years. This sustained mineral exposure depletes anode rods faster, accumulates more sediment, and puts more cumulative stress on water heater systems than in newer construction. Original Green Valley homeowners are among the most common Henderson water heater service calls. Green Valley Ranch homes built from the mid-1990s through mid-2000s are also entering the second replacement cycle as original or first-replacement units reach or pass the 8 to 12 year Las Vegas service life.",
  },
  {
    question: "Should I repair or replace my Green Valley water heater?",
    answer:
      "For water heaters under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, units with visible tank corrosion, or units leaking from the tank body, replacement typically makes more financial sense than continued repairs. Red Carpet Plumbing provides an honest assessment of both options before recommending a course of action.",
  },
  {
    question: "Is a tankless water heater worth it in Green Valley?",
    answer:
      "Tankless water heaters offer longer service life, no standby heat loss, and continuous hot water on demand. In Green Valley, they require annual descaling to remove hard water mineral deposits from the heat exchanger. For original Green Valley homes where aging tank units are a recurring issue, or for households with high hot water demand, a tankless unit is often a sound long-term investment.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Green Valley Ranch for water heater service?",
    answer:
      "Yes. Red Carpet Plumbing provides water heater repair and installation throughout Green Valley, including Green Valley Ranch, as well as the surrounding Henderson communities. Green Valley is part of the incorporated City of Henderson, and we serve all Green Valley neighborhoods.",
  },
  {
    question:
      "What is a thermal expansion tank and does my Green Valley home need one?",
    answer:
      "A thermal expansion tank absorbs the pressure created when a water heater heats water in a closed-loop plumbing system. Most Green Valley homes operate on a closed-loop system due to backflow preventers at the street meter. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your water heater was installed without one, Red Carpet Plumbing can add it.",
  },
];

// ---------------------------------------------------------------------------
// Why Green Valley water heaters fail faster — four cause factors.
// Two-era housing narrative leads (original GV then GV Ranch). Hard water
// sediment is cause 3 here; the housing-era aging argument is the topical
// differentiator for this GV page and leads.
// ---------------------------------------------------------------------------
const GV_WH_CAUSES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Original Green Valley homes and aging water heaters",
    body: "Green Valley's original neighborhoods, developed from the late 1970s through the mid-1990s, are now 30 to 45 years old. Most water heaters in these homes have been replaced at least once, and many are on their second or third unit, all operating under Las Vegas Valley hard water conditions that accelerate sediment buildup, deplete anode rods faster, and reduce tank lifespan. Some original Green Valley homes also have copper supply lines that have thinned from decades of hard water mineral exposure, which can affect water quality and water heater performance. Original Green Valley homeowners represent the highest concentration of water heater service and replacement candidates in Henderson.",
    // ACTIVATED: P33 built and staged
    link: {
      href: "/green-valley/slab-leak-detection-repair/",
      text: "Green Valley slab leak detection",
    },
  },
  {
    label: "Green Valley Ranch entering the second replacement cycle",
    body: "Green Valley Ranch, developed primarily from the mid-1990s through the mid-2000s, has homes that are now 20 to 30 years old. Standard tank water heaters have an expected service life of 8 to 12 years under Las Vegas Valley hard water conditions, meaning original or first-replacement units installed in Green Valley Ranch homes are at or past their expected service life. Many Green Valley Ranch homeowners are scheduling replacements or dealing with early failure symptoms including inconsistent hot water, increased energy use, and sediment-related noise.",
  },
  {
    label: "Hard water sediment buildup and anode rod depletion",
    body: "All Green Valley homes receive the same Lake Mead municipal supply as the rest of the Las Vegas Valley, carrying 17 to 24 grains per gallon of dissolved calcium and magnesium. These minerals deposit sediment inside water heater tanks faster than in softer-water cities, reducing heating efficiency and causing the popping and rumbling sounds common in Las Vegas Valley water heaters. The same hard water depletes anode rods significantly faster than the three to five year national average. An undetected depleted anode rod allows rapid internal tank corrosion, accelerating failure in both original Green Valley and Green Valley Ranch units.",
  },
  {
    label: "Closed-loop system and Clark County code requirements",
    body: "Most Green Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When the water heater heats water, the expanding volume has nowhere to go in a closed system, causing repeated pressure spikes that stress the tank lining and connections. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop installations. Clark County code also requires seismic bracing on all new water heater installations, with two heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Clark County code. Permits are handled through the City of Henderson.",
  },
];

// ---------------------------------------------------------------------------
// Signs you need water heater service — visible <ul>, matches sibling pages.
// ---------------------------------------------------------------------------
const GV_WH_SIGNS: string[] = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
  "A water heater that is 10 or more years old",
];

// ---------------------------------------------------------------------------
// Water heater services offered in Green Valley.
// Gas scope item carries a FLAG source comment per standing rule (the `flag`
// field is source-only metadata and is never rendered).
// ---------------------------------------------------------------------------
const GV_WH_SERVICES: {
  label: string;
  body: string;
  flag?: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Clark County code, including seismic bracing and thermal expansion tank where required.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, last 15 to 20 years with proper maintenance, and eliminate standby heat loss. In Green Valley, annual descaling removes hard water mineral deposits from the heat exchanger. We install and service tankless units for residential and commercial properties.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from Green Valley water heater tanks before it hardens into scale and reduces efficiency. We also inspect the anode rod, pressure relief valve, and all connections during a maintenance visit.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "If your Green Valley home operates on a closed-loop system and your water heater was installed without a thermal expansion tank, we add one. Clark County code and most manufacturer warranties require a thermal expansion tank on closed-loop installations.",
  },
  {
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters, including pilot light issues, thermocouple failures, heating element replacement, and gas valve repairs. All gas work is performed under NV License #0048585A.",
    // FLAG: VERIFY gas line scope before publishing.
    flag: "FLAG: VERIFY gas line scope before publishing",
  },
  {
    label: "Re-piping support",
    body: "For original Green Valley homes where aging copper supply lines are contributing to water quality or pressure problems at the water heater, our licensed plumbers can assess whether re-piping is needed alongside the water heater replacement.",
    link: { href: "/re-piping/", text: "re-piping services" },
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process exactly.
// ---------------------------------------------------------------------------
const GV_WH_STEPS: { name: string; body: string }[] = [
  {
    name: "Diagnose the water heater problem",
    body: "We start by gathering information about the unit, including its age, the symptoms you are experiencing, and its maintenance history. We inspect the unit for sediment buildup, anode rod condition, pressure relief valve function, and any visible corrosion. For original Green Valley homes with copper supply systems, we also assess the surrounding plumbing context before making recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion or a failed tank body, replacement typically makes more long-term financial sense. We give you an honest assessment of both options including estimated costs so you can make an informed decision.",
  },
  {
    name: "Present your options clearly",
    body: "Before any work begins, we explain what we found, what the repair or replacement involves, and what the job will cost. We do not start work without your approval. If a replacement is needed, we discuss the right size and type of unit for your household and the pros and cons of tank versus tankless for your specific situation.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. Permits are handled through the City of Henderson. We test the unit before we leave to confirm it is operating correctly.",
  },
];

// ---------------------------------------------------------------------------
// Related services block. All Green Valley sibling routes (drain, leak, slab)
// are built and linked.
// ---------------------------------------------------------------------------
const RELATED_SERVICES: { label: string; href?: string }[] = [
  {
    label: "Green Valley Plumbing Services",
    href: "/green-valley-plumbing-services/",
  },
  {
    label: "Henderson Plumbing Services",
    href: "/henderson-plumbing-services/",
  },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  {
    label: "Henderson Water Heater Repair",
    href: "/henderson/water-heater-repair-installation/",
  },
  {
    label: "Green Valley Drain Cleaning",
    href: "/green-valley/drain-cleaning/",
  },
  {
    // ACTIVATED: P32 built and staged
    label: "Green Valley Leak Detection and Repair",
    href: "/green-valley/leak-detection-repair/",
  },
  {
    // ACTIVATED: P33 built and staged
    label: "Green Valley Slab Leak Detection and Repair",
    href: "/green-valley/slab-leak-detection-repair/",
  },
];

// ---------------------------------------------------------------------------
// Communities grid — Green Valley sub-areas and nearby Henderson communities.
// Live links to confirmed hubs only. All sub-area names are plain text chips.
// ---------------------------------------------------------------------------
const GV_COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Duck Creek Area" },
  { name: "Paseo Verde Parkway Area" },
  { name: "Warm Springs Area" },
  { name: "Seven Hills" },
  { name: "Anthem" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Henderson", href: "/henderson-plumbing-services/" },
];

// Hero trust strip. FLAG comments retained per established sibling pattern.
const HERO_TRUST_ITEMS = [
  // FLAG: verify before publishing.
  "4.8 stars, 76 Google reviews",
  // FLAG: verify before final launch.
  "NV Licensed Plumbers, #0048585A",
  // FLAG: verify before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Installed to Clark County Code",
  "Tank and Tankless Water Heaters",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Green Valley is a community within the incorporated City of
// Henderson, so Service.areaServed uses Place (Green Valley) -> containedInPlace
// City (Henderson) -> containedInPlace State (Nevada). Do NOT use City for
// Green Valley. Do NOT use AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters for homes in Green Valley, Henderson, NV. Original Green Valley aging copper systems, Green Valley Ranch second-cycle replacement, hard water maintenance, and Clark County code installations.",
  url: "https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/",
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
      name: "Green Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Green Valley",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing repairs and installs water heaters for homes and businesses in Green Valley, Henderson, NV. Tank water heater repair and replacement, tankless water heater installation, flush and maintenance, anode rod replacement, and thermal expansion tank installation. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Green Valley, Nevada",
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

// HowTo schema included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Water Heater Call in Green Valley",
  description:
    "The water heater service process used by Red Carpet Plumbing for Green Valley, Henderson homes.",
  step: GV_WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GreenValleyWaterHeaterPage() {
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
              label: "Green Valley Plumbing Services",
              href: "/green-valley-plumbing-services/",
            },
            {
              label: "Water Heater Repair and Installation in Green Valley",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Green Valley, Henderson, NV"
          subheading="Red Carpet Plumbing repairs and installs water heaters for homes and businesses throughout Green Valley, part of Henderson, NV, including original Green Valley neighborhoods and Green Valley Ranch. Green Valley hard water causes faster sediment buildup and anode rod depletion, and original Green Valley homes with 30 to 45 years of hard water exposure have above-average water heater failure rates. Our licensed plumbers handle all water heater work to current Clark County plumbing code. Call (702) 567-9172 to schedule service."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Water Heater Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Clark County code installations."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/card.webp",
            alt: "water heater repair and installation in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Service for Green Valley Homes
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  In Green Valley, tank water heaters typically last 8 to 12
                  years, often shorter than the national average due to Las Vegas
                  Valley hard water. Red Carpet Plumbing repairs and installs
                  water heaters for homes and businesses throughout Green Valley
                  and Henderson. For a broader overview of our services, see our{" "}
                  <Link
                    href="/water-heater-repair-installation/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water heater repair and installation
                  </Link>{" "}
                  page.
                </p>
                <p>
                  Green Valley&apos;s hard water conditions, aging copper supply
                  systems in the original neighborhoods, and the first
                  replacement cycle underway in Green Valley Ranch all make
                  professional water heater service and regular maintenance more
                  important here than in most communities. Whether your water
                  heater is making noise, producing discolored water, running out
                  of hot water faster than it used to, or has simply reached the
                  end of its service life, our licensed plumbers can assess the
                  unit and complete the repair or installation to current code.
                </p>
                <p>
                  For more information about plumbing services throughout Green
                  Valley, visit our{" "}
                  <Link
                    href="/green-valley-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Green Valley plumbing services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY GREEN VALLEY WATER HEATERS NEED SERVICE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Green Valley Water Heaters Need Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Green Valley water heater service is shaped by the age of the
                    community, the hard water supply, and the Clark County code
                    requirements that govern every installation. Original Green
                    Valley homes lead the list, with Green Valley Ranch close
                    behind.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {GV_WH_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                        {c.link ? (
                          <>
                            {" "}
                            Aging copper supply lines in these homes also raise
                            slab leak risk; see our{" "}
                            <Link
                              href={c.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {c.link.text}
                            </Link>{" "}
                            page.
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>

              <SectionRevealItem className="mt-6">
                <p className="text-base leading-7 text-brand-dark/80">
                  Original Green Valley homeowners with aging copper supply
                  systems may also want to review their slab leak risk alongside
                  a water heater service visit. See our{" "}
                  <Link
                    href="/green-valley/slab-leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Green Valley slab leak detection
                  </Link>{" "}
                  page for more information.
                </p>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU NEED SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Green Valley Water Heater Needs Repair or Replacement
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Las Vegas Valley hard water accelerates the failure timeline for
                tank water heaters. If you notice any of these signs in your Green
                Valley home, contact a licensed plumber for an assessment.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {GV_WH_SIGNS.map((item) => (
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

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in Green Valley
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {GV_WH_SERVICES.map((s) => (
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

        {/* SECTION 6: REPAIR VS. REPLACE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Should You Repair or Replace Your Green Valley Water Heater?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                For Green Valley homeowners, the repair-vs-replace decision
                depends on the unit&apos;s age, condition, and repair cost
                relative to replacement. Red Carpet Plumbing provides an honest
                assessment of both options before recommending a course of
                action.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When repair makes sense
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Repair is usually the right choice for water heaters under 8
                  years old with a repairable component failure, such as a faulty
                  heating element, thermostat, pilot light assembly, or pressure
                  relief valve. If the tank body is intact and the unit is not
                  heavily corroded internally, repair is typically more
                  cost-effective.
                </p>
              </article>
              <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When replacement makes sense
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Replacement makes more financial sense for units 10 years or
                  older, units with visible tank corrosion, units leaking from the
                  tank body itself, or units that have required repeated repairs.
                  In original Green Valley homes where a water heater has been
                  operating under hard water conditions for a decade or more,
                  replacement with a properly installed unit that includes a
                  thermal expansion tank and seismic bracing is often the most
                  reliable long-term solution.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles a Water Heater Call in Green
                    Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a water heater service
                    in Green Valley, our licensed plumbers follow a consistent
                    process to make sure you understand your options before any
                    work begins.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_WH_STEPS.map((step, index) => (
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

        {/* SECTION 8: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Water Heater Problems in Green Valley?
                </h2>
                {/* FLAG: source-site claim — verify emergency availability before final launch */}
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water mineral buildup and aging copper supply systems in
                  original Green Valley neighborhoods make water heater failures
                  more common here than in most Henderson communities. Red Carpet
                  Plumbing installs all replacement units to current Clark County
                  plumbing code. Call us to schedule an assessment.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: SERVICE AREA / COMMUNITIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Green Valley and Nearby Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Green Valley, part of the incorporated City of
                Henderson. We serve both the original Green Valley neighborhoods
                and Green Valley Ranch, along with nearby Henderson communities.
                For full Henderson plumbing service details, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-brand-surface-alt px-5 py-3 font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt transition-colors hover:text-brand-primary-hover hover:shadow-md"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-brand-surface-alt bg-white px-5 py-3 font-medium text-brand-dark/80">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Plumbing Services
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RELATED_SERVICES.map((s) =>
                  s.href ? (
                    <li key={s.label}>
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
                  ) : (
                    // Fallback render branch for href-less related items (currently unused).
                    <li key={s.label}>
                      <span className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark/70 ring-1 ring-brand-surface-alt">
                        <span aria-hidden="true" className="text-brand-primary">
                          &rarr;
                        </span>
                        {s.label}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater FAQs for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_WH_FAQS.map((faq) => (
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

        {/* SECTION 11: FINAL CTA */}
        <CTASection
          background="red"
          headline="Water Heater Problems in Green Valley, Henderson?"
          body="Do not wait on a failing water heater. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We repair and install water heaters throughout Green Valley and Henderson with all work completed to current Clark County plumbing code."
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
