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
  title:
    "Water Heater Repair and Installation in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Water heater repair and installation in Spring Valley, NV. Tank and tankless water heaters, thermal expansion tanks, seismic bracing. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Water heater repair and installation in Spring Valley, NV. Tank and tankless water heaters, thermal expansion tanks, seismic bracing. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/",
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
const SV_WH_FAQS = [
  {
    question: "How long do water heaters last in Spring Valley?",
    answer:
      "Tank water heaters in the Las Vegas Valley typically last 8 to 12 years. Spring Valley's hard water supply accelerates anode rod depletion and sediment buildup compared to national averages, meaning water heaters tend to reach end of service life at the lower end of that range without regular maintenance. Older Spring Valley homes with galvanized supply lines may see even shorter effective service life due to rust particles and sediment entering the tank from corroding supply lines.",
  },
  {
    question:
      "Do I need a thermal expansion tank on my Spring Valley water heater?",
    answer:
      "Most Spring Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your water heater was installed without one, Red Carpet Plumbing can add it during a service call.",
  },
  {
    question: "Why is my hot water rust-colored in my Spring Valley home?",
    answer:
      "Rust-colored hot water in Spring Valley can have two common causes. The first is internal tank corrosion from a depleted anode rod; the anode rod has been consumed and the steel tank is now corroding. The second, more common in older Desert Inn and West Sahara corridor homes, is rust and sediment entering the water heater from corroding galvanized steel supply lines. Either cause warrants a professional inspection. A water heater with significant internal corrosion typically needs replacement.",
  },
  {
    question: "Should I repair or replace my Spring Valley water heater?",
    answer:
      "For units under 8 years old with a repairable component failure, repair is generally the right choice. For units 10 years or older, or units with tank corrosion or a failed tank body, replacement typically makes more financial sense, especially under Las Vegas hard water conditions that accelerate wear. For older Spring Valley homes with galvanized supply lines, we also assess whether supply line deterioration is affecting the water heater as part of our evaluation.",
  },
  {
    question:
      "Is seismic bracing required for water heater installation in Spring Valley?",
    answer:
      "Yes. Clark County plumbing code requires seismic bracing on all water heater installations, including two heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Clark County code including seismic bracing.",
  },
  {
    question:
      "Who issues permits for water heater installation in Spring Valley?",
    answer:
      "Spring Valley is an unincorporated community in Clark County, Nevada. Plumbing permits and inspections in Spring Valley are handled through Clark County, not the City of Las Vegas. Red Carpet Plumbing holds NV License #0048585A and works within the applicable Clark County permit process for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides water heater repair and installation throughout Spring Valley, Nevada, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. From tank water heater repair and replacement to new installations with code-compliant seismic bracing and thermal expansion tanks, our licensed plumbers serve Spring Valley homes. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Tank and Tankless Water Heaters",
  "Seismic Bracing and Expansion Tanks",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Spring Valley water heaters fail faster (bold label + body).
// Hard water leads per the established pattern. The galvanized supply line item
// references a TODO-BATCH-6 route (/spring-valley/re-piping/) as PLAIN TEXT
// only — no anchor until that page is built.
const WH_CAUSES = [
  {
    label: "Hard water mineral buildup",
    body: "Las Vegas Valley water carries 17 to 24 grains of hardness per gallon, approximately 280 parts per million of dissolved minerals. This is among the hardest municipal water in the United States. Calcium and magnesium deposits accumulate inside water heater tanks faster than in softer-water cities, reducing heating efficiency, causing the popping and rumbling noises Spring Valley homeowners commonly report, and shortening tank lifespan. Annual flushing is more important in Spring Valley than in most parts of the country.",
  },
  {
    label: "Accelerated anode rod depletion",
    body: "The anode rod inside every tank water heater corrodes in place of the steel tank. Las Vegas Valley hard water depletes anode rods significantly faster than the three to five year national average. A depleted anode rod in a Spring Valley home can lead to rapid internal tank corrosion within one to two years. Annual inspections that include anode rod checks are strongly recommended for Spring Valley homeowners.",
  },
  {
    label: "Closed-loop pressure system stress",
    body: "Most Spring Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating creates pressure spikes that stress the tank lining and connections over time. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop installations. A missing expansion tank is a common finding in Spring Valley homes during water heater service calls.",
  },
  {
    label: "Clark County seismic bracing requirements",
    body: "Clark County plumbing code requires all water heater installations to include seismic bracing, with two heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Clark County code including seismic bracing.",
  },
  {
    // TODO-BATCH-6: /spring-valley/re-piping/ not yet built — the re-piping
    // reference below renders as plain text only until the page exists.
    label: "Galvanized supply lines affecting water heater performance",
    body: "Older homes in the Desert Inn and West Sahara corridors built in the 1970s through 1990s may have original galvanized steel supply lines feeding the water heater. As galvanized pipe corrodes from the inside out, rust particles and sediment enter the water heater tank, accelerating internal corrosion and contaminating the anode rod. Rust-colored hot water, faster-than-normal sediment accumulation, and recurring heating element failures can all be signs of galvanized supply line deterioration affecting the water heater. Homes experiencing these symptoms may also be candidates for re-piping in Spring Valley alongside water heater replacement.",
  },
];

// Section 4 — visible <ul> signs list.
const WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
  "A water heater that is 10 or more years old",
];

// Section 5 — water heater services (bold label + body). The tankless item
// carries an inline link to the built /re-piping/ core page.
const WH_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. For older Spring Valley homes, we assess whether galvanized supply lines may be contributing to water heater performance issues before recommending repair or replacement.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Clark County code. Tank water heaters in Las Vegas typically last 8 to 12 years under hard water conditions.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from tank water heaters before it hardens into scale. Las Vegas hard water makes annual flushing significantly more important here than in most other cities. For older Spring Valley homes, flushing also removes rust particles introduced by corroding galvanized supply lines.",
  },
  {
    label: "Anode rod inspection and replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion and extend service life under Spring Valley hard water conditions.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes, protect the water heater, and meet Clark County code and manufacturer warranty requirements. If your Spring Valley water heater was installed without an expansion tank, we can add one during a service call.",
  },
  {
    label: "Tankless water heater installation",
    body: "For homeowners considering a tankless water heater upgrade, we install tankless units to current Clark County code including proper venting on gas units. Tankless water heaters can last 15 to 20 years with proper maintenance. For homes that may need broader pipe assessment alongside water heater work, see our",
    link: { href: "/re-piping/", text: "re-piping" },
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve, expansion tank, and supply line condition. For older Spring Valley homes, we check whether galvanized supply lines are contributing to water heater performance issues.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion, replacement typically makes more long-term financial sense. We give you a clear, honest assessment before any recommendation.",
  },
  {
    name: "Present your options",
    body: "Before any work begins, we explain what we found, what the repair or installation involves, and what the job will cost. We do not start work without your approval.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County code including seismic bracing on new installations, thermal expansion tank on closed-loop systems, and proper venting on gas units. We test the unit before we leave.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's older housing stock, Desert Inn and West Sahara corridor galvanized supply conditions, and hard water water heater failure patterns",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Clark County code-compliant seismic bracing and thermal expansion tank installation on every new water heater",
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
  name: "Water Heater Repair and Installation in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation in Spring Valley, NV. Tank and tankless water heaters, thermal expansion tanks, seismic bracing. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/",
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
      name: "Water Heater Repair and Installation in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Spring Valley, NV",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing provides water heater repair, replacement, and installation for Spring Valley homes, including tank and tankless units, thermal expansion tank installation, anode rod replacement, and Clark County code-compliant seismic bracing.",
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
  name: "How Red Carpet Plumbing Handles Water Heater Service in Spring Valley",
  description:
    "The process Red Carpet Plumbing follows for water heater repair and installation in Spring Valley, NV.",
  step: WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SV_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyWaterHeaterPage() {
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
            {
              label: "Water Heater Repair and Installation in Spring Valley",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Spring Valley, NV"
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
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/hero.webp",
            alt: "Licensed water heater repair and installation in Spring Valley, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Water Heater Services in Spring Valley
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Spring Valley, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification and have been serving the Las Vegas Valley
                for over 40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Spring Valley is an unincorporated Clark County community, and
                our license covers plumbing work throughout Clark County
                including Spring Valley. We provide complete water heater
                services throughout Spring Valley, including repair, replacement,
                new installation, thermal expansion tank installation, anode rod
                replacement, and code-compliant seismic bracing.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                For full-service plumbing in Spring Valley, visit our{" "}
                <Link
                  href="/spring-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Spring Valley plumbing services
                </Link>{" "}
                page. For water heater service information across the Las Vegas
                Valley, visit our{" "}
                <Link
                  href="/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY WATER HEATERS FAIL FASTER IN SPRING VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Water Heaters Fail Faster in Spring Valley Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Spring Valley homes face the same hard water conditions as
                    the rest of the Las Vegas Valley, and older homes in the
                    Desert Inn and West Sahara corridors face additional water
                    heater stress factors that are specific to their plumbing
                    vintage.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {WH_CAUSES.map((c) => (
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

        {/* SECTION 4: SIGNS YOUR WATER HEATER NEEDS SERVICE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Spring Valley Water Heater Needs Service
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <ul className="space-y-3">
                {WH_SIGNS.map((item) => (
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
              If your Spring Valley home is showing any of these signs, call Red
              Carpet Plumbing at (702) 567-9172 for a diagnosis.
            </p>
          </div>
        </section>

        {/* SECTION 5: WATER HEATER SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in Spring Valley
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {WH_SERVICES.map((s) => (
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
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
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

        {/* SECTION 6: OUR WATER HEATER SERVICE PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Water Heater Service Process in Spring Valley
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {WH_STEPS.map((step, index) => (
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
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Spring Valley Homeowners Choose Red Carpet Plumbing
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
            {/* TODO-BATCH-6: re-piping in Spring Valley renders as PLAIN TEXT */}
            {/* until that route exists. Emergency plumbing, drain cleaning, and */}
            {/* leak detection in Spring Valley are built anchors. */}
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
                href="/spring-valley/leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                leak detection in Spring Valley
              </Link>
              , and re-piping in Spring Valley. We also serve communities near
              Spring Valley including{" "}
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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Repair and Installation in Spring Valley &mdash;
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_WH_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Schedule Water Heater Service<br />in Spring Valley Today</>}
          body="Red Carpet Plumbing provides water heater repair and installation throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Call (702) 567-9172 or request service online."
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
