import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Local, family-owned Las Vegas plumbers since 1980+. 24/7 emergency plumbing, drain cleaning, water heater repair, and more. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/",
  },
  openGraph: {
    title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Local Las Vegas plumbers available 24/7. Emergency plumbing, drain cleaning, water heater repair, leak detection, slab leak repair, and more. Serving the full Las Vegas Valley. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const HOMEPAGE_FAQS = [
  {
    question:
      "Does Red Carpet Plumbing offer 24/7 emergency plumbing in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service throughout Las Vegas and the Las Vegas Valley. Emergency services include burst pipes, severe leaks, sewer backups, water heater failures, and other urgent plumbing situations. Call (702) 567-9172 for immediate assistance.",
  },
  {
    question: "What areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities throughout the Las Vegas Valley.",
  },
  {
    question: "How long has Red Carpet Plumbing been in business?",
    answer:
      "Red Carpet Plumbing has been serving the Las Vegas Valley for over 40 years. The company is a local, family-owned plumbing business with deep experience in Las Vegas plumbing conditions and service needs.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle both residential and commercial plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for both residential and commercial customers throughout the Las Vegas Valley. Commercial services include repair, installation, drain service, backflow prevention, and gas line support.",
  },
  {
    question: "What plumbing services does Red Carpet Plumbing offer?",
    answer:
      "Red Carpet Plumbing offers a full range of plumbing services including emergency plumbing, drain cleaning, leak detection and repair, water heater repair and installation, slab leak detection and repair, sewer line services, re-piping, gas line plumbing, commercial plumbing, and more.",
  },
  {
    question: "Does Red Carpet Plumbing offer transparent pricing?",
    answer:
      "Yes. Red Carpet Plumbing provides upfront pricing with no hidden fees. Customers are informed of the cost before any work begins.",
  },
  {
    question: "Why are slab leaks common in Las Vegas homes?",
    answer:
      "Slab leaks are common in Las Vegas due to the desert climate, soil shifting, hard water mineral buildup in pipes, and aging pipe materials in older neighborhoods. Red Carpet Plumbing provides slab leak detection and repair throughout the Las Vegas Valley.",
  },
  {
    question: "How do I schedule plumbing service with Red Carpet Plumbing?",
    answer:
      "You can schedule service by calling (702) 567-9172 or by submitting a service request on the contact page. For plumbing emergencies, calling directly is recommended for the fastest response.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "Over 40 Years Serving Las Vegas",
  "Local, Family-Owned Business",
  "Licensed Plumbers",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

type ServiceCardEntry = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  built: boolean;
};

const SERVICE_CARDS: ServiceCardEntry[] = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response to burst pipes, major leaks, and plumbing emergencies throughout Las Vegas.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting to clear clogs and restore proper flow.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
    built: true,
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnostics, repair, and installation for traditional and tankless systems.",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Modern energy efficient water heater installation",
    built: true,
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Specialized slab leak detection and repair for Las Vegas homes where shifting desert soils and hard water accelerate pipe damage.",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Home foundation showing signs of a slab leak",
    built: true,
  },
  {
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties.",
    href: "/sewer-line-services/",
    built: true,
  },
  {
    title: "Re-Piping",
    description:
      "Whole-home and commercial re-piping to replace aging, corroded, or failing pipe systems.",
    href: "/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Professional re-piping service for a Las Vegas home",
    built: true,
  },
  {
    title: "Commercial Plumbing",
    description:
      "Commercial plumbing services for businesses, property managers, and commercial properties throughout the Las Vegas Valley.",
    href: "/commercial-plumbing/",
    built: false,
  },
];

const LOCAL_ISSUES = [
  {
    question: "Why Is Hard Water a Problem for Las Vegas Plumbing?",
    answer:
      "Las Vegas has some of the hardest water in the United States. High mineral content, primarily calcium and magnesium, builds up inside pipes, water heaters, and fixtures over time. This buildup reduces water flow, shortens the lifespan of water heaters, and can cause fixture damage. Regular water heater flushing and pipe inspection help Las Vegas homeowners manage hard water effects before they become expensive problems.",
  },
  {
    question: "What Causes Slab Leaks in Las Vegas Homes?",
    answer:
      "Slab leaks occur when water pipes running beneath a home's concrete foundation develop cracks or holes. In Las Vegas, a combination of hard water mineral corrosion, shifting desert soil, and temperature fluctuations accelerates pipe deterioration under the slab. Slab leaks are one of the most serious plumbing issues in the valley because they can go undetected for months while causing structural damage and mold growth.",
  },
  {
    question: "How Does Desert Heat Affect Plumbing Pipes?",
    answer:
      "Las Vegas summer temperatures regularly exceed 110 degrees Fahrenheit. This extreme heat causes pipes to expand and contract repeatedly, which stresses pipe joints and connections over time. Outdoor pipes and pipes near exterior walls are particularly vulnerable. Older copper and galvanized pipes that have already weakened from hard water buildup are at higher risk of failure during heat stress periods.",
  },
  {
    question: "Why Do Las Vegas Homes Have Water Pressure Problems?",
    answer:
      "Water pressure issues are common in Las Vegas, particularly in older neighborhoods and high-rise buildings. Mineral-clogged pipes restrict water flow and reduce pressure at fixtures. Failing pressure regulator valves, which control incoming water pressure from the municipal supply, can also cause pressure that is too high or too low. Both conditions affect everyday water use and can damage appliances over time.",
  },
  {
    question: "What Happens to Older Pipes in the Las Vegas Climate?",
    answer:
      "Many Las Vegas homes built before the 1990s still have original galvanized steel or early copper plumbing. These older pipe materials were not designed for Las Vegas's hard water conditions and decades of heat stress. Galvanized pipes corrode from the inside out, reducing water quality and flow. When older pipes reach the end of their usable life, re-piping with modern materials is the most durable long-term solution.",
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
  "Green Valley",
  "Lake Las Vegas",
  "Aliante Area",
];

const WHY_CHOOSE_REASONS = [
  {
    title: "Over 40 Years Serving Las Vegas",
    body: "Red Carpet Plumbing has been serving Las Vegas homes and businesses for over 40 years. That means four decades of experience with the specific plumbing conditions, water quality, and climate challenges that affect properties throughout the Las Vegas Valley.",
  },
  {
    title: "Local, Family-Owned",
    body: "We are a local, family-owned Las Vegas plumbing company, not a national franchise. When you call Red Carpet Plumbing, you are calling a neighbor who has a stake in this community and a commitment to doing the job right.",
  },
  {
    title: "Licensed Plumbers",
    body: "Every job Red Carpet Plumbing takes on is handled by licensed plumbing professionals.",
    extraNote: "license",
  },
  {
    title: "24/7 Emergency Service",
    body: "Plumbing emergencies happen outside of business hours. Red Carpet Plumbing is available 24 hours a day, 7 days a week for emergency plumbing situations throughout Las Vegas and the Las Vegas Valley.",
  },
  {
    title: "Transparent Pricing, No Hidden Fees",
    body: "We provide upfront pricing before work begins. No surprises on the invoice. You know what the job costs before our plumber starts.",
  },
  {
    title: "Customer Satisfaction Guarantee",
    body: "Red Carpet Plumbing stands behind every service we provide. Our goal is for every customer to feel confident in the work completed and comfortable calling us again.",
  },
];

const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com",
  telephone: "+17025679172",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3330 W. Hacienda Ave Ste. 405",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89118",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
  ],
  sameAs: [
    "https://share.google/oY5LcfC0lhWJXVjJj",
    "https://www.facebook.com/redcarpetplumbing/",
    "https://www.instagram.com/redcarpetplumbing/",
    "https://x.com/redcarpetplumb",
  ],
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
    "Aliante, NV",
    "Las Vegas Valley, NV",
    "Clark County, NV",
  ],
  description:
    "Red Carpet Plumbing is a local, family-owned Las Vegas plumbing company with over 40 years of experience. We provide 24/7 emergency plumbing, drain cleaning, water heater repair, leak detection, slab leak repair, sewer line services, re-piping, and commercial plumbing throughout the Las Vegas Valley. Licensed plumbers, transparent pricing, no hidden fees.",
  logo: "https://redcarpetplumbing.com/images/brand/logo/red-carpet-plumbing-logo.png",
  image: "https://redcarpetplumbing.com/images/hero/homepage/hero-primary.webp",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Local, family-owned Las Vegas plumbers since 1980+. 24/7 emergency plumbing, drain cleaning, water heater repair, and more. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Red Carpet Plumbing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={plumberSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Company in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides plumbing services for homes and businesses throughout Las Vegas and the Las Vegas Valley. From emergency plumbing and drain cleaning to water heater repair, slab leak detection, and full re-piping, our local team is ready to help. We have been serving Las Vegas for over 40 years as a licensed, family-owned plumbing company."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "Local, family-owned, over 40 years in Las Vegas",
            "Licensed plumbers, transparent pricing",
            "24/7 emergency plumbing available",
          ]}
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          secondaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={
            <>
              {/* FLAG: Confirm SiriusSys endpoint https://link.siriussys.io/widget/form/AfdLCY7bAzZ0rN9eDFD2 before wiring form. LAUNCH BLOCKER. Do not enable until owner confirms. */}
              <QuoteFormPlaceholder />
            </>
          }
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas homeowners and businesses choose Red Carpet Plumbing"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <TrustCheck />
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: 24/7 EMERGENCY CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  24/7 Emergency Plumbing in Las Vegas
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Plumbing emergencies do not follow a schedule. Burst pipes,
                  sewer backups, water heater failures, and severe leaks can
                  cause serious damage if not addressed immediately. Red Carpet
                  Plumbing provides 24/7 emergency plumbing service throughout
                  Las Vegas and the Las Vegas Valley. Call us any time, day or
                  night, and we will get to you.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE SERVICES PREVIEW */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing Services in Las Vegas, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing offers a full range of residential and
                    commercial plumbing services throughout Las Vegas and the
                    Las Vegas Valley. Whether you need emergency repairs,
                    routine maintenance, or a full re-pipe, our licensed
                    plumbers handle every job with care. Our services include
                    emergency plumbing, drain cleaning, water heater repair and
                    installation, leak detection and repair, slab leak detection
                    and repair, sewer line services, re-piping, and commercial
                    plumbing.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SERVICE_CARDS.map((card) => {
                    if (!card.built) {
                      // TODO-BATCH-NEXT: /commercial-plumbing/ not yet built — render as plain text until route is created
                      return (
                        <ServiceCard
                          key={card.href}
                          title={card.title}
                          description={card.description}
                          href={card.href}
                          image={card.image}
                          imageAlt={card.imageAlt}
                          built={false}
                        />
                      );
                    }
                    return (
                      <ServiceCard
                        key={card.href}
                        title={card.title}
                        description={card.description}
                        href={card.href}
                        image={card.image}
                        imageAlt={card.imageAlt}
                      />
                    );
                  })}
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 text-center">
                <Link
                  href="/plumbing-services/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-transform motion-safe:active:scale-[0.97]"
                >
                  See All Plumbing Services
                </Link>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: LOCAL LAS VEGAS PLUMBING ISSUES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Plumbing Problems in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas homes and businesses face specific plumbing
                    challenges driven by the desert climate, hard water supply,
                    and local soil conditions. Understanding these problems
                    helps homeowners catch issues early and avoid costly
                    repairs.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LOCAL_ISSUES.map((issue) => (
                  <article key={issue.question}>
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      {issue.question}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      {issue.answer}
                    </p>
                  </article>
                ))}
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: SERVICE AREAS PREVIEW */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Plumbing Services Across the Las Vegas Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/85">
                    Red Carpet Plumbing serves communities throughout the Las
                    Vegas Valley. Whether you are in a single-family home, a
                    commercial property, or a multi-unit building, our licensed
                    plumbers cover your area.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {SERVICE_AREAS.map((area) => (
                    <li
                      key={area}
                      className="flex h-full items-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                    >
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10 text-center">
                <Link
                  href="/service-areas/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
                >
                  View All Service Areas
                </Link>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homeowners and Businesses Choose Red Carpet
                    Plumbing
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {WHY_CHOOSE_REASONS.map((reason) => (
                    <article key={reason.title} className="flex flex-col gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                        <TrustCheck className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark">
                        {reason.title}
                      </h3>
                      <p className="text-base leading-7 text-brand-dark/80">
                        {reason.body}
                      </p>
                      {reason.extraNote === "license" ? (
                        /* TODO: Add NV contractor license number when confirmed by owner */
                        <span className="sr-only">
                          NV contractor license number pending
                        </span>
                      ) : null}
                    </article>
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Las Vegas Plumbing
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HOMEPAGE_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready to Schedule Plumbing Service in Las Vegas?"
          body="Red Carpet Plumbing is available for emergency plumbing, scheduled repairs, and plumbing installations throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated, over 40 years in business."
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          secondaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
        />
      </main>

      <SiteFooter />

      {/* Spacer so the fixed sticky mobile CTA never covers footer content. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      <StickyMobileCTA />
    </>
  );
}

function TrustCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`flex-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
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
