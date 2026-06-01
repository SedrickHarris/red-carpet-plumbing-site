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
    "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks for kitchens, bathrooms, and utility areas throughout Las Vegas. Dripping faucets, low pressure, sink installs. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
  },
  openGraph: {
    title:
      "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed faucet and sink repair and installation throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const FAUCET_SINK_FAQS = [
  {
    question: "Why is my faucet dripping?",
    answer:
      "A dripping faucet is almost always caused by a worn internal component. In cartridge faucets, a degraded cartridge or O-ring is the most common cause. In compression faucets, a worn rubber washer at the seat is typically to blame. In Las Vegas, hard water mineral deposits accelerate wear on these components, so faucets may develop drips sooner than they would in areas with softer water. A licensed plumber can diagnose the faucet type and replace the failing part.",
  },
  {
    question: "Why is my water pressure low at one faucet?",
    answer:
      "Low pressure at a single faucet is usually caused by a clogged aerator. The aerator is the small screen at the faucet tip that mixes air with water. In Las Vegas, mineral deposits from hard water build up inside aerators and restrict flow more quickly than in soft-water areas. Removing and cleaning or replacing the aerator restores normal pressure in most cases. If the aerator is clear and pressure is still low, the issue may be in the supply line or shut-off valve beneath the sink.",
  },
  {
    question: "Should I repair or replace a leaky faucet?",
    answer:
      "Repair is usually the right choice for a faucet that is less than ten years old and has a single failing component such as a cartridge, O-ring, or washer. Replacement makes more sense for a faucet that leaks from the body, requires repeated repairs, shows visible corrosion, or is an older model where replacement parts are difficult to source. In Las Vegas, mineral buildup inside older faucets can make cleaning and repair impractical, making replacement the more durable long-term option.",
  },
  {
    question: "Can hard water damage faucets?",
    answer:
      "Yes. Las Vegas hard water contains high levels of calcium and magnesium that deposit inside faucet cartridges, aerators, and valve seats over time. This mineral buildup restricts water flow, accelerates wear on rubber O-rings and seals, and causes handles to stiffen. Faucets in Las Vegas homes typically require more frequent cartridge and aerator maintenance than faucets in soft-water markets. Regular cleaning of aerators and timely cartridge replacement extends faucet life.",
  },
  {
    question: "How long does faucet installation take?",
    answer:
      "A standard faucet replacement typically takes one to two hours for a licensed plumber. This includes shutting off the supply, disconnecting and removing the old faucet, inspecting the supply lines and shut-off valves, installing the new faucet, and testing for leaks and proper operation. If the shut-off valves or supply lines are corroded and need replacement, the job may take longer. Red Carpet Plumbing handles the full installation and disposes of the old fixture.",
  },
  {
    question:
      "Does Red Carpet Plumbing install kitchen and bathroom sinks?",
    answer:
      "Yes. Red Carpet Plumbing installs kitchen sinks, bathroom sinks, and utility sinks throughout Las Vegas and the Las Vegas Valley. Sink installation includes connecting water supply lines, installing the drain assembly and P-trap, and confirming all connections are leak-free. We work with customer-supplied sinks and can advise on the plumbing requirements for different sink types including undermount, drop-in, vessel, and pedestal styles.",
  },
  {
    question: "What causes leaks under the sink?",
    answer:
      "Leaks under a sink are most commonly caused by a loose or corroded drain connection, a failing P-trap seal, a worn supply line, or a deteriorated shut-off valve. In older Las Vegas homes, original supply lines and shut-off valves may be corroded from years of hard water exposure and can fail when disturbed during a faucet repair or replacement. A plumber should inspect under-sink connections as part of any faucet or sink service.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for faucet and sink repair?",
    answer:
      "Red Carpet Plumbing provides faucet and sink repair and installation throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const FAUCET_SINK_WARNING_SIGNS = [
  {
    title: "Dripping or Leaking Faucet",
    body: "A faucet that drips when turned off wastes water and typically signals a worn cartridge, O-ring, or washer inside the valve. In Las Vegas, hard water mineral deposits accelerate wear on these components, so drips can develop sooner than expected. Left unrepaired, a slow drip adds up to significant water waste over time.",
  },
  {
    title: "Low Water Pressure at the Faucet",
    body: "Reduced pressure at a single faucet is most often a clogged aerator. The small screen at the faucet tip accumulates mineral deposits from Las Vegas hard water and restricts flow. Cleaning or replacing the aerator restores pressure in most cases. If the aerator is clear, the problem may be in the supply line or shut-off valve beneath the sink.",
  },
  {
    title: "Faucet Handles Stiff or Difficult to Turn",
    body: "Handles that are hard to operate usually have mineral buildup inside the cartridge or around the valve stem. This is particularly common in Las Vegas bathrooms and kitchens where hard water has been running through the same fixtures for years.",
  },
  {
    title: "Sink Draining Slowly or Not at All",
    body: "A slow-draining sink usually means a buildup of soap, grease, hair, or mineral scale in the drain or P-trap. If clearing the drain does not resolve the issue, the problem may be deeper in the drain line.",
  },
  {
    title: "Leaking Under the Sink",
    body: "Water pooling in the cabinet under a sink points to a loose drain connection, a failing P-trap seal, a worn supply line, or a deteriorated shut-off valve. In older Las Vegas homes, original supply lines and shut-off valves may be corroded and can fail during routine faucet service.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved faucet and sink service image when available
const FAUCET_SINK_SERVICES: ServiceTypeCard[] = [
  {
    title: "Dripping Faucet Repair",
    description:
      "Diagnosis and repair of dripping faucets including cartridge, O-ring, washer, and valve seat replacement for all faucet types.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Faucet Replacement",
    description:
      "Full faucet replacement for worn, corroded, or repeatedly failing fixtures in kitchens, bathrooms, and utility areas.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Faucet Installation",
    description:
      "Professional installation of new faucets including supply line connection, shut-off valve inspection, and leak testing.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Kitchen Sink Installation",
    description:
      "Installation of drop-in, undermount, and farmhouse kitchen sinks including drain assembly, P-trap connection, and supply line hookup.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Bathroom Sink Installation",
    description:
      "Bathroom sink installation for undermount, vessel, pedestal, and vanity-top configurations throughout Las Vegas homes.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Under-Sink Leak Repair",
    description:
      "Repair of leaks under kitchen and bathroom sinks including drain connections, P-trap seals, supply lines, and shut-off valves.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Aerator and Cartridge Service",
    description:
      "Cleaning and replacement of faucet aerators and cartridges to restore water pressure and stop drips caused by mineral buildup.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Drain and P-Trap Repair",
    description:
      "Repair and replacement of sink drain assemblies, pop-up drain hardware, and P-trap connections for kitchens and bathrooms.",
    href: "/drain-cleaning/",
  },
];

const LV_FAUCET_SINK_FACTORS = [
  {
    title: "Hard Water and Cartridge Failure",
    body: "Las Vegas receives some of the most mineral-rich municipal water in the country. Calcium and magnesium deposits build up inside faucet cartridges and valve seats over time, causing increased friction, handle stiffness, and eventually a drip that no amount of handle-tightening will stop. Faucets in Las Vegas homes typically need cartridge replacement sooner than the same models installed in soft-water markets. Knowing the faucet type you have, whether cartridge, ball, compression, or ceramic disc, helps a plumber diagnose and replace the right component quickly.",
  },
  {
    title: "Aerator Clogging and Low Pressure",
    body: "The aerator is the small screen assembly at the tip of a faucet that mixes air with the water stream. In Las Vegas, mineral deposits from hard water accumulate inside the aerator faster than in most US cities, gradually restricting flow and dropping water pressure at the fixture. Many homeowners assume a pressure problem is a supply line or main issue, when the actual cause is a clogged aerator that takes minutes to clean or replace. Regular aerator maintenance is a simple and effective way to keep faucet pressure at full capacity.",
  },
  {
    title: "Aging Fixtures in Las Vegas Tract Homes",
    body: "The Las Vegas Valley has a large inventory of tract homes built between the late 1970s and early 2000s. Many of these properties still have original kitchen and bathroom faucets that are now several decades old. Original fixtures in this age range often use compression valve technology that requires more frequent washer replacement and is less durable under hard water conditions than modern cartridge and ceramic disc designs. Upgrading to a current faucet with a ceramic disc valve is a practical improvement for older Las Vegas homes.",
  },
  {
    title: "Under-Sink Valves and Supply Lines in Older Properties",
    body: "A faucet swap in an older Las Vegas home often reveals corroded shut-off valves and deteriorated braided supply lines beneath the sink that have not been touched since the original installation. Hard water accelerates corrosion at valve seats and fitting connections, and older valves may not close fully when turned off. A plumber servicing a faucet or sink should always inspect the under-sink supply connections to confirm they are sound, since a corroded valve that fails during a repair can turn a straightforward job into a water damage situation.",
  },
];

const FAUCET_SINK_STEPS = [
  {
    name: "Call and Describe the Issue",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what your faucet or sink is doing. Whether it is a drip, a pressure problem, a leak under the sink, or a new fixture you need installed, we can schedule service for your Las Vegas home or business.",
  },
  {
    name: "Inspection and Diagnosis",
    body: "A licensed plumber inspects the faucet, supply lines, shut-off valves, drain assembly, and under-sink connections. We identify the specific cause of the problem and check for related issues such as corroded valves or deteriorated supply lines.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what we found, whether repair or replacement is the better option, and what the work involves. You approve everything before we start. No surprises.",
  },
  {
    name: "Repair or Installation with Final Check",
    body: "Our licensed plumber completes the repair or installation, tests all connections for leaks, confirms proper water pressure and flow, and cleans up before leaving.",
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
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning for slow sinks, clogged drains, and recurring blockages in kitchens and bathrooms.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, fixtures, and under-sink connections.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
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
    title: "Plumbing Fixture Repair, Replacement and Installation",
    description:
      "Full plumbing fixture services including faucets, sinks, showerheads, and bathroom hardware throughout Las Vegas.",
    href: "/plumbing-fixture-repair-replacement-installation/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Faucet and Sink Repair and Installation",
  serviceType: "Faucet and Sink Repair and Installation",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks for kitchens, bathrooms, and utility areas throughout Las Vegas and the Las Vegas Valley. Services include dripping faucet repair, faucet replacement, kitchen and bathroom sink installation, aerator and cartridge service, and under-sink leak repair. Nevada Contractor License #0048585A.",
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
      name: "Faucet and Sink Repair and Installation",
      item: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Faucet and Sink Work",
  description:
    "The faucet and sink repair and installation process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: FAUCET_SINK_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
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
        name: "Faucet and Sink Repair and Installation",
        item: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAUCET_SINK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaucetSinkRepairInstallationPage() {
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
            { label: "Faucet and Sink Repair and Installation" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Faucet and Sink Repair and Installation
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Faucet repair, replacement, and sink installation for kitchens, bathrooms, and utility areas throughout Las Vegas."
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
            label: "Request Faucet or Sink Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Faucet or Sink Help" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/faucet-sink-repair-installation/hero.webp",
            alt: "Faucet and sink repair, replacement, and installation services",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for faucet and sink service"
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

        {/* SECTION 3: SIGNS YOUR FAUCET OR SINK NEEDS A PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Faucet or Sink
                <br className="hidden sm:block" /> Needs a Plumber
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing repairs, replaces, and installs faucets
                and sinks for kitchens, bathrooms, and utility areas
                throughout Las Vegas and the Las Vegas Valley. Our licensed
                plumbers handle everything from a dripping faucet to a full
                sink installation.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {FAUCET_SINK_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: FAUCET AND SINK SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Faucet and Sink Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of faucet and
                    sink repair, replacement, and installation services for
                    residential and commercial properties throughout Las Vegas
                    and the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved faucet and sink service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {FAUCET_SINK_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY FAUCETS AND SINKS WEAR FASTER IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Faucets and Sinks Wear Faster
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Faucet and sink components face the same hard water,
                    aging fixture, and under-sink corrosion conditions that
                    affect every plumbing system in Las Vegas. Understanding
                    these local factors helps homeowners recognize when
                    repair, maintenance, or replacement makes the most sense.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_FAUCET_SINK_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Faucet and Sink Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Faucet and sink jobs are common service calls, but a
                    quick repair on the visible fixture often misses
                    related issues under the sink. Here is how Red Carpet
                    Plumbing approaches faucet and sink work for Las Vegas
                    homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {FAUCET_SINK_STEPS.map((step, index) => (
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
                  Leaky Faucet or Sink Problem
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles faucet repairs, replacements,
                  and sink installations throughout the Las Vegas Valley. NV
                  Contractor License #0048585A.
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
                  Available for faucet and sink service throughout the Las
                  Vegas Valley.
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
                Faucet and Sink Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides faucet and sink repair and
                installation throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/faucet-sink-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/faucet-sink-repair-installation/ not yet built */}
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
                Faucet and Sink Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {FAUCET_SINK_FAQS.map((faq) => (
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
              Need Faucet or Sink Repair
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              faucet repair, replacement, and sink installation throughout
              the Las Vegas Valley.
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
