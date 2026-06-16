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

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency service" trust claims are source-site
// claims surfaced in the approved brief and shown on this page. License
// #0048585A and transparent-pricing are also source-site claims. Confirm all
// before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed Place (Green Valley) + containedInPlace City (Henderson)
// + containedInPlace State Nevada; WebPage isPartOf WebSite; 5 separate JsonLd
// blocks; HowTo for the visible process steps). No AggregateRating schema.
// Green Valley is a community within the incorporated City of Henderson — never
// described as a city or unincorporated community.
//
// DEVIATION (approved precedent): the Section 1 hero subheading's
// "...thermal imaging — without opening up walls or floors." em dash was changed
// to a comma per the no-em-dash copy rule, applying the resolution the user
// approved for the identical conflict on Page 30. No other copy altered.

export const metadata: Metadata = {
  title:
    "Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
  // FLAG: description below is the approved brief string (~205 chars). It
  // exceeds the site's ≤160 meta-description standard; kept as approved pending
  // a trim decision. See build report.
  description:
    "Non-invasive leak detection and repair in Green Valley, Henderson, NV. Red Carpet Plumbing locates hidden water leaks using acoustic sensors, pressure testing, and thermal imaging. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/green-valley/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection for Green Valley and Green Valley Ranch homes. Acoustic sensors, pressure testing, thermal imaging. Original copper and polybutylene pipe expertise. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. Visible FAQ section AND FAQPage JSON-LD both derive
// from this single array. Do not edit one without the other.
// ---------------------------------------------------------------------------
const GV_LEAK_FAQS = [
  {
    question:
      "How do I know if I have a hidden water leak in my Green Valley home?",
    answer:
      "The most common signs of a hidden water leak in a Green Valley home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint on walls or ceilings, a persistent musty odor in part of the home, reduced water pressure with no other explanation, and unexplained cracks in walls or flooring. If you notice one or more of these signs, a professional leak detection inspection can locate the source.",
  },
  {
    question: "How can I check for a water leak myself in Green Valley?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the meter reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes pipe leaks in Green Valley homes?",
    answer:
      "The most common causes in Green Valley are aging copper supply lines in homes built from the late 1970s through the mid-1990s, which have been thinned by 30 to 45 years of hard water mineral corrosion. Caliche and expansive clay soil movement beneath slab foundations adds mechanical stress to those pipes. Some older Green Valley homes also contain polybutylene pipe, which is prone to failure without warning. Closed-loop system pressure cycling accelerates pipe fatigue in pipes already weakened by corrosion.",
  },
  {
    question:
      "Does Green Valley have more pipe leaks than newer Henderson neighborhoods?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the late 1970s through the mid-1990s, have copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 45 years. Hard water mineral corrosion thins pipe walls continuously over that period. Combined with caliche soil movement beneath slab foundations, original Green Valley homes carry a higher leak risk than newer Henderson construction such as Green Valley Ranch and communities developed after 2000.",
  },
  {
    question: "How does non-invasive leak detection work in Green Valley?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows the plumber to pinpoint the leak location without opening large sections of the home. Pressure testing confirms which line is losing pressure, and thermal imaging identifies temperature differences caused by hot water leaks. Together these methods locate hidden leaks precisely before any repair begins.",
  },
  {
    question:
      "Can a small hidden leak cause serious damage in my Green Valley home?",
    answer:
      "Yes. A small hidden leak inside a wall can promote mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign above the surface. An underground supply line leak can waste hundreds of gallons per month and create soil saturation conditions near the foundation. Early detection and repair limits damage and reduces total repair cost.",
  },
];

// ---------------------------------------------------------------------------
// Warning signs — visible <ul> in Section 2. Matches sibling pattern exactly.
// ---------------------------------------------------------------------------
const WARNING_SIGNS: string[] = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

// ---------------------------------------------------------------------------
// Detection methods — Section 3. Three titled cards.
// ---------------------------------------------------------------------------
const DETECTION_METHODS: { title: string; body: string }[] = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This method allows Red Carpet Plumbing to locate leaks precisely through finished surfaces without cutting or demolition. For original Green Valley homes with aging copper or polybutylene supply lines, acoustic detection pinpoints the failure location before any repair work is discussed.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line it is on. Pressure testing is a standard step in the detection process and is also used to verify that repairs are complete and the system holds pressure after work is finished.",
  },
  {
    title: "Thermal Imaging",
    body: "For hot water line leaks, thermal imaging identifies temperature differences on floor and wall surfaces caused by escaping hot water. Thermal imaging narrows the search area before acoustic confirmation and pressure testing pinpoint the precise location.",
  },
];

// ---------------------------------------------------------------------------
// What causes pipe leaks in Green Valley — four cause factors.
// Original GV copper leads per established pattern.
// ---------------------------------------------------------------------------
const GV_LEAK_CAUSES: { title: string; body: string }[] = [
  {
    title: "Aging Copper Pipes in Green Valley's Original Neighborhoods",
    body: "Green Valley's original neighborhoods were developed from the late 1970s through the mid-1990s. Homes in this era were built primarily with copper supply lines that have now been exposed to Las Vegas Valley hard water for 30 to 45 years. Over that period, dissolved minerals have continuously thinned pipe walls from the inside out, creating conditions where pinhole leaks and pipe failures are increasingly common in both above-slab and under-slab lines. Some homes built during this period also contain polybutylene pipe, a gray plastic material known to fail without warning that was widely installed from the late 1970s through the mid-1990s. Green Valley Ranch, developed from the mid-1990s through the mid-2000s, carries a lower but still present risk as those homes reach 20 to 30 years of age and enter their first major service cycle.",
  },
  {
    title: "Hard Water Mineral Corrosion",
    body: "Green Valley receives the same Las Vegas Valley municipal water supply as the rest of Henderson, drawn from Lake Mead and measuring 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This places Green Valley among the hardest municipal water environments in the United States. Sustained hard water exposure accelerates corrosion inside copper and older pipe walls, thinning them faster than in cities with softer water and increasing the rate of pinhole leaks, supply line failures, and fixture connection leaks.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "Green Valley, like the rest of the Las Vegas Valley, sits on caliche and expansive clay soils that shift with seasonal temperature changes and rainfall. This soil movement places ongoing mechanical stress on pipes running beneath concrete slab foundations, creating friction points where pipe contacts rebar or aggregate and stressing joints and connections under the slab. For original Green Valley homes where pipe walls are already thinned by decades of hard water exposure, the combination of corrosion and soil stress significantly elevates leak risk.",
  },
  {
    title: "Closed-Loop System Pressure Cycling",
    body: "Most Green Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Water heating causes thermal expansion that creates repeated pressure spikes inside the plumbing system. Over years, these pressure cycles accelerate pipe fatigue, particularly in pipes already thinned by hard water corrosion and stressed by soil movement. A thermal expansion tank reduces this pressure stress and is required by Clark County code and most manufacturer warranties on water heater installations.",
  },
];

// ---------------------------------------------------------------------------
// Leak detection services — Section 5.
// Slab service card links to core /slab-leak-detection-repair/ and the built
// /green-valley/slab-leak-detection-repair/ page.
// Video camera card links to core /video-camera-plumbing-inspections/.
// ---------------------------------------------------------------------------
const GV_LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
  gvLink?: { href: string; text: string };
  todo?: string;
}[] = [
  {
    label: "Wall and ceiling leak detection",
    body: "Pinhole leaks inside walls and above ceilings are common in original Green Valley copper plumbing. We use acoustic sensors and moisture detection to locate wall and ceiling leaks without opening large sections of finished surfaces.",
  },
  {
    label: "Underground supply line leak detection",
    body: "Underground supply line leaks increase water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground leaks in both aging copper and older pipe materials and provide targeted repair or replacement recommendations.",
  },
  {
    label: "Slab leak detection",
    body: "Slab leaks are a significant risk in original Green Valley neighborhoods, where aging copper lines and caliche soil movement combine beneath slab foundations. Red Carpet Plumbing provides slab leak detection using acoustic sensors, thermal imaging, and pressure testing.",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
    // ACTIVATED: P33 built and staged
    gvLink: {
      href: "/green-valley/slab-leak-detection-repair/",
      text: "Green Valley slab leak detection",
    },
  },
  {
    label: "Pressure testing and leak confirmation",
    body: "Pressure testing confirms active water loss in the plumbing system and identifies which line is affected. We also use pressure testing after repairs to verify that the repair is complete and the system holds pressure.",
  },
  {
    label: "Video camera plumbing inspection",
    body: "A video camera inspection allows us to see the interior condition of drain and sewer lines, identify the source of a recurring problem, and confirm that a repair is complete. Camera inspection is particularly useful when leak symptoms suggest a specific line but acoustic detection requires visual confirmation.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process exactly.
// ---------------------------------------------------------------------------
const GV_LEAK_STEPS: { name: string; body: string }[] = [
  {
    name: "Assessment",
    body: "We start with a visual inspection and review of your reported symptoms to understand where the leak may be located and which detection methods are appropriate for your home. For original Green Valley homes with aging copper or polybutylene supply systems, we note the pipe material and age context before selecting the detection approach.",
  },
  {
    name: "Detection",
    body: "Using acoustic sensors, pressure testing, and thermal imaging where applicable, we locate the leak precisely. We identify the affected line and the exact location before any repair work is discussed.",
  },
  {
    name: "Repair Options",
    body: "We present the repair options for the specific leak location, pipe type, and condition. For older Green Valley homes with aging copper or polybutylene pipe, we discuss whether the surrounding pipe condition suggests a targeted repair or a more comprehensive approach is appropriate.",
  },
  {
    name: "Repair and Confirmation",
    body: "We complete the approved repair and confirm the system holds pressure after work is finished. We clean up the work area before leaving.",
  },
];

// ---------------------------------------------------------------------------
// Trust strip — 4 items matching Henderson sibling pattern.
// ---------------------------------------------------------------------------
const LEAK_TRUST_STRIP: string[] = [
  "Non-Invasive Detection",
  // FLAG: verify before final launch.
  "NV Licensed, #0048585A",
  // FLAG: source-site claim — verify before final launch.
  "24/7 Emergency Service",
  "Serving Green Valley and Henderson",
];

// ---------------------------------------------------------------------------
// Related services block. All Green Valley sibling routes (drain, water heater,
// slab leak) are built and linked.
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
    label: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
  },
  {
    label: "Henderson Leak Detection and Repair",
    href: "/henderson/leak-detection-repair/",
  },
  {
    label: "Green Valley Drain Cleaning",
    href: "/green-valley/drain-cleaning/",
  },
  {
    label: "Green Valley Water Heater Repair",
    href: "/green-valley/water-heater-repair-installation/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
  },
  {
    // ACTIVATED: P33 built and staged
    label: "Green Valley Slab Leak Detection and Repair",
    href: "/green-valley/slab-leak-detection-repair/",
  },
];

// ---------------------------------------------------------------------------
// Communities grid.
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

const HERO_TRUST_ITEMS = [
  // FLAG: verify before publishing.
  "4.8 stars, 76 Google reviews",
  // FLAG: verify before final launch.
  "NV Licensed #0048585A",
  // FLAG: verify before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: source-site claim — verify before final launch.
  "Transparent pricing, no hidden fees",
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
  name: "Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair for homes in Green Valley, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate hidden leaks without demolition. Original Green Valley copper and polybutylene pipe expertise.",
  url: "https://redcarpetplumbing.com/green-valley/leak-detection-repair/",
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
      name: "Leak Detection and Repair in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Green Valley",
  serviceType: "Leak Detection and Repair",
  description:
    "Non-invasive leak detection and repair for homes and businesses in Green Valley, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging. Wall and ceiling leak detection, underground supply line detection, slab leak detection, and all repair options. Nevada Contractor License #0048585A.",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Detects and Repairs Leaks in Green Valley",
  description:
    "The process Red Carpet Plumbing follows for leak detection and repair in Green Valley, Henderson, NV.",
  step: GV_LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GreenValleyLeakDetectionPage() {
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
            { label: "Leak Detection and Repair in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Green Valley, Henderson, NV"
          subheading="Hidden water leaks in Green Valley homes cause serious damage before they become visible. Red Carpet Plumbing locates leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, without opening up walls or floors. Serving original Green Valley neighborhoods, Green Valley Ranch, and all Henderson communities."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Non-invasive detection. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Professional leak detection service in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <TrustStrip
          items={LEAK_TRUST_STRIP}
          ariaLabel="Why Green Valley customers choose Red Carpet Plumbing for leak detection"
        />

        {/* SECTION 2: WARNING SIGNS + METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Hidden Water Leak in Your Green Valley Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                The most common signs of a hidden water leak in a Green Valley
                home are an unexplained increase in your water bill, the sound of
                running water when all fixtures are off, warm or wet spots on
                floors, discoloration or bubbling paint, and unexplained cracks in
                walls or flooring. Hidden water leaks inside walls, beneath floors,
                or underground can cause significant damage before any visible sign
                appears. Recognizing the early warning signs helps Green Valley
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

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                How to Check Your Water Meter for a Leak
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                If you suspect a hidden leak in your Green Valley home, the water
                meter test is a simple way to confirm whether active water loss is
                occurring. Turn off all water fixtures and appliances in your home.
                Locate your water meter at the street and record the reading. Do
                not use any water for 30 minutes, then check the meter again. If
                the meter reading has changed, water is being used somewhere in the
                system, which indicates an active leak. This test confirms a leak
                is present but does not locate it. Call a licensed plumber for a
                professional inspection to find the source.
              </p>
            </div>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              If you notice one or more of these signs in your Green Valley home, a
              professional leak detection inspection can locate the source before
              further damage occurs. Call Red Carpet Plumbing at (702) 567-9172 or
              request service online. For more on Green Valley plumbing conditions,
              see our{" "}
              <Link
                href="/green-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Green Valley plumbing services
              </Link>{" "}
              page.
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
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Locating a hidden leak does not require opening up large
                  sections of wall, floor, or concrete to search. Red Carpet
                  Plumbing uses professional non-invasive detection methods that
                  pinpoint the leak location before any repair work begins. For a
                  broader overview, see our{" "}
                  <Link
                    href="/leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    leak detection and repair
                  </Link>{" "}
                  services.
                </p>
                <p>
                  Electronic acoustic sensors amplify the sound of pressurized
                  water escaping from pipes through walls, floors, and
                  underground. This allows our plumbers to identify the leak
                  location within a few inches without cutting open large sections
                  of your Green Valley home. Thermal imaging can also identify
                  temperature differences caused by water escaping from hot water
                  supply lines beneath slabs or inside walls.
                </p>
                <p>
                  The result is a precise leak location before any disruption to
                  your home, allowing targeted repairs rather than exploratory
                  demolition.
                </p>
              </div>
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing serves all Green Valley neighborhoods and the
              surrounding{" "}
              <Link
                href="/henderson-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Henderson plumbing services
              </Link>{" "}
              area.
            </p>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES PIPE LEAKS IN GREEN VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Pipe Leaks in Green Valley Homes
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {GV_LEAK_CAUSES.map((c) => (
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
                Leak Detection and Repair Services We Provide in Green Valley
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {GV_LEAK_SERVICES.map((s) => (
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
                    {s.gvLink ? (
                      <>
                        {" "}
                        For Green Valley-specific slab leak information, see our{" "}
                        <Link
                          href={s.gvLink.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.gvLink.text}
                        </Link>{" "}
                        page.
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Detects and Repairs Leaks in Green
                    Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a leak detection
                    inspection in Green Valley, our licensed plumbers follow a
                    consistent process to locate the leak precisely and present
                    your repair options before any work begins.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_LEAK_STEPS.map((step, index) => (
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
                  Suspected Water Leak in Green Valley?
                </h2>
                {/* FLAG: source-site claim — verify emergency availability before final launch */}
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides non-invasive leak detection and
                  repair throughout Green Valley, including original Green Valley
                  neighborhoods and Green Valley Ranch. Call or request service
                  online.
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

        {/* SECTION 8: SERVICE AREA / COMMUNITIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Green Valley and Nearby Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides leak detection and repair throughout
                Green Valley, part of the incorporated City of Henderson. We serve
                both the original Green Valley neighborhoods and Green Valley
                Ranch, along with nearby Henderson communities. For full Henderson
                plumbing service details, see our{" "}
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

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection FAQs for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_LEAK_FAQS.map((faq) => (
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
          headline={<>Suspected Water Leak<br />in Green Valley, Henderson?</>}
          body="Do not wait on a suspected water leak. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide non-invasive leak detection and repair throughout Green Valley and Henderson."
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
