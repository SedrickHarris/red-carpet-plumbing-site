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
import TrustStrip from "@/components/TrustStrip";

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
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout the Las Vegas Valley. Call (702) 567-9172 any time for emergency plumbing assistance.",
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
      "A burst pipe can release dozens of gallons of water per minute, causing rapid flooding and structural damage. In Las Vegas, burst pipes are most common during extreme summer heat that stresses aging pipe joints and during occasional winter cold snaps that affect exposed lines in garages and exterior walls. Shut off your main water supply immediately and call Red Carpet Plumbing.",
    href: "/emergency-plumbing/burst-pipe-repair/",
  },
  {
    title: "Sewer Backup and Overflow",
    description:
      "A sewer backup means wastewater is flowing back into your home through drains, toilets, or floor drains. This is a health emergency. Do not use any drains or toilets in the building until the blockage is cleared. A plumber can clear the line, inspect for damage, and identify the underlying cause.",
    href: "/emergency-plumbing/sewer-backup/",
  },
  {
    title: "Water Heater Emergency",
    description:
      "A water heater emergency includes an active leak at the tank or connections, a gas smell near the heater, unusual sounds indicating pressure buildup, or total loss of hot water combined with visible damage. Turn off the water supply to the heater and, for gas units, turn off the gas supply at the valve before calling.",
    href: "/emergency-plumbing/water-heater/",
  },
  {
    title: "Slab Leak Emergency",
    description:
      "A slab leak under your home's foundation becomes an emergency when it causes visible water damage, sudden water pressure loss, warm spots on floors, or the sound of running water when all fixtures are off. Las Vegas homes are particularly vulnerable to slab leaks due to hard water corrosion and desert soil movement. Early detection prevents major structural damage.",
    href: "/emergency-plumbing/slab-leak/",
  },
  {
    title: "Gas Line Emergency",
    description:
      "If you smell gas, leave the building immediately without operating any light switches or electrical devices. Call your gas utility from outside, then call a licensed plumber for gas line inspection and repair. Red Carpet Plumbing is licensed for gas line work under NV #0048585A (C-1 Plumbing and Heating).",
    href: "/emergency-plumbing/gas-line/",
  },
  {
    title: "Major Active Water Leak",
    description:
      "An active water leak that is too large to contain with a bucket or towels should be treated as an emergency. Locate your main water shutoff valve, turn off the water supply, and call a plumber. Even a slow hidden leak inside a wall can cause mold growth and structural damage if left unaddressed.",
    href: "/emergency-plumbing/major-leak/",
  },
  {
    title: "Overflowing Toilet",
    description:
      "If a toilet is overflowing and cannot be stopped with a plunger, locate the shutoff valve at the base of the toilet and turn it clockwise to stop the water flow. If the toilet continues to overflow or if multiple toilets are backing up simultaneously, this may indicate a main sewer line problem requiring immediate professional attention.",
    href: "/emergency-plumbing/overflowing-toilet/",
  },
  {
    title: "Loss of Water Supply",
    description:
      "A sudden complete loss of water to your home or building can indicate a main line break, a failed pressure regulator, or a municipal supply issue. Check with neighbors to determine if the outage is isolated to your property. If it is, call a plumber for emergency diagnosis.",
    href: "/emergency-plumbing/water-loss/",
  },
];

const LV_RISK_FACTORS = [
  {
    title: "Extreme Heat and Temperature Swings",
    body: "Las Vegas summer temperatures regularly exceed 110 degrees Fahrenheit, and pipes in exterior walls, garages, and under direct sun exposure expand and contract significantly with daily temperature swings of 40 degrees or more. This repeated stress weakens pipe joints and fittings over time. Older pipes that have already been weakened by hard water corrosion are at the highest risk of sudden failure during extreme heat periods.",
  },
  {
    title: "Hard Water Mineral Corrosion",
    body: "Las Vegas has some of the hardest water in the United States, with high concentrations of calcium and magnesium that deposit inside pipes and accelerate metal corrosion. Homes with copper or galvanized steel pipes built before the 1990s are particularly vulnerable. Hard water corrosion thins pipe walls over years of exposure, which can lead to sudden pinhole leaks or complete pipe failure without visible warning.",
  },
  {
    title: "Desert Soil Movement and Slab Pressure",
    body: "The Las Vegas Valley sits on a combination of caliche (calcium carbonate-cemented soil) and expansive clay that shifts with temperature changes and the rare heavy rainfall events. This soil movement puts stress on underground pipes and slab-embedded lines, which is one reason slab leaks are significantly more common in Las Vegas than in most other regions of the country.",
  },
  {
    title: "Aging Pipes in Older Las Vegas Neighborhoods",
    body: "Many Las Vegas neighborhoods built during the growth periods of the 1970s, 1980s, and early 1990s still have original plumbing materials that have reached the end of their expected service life. Polybutylene pipe, which was widely used from the mid-1970s through the mid-1990s, is particularly prone to sudden failure. Galvanized steel pipes in pre-1975 homes corrode from the inside out, reducing flow and eventually failing without external warning signs.",
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
    body: "Call (702) 567-9172 for 24/7 emergency plumbing service throughout the Las Vegas Valley. Our licensed plumbers will assess the situation and provide a clear explanation of the repair options before any work begins.",
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
    "Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout the Las Vegas Valley, including burst pipe repair, sewer backup clearing, water heater emergencies, slab leak response, gas line emergencies, and major leak repair.",
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
    "Red Carpet Plumbing provides 24/7 emergency plumbing in the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
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
          headline={
            <>
              Emergency Plumbing
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides 24/7 emergency plumbing service for homes and businesses throughout the Las Vegas Valley. If you have a burst pipe, sewer backup, water heater failure, or any urgent plumbing situation, call us now at (702) 567-9172."
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
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for emergency service"
        />

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
                    Emergency Plumbing Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing responds to all types of plumbing
                    emergencies throughout the Las Vegas Valley.
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
                    Why Las Vegas Homes Experience
                    <br className="hidden sm:block" /> More Plumbing Emergencies
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
          headline={
            <>
              Need an Emergency Plumber
              <br className="hidden sm:block" /> in Las Vegas Now?
            </>
          }
          body="Call Red Carpet Plumbing for 24/7 emergency plumbing service throughout the Las Vegas Valley. Licensed plumbers, 4.8-star rated, over 40 years in the valley."
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
                throughout the Las Vegas Valley.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                See our dedicated emergency plumbing pages for{" "}
                <Link
                  href="/las-vegas/emergency-plumbing/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas
                </Link>
                ,{" "}
                <Link
                  href="/henderson/emergency-plumbing/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson
                </Link>
                , and{" "}
                <Link
                  href="/north-las-vegas/emergency-plumbing/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  North Las Vegas
                </Link>
                .
              </p>
            </div>

            {/* /las-vegas/, /henderson/, and /north-las-vegas/ emergency-plumbing are live (Batch 5). */}
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
                Frequently Asked Questions About Emergency Plumbing
                <br className="hidden sm:block" /> in Las Vegas
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
          headline={
            <>
              Ready for Emergency Plumbing Help
              <br className="hidden sm:block" /> in Las Vegas?
            </>
          }
          body="Red Carpet Plumbing is available 24 hours a day for emergency plumbing throughout the Las Vegas Valley. Licensed plumbers, 4.8-star rated, NV #0048585A."
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
