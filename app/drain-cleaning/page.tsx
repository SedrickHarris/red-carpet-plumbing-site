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
  title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/drain-cleaning/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const DRAIN_CLEANING_FAQS = [
  {
    question: "What causes drains to clog in Las Vegas homes?",
    answer:
      "The most common causes of drain clogs in Las Vegas are hair and soap scum in bathroom drains, grease and food particles in kitchen drains, and hard water mineral deposits that narrow pipe walls throughout the home. Las Vegas hard water accelerates clog formation because mineral deposits give grease and debris something to bond to inside the pipe.",
  },
  {
    question: "How do I know if I need professional drain cleaning?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. A single slow drain may be a minor clog, but multiple affected drains usually indicate a main sewer line problem.",
  },
  {
    question: "Are chemical drain cleaners safe for Las Vegas pipes?",
    answer:
      "Chemical drain cleaners contain harsh acids or alkaline compounds that can damage pipe linings, especially in older galvanized or copper pipes common in Las Vegas homes. They typically only dissolve part of the clog and do not address mineral buildup or root intrusion. Professional drain cleaning removes the entire blockage and is safer for your pipes.",
  },
  {
    question: "What is hydro jetting and when is it needed?",
    answer:
      "Hydro jetting uses high-pressure water to scour the inside of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. It is recommended for recurring clogs, main sewer line cleaning, and lines with significant hard water mineral buildup.",
  },
  {
    question: "How often should I have my drains professionally cleaned?",
    answer:
      "Most Las Vegas homeowners benefit from professional drain cleaning every one to two years. Homes with older plumbing, large households, or a history of recurring clogs may benefit from annual cleaning. Commercial properties with heavy drain use should be cleaned more frequently.",
  },
  {
    question: "Does hard water cause drain problems in Las Vegas?",
    answer:
      "Yes. Las Vegas hard water leaves calcium and magnesium deposits inside pipe walls that narrow the pipe, slow water flow, and create surfaces that trap grease and debris. These mineral deposits are a primary reason Las Vegas drains clog faster and more frequently than drains in cities with softer water.",
  },
  {
    question:
      "What is the difference between drain snaking and hydro jetting?",
    answer:
      "Drain snaking uses a cable machine to break through or pull out a specific clog. It is effective for solid obstructions like hair clogs or localized blockages. Hydro jetting uses high-pressure water to clean the entire interior of the pipe, removing buildup from the walls rather than just clearing the blockage. For recurring clogs or lines with significant mineral or grease buildup, hydro jetting provides a more thorough and longer-lasting result.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Henderson and Summerlin for drain cleaning?",
    answer:
      "Yes. Red Carpet Plumbing provides drain cleaning service throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

const SIGNS_CALL_NOW = [
  "Multiple slow drains throughout the home at the same time",
  "Complete blockage with no water movement at all",
  "Sewage or sulfur odor coming from drains",
  "Gurgling or bubbling sounds from toilets or other fixtures when water is draining",
  "Water backing up into tubs, showers, or floor drains",
];

const SIGNS_CAN_MONITOR = [
  "A single slow drain with no odor and no other affected fixtures",
  "Minor buildup that responds to hot water flushing",
];

type DrainTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved drain service image when available
const DRAIN_TYPES: DrainTypeCard[] = [
  {
    title: "Kitchen Drain Cleaning",
    description:
      "Kitchen drains are the most common drain service call in Las Vegas. Grease, cooking oils, and food particles build up inside kitchen drain lines over time. Las Vegas hard water accelerates this process by creating mineral deposits that give grease something to bond to. Red Carpet Plumbing clears kitchen drains completely, from the sink trap to the main connection.",
    href: "/drain-cleaning/kitchen/",
  },
  {
    title: "Bathroom Drain Cleaning",
    description:
      "Bathroom drains collect hair, soap scum, toothpaste residue, and personal care products. Hard water minerals in Las Vegas compound the problem by creating rough deposits inside pipe walls that catch and hold debris. We clear bathroom sink drains, shower drains, and bathtub drains using methods matched to the specific clog and pipe type.",
    href: "/drain-cleaning/bathroom/",
  },
  {
    title: "Shower and Tub Drain Cleaning",
    description:
      "Shower and tub drains are especially prone to hair and soap scum buildup. In Las Vegas homes with hard water, soap scum bonds with calcium and magnesium deposits to create a sticky lining that traps hair and debris faster than in softer-water cities. We clear shower and tub drains thoroughly and can recommend drain screens to reduce future buildup.",
    href: "/drain-cleaning/shower-tub/",
  },
  {
    title: "Main Sewer Line Cleaning",
    description:
      "When multiple drains in your home are slow or backing up simultaneously, the blockage is usually in the main sewer line. Main line clogs require professional clearing equipment. We clear main sewer lines using cable machines and hydro jetting depending on the type and location of the blockage.",
    href: "/drain-cleaning/main-sewer-line/",
  },
  {
    title: "Floor Drain Cleaning",
    description:
      "Floor drains in garages, utility rooms, basements, and laundry areas collect debris, sediment, and buildup over time. In Las Vegas, desert sand and mineral deposits are common floor drain clog contributors. We clear floor drains and can inspect the line with a camera to identify any structural issues.",
    href: "/drain-cleaning/floor-drain/",
  },
  {
    title: "Laundry Drain Cleaning",
    description:
      "Laundry drain lines clog from lint, soap residue, and detergent buildup. In Las Vegas homes with older plumbing, laundry drain lines may also have mineral deposits from hard water that narrow the pipe over time. Slow laundry drainage or standing water in the utility area are signs the line needs professional attention.",
    href: "/drain-cleaning/laundry/",
  },
  {
    title: "Hydro Jetting",
    description:
      "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, soap buildup, and debris completely rather than just punching a hole through the clog. It is the most effective method for clearing stubborn or recurring clogs and for lines with significant hard water mineral buildup.",
    href: "/drain-cleaning/hydro-jetting/",
  },
  {
    title: "Video Camera Drain Inspection",
    description:
      "A video camera inspection lets us see exactly what is inside your drain or sewer line before and after cleaning. We use camera inspections to identify the type and location of a blockage, confirm that the line is fully clear after cleaning, and check for pipe damage, root intrusion, or structural issues that could cause future problems.",
    href: "/drain-cleaning/video-camera-inspection/",
  },
];

const LV_DRAIN_FACTORS = [
  {
    title: "Hard Water Mineral Buildup Inside Pipes",
    body: "Las Vegas has some of the hardest water in the United States, with calcium and magnesium concentrations that leave mineral deposits inside pipe walls over time. These deposits narrow the pipe's interior diameter, slow water flow, and create a rough surface that catches and holds grease, hair, and soap residue. In older Las Vegas homes with copper or galvanized pipes, mineral deposits have been accumulating for decades and can significantly reduce drain capacity.",
  },
  {
    title: "Grease and Soap Scum Bonding to Mineral Deposits",
    body: "In cities with soft water, grease and soap scum flow through pipes more easily. In Las Vegas, the hard water mineral deposits already coating the inside of pipe walls give grease and soap something to stick to. Once grease bonds to mineral scale, it hardens and accumulates rapidly. Kitchen drains and bathroom drains in Las Vegas homes tend to clog faster and more completely than in other regions for this reason.",
  },
  {
    title: "Desert Landscaping and Tree Root Intrusion",
    body: "In the desert climate of Las Vegas, tree roots actively search for moisture. Sewer lines are a reliable moisture source, and small cracks or aging joints in underground pipes give roots an entry point. Desert-adapted trees such as mesquite, olive, and palm have aggressive root systems that can penetrate sewer lines and create serious blockages. Root intrusion is a common cause of recurring drain problems in Las Vegas properties with established landscaping.",
  },
  {
    title: "Aging Pipes in Older Las Vegas Neighborhoods",
    body: "Many Las Vegas homes built between the 1950s and 1990s have original drain and sewer lines that were not designed for decades of hard water exposure. Galvanized steel drain pipes corrode from the inside out, creating rough surfaces that trap debris. Cast iron pipes develop scale buildup and can develop low spots over time that collect solids and cause recurring slow drains. In these older neighborhoods, professional drain cleaning is more important, not less, as pipes age.",
  },
];

const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the source of the clog",
    body: "We start by gathering information about which drains are affected, how long the problem has been present, and whether multiple fixtures are involved. This helps us determine whether the clog is in a branch drain or the main sewer line before we start work.",
  },
  {
    name: "Select the right clearing method for the pipe and clog type",
    body: "Not every clog requires the same approach. Soft clogs from hair and soap scum respond well to cable machines. Hard mineral scale and grease buildup in main lines benefit from hydro jetting. We select the method based on the pipe material, the type of clog, and the condition of the line to avoid unnecessary stress on older pipes.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line. For branch drains, we address the specific fixture and verify the line is clear to the main connection.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains. If we used a camera inspection to identify the clog, we confirm the line is clear on camera before completing the job.",
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
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties.",
    href: "/sewer-line-services/",
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
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Video Camera Plumbing Inspections",
    description:
      "Video camera inspection to identify the type and location of blockages, confirm lines are clear after cleaning, and check for pipe damage, root intrusion, or structural issues.",
    href: "/video-camera-plumbing-inspections/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Las Vegas and the Las Vegas Valley, including kitchen drain cleaning, bathroom drain cleaning, main sewer line cleaning, hydro jetting, and video camera drain inspection.",
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
      name: "Drain Cleaning",
      item: "https://redcarpetplumbing.com/drain-cleaning/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Your Drains",
  description:
    "The drain cleaning process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: DRAIN_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/drain-cleaning/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DRAIN_CLEANING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function DrainCleaningPage() {
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
            { label: "Drain Cleaning" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Drain Cleaning
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Las Vegas and the Las Vegas Valley. From slow kitchen drains and bathroom clogs to main sewer line blockages, our licensed plumbers clear the problem and restore full flow."
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
            label: "Request Drain Cleaning Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for drain cleaning"
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

        {/* SECTION 3: SIGNS YOU NEED DRAIN CLEANING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You Need
                <br className="hidden sm:block" /> Professional Drain Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                If your drains are slow, making noise, or producing odors, your
                plumbing is telling you something. Knowing when to call a
                plumber versus when to monitor the situation helps you avoid a
                minor inconvenience turning into a major repair.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Signs to Call a Plumber Now
                </h3>
                <ul className="mt-4 space-y-3">
                  {SIGNS_CALL_NOW.map((item) => (
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
                  Signs You Can Monitor
                </h3>
                <ul className="mt-4 space-y-3">
                  {SIGNS_CAN_MONITOR.map((item) => (
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
              When multiple drains are affected simultaneously, the blockage is
              typically in the main sewer line rather than in an individual
              branch drain. This requires professional clearing.
            </p>
          </div>
        </section>

        {/* SECTION 4: DRAIN TYPES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Drain Cleaning Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing clears all types of residential and
                    commercial drains throughout Las Vegas and the Las Vegas
                    Valley. Our licensed plumbers match the clearing method to
                    the specific clog and pipe type.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved drain service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {DRAIN_TYPES.map((card) => (
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

        {/* SECTION 5: WHY LAS VEGAS DRAINS CLOG FASTER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Drains
                    <br className="hidden sm:block" /> Clog Faster Than Most Cities
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas has some of the most demanding drain conditions
                    in the country. The combination of hard water, desert
                    climate, and aging plumbing in many neighborhoods means
                    drains here accumulate buildup faster and require more
                    attention than drains in most other cities.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_DRAIN_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Cleans Your Drains
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a drain cleaning, our
                    licensed plumbers follow a consistent process to make sure
                    the problem is fully resolved, not just temporarily cleared.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {DRAIN_STEPS.map((step, index) => (
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
                  Slow Drain or Clogged Pipe
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional drain cleaning
                  throughout Las Vegas and the Las Vegas Valley. Our licensed
                  plumbers clear clogs completely and restore full flow.
                  Available for emergency drain service when you need it.
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
                  Available for emergency drain service
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
                Drain Cleaning Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides drain cleaning throughout Las
                Vegas and the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/drain-cleaning/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/drain-cleaning/ not yet built */}
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
                <br className="hidden sm:block" /> About Drain Cleaning in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {DRAIN_CLEANING_FAQS.map((faq) => (
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
              <br className="hidden sm:block" /> Drain Cleaning in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for professional drain cleaning
              throughout Las Vegas and the Las Vegas Valley. Licensed plumbers,
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
