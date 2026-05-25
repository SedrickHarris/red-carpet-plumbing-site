import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "No hot water in Las Vegas? Red Carpet Plumbing repairs and installs tank and tankless water heaters for homes and businesses throughout the Las Vegas Valley.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Water heater problems in Las Vegas? Red Carpet Plumbing diagnoses, repairs, and installs tank and tankless water heaters for homes and businesses throughout the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD
// schema both derive from this list, guaranteeing character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const WATER_HEATER_FAQS = [
  {
    question: "How long do water heaters last in Las Vegas?",
    answer:
      "Most tank water heaters last between 8 and 12 years under normal conditions. In Las Vegas, hard water accelerates sediment accumulation inside the tank, which reduces heating efficiency and puts added stress on the heating elements and tank lining over time. Las Vegas homeowners may find their water heaters require more frequent maintenance or reach the end of their useful life sooner than the national average suggests. Regular flushing and anode rod inspection can help extend unit life.",
  },
  {
    question: "Should I repair or replace my water heater?",
    answer:
      "Repair is generally worth considering when a water heater is less than 8 years old, the problem is isolated to a single component such as a heating element, thermostat, or pilot assembly, and the repair cost is significantly less than replacement. Replacement makes more sense when the unit is older than 10 years, the tank is visibly leaking or corroded, the repair cost approaches half the cost of a new unit, or the unit has required multiple repairs in a short period. A plumber can help you evaluate the condition of your current unit and the options available.",
  },
  {
    question:
      "Why does my water heater make a rumbling or popping noise?",
    answer:
      "Rumbling, popping, or banging sounds from a water heater are usually caused by sediment that has settled at the bottom of the tank. As the burner heats the water, it also heats the sediment layer, causing trapped water pockets to pop and steam bubbles to push through the buildup. In Las Vegas, hard water deposits sediment more rapidly than in softer water areas. Flushing the tank can help, but if the sediment layer is significant, the unit may already have reduced efficiency and a shortened remaining lifespan.",
  },
  {
    question:
      "What is the difference between a tank water heater and a tankless water heater?",
    answer:
      "A tank water heater stores a set volume of heated water and keeps it warm until it is used. It is the most common type in Las Vegas homes and is generally less expensive to install than a tankless unit. A tankless water heater heats water on demand as it flows through the unit, which eliminates the need for a storage tank and can reduce energy use in some households. Tankless units have a higher upfront cost and require proper sizing to meet household demand. A plumber can help you determine which type is the right fit for your home or business.",
  },
  {
    question: "What causes rusty or discolored hot water?",
    answer:
      "Rusty or brownish hot water typically indicates corrosion inside the water heater tank. This often happens when the anode rod, which is designed to attract corrosive elements and protect the tank lining, has been depleted and is no longer providing protection. In Las Vegas hard water conditions, anode rods may wear down faster than in softer water areas. If the tank lining itself is corroding, replacement is usually the recommended solution.",
  },
  {
    question:
      "Does Red Carpet Plumbing service water heaters outside of Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides water heater repair and installation throughout the Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Green Valley, Lake Las Vegas, and surrounding communities.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Water Heater Repair and Installation",
  "Serving Las Vegas and the Las Vegas Valley",
  "Residential and Commercial Service",
  // SOURCE-SITE CLAIM: verify before publish
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify before publish
  "Customer Satisfaction Focus",
];

const DIRECT_ANSWER_BULLETS = [
  "No hot water or water that runs cold faster than expected",
  "Inconsistent water temperature throughout the day",
  "Visible leaks or rust staining near the water heater",
  "Rumbling, popping, or banging sounds during heating cycles",
  "Rusty or discolored hot water at the tap",
];

const SIGNS_LIST = [
  "You have no hot water or the hot water runs out much faster than usual",
  "Water temperature is inconsistent or the water never gets fully hot",
  "Your water heater is making rumbling, popping, or banging sounds",
  "You notice water pooling near the base of the unit",
  "Hot water has a rusty, metallic, or discolored appearance",
  "Your water heater is more than 10 years old and performance has declined",
  "The pilot light on a gas water heater keeps going out or will not stay lit",
  "Your energy bills have increased without a change in usage habits",
];

const SERVICE_COVERS = [
  "Diagnosis of no-hot-water problems and temperature inconsistency",
  "Thermostat inspection and adjustment",
  "Heating element repair or replacement for electric units",
  "Gas burner and pilot assembly assessment for gas water heaters",
  "Anode rod inspection and replacement to protect against tank corrosion",
  "Sediment flushing to improve efficiency and reduce noise",
  "Full water heater replacement when repair is not practical",
  "New water heater installation for remodels and replacement projects",
  "Tankless water heater service and installation",
];

const PROCESS_STEPS = [
  {
    heading: "Contact us.",
    body: "Reach out by phone or through our online contact form. Describe the problem, including what symptoms you have noticed and how long the issue has been occurring.",
  },
  {
    heading: "Schedule service.",
    body: "We will confirm your appointment and let you know if there are any preparation steps before our plumber arrives.",
  },
  {
    heading: "Diagnosis.",
    body: "Our plumber will inspect the unit, assess the symptoms, and identify the cause of the problem. We will explain our findings clearly before recommending a course of action.",
  },
  {
    heading: "Repair or replacement.",
    body: "If the unit can be repaired, we will complete the work and confirm the system is functioning properly. If replacement is the right choice, we will explain the options and complete the installation.",
  },
  {
    heading: "System check and guidance.",
    body: "After completing the repair or installation, we will confirm everything is working correctly and provide any maintenance guidance relevant to your new or repaired unit.",
  },
];

type RelatedServiceLink = {
  label: string;
  href: string;
  description: string;
  exists: boolean;
};

const RELATED_SERVICES: RelatedServiceLink[] = [
  {
    label: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    description:
      "Water heater failures and leaks that need immediate attention",
    exists: true,
  },
  {
    label: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    description:
      "Hidden leaks connected to water heater lines or supply pipes",
    exists: false,
  },
  {
    label: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    description:
      "Fixture upgrades and replacements often paired with new water heater installs",
    exists: false,
  },
  {
    label: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    description:
      "Pressure issues that can affect water heater performance",
    exists: false,
  },
  {
    label: "Plumbing Services",
    href: "/plumbing-services/",
    description:
      "Full list of residential and commercial plumbing services",
    exists: true,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs tank and tankless water heaters for homes and businesses throughout Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding Las Vegas Valley communities.",
  url: "https://redcarpetplumbing.com/water-heater-repair-installation/",
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
        name: "Plumbing Services",
        item: "https://redcarpetplumbing.com/plumbing-services/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Water Heater Repair and Installation",
        item: "https://redcarpetplumbing.com/water-heater-repair-installation/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Water heater repair, replacement, and installation for tank and tankless units in residential and commercial properties throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Green Valley, Lake Las Vegas, and surrounding Las Vegas Valley communities.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: ADD telephone field to Service provider once phone number is confirmed
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      sameAs: "https://www.wikidata.org/wiki/Q23768",
    },
    { "@type": "City", name: "Henderson" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Summerlin" },
    { "@type": "City", name: "Spring Valley" },
    { "@type": "City", name: "Enterprise" },
    { "@type": "City", name: "Paradise" },
    { "@type": "City", name: "Green Valley" },
    { "@type": "City", name: "Lake Las Vegas" },
  ],
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
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* BREADCRUMBS */}
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Plumbing Services", href: "/plumbing-services/" },
            { label: "Water Heater Repair and Installation" },
          ]}
        />

        {/* EYEBROW (above the hero so the H1 stays a clean single-string heading for SEO/AEO) */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Water Heater Service in Las Vegas
            </p>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        {/* TODO: Replace low-resolution hero image with a higher-quality approved asset before launch if visual QA shows pixelation */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Las Vegas, NV"
          subheading="No hot water, inconsistent water temperature, or a water heater making unusual noises are signs that your system needs attention. Red Carpet Plumbing provides water heater repair and installation for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether your unit needs a repair or it is time for a new installation, our team can help you understand your options and get your hot water restored."
          primaryCTA={{
            label: "Request Water Heater Service",
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
          formSlot={
            <QuoteFormPlaceholder
              title="Request Water Heater Service"
              includeZip
              submitLabel="Request Service"
            />
          }
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/hero.webp",
            alt: "Expert water heater installation in a Las Vegas home",
          }}
        />

        {/* SECTION 2: TRUST STRIP (dark bg) */}
        <section
          aria-labelledby="water-heater-trust-label"
          className="bg-brand-charcoal text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p id="water-heater-trust-label" className="sr-only">
              Why Las Vegas Customers Choose Red Carpet Plumbing for Water Heater Service
            </p>
            {/* FLAG: VERIFY TRANSPARENT PRICING CLAIM BEFORE PUBLISH */}
            {/* FLAG: VERIFY CUSTOMER SATISFACTION FOCUS CLAIM BEFORE PUBLISH */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <CheckIcon className="h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Water Heater Repair and Installation in Las Vegas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When a water heater stops working or begins showing signs of
              wear, you generally have two options: repair the existing unit
              or replace it with a new system. Red Carpet Plumbing helps
              homeowners and business owners throughout Las Vegas evaluate
              both options based on the age of the unit, the nature of the
              problem, and the hot water demands of the property. We service
              both tank-style and tankless water heaters for residential and
              commercial properties.
            </p>
            <ul className="mt-6 space-y-3">
              {DIRECT_ANSWER_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <BulletIcon className="mt-1.5 h-2 w-2 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU NEED SERVICE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs Your Water Heater Needs Repair or Replacement
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Water heaters often show warning signs before they fail
              completely. Recognizing these signs early can help you avoid a
              sudden loss of hot water or a leak that causes property damage.
            </p>
            <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {SIGNS_LIST.map((sign, index) => (
                <li
                  key={sign}
                  className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-primary bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base leading-7 text-brand-dark/80">
                    {sign}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5: WHAT THE SERVICE COVERS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Our Water Heater Service Covers
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides water heater repair and
              installation services for a range of system types and
              conditions throughout the Las Vegas Valley.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM specific brands serviced, tankless system types supported, and full service scope before launch */}
            <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {SERVICE_COVERS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: LOCAL LAS VEGAS CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Las Vegas Water Heaters Work Harder
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Las Vegas water is among the hardest in the United States, with
              high concentrations of calcium and magnesium that leave mineral
              deposits on everything the water touches. Inside a water heater
              tank, that mineral content settles as sediment at the bottom of
              the unit over time. The sediment layer acts as an insulating
              barrier between the burner and the water, forcing the system to
              run longer and work harder to reach the set temperature. Over
              months and years, this buildup reduces heating efficiency,
              increases energy use, and puts added stress on the tank lining
              and heating components.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Because of how hard water interacts with water heater systems,
              Las Vegas homeowners may find that their units require more
              frequent maintenance and may reach the end of their useful life
              sooner than the 10 to 12 year national average suggests.
              Regular sediment flushing and anode rod inspection can help
              slow that process and extend unit life. Red Carpet Plumbing
              serves Las Vegas, Henderson, North Las Vegas, Summerlin, Spring
              Valley, Enterprise, Green Valley, Lake Las Vegas, and
              surrounding communities throughout the{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas Valley
              </Link>
              . Contact us to learn more about water heater service in your
              area.
            </p>
          </div>
        </section>

        {/* SECTION 7: REPAIR vs REPLACE (decision framework) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Should I Repair or Replace My Water Heater?
            </h2>
            {/* FLAG: Do not add pricing data to this section without client confirmation */}
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              The repair vs. replace decision depends on several factors
              including the age of the unit, the nature of the problem, and
              the cost of the repair relative to the cost of a new system.
              Repair is generally the right choice when a water heater is
              less than 8 years old, the problem is limited to a single
              component such as a heating element, thermostat, or pilot
              assembly, and the repair cost is significantly less than
              replacement. In those situations, a repair can restore full
              function and extend the life of the unit for several more
              years.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Replacement tends to make more sense when the unit is older
              than 10 years, the tank itself is leaking or visibly corroded,
              the unit has needed multiple repairs in a short period, or the
              repair cost approaches a substantial portion of the cost of a
              new system. In Las Vegas, hard water conditions can shorten
              the effective lifespan of a water heater, making earlier
              replacement a reasonable option when a unit is aging and
              showing multiple symptoms. Our plumbers can assess the
              condition of your unit, explain the repair and replacement
              options available, and help you make a decision based on the
              actual state of your system.
            </p>
          </div>
        </section>

        {/* SECTION 8: PROCESS (5 numbered steps; NOT HowTo schema) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Our Water Heater Service Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When you contact Red Carpet Plumbing for water heater service,
              here is what to expect.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM process steps and service scope before launch */}
            <ol className="mt-8 space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.heading} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {step.heading}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-brand-dark/80">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 9: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Ready to Restore Your Hot Water?"
          body="Contact Red Carpet Plumbing for water heater repair and installation in Las Vegas and the surrounding Las Vegas Valley."
          primaryCTA={{
            label: "Schedule Water Heater Service",
            href: "/contact/",
          }}
        />

        {/* SECTION 10: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Related Plumbing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Water heater issues sometimes connect to other plumbing
              concerns. Red Carpet Plumbing offers a full range of services
              to address water heater problems and any related issues in
              your home or business.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // /emergency-plumbing/ and /plumbing-services/ are live; the other 3 are forward links.
                    // TODO-BATCH-NEXT: /leak-detection-repair/ /plumbing-fixture-repair-replacement-installation/ /water-meter-pressure-regulator-services/ not yet built
                    href={service.href}
                    className="flex items-start gap-3 text-base text-brand-dark/80 hover:text-brand-primary"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      →
                    </span>
                    <span>
                      <span className="font-semibold text-brand-dark">
                        {service.label}
                      </span>{" "}
                      - {service.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* TODO-BATCH-NEXT: Add these service-location links once pages are live: */}
            {/* - Water Heater Repair in Las Vegas: /las-vegas/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Henderson: /henderson/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in North Las Vegas: /north-las-vegas/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Summerlin: /summerlin/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Spring Valley: /spring-valley/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Enterprise: /enterprise/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Green Valley: /green-valley/water-heater-repair-installation/ */}
            {/* - Water Heater Repair in Lake Las Vegas: /lake-las-vegas/water-heater-repair-installation/ */}
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {WATER_HEATER_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <dt>
                    <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <CTASection
          background="red"
          headline="Contact Red Carpet Plumbing for Water Heater Service in Las Vegas"
          body="Whether your water heater needs a repair today or you are planning a replacement, Red Carpet Plumbing can help. Contact our team to describe your situation and get the information you need to make the right decision for your home or business."
          primaryCTA={{
            label: "Request Water Heater Service",
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
        />
      </main>

      <SiteFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Local icon helpers (decorative, aria-hidden)
// ---------------------------------------------------------------------------

type IconProps = { className?: string };

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function BulletIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      className={className}
      fill="currentColor"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}
