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
  title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed commercial plumbers serving businesses, restaurants, and property managers throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const COMMERCIAL_FAQS = [
  {
    question: "What does commercial plumbing include?",
    answer:
      "Commercial plumbing covers the installation, repair, and maintenance of plumbing systems in businesses, restaurants, office buildings, multi-unit residential properties, and industrial facilities. This includes drain systems, water supply lines, water heaters, restroom fixtures, grease traps, floor drains, backflow prevention devices, and sewer line connections. Commercial systems typically operate at higher demand levels than residential systems and require licensed contractors for most work.",
  },
  {
    question:
      "Do I need a licensed plumber for commercial plumbing work in Nevada?",
    answer:
      "Yes. Commercial plumbing work in Nevada must be performed by a licensed contractor. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which covers commercial plumbing repair and installation. Clark County also requires permits for most commercial plumbing work. Always verify a contractor's license before hiring for commercial jobs.",
  },
  {
    question: "Can a residential plumber handle commercial plumbing?",
    answer:
      "A licensed plumber with a Nevada C-1 Plumbing and Heating license can perform both residential and commercial plumbing work. Red Carpet Plumbing serves both residential customers and commercial clients including businesses, restaurants, and property managers throughout the Las Vegas Valley.",
  },
  {
    question:
      "What are the most common commercial plumbing problems in Las Vegas?",
    answer:
      "Common commercial plumbing problems in Las Vegas include grease buildup and drain clogs in restaurant kitchens, high-demand water heater failures, backflow preventer issues in commercial irrigation and fire suppression systems, aging supply lines in older commercial buildings, and slab leaks in single-story commercial properties built on desert soil.",
  },
  {
    question: "How often should commercial plumbing be inspected?",
    answer:
      "Most commercial plumbing professionals recommend annual inspections for commercial properties. High-traffic facilities such as restaurants, hotels, and multi-unit buildings may benefit from more frequent inspections of drains, grease traps, water heaters, and backflow prevention devices. Regular inspection helps identify issues before they disrupt operations or cause property damage.",
  },
  {
    question: "Does Red Carpet Plumbing work with property managers?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for property managers overseeing multi-unit residential buildings, mixed-use properties, and commercial facilities throughout the Las Vegas Valley. We handle everything from individual unit repairs to shared line maintenance and water heater replacement.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle commercial plumbing emergencies?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency service for commercial plumbing situations including burst pipes, sewer backups, water heater failures, and major leaks throughout the Las Vegas Valley. Commercial plumbing emergencies that disrupt business operations require fast, licensed response.",
  },
  {
    question: "What commercial areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing provides commercial plumbing services throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Commercial Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const COMMERCIAL_WARNING_SIGNS = [
  {
    title: "Recurring Drain Backups or Slow Drains",
    body: "Grease buildup, debris, and high-use volume cause recurring drain problems in commercial kitchens, restrooms, and common areas. Persistent slow drains or backups in a commercial property need professional diagnosis, not repeated chemical treatments.",
  },
  {
    title: "Low Water Pressure Across Multiple Fixtures",
    body: "Low water pressure affecting more than one area of a commercial building often points to a supply line problem, failing pressure regulator, or an issue with the main connection. This can affect daily operations and customer experience.",
  },
  {
    title: "Water Heater Failures Affecting Operations",
    body: "A commercial water heater failure disrupts kitchens, restrooms, laundry facilities, and tenant services. High-capacity commercial water heaters require licensed service from plumbers experienced with commercial-grade equipment.",
  },
  {
    title: "Visible Leaks at Fixtures, Joints, or Connections",
    body: "Active leaks in a commercial property can damage inventory, equipment, flooring, and tenant improvements, and may create liability exposure. Leaks at fixtures, pipe joints, or connections should be addressed before they become major losses.",
  },
  {
    title: "Unusually High Water Bills",
    body: "A significant increase in water usage without a corresponding change in operations often indicates a hidden leak, running fixture, or failing valve somewhere in the building's plumbing system.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved commercial plumbing service image when available
const COMMERCIAL_SERVICES: ServiceTypeCard[] = [
  {
    title: "Commercial Drain Cleaning",
    description:
      "High-capacity drain cleaning and hydro jetting for commercial kitchens, restrooms, floor drains, and main sewer lines in Las Vegas businesses.",
    href: "/drain-cleaning/",
  },
  {
    title: "Commercial Water Heater Repair and Installation",
    description:
      "Repair and replacement of commercial water heaters, including high-capacity tank and tankless systems for businesses throughout the Las Vegas Valley.",
    href: "/water-heater-repair-installation/",
  },
  {
    title: "Commercial Leak Detection and Repair",
    description:
      "Accurate detection and repair of leaks in commercial water supply lines, fixtures, and plumbing connections before they cause property damage.",
    href: "/leak-detection-repair/",
  },
  {
    title: "Commercial Sewer Line Services",
    description:
      "Inspection, cleaning, repair, and replacement of commercial sewer lines serving businesses, multi-unit buildings, and commercial properties in Las Vegas.",
    href: "/sewer-line-services/",
  },
  {
    title: "Backflow Prevention and Testing",
    description:
      "Installation, testing, and repair of backflow prevention devices required for commercial properties, irrigation systems, and fire suppression connections.",
    href: "/backflow-prevention/",
  },
  {
    title: "Commercial Pipe Repair and Re-Piping",
    description:
      "Repair and replacement of aging or failing supply lines, drain lines, and commercial pipe systems in businesses and multi-unit buildings.",
    href: "/re-piping/",
  },
  {
    title: "Grease Trap and Floor Drain Service",
    description:
      "Grease trap maintenance and floor drain cleaning for commercial kitchens and food service operations in the Las Vegas area.",
    href: "/commercial-plumbing/",
  },
  {
    title: "Emergency Commercial Plumbing",
    description:
      "24/7 emergency plumbing response for burst pipes, sewer backups, water heater failures, and major leaks in commercial properties throughout Las Vegas.",
    href: "/emergency-plumbing/",
  },
];

const LV_COMMERCIAL_FACTORS = [
  {
    title: "Hospitality and Restaurant Corridor Demands",
    body: "The Las Vegas Strip corridor and the broader Paradise area are home to thousands of restaurants, hotels, bars, and entertainment venues operating high-demand plumbing systems around the clock. Commercial kitchens in this market generate significant grease buildup in drain lines, require high-capacity hot water supply, and depend on floor drain systems that must stay clear to meet health code requirements. A licensed commercial plumber who understands the pace and pressure of Las Vegas hospitality operations is essential.",
  },
  {
    title: "Property Management and Multi-Unit Buildings",
    body: "Henderson, North Las Vegas, and the broader Las Vegas Valley have large concentrations of multi-unit residential buildings, mixed-use developments, and commercial parks. Property managers responsible for these buildings need a reliable licensed plumbing contractor who can handle everything from shared sewer line maintenance and riser pipe inspection to individual unit repairs and tenant improvement plumbing work.",
  },
  {
    title: "Clark County Permits and Licensed Contractor Requirements",
    body: "Most commercial plumbing work in Las Vegas and Clark County requires permits and must be performed by a licensed contractor. Nevada C-1 Plumbing and Heating licensees are authorized for commercial plumbing work. Red Carpet Plumbing holds NV Contractor License #0048585A and handles permit coordination for applicable commercial projects. Working with an unlicensed contractor on commercial plumbing can result in failed inspections and compliance issues.",
  },
  {
    title: "High-Demand Systems in a Desert Climate",
    body: "Commercial plumbing systems in Las Vegas face the same hard water and heat stress conditions that affect residential plumbing, but at much greater scale. Mineral buildup from Las Vegas hard water affects commercial water heaters, fixtures, and supply lines more quickly when usage volume is high. Regular inspection and maintenance of commercial systems helps prevent the kind of unexpected failures that disrupt business operations and create expensive emergency repairs.",
  },
];

const COMMERCIAL_STEPS = [
  {
    name: "Call and Describe the Job",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, and property managers. For emergencies, we respond 24/7 throughout the Las Vegas Valley.",
  },
  {
    name: "Site Assessment and Diagnosis",
    body: "A licensed plumber arrives to assess the commercial plumbing system, diagnose the issue, and document what needs to be addressed. We use professional equipment to inspect drain lines, supply lines, water heaters, and connections.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repair or installation involves, and what options are available. You approve the full scope before any work begins. No surprises.",
  },
  {
    name: "Licensed Repair or Installation with Inspection",
    body: "Our licensed plumber completes the work, confirms all connections and systems are functioning correctly, and ensures the job meets code requirements. We coordinate permit inspections when required for the scope of work.",
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
      "24/7 emergency plumbing service for burst pipes, sewer backups, and major leaks in commercial and residential properties.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting for commercial kitchens, restrooms, floor drains, and main sewer lines.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for commercial and residential properties.",
    href: "/sewer-line-services/",
    built: true,
  },
  {
    title: "Backflow Prevention",
    description:
      "Backflow prevention device installation, testing, and repair required for commercial properties and irrigation systems.",
    href: "/backflow-prevention/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing",
  serviceType: "Commercial Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas and the Las Vegas Valley. Nevada Contractor License #0048585A (C-1 Plumbing and Heating).",
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
      name: "Commercial Plumbing",
      item: "https://redcarpetplumbing.com/commercial-plumbing/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Serves Commercial Clients",
  description:
    "The commercial plumbing service process used by Red Carpet Plumbing for Las Vegas businesses and property managers.",
  step: COMMERCIAL_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/commercial-plumbing/",
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
        name: "Commercial Plumbing",
        item: "https://redcarpetplumbing.com/commercial-plumbing/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function CommercialPlumbingPage() {
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
            { label: "Commercial Plumbing" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Replace ServiceImagePlaceholder with approved commercial plumbing hero image when client supplies asset at: public/images/services/commercial-plumbing/hero.webp */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Commercial Plumbing
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout the Las Vegas Valley."
          trustItems={[
            "Licensed Commercial Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
            "Residential and Commercial Service",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Commercial Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Commercial Plumbing Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas businesses choose Red Carpet Plumbing"
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

        {/* SECTION 3: COMMERCIAL PLUMBING PROBLEMS THAT NEED ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing Problems
                <br className="hidden sm:block" /> That Need Attention
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing provides licensed commercial plumbing
                repair, installation, and maintenance for businesses,
                restaurants, property managers, and multi-unit buildings
                throughout Las Vegas and the Las Vegas Valley. Nevada
                Contractor License #0048585A (C-1 Plumbing and Heating) covers
                commercial plumbing work.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {COMMERCIAL_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: COMMERCIAL PLUMBING SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Commercial Plumbing Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of commercial
                    plumbing services for businesses, restaurants, and property
                    managers throughout the Las Vegas Valley. All work is
                    performed under our NV Contractor License #0048585A.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved commercial plumbing service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {COMMERCIAL_SERVICES.map((card, index) => (
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

        {/* SECTION 5: COMMERCIAL PLUMBING IN THE LAS VEGAS MARKET */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Commercial Plumbing
                    <br className="hidden sm:block" /> in the Las Vegas Market
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Commercial plumbing in Las Vegas has its own demands shaped
                    by the hospitality industry, multi-unit property density,
                    Clark County permitting requirements, and desert climate
                    conditions. Understanding these factors matters for any
                    business owner or property manager evaluating plumbing
                    contractors.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_COMMERCIAL_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Serves Commercial Clients
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    From restaurant kitchens to office buildings and multi-unit
                    properties, the commercial plumbing process is built around
                    minimizing operational disruption. Here is how Red Carpet
                    Plumbing handles commercial work.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {COMMERCIAL_STEPS.map((step, index) => (
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
                  Need a Licensed Commercial
                  <br className="hidden sm:block" /> Plumber in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing serves businesses, restaurants, and
                  property managers throughout the Las Vegas Valley. NV
                  Contractor License #0048585A (C-1 Plumbing and Heating).
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
                  Available 24/7 for commercial plumbing emergencies.
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
                Commercial Plumbing Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides commercial plumbing services
                throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/commercial-plumbing/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/commercial-plumbing/ not yet built */}
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
                Commercial Plumbing Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {COMMERCIAL_FAQS.map((faq) => (
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
              Ready to Work With a Licensed
              <br className="hidden sm:block" /> Las Vegas Commercial Plumber?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              commercial plumbing repair, installation, and maintenance
              throughout the Las Vegas Valley.
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
