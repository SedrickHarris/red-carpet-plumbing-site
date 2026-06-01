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

export const metadata: Metadata = {
  title: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides 24/7 emergency plumbing in Las Vegas and the Las Vegas Valley. Burst pipes, sewer backups, water heater failures, and more. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides 24/7 emergency plumbing in Las Vegas and the Las Vegas Valley. Burst pipes, sewer backups, water heater failures, and more. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const EMERGENCY_FAQS = [
  {
    question:
      "Does Red Carpet Plumbing offer 24/7 emergency plumbing in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172 any time for emergency plumbing assistance.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer:
      "A plumbing emergency is any situation that poses an immediate risk of water damage, property damage, or a health hazard. Common emergencies include burst pipes, sewage backups, major active leaks, complete loss of water supply, and overflowing toilets that cannot be stopped. Slow drains and dripping faucets can typically wait for a scheduled appointment.",
  },
  {
    question: "What should I do first when a pipe bursts?",
    answer:
      "Shut off the main water supply to your home as quickly as possible. In most Las Vegas homes, the main shutoff valve is located near the front of the property in a ground-level box near the street. Once the water is off, call Red Carpet Plumbing at (702) 567-9172 for emergency repair.",
  },
  {
    question: "Why are slab leaks so common in Las Vegas?",
    answer:
      "Slab leaks are common in Las Vegas because of the combination of hard water mineral corrosion, desert soil movement from caliche and expansive clay, and the extreme heat and temperature swings that stress underground pipes. Many Las Vegas homes also have aging copper or galvanized pipes that have been weakened over decades of hard water exposure.",
  },
  {
    question: "Can I use water during a sewer backup?",
    answer:
      "No. Do not use any drains, toilets, or water fixtures in the building during a sewer backup. Using water will worsen the backup and increase the risk of sewage overflow into the home. Shut off the water supply if the backup is severe and call a plumber immediately.",
  },
  {
    question: "Is a slab leak an emergency?",
    answer:
      "A slab leak becomes an emergency when it causes visible water damage, sudden pressure loss, warm spots on the floor, or the sound of running water when all fixtures are off. Addressing a slab leak early prevents major foundation damage and mold growth. Red Carpet Plumbing provides slab leak detection and repair throughout the Las Vegas Valley.",
  },
  {
    question: "Does Red Carpet Plumbing handle gas line emergencies?",
    answer:
      "Yes. Red Carpet Plumbing is licensed for gas line work under NV Contractor License #0048585A (C-1 Plumbing and Heating). If you smell gas, leave the building immediately and call your gas utility first, then call us for gas line inspection and repair after the area is declared safe.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for emergency plumbing?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities throughout the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "24/7 Emergency Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const IMMEDIATE_ATTENTION = [
  "Burst or ruptured water pipe with active flooding",
  "Sewage backup or overflow into the home",
  "Smell of gas or suspected gas line leak",
  "Major active water leak you cannot stop",
  "Complete loss of water supply to the building",
  "Water heater failure with active flooding or gas smell",
  "Overflowing toilet that cannot be stopped with the shutoff valve",
];

const CAN_WAIT = [
  "Slow-draining sink or tub",
  "Dripping faucet",
  "Running toilet",
  "Mildly reduced water pressure with no other symptoms",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved emergency service image when available
const EMERGENCY_SERVICE_TYPES: ServiceTypeCard[] = [
  {
    title: "Burst Pipe Repair",
    description:
      "Burst or ruptured water pipes with active flooding. Our team responds quickly to shut off water and repair the line before further damage occurs.",
    href: "/emergency-plumbing/burst-pipe-repair/",
  },
  {
    title: "Sewer Backup Clearing",
    description:
      "Sewage backup or overflow into the home. We clear the blockage, assess the source, and stop further damage to flooring, walls, and air quality.",
    href: "/emergency-plumbing/sewer-backup/",
  },
  {
    title: "Gas Line Emergencies",
    description:
      "Smell of gas or suspected gas line leak. Leave the building first, call your gas utility, then call us for inspection and repair after the area is declared safe.",
    href: "/emergency-plumbing/gas-line/",
  },
  {
    title: "Major Leak Repair",
    description:
      "Major active water leaks you cannot stop with the main shutoff. We diagnose the source, contain the leak, and complete the repair before further damage occurs.",
    href: "/emergency-plumbing/major-leak/",
  },
  {
    title: "Complete Water Loss",
    description:
      "Complete loss of water supply to the building. We diagnose main line, pressure regulator, or supply-side issues and restore service to the property.",
    href: "/emergency-plumbing/water-loss/",
  },
  {
    title: "Water Heater Emergencies",
    description:
      "Water heater failure with active flooding or a gas smell. Shut off the unit, leave the area if gas is present, and call us for immediate response.",
    href: "/emergency-plumbing/water-heater/",
  },
  {
    title: "Overflowing Toilet",
    description:
      "Overflowing toilets that cannot be stopped with the shutoff valve. Often indicates a deeper blockage that requires professional clearing.",
    href: "/emergency-plumbing/overflowing-toilet/",
  },
  {
    title: "Slab Leak Response",
    description:
      "Slab leaks that cause visible water damage, sudden pressure loss, warm spots on the floor, or the sound of running water when all fixtures are off.",
    href: "/emergency-plumbing/slab-leak/",
  },
];

const LV_RISK_FACTORS = [
  {
    title: "Hard Water Mineral Corrosion Stresses Pipes",
    body: "Las Vegas has some of the hardest water in the United States. Mineral content, primarily calcium and magnesium, accumulates inside pipes, water heaters, and fixtures over time. This buildup narrows water lines, stresses joints and fittings, and accelerates corrosion. Water heaters, faucets, and supply lines all wear faster in high mineral content water, which increases the risk of sudden failures that turn into emergencies.",
  },
  {
    title: "Desert Soil Movement Affects Underground Pipes",
    body: "Caliche and expansive clay soils in the Las Vegas Valley shift with temperature and moisture changes. This soil movement stresses water pipes buried beneath foundations, yards, and driveways. Slab leaks, broken main lines, and sewer line ruptures are all more common in homes built on shifting desert soil than in homes built on stable ground.",
  },
  {
    title: "Extreme Heat and Temperature Swings",
    body: "Las Vegas summer temperatures regularly exceed 110 degrees Fahrenheit, while winter nights can drop near freezing. This range causes pipes to expand and contract repeatedly, loosening joints and stressing connections over time. Outdoor pipes and pipes near exterior walls are most vulnerable, and the cumulative stress over decades is a leading cause of emergency pipe failures in older homes.",
  },
  {
    title: "Aging Copper and Galvanized Pipes",
    body: "Many Las Vegas homes built before the 1990s still have original copper or galvanized steel plumbing. These materials were not designed for Las Vegas hard water conditions and decades of heat stress. Galvanized pipes corrode from the inside out, copper pipes thin from mineral exposure, and both reach the end of their usable life faster here than in milder climates.",
  },
];

const EMERGENCY_STEPS = [
  {
    title: "Shut Off the Main Water Supply",
    body: "The main water shutoff valve in most Las Vegas homes is located near the front of the property in a ground-level box near the street, or where the main line enters the building. Turn the valve clockwise to close it and stop water flow throughout the house.",
  },
  {
    title: "For Gas Emergencies, Leave Immediately",
    body: "If you smell gas, do not operate any light switches, appliances, or devices. Leave the building immediately, leave doors open if safe to do so, and call your gas utility from outside. Call Red Carpet Plumbing after the gas utility has made the area safe.",
  },
  {
    title: "Turn Off Electricity Near Flooded Areas",
    body: "Standing water near electrical panels, outlets, or appliances creates a serious safety hazard. If water has reached electrical components, shut off the circuit breaker for affected areas before entering if it is safe to do so.",
  },
  {
    title: "Document the Damage",
    body: "Take photos and video of visible water damage, the source of the leak, and affected areas before cleanup begins. This documentation supports insurance claims for covered events such as burst pipes.",
  },
  {
    title: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 for 24/7 emergency plumbing service throughout Las Vegas and the Las Vegas Valley. Our licensed plumbers will assess the situation and provide a clear explanation of the repair options before any work begins.",
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
};

const RELATED_SERVICES: RelatedService[] = [
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Specialized slab leak detection and repair for Las Vegas homes where shifting desert soils and hard water accelerate pipe damage.",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Home foundation showing signs of a slab leak",
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting to clear clogs and restore proper flow.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnostics, repair, and installation for traditional and tankless systems.",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Modern energy efficient water heater installation",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout Las Vegas and the Las Vegas Valley, including burst pipe repair, sewer backup clearing, water heater emergencies, slab leak response, gas line emergencies, and major leak repair.",
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
      name: "Emergency Plumbing",
      item: "https://redcarpetplumbing.com/emergency-plumbing/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do in a Plumbing Emergency",
  description:
    "Steps to take immediately when you have a plumbing emergency in Las Vegas to limit damage and stay safe.",
  step: EMERGENCY_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides 24/7 emergency plumbing in Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/emergency-plumbing/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout Las Vegas and the Las Vegas Valley. If you have a burst pipe, sewer backup, water heater failure, or any urgent plumbing situation, call us now at (702) 567-9172."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "NV Licensed Plumbers, #0048585A",
            "Available 24/7 for plumbing emergencies",
            "Over 40 years serving Las Vegas",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Emergency Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for emergency service"
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

        {/* SECTION 3: WHAT COUNTS AS A PLUMBING EMERGENCY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Counts as a Plumbing Emergency?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                A plumbing emergency is any situation where a plumbing failure
                poses an immediate risk of water damage, property damage, or a
                health hazard. Not every plumbing problem requires an emergency
                call. Understanding the difference helps you respond correctly
                and avoid unnecessary stress.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Situations That Require Immediate Attention
                </h3>
                <ul className="mt-4 space-y-3">
                  {IMMEDIATE_ATTENTION.map((item) => (
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
                  Situations That Can Wait for a Scheduled Appointment
                </h3>
                <ul className="mt-4 space-y-3">
                  {CAN_WAIT.map((item) => (
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
          </div>
        </section>

        {/* SECTION 4: EMERGENCY SERVICE TYPES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Emergency Plumbing Services in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing responds to all types of plumbing
                    emergencies throughout Las Vegas and the Las Vegas Valley.
                    Our licensed plumbers handle every situation from burst
                    pipes to sewer backups and gas line issues.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved emergency service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {EMERGENCY_SERVICE_TYPES.map((card) => (
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

        {/* SECTION 5: WHY LAS VEGAS HOMES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homes Experience More Plumbing Emergencies
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas homes face plumbing conditions that are more
                    demanding than most other parts of the country.
                    Understanding these local factors helps homeowners recognize
                    warning signs before a minor issue becomes an emergency.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_RISK_FACTORS.map((factor) => (
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

        {/* SECTION 6: EMERGENCY STEPS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What to Do When You Have a Plumbing Emergency
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Taking the right steps immediately can limit water damage
                    and keep your household safe while you wait for a plumber.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {EMERGENCY_STEPS.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {step.title}
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

        {/* SECTION 7: MID-PAGE EMERGENCY CTA */}
        <CTASection
          background="dark"
          headline="Need an Emergency Plumber in Las Vegas Now?"
          body="Call Red Carpet Plumbing for 24/7 emergency plumbing service throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated, over 40 years in the valley."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
        />

        {/* SECTION 8: EMERGENCY SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Emergency Plumbing Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides emergency plumbing service
                throughout Las Vegas and the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/emergency-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/emergency-plumbing/ not yet built */}
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
                Frequently Asked Questions About Emergency Plumbing in Las
                Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {EMERGENCY_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
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
          headline="Ready for Emergency Plumbing Help in Las Vegas?"
          body="Red Carpet Plumbing is available 24 hours a day for emergency plumbing throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated, NV #0048585A."
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
