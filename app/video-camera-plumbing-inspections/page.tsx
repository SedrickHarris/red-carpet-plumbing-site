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
    "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing performs video camera plumbing inspections for homes and businesses throughout Las Vegas. Root intrusion, pipe bellies, blockages, and pre-purchase inspections. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
  },
  openGraph: {
    title:
      "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed video camera plumbing inspections throughout Las Vegas and the Las Vegas Valley. Root intrusion, pipe bellies, pre-purchase. NV #0048585A. 4.8 stars, 76 reviews.",
  },
};

const CAMERA_FAQS = [
  {
    question: "What does a sewer camera inspection show?",
    answer:
      "A sewer camera inspection shows the inside condition of your sewer line or drain pipe in real time. The camera can identify root intrusion from trees seeking moisture inside the pipe, pipe bellies or sags where waste collects and causes repeated clogs, offset or separated pipe joints from soil movement, cracked or collapsed pipe sections, hard water scale or grease buildup narrowing the line, and foreign object blockages. The footage provides a clear diagnosis before any repair decision is made.",
  },
  {
    question: "When do I need a video camera plumbing inspection?",
    answer:
      "A camera inspection is useful when drain cleaning does not fully resolve a recurring clog, when you want to confirm a drain line is clear after cleaning, when you are experiencing unexplained sewer odors or slow drains throughout the house, before buying a home to document the sewer line condition, when a plumber suspects root intrusion or pipe damage, or after a plumbing repair to confirm the work resolved the problem. In Las Vegas, where caliche soil and mature landscaping create specific pipe stress conditions, camera inspections are a practical diagnostic step for homes with older sewer lines.",
  },
  {
    question: "How long does a sewer camera inspection take?",
    answer:
      "A standard sewer camera inspection typically takes thirty minutes to one hour for a single line, depending on the length of the line, the presence of obstructions, and the access point available. If a cleanout is not already installed, additional time may be needed to establish access. Red Carpet Plumbing can provide an accurate time estimate when you call to schedule.",
  },
  {
    question: "Can a camera inspection find root intrusion?",
    answer:
      "Yes. Root intrusion is one of the most common findings in sewer camera inspections throughout Las Vegas. Desert trees including mesquite, olive, and some ornamental trees send roots into sewer lines seeking moisture, and those roots can partially or fully block the line over time. A camera inspection shows the location and extent of root intrusion so the plumber can recommend the appropriate clearing or repair approach.",
  },
  {
    question:
      "Should I get a sewer inspection before buying a home in Las Vegas?",
    answer:
      "Yes. A pre-purchase sewer camera inspection documents the condition of the sewer line before closing and can identify root intrusion, pipe belly, cracked sections, or offset joints that would otherwise be unknown. In Las Vegas, caliche soil movement and aging sewer infrastructure in neighborhoods built before the 1990s make sewer line condition a meaningful variable in home purchase decisions. The recorded footage can also support repair negotiations if problems are found.",
  },
  {
    question: "Does a sewer camera inspection require digging?",
    answer:
      "No. A video camera inspection is a non-invasive diagnostic process. The camera is inserted through an existing cleanout access point and fed through the pipe. No excavation is needed for the inspection itself. If a cleanout is not available, a plumber may need to install one to gain access. Clark County recommends two-way cleanouts for sewer line maintenance access, and one can be added as part of the inspection service if needed.",
  },
  {
    question: "What is a pipe belly and how does a camera find it?",
    answer:
      "A pipe belly is a section of sewer line that has sagged below the surrounding grade, creating a low point where waste and water collect instead of flowing through. In Las Vegas, caliche soil and uneven desert ground conditions contribute to pipe belly formation, particularly in older sewer lines. A camera inspection shows these low spots in real time, and the sonde locator can mark the surface position of the sag for targeted repair.",
  },
  {
    question:
      "What areas does Red Carpet Plumbing serve for video camera plumbing inspections?",
    answer:
      "Red Carpet Plumbing provides video camera plumbing inspections throughout Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  "4.8 Stars, 76 Google Reviews",
  "Residential and Commercial Service",
  "Over 40 Years in Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

const CAMERA_USE_CASES = [
  {
    title: "Recurring Drain Clogs That Won't Stay Cleared",
    body: "If a drain backs up repeatedly after cleaning, the cause may be root intrusion, a pipe belly collecting waste, or a partial blockage further down the line that a snake cannot fully clear. A camera inspection identifies the exact cause and location before any additional work is done.",
  },
  {
    title: "Before Buying a Home",
    body: "A pre-purchase sewer camera inspection documents the condition of the sewer line before closing. In Las Vegas, where caliche soil movement and aging sewer infrastructure are common, sewer line condition is a meaningful variable in home purchase decisions. The recorded footage can support repair negotiations if problems are found.",
  },
  {
    title: "Confirm a Line Is Clear After Drain Cleaning",
    body: "A camera inspection after hydro jetting or drain cleaning confirms the line is fully clear and checks for structural issues that may have been masked by the blockage.",
  },
  {
    title: "Unexplained Sewer Odors or Slow Drains",
    body: "Persistent sewer smells or slow drains throughout the house without an obvious cause often point to a crack, offset joint, or partial blockage in the main line that is not immediately visible.",
  },
  {
    title: "Older Homes with Aging Sewer Infrastructure",
    body: "Homes built before the 1990s in Las Vegas may have original clay or cast iron sewer lines. A camera inspection assesses the condition of these older materials and identifies corrosion, cracks, or root intrusion before they cause a failure.",
  },
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved camera inspection service image when available
const CAMERA_SERVICES: ServiceTypeCard[] = [
  {
    title: "Sewer Line Camera Inspection",
    description:
      "Full video inspection of the main sewer line to identify root intrusion, pipe bellies, offset joints, cracks, and blockages.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Drain Line Camera Inspection",
    description:
      "Camera inspection of kitchen, bathroom, and utility drain lines to locate blockages and confirm line condition after cleaning.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Pre-Purchase Sewer Inspection",
    description:
      "Sewer camera inspection for home buyers to document sewer line condition before closing on a Las Vegas property.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Root Intrusion Inspection and Assessment",
    description:
      "Camera inspection to identify and locate root intrusion from trees and landscaping that have entered sewer lines.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Pipe Belly and Offset Joint Detection",
    description:
      "Camera inspection to identify sags, bellies, and offset joints caused by soil movement in Las Vegas sewer lines.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Post-Cleaning Confirmation Inspection",
    description:
      "Camera inspection after drain cleaning or hydro jetting to confirm the line is fully clear and free of structural damage.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Commercial Pipe Camera Inspection",
    description:
      "Video camera inspection of commercial sewer and drain lines for businesses, restaurants, and property managers throughout Las Vegas.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Cleanout Installation and Inspection",
    description:
      "Installation of sewer cleanout access points where none exist, followed by camera inspection of the line.",
    href: "/video-camera-plumbing-inspections/",
  },
];

const LV_CAMERA_FACTORS = [
  {
    title: "Caliche Soil and Pipe Belly Formation",
    body: "The Las Vegas Valley sits on caliche-rich desert soil that compresses and shifts unevenly as it dries and re-wets through cycles of desert heat and periodic rain. This soil movement displaces sewer lines over time, creating bellies (sags) where the pipe has dropped below the surrounding grade. Waste and water collect in these low points instead of flowing through, causing recurring clogs that drain cleaning alone will not permanently resolve. A camera inspection with a sonde locator identifies the location and depth of pipe bellies from above ground, allowing for targeted repair without unnecessary excavation.",
  },
  {
    title: "Root Intrusion from Desert Landscaping",
    body: "Desert-adapted trees and shrubs including mesquite, olive trees, and some ornamental varieties have aggressive root systems that seek moisture in dry conditions. Sewer lines in Las Vegas neighborhoods with mature landscaping are a common target. Roots enter through small cracks and joint gaps, then grow inside the pipe until they partially or fully block flow. Camera inspections show root intrusion in real time and allow the plumber to assess whether hydro jetting can clear the roots or whether a structural repair is needed.",
  },
  {
    title: "Pre-Purchase Inspections in an Active Market",
    body: "The Las Vegas residential real estate market moves quickly, and many properties for sale were built in the 1980s and 1990s when older pipe materials were still in common use. A pre-purchase sewer camera inspection documents the condition of the sewer line and can identify root intrusion, pipe belly, cracked sections, or offset joints before the buyer closes. The recorded footage provides a permanent record and can support price negotiation or repair requests if problems are found. Scheduling an inspection before the due diligence period closes is the most effective timing.",
  },
  {
    title: "Hard Water Scale Visible Inside Pipes",
    body: "Las Vegas hard water deposits calcium and magnesium scale inside drain pipes and sewer lines over time, particularly in older sections with slower flow. A camera inspection can show the extent of mineral buildup inside the line, which is useful diagnostic information when deciding between drain cleaning, pipe lining, or section replacement. Scale buildup that significantly narrows the pipe diameter is a long-term flow restriction that cleaning alone will not eliminate.",
  },
];

const CAMERA_STEPS = [
  {
    name: "Call and Schedule",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing or what you need inspected. We schedule a licensed plumber equipped with video camera inspection equipment.",
  },
  {
    name: "Access and Camera Setup",
    body: "The plumber accesses the sewer line or drain pipe through an existing cleanout or suitable access point. If no cleanout is available, we can discuss installation options before the inspection begins.",
  },
  {
    name: "Live Camera Inspection",
    body: "The waterproof camera is fed through the pipe on a flexible cable. The plumber monitors the live feed and identifies any root intrusion, blockages, pipe bellies, offset joints, cracks, or scale buildup. The sonde locator marks surface positions of any problem areas.",
  },
  {
    name: "Review Findings and Recommend Next Steps",
    body: "We walk you through what the camera found, explain the condition of the line, and recommend the appropriate next steps, whether that is drain cleaning, targeted repair, or continued monitoring. You have the information needed to make a confident decision.",
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
      "Professional drain cleaning and hydro jetting for sewer lines, kitchen drains, and bathroom drains throughout Las Vegas.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
  {
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties in Las Vegas.",
    href: "/sewer-line-services/",
    built: true,
  },
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
    title: "Trenchless Piping",
    description:
      "Trenchless pipe repair and replacement methods that minimize excavation and disruption to your property.",
    href: "/trenchless-piping/",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Video Camera Plumbing Inspections",
  serviceType: "Video Camera Plumbing Inspection",
  description:
    "Red Carpet Plumbing performs video camera plumbing inspections for homes and businesses throughout Las Vegas and the Las Vegas Valley, including sewer line camera inspection, drain line inspection, pre-purchase sewer inspection, root intrusion assessment, pipe belly detection, and post-cleaning confirmation. Nevada Contractor License #0048585A.",
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
      name: "Video Camera Plumbing Inspections",
      item: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Performs a Camera Inspection",
  description:
    "The video camera plumbing inspection process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: CAMERA_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing performs video camera plumbing inspections for homes and businesses throughout Las Vegas and the Las Vegas Valley. NV Licensed #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
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
        name: "Video Camera Plumbing Inspections",
        item: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CAMERA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function VideoCameraPlumbingInspectionsPage() {
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
            { label: "Video Camera Plumbing Inspections" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Video Camera Plumbing Inspections
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Video camera inspection of sewer lines and drain pipes for homes and businesses throughout Las Vegas and the Las Vegas Valley."
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
            label: "Request a Camera Inspection",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          formSlot={
            <QuoteFormPlaceholder title="Get a Camera Inspection Quote" />
          }
          accentWidth="sm"
          backgroundImage={{
            src: "/images/services/video-camera-plumbing-inspections/hero.webp",
            alt: "Licensed plumber performing a video camera pipe inspection",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for camera inspections"
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

        {/* SECTION 3: WHEN YOU NEED A CAMERA INSPECTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When a Video Camera Inspection
                <br className="hidden sm:block" /> Makes Sense
              </h2>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark sm:text-lg">
                Red Carpet Plumbing performs video camera plumbing inspections
                for homes and businesses throughout Las Vegas and the Las
                Vegas Valley. A camera inspection lets a licensed plumber see
                inside sewer lines, drain pipes, and supply connections to
                identify blockages, root intrusion, pipe damage, and other
                issues without excavation.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {CAMERA_USE_CASES.map((useCase) => (
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

        {/* SECTION 4: VIDEO CAMERA INSPECTION SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Video Camera Inspection Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing handles the full range of video
                    camera inspection services for residential and commercial
                    sewer and drain lines throughout Las Vegas and the Las
                    Vegas Valley.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved camera inspection service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {CAMERA_SERVICES.map((card, index) => (
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

        {/* SECTION 5: WHY SEWER CAMERA INSPECTIONS MATTER IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Sewer Camera Inspections Matter
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    The Las Vegas Valley combines caliche desert soil, hard
                    water, mature desert landscaping, and older sewer
                    infrastructure in many neighborhoods. These conditions
                    create specific patterns of pipe stress that camera
                    inspections are especially well suited to diagnose.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_CAMERA_FACTORS.map((factor) => (
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
                    How Red Carpet Plumbing Performs
                    <br className="hidden sm:block" /> a Camera Inspection
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Camera inspections require equipment, access, and an
                    experienced eye. Here is how Red Carpet Plumbing
                    approaches a sewer or drain camera inspection in Las
                    Vegas.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {CAMERA_STEPS.map((step, index) => (
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
                  Need a Sewer Camera Inspection
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing performs video camera plumbing
                  inspections for homes and businesses throughout the Las
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
                Video Camera Inspection Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing performs video camera plumbing inspections
                throughout the Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/video-camera-plumbing-inspections/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/video-camera-plumbing-inspections/ not yet built */}
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
                Video Camera Inspection Questions Answered
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {CAMERA_FAQS.map((faq) => (
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
              Need a Video Camera Plumbing Inspection
              <br className="hidden sm:block" /> in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, local, and available for
              sewer line and drain camera inspections throughout the Las
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
