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
  title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/gas-line-plumbing/",
  },
  openGraph: {
    title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed gas line plumbers serving Las Vegas, Henderson, Summerlin, and the entire Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const GAS_LINE_FAQS = [
  {
    question: "What are the signs of a gas line leak?",
    answer:
      "The most common sign is a rotten egg or sulfur smell, which is added to natural gas for safety. You may also hear a hissing or whistling sound near a gas appliance or line, notice dead or dying vegetation above a buried gas line, or see a spike in your gas bill without increased usage. If you suspect a leak, leave the building immediately and call Southwest Gas before calling a plumber.",
  },
  {
    question: "Who is licensed to repair gas lines in Nevada?",
    answer:
      "In Nevada, gas line repair and installation must be performed by a licensed contractor. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which authorizes gas line work. Always verify a contractor's license before allowing gas line work on your property.",
  },
  {
    question:
      "Should I call a plumber or the gas company for a gas line problem?",
    answer:
      "If you smell gas or suspect an active leak, call Southwest Gas at 1-800-935-4748 from outside your home first. Once the area is cleared, call a licensed plumber like Red Carpet Plumbing for the inspection, diagnosis, and repair. The gas utility is responsible for the line up to your meter; you are responsible for everything from the meter into your home.",
  },
  {
    question:
      "Can a plumber install a gas line for a stove, dryer, or outdoor grill?",
    answer:
      "Yes. A licensed plumber can install, extend, or reconnect gas lines for appliances including gas stoves, dryers, water heaters, furnaces, and outdoor gas grills and fire pits. In Las Vegas, this work typically requires a permit. Red Carpet Plumbing handles the full process including installation and safety testing.",
  },
  {
    question: "How often should gas lines be inspected?",
    answer:
      "Annual gas line inspections are generally recommended for Las Vegas homes and businesses. Inspections help identify corroded fittings, aging pipe materials, loose connections, and pressure irregularities before they become safety hazards. Older homes, recently purchased properties, and homes with new appliance additions benefit most from regular inspections.",
  },
  {
    question: "Why do gas lines fail in Las Vegas homes?",
    answer:
      "Gas lines in Las Vegas face stress from extreme summer heat, temperature swings, and desert soil conditions. Older homes often have aging black iron pipe with dried-out fittings. Flexible CSST connectors in attics and exposed areas are particularly vulnerable to heat stress. Caliche soil layers can also shift and stress buried lines over time.",
  },
  {
    question: "Does Red Carpet Plumbing handle gas line emergencies?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency service for gas line issues throughout the Las Vegas Valley. If you smell gas, leave the property immediately, call Southwest Gas, and then call us once the area is declared safe. We are licensed for gas line work under NV #0048585A and serve Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, and surrounding communities.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for gas line plumbing?",
    answer:
      "Red Carpet Plumbing provides gas line services throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Gas Line Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "24/7 Emergency Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const GAS_LINE_WARNING_SIGNS = [
  {
    title: "Smell of Rotten Eggs or Sulfur",
    body: "Natural gas is odorless, but an odorant called mercaptan is added so leaks can be detected. A rotten egg or sulfur smell near a gas appliance, meter, or line is the clearest warning sign. Do not ignore it.",
  },
  {
    title: "Hissing or Whistling Near a Gas Line",
    body: "A hissing or whistling sound near a gas appliance, meter, or buried line suggests gas is escaping from a crack, loose connection, or failing fitting. This requires immediate attention.",
  },
  {
    title: "Dead or Dying Vegetation Above Buried Lines",
    body: "If grass or plants in your yard are dying in a strip or patch above a buried gas line with no other explanation, a slow underground leak may be allowing gas to displace oxygen in the soil.",
  },
  {
    title: "Gas Appliances Not Performing Properly",
    body: "A yellow, flickering, or unusually small flame on a gas stove or furnace can signal an inconsistent or low gas supply caused by a partial blockage or line damage.",
  },
  {
    title: "Higher Gas Bills Without Increased Usage",
    body: "A noticeable increase in your gas bill without a change in usage patterns can indicate a slow leak somewhere in your supply lines.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved gas line service image when available
const GAS_LINE_SERVICES: ServiceTypeCard[] = [
  {
    title: "Gas Line Leak Detection and Repair",
    description:
      "Accurate detection and repair of gas line leaks using professional-grade equipment. Gas leaks are a safety emergency and require a licensed plumber.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Gas Line Installation",
    description:
      "New gas line installation for appliances, additions, and new construction throughout Las Vegas and the Las Vegas Valley.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Gas Line Inspection",
    description:
      "Comprehensive inspection of your home or business gas supply lines to identify aging materials, corrosion, loose connections, and pressure irregularities.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Gas Appliance Hookup and Connection",
    description:
      "Professional gas line connections for stoves, dryers, water heaters, furnaces, and other gas-powered appliances.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Outdoor Gas Line Extensions",
    description:
      "Permitted gas line extensions for outdoor grills, fire pits, pool heaters, and outdoor kitchens throughout Las Vegas.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Gas Line Pressure Testing",
    description:
      "Pressure testing to verify your gas supply lines are operating safely and meeting local code requirements.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Gas Line Repair and Replacement",
    description:
      "Repair and replacement of damaged, corroded, or aging gas supply pipes and fittings in residential and commercial properties.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Emergency Gas Line Service",
    description:
      "24/7 emergency response for gas line issues throughout the Las Vegas Valley. Once Southwest Gas clears the area, our licensed plumbers respond quickly.",
    href: "/emergency-plumbing/",
  },
];

const LV_GAS_LINE_FACTORS = [
  {
    title: "Desert Heat and Temperature Extremes",
    body: "Las Vegas summers regularly exceed 110 degrees Fahrenheit, and temperatures inside attics and crawl spaces can reach significantly higher. Flexible CSST (corrugated stainless steel tubing) used in many Las Vegas homes is particularly vulnerable to heat stress at exposed connections and fittings. Extreme temperature swings between summer and winter also expand and contract metal pipe joints, weakening seals over time.",
  },
  {
    title: "Aging Pipe Materials in Older Las Vegas Homes",
    body: "Homes built before the 1990s in the Las Vegas area often have original black iron gas pipe with threaded fittings sealed with pipe dope compound. Over decades of heat cycles and minor ground movement, that sealant dries out and fitting connections can loosen. An annual inspection is the most reliable way to identify these issues before they become safety hazards.",
  },
  {
    title: "Caliche Soil and Buried Line Stress",
    body: "The Las Vegas Valley sits on caliche-rich desert soil that shifts during dry periods and heavy rain events. Buried gas lines are subject to this ground movement over time, which can stress pipe joints and connections below grade. This is especially relevant in older neighborhoods where buried lines have been in place for several decades.",
  },
  {
    title: "Outdoor Living Additions and Permitted Extensions",
    body: "Las Vegas homeowners frequently add outdoor gas appliances including built-in grills, fire pits, pool heaters, and outdoor kitchens. These additions require permitted gas line extensions installed by a licensed contractor. Red Carpet Plumbing handles the full process from planning the line route to final safety testing, and coordinates permit requirements for work in Las Vegas, Henderson, and surrounding jurisdictions.",
  },
];

const GAS_LINE_STEPS = [
  {
    name: "Call and Describe the Issue",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. If you smell gas or suspect an active leak, leave the property, call Southwest Gas first, and then call us once the area is declared safe.",
  },
  {
    name: "Licensed Inspection and Diagnosis",
    body: "A licensed plumber arrives to inspect your gas supply lines, connections, fittings, and appliance hookups. We use pressure testing and professional detection equipment to locate the source of any issue.",
  },
  {
    name: "Review Options and Approve the Work",
    body: "We explain exactly what we found, what repair or installation options are available, and what the work involves. You approve the scope before any work begins.",
  },
  {
    name: "Professional Repair or Installation with Safety Test",
    body: "Our licensed plumber completes the repair or installation and performs a final pressure test and safety check before the gas supply is restored. We verify all connections meet code requirements before leaving the job.",
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
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing service for burst pipes, sewer backups, water heater failures, and gas line emergencies.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnostics, repair, and installation for tank and tankless systems. Gas water heater work requires a licensed plumber.",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Modern energy efficient water heater installation",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden water leaks using advanced equipment before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties in Las Vegas.",
    href: "/sewer-line-services/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Line Plumbing",
  serviceType: "Gas Line Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and appliance hookup services for homes and businesses throughout Las Vegas and the Las Vegas Valley. Nevada Contractor License #0048585A (C-1 Plumbing and Heating).",
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
      name: "Gas Line Plumbing",
      item: "https://redcarpetplumbing.com/gas-line-plumbing/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Gas Line Work",
  description:
    "The gas line service process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: GAS_LINE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/gas-line-plumbing/",
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
        name: "Gas Line Plumbing",
        item: "https://redcarpetplumbing.com/gas-line-plumbing/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GAS_LINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GasLinePlumbingPage() {
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
            { label: "Gas Line Plumbing" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Gas Line Plumbing
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Licensed gas line repair, installation, and inspection for Las Vegas homes and businesses."
          trustItems={[
            "Licensed Gas Line Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
            "24/7 Emergency Service",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Gas Line Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Gas Line Help" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/gas-line-plumbing/hero.webp",
            alt: "Professional gas line installation in progress in Las Vegas",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for gas line work"
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

        {/* SECTION 3: SIGNS YOU NEED A GAS LINE PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Gas Line
                <br className="hidden sm:block" /> Needs Attention
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base font-semibold leading-7 text-brand-dark sm:text-lg">
                If you smell gas, leave immediately and call Southwest Gas at
                1-800-935-4748 from outside. Once the area is declared safe,
                call Red Carpet Plumbing for a licensed gas line inspection.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {GAS_LINE_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: GAS LINE SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Gas Line Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides the full range of gas line
                    services for residential and commercial properties
                    throughout Las Vegas and the Las Vegas Valley. All gas line
                    work is performed under our NV Contractor License
                    #0048585A.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved gas line service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {GAS_LINE_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY LAS VEGAS GAS LINES NEED SPECIALIZED ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Gas Lines
                    <br className="hidden sm:block" /> Need Specialized Attention
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Gas lines in Las Vegas homes face conditions that are more
                    demanding than in most other regions. Understanding these
                    local factors helps homeowners recognize when inspection
                    or service is warranted.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_GAS_LINE_FACTORS.map((factor) => (
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
                    How Red Carpet Plumbing
                    <br className="hidden sm:block" /> Handles Gas Line Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Gas line work is safety-critical and requires a licensed
                    contractor. Here is how Red Carpet Plumbing approaches gas
                    line service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GAS_LINE_STEPS.map((step, index) => (
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
                  Gas Line Problem? Call a Licensed
                  <br className="hidden sm:block" /> Las Vegas Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing is licensed for gas line work throughout
                  the Las Vegas Valley. NV Contractor License #0048585A (C-1
                  Plumbing and Heating).
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
                  Available 24/7 for gas line emergencies.
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
                Gas Line Plumbing Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides gas line services throughout the
                Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/gas-line-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/gas-line-plumbing/ not yet built */}
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
                Gas Line Plumbing Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GAS_LINE_FAQS.map((faq) => (
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
              Need a Licensed Gas Line Plumber
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for gas
              line repair, installation, and inspection throughout the Las
              Vegas Valley.
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
