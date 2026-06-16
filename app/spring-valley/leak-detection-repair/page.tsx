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
// SCHEMA NOTE: Spring Valley is an unincorporated Clark County community; it is
// not an incorporated city. Per the Batch 6 schema normalization,
// Service.areaServed uses Place -> AdministrativeArea (Clark County) -> State
// (Nevada), matching the Paradise and Summerlin pages. Plain City is reserved
// for incorporated cities (Las Vegas, Henderson, North Las Vegas). Provider
// Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Non-invasive leak detection and repair in Spring Valley, NV. Hidden leaks, galvanized pipe leaks, slab leaks. Licensed plumbers. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/spring-valley/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection and repair in Spring Valley, NV. Hidden leaks, galvanized pipe leaks, slab leaks. Licensed plumbers. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley/leak-detection-repair/",
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
const SV_LEAK_FAQS = [
  {
    question:
      "What are the signs of a hidden water leak in a Spring Valley home?",
    answer:
      "The most common signs are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, unexplained cracks in walls or flooring, and rust-colored water from one or more fixtures. Rust-colored water is particularly notable in older Spring Valley homes with original galvanized supply lines, where internal pipe corrosion can introduce rust particles into the water supply as the pipe approaches failure.",
  },
  {
    question: "How do I check for a water leak using my meter in Spring Valley?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes hidden pipe leaks in Spring Valley homes?",
    answer:
      "The most common causes in Spring Valley are galvanized steel supply line corrosion in older Desert Inn and West Sahara corridor homes built in the 1970s through 1990s, hard water mineral corrosion thinning copper pipe walls in same-era homes exposed to Las Vegas Valley hard water for 30 to 45 years, caliche and expansive clay soil movement beneath slab foundations that stresses underground pipes and connections, and closed-loop pressure cycling that fatigues pipe joints over time.",
  },
  {
    question: "How does non-invasive leak detection work in Spring Valley?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground, allowing the plumber to pinpoint the leak location without opening large sections of the home. Pressure testing isolates which section of the plumbing system is losing water. Thermal imaging can identify temperature differences caused by hot water leaks beneath slabs or inside walls. For older Spring Valley homes with galvanized supply lines, acoustic detection helps identify the active failure point precisely along a line that may be corroded throughout.",
  },
  {
    question:
      "If my galvanized pipe develops a leak in Spring Valley, should I repair it or replace the pipe system?",
    answer:
      "For an isolated leak in a galvanized line that is otherwise in serviceable condition, targeted repair can be appropriate. For older Spring Valley homes where the galvanized supply lines have been in place for 30 to 50 years and a first leak has developed, the underlying cause is system-wide internal corrosion rather than an isolated event. In these cases, replacing the galvanized system rather than making repeated spot repairs on a corroding line is typically the more durable and cost-effective long-term solution.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve all Spring Valley neighborhoods for leak detection?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair throughout Spring Valley, including the Desert Inn and West Sahara corridors, Rainbow Boulevard area, Decatur Boulevard area, Tropicana corridor, and surrounding Spring Valley neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive leak detection and repair throughout Spring Valley, Nevada, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. From hidden galvanized pipe leaks and aging copper failures to slab leak detection and supply line repair, our licensed plumbers locate and fix Spring Valley leaks with minimal disruption to your home. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Non-Invasive Leak Detection",
  "Galvanized Pipe, Slab Leaks, Supply Lines",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul> warning signs. The final bullet is the Spring
// Valley-specific rust-colored water sign (required per the build brief).
const WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures and appliances are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
  "Rust-colored water from one or more fixtures (older Spring Valley homes with galvanized lines)",
];

// Section 4 — what causes hidden leaks (bold label + body). Factor 1 (galvanized)
// carries the plain-text "re-piping in Spring Valley" phrase (TODO-BATCH-6, not
// yet linkable).
const LEAK_CAUSES = [
  {
    // TODO-BATCH-6: /spring-valley/re-piping/ not yet built — the "re-piping in
    // Spring Valley" phrase below is rendered as plain text (no anchor).
    label: "Galvanized steel pipe corrosion and failure",
    body: "Homes built along the Desert Inn and West Sahara corridors primarily in the 1970s through 1990s were often constructed with galvanized steel supply lines. Galvanized pipe corrodes from the inside out under Las Vegas Valley hard water conditions. As decades of corrosion build up on the pipe interior, the pipe wall thins progressively. Unlike copper pinhole leaks that often develop slowly and visibly, galvanized pipe failures can occur with relatively little warning once the pipe wall has been sufficiently thinned by internal corrosion. A leak from a galvanized supply line in an older Spring Valley home can release significant water inside a wall or beneath a slab before it becomes apparent. Homes with original galvanized supply lines that have experienced a first leak are strong candidates for re-piping in Spring Valley rather than continued spot repairs on a line that is corroded throughout.",
  },
  {
    label: "Hard water mineral corrosion in copper supply lines",
    body: "Homes built in the 1980s and 1990s throughout Spring Valley that have copper supply lines have been exposed to Las Vegas Valley hard water for 30 to 45 years. Las Vegas Valley water carries approximately 280 parts per million of dissolved minerals, among the hardest municipal water in the United States. Calcium and magnesium deposits thin copper pipe walls from the inside out over time, eventually causing pinhole leaks inside walls, above ceilings, or beneath slab foundations.",
  },
  {
    label: "Caliche and expansive clay soil movement",
    body: "Caliche and expansive clay soils beneath Spring Valley slab foundations shift with temperature changes and seasonal rainfall. This soil movement creates ongoing mechanical stress on pipes buried beneath and embedded in concrete foundations, contributing to pipe joint separation and stress fractures over years of cycling. This effect compounds the existing corrosion risk in older Spring Valley homes with galvanized or thinning copper lines.",
  },
  {
    label: "Closed-loop pressure cycling",
    body: "Most Spring Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating and pressure spikes in closed systems create repeated stress on pipe joints and connections. This pressure cycling accelerates fatigue in pipes already weakened by internal corrosion, compounding the leak risk in older Spring Valley homes.",
  },
];

// Section 5 — leak detection and repair services (label + body, optional inline
// link). The slab item links the built core /slab-leak-detection-repair/ page
// (the Spring Valley-specific slab page is not built yet — TODO-BATCH-6, do not
// link it). The camera item links the built core video inspection page.
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Electronic acoustic leak detection",
    body: "We use professional acoustic detection equipment to identify the sound of pressurized water escaping from pipes through walls, floors, and underground. For older Spring Valley homes with galvanized supply lines, acoustic detection is essential because corrosion failures can occur along a length of pipe rather than at a single pinhole location.",
  },
  {
    label: "Galvanized pipe leak detection and repair",
    body: "When a galvanized supply line in an older Spring Valley home has developed a failure point, we locate the active leak using acoustic and pressure testing equipment, then advise on whether targeted repair or broader pipe replacement makes more sense given the overall condition of the galvanized system.",
  },
  {
    // TODO-BATCH-6: /spring-valley/slab-leak-detection-repair/ not yet built — do
    // not link it. The live link below targets the built core service page.
    label: "Slab leak detection",
    body: "Slab leaks occur when water or sewer pipes running beneath a home's concrete foundation develop cracks or holes. We locate slab leaks using acoustic sensors, thermal imaging, and pressure testing before any repair begins.",
    link: {
      pre: " For full slab leak repair options, see our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page.",
    },
  },
  {
    label: "Wall and ceiling leak detection",
    body: "Corroded galvanized pipes, aging copper connections, and leaking drain lines can release water inside walls and ceilings without visible signs until significant damage has occurred. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
  },
  {
    label: "Water supply line repair",
    body: "Once a leak is located, we repair or replace the damaged pipe section with targeted repairs that minimize disruption. For homes where the overall galvanized or aging copper system has been identified as at-risk, we advise on the full pipe assessment options available.",
  },
  {
    label: "Video camera inspection",
    body: "For drain lines and sewer laterals, a video camera inspection confirms line condition and identifies root intrusion, pipe damage, or structural issues.",
    link: {
      pre: " Learn more about our ",
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
      post: ".",
    },
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const LEAK_STEPS = [
  {
    name: "Gather information and identify symptoms",
    body: "We ask about the signs you have noticed, review the age and type of plumbing in your Spring Valley home, and identify whether galvanized or aging copper supply lines are likely present before deploying detection equipment.",
  },
  {
    name: "Perform pressure testing and meter verification",
    body: "We isolate sections of the plumbing system and perform pressure tests to confirm where water loss is occurring and which section of pipe is affected.",
  },
  {
    name: "Use electronic detection equipment to locate the leak",
    body: "We deploy acoustic sensors, electronic detection equipment, and where appropriate thermal imaging to locate the precise source of the leak. For older Spring Valley homes with galvanized lines, we take particular care to identify whether the active failure point is an isolated event or part of a more broadly corroded section of pipe.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "Once the leak is located, we explain the repair options, the scope of work, and the cost before starting. We make targeted repairs and retest the affected section before we leave.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's galvanized supply line conditions, Desert Inn and West Sahara corridor pipe vintage, and hard water leak risks",
  "Non-invasive detection equipment that locates leaks precisely before any repair work begins",
  "Galvanized pipe leak detection and assessment capability for older Spring Valley homes",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Spring Valley is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in Spring Valley, NV. Hidden leaks, galvanized pipe leaks, slab leaks. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/leak-detection-repair/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Spring Valley, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair for Spring Valley homes, including electronic acoustic detection, galvanized pipe leak detection, slab leak detection, wall and ceiling leak detection, water supply line repair, and video camera inspection.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Spring Valley",
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
  name: "How Red Carpet Plumbing Detects and Repairs Leaks in Spring Valley",
  description:
    "The process Red Carpet Plumbing follows for leak detection and repair in Spring Valley, NV.",
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
  mainEntity: SV_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyLeakDetectionPage() {
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
              label: "Spring Valley Plumbing Services",
              href: "/spring-valley-plumbing-services/",
            },
            { label: "Leak Detection and Repair in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Spring Valley, NV"
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
            alt: "Non-invasive leak detection and repair in Spring Valley, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS AND WATER METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Hidden Water Leak in Your Spring Valley Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden leaks in Spring Valley homes can come from aging
                galvanized supply lines that corrode internally, copper pipes
                thinned by decades of hard water exposure, or pipes stressed by
                soil movement beneath slab foundations. Recognizing the warning
                signs early helps prevent water damage, mold growth, and
                structural problems.
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
              If you notice one or more of these signs in your Spring Valley
              home, call Red Carpet Plumbing at (702) 567-9172 or{" "}
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
                How Non-Invasive Leak Detection Works in Spring Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a hidden leak does not require opening large sections of
                wall, floor, or concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods to pinpoint the leak
                location before any repair work begins. For a broader overview of
                our detection services, see our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair
                </Link>{" "}
                page.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Electronic acoustic sensors amplify the sound of pressurized
                water escaping from pipes through walls, floors, and underground.
                This allows our plumbers to identify the leak location precisely
                without cutting open large sections of your Spring Valley home.
                Thermal imaging can identify temperature differences caused by
                hot water escaping from supply lines beneath slabs or inside
                walls. Pressure testing isolates which section of the plumbing
                system is losing water, confirming an active leak and narrowing
                the detection area before acoustic work begins.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                For older Spring Valley homes with galvanized supply lines,
                professional detection equipment is particularly important
                because galvanized corrosion failures can occur anywhere along a
                heavily corroded line rather than at a single identifiable
                pinhole location. Acoustic detection helps identify the active
                failure point precisely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES HIDDEN LEAKS IN SPRING VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Hidden Leaks in Spring Valley Homes
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
                Leak Detection and Repair Services in Spring Valley
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
                    Our Leak Detection Process in Spring Valley
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
                Why Spring Valley Homeowners Choose Red Carpet Plumbing for Leak
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
            {/* Emergency plumbing, drain cleaning, water heater repair, and */}
            {/* slab leak detection in Spring Valley are all built anchors. */}
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              including{" "}
              <Link
                href="/spring-valley/emergency-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                emergency plumbing in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/drain-cleaning/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                drain cleaning in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/water-heater-repair-installation/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                water heater repair in Spring Valley
              </Link>
              , and{" "}
              <Link
                href="/spring-valley/slab-leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                slab leak detection in Spring Valley
              </Link>
              . We also serve communities near Spring Valley including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
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
                Leak Detection and Repair in Spring Valley &mdash; Frequently
                Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_LEAK_FAQS.map((faq) => (
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
          headline={<>Schedule Non-Invasive Leak Detection<br />in Spring Valley Today</>}
          body="Red Carpet Plumbing provides non-invasive leak detection and repair throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Call (702) 567-9172 or request service online."
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
