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
    "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas and the Las Vegas Valley. Running toilets, base leaks, clogs, and new installations. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/toilet-repair-installation/",
  },
  openGraph: {
    title:
      "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed toilet repair and installation throughout Las Vegas and the Las Vegas Valley. Running toilets, leaks, clogs, and new installs. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const TOILET_FAQS = [
  {
    question: "Why does my toilet keep running?",
    answer:
      "A running toilet is usually caused by a faulty flapper valve that is no longer sealing properly, a failing fill valve that does not shut off after the tank refills, or a float that is set too high and allows water to run continuously into the overflow tube. A running toilet can waste hundreds of gallons of water per day. A licensed plumber can diagnose and repair the specific component causing the problem.",
  },
  {
    question: "Why is my toilet leaking at the base?",
    answer:
      "A toilet leaking at the base is most often caused by a failed wax ring, which is the seal between the toilet and the floor flange. In Las Vegas homes, heat cycling and minor ground movement can degrade wax rings over time, especially in older properties. A leaking base is not just a water damage issue; it can also allow sewer gases to enter the home and should be repaired promptly.",
  },
  {
    question:
      "How do I know if my toilet needs repair or full replacement?",
    answer:
      "Repair is usually the right choice for running toilets, base leaks, weak flushes, and most clog situations. Replacement makes more sense when the toilet has a cracked tank or bowl, requires repeated repairs for the same problem, has severe mineral buildup blocking siphon jets that cannot be cleared, or is an older low-efficiency model that wastes water. A plumber can assess the condition and recommend the most practical option.",
  },
  {
    question: "Can hard water damage a toilet?",
    answer:
      "Yes. Las Vegas has some of the hardest water in the country, and the mineral content builds up inside toilet siphon jets, rim holes, and the siphon tube over time. This buildup restricts water flow, weakens the flush, and increases the risk of clogs. Hard water scale also accelerates wear on flapper valves and fill valves, meaning toilet components may need replacement more frequently in Las Vegas homes than in areas with softer water.",
  },
  {
    question: "How long does toilet installation take?",
    answer:
      "A standard toilet installation typically takes one to two hours for a licensed plumber. This includes removing the old toilet, inspecting the flange condition, setting the new wax ring, positioning and securing the toilet, and connecting the supply line. If the flange is damaged and needs repair, the job may take longer. Red Carpet Plumbing handles the full installation process and disposes of the old toilet.",
  },
  {
    question: "Does Red Carpet Plumbing install new toilets?",
    answer:
      "Yes. Red Carpet Plumbing installs replacement toilets and new toilet installations throughout Las Vegas and the Las Vegas Valley. We work with customer-supplied toilets and can advise on suitable options based on your bathroom configuration, including comfort-height models and water-efficient designs.",
  },
  {
    question: "What should I do if my toilet is overflowing?",
    answer:
      "If your toilet is overflowing and will not stop, locate the shutoff valve at the base of the toilet and turn it clockwise to stop the water supply. If the valve is inaccessible or not working, turn off the main water supply to the home. Do not continue to flush. Call Red Carpet Plumbing at (702) 567-9172. An overflowing toilet that cannot be stopped with the shutoff valve may indicate a main sewer line problem.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for toilet repair and installation?",
    answer:
      "Red Carpet Plumbing provides toilet repair and installation throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "24/7 Emergency Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const TOILET_WARNING_SIGNS = [
  {
    title: "Toilet Running Constantly",
    body: "A toilet that keeps running after flushing is usually a failing flapper, fill valve, or float set too high. Beyond the noise, a running toilet wastes a significant amount of water and increases your water bill. The problem is typically a straightforward repair once the faulty component is identified.",
  },
  {
    title: "Toilet Leaking at the Base",
    body: "Water pooling around the base of a toilet usually means the wax ring has failed. In Las Vegas, heat cycling and minor ground movement can degrade wax rings over time. A base leak also allows sewer gases into the home and should not be left unaddressed.",
  },
  {
    title: "Frequent Clogs That Won't Clear",
    body: "A toilet that clogs repeatedly, especially with normal use, may have a buildup problem deeper in the drain line or mineral deposits narrowing the siphon jets from Las Vegas hard water. A plumber can diagnose whether the issue is in the toilet itself or further down the line.",
  },
  {
    title: "Weak or Incomplete Flush",
    body: "A toilet that flushes weakly or does not clear waste in a single flush often has mineral buildup blocking the rim holes or siphon tube. Las Vegas hard water accelerates this type of buildup compared to areas with softer water supply.",
  },
  {
    title: "Toilet Wobbling or Unstable",
    body: "A toilet that rocks or moves when in use usually has loose floor bolts or a deteriorated flange. Ignoring instability can damage the wax ring and lead to a base leak.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved toilet service image when available
const TOILET_SERVICES: ServiceTypeCard[] = [
  {
    title: "Running Toilet Repair",
    description:
      "Diagnosis and repair of toilets that run continuously after flushing, including flapper, fill valve, and float replacement.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Leaking Toilet Repair",
    description:
      "Repair of toilets leaking at the base, tank, or supply line connections, including wax ring and flange service.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Toilet Clog Clearing",
    description:
      "Professional clearing of toilet clogs, including stubborn or recurring blockages that a plunger cannot resolve.",
    href: "/drain-cleaning/",
  },
  {
    title: "Toilet Replacement",
    description:
      "Full toilet replacement for cracked, damaged, or aging toilets that are no longer repairable or efficient.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "New Toilet Installation",
    description:
      "Professional installation of new toilets for bathroom renovations, additions, and upgrades throughout Las Vegas.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Wax Ring and Flange Repair",
    description:
      "Replacement of failed wax rings and repair of damaged toilet flanges to stop base leaks and sewer gas entry.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Toilet Tank Component Repair",
    description:
      "Repair and replacement of toilet tank internals including flappers, fill valves, flush valves, and floats.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Supply Line Repair and Replacement",
    description:
      "Repair and replacement of toilet supply lines and shutoff valves to stop leaks and restore reliable water flow.",
    href: "/toilet-repair-installation/",
  },
];

const LV_TOILET_FACTORS = [
  {
    title: "Hard Water Mineral Buildup",
    body: "Las Vegas has some of the hardest municipal water supply in the country. The high mineral content causes calcium and magnesium deposits to accumulate inside toilet siphon jets and rim holes over time, restricting water flow and reducing flush strength. Hard water scale also accelerates wear on rubber flapper valves and fill valve components, meaning toilet parts may need replacement more frequently in Las Vegas homes than in areas with softer water. Annual inspection of toilet internals is a practical step for any Las Vegas homeowner.",
  },
  {
    title: "Wax Ring and Flange Deterioration in Desert Heat",
    body: "Older Las Vegas homes experience significant heat cycling between extreme summer temperatures and cooler winter periods. This repeated expansion and contraction stresses the wax ring seal between the toilet base and the floor flange. Combined with minor shifts in desert soil, deteriorated wax rings are a common source of base leaks in the Las Vegas area. A toilet that leaks at the base or releases sewer odors near the floor is signaling that the wax ring needs replacement.",
  },
  {
    title: "Water Conservation and Efficient Toilet Upgrades",
    body: "The Southern Nevada Water Authority serves the Las Vegas Valley and actively encourages water-efficient fixture upgrades as part of long-term conservation planning. Toilets manufactured before 1992 use significantly more water per flush than modern low-flow and dual-flush models. Replacing an older toilet with a current high-efficiency model reduces household water consumption, which matters in a desert community where water supply is a managed resource.",
  },
  {
    title: "Aging Toilet Components in Older Homes",
    body: "Many Las Vegas homes built in the 1970s through the 1990s still have original toilet fixtures with plastic and rubber components that have been degrading for decades. Original fill valves, flappers, and supply lines in older toilets are more prone to sudden failure than modern replacements. A thorough toilet inspection as part of general plumbing maintenance helps identify components that are near the end of their service life before they cause water damage or a disruptive failure.",
  },
];

const TOILET_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what your toilet is doing. If the toilet is overflowing and will not stop, shut off the water at the valve behind the toilet and then call us.",
  },
  {
    name: "Inspection and Diagnosis",
    body: "A licensed plumber inspects the toilet, tank components, base seal, flange, supply line, and drain connection to identify the exact cause of the problem. We check for hard water mineral buildup, seal failures, and component wear.",
  },
  {
    name: "Review Options and Approve",
    body: "We explain what we found and what options are available, including whether repair or replacement is the more practical choice for your situation. You approve the work before anything is done.",
  },
  {
    name: "Repair or Installation with Final Check",
    body: "Our licensed plumber completes the repair or installs the new toilet, checks all connections, confirms the flush is operating correctly, and cleans up the work area before leaving.",
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
      "Professional drain cleaning for toilet clogs, slow drains, and recurring blockages in kitchens and bathrooms.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of hidden leaks in supply lines, fixtures, and plumbing connections.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing service for overflowing toilets, sewer backups, and urgent plumbing situations throughout Las Vegas.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    description:
      "Repair, replacement, and installation of plumbing fixtures including faucets, sinks, toilets, and bathroom hardware.",
    href: "/plumbing-fixture-repair-replacement-installation/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Toilet Repair and Installation",
  serviceType: "Toilet Repair and Installation",
  description:
    "Red Carpet Plumbing provides toilet repair, replacement, and installation for homes and businesses throughout Las Vegas and the Las Vegas Valley, including running toilet repair, base leak repair, clog clearing, wax ring replacement, and new toilet installation. Nevada Contractor License #0048585A.",
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
      name: "Toilet Repair and Installation",
      item: "https://redcarpetplumbing.com/toilet-repair-installation/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Toilet Repair and Installation",
  description:
    "The toilet repair and installation process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: TOILET_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/toilet-repair-installation/",
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
        name: "Toilet Repair and Installation",
        item: "https://redcarpetplumbing.com/toilet-repair-installation/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TOILET_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ToiletRepairInstallationPage() {
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
            { label: "Toilet Repair and Installation" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Toilet Repair and Installation
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Toilet repair, replacement, and installation for Las Vegas homes and businesses."
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
            label: "Request Toilet Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={<QuoteFormPlaceholder title="Get Toilet Help" />}
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/toilet-repair-installation/hero.webp",
            alt: "Stylish modern toilet installation in a Las Vegas bathroom",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for toilet service"
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

        {/* SECTION 3: SIGNS YOUR TOILET NEEDS A PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Toilet
                <br className="hidden sm:block" /> Needs a Plumber
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing repairs, replaces, and installs toilets
                for homes and businesses throughout Las Vegas and the Las
                Vegas Valley. Whether you have a running toilet, a base leak,
                a recurring clog, or need a new toilet installed, our licensed
                plumbers handle the full job.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {TOILET_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: TOILET SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Toilet Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of toilet
                    repair, replacement, and installation services for
                    residential and commercial properties throughout Las Vegas
                    and the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved toilet service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {TOILET_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY TOILETS IN LAS VEGAS NEED EXTRA ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Toilets in Las Vegas
                    <br className="hidden sm:block" /> Need Extra Attention
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Toilets in Las Vegas face conditions that drive faster
                    wear on internal components and seals than in most other
                    regions. Hard water, desert heat cycles, water
                    conservation policy, and aging fixtures in older homes
                    all factor into how often Las Vegas toilets need
                    professional service.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_TOILET_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Toilet Repair and Installation
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Toilet work is a common service call, but doing it right
                    means matching the repair or installation to the actual
                    cause. Here is how Red Carpet Plumbing approaches toilet
                    service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {TOILET_STEPS.map((step, index) => (
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
                  Toilet Problem in Las Vegas?
                  <br className="hidden sm:block" /> Call a Licensed Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles running toilets, base leaks,
                  clogs, and full toilet replacement throughout the Las Vegas
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
                  Available 24/7 for toilet emergencies.
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
                Toilet Repair and Installation
                <br className="hidden sm:block" /> Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides toilet repair and installation
                throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/toilet-repair-installation/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/toilet-repair-installation/ not yet built */}
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
                Toilet Repair and Installation
                <br className="hidden sm:block" /> Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {TOILET_FAQS.map((faq) => (
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
              Need Toilet Repair or Installation
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              toilet repair, replacement, and installation throughout the Las
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
