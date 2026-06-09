import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas and the Las Vegas Valley. Tank and tankless water heaters, licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas and the Las Vegas Valley. Tank and tankless water heaters, licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const WATER_HEATER_FAQS = [
  {
    question: "How long does a water heater last in Las Vegas?",
    answer:
      "In Las Vegas, tank water heaters typically last 8 to 12 years, often shorter than the national average due to the valley's extremely hard water. Hard water causes sediment buildup and accelerates anode rod depletion, both of which shorten tank life. Tankless water heaters generally last 15 to 20 years but require annual descaling to remove hard water mineral deposits from the heat exchanger.",
  },
  {
    question: "What are the signs my water heater needs repair?",
    answer:
      "Common signs include no hot water or insufficient hot water, popping or rumbling noises from the tank, rust-colored or cloudy hot water, a small leak at pipe connections, a pilot light that keeps going out on a gas unit, or a tripped breaker on an electric unit. Popping and rumbling sounds are especially common in Las Vegas homes due to hard water sediment buildup inside the tank.",
  },
  {
    question: "Should I repair or replace my water heater?",
    answer:
      "For water heaters under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, units with visible tank corrosion, or units that are leaking from the tank body itself, replacement typically makes more financial sense than continued repairs. Red Carpet Plumbing will give you an honest assessment of both options before recommending a course of action.",
  },
  {
    question: "Is a tankless water heater worth it in Las Vegas?",
    answer:
      "Tankless water heaters offer longer service life, no standby heat loss, and continuous hot water on demand. In Las Vegas, they require annual descaling to remove hard water mineral deposits from the heat exchanger. For homes with high hot water demand or older tank units nearing end of life, a tankless water heater is often a sound long-term investment. Red Carpet Plumbing can help you evaluate whether a tankless unit makes sense for your specific household.",
  },
  {
    question: "Why does my water heater make popping or rumbling noises?",
    answer:
      "Popping and rumbling sounds from a water heater are caused by sediment buildup on the bottom of the tank. In Las Vegas, the high mineral content in the water causes sediment to accumulate faster than in most other cities. Water trapped under sediment layers boils and creates these sounds during the heating cycle. Annual flushing removes sediment before it hardens into scale and reduces efficiency.",
  },
  {
    question: "How often should I flush my water heater in Las Vegas?",
    answer:
      "Annual flushing is recommended for Las Vegas homes due to the valley's extremely hard water. The standard recommendation in softer-water cities is every one to two years, but Las Vegas water hardness of 17 to 24 grains per gallon causes sediment to accumulate faster and harden into scale more quickly. Annual flushing removes deposits before they reduce efficiency or damage the tank.",
  },
  {
    question: "What is an anode rod and why does it matter in Las Vegas?",
    answer:
      "The anode rod is a sacrificial metal rod inside every tank water heater that corrodes in place of the steel tank, protecting it from internal rust. In Las Vegas, the extremely hard water depletes anode rods significantly faster than the typical three to five year replacement interval. A depleted anode rod leaves the tank unprotected and can lead to rapid corrosion and early tank failure. Annual water heater inspections that check the anode rod condition are strongly recommended for Las Vegas homes.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Henderson and Summerlin for water heater service?",
    answer:
      "Yes. Red Carpet Plumbing provides water heater repair and installation throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

const SIGNS_NEED_REPAIR = [
  "No hot water or insufficient hot water from your taps",
  "Popping or rumbling noises from the tank during heating cycles",
  "Rust-colored or cloudy hot water from your faucets",
  "A small leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out on a gas water heater",
  "A breaker that keeps tripping on an electric water heater",
  "Hot water that runs out faster than it used to",
];

const SIGNS_NEED_REPLACEMENT = [
  "The water heater is 10 years old or older",
  "Visible tank corrosion or rust on the exterior of the unit",
  "A leak coming from the tank body itself, not from connections",
  "Repeated repairs to the same unit in a short period of time",
  "Significantly higher utility bills with no other explanation",
  "Reduced hot water output even after maintenance and flushing",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved water heater service image when available
const WATER_HEATER_SERVICES: ServiceTypeCard[] = [
  {
    title: "Water Heater Repair",
    description:
      "Red Carpet Plumbing diagnoses and repairs all types of water heater problems including failed heating elements, faulty thermostats, tripped breakers, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair to ensure the repair makes sense given the remaining service life of the heater.",
    href: "/water-heater-repair-installation/repair/",
  },
  {
    title: "Water Heater Replacement",
    description:
      "When repair is no longer cost-effective or the tank has reached the end of its service life, we replace the unit with a new water heater matched to your household's hot water demand. We handle the full installation including disconnecting the old unit, installing the new unit to Clark County code, and testing before we leave.",
    href: "/water-heater-repair-installation/replacement/",
  },
  {
    title: "Tankless Water Heater Installation",
    description:
      "Tankless water heaters heat water on demand rather than storing a tank of heated water. They can last 15 to 20 years with proper maintenance and eliminate standby heat loss. In Las Vegas, tankless units require annual descaling to remove hard water mineral deposits from the heat exchanger. We install and service tankless water heaters for residential and commercial properties.",
    href: "/water-heater-repair-installation/tankless/",
  },
  {
    title: "Water Heater Flush and Maintenance",
    description:
      "Las Vegas hard water causes sediment to accumulate inside water heater tanks faster than in most other cities. Annual flushing removes calcium and magnesium deposits that reduce efficiency, cause popping and rumbling noises, and shorten tank life. Red Carpet Plumbing recommends annual flushing for Las Vegas homes rather than the standard two-year interval used in softer-water cities.",
    href: "/water-heater-repair-installation/maintenance/",
  },
  {
    title: "Anode Rod Replacement",
    description:
      "The anode rod is a sacrificial metal component inside every tank water heater that protects the tank from internal corrosion. In Las Vegas, the extremely hard water depletes anode rods significantly faster than the national average. A depleted anode rod leads to rapid internal tank corrosion. We inspect and replace anode rods as part of water heater maintenance to extend tank life.",
    href: "/water-heater-repair-installation/anode-rod/",
  },
  {
    title: "Thermal Expansion Tank Installation",
    description:
      "Las Vegas residential plumbing typically operates on a closed-loop system due to backflow preventers at the street meter. When a water heater heats water, the expanding water volume has nowhere to go in a closed system, causing pressure spikes that stress the tank and plumbing. A thermal expansion tank absorbs this pressure. Clark County code and most water heater warranties require a thermal expansion tank on closed-loop systems.",
    href: "/water-heater-repair-installation/expansion-tank/",
  },
  {
    title: "Gas Water Heater Service",
    description:
      "Red Carpet Plumbing services gas water heaters including conventional tank units and gas tankless models. We diagnose and repair pilot light failures, thermocouple issues, gas valve problems, and venting concerns. All gas line work is performed under our NV Contractor License #0048585A (C-1 Plumbing and Heating).",
    href: "/water-heater-repair-installation/gas/",
  },
  {
    title: "Electric Water Heater Service",
    description:
      "We diagnose and repair electric water heaters including failed upper and lower heating elements, thermostat failures, wiring issues, and tripped breakers. We also install electric tankless water heaters and can advise on the electrical panel capacity requirements for high-demand electric tankless units.",
    href: "/water-heater-repair-installation/electric/",
  },
];

const LV_WATER_HEATER_FACTORS = [
  {
    title: "Extreme Hard Water Mineral Buildup",
    body: "Las Vegas municipal water averages 17 to 24 grains of hardness per gallon, making it among the hardest water in the United States. This high mineral content causes calcium and magnesium deposits to accumulate inside water heater tanks and heat exchangers much faster than in softer-water cities. Sediment buildup reduces heating efficiency, causes the characteristic popping and rumbling noises Las Vegas homeowners often report, and shortens tank lifespan. Flushing your water heater annually is more important in Las Vegas than almost anywhere else in the country.",
  },
  {
    title: "Rapid Anode Rod Depletion",
    body: "The anode rod inside every tank water heater is a sacrificial component designed to corrode before the tank does, protecting the steel tank from internal rust. In Las Vegas, the extremely high mineral content in the water depletes anode rods significantly faster than the three to five year national average. A failed anode rod in a Las Vegas home can lead to rapid internal tank corrosion within one to two years. Annual water heater inspections that include anode rod checks are strongly recommended for Las Vegas homes.",
  },
  {
    title: "Closed-Loop Pressure System Requirements",
    body: "Most Las Vegas homes operate on a closed-loop plumbing system due to backflow preventers installed at the street meter to protect the municipal water supply. When a water heater heats water, it expands. In a closed-loop system, this expanding water has nowhere to go, causing repeated pressure spikes inside the tank that stress the glass lining and connections. Without a thermal expansion tank to absorb these pressure spikes, Las Vegas water heaters are subject to accelerated internal wear. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop installations.",
  },
  {
    title: "Desert Heat and Seismic Installation Requirements",
    body: "Nevada is one of the most seismically active states in the country. Clark County building code requires water heater installations to include seismic bracing, with two heavy-gauge steel straps secured to wall studs at specific heights to prevent the unit from tipping during a seismic event. A full 50-gallon water heater weighs approximately 500 pounds when full. Red Carpet Plumbing installs all water heaters to current Clark County code including seismic bracing requirements.",
  },
];

const WATER_HEATER_STEPS = [
  {
    name: "Diagnose the water heater problem",
    body: "We start by gathering information about the unit, including its age, the symptoms you are experiencing, and its maintenance history. We inspect the unit for sediment buildup, anode rod condition, pressure relief valve function, and any visible damage or corrosion. This gives us a complete picture of the unit's current condition before we make any recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion or a failed tank body, replacement typically makes more long-term financial sense than repeated repairs. We give you a clear, honest assessment of both options including estimated repair cost versus replacement cost so you can make an informed decision.",
  },
  {
    name: "Present your options clearly",
    body: "Before any work begins, we explain what we found, what the repair or replacement involves, and what the job will cost. We do not start work without your approval. If a replacement is needed, we discuss the right size and type of water heater for your household's hot water demand and the pros and cons of tank versus tankless for your specific situation.",
  },
  {
    name: "Complete the repair or installation to code",
    body: "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly.",
  },
];

const SERVICE_AREAS = [
  "Las Vegas",
  "Henderson",
  "North Las Vegas",
  "Summerlin",
  "Paradise",
  "Spring Valley",
  "Enterprise",
  "Boulder City",
];

type RelatedService = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  built: boolean;
};

const RELATED_SERVICES: RelatedService[] = [
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting to clear clogs and restore proper flow.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Specialized slab leak detection and repair for Las Vegas homes where shifting desert soils and hard water accelerate pipe damage.",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Home foundation showing signs of a slab leak",
    built: true,
  },
  {
    title: "Emergency Plumbing",
    description:
      "Fast response to burst pipes, major leaks, and plumbing emergencies throughout Las Vegas.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing repairs and installs water heaters for homes and businesses throughout Las Vegas and the Las Vegas Valley, including tank water heater repair and replacement, tankless water heater installation, water heater flush and maintenance, anode rod replacement, and thermal expansion tank installation.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    telephone: "+17025679172",
    url: "https://redcarpetplumbing.com",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Nevada C-1 Plumbing and Heating Contractor License",
      identifier: "0048585A",
      issuedBy: {
        "@type": "Organization",
        name: "State of Nevada Contractors Board",
      },
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    "Las Vegas, NV",
    "Henderson, NV",
    "North Las Vegas, NV",
    "Paradise, NV",
    "Summerlin, NV",
    "Spring Valley, NV",
    "Enterprise, NV",
    "Boulder City, NV",
    "Green Valley, NV",
    "Lake Las Vegas, NV",
    "Las Vegas Valley, NV",
  ],
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
      name: "Water Heater Repair and Installation",
      item: "https://redcarpetplumbing.com/water-heater-repair-installation/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Water Heater Service",
  description:
    "The water heater repair and replacement assessment process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: WATER_HEATER_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/water-heater-repair-installation/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WATER_HEATER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WaterHeaterRepairInstallationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Water Heater Repair and Installation" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Water Heater Repair
              <br className="hidden sm:block" /> and Installation
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing repairs and installs water heaters for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether your water heater has stopped working, is leaking, or is reaching the end of its service life, our licensed plumbers diagnose the problem and provide clear options before any work begins."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "NV Licensed Plumbers, #0048585A",
            "Over 40 years serving Las Vegas",
            "Transparent pricing, no hidden fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Water Heater Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for water heater service"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_STRIP_ITEMS.map((item, index) => {
                const isLast = index === TRUST_STRIP_ITEMS.length - 1;
                return (
                  <li
                    key={item}
                    className={`relative flex items-center gap-2${
                      isLast
                        ? ""
                        : " sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:h-4 sm:after:w-px sm:after:bg-white/20"
                    }`}
                  >
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
                );
              })}
            </ul>
          </div>
        </section>

        {/* SECTION 3: SIGNS YOUR WATER HEATER NEEDS SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Water Heater
                <br className="hidden sm:block" /> Needs Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Most water heater problems give you warning signs before they
                become emergencies. Catching these signals early gives you the
                option to repair rather than replace.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Signs You May Need Repair
                </h3>
                <ul className="mt-4 space-y-3">
                  {SIGNS_NEED_REPAIR.map((item) => (
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
              </article>

              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-muted/40">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Signs You May Need Replacement
                </h3>
                <ul className="mt-4 space-y-3">
                  {SIGNS_NEED_REPLACEMENT.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-muted/60"
                      />
                      <span className="text-base leading-7 text-brand-dark/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="mt-10 max-w-3xl text-base leading-7 text-brand-dark/80">
              If you are unsure whether repair or replacement is the right
              choice, Red Carpet Plumbing will give you a clear assessment of
              the unit&apos;s condition and an honest recommendation before any work
              begins.
            </p>
          </div>
        </section>

        {/* SECTION 4: WATER HEATER SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Water Heater Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of water heater
                    repair and installation services for residential and
                    commercial properties throughout Las Vegas and the Las
                    Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved water heater service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {WATER_HEATER_SERVICES.map((card) => (
                    <ServiceCard
                      key={card.href}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      built={false}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: WHY LAS VEGAS IS HARD ON WATER HEATERS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Is Hard
                    <br className="hidden sm:block" /> on Water Heaters
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas has some of the most demanding conditions for
                    water heater performance in the country. Understanding the
                    local factors that affect water heater lifespan helps
                    homeowners make informed decisions about maintenance,
                    repair, and replacement timing.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_WATER_HEATER_FACTORS.map((factor) => (
                  <article
                    key={factor.title}
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                  >
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      {factor.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      {factor.body}
                    </p>
                  </article>
                ))}
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing
                    <br className="hidden sm:block" /> Handles Water Heater Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing about a water heater
                    problem, we follow a clear process to make sure you get an
                    honest assessment and the right solution for your
                    situation.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {WATER_HEATER_STEPS.map((step, index) => (
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
        <section className="bg-brand-charcoal">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Water Heater Problem
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides water heater repair and
                  installation throughout Las Vegas and the Las Vegas Valley.
                  Our licensed plumbers diagnose the problem honestly and give
                  you clear options before any work begins.
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
                <p className="text-sm text-white/60">
                  Available for emergency water heater service
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Water Heater Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides water heater repair and
                installation throughout the Las Vegas Valley.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                See our dedicated water heater pages for{" "}
                <Link
                  href="/las-vegas/water-heater-repair-installation/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas
                </Link>
                ,{" "}
                <Link
                  href="/henderson/water-heater-repair-installation/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson
                </Link>
                , and{" "}
                <Link
                  href="/north-las-vegas/water-heater-repair-installation/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  North Las Vegas
                </Link>
                .
              </p>
            </div>

            {/* /las-vegas/, /henderson/, and /north-las-vegas/ water-heater-repair-installation are live (Batch 5). */}
            {/* TODO-BATCH-PHASE3: /summerlin/water-heater-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/water-heater-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/water-heater-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/water-heater-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/water-heater-repair-installation/ not yet built */}
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-4 font-medium text-white/80">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-left">
              <Link
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Related Plumbing Services
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {RELATED_SERVICES.map((service) => (
                    <ServiceCard
                      key={service.href}
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      image={service.image}
                      imageAlt={service.imageAlt}
                      built={service.built}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Water Heater Service in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {WATER_HEATER_FAQS.map((faq) => (
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
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Schedule
              <br className="hidden sm:block" /> Water Heater Service in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for water heater repair and
              installation throughout Las Vegas and the Las Vegas Valley.
              Licensed plumbers, 4.8-star rated, NV #0048585A.
            </p>
            <div className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>
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
