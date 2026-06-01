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
    "Water Meter and Pressure Regulator Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides pressure regulator inspection, repair, and replacement for homes throughout Las Vegas. High water pressure and PRV failure are common in the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
  },
  openGraph: {
    title:
      "Water Meter and Pressure Regulator Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed pressure regulator repair and replacement throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const PRESSURE_FAQS = [
  {
    question: "What does a water pressure regulator do?",
    answer:
      "A water pressure regulator, also called a pressure reducing valve or PRV, is installed on your main water supply line where it enters the home. It reduces high municipal water pressure to a safe, consistent level for residential use, typically 50 to 60 PSI. In Las Vegas, municipal water pressure frequently exceeds 80 to 100 PSI due to the valley's elevation changes and distribution infrastructure. Without a functioning PRV, excessive pressure stresses pipes, fixtures, water heaters, and appliances, accelerating wear and increasing the risk of leaks.",
  },
  {
    question: "What are the signs of a failing pressure regulator?",
    answer:
      "Signs of a failing pressure regulator include fluctuating water pressure throughout the home, sudden high-pressure bursts at fixtures, banging or knocking pipes when water is turned on or off (water hammer), visible leaks or moisture around the valve body on the main line, and consistently low water pressure across multiple fixtures. A PRV that has failed in the open position allows full municipal pressure into the home, which can damage pipes and appliances. A PRV that has failed in the closed position restricts flow and reduces pressure throughout the home.",
  },
  {
    question: "What is the safe water pressure for a home?",
    answer:
      "Safe residential water pressure is generally 50 to 60 PSI, with 80 PSI as the maximum recommended limit. Pressure above 80 PSI is considered high and can cause premature failure of faucet washers, toilet fill valves, and appliance supply connections. Pressure above 100 PSI significantly increases the risk of pipe joint stress, pinhole leaks, and appliance damage. In Las Vegas, where municipal supply pressure often exceeds these levels, a properly set and functioning PRV is an important part of protecting the home's plumbing system.",
  },
  {
    question: "How long does a pressure reducing valve last?",
    answer:
      "A pressure reducing valve typically lasts 10 to 15 years under normal conditions. In Las Vegas, hard water mineral deposits accumulate inside the PRV diaphragm mechanism over time, degrading performance and shortening lifespan. A PRV that is approaching or past 15 years of age, or one in a home that has never had a PRV replaced since original construction, is a candidate for inspection and likely replacement. Many Las Vegas homes built in the 1980s and 1990s have original PRVs still in service.",
  },
  {
    question: "Does Las Vegas have high water pressure?",
    answer:
      "Yes. Municipal water pressure in the Las Vegas Valley frequently exceeds 80 to 100 PSI in many areas due to elevation differences and the demands of the distribution network. The Southern Nevada Water Authority and local water utilities supply pressure adequate for the distribution system, which often exceeds the safe range for residential plumbing. A pressure reducing valve is the standard protection against excessive inlet pressure, and all Las Vegas homes should have a functioning PRV on the main supply line.",
  },
  {
    question: "Can I use my water meter to check for a hidden leak?",
    answer:
      "Yes. A water meter test is a useful first step for diagnosing a hidden leak. With all fixtures, appliances, and irrigation off, watch the water meter for movement. If the meter continues to register flow, water is actively leaving the supply system somewhere in the home or on the service line. This does not identify where the leak is, but it confirms that active water loss is occurring and a plumber should be called to investigate. Red Carpet Plumbing uses the water meter test as part of the initial leak assessment process.",
  },
  {
    question:
      "What is water hammer and how is it related to water pressure?",
    answer:
      "Water hammer is the banging or knocking sound that occurs in pipes when water flow is stopped suddenly, such as when a valve or faucet is closed quickly. It is caused by a pressure surge wave traveling through the supply line. High inlet pressure from a failed or absent PRV significantly increases the severity of water hammer and the stress it places on pipe joints and fittings. Installing or replacing a properly adjusted PRV reduces operating pressure and typically eliminates or greatly reduces water hammer.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for pressure regulator services?",
    answer:
      "Red Carpet Plumbing provides pressure regulator inspection, repair, and replacement throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const PRESSURE_WARNING_SIGNS = [
  {
    title: "Fluctuating or Erratic Water Pressure",
    body: "Pressure that surges or drops unexpectedly throughout the home is a primary sign of a failing PRV. The diaphragm inside the valve may be worn, corroded, or clogged with mineral deposits, causing it to lose the ability to maintain a steady output pressure.",
  },
  {
    title: "Banging or Knocking Pipes (Water Hammer)",
    body: "Water hammer is the banging sound that occurs when water flow stops suddenly and a pressure wave travels back through the supply line. High inlet pressure from a failed or absent PRV significantly worsens water hammer and the stress it places on pipe joints. A properly set PRV reduces operating pressure and typically reduces or eliminates water hammer.",
  },
  {
    title: "Consistently High Water Pressure Throughout the Home",
    body: "If multiple fixtures run at noticeably high pressure, the PRV may have failed in the open position, allowing full municipal supply pressure into the home. In Las Vegas, where municipal pressure often exceeds 80 to 100 PSI, a failed-open PRV is a risk to fixtures, appliances, and supply connections throughout the property.",
  },
  {
    title: "Visible Leaks at the Main Line Valve Body",
    body: "Moisture, dripping, or mineral staining around the PRV valve body on the main supply line indicates the valve itself is leaking. This typically means the valve needs replacement.",
  },
  {
    title: "Unexplained Increase in Water Bills",
    body: "A spike in the water bill without a change in usage can indicate a running leak somewhere in the supply system. Checking the water meter with all fixtures off confirms whether water is actively leaving the system. If the meter moves with everything off, a plumber should investigate.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved pressure regulator service image when available
const PRESSURE_SERVICES: ServiceTypeCard[] = [
  {
    title: "Pressure Regulator Inspection",
    description:
      "Assessment of existing PRV condition, output pressure measurement, and recommendation for repair or replacement.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Pressure Regulator Replacement",
    description:
      "Replacement of failed or aging pressure reducing valves on the main supply line for Las Vegas homes and businesses.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Pressure Regulator Installation",
    description:
      "Installation of a new pressure reducing valve for homes without existing PRV protection or properties with excessive inlet pressure.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Water Pressure Diagnosis",
    description:
      "Diagnosis of high pressure, low pressure, and fluctuating pressure problems throughout the home or building.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Water Hammer Repair",
    description:
      "Diagnosis and resolution of water hammer including PRV adjustment or replacement to reduce pressure surge stress on supply lines.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Water Meter Consultation",
    description:
      "Guidance on reading your water meter, performing a leak test, and understanding your water usage to identify potential hidden leaks.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Main Line Valve and PRV Assembly Service",
    description:
      "Service of the main shutoff valve and PRV assembly at the point where the water supply enters the home.",
    href: "/water-meter-pressure-regulator-services/",
  },
  {
    title: "Commercial Pressure Regulation",
    description:
      "Pressure regulator inspection, repair, and replacement for commercial properties, multi-unit buildings, and businesses throughout Las Vegas.",
    href: "/water-meter-pressure-regulator-services/",
  },
];

const LV_PRESSURE_FACTORS = [
  {
    title:
      "Las Vegas Municipal Water Pressure Exceeds Safe Levels in Many Areas",
    body: "The Las Vegas Valley's municipal water distribution system supplies pressure adequate for the full service network, including elevation variations across the valley. In many Las Vegas neighborhoods, inlet pressure at the meter regularly exceeds 80 to 100 PSI, well above the 50 to 60 PSI considered safe for residential plumbing. The Southern Nevada Water Authority and local water utilities recommend that all homes in the service area have a functioning pressure reducing valve to protect the internal plumbing system from the effects of excessive supply pressure. Without a working PRV, high pressure accelerates wear on faucet and toilet components, stresses supply line connections, and increases the risk of leaks throughout the home.",
  },
  {
    title: "Hard Water Accelerates PRV Diaphragm Failure",
    body: "The PRV diaphragm is a flexible rubber or elastomer membrane that adjusts to maintain steady output pressure. In Las Vegas, hard water mineral deposits accumulate on the diaphragm surface and inside the valve body over time, reducing the diaphragm's flexibility and accuracy. A PRV that has been in service for ten or more years in Las Vegas hard water conditions is at increased risk of diaphragm failure compared to the same valve in a soft-water market. Annual pressure checks and proactive PRV replacement before failure prevents the damage that occurs when a valve fails in the high-pressure-open position.",
  },
  {
    title: "Older Las Vegas Homes with Original PRVs",
    body: "Many Las Vegas homes built between the 1970s and early 2000s still have original pressure reducing valves that have never been replaced. PRVs typically last 10 to 15 years under normal conditions, and Las Vegas hard water conditions can shorten that range. A home with an original PRV from the 1980s or 1990s is operating with a valve well past its expected service life. At that age, failure can occur without warning. A licensed plumber can check the current output pressure and assess whether the existing valve is still performing within the safe range.",
  },
  {
    title: "Reading Your Water Meter for Hidden Leaks",
    body: "The water meter is the most accessible tool for detecting active water loss in a home's supply system. With all fixtures, appliances, and irrigation systems turned off, check whether the meter display or dial continues to move. Movement with everything off confirms that water is actively leaving the system somewhere. This test does not pinpoint the leak location, but it is the first diagnostic step that guides a plumber toward the right investigation. Red Carpet Plumbing uses the water meter test as part of the initial assessment for unexplained water bill increases and suspected supply line leaks throughout the Las Vegas Valley.",
  },
];

const PRESSURE_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. Common reasons to call include fluctuating pressure, banging pipes, a high water bill without an obvious cause, or a visible leak near the main supply line valve assembly.",
  },
  {
    name: "Pressure Measurement and Valve Assessment",
    body: "A licensed plumber measures the current water pressure at the main line and at fixtures to confirm whether the PRV is functioning within the safe range. We inspect the valve body for signs of wear, mineral buildup, and leaks, and assess the age and condition of the assembly.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what we found, whether repair or replacement is the right approach, and what the work involves. You approve the scope before any work begins.",
  },
  {
    name: "Repair or Replacement with Pressure Confirmation",
    body: "Our licensed plumber completes the repair or replacement and confirms output pressure is within the safe range before leaving. We verify that supply connections are secure and that no leaks are present at the valve assembly.",
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
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, fixtures, and underground connections.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Water Pipe Repair and Replacement",
    description:
      "Repair and replacement of water supply pipes including burst pipes, pinhole leaks, and aging pipe material.",
    href: "/water-pipe-repair-replacement/",
    built: true,
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater repair and installation for tank and tankless systems. High water pressure accelerates water heater wear.",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Modern energy efficient water heater installation",
    built: true,
  },
  {
    title: "Re-Piping",
    description:
      "Full and partial re-piping for homes with aging supply pipe systems that have been damaged by years of excessive water pressure.",
    href: "/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Whole home re-piping service in Las Vegas",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Meter and Pressure Regulator Services",
  serviceType: "Pressure Regulator and Water Meter Services",
  description:
    "Red Carpet Plumbing provides pressure regulator inspection, repair, and replacement and water meter services for homes and businesses throughout Las Vegas and the Las Vegas Valley. High municipal water pressure in the Las Vegas Valley makes properly functioning pressure reducing valves essential for protecting residential plumbing systems. Nevada Contractor License #0048585A.",
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
      name: "Water Meter and Pressure Regulator Services",
      item: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Pressure Regulator Service",
  description:
    "The pressure regulator inspection, repair, and replacement process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: PRESSURE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Meter and Pressure Regulator Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides pressure regulator inspection, repair, and replacement throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
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
        name: "Water Meter and Pressure Regulator Services",
        item: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRESSURE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WaterMeterPressureRegulatorServicesPage() {
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
            { label: "Water Meter and Pressure Regulator Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Verify hero image resolution at display size. */}
        {/* Client may need to supply higher-resolution asset. */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Water Meter and Pressure Regulator Services
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Pressure regulator inspection, repair, and replacement for homes and businesses throughout Las Vegas and the Las Vegas Valley."
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
            label: "Request Pressure Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={
            <QuoteFormPlaceholder title="Get a Pressure Regulator Quote" />
          }
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/water-meter-pressure-regulator-services/hero.webp",
            alt: "Licensed technician servicing a water meter and pressure regulator",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for pressure regulator work"
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

        {/* SECTION 3: SIGNS YOUR PRESSURE REGULATOR NEEDS SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Water Pressure Regulator
                <br className="hidden sm:block" /> Needs Attention
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing provides pressure regulator inspection,
                repair, and replacement and water meter services for homes
                and businesses throughout Las Vegas and the Las Vegas Valley.
                A properly functioning pressure reducing valve protects your
                plumbing system, fixtures, and appliances from damage caused
                by excessive municipal water pressure.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {PRESSURE_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: PRESSURE REGULATOR AND WATER METER SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Pressure Regulator and Water Meter Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of pressure
                    regulator and water meter services for residential and
                    commercial properties throughout Las Vegas and the Las
                    Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved pressure regulator service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {PRESSURE_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY PRESSURE REGULATION MATTERS IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Pressure Regulation Matters
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    The Las Vegas Valley&apos;s distribution network, hard water,
                    and aging housing stock combine to make pressure
                    regulator service one of the higher-impact preventive
                    plumbing tasks for local homeowners. Knowing how these
                    factors interact helps you decide when an inspection
                    is worth scheduling.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_PRESSURE_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Pressure Regulator Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Pressure regulator service depends on accurate
                    measurement, careful inspection, and proper output
                    verification after the work is done. Here is how Red
                    Carpet Plumbing approaches PRV service in Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {PRESSURE_STEPS.map((step, index) => (
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
                  Water Pressure Problem
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing inspects, repairs, and replaces
                  pressure reducing valves throughout the Las Vegas Valley.
                  NV Contractor License #0048585A.
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
                Pressure Regulator Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides pressure regulator and water
                meter services throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/water-meter-pressure-regulator-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/water-meter-pressure-regulator-services/ not yet built */}
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
                Pressure Regulator and Water Meter Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PRESSURE_FAQS.map((faq) => (
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
              Need Pressure Regulator Service
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              pressure regulator inspection, repair, and replacement
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
