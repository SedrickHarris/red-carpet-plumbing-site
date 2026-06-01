// VERIFY BEFORE PUBLISHING: Confirm Red Carpet Plumbing
// holds current Nevada Backflow Prevention Assembly Tester
// certification before launching. Annual testing service
// references are informational only until confirmed.

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
    "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses throughout Las Vegas. Annual testing required by LVVWD. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/backflow-prevention/",
  },
  openGraph: {
    title:
      "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed backflow prevention installation and repair throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const BACKFLOW_FAQS = [
  {
    question: "What is a backflow preventer?",
    answer:
      "A backflow preventer is a plumbing device installed on your water supply line to stop water from flowing backward into the public water supply. Backflow can occur when pressure drops or reverses in the supply line, potentially allowing contaminants, chemicals, or waste from irrigation systems, fire suppression lines, or commercial plumbing to enter clean drinking water. Backflow preventers are required on many residential and commercial properties in Las Vegas and throughout Clark County.",
  },
  {
    question: "Who is required to have a backflow preventer in Las Vegas?",
    answer:
      "The Las Vegas Valley Water District and local municipalities require backflow prevention devices on properties with irrigation systems, fire suppression connections, commercial plumbing, multi-unit buildings, and any connection that poses a cross-connection risk to the public water supply. Requirements vary by property type and connection. If you have received a notice from LVVWD or your local water authority about backflow compliance, a licensed plumber can assess your property and install the appropriate device.",
  },
  {
    question:
      "How often do backflow preventers need to be tested in Nevada?",
    answer:
      "Annual testing is required for most backflow prevention assemblies in Las Vegas and surrounding municipalities. The Las Vegas Valley Water District requires annual testing for containment assemblies. The City of North Las Vegas operates a formal backflow program and notifies account holders when devices are due. Testing must be performed by a certified backflow tester and results submitted to the local water authority. Failing to test on schedule can result in notices of violation and risk water service disruption.",
  },
  {
    question: "What happens if my backflow preventer fails a test?",
    answer:
      "A failed test means your backflow prevention device is not functioning correctly and is not protecting the water supply as required. Once a device fails, repair or replacement is typically required before the property can be brought back into compliance. A licensed plumber can assess whether the device can be repaired or needs to be replaced, and can coordinate the follow-up certification process.",
  },
  {
    question: "What types of backflow preventers are used in Las Vegas?",
    answer:
      "Common backflow prevention devices in Las Vegas include reduced pressure zone (RPZ) assemblies, which provide the highest level of protection and are required for high-hazard connections. Double check valve assemblies (DCVA) are used for moderate-hazard applications. Pressure vacuum breakers (PVB) are commonly installed on residential irrigation systems. The appropriate device depends on the type of connection, the level of hazard, and the requirements of the local water authority.",
  },
  {
    question: "Does Red Carpet Plumbing install backflow preventers?",
    answer:
      "Yes. Red Carpet Plumbing installs backflow prevention devices for residential and commercial properties throughout Las Vegas and the Las Vegas Valley. Installations include irrigation system backflow preventers, commercial containment assemblies, and device replacements for failed or non-compliant units. Nevada Contractor License #0048585A (C-1 Plumbing and Heating) covers backflow device installation.",
  },
  {
    question: "Do I need a backflow preventer for my irrigation system?",
    answer:
      "Yes, in most cases. Residential irrigation systems in Las Vegas are among the most common applications requiring a backflow preventer because the irrigation line creates a direct cross-connection between the water supply and potentially contaminated soil or fertilizer. Pressure vacuum breakers are the most common backflow device installed on residential irrigation systems in Clark County. If your irrigation system does not have a backflow preventer, contact a licensed plumber to assess and install the appropriate device.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for backflow prevention?",
    answer:
      "Red Carpet Plumbing provides backflow prevention device installation, repair, and service throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const BACKFLOW_INFO_BLOCKS = [
  {
    title: "What Is Backflow?",
    body: "Backflow occurs when water flows backward through a plumbing connection, reversing from its intended direction. This can happen when pressure drops suddenly in the supply line, creating suction that pulls water backward. Without a properly functioning backflow preventer, contaminants from irrigation systems, commercial equipment, or other cross-connections can enter the clean water supply.",
  },
  {
    title: "When Is a Backflow Preventer Required?",
    body: "The Las Vegas Valley Water District and local municipalities require backflow prevention devices on properties with irrigation systems, fire suppression connections, commercial plumbing connections, and any plumbing configuration that creates a cross-connection risk. If you have received a compliance notice from LVVWD or your local water authority, a licensed plumber can assess your property and install the required device.",
  },
  {
    title: "Annual Testing Requirement in Las Vegas",
    body: "LVVWD requires annual testing of backflow prevention assemblies for most regulated properties. The City of North Las Vegas operates a formal backflow prevention program and notifies water account holders when devices are due for inspection. Testing must be performed by a certified backflow tester and results submitted to the local water authority. Failing to test on schedule can result in notices of violation and risk of service disruption.",
  },
  {
    title: "What Happens If a Device Fails a Test?",
    body: "A failed backflow test means the device is not protecting the water supply as required. Repair or replacement is typically necessary to restore compliance. A licensed plumber can assess whether the failed device can be repaired or needs to be replaced and can coordinate the process.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved backflow prevention service image when available
const BACKFLOW_SERVICES: ServiceTypeCard[] = [
  {
    title: "Backflow Preventer Installation",
    description:
      "Installation of backflow prevention devices for residential irrigation systems, commercial properties, and fire suppression connections throughout Las Vegas.",
    href: "/backflow-prevention/",
  },
  {
    title: "Irrigation System Backflow Protection",
    description:
      "Pressure vacuum breaker installation for residential and commercial irrigation systems to meet LVVWD and Clark County cross-connection requirements.",
    href: "/backflow-prevention/",
  },
  {
    title: "Commercial Backflow Prevention",
    description:
      "Containment backflow prevention device installation and repair for commercial properties, multi-unit buildings, and high-hazard connections.",
    href: "/commercial-plumbing/",
  },
  {
    title: "Backflow Device Repair",
    description:
      "Repair of failed or malfunctioning backflow prevention assemblies to restore compliance after a failed annual test.",
    href: "/backflow-prevention/",
  },
  {
    title: "Backflow Device Replacement",
    description:
      "Replacement of outdated, failed, or non-compliant backflow prevention devices with current approved assemblies.",
    href: "/backflow-prevention/",
  },
  {
    title: "RPZ Assembly Service",
    description:
      "Installation and repair of reduced pressure zone (RPZ) assemblies for high-hazard commercial and industrial connections requiring the highest level of backflow protection.",
    href: "/backflow-prevention/",
  },
  {
    title: "PVB and DCVA Service",
    description:
      "Installation and repair of pressure vacuum breakers and double check valve assemblies for residential and moderate-hazard commercial applications.",
    href: "/backflow-prevention/",
  },
  {
    title: "Backflow Compliance Assessment",
    description:
      "Property assessment to determine backflow prevention requirements, identify missing or non-compliant devices, and plan installations to meet LVVWD and municipal requirements.",
    href: "/backflow-prevention/",
  },
];

const LV_BACKFLOW_FACTORS = [
  {
    title: "LVVWD Annual Testing Requirements",
    body: "The Las Vegas Valley Water District requires annual testing of backflow prevention assemblies for most regulated properties in its service area. Property owners are responsible for scheduling testing, ensuring devices pass, and maintaining compliance records. Failure to complete required annual testing can result in notices of violation and risk of water service interruption. If your property has a backflow preventer that has not been tested recently or you have received a compliance notice from LVVWD, a licensed plumber can assess the device and coordinate the appropriate next steps.",
  },
  {
    title: "North Las Vegas Backflow Prevention Program",
    body: "The City of North Las Vegas operates a formal backflow prevention program for properties within its water service area. When a device becomes due for annual inspection, the city sends a notification letter to the water billing account holder. Results must be submitted by an approved testing company. Properties with older device types including single-check devices and some pressure vacuum breakers may be required to upgrade to current approved assemblies upon written notification. A licensed plumber familiar with North Las Vegas requirements can advise on compliance and any required upgrades.",
  },
  {
    title: "Irrigation Systems and Cross-Connection Risk",
    body: "Residential irrigation systems are one of the most common sources of cross-connection risk in Las Vegas because they connect the potable water supply directly to soil, fertilizers, and pesticides. A pressure vacuum breaker installed on the irrigation supply line prevents back-siphonage from the irrigation zone back into the home's drinking water. Las Vegas's high residential irrigation use makes this one of the most frequently required backflow prevention installations throughout Clark County. If your irrigation system does not have a backflow preventer, contact a licensed plumber for assessment and installation.",
  },
  {
    title: "Commercial and Fire Suppression Requirements",
    body: "Commercial properties, multi-unit residential buildings, and properties with fire suppression connections in Las Vegas are required to have containment backflow prevention devices. The type of device required depends on the level of hazard associated with the plumbing connection. RPZ assemblies are required for high-hazard applications and fire suppression systems. Annual testing of these assemblies is mandatory, and records must be submitted to the local water authority. Property managers and business owners who are unsure of their backflow compliance status should have a licensed plumber conduct an assessment.",
  },
];

const BACKFLOW_STEPS = [
  {
    name: "Call and Describe Your Situation",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow prevention need. Whether you have received a compliance notice, need a new device installed, or have a device that needs repair or replacement, we can schedule a licensed plumber to assess your property.",
  },
  {
    name: "Property Assessment and Device Review",
    body: "A licensed plumber inspects the existing backflow prevention setup or assesses where a new device is needed. We identify the appropriate device type based on the connection, hazard level, and local authority requirements.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what device is needed or what repair is required, and what the installation or repair involves. You approve the scope before any work begins.",
  },
  {
    name: "Installation or Repair with Compliance Documentation",
    body: "Our licensed plumber installs or repairs the backflow prevention device following local code requirements. We document the work completed for your compliance records.",
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
    title: "Commercial Plumbing",
    description:
      "Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers throughout Las Vegas.",
    href: "/commercial-plumbing/",
    built: true,
  },
  {
    title: "Water Pipe Repair and Replacement",
    description:
      "Repair and replacement of water supply pipes, including service lines and connections requiring backflow protection.",
    href: "/water-pipe-repair-replacement/",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, fixtures, and plumbing connections throughout Las Vegas.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing service for urgent plumbing situations throughout Las Vegas and the Las Vegas Valley.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Backflow Prevention",
  serviceType: "Backflow Prevention",
  description:
    "Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses throughout Las Vegas and the Las Vegas Valley, including irrigation system backflow preventers, RPZ assemblies, PVB and DCVA devices, and commercial containment backflow prevention. Nevada Contractor License #0048585A.",
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
      name: "Backflow Prevention",
      item: "https://redcarpetplumbing.com/backflow-prevention/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Backflow Prevention Work",
  description:
    "The backflow prevention service process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: BACKFLOW_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/backflow-prevention/",
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
        name: "Backflow Prevention",
        item: "https://redcarpetplumbing.com/backflow-prevention/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BACKFLOW_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BackflowPreventionPage() {
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
            { label: "Backflow Prevention" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Backflow Prevention Services
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Backflow prevention device installation, repair, and service for homes and businesses throughout Las Vegas and the Las Vegas Valley."
          trustItems={[
            "Licensed Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
            "Residential and Commercial Service",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Backflow Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Backflow Service Help" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/backflow-prevention/hero.webp",
            alt: "Professional backflow prevention device installation",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for backflow prevention"
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

        {/* SECTION 3: WHAT IS BACKFLOW AND WHY IT MATTERS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Backflow Prevention
                <br className="hidden sm:block" /> in Las Vegas
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing installs, repairs, and services backflow
                prevention devices for homes and businesses throughout Las
                Vegas and the Las Vegas Valley. Backflow preventers protect
                your water supply from contamination caused by reverse water
                flow. Annual testing is required by the Las Vegas Valley Water
                District and local municipalities for many properties.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {BACKFLOW_INFO_BLOCKS.map((block) => (
                <article
                  key={block.title}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {block.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BACKFLOW PREVENTION SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Backflow Prevention Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of backflow
                    prevention installation, repair, and replacement services
                    for residential and commercial properties throughout Las
                    Vegas and the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved backflow prevention service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {BACKFLOW_SERVICES.map((card, index) => (
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

        {/* SECTION 5: BACKFLOW PREVENTION IN THE LAS VEGAS VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Backflow Prevention
                    <br className="hidden sm:block" /> in the Las Vegas Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Backflow prevention requirements in Las Vegas are set by
                    the Las Vegas Valley Water District and individual
                    municipal water authorities, each with their own
                    notification and compliance processes. Knowing what
                    applies to your property helps avoid compliance issues
                    and service interruption.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_BACKFLOW_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Backflow Prevention Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Backflow prevention work involves device selection, code
                    compliance, and proper documentation. Here is how Red
                    Carpet Plumbing approaches backflow service for Las Vegas
                    homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {BACKFLOW_STEPS.map((step, index) => (
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
                  Need Backflow Prevention Service
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing installs and repairs backflow prevention
                  devices for homes and businesses throughout the Las Vegas
                  Valley. NV Contractor License #0048585A.
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
                  Serving residential and commercial properties throughout
                  the Las Vegas Valley.
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
                Backflow Prevention Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides backflow prevention installation,
                repair, and service throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/backflow-prevention/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/backflow-prevention/ not yet built */}
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
                Backflow Prevention Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BACKFLOW_FAQS.map((faq) => (
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
              Need Backflow Prevention Service
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              backflow prevention device installation, repair, and service
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
