import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// ---------------------------------------------------------------------------
// Active FLAGs for this page (source-only; none appear in rendered copy):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - gas line scope (ALIANTE_WH_SERVICES gas/electric item) — VERIFY scope.
//   - "Transparent Pricing, No Hidden Fees" hero trust item + ctaNote —
//     source-site claim, VERIFY before final launch.
//
// Schema follows the established site-wide service-location pattern: Plumber
// provider; areaServed Place (Aliante, North Las Vegas, Nevada) +
// containedInPlace City (North Las Vegas) + containedInPlace State Nevada;
// WebPage isPartOf WebSite; 5 separate JsonLd blocks; HowTo for the visible
// process steps. No AggregateRating schema. NO sameAs on this service-location
// page (sameAs lives only on the Aliante hub Plumber schema).
//
// Aliante is copper-only, 2000-2008 construction. This is an Aliante-only
// refinement of the NLV parent page: single-segment first-replacement-cycle
// narrative. Do NOT add galvanized, polybutylene, Kitec, dual-vintage, or
// commercial-corridor (Craig Road / Cheyenne / Losee) content to this page.
// Permit jurisdiction is the City of North Las Vegas, not Clark County.
//
// Title, WebPage schema name, OG title, H1, and breadcrumb #4 all use the
// consistent "in the Aliante Area of North Las Vegas, NV" form (approved).
//
// Hero uses card.webp, not hero.webp: hero.webp is the low-res 350x350 Batch 3
// asset; card.webp is the larger asset, matching the NLV water heater sibling.
// TODO: dedicated higher-resolution hero asset for this service.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Water heater repair and installation in the Aliante area of North Las Vegas. Tank, tankless, expansion tanks, seismic bracing. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV",
    description:
      "Red Carpet Plumbing provides water heater repair, replacement, and tankless installation in the Aliante area of North Las Vegas. Aliante homes built 2000-2008 are at or past first replacement cycle. Licensed plumbers, NV #0048585A.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/",
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
const ALIANTE_WH_FAQS = [
  {
    question:
      "How long do water heaters last in the Aliante area of North Las Vegas?",
    answer:
      "Tank water heaters in the Aliante area typically last 8 to 12 years, often at the lower end of that range due to Las Vegas Valley hard water. The valley's 17 to 24 grains per gallon water hardness accelerates sediment buildup and anode rod depletion, both of which shorten tank life. Most Aliante homes were built between 2000 and 2008, placing original water heaters at 17 to 25 years old, well past expected service life. Tankless water heaters generally last 15 to 20 years but require annual descaling.",
  },
  {
    question: "Should I repair or replace my Aliante water heater?",
    answer:
      "For water heaters under 8 years old with a repairable component failure, repair is usually the right choice. For Aliante homes with original water heaters from 2000 to 2008, replacement typically makes more long-term financial sense. These units are now 17 to 25 years old and have been operating under hard water conditions throughout their service life. Red Carpet Plumbing will give you an honest assessment of both options before recommending a course of action.",
  },
  {
    question:
      "Why does my Aliante water heater make popping or rumbling noises?",
    answer:
      "Popping and rumbling sounds from a water heater are caused by sediment buildup on the bottom of the tank. Las Vegas Valley hard water from Lake Mead causes sediment to accumulate faster than in most other cities. Water trapped under sediment layers boils and creates these sounds during the heating cycle. Annual tank flushing removes sediment before it hardens into scale.",
  },
  {
    question: "Do I need a thermal expansion tank in the Aliante area?",
    answer:
      "Most Aliante homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Current plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your Aliante home does not have one, Red Carpet Plumbing can add it to your existing system or include it in a new installation.",
  },
  {
    question:
      "Is seismic bracing required for water heater installation in the Aliante area?",
    answer:
      "Yes. Nevada plumbing code requires seismic bracing on all water heater installations, including two heavy-gauge steel straps secured at code-specified heights. The City of North Las Vegas is the permit jurisdiction for water heater installations in the Aliante area. Red Carpet Plumbing installs all units to current code requirements including seismic bracing.",
  },
  {
    question:
      "Who issues permits for water heater installation in the Aliante area?",
    answer:
      "The City of North Las Vegas is the permit jurisdiction for water heater installations in the Aliante area. Aliante is a master-planned community within the incorporated City of North Las Vegas. Red Carpet Plumbing holds NV License #0048585A and works within the City of North Las Vegas permit process for applicable installations.",
  },
];

// ---------------------------------------------------------------------------
// Signs an Aliante water heater needs service (Section 2 list).
// ---------------------------------------------------------------------------
const ALIANTE_WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles (common in Aliante homes due to hard water sediment)",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
];

// ---------------------------------------------------------------------------
// Water heater services offered in the Aliante area.
// ---------------------------------------------------------------------------
const ALIANTE_WH_SERVICES = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a new water heater matched to your household's hot water demand, installed to current code with seismic bracing and thermal expansion tank where required.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, eliminate standby heat loss, and can last 15 to 20 years with proper maintenance. In the Aliante area, annual descaling removes hard water mineral deposits from the heat exchanger. We install and service tankless units for residential properties.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from Aliante water heater tanks before it hardens into scale that reduces efficiency and shortens tank life.",
  },
  {
    label: "Anode rod replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion under Aliante's hard water conditions.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "Most Aliante homes operate on a closed-loop plumbing system. We install thermal expansion tanks to meet code and manufacturer warranty requirements on new and existing water heater installations.",
  },
  {
    // FLAG: VERIFY gas line scope before publishing.
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work performed under NV License #0048585A.",
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process on the page exactly.
// ---------------------------------------------------------------------------
const ALIANTE_WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve, and visible damage before making any recommendations. For Aliante homes with original water heaters from 2000 to 2008, we note the unit's age and remaining service life as part of the assessment.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older in Aliante homes, replacement typically makes more long-term financial sense than continued repairs on a unit already operating past its expected service life under hard water conditions. We give you a clear, honest assessment of both options.",
  },
  {
    name: "Present your options clearly",
    body: "Before any work begins, we explain what we found, what the repair or replacement involves, and what the job will cost. We do not start work without your approval.",
  },
  {
    name: "Complete the work to current code",
    body: "All water heater work is completed to current code requirements including seismic bracing on new installations, thermal expansion tank on closed-loop systems, and proper venting on gas units. The City of North Las Vegas is the permit jurisdiction for Aliante area water heater installations.",
  },
];

// ---------------------------------------------------------------------------
// Why Aliante water heaters need service sooner. Copper-only, 2000-2008
// framing. NO galvanized, NO commercial corridor, NO dual-vintage narrative.
// ---------------------------------------------------------------------------
const ALIANTE_WH_CAUSES = [
  {
    title: "Original Units at or Past First Replacement Cycle",
    body: "Most homes in the Aliante area were built between 2000 and 2008. Standard tank water heaters have an expected service life of 8 to 12 years under normal conditions. Even at the conservative end, original Aliante water heaters from 2000 to 2008 are now 17 to 25 years old, well past that service window. Las Vegas Valley hard water compounds the issue by accelerating sediment accumulation and anode rod depletion, often shortening the practical service life of tank units to 8 to 10 years rather than the maximum 12. Many Aliante homeowners are already on their second water heater or dealing with an original unit that has been showing strain for several years.",
  },
  {
    title: "Hard Water Mineral Buildup and Sediment",
    body: "Las Vegas Valley municipal water from Lake Mead measures 17 to 24 grains per gallon of dissolved minerals, making it among the hardest municipal water in the United States. Calcium and magnesium deposit inside water heater tanks throughout the heating cycle, forming a sediment layer on the tank bottom. This sediment reduces heating efficiency, causes the popping and rumbling noises that Aliante homeowners frequently report, and acts as an insulating layer that forces the heating element or burner to work harder. Annual tank flushing removes this buildup before it hardens into scale that cannot be removed.",
  },
  {
    title: "Accelerated Anode Rod Depletion",
    body: "Every tank water heater contains a sacrificial anode rod that corrodes in place of the steel tank, protecting it from internal rust. The national average replacement interval for anode rods is three to five years, but Las Vegas Valley hard water depletes anode rods significantly faster than that. A fully depleted anode rod in an Aliante home leaves the steel tank unprotected, and rapid internal corrosion can follow within one to two years. Annual water heater inspections that check and replace the anode rod as needed are strongly recommended for Aliante homeowners.",
  },
  {
    title: "Closed-Loop Pressure System and Thermal Expansion",
    body: "Most Aliante homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When a water heater heats water, the expanding volume has nowhere to go in a closed loop, causing repeated pressure spikes that stress the tank lining and connections over time. A thermal expansion tank absorbs these pressure spikes. Current plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your Aliante home was built without one, Red Carpet Plumbing can add it to an existing installation.",
  },
];

// ---------------------------------------------------------------------------
// Aliante sub-areas served (plain-text chips, matching the hub page style).
// ---------------------------------------------------------------------------
const ALIANTE_WH_SUBAREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 8 -- related services. All cards link directly to built
// Aliante-specific routes (emergency P40, drain P41, leak P43, slab P44).
// ---------------------------------------------------------------------------
const ALIANTE_WH_RELATED = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response to water heater failures, burst pipes, sewer backups, and other plumbing emergencies in the Aliante area.",
    // P40 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Emergency plumbing service in the Aliante area",
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning for Aliante area homes where hard water mineral buildup drives recurring clogs.",
    // P41 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in the Aliante area",
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Detection and repair of visible and hidden leaks in Aliante area homes, including pinhole leaks in copper supply lines.",
    // ACTIVATED: P43 built and staged
    href: "/north-las-vegas/aliante-area/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in the Aliante area",
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Detection and repair of supply line leaks beneath slab foundations in Aliante area homes.",
    // ACTIVATED: P44 built and staged
    href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in the Aliante area",
  },
];

// Hero trust strip.
const HERO_TRUST_ITEMS = [
  // FLAG: source-site claim — verify before final launch.
  "NV Licensed Plumbers, #0048585A",
  "Tank and Tankless Water Heaters",
  "Seismic Bracing and Expansion Tanks",
  // FLAG: source-site claim — verify before final launch.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Aliante is a community within the incorporated City of
// North Las Vegas, so Service.areaServed uses Place (Aliante, North Las Vegas,
// Nevada) -> containedInPlace City (North Las Vegas) -> containedInPlace State
// (Nevada). Do NOT use AdministrativeArea. Do NOT use Clark County. Do NOT add
// sameAs on this service-location page.
// ---------------------------------------------------------------------------
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in the Aliante Area of North Las Vegas",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing provides water heater repair and installation for homes in the Aliante area of North Las Vegas, NV, including tank water heater repair and replacement, tankless water heater installation, anode rod replacement, thermal expansion tank installation, and annual flush and maintenance.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Aliante, North Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "North Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aliante Area Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Water Heater Repair and Installation in the Aliante Area",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/",
    },
  ],
};

// HowTo schema included because Section 4 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Water Heater Call in the Aliante Area of North Las Vegas",
  step: ALIANTE_WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation in the Aliante area of North Las Vegas, NV. Tank water heaters, tankless installation, anode rod replacement, thermal expansion tanks, and code-compliant service for Aliante homes. Licensed plumbers, NV License #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteWaterHeaterPage() {
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
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            {
              label: "Aliante Area Plumbing Services",
              href: "/north-las-vegas/aliante-area-plumbing/",
            },
            {
              label:
                "Water Heater Repair and Installation in the Aliante Area",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: dedicated higher-resolution hero asset. hero.webp is the
            low-res 350x350 Batch 3 asset; using the larger card.webp here,
            matching the NLV water heater sibling. */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in the Aliante Area of North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides water heater repair and installation throughout the Aliante area of North Las Vegas, NV. Most Aliante homes were built between 2000 and 2008, placing original water heaters at or past their expected service life under Las Vegas Valley hard water conditions. Our licensed plumbers handle tank water heater repair and replacement, tankless installation, and code-compliant service for Aliante homes. Call (702) 567-9172. NV Contractor License #0048585A."
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
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/card.webp",
            alt: "water heater repair and installation in the Aliante area of North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: SIGNS YOUR ALIANTE WATER HEATER NEEDS SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Aliante Water Heater Needs Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Most Aliante homes were built between 2000 and 2008. Standard
                tank water heaters have an expected service life of 8 to 12 years
                under normal conditions, and Las Vegas Valley hard water shortens
                this through accelerated sediment buildup and anode rod
                depletion. If your Aliante home still has its original water
                heater, it is likely at or significantly past that service
                window. Watch for these signs:
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {ALIANTE_WH_SIGNS.map((sign) => (
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
        </section>

        {/* SECTION 3: WATER HEATER SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in the Aliante Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                For our full{" "}
                <Link
                  href="/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation services
                </Link>{" "}
                overview, see the core service page.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {ALIANTE_WH_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: HOW WE HANDLE A WATER HEATER CALL (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle a Water Heater Call in the Aliante Area
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {ALIANTE_WH_STEPS.map((step, index) => (
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

        {/* SECTION 5: WHY ALIANTE WATER HEATERS NEED SERVICE SOONER */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Aliante Water Heaters Need Service Sooner
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  {ALIANTE_WH_CAUSES.map((cause) => (
                    <article
                      key={cause.title}
                      className="relative bg-white rounded-2xl p-6 pl-7 ring-1 ring-brand-surface-alt before:absolute before:bottom-6 before:left-0 before:top-6 before:w-1 before:rounded-full before:bg-brand-primary sm:p-8 sm:pl-9"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {cause.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {cause.body}
                      </p>
                    </article>
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Water Heater Issues in the Aliante Area?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Aliante homes with original water heaters from 2000 to 2008 are
                  now well past expected service life under Las Vegas hard water
                  conditions. Red Carpet Plumbing will assess your unit and give
                  you a clear, honest recommendation. Call us to get started.
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
                  className="text-base font-semibold text-white underline-offset-4 hover:underline"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SUB-AREAS SERVED */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Aliante Sub-Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides water heater service throughout the
                Aliante community and surrounding northwest North Las Vegas
                neighborhoods. For{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing services
                </Link>{" "}
                or our full{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>
                , see the area hub pages. We also provide{" "}
                <Link
                  href="/north-las-vegas/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation throughout North Las Vegas
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ALIANTE_WH_SUBAREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-brand-surface-alt bg-white px-5 py-3 font-medium text-brand-dark/80">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8: RELATED SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in the Aliante Area
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ALIANTE_WH_RELATED.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  built
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater FAQs for Aliante Area Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_WH_FAQS.map((faq) => (
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
          headline="Need Water Heater Service in the Aliante Area?"
          body="Red Carpet Plumbing serves the Aliante community and surrounding North Las Vegas neighborhoods. Call (702) 567-9172 or request service online."
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
