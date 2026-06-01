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
    "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals for kitchens throughout Las Vegas and the Las Vegas Valley. Jammed, leaking, or not working. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
  },
  openGraph: {
    title:
      "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed garbage disposal repair and installation throughout Las Vegas and the Las Vegas Valley. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const DISPOSAL_FAQS = [
  {
    question: "Why is my garbage disposal humming but not spinning?",
    answer:
      "A humming disposal that will not spin has a jammed impeller. Something lodged between the impeller plate and the grinding ring is preventing the motor from turning. The motor strains, overheats, and trips the internal overload protector, which causes it to hum without grinding. In Las Vegas, hard water mineral deposits can also build up on impeller components and increase jam frequency. A plumber can safely clear the jam, test the motor, and confirm the unit is operating correctly.",
  },
  {
    question: "How do I reset a garbage disposal?",
    answer:
      "Most garbage disposals have a red or black reset button on the bottom of the unit under the sink. If the disposal stopped working suddenly, the motor may have overloaded and tripped the reset. Press the reset button firmly until you feel it click. Then run cold water and turn the disposal on. If it still does not work after resetting, the cause is likely a jam, a wiring issue, or a failing motor that requires a plumber to diagnose.",
  },
  {
    question:
      "When should I replace a garbage disposal instead of repairing it?",
    answer:
      "Replacement is usually the better choice when the disposal is leaking from the bottom housing, which typically means the internal seals have failed. Other replacement indicators include a unit that is eight to twelve years old with a failing motor, one that jams repeatedly despite normal use, or one that requires repairs that approach the cost of a new unit. Red Carpet Plumbing can assess your disposal and give you an honest recommendation on repair versus replacement.",
  },
  {
    question: "What should not go into a garbage disposal?",
    answer:
      "Garbage disposals are not designed to handle grease or cooking oil, fibrous foods like celery and onion skins, starchy foods like potato peels and pasta, hard items like bones and fruit pits, eggshells in large quantities, or non-food items of any kind. In Las Vegas, grease is a particular concern because it combines with hard water calcium deposits to form thick buildup in discharge lines, increasing the risk of clogs and drain backups behind the disposal.",
  },
  {
    question: "How long do garbage disposals last?",
    answer:
      "The average garbage disposal lasts eight to twelve years with normal use. Units in Las Vegas homes may reach end-of-life sooner due to hard water mineral stress on internal components. Disposals in high-use households, investment properties, and short-term rentals typically have shorter lifespans than units in single-occupancy homes. If your disposal is approaching ten years old and starting to have problems, replacement is often more cost-effective than continued repair.",
  },
  {
    question: "Can a plumber install a garbage disposal?",
    answer:
      "Yes. Red Carpet Plumbing installs garbage disposals for kitchen sinks throughout Las Vegas and the Las Vegas Valley. Professional installation includes connecting the disposal to the drain assembly, dishwasher inlet if applicable, electrical connection point, and confirming all connections are leak-free before leaving. Licensed installation also protects the manufacturer warranty, which many brands require.",
  },
  {
    question: "Why is my garbage disposal leaking?",
    answer:
      "Garbage disposal leaks most commonly come from three locations: the sink flange at the top where the disposal meets the sink drain, the discharge tube on the side where water exits to the drain pipe, or the bottom of the housing where internal seals have failed. Leaks at the flange or discharge tube are usually repairable. Leaks from the bottom of the housing typically indicate failed internal seals and usually mean the unit needs replacement.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for garbage disposal repair?",
    answer:
      "Red Carpet Plumbing provides garbage disposal repair and installation throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "24/7 Emergency Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const DISPOSAL_WARNING_SIGNS = [
  {
    title: "Disposal Hums But Will Not Spin",
    body: "A disposal that hums without grinding has a jammed impeller. Something is preventing the motor from turning, causing it to overheat and trip the internal overload protector. This is the most common garbage disposal complaint and is usually repairable, though hard water mineral buildup on internal components can make Las Vegas units more prone to jamming over time.",
  },
  {
    title: "Disposal Will Not Turn On",
    body: "If the disposal does not respond at all, start by pressing the reset button on the bottom of the unit under the sink. If resetting does not restore function, the cause may be a wiring issue, a tripped circuit breaker, or a failed motor that requires a plumber to diagnose.",
  },
  {
    title: "Disposal Is Leaking",
    body: "Leaks from a garbage disposal can come from the sink flange at the top, the discharge tube on the side, or the bottom of the housing. Flange and discharge tube leaks are usually repairable. A leak from the bottom of the unit typically means internal seals have failed and replacement is the practical next step.",
  },
  {
    title: "Frequent Jams or Recurring Clogs",
    body: "A disposal that jams repeatedly with normal use may have dull impellers, buildup narrowing the discharge line, or internal wear that has reduced grinding efficiency. In Las Vegas, grease combined with hard water calcium deposits in discharge lines is a common cause of recurring drain slowdowns behind the disposal.",
  },
  {
    title: "Loud Grinding or Rattling Noises",
    body: "Grinding, rattling, or scraping sounds usually mean a foreign object has entered the chamber or a component has come loose internally. Do not continue running the disposal if you hear metallic grinding. Turn it off and call a plumber to inspect the unit before further damage occurs.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved garbage disposal service image when available
const DISPOSAL_SERVICES: ServiceTypeCard[] = [
  {
    title: "Garbage Disposal Jam Clearing",
    description:
      "Safe clearing of jammed garbage disposal impellers, including inspection of the flywheel, grinding ring, and motor after clearing.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Garbage Disposal Leak Repair",
    description:
      "Repair of disposal leaks at the sink flange, discharge tube, and dishwasher inlet connections.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Garbage Disposal Reset and Electrical Diagnosis",
    description:
      "Reset service and electrical diagnosis for disposals that will not start, including breaker checks and wiring inspection.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Garbage Disposal Replacement",
    description:
      "Full garbage disposal replacement for units with failed motors, cracked housings, or repeated repair history.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Garbage Disposal Installation",
    description:
      "Professional installation of new garbage disposals including drain connection, dishwasher inlet hookup, and leak testing.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Discharge Line Cleaning and Repair",
    description:
      "Cleaning and repair of garbage disposal discharge lines clogged by grease and mineral buildup behind the unit.",
    href: "/drain-cleaning/",
  },
  {
    title: "Sink Flange and Mounting Repair",
    description:
      "Repair and resealing of garbage disposal sink flanges that have loosened or developed leaks at the sink drain connection.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Disposal Upgrade and Swap",
    description:
      "Upgrade service for older, underpowered, or inefficient disposals with installation of a new unit suited to your kitchen use.",
    href: "/garbage-disposal-repair-installation/",
  },
];

const LV_DISPOSAL_FACTORS = [
  {
    title: "Hard Water Mineral Scale on Internal Components",
    body: "Las Vegas municipal water is among the hardest in the United States, with high concentrations of calcium and magnesium. These minerals deposit on garbage disposal impellers, grinding rings, and internal seals over time, increasing friction and reducing grinding efficiency. A disposal operating in Las Vegas conditions experiences more internal wear per year than the same unit in a soft-water market, which can shorten the practical lifespan and increase the frequency of jams. Regular maintenance and knowing the age of your unit helps decide whether repair or replacement is the smarter investment.",
  },
  {
    title: "Grease and Hard Water Buildup in Discharge Lines",
    body: "Grease from cooking does not stay liquid in drain pipes. It cools and hardens, and in Las Vegas hard water conditions, grease reacts with dissolved calcium to form thick soap-like deposits that narrow the inside of discharge lines and drain pipes. This buildup forces the disposal to work harder against restricted drainage, increases jam frequency, and eventually causes drain backups that appear to come from the disposal but originate further down the line. Running cold water during and after disposal use helps, but professional drain cleaning is needed once buildup is established.",
  },
  {
    title: "High-Use and Short-Term Rental Properties",
    body: "Las Vegas has one of the highest concentrations of short-term rental properties and investment homes in the country. Kitchens in these properties typically receive above-average use from rotating occupants and may go longer between inspections and maintenance. Garbage disposals in high-use settings reach the end of their practical service life sooner than units in single-family owner-occupied homes. If you manage a rental property in the Las Vegas Valley, a disposal that is showing signs of wear is worth replacing proactively before a tenant reports a failure.",
  },
  {
    title: "Aging Units in Las Vegas Tract Homes",
    body: "Many Las Vegas homes built between the 1990s and early 2000s still have original garbage disposals installed during construction. Units in this age range are approaching or past the average disposal lifespan of eight to twelve years. Older disposals with smaller motors and worn impellers are more susceptible to jams, leaks at aged flange seals, and gradual power loss. If your home was built before 2010 and you have never had the disposal replaced, having a plumber assess its condition is a practical step before an inconvenient failure.",
  },
];

const DISPOSAL_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what the disposal is doing. Whether it is humming, leaking, not starting, or making unusual noises, we can schedule a licensed plumber to inspect the unit.",
  },
  {
    name: "Inspection and Diagnosis",
    body: "A licensed plumber inspects the disposal, motor, impeller, flange seal, discharge tube connection, and under-sink drain setup. We identify the specific cause and assess whether repair or replacement is the right call.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what we found and what the repair or replacement involves. If the unit needs replacing, we walk you through suitable options. You approve the scope before any work begins.",
  },
  {
    name: "Repair or Installation with Final Check",
    body: "Our licensed plumber completes the repair or installs the new disposal, tests all connections for leaks, runs the unit with water to confirm proper operation, and cleans up before leaving.",
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
      "Professional drain cleaning for kitchen drains, disposal discharge lines, and main sewer lines throughout Las Vegas.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Faucet and Sink Repair and Installation",
    description:
      "Faucet repair, replacement, and sink installation for kitchens and bathrooms throughout Las Vegas.",
    href: "/faucet-sink-repair-installation/",
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
    title: "Plumbing Fixture Repair, Replacement and Installation",
    description:
      "Full plumbing fixture services for kitchens, bathrooms, and utility areas throughout the Las Vegas Valley.",
    href: "/plumbing-fixture-repair-replacement-installation/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garbage Disposal Repair and Installation",
  serviceType: "Garbage Disposal Repair and Installation",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals for kitchens throughout Las Vegas and the Las Vegas Valley. Services include jam clearing, leak repair, motor diagnosis, full replacement, and new installation. Nevada Contractor License #0048585A.",
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
      name: "Garbage Disposal Repair and Installation",
      item: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Garbage Disposal Work",
  description:
    "The garbage disposal repair and installation process used by Red Carpet Plumbing for Las Vegas kitchens.",
  step: DISPOSAL_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
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
        name: "Garbage Disposal Repair and Installation",
        item: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DISPOSAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GarbageDisposalRepairInstallationPage() {
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
            { label: "Garbage Disposal Repair and Installation" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Garbage Disposal Repair and Installation
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Garbage disposal repair, replacement, and installation for kitchens throughout Las Vegas and the Las Vegas Valley."
          trustItems={[
            "Licensed Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
            "24/7 Emergency Service",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Garbage Disposal Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Garbage Disposal Help" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/garbage-disposal-repair-installation/hero.webp",
            alt: "Modern garbage disposal installation in a Las Vegas kitchen",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for garbage disposal service"
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

        {/* SECTION 3: SIGNS YOUR GARBAGE DISPOSAL NEEDS ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Garbage Disposal
                <br className="hidden sm:block" /> Needs Attention
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing repairs, replaces, and installs garbage
                disposals for kitchens throughout Las Vegas and the Las Vegas
                Valley. Our licensed plumbers diagnose jammed, leaking, and
                non-functioning units and handle full disposal replacements
                when repair is no longer practical.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {DISPOSAL_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: GARBAGE DISPOSAL SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Garbage Disposal Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of garbage
                    disposal repair, replacement, and installation services
                    for residential and commercial kitchens throughout Las
                    Vegas and the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved garbage disposal service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {DISPOSAL_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY GARBAGE DISPOSALS WEAR OUT FASTER IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Garbage Disposals Wear Out Faster
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Hard water, grease buildup, high-use rental properties,
                    and aging tract-home fixtures together drive faster wear
                    on garbage disposals in Las Vegas than in most other
                    markets. Knowing how these factors affect your unit helps
                    you plan ahead.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_DISPOSAL_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Garbage Disposal Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Garbage disposal work is part diagnosis, part judgment
                    call between repair and replacement. Here is how Red
                    Carpet Plumbing handles disposal service for Las Vegas
                    homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {DISPOSAL_STEPS.map((step, index) => (
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
                  Garbage Disposal Problem
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles disposal jams, leaks,
                  replacements, and new installations throughout the Las
                  Vegas Valley. NV Contractor License #0048585A.
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
                  Available for garbage disposal service throughout the Las
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
                Garbage Disposal Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides garbage disposal repair and
                installation throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/garbage-disposal-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/garbage-disposal-repair-installation/ not yet built */}
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
                Garbage Disposal Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {DISPOSAL_FAQS.map((faq) => (
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
              Need Garbage Disposal Repair or Installation
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              garbage disposal repair, replacement, and installation
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
