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
    "Plumbing Fixture Repair, Replacement and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs plumbing fixtures for homes and businesses throughout Las Vegas. Faucets, shower valves, showerheads, bathtub fixtures, and more. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
  },
  openGraph: {
    title:
      "Plumbing Fixture Repair, Replacement and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed plumbing fixture repair and installation throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const FIXTURE_FAQS = [
  {
    question: "What are plumbing fixtures?",
    answer:
      "Plumbing fixtures are the devices and hardware connected to your home's water supply and drain system that control water flow for daily use. Common plumbing fixtures include faucets, showerheads, shower valves, bathtub faucets and spouts, sinks, toilets, utility sinks, and outdoor hose bibs. Plumbing fixtures require periodic repair or replacement as components wear, corrode, or become outdated. In Las Vegas, hard water mineral deposits accelerate fixture wear compared to soft-water markets.",
  },
  {
    question:
      "When should I replace a plumbing fixture instead of repairing it?",
    answer:
      "Replacement is generally the right choice when a fixture requires repeated repairs for the same problem, when the body is cracked or corroded beyond repair, when replacement parts are no longer available for older models, or when the fixture is significantly inefficient by current standards. In Las Vegas, fixtures with severe internal mineral buildup that cannot be cleared, or shower valves with failing cartridges that have been repaired multiple times, are common replacement candidates. A plumber can assess whether repair or replacement is the more practical long-term decision.",
  },
  {
    question: "Can hard water damage plumbing fixtures?",
    answer:
      "Yes. Las Vegas hard water contains high concentrations of calcium and magnesium that deposit on fixture surfaces and inside valve components over time. Scale buildup clogs showerhead spray holes, restricts flow through aerators, accelerates cartridge wear in shower valves and faucets, and corrodes finish surfaces. Fixtures in Las Vegas homes typically require more frequent maintenance and earlier replacement than the same fixtures would in soft-water markets. Regular cleaning of showerheads and aerators helps extend fixture life.",
  },
  {
    question: "Does a plumber install shower valves and shower fixtures?",
    answer:
      "Yes. A licensed plumber installs and repairs shower valves, shower trim kits, showerheads, handheld showers, and bathtub fixtures. Shower valve installation requires working inside the wall to connect the valve body to supply lines and the drain connection. This is licensed plumbing work. Red Carpet Plumbing handles full shower fixture installations including valve replacement, trim installation, and supply line connection throughout Las Vegas.",
  },
  {
    question: "How long do plumbing fixtures last?",
    answer:
      "The lifespan of a plumbing fixture depends on the type, quality, and water conditions. In Las Vegas, hard water stress shortens the practical life of fixtures compared to manufacturer estimates. Shower cartridges may need replacement every five to ten years in hard water conditions. Showerheads accumulate significant scale buildup within a few years. Faucet aerators need cleaning or replacement more frequently than in soft-water areas. Fixtures with ceramic disc valves generally outlast compression and cartridge valves in hard water conditions.",
  },
  {
    question: "Can a plumber help with bathroom renovation plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for bathroom and kitchen renovations throughout Las Vegas, including fixture installation, supply line rough-in, drain connection, and coordination with renovation contractors. Fixture installation as part of a renovation includes connecting new fixtures to existing or new supply lines, installing drain assemblies, and confirming all connections are leak-free before the renovation is complete.",
  },
  {
    question: "What causes low water pressure at a showerhead?",
    answer:
      "Low shower pressure is most commonly caused by mineral scale clogging the showerhead spray holes, which is a particularly common issue in Las Vegas due to hard water. Cleaning or replacing the showerhead usually resolves the problem. If pressure is low throughout the shower system and not just at the head, the cause may be a partially closed shut-off valve, a failing pressure-balancing valve cartridge, or a supply line issue that requires a plumber to diagnose.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for plumbing fixture services?",
    answer:
      "Red Carpet Plumbing provides plumbing fixture repair, replacement, and installation throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const FIXTURE_WARNING_SIGNS = [
  {
    title: "Low Water Pressure at Shower or Faucet",
    body: "Reduced pressure at a shower or faucet is often caused by mineral scale clogging the showerhead or aerator. In Las Vegas, hard water deposits accumulate inside fixtures faster than in most markets. If cleaning does not restore pressure, the problem may be in the valve cartridge or supply connection.",
  },
  {
    title: "Dripping or Leaking Fixture",
    body: "A fixture that drips when turned off has a worn internal component. Shower valves with failing cartridges often drip from the showerhead or leak behind the wall. Faucets drip from worn O-rings, washers, or cartridges. Both waste water and worsen over time without repair.",
  },
  {
    title: "Temperature Instability in the Shower",
    body: "A shower that fluctuates between hot and cold, or that cannot hold a set temperature, usually has a failing pressure-balancing valve cartridge. In Las Vegas, mineral deposits on the cartridge accelerate this type of failure. A plumber can replace the cartridge without replacing the entire valve in most cases.",
  },
  {
    title: "Corroded, Stained, or Damaged Fixture Bodies",
    body: "Fixtures with visible corrosion, pitting, cracked bodies, or finish that is flaking or permanently stained may be past repair. Replacing the fixture restores function and appearance and eliminates ongoing leak risk from a compromised housing.",
  },
  {
    title: "Outdated Fixtures in an Older Las Vegas Home",
    body: "Many Las Vegas homes built in the 1980s and 1990s still have original plumbing fixtures. Older fixtures use less efficient valve designs and are often not compatible with current WaterSense standards. Upgrading to modern fixtures improves performance and reduces water consumption.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved fixture service image when available
const FIXTURE_SERVICES: ServiceTypeCard[] = [
  {
    title: "Shower Valve Repair and Replacement",
    description:
      "Repair and replacement of pressure-balancing and thermostatic shower valves, cartridges, and trim kits for Las Vegas homes.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Showerhead Replacement and Installation",
    description:
      "Showerhead cleaning, replacement, and installation including handheld, rain, and multi-function showerhead styles.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Bathtub Fixture Repair and Replacement",
    description:
      "Repair and replacement of bathtub faucets, spouts, diverters, and drain assemblies for standard and soaking tubs.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Faucet Repair and Replacement",
    description:
      "Kitchen and bathroom faucet repair, replacement, and installation for all fixture types and configurations.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Toilet Repair and Installation",
    description:
      "Toilet repair, replacement, and installation for all makes and models in residential and commercial properties.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Outdoor Hose Bib and Spigot Service",
    description:
      "Repair and replacement of outdoor hose bibs, spigots, and frost-free sillcocks serving Las Vegas homes and businesses.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Utility and Laundry Fixture Service",
    description:
      "Repair and installation of utility sink faucets, laundry supply connections, and utility room plumbing fixtures.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Fixture Upgrade and Renovation Plumbing",
    description:
      "Fixture installation for bathroom and kitchen renovations including supply line connection, drain assembly, and leak testing.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
];

const LV_FIXTURE_FACTORS = [
  {
    title: "Hard Water Scale on Showerheads and Fixture Bodies",
    body: "Las Vegas municipal water is among the hardest in the United States. Calcium and magnesium deposits build up on showerhead spray plates, inside aerator screens, and on fixture body surfaces over time. Scale clogs spray holes and restricts flow, causing uneven spray patterns and reduced pressure. The white or tan mineral deposits visible on fixture surfaces in Las Vegas homes are a normal consequence of the local water supply and can be managed with regular cleaning and timely fixture replacement when buildup becomes severe.",
  },
  {
    title: "Shower Valve Cartridge Failure from Mineral Stress",
    body: "The cartridge inside a shower valve controls water temperature and flow. In Las Vegas, dissolved minerals in the water deposit on cartridge components and O-rings over time, increasing friction and accelerating wear. A shower that runs inconsistently hot and cold, or that leaks when turned off, often has a cartridge that has reached the end of its useful life. Replacing the cartridge restores full temperature control and stops the leak without requiring the valve body to be replaced in most installations.",
  },
  {
    title: "Aging Original Fixtures in Las Vegas Tract Homes",
    body: "A significant portion of the Las Vegas housing stock was built between the mid-1970s and early 2000s, and many of these homes still have original plumbing fixtures. Fixtures in this age range used compression valve technology and earlier cartridge designs that require more maintenance under hard water conditions than modern ceramic disc or current cartridge designs. Original shower valves, bathtub fixtures, and outdoor hose bibs in homes approaching or past thirty years old are practical candidates for replacement, particularly if repairs have become recurring.",
  },
  {
    title: "Bathroom and Kitchen Renovation Plumbing",
    body: "Las Vegas homeowners frequently renovate kitchens and bathrooms as part of resale preparation or personal upgrades. Fixture replacement is a common element of these projects, and the plumbing work involved, including valve installation, supply line connection, drain assembly, and pressure testing, requires a licensed plumber. Red Carpet Plumbing provides fixture installation services for renovation projects throughout the Las Vegas Valley, coordinating with contractors and homeowners to complete the plumbing scope before finish work is done.",
  },
];

const FIXTURE_STEPS = [
  {
    name: "Call and Describe the Fixture Issue",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what the fixture is doing or what you need installed. Whether it is a dripping showerhead, a shower valve with temperature problems, or a full fixture replacement for a renovation, we can schedule service.",
  },
  {
    name: "Inspection and Diagnosis",
    body: "A licensed plumber inspects the fixture, valve, supply connection, and surrounding area to identify the cause of the problem and assess the condition of the existing fixture and valves.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what we found and whether repair or replacement is the right approach. For renovation installations, we confirm supply and drain connection requirements before starting. You approve the scope before any work begins.",
  },
  {
    name: "Repair or Installation with Final Check",
    body: "Our licensed plumber completes the repair or installation, tests all connections and fixture operation, confirms there are no leaks, and cleans up before leaving.",
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
    title: "Faucet and Sink Repair and Installation",
    description:
      "Faucet repair, replacement, and sink installation for kitchens, bathrooms, and utility areas throughout Las Vegas.",
    href: "/faucet-sink-repair-installation/",
    built: true,
  },
  {
    title: "Toilet Repair and Installation",
    description:
      "Toilet repair, replacement, and installation for Las Vegas homes and businesses.",
    href: "/toilet-repair-installation/",
    built: true,
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning for shower drains, sink drains, and main lines throughout Las Vegas.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, valves, and fixture connections.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plumbing Fixture Repair, Replacement and Installation",
  serviceType: "Plumbing Fixture Repair and Installation",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs plumbing fixtures for homes and businesses throughout the Las Vegas Valley. Services include shower valve repair and replacement, showerhead installation, bathtub fixture service, faucet repair, outdoor hose bib service, and renovation fixture installation. Nevada Contractor License #0048585A.",
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
      name: "Plumbing Fixture Repair, Replacement and Installation",
      item: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Fixture Work",
  description:
    "The plumbing fixture repair and installation process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: FIXTURE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Fixture Repair, Replacement and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs plumbing fixtures throughout the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
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
        name: "Plumbing Fixture Repair, Replacement and Installation",
        item: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FIXTURE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PlumbingFixtureRepairReplacementInstallationPage() {
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
            {
              label: "Plumbing Fixture Repair, Replacement and Installation",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Plumbing Fixture Repair, Replacement and Installation
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Repair, replacement, and installation of plumbing fixtures for kitchens, bathrooms, and utility areas throughout the Las Vegas Valley."
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
            label: "Request Fixture Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get a Fixture Service Quote" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/plumbing-fixture-repair-replacement-installation/hero.webp",
            alt: "Professional plumbing fixture installation and repair",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for fixture work"
        />

        {/* SECTION 3: SIGNS YOUR FIXTURES NEED ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Plumbing Fixtures
                <br className="hidden sm:block" /> Need Service
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing repairs, replaces, and installs plumbing
                fixtures for homes and businesses throughout Las Vegas and
                the Las Vegas Valley. Our licensed plumbers service all types
                of plumbing fixtures including faucets, showerheads, shower
                valves, bathtub fixtures, sinks, toilets, and outdoor hose
                bibs.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {FIXTURE_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: PLUMBING FIXTURE SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing Fixture Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of plumbing
                    fixture repair, replacement, and installation services
                    for residential and commercial properties throughout Las
                    Vegas and the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved fixture service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {FIXTURE_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY PLUMBING FIXTURES WEAR FASTER IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Plumbing Fixtures Wear Faster
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Hard water, heat, and the age of much of the Las Vegas
                    housing stock all shorten the practical life of plumbing
                    fixtures compared to soft-water markets. Knowing how
                    these conditions affect fixtures helps homeowners plan
                    repair and replacement decisions.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_FIXTURE_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Handles Fixture Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Fixture repair and installation require accurate
                    diagnosis, the right parts, and clean workmanship. Here
                    is how Red Carpet Plumbing approaches fixture work for
                    Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {FIXTURE_STEPS.map((step, index) => (
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
                  Fixture Repair or Installation
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles fixture repairs, replacements,
                  and renovation installations throughout the Las Vegas
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
                Plumbing Fixture Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides plumbing fixture repair,
                replacement, and installation throughout the Las Vegas
                Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/plumbing-fixture-repair-replacement-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/plumbing-fixture-repair-replacement-installation/ not yet built */}
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
                Plumbing Fixture Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {FIXTURE_FAQS.map((faq) => (
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
              Need Plumbing Fixture Repair or Installation
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              plumbing fixture repair, replacement, and installation
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
