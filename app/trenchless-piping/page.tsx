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
    "Trenchless Piping Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides trenchless pipe repair and replacement for homes and businesses throughout Las Vegas. CIPP lining and pipe bursting without major excavation. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/trenchless-piping/",
  },
  openGraph: {
    title:
      "Trenchless Piping Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed trenchless pipe repair and replacement throughout Las Vegas and the Las Vegas Valley. CIPP lining, pipe bursting. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const TRENCHLESS_FAQS = [
  {
    question: "What is trenchless pipe repair?",
    answer:
      "Trenchless pipe repair is a method of repairing or replacing underground pipes without digging a large excavation trench. Instead of removing the ground above the pipe to access it directly, trenchless methods work from small access points and repair or replace the pipe from within. The two primary trenchless methods are CIPP pipe lining, which installs a structural resin liner inside the existing pipe, and pipe bursting, which pulls new pipe through the old pipe while breaking it apart. Trenchless repair is particularly valuable in Las Vegas where caliche soil makes traditional excavation difficult and expensive.",
  },
  {
    question: "What is CIPP pipe lining?",
    answer:
      "CIPP stands for cured-in-place pipe. In CIPP lining, a flexible liner coated with structural resin is inserted into the damaged pipe and inflated against the pipe walls. The resin cures and hardens, creating a new pipe inside the old one. CIPP lining can repair cracks, corrosion, root intrusion, and minor joint offsets without excavation. When properly installed, a CIPP liner has a service life of fifty years or more. CIPP is suitable when the existing pipe retains its approximate shape and has not fully collapsed.",
  },
  {
    question: "What is pipe bursting?",
    answer:
      "Pipe bursting is a trenchless replacement method used when the existing pipe needs to be replaced rather than lined. A bursting head is pulled through the old pipe, breaking it outward into the surrounding soil, while simultaneously pulling new pipe material into place behind it. Pipe bursting replaces the full pipe without excavating the full length of the line. It requires access points at each end of the section being replaced and is suitable for clay, cast iron, and some older plastic pipe materials.",
  },
  {
    question: "Is trenchless pipe repair suitable for Las Vegas homes?",
    answer:
      "Yes, and Las Vegas conditions make trenchless methods particularly practical. The Las Vegas Valley has caliche soil, a dense calcium-rich hardpan that behaves like natural concrete and makes traditional excavation significantly more expensive and labor-intensive than in other markets. Many Las Vegas homes also have pavers, desert rock, stucco walls, and other hardscape that traditional excavation would destroy. Trenchless methods preserve landscaping and hardscape while repairing the pipe. However, not every pipe is a trenchless candidate. A camera inspection is required first to confirm the pipe's condition.",
  },
  {
    question: "Does trenchless pipe repair work under concrete slabs?",
    answer:
      "Yes. One of the primary advantages of trenchless methods in Las Vegas is the ability to repair or replace pipes running under concrete slabs, driveways, and patios without breaking through the surface. CIPP lining inserts through a small access point outside the slab. Pipe bursting can also work under slabs in many configurations. A camera inspection confirms pipe condition and access requirements before the method is selected.",
  },
  {
    question: "When is trenchless pipe repair not an option?",
    answer:
      "Trenchless methods are not suitable for every pipe condition. A severely collapsed pipe with no remaining internal shape cannot be lined with CIPP. Pipes with major offset joints or multiple structural failures over a long section may require partial or full traditional excavation. The decision is made after a video camera inspection confirms the pipe's condition and access points. Red Carpet Plumbing will recommend the most practical repair method after inspecting the line.",
  },
  {
    question: "How long does trenchless pipe repair take?",
    answer:
      "A typical trenchless pipe repair project takes one to a few days depending on the length of pipe being treated, the method used, and access conditions. CIPP lining for a residential sewer line can often be completed in one day. Pipe bursting may take longer depending on the access setup and pipe length. A camera inspection and site assessment provide a more accurate timeline for your specific situation.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for trenchless piping?",
    answer:
      "Red Carpet Plumbing provides trenchless piping services throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const TRENCHLESS_USE_CASES = [
  {
    title: "Recurring Sewer Backups After Repeated Cleaning",
    body: "If a sewer line continues to back up after professional cleaning, the cause may be cracks, root intrusion, or pipe belly damage that drain cleaning cannot fix. A camera inspection identifies the condition, and trenchless repair addresses the structural problem without opening the ground.",
  },
  {
    title: "Cracked, Corroded, or Root-Intruded Sewer Lines",
    body: "Pipes with cracks, internal corrosion, or root intrusion that has penetrated the pipe wall are strong candidates for CIPP lining. The liner seals cracks and blocks future root entry while restoring full flow capacity without replacing the pipe.",
  },
  {
    title: "Pipe Replacement Without Digging Up Landscaping",
    body: "Pipe bursting replaces a failed sewer line by pulling new pipe through the old one, breaking the old pipe outward as it goes. No trench is needed along the pipe length. This preserves pavers, desert rock, trees, and hardscape that would be destroyed by traditional excavation.",
  },
  {
    title: "Sewer Lines Under Concrete, Slabs, or Driveways",
    body: "Trenchless methods access the pipe through entry points at each end of the section, leaving the concrete, slab, or driveway surface above intact. This is particularly valuable in Las Vegas where caliche soil makes concrete and hardscape restoration after excavation expensive.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved trenchless service image when available
const TRENCHLESS_SERVICES: ServiceTypeCard[] = [
  {
    title: "CIPP Pipe Lining",
    description:
      "Cured-in-place pipe lining installs a structural resin liner inside existing damaged pipe, creating a new pipe within the old one without excavation.",
    href: "/trenchless-piping/",
  },
  {
    title: "Pipe Bursting",
    description:
      "Pipe bursting pulls new pipe through the old pipe while breaking it outward, replacing the full line without digging a trench along its length.",
    href: "/trenchless-piping/",
  },
  {
    title: "Trenchless Sewer Line Repair",
    description:
      "CIPP or pipe bursting repair for residential and commercial sewer lines with cracks, root intrusion, or corrosion throughout Las Vegas.",
    href: "/trenchless-piping/",
  },
  {
    title: "Trenchless Lateral Lining",
    description:
      "Lining of sewer lateral connections from the property to the main sewer line, protecting joints and sealing cracks without excavation.",
    href: "/trenchless-piping/",
  },
  {
    title: "Under-Slab Pipe Repair",
    description:
      "Trenchless repair of pipes running beneath concrete slabs and foundations, preserving the slab surface while restoring pipe integrity.",
    href: "/trenchless-piping/",
  },
  {
    title: "Pre-Trenchless Camera Inspection",
    description:
      "Video camera inspection to confirm pipe condition, identify the damage type, and determine whether the line qualifies for trenchless repair.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Commercial Trenchless Pipe Repair",
    description:
      "Trenchless sewer and drain line repair for commercial properties, minimizing operational disruption in occupied buildings.",
    href: "/trenchless-piping/",
  },
  {
    title: "Traditional Excavation When Required",
    description:
      "When trenchless methods are not suitable, Red Carpet Plumbing performs traditional excavation and sewer line replacement with full site restoration.",
    href: "/sewer-line-services/",
  },
];

const LV_TRENCHLESS_FACTORS = [
  {
    title: "Caliche Soil Makes Traditional Excavation Expensive",
    body: "Las Vegas caliche is a calcium-rich hardpan layer that sits at varying depths beneath most properties in the Las Vegas Valley. It behaves like natural concrete: it does not flex, it cannot be dug with standard tools, and removing it requires jackhammering or heavy equipment. Traditional sewer line excavation through caliche is significantly more labor-intensive and expensive than the same job in softer soil markets. Trenchless methods access the pipe from entry points at each end of the section and work entirely within the existing pipe, making caliche largely irrelevant to the repair cost.",
  },
  {
    title: "Las Vegas Hardscape Worth Protecting",
    body: "Many Las Vegas homeowners have invested in pavers, decomposed granite, desert rock, stucco retaining walls, mature desert landscaping, and decorative concrete that would require expensive restoration after traditional sewer excavation. Trenchless repair preserves this investment entirely. No pavers are lifted, no rock is removed, no concrete is cut, and no landscaping is disturbed beyond the small access points needed to run the liner or bursting head. For Las Vegas properties with significant outdoor improvements, trenchless repair eliminates the restoration cost that often rivals or exceeds the pipe repair itself.",
  },
  {
    title: "Caliche and Root Damage Are Predictable in Las Vegas",
    body: "The combination of caliche soil movement and irrigated desert landscaping creates predictable pipe damage patterns in the Las Vegas Valley. Caliche layers shift when surrounding soil settles or expands, transferring force into buried pipes and causing joint offsets and cracks. Irrigated trees and shrubs send roots toward any available moisture source, and cracked sewer joints are an ideal entry point. Both damage types are addressable with trenchless methods when the pipe retains adequate structural shape for lining or bursting. A camera inspection confirms the damage type and the appropriate method.",
  },
  {
    title: "Not Every Pipe Qualifies for Trenchless Repair",
    body: "Trenchless methods are not a universal solution. A pipe that has fully collapsed with no remaining internal shape cannot be lined with CIPP. Pipes with severe offset joints over multiple sections, or those with active groundwater infiltration through open gaps, may require traditional excavation for the affected section. The decision is made after a video camera inspection documents the actual condition of the line. Red Carpet Plumbing recommends the most practical method based on what the camera shows, not a preference for one approach over another.",
  },
];

const TRENCHLESS_STEPS = [
  {
    name: "Call and Describe the Problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. Recurring backups, slow drain throughout the house, or a sewer odor in the yard are common signs a sewer line needs attention.",
  },
  {
    name: "Camera Inspection to Assess the Pipe",
    body: "A licensed plumber performs a video camera inspection of the sewer line to document the damage, confirm the pipe condition, identify access points, and determine whether the pipe qualifies for CIPP lining, pipe bursting, or whether traditional excavation is required for part or all of the repair.",
  },
  {
    name: "Review Options and Approve",
    body: "We walk you through the camera findings, explain the recommended repair method, and provide the full scope before any work begins. You approve the approach and timeline before we start.",
  },
  {
    name: "Trenchless Repair with Post-Work Inspection",
    body: "Our licensed plumber completes the CIPP lining or pipe bursting work. After the repair is complete, we perform a follow-up camera inspection to confirm the liner or new pipe is properly seated and the line is fully functional.",
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
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties in Las Vegas.",
    href: "/sewer-line-services/",
    built: true,
  },
  {
    title: "Video Camera Plumbing Inspections",
    description:
      "Video camera inspection required before trenchless repair to confirm pipe condition and access requirements.",
    href: "/video-camera-plumbing-inspections/",
    image: "/images/services/video-camera-plumbing-inspections/hero.webp",
    imageAlt: "Licensed plumber performing a video camera pipe inspection",
    built: true,
  },
  {
    title: "Re-Piping",
    description:
      "Full and partial re-piping for homes and businesses with aging or failing pipe systems.",
    href: "/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Whole home re-piping service in Las Vegas",
    built: true,
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting for sewer lines and drain pipes throughout Las Vegas.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trenchless Piping",
  serviceType: "Trenchless Pipe Repair",
  description:
    "Red Carpet Plumbing provides trenchless piping services for homes and businesses throughout the Las Vegas Valley, including CIPP pipe lining, pipe bursting, trenchless sewer line repair, under-slab pipe repair, and lateral lining. Nevada Contractor License #0048585A.",
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
      name: "Trenchless Piping",
      item: "https://redcarpetplumbing.com/trenchless-piping/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Trenchless Pipe Work",
  description:
    "The trenchless piping process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: TRENCHLESS_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trenchless Piping Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides trenchless pipe repair and replacement throughout the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/trenchless-piping/",
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
        name: "Trenchless Piping",
        item: "https://redcarpetplumbing.com/trenchless-piping/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TRENCHLESS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function TrenchlessPipingPage() {
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
            { label: "Trenchless Piping" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Trenchless Piping Services
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Trenchless pipe repair and replacement for homes and businesses throughout the Las Vegas Valley, without major excavation."
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
            label: "Request Trenchless Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={
            <QuoteFormPlaceholder title="Get a Trenchless Piping Quote" />
          }
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/trenchless-piping/hero.webp",
            alt: "Small excavation site for trenchless piping service in Las Vegas",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for trenchless piping"
        />

        {/* SECTION 3: WHAT IS TRENCHLESS AND WHEN YOU NEED IT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Trenchless Pipe Repair and Replacement
                <br className="hidden sm:block" /> in Las Vegas
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing provides trenchless piping services for
                homes and businesses throughout the Las Vegas Valley. Trenchless methods repair or replace damaged sewer
                and drain pipes from small access points, avoiding the major
                excavation required by traditional pipe replacement. A video
                camera inspection is required first to confirm whether a
                pipe is a suitable trenchless candidate.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {TRENCHLESS_USE_CASES.map((useCase) => (
                <article
                  key={useCase.title}
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {useCase.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: TRENCHLESS PIPING SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Trenchless Piping Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of trenchless
                    sewer and drain pipe services for residential and
                    commercial properties throughout the Las Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved trenchless service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {TRENCHLESS_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY TRENCHLESS PIPING MAKES SENSE IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Trenchless Piping Makes Sense
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas combines caliche hardpan soil, valuable
                    hardscape, and predictable pipe damage patterns that
                    together make trenchless methods especially practical
                    for many sewer line repairs. Some pipes still require
                    traditional excavation, and a camera inspection is the
                    deciding factor.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_TRENCHLESS_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Trenchless Pipe Work
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Trenchless work depends on accurate diagnosis and
                    appropriate method selection. Here is how Red Carpet
                    Plumbing approaches a trenchless project from initial
                    call to post-work confirmation.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {TRENCHLESS_STEPS.map((step, index) => (
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
                  Need Trenchless Pipe Repair
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides trenchless piping services
                  for homes and businesses throughout the Las Vegas Valley.
                  No major excavation. NV Contractor License #0048585A.
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
                Trenchless Piping Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides trenchless pipe repair and
                replacement throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/trenchless-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/trenchless-piping/ not yet built */}
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
                Trenchless Piping Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {TRENCHLESS_FAQS.map((faq) => (
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
              Need Trenchless Pipe Repair
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              trenchless piping services throughout the Las Vegas Valley.
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
