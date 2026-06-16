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
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title:
    "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and replaces water supply pipes throughout Las Vegas and the Las Vegas Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipe replacement. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
  },
  openGraph: {
    title:
      "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed water pipe repair and replacement throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const WATER_PIPE_FAQS = [
  {
    question: "What are the signs of a failing water pipe?",
    answer:
      "Common signs of a failing water pipe include unexplained drops in water pressure, discolored or rust-tinged water coming from fixtures, the sound of running water when no fixtures are in use, water stains on walls or ceilings, damp spots in the yard above buried lines, and a water bill that has increased without a change in usage. Pinhole leaks in copper pipe and joint failures in older galvanized or polybutylene systems may not be immediately visible. A licensed plumber can assess the pipe system and identify the source.",
  },
  {
    question: "How long do water pipes last?",
    answer:
      "Pipe lifespan varies by material. Copper pipes typically last thirty to fifty years, though Las Vegas hard water accelerates corrosion and can shorten this range. Galvanized steel pipe lasts approximately twenty to fifty years but corrodes from the inside out, reducing flow well before it fails completely. Polybutylene pipe, installed in many Las Vegas homes between approximately 1978 and 1995, is prone to degradation from chlorinated water and may fail unpredictably. PEX and CPVC pipes used in more recent construction are generally more durable under Las Vegas water conditions.",
  },
  {
    question: "What causes pinhole leaks in copper pipes?",
    answer:
      "Pinhole leaks in copper pipe are caused by pitting corrosion, which occurs when the interior surface of the pipe develops small pits that eventually penetrate through the pipe wall. In Las Vegas, hard water mineral deposits, water chemistry, and chlorine in the municipal supply contribute to accelerated pitting corrosion in copper supply lines. Pinhole leaks typically appear first at the lowest pressure points in a run of pipe and, if unaddressed, will recur throughout the same pipe section over time.",
  },
  {
    question: "What is polybutylene pipe and why is it a problem?",
    answer:
      "Polybutylene is a plastic pipe material used in residential plumbing from approximately 1978 to 1995. It was widely installed in Las Vegas homes built during that period. Polybutylene degrades when exposed to chlorine and other oxidants in municipal water supplies, causing the pipe to become brittle and develop micro-fractures that can lead to sudden leaks. Unlike other pipe failures, polybutylene leaks can occur without warning and are often located inside walls or under slabs. If your Las Vegas home was built between 1978 and 1995 and has not been re-piped, a plumber can confirm whether polybutylene is present.",
  },
  {
    question: "Should I repair or replace old water pipes?",
    answer:
      "Spot repair is appropriate when damage is isolated to a single section or joint, the rest of the pipe system is in sound condition, and the pipe material is not inherently problematic. Full or partial replacement is the better choice when a home has polybutylene pipe throughout, when galvanized pipe has corroded to the point of restricted flow, when copper pipe has recurring pinhole leaks in multiple locations, or when the pipe system is approaching the end of its service life. A licensed plumber can assess the full system and recommend the most practical approach.",
  },
  {
    question: "Can Red Carpet Plumbing repair a burst pipe?",
    answer:
      "Yes. Red Carpet Plumbing handles emergency burst pipe repairs throughout the Las Vegas Valley. If a pipe has burst, shut off the main water supply to the home as quickly as possible and call Red Carpet Plumbing at (702) 567-9172. Burst pipe repair typically involves replacing the damaged section and inspecting adjacent pipe for signs of stress or corrosion that could cause additional failures.",
  },
  {
    question: "What is the difference between pipe repair and re-piping?",
    answer:
      "Pipe repair addresses a specific section of damaged, cracked, or leaking pipe. Re-piping replaces the entire supply pipe system in a home or building, typically because the existing pipe material is failing throughout or has reached end of life. Re-piping is appropriate when a property has widespread polybutylene pipe, severely corroded galvanized pipe throughout, or recurring pinhole leaks in multiple areas. Red Carpet Plumbing provides both spot pipe repair and full re-piping services throughout the Las Vegas Valley.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for water pipe repair?",
    answer:
      "Red Carpet Plumbing provides water pipe repair and replacement throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "24/7 Emergency Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const WATER_PIPE_WARNING_SIGNS = [
  {
    title: "Unexplained Drop in Water Pressure",
    body: "A sudden or gradual drop in water pressure throughout the home often indicates a pipe leak, a corroded pipe narrowing flow, or a main line issue. In Las Vegas, galvanized pipe that has been corroding from the inside out can cause progressive pressure loss over years before a visible leak develops.",
  },
  {
    title: "Discolored or Rust-Tinged Water",
    body: "Brown, orange, or reddish water coming from a faucet indicates rust or corrosion inside supply pipes. This is common in homes with aging galvanized steel pipe and is a sign the pipe is deteriorating internally. Water discoloration should be evaluated by a licensed plumber.",
  },
  {
    title: "Sound of Running Water When Nothing Is On",
    body: "If you can hear water moving inside walls or under the floor when all fixtures are off, a pipe is leaking somewhere in the supply system. The water meter test, which involves shutting off all fixtures and watching whether the meter continues to move, confirms active water loss.",
  },
  {
    title: "Water Stains on Walls, Ceilings, or Floors",
    body: "Staining, bubbling paint, or soft spots in walls, ceilings, or floors above or beside supply pipes indicate a slow leak that has been present long enough to damage building materials.",
  },
  {
    title: "Recurring Pinhole Leaks in Multiple Locations",
    body: "A single pinhole leak in a copper pipe can often be spot-repaired. Multiple pinhole leaks appearing in different locations indicate that the pipe system as a whole is experiencing corrosion, and re-piping is typically the more practical long-term solution.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved water pipe service image when available
const WATER_PIPE_SERVICES: ServiceTypeCard[] = [
  {
    title: "Burst Pipe Repair",
    description:
      "Emergency repair of burst or ruptured water supply pipes throughout Las Vegas. Shut off the main supply and call immediately.",
    href: "/emergency-plumbing/",
  },
  {
    title: "Pinhole Leak Repair",
    description:
      "Spot repair of pinhole leaks in copper supply pipe. Multiple pinhole leaks may indicate a need for section replacement or re-piping.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Pipe Section Replacement",
    description:
      "Replacement of damaged, corroded, or leaking pipe sections in supply lines throughout the home or building.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Galvanized Pipe Replacement",
    description:
      "Replacement of aging galvanized steel supply pipe that has corroded internally, reducing pressure and water quality.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Polybutylene Pipe Replacement",
    description:
      "Replacement of polybutylene supply pipe in Las Vegas homes built approximately 1978 to 1995. Polybutylene degrades with chlorinated water and is prone to sudden failure.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Main Water Line Repair",
    description:
      "Repair and replacement of the main water supply line connecting the property to the municipal water service.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Supply Line and Shut-Off Valve Replacement",
    description:
      "Replacement of corroded or failing supply lines and shut-off valves serving fixtures, water heaters, and appliances.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Full Re-Piping",
    description:
      "Full replacement of the home or building's water supply pipe system for properties with widespread pipe failure or aging materials.",
    href: "/re-piping/",
  },
];

const LV_WATER_PIPE_FACTORS = [
  {
    title: "Hard Water and Copper Pipe Corrosion",
    body: "Las Vegas municipal water is among the hardest in the United States. High concentrations of calcium and magnesium, combined with the chlorine added for public health treatment, create conditions that accelerate pitting corrosion inside copper supply pipes. Pitting corrosion penetrates through the pipe wall from the inside, producing the pinhole leaks that are one of the most common plumbing service calls in the Las Vegas Valley. Homes with copper supply lines installed in the 1980s and 1990s are at the highest risk for pinhole leak development, and recurring leaks in multiple locations signal that the pipe system is failing throughout rather than at isolated points.",
  },
  {
    title: "Polybutylene Pipe in Las Vegas Homes Built 1978-1995",
    body: "Polybutylene pipe was widely used in residential construction throughout the Las Vegas Valley from approximately 1978 to 1995. Polybutylene reacts with chlorine and other oxidants present in municipal water, causing the pipe material to become brittle over time. The deterioration happens from the inside out and is not visible during routine inspection. Polybutylene leaks can occur suddenly without prior warning, often inside walls or under slabs where detection is delayed. If your Las Vegas home was built during this period and has not been re-piped, a plumber can confirm whether polybutylene supply lines are present and assess the risk.",
  },
  {
    title: "Galvanized Pipe and Internal Mineral Buildup",
    body: "Older Las Vegas homes built before the mid-1970s may still have original galvanized steel supply pipe. Las Vegas hard water deposits mineral scale on the interior walls of galvanized pipe over decades, progressively narrowing the pipe's internal diameter and reducing water pressure throughout the home. Unlike copper pipe failures that often appear as leaks first, galvanized pipe failure typically presents as steadily declining pressure and discolored water before a section actually fails. At that stage, section replacement or full re-piping is the practical solution.",
  },
  {
    title: "Desert Soil Movement and Underground Line Stress",
    body: "The Las Vegas Valley's caliche-rich soil shifts seasonally as it dries and re-wets through desert heat cycles and rain events. This ground movement stresses underground service lines and buried supply pipes over time, causing joint stress and eventual failure at connection points. Buried pipe failures below grade may not produce visible symptoms until a significant volume of water has already been lost into the soil. A noticeable increase in the water bill without a change in usage, or wet patches in the yard above buried lines, are the earliest indicators of underground supply pipe failure.",
  },
];

const WATER_PIPE_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. For a burst pipe or active leak, shut off the main water supply to the home first, then call us. For pressure drops, discolored water, or a high water bill without an obvious cause, we can schedule a diagnostic visit.",
  },
  {
    name: "Inspection and Pipe Assessment",
    body: "A licensed plumber inspects the pipe system, checks accessible supply lines, performs a water meter test to confirm active water loss if needed, and assesses the type, age, and condition of the pipe material. We identify whether spot repair or section replacement is appropriate, or whether the pipe system as a whole warrants re-piping.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain the condition of the pipe, what repair or replacement options apply, and what the work involves. For homes with polybutylene or widespread galvanized pipe, we discuss the re-piping option alongside spot repair. You approve the scope before any work begins.",
  },
  {
    name: "Repair or Replacement with Pressure Test",
    body: "Our licensed plumber completes the pipe repair or replacement, restores the water supply, and confirms the repaired section holds pressure. We check the repair site and adjacent connections before completing the job.",
  },
];

const SERVICE_AREAS = [
  "Las Vegas",
  "Henderson",
  "North Las Vegas",
  "Paradise",
  "Summerlin",
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
    title: "Re-Piping",
    description:
      "Full and partial re-piping for homes and businesses with aging, corroded, or widespread pipe failures.",
    href: "/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Whole home re-piping service in Las Vegas",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, fixtures, and underground connections.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Detection and repair of water leaks beneath concrete slab foundations in Las Vegas homes and businesses.",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Home foundation showing signs of a slab leak",
    built: true,
  },
  {
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing for burst pipes, major leaks, and urgent water supply failures throughout Las Vegas.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Pipe Repair and Replacement",
  serviceType: "Water Pipe Repair and Replacement",
  description:
    "Red Carpet Plumbing repairs and replaces water supply pipes for homes and businesses throughout the Las Vegas Valley, including burst pipe repair, pinhole leak repair, galvanized pipe replacement, polybutylene pipe replacement, main water line repair, and full re-piping. Nevada Contractor License #0048585A.",
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
      name: "Water Pipe Repair and Replacement",
      item: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Water Pipe Repair and Replacement",
  description:
    "The water pipe repair and replacement process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: WATER_PIPE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and replaces water supply pipes throughout the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
  breadcrumb: {
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
        name: "Water Pipe Repair and Replacement",
        item: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WATER_PIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WaterPipeRepairReplacementPage() {
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
            { label: "Water Pipe Repair and Replacement" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Verify hero image resolution at display size. */}
        {/* Client may need to supply higher-resolution asset. */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Water Pipe Repair and Replacement
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Water supply pipe repair and replacement for homes and businesses throughout the Las Vegas Valley."
          trustItems={[
            "Licensed Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
            "24/7 Emergency Service",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Pipe Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={
            <QuoteFormPlaceholder title="Get a Water Pipe Service Quote" />
          }
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/water-pipe-repair-replacement/hero.webp",
            alt: "Professional water pipe repair work in progress",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for water pipe work"
        />

        {/* SECTION 3: SIGNS OF A FAILING WATER PIPE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Water Pipes
                <br className="hidden sm:block" /> Need Attention
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing repairs and replaces water supply pipes
                for homes and businesses throughout the Las Vegas Valley. Services include spot pipe repairs, section
                replacements, main line repairs, and full re-piping for
                properties with failing or aging pipe systems.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {WATER_PIPE_WARNING_SIGNS.map((sign) => (
                <article
                  key={sign.title}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {sign.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {sign.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WATER PIPE SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Water Pipe Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of water
                    supply pipe repair and replacement services for
                    residential and commercial properties throughout the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved water pipe service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {WATER_PIPE_SERVICES.map((card, index) => (
                    <ServiceCard
                      key={`${card.title}-${index}`}
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

        {/* SECTION 5: WHY WATER PIPES FAIL FASTER IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Water Pipes Fail Faster
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas combines some of the hardest water in the
                    country, an aging housing stock with material vintages
                    known to fail, and caliche soil that stresses
                    underground lines. These factors together explain why
                    water pipe failures are common across the valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_WATER_PIPE_FACTORS.map((factor) => (
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

        {/* SECTION 6: HOWTO PROCESS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles
                    <br className="hidden sm:block" /> Water Pipe Repair and Replacement
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Water pipe work depends on accurate diagnosis and the
                    right repair scope. Here is how Red Carpet Plumbing
                    approaches pipe repair and replacement from the first
                    call to the final pressure test.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {WATER_PIPE_STEPS.map((step, index) => (
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
                  Water Pipe Problem in Las Vegas?
                  <br className="hidden sm:block" /> Call a Licensed Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing repairs and replaces water supply
                  pipes throughout the Las Vegas Valley. NV Contractor
                  License #0048585A. Available 24/7 for burst pipes and
                  active leaks.
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+17025679172"
                    className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                  >
                    Call (702) 567-9172
                  </a>
                  <Link
                    href="/contact/"
                    className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/60 px-8 text-lg font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                  >
                    Request a Quote
                  </Link>
                </div>
                <p className="text-sm text-white/60">
                  Available 24/7 for burst pipes and active leaks.
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
                Water Pipe Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides water pipe repair and
                replacement throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/water-pipe-repair-replacement/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/water-pipe-repair-replacement/ not yet built */}
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
                Water Pipe Repair and Replacement Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {WATER_PIPE_FAQS.map((faq) => (
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
              Need Water Pipe Repair or Replacement
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              water pipe repair, section replacement, and emergency burst
              pipe service throughout the Las Vegas Valley.
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
                  Request a Quote
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
