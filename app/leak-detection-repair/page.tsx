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
  title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair throughout Las Vegas and the Las Vegas Valley. Hidden leaks, slab leaks, wall leaks, underground lines. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides professional leak detection and repair throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const LEAK_DETECTION_FAQS = [
  {
    question: "What are the signs of a hidden water leak in a Las Vegas home?",
    answer:
      "The most common signs are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. In Las Vegas, hidden leaks are especially common in older homes due to hard water pipe corrosion and desert soil movement.",
  },
  {
    question: "How do I check if I have a water leak using my meter?",
    answer:
      "Turn off every water fixture and appliance in the home. Find your water meter near the street in a ground-level box and check whether the dial or digital display is still moving. If the meter continues to advance with all water off, water is being used somewhere in your system. Call a plumber for a professional inspection to locate the source.",
  },
  {
    question: "What causes hidden leaks in Las Vegas homes?",
    answer:
      "The most common causes in Las Vegas are hard water mineral corrosion inside copper and galvanized pipes, desert soil movement that stresses underground pipes and slab connections, aging plumbing in homes built before 2000, and tree root intrusion into underground sewer lines. Las Vegas pipes develop leaks faster than in most cities due to the valley's extremely hard water.",
  },
  {
    question: "How does non-invasive leak detection work?",
    answer:
      "Non-invasive leak detection uses acoustic sensors to listen for the sound of pressurized water escaping from pipes through walls, floors, and underground. Electronic detection equipment amplifies these sounds to pinpoint the leak location within a few inches without opening large sections of the home. Thermal imaging can also identify temperature differences caused by water escaping from hot water lines.",
  },
  {
    question: "Can a small hidden leak really cause serious damage?",
    answer:
      "Yes. A small hidden leak inside a wall can cause significant mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign. A slab leak can erode soil beneath the foundation and cause concrete cracking. Even a slow drip from an underground supply line can waste hundreds of gallons per month and create saturated soil conditions that affect the foundation.",
  },
  {
    question:
      "Does Red Carpet Plumbing detect leaks without tearing up walls?",
    answer:
      "Yes. Red Carpet Plumbing uses professional electronic detection equipment and acoustic sensors to locate hidden leaks precisely before any repair work begins. This allows us to make targeted repairs rather than opening large sections of wall, floor, or concrete to search for the leak location.",
  },
  {
    question:
      "What is the difference between a slab leak and a wall leak?",
    answer:
      "A slab leak is a leak in water or sewer pipes running beneath the concrete foundation of a home. Signs include warm spots on floors, running water sounds when fixtures are off, and unexplained water bill increases. A wall leak is a leak inside the wall cavity from supply lines, drain lines, or connections behind finished surfaces. Signs include damp spots, discoloration, bubbling paint, and musty odors. Both require professional detection equipment to locate precisely.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Henderson and Summerlin for leak detection?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

const LEAK_WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved leak detection service image when available
const LEAK_SERVICES: ServiceTypeCard[] = [
  {
    title: "Electronic Leak Detection",
    description:
      "Red Carpet Plumbing uses professional electronic leak detection equipment to locate hidden leaks precisely. Electronic detectors use acoustic sensors to identify the sound of water escaping from pressurized pipes through walls, floors, and underground, allowing us to pinpoint the leak location without opening up large sections of the home.",
    href: "/leak-detection-repair/electronic/",
  },
  {
    title: "Wall and Ceiling Leak Detection",
    description:
      "Leaks inside walls and ceilings are among the most common and most damaging hidden leaks in Las Vegas homes. Corroded copper or galvanized pipes, failed supply line connections, and leaking drain lines can all release water inside walls without any visible sign until significant damage has occurred. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
    href: "/leak-detection-repair/wall-ceiling/",
  },
  {
    title: "Slab Leak Detection",
    description:
      "Slab leaks occur when water or sewer pipes running beneath a home's concrete foundation develop cracks or holes. They are among the most serious and most common plumbing problems in Las Vegas due to the combination of hard water corrosion and desert soil movement. We locate slab leaks using acoustic sensors, thermal imaging, and pressure testing to identify the precise location before any repair begins.",
    href: "/leak-detection-repair/slab-leak/",
  },
  {
    title: "Underground Line Leak Detection",
    description:
      "Buried water supply lines, irrigation lines, and sewer lines can develop leaks from pipe corrosion, root intrusion, soil movement, and connection failures. Underground leaks are difficult to detect without professional equipment because the water often does not surface near the actual leak location. We locate underground line leaks using electronic detection equipment and pressure testing.",
    href: "/leak-detection-repair/underground/",
  },
  {
    title: "Gas Line Leak Detection",
    description:
      "If you smell gas in or around your home, leave immediately and call your gas utility before calling a plumber. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line leaks under our NV Contractor License #0048585A (C-1 Plumbing and Heating). We detect gas line leaks using pressure testing and gas-specific detection equipment.",
    href: "/leak-detection-repair/gas-line/",
  },
  {
    title: "Water Supply Line Leak Repair",
    description:
      "Once the source of a leak is located, Red Carpet Plumbing repairs or replaces the damaged section of pipe. For supply line leaks inside walls or ceilings, we make targeted repairs with minimal opening of the wall surface. For leaks in accessible locations, we repair or replace the affected section and test the line before closing up.",
    href: "/leak-detection-repair/supply-line/",
  },
  {
    title: "Slab Leak Repair",
    description:
      "Slab leak repair depends on the location and severity of the leak. Options include direct access repair through the concrete, pipe rerouting through walls or attic spaces to bypass the damaged section, or epoxy pipe lining for some pipe configurations. We discuss the options and the pros and cons of each approach before any repair begins.",
    href: "/leak-detection-repair/slab-repair/",
  },
  {
    title: "Commercial Leak Detection",
    description:
      "Red Carpet Plumbing provides leak detection and repair for commercial buildings, retail properties, office buildings, and multi-unit residential properties throughout the Las Vegas Valley. Commercial properties with high water usage are particularly vulnerable to undetected leaks that accumulate significant costs before being discovered.",
    href: "/leak-detection-repair/commercial/",
  },
];

const LV_LEAK_FACTORS = [
  {
    title: "Hard Water Corrosion Inside Pipes",
    body: "Las Vegas water averages 17 to 24 grains of hardness per gallon. Over years of exposure, calcium and magnesium deposits build up inside copper and galvanized steel pipes, thinning the pipe walls from the inside out. This process, called mineral corrosion, is the primary cause of pinhole leaks in Las Vegas homes, particularly in properties built before 2000 with original copper plumbing. A pipe that looks fine on the outside can have significant internal thinning that eventually leads to a hidden leak.",
  },
  {
    title: "Desert Soil Movement and Slab Pressure",
    body: "The Las Vegas Valley sits on a combination of caliche and expansive clay soils that shift with temperature changes and the occasional heavy rainfall. This movement puts constant stress on pipes buried beneath slabs and underground. When soil shifts, it can bend, crack, or separate pipe joints, particularly on older, more brittle pipes, creating leaks that develop gradually underground before any surface signs appear.",
  },
  {
    title: "Aging Plumbing in Older Las Vegas Neighborhoods",
    body: "Las Vegas experienced rapid growth during the 1970s, 1980s, and early 1990s, and many homes from that era still have original plumbing that is approaching or past its expected service life. Galvanized steel pipes corrode from the inside out and can develop small leaks that worsen over time. Copper pipes in hard water environments develop pinhole leaks as the pipe wall thins from mineral exposure. In older Las Vegas neighborhoods, hidden leaks are a common maintenance reality rather than an exception.",
  },
  {
    title: "Root Intrusion in Underground Lines",
    body: "Desert-adapted trees and shrubs have aggressive root systems that actively seek moisture. Underground water and sewer lines are reliable moisture sources, and small cracks or aging joints provide root entry points. Root intrusion into underground pipes is a frequent cause of hidden sewer line leaks in Las Vegas properties with established landscaping. These leaks often go undetected until the root mass has grown large enough to cause a backup or a visible wet area in the yard.",
  },
];

const LEAK_DETECTION_STEPS = [
  {
    name: "Gather information and identify symptoms",
    body: "We start by asking about the symptoms you have noticed, including high water bills, sounds of running water, wet spots, odors, or reduced pressure, and reviewing the age and type of plumbing in your home. This helps us identify the most likely leak locations before we deploy detection equipment.",
  },
  {
    name: "Perform pressure testing and meter verification",
    body: "We isolate sections of the plumbing system and perform pressure tests to confirm where water loss is occurring. We also verify the water meter reading with all water off to confirm active water loss and establish a baseline for the detection process.",
  },
  {
    name: "Use electronic detection equipment to locate the leak",
    body: "We deploy acoustic sensors, electronic detection equipment, and where appropriate thermal imaging to locate the precise source of the leak. This non-invasive process allows us to identify the leak location within a few inches without opening walls, removing flooring, or excavating unnecessarily.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "Once the leak is located, we explain the repair options, the scope of work involved, and the cost before starting. We make targeted repairs to restore the plumbing system and verify the repair is complete by retesting the affected section before we leave.",
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
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnostics, repair, and installation for traditional and tankless systems.",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Modern energy efficient water heater installation",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair for homes and businesses throughout the Las Vegas Valley, including electronic leak detection, wall and ceiling leak detection, slab leak detection, underground line leak detection, gas line leak detection, and leak repair.",
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
      name: "Leak Detection and Repair",
      item: "https://redcarpetplumbing.com/leak-detection-repair/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Detects Hidden Leaks",
  description:
    "The leak detection process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: LEAK_DETECTION_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair throughout the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/leak-detection-repair/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LEAK_DETECTION_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LeakDetectionAndRepairPage() {
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
            { label: "Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Leak Detection and Repair
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing locates and repairs hidden water leaks for homes and businesses throughout the Las Vegas Valley. From unexplained high water bills to the sound of running water with all fixtures off, our licensed plumbers use professional detection equipment to find leaks behind walls, under slabs, and underground without unnecessary demolition."
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
            label: "Request Leak Detection Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for leak detection"
        />

        {/* SECTION 3: SIGNS OF A HIDDEN WATER LEAK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Have
                <br className="hidden sm:block" /> a Hidden Water Leak
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden water leaks in Las Vegas homes often cause significant
                damage before any visible sign appears. Recognizing the warning
                signs early and knowing how to verify a leak using your water
                meter helps you act before the problem worsens.
              </p>
            </div>

            <article className="mt-12 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Warning Signs to Call a Plumber
              </h3>
              <ul className="mt-4 space-y-3">
                {LEAK_WARNING_SIGNS.map((item) => (
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

            <article className="mt-10 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-muted/40">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                The Water Meter Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off every water fixture and appliance in the home. Find
                your water meter near the street in a ground-level box and
                check whether the dial or digital display is still moving. If
                the meter continues to advance with all water off, water is
                being used somewhere in your system. Call a plumber for a
                professional inspection to locate the source.
              </p>
            </article>
          </div>
        </section>

        {/* SECTION 4: LEAK DETECTION SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Leak Detection Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides professional leak detection
                    and repair for all types of hidden leaks in residential and
                    commercial properties throughout the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved leak detection service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {LEAK_SERVICES.map((card) => (
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

        {/* SECTION 5: WHY LAS VEGAS HOMES ARE PRONE TO HIDDEN LEAKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homes Are Prone
                    <br className="hidden sm:block" /> to Hidden Leaks
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas plumbing faces conditions that produce hidden
                    leaks more often than in most other regions. Understanding
                    the local factors helps homeowners recognize the risk and
                    act early when warning signs appear.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_LEAK_FACTORS.map((factor) => (
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

        {/* SECTION 6: DETECTION PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing
                    <br className="hidden sm:block" /> Detects Hidden Leaks
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Finding a hidden leak without unnecessary demolition
                    requires professional equipment and a systematic process.
                    Here is how Red Carpet Plumbing approaches leak detection
                    for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LEAK_DETECTION_STEPS.map((step, index) => (
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
                  Suspected Hidden Leak
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional leak detection
                  throughout the Las Vegas Valley. Our licensed
                  plumbers use electronic detection equipment to locate leaks
                  precisely without unnecessary demolition.
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
                  Available for emergency leak detection
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
                Leak Detection Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides leak detection and repair
                throughout the Las Vegas Valley.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                See our dedicated leak detection pages for{" "}
                <Link
                  href="/las-vegas/leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas
                </Link>
                ,{" "}
                <Link
                  href="/henderson/leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson
                </Link>
                ,{" "}
                <Link
                  href="/north-las-vegas/leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  North Las Vegas
                </Link>
                , and{" "}
                <Link
                  href="/green-valley/leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Green Valley
                </Link>
                .
              </p>
            </div>

            {/* /las-vegas/, /henderson/, /north-las-vegas/, and /green-valley/ leak-detection-repair are live. */}
            {/* TODO-BATCH-PHASE3: /summerlin/leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/leak-detection-repair/ not yet built */}
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
                <br className="hidden sm:block" /> About Leak Detection in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LEAK_DETECTION_FAQS.map((faq) => (
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
              <br className="hidden sm:block" /> Leak Detection in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for leak detection and repair
              throughout the Las Vegas Valley. Licensed plumbers,
              4.8-star rated, NV #0048585A.
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
