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

// FLAG: VERIFY before publishing. "emergency plumbing service available" and
// "transparent pricing, no hidden fees" are source-site claims shown on this
// page. License #0048585A is a verified business claim. Gas line scope (FLAG:
// verify gas line scope before publishing) is carried forward from sibling
// emergency pages. 24/7 availability (FLAG: verify before final launch) is
// present in FAQ Q4 answer.
// SCHEMA NOTE: Green Valley is a community within the incorporated City of
// Henderson, so Service.areaServed uses the established pattern:
// Place (Green Valley, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// No AggregateRating schema. FAQPage schema derives from GV_EMERGENCY_FAQS and
// HowTo from GV_EMERGENCY_STEPS (character-for-character with visible text).
// Green Valley is never described as a city or as unincorporated.

export const metadata: Metadata = {
  title: "Emergency Plumbing in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Emergency plumbing service in Green Valley, Henderson, NV. Red Carpet Plumbing handles burst pipes, slab leaks, sewer backups, and water heater failures for Green Valley homes. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/green-valley/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed emergency plumbers serving Green Valley and Henderson, NV. Burst pipes, slab leaks, Kitec pipe failures, sewer backups. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip
const GV_EMERGENCY_TRUST = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: source-site claim -- verify before final launch.
  "Emergency plumbing service available",
  // FLAG: source-site claim -- verify before final launch.
  "Transparent pricing, no hidden fees",
  "Serving Green Valley and Henderson, NV",
];

// Emergency scenarios -- Section 3
const GV_EMERGENCY_SCENARIOS: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Burst pipes and supply line failures",
    body: "Homes in original Green Valley neighborhoods, built from the late 1970s through the mid-1990s, have copper supply lines that are now 30 to 45 years old. Las Vegas Valley water from Lake Mead measures 17 to 24 grains per gallon, which is considered very hard. Over decades of mineral exposure, copper pipe walls thin and can develop pin-hole leaks or burst suddenly. Shut off the main water supply and call Red Carpet Plumbing at (702) 567-9172 immediately.",
  },
  {
    label: "Slab leaks",
    body: "Slab leaks occur when supply or drain lines running beneath a concrete slab foundation begin to fail. In original Green Valley, hard water mineral corrosion and caliche soil movement beneath the slab are the most common contributing factors. Signs include warm spots on the floor, the sound of running water when all fixtures are off, or an unexplained increase in your water bill.",
    link: {
      pre: " See our ",
      href: "/green-valley/slab-leak-detection-repair/",
      text: "slab leak detection and repair in Green Valley",
      post: " page for details.",
    },
  },
  {
    label: "Kitec pipe failures in Green Valley Ranch",
    body: "Homes and condos built in Green Valley Ranch between the mid-1990s and mid-2000s may contain Kitec piping, a flexible orange or blue pipe that was recalled due to premature failure. Kitec can fail without warning, causing sudden leaks inside walls or beneath the slab. If your Green Valley Ranch home has not been re-piped and was built during this period, a pipe failure is an emergency requiring immediate response.",
    link: {
      pre: " See our ",
      href: "/green-valley/re-piping/",
      text: "re-piping in Green Valley",
      post: " page for assessment options.",
    },
  },
  {
    label: "Sewer line backups",
    body: "Sewage backing up into tubs, drains, or toilets is a health hazard requiring immediate service. Do not use any drains or water fixtures during a sewer backup. In older Green Valley homes, sewer laterals that have not been cleaned or inspected since original construction may accumulate debris and begin backing up as the property ages.",
  },
  {
    label: "Water heater failures",
    body: "An actively leaking water heater, loss of hot water combined with visible tank damage, or unusual pressure sounds from the tank require prompt attention. Hard water sediment from the Las Vegas Valley supply accelerates tank wear in Green Valley homes.",
    link: {
      pre: " See our ",
      href: "/green-valley/water-heater-repair-installation/",
      text: "water heater repair and installation in Green Valley",
      post: " page.",
    },
  },
  {
    label: "Gas line emergencies",
    // FLAG: verify gas line scope before publishing.
    body: "If you smell gas in your Green Valley home, leave the building immediately, do not operate any electrical switches, and call Southwest Gas at 1-800-654-2765 from outside. Once the area is cleared, call Red Carpet Plumbing at (702) 567-9172 for gas line inspection and repair.",
  },
];

// Services list -- Section 5
const GV_EMERGENCY_SERVICES = [
  "Burst pipe detection and repair",
  "Copper supply line repair and replacement",
  "Kitec pipe emergency repair and re-piping assessment",
  "Slab leak detection and emergency repair",
  "Sewer backup clearing and sewer line inspection",
  "Water heater emergency repair and replacement",
  "Main water line repair",
  "Pressure regulator assessment and replacement",
  "Supply line failure repair at fixtures and appliances",
  "Fixture leak containment and repair",
  // FLAG: verify gas line scope before publishing.
  "Gas line emergency response (leave building and call gas company first)",
  "Emergency drain clearing and main line backup response",
];

// Process steps -- HowTo schema source of truth
const GV_EMERGENCY_STEPS = [
  {
    name: "Call and assess",
    body: "Call (702) 567-9172 to reach Red Carpet Plumbing. We gather information about what you are experiencing and advise you on immediate protective steps, including water shutoff and safety precautions, while our team prepares to respond.",
  },
  {
    name: "Diagnose on arrival",
    body: "A licensed plumber arrives at your Green Valley property, inspects the situation, identifies the source and scope of the problem, and provides a clear assessment and pricing before any repair work begins.",
  },
  {
    name: "Complete the repair",
    body: "We repair the immediate problem, whether that is a burst copper supply line, a Kitec pipe failure, a slab leak, a sewer backup, a water heater failure, or a pressure regulator issue, and verify the repair is holding before we leave.",
  },
  {
    name: "Follow-up assessment",
    body: "After the repair, we advise you on whether the emergency was an isolated event or a sign of a broader system issue. For original Green Valley homes now 30 to 45 years old, a first supply line failure or slab leak can indicate that other original copper pipes are approaching end of service life. For Green Valley Ranch homes with Kitec pipe, a single failure warrants a full re-piping assessment. If a permit is required for the work performed, we handle filing with the City of Henderson.",
  },
];

// Community chips -- Section 7
const GV_COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Duck Creek Area" },
  { name: "Paseo Verde Parkway Area" },
  { name: "Warm Springs Area" },
  { name: "Seven Hills" },
  { name: "Anthem" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Henderson", href: "/henderson-plumbing-services/" },
];

// Related service cards -- Section 8
const GV_EMERGENCY_RELATED = [
  {
    title: "Slab Leak Detection and Repair in Green Valley",
    description:
      "Non-invasive slab leak detection and repair for original Green Valley homes and Green Valley Ranch properties. Acoustic sensors, pressure testing, and thermal imaging.",
    href: "/green-valley/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Green Valley, NV",
  },
  {
    title: "Leak Detection and Repair in Green Valley",
    description:
      "Non-invasive leak detection and repair for hidden leaks in Green Valley homes. Acoustic sensors, pressure testing, and thermal imaging.",
    href: "/green-valley/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Green Valley, NV",
  },
  {
    title: "Water Heater Repair and Installation in Green Valley",
    description:
      "Tank and tankless water heater repair and installation for Green Valley homes. Hard water maintenance and City of Henderson code installations.",
    href: "/green-valley/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Green Valley, NV",
  },
  {
    title: "Drain Cleaning in Green Valley",
    description:
      "Professional drain cleaning for Green Valley homes. Kitchen drains, bathroom drains, main sewer line cleaning, and hydro jetting.",
    href: "/green-valley/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning in Green Valley, NV",
  },
];

// FAQs -- FAQPage schema source of truth
const GV_EMERGENCY_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Green Valley for emergency plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service in Green Valley as part of its Henderson, NV service area. Green Valley is a master-planned community within the incorporated City of Henderson. Call (702) 567-9172 for emergency response.",
  },
  {
    question: "What should I do if a pipe bursts in my Green Valley home?",
    answer:
      "Shut off the water at the main supply valve as quickly as possible. In most Green Valley homes, the main shutoff valve is located in a ground-level box near the front of the property or near the water meter at the street. Once the water is off, call Red Carpet Plumbing at (702) 567-9172.",
  },
  {
    question: "Why are Green Valley homes at higher risk for plumbing emergencies?",
    answer:
      "Homes in original Green Valley neighborhoods, built from the late 1970s through the mid-1990s, have copper supply lines now 30 to 45 years old. Las Vegas Valley water from Lake Mead measures 17 to 24 grains per gallon. Over decades of mineral exposure, copper pipe walls thin, increasing the risk of burst pipes and slab leaks. Green Valley Ranch condos and HOA communities built between the mid-1990s and mid-2000s may also contain Kitec pipe, which can fail without warning.",
  },
  {
    question: "Is there a 24-hour plumber available in Green Valley?",
    // FLAG: VERIFY 24/7 availability before final launch.
    answer:
      "Red Carpet Plumbing provides emergency plumbing service for Green Valley and the Henderson area. Call (702) 567-9172 to reach a plumber.",
  },
  {
    question: "What is Kitec pipe and why is it a risk in Green Valley Ranch?",
    answer:
      "Kitec is a flexible pipe product manufactured with aluminum reinforcement and orange or blue plastic fittings that was used in residential construction from the mid-1990s through the mid-2000s. It was recalled due to premature failure of the brass fittings. Many Green Valley Ranch condos and HOA communities built during this period were plumbed with Kitec. A Kitec pipe failure is a sudden emergency that can cause significant water damage inside walls or beneath the slab.",
  },
  {
    question: "Who issues plumbing permits for emergency repairs in Green Valley?",
    answer:
      "Plumbing permits for Green Valley properties are issued by the City of Henderson, which is the governing jurisdiction for the Green Valley community. Red Carpet Plumbing holds Nevada Contractor License #0048585A and handles permit filing with the City of Henderson for permitted repair work.",
  },
  {
    question: "What counts as a plumbing emergency versus a non-urgent issue?",
    answer:
      "A plumbing emergency includes active water damage, loss of water supply, sewage backing up into the home, signs of a gas leak, water heater failure causing flooding, suspected slab leak with running water sounds or warm floor areas, or a Kitec pipe failure. Issues like a slow drain, a dripping faucet, or reduced water pressure can typically wait for a scheduled appointment.",
  },
  {
    question: "What areas near Green Valley does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Green Valley as part of its Henderson, NV service area, which also includes Lake Las Vegas and the broader Henderson community. We also serve Las Vegas, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, and Boulder City throughout the Las Vegas Valley.",
  },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumbing in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes in Green Valley, Henderson, NV. Burst pipes, slab leaks, sewer backups, and water heater failures handled by licensed plumbers.",
  url: "https://redcarpetplumbing.com/green-valley/emergency-plumbing/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
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
      name: "Green Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Emergency Plumbing in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Green Valley, Henderson, NV",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes in Green Valley, Henderson, NV. Burst pipes, slab leaks, Kitec pipe failures, sewer backups, water heater failures, and gas line emergencies handled by licensed plumbers. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Green Valley, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Emergency Plumbing Help in Green Valley",
  description:
    "Steps for reaching Red Carpet Plumbing and resolving a plumbing emergency in Green Valley, Henderson, NV.",
  step: GV_EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_EMERGENCY_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function GreenValleyEmergencyPlumbingPage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            {
              label: "Green Valley Plumbing Services",
              href: "/green-valley-plumbing-services/",
            },
            { label: "Emergency Plumbing in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Green Valley, Henderson, NV"
          subheading="Red Carpet Plumbing provides emergency plumbing service for homes throughout Green Valley and Henderson, NV. Burst pipes, slab leaks, Kitec pipe failures, sewer backups, and water heater failures handled by licensed plumbers. Call (702) 567-9172 now."
          trustItems={GV_EMERGENCY_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Serving Green Valley and Henderson, NV."
          formSlot={
            <QuoteFormPlaceholder title="Get Emergency Plumbing Help" />
          }
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "emergency plumbing service in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          variant="red"
          items={GV_EMERGENCY_TRUST}
          ariaLabel="Why Green Valley customers choose Red Carpet Plumbing for emergency service"
        />

        {/* SECTION 3: AEO DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Is a Plumbing Emergency in Green Valley?
              </h2>
              <div className="mt-6 rounded-r-xl border-l-4 border-brand-primary bg-brand-surface-alt p-6">
                <p className="text-lg leading-8 text-brand-dark/80">
                  A plumbing emergency is any situation that causes active water
                  damage, creates a health or safety hazard, or requires
                  immediate action to prevent further harm to your home. In
                  Green Valley, common emergencies include burst copper supply
                  lines in original Green Valley homes, slab leaks beneath
                  concrete slab foundations, Kitec pipe failures in Green Valley
                  Ranch condos and HOA communities, sewer backups, water heater
                  failures with active flooding, and gas line concerns. Red
                  Carpet Plumbing provides emergency plumbing service throughout
                  Green Valley and Henderson, NV. For general emergency plumbing
                  information, see our{" "}
                  <Link
                    href="/emergency-plumbing/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    emergency plumbing services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EMERGENCY SCENARIOS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Plumbing Emergencies in Green Valley Homes
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {GV_EMERGENCY_SCENARIOS.map((s) => (
                    <li
                      key={s.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {s.label}.
                        </strong>{" "}
                        {s.body}
                        {s.link ? (
                          <>
                            {s.link.pre}
                            <Link
                              href={s.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {s.link.text}
                            </Link>
                            {s.link.post}
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: MID-PAGE EMERGENCY CTA */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in Green Valley Right Now?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides emergency plumbing service for
                  Green Valley and Henderson, NV homes. Burst pipes, slab leaks,
                  Kitec pipe failures, sewer backups, and water heater failures
                  handled by licensed plumbers. Call any time.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-primary shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVICES LIST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Emergency Plumbing Services We Provide in Green Valley
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {GV_EMERGENCY_SERVICES.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 rounded-xl bg-brand-surface-alt px-5 py-4 text-base font-medium text-brand-dark/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 h-2 w-2 flex-none rounded-full bg-brand-primary"
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 7: HOWTO PROCESS STEPS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Responds to a Plumbing Emergency in
                    Green Valley
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_EMERGENCY_STEPS.map((step, index) => (
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

        {/* SECTION 8: SERVICE AREA NOTE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving Green Valley as Part of Henderson, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Green Valley is a master-planned community within the
                incorporated City of Henderson, Nevada. Development began in
                1978 with original Green Valley neighborhoods, and expanded into
                Green Valley Ranch from the mid-1990s through the mid-2000s.
                Plumbing permits for Green Valley properties, including emergency
                repair work, are issued by the City of Henderson. Red Carpet
                Plumbing serves Green Valley as part of its broader Henderson
                service area.
              </p>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                For a full list of plumbing services available in Green Valley,
                visit our{" "}
                <Link
                  href="/green-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Green Valley plumbing services
                </Link>{" "}
                hub. For full Henderson coverage, see{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_COMMUNITIES.map((area) =>
                area.href ? (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="block rounded-lg bg-brand-surface-alt px-5 py-3 text-sm font-medium text-brand-primary ring-1 ring-brand-surface-alt hover:bg-brand-surface-alt/80"
                    >
                      {area.name}
                    </Link>
                  </li>
                ) : (
                  <li key={area.name}>
                    <span className="block rounded-lg bg-brand-surface-alt px-5 py-3 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt">
                      {area.name}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICE CARDS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Related Plumbing Services in Green Valley
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-14">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {GV_EMERGENCY_RELATED.map((card) => (
                    <ServiceCard
                      key={card.href}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      image={card.image}
                      imageAlt={card.imageAlt}
                      built={true}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Questions for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_EMERGENCY_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-brand-surface-alt p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
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
          headline="Plumbing Emergency in Your Green Valley Home? Call Now."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
            href: "/contact/",
          }}
        />
      </main>

      <StickyMobileCTA />
      <SiteFooter />
    </>
  );
}

function FaqChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 flex-none transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
