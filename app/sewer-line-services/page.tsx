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
  title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout Las Vegas and the Las Vegas Valley. Trenchless options available. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const SEWER_LINE_FAQS = [
  {
    question: "What are the signs of a damaged sewer line?",
    answer:
      "Common signs include multiple slow drains or backups throughout the home at the same time, sewage odor inside the home or yard, gurgling sounds from toilets or drains when water is used elsewhere, water backing up into tubs or floor drains when flushing, wet spots or soggy ground in the yard near the sewer line path, and drain problems that recur shortly after clearing.",
  },
  {
    question: "What causes sewer line problems in Las Vegas?",
    answer:
      "The most common causes in Las Vegas are aging cast iron or clay sewer lines that have corroded or cracked over decades, desert tree root intrusion from mesquite, olive, and palm trees seeking moisture in dry soil, caliche and expansive clay soil movement that stresses pipe joints and creates pipe belly conditions, and hard water mineral scale that reduces flow capacity over time.",
  },
  {
    question: "What is trenchless sewer repair?",
    answer:
      "Trenchless sewer repair fixes or replaces damaged sewer lines without digging a trench along the full length of the pipe. The two main trenchless methods are CIPP lining, which creates a new pipe inside the old one by inserting and curing a resin-saturated liner, and pipe bursting, which fractures the old pipe outward while pulling a new pipe into place. Both require only small access points rather than full excavation of the yard or driveway.",
  },
  {
    question: "How does CIPP pipe lining work?",
    answer:
      "Cured-in-place pipe lining inserts a resin-saturated liner into the existing damaged sewer pipe through a cleanout access point. The liner is inflated, positioned correctly, and then cured in place using heat or UV light. When the resin hardens, it forms a seamless new pipe inside the old one, sealing cracks, preventing root intrusion, and restoring the structural integrity of the line. The process requires minimal excavation and is typically completed in one day.",
  },
  {
    question: "How do I know if I need sewer line repair or replacement?",
    answer:
      "A sewer camera inspection is the most reliable way to determine whether repair or replacement is appropriate. Lines with localized damage in otherwise sound pipe can often be repaired. Lines with extensive corrosion, multiple damage points, severe structural deterioration, or complete collapse typically require replacement. Red Carpet Plumbing will show you the camera footage and explain what it means before recommending a course of action.",
  },
  {
    question: "What is pipe belly and why does it matter?",
    answer:
      "Pipe belly is a low spot or sag in a sewer line caused by soil settling beneath the pipe. Water and solids pool in the belly rather than flowing to the municipal sewer, creating recurring blockages and the conditions for sewage backup. Pipe belly is common in Las Vegas due to caliche and expansive clay soil movement. Hydro jetting can clear debris from a belly, but the structural condition of the line typically determines whether the belly needs to be addressed with repair or replacement.",
  },
  {
    question: "How long does sewer line repair take?",
    answer:
      "Sewer camera inspection typically takes one to two hours. Sewer line cleaning with hydro jetting is usually completed in a few hours. Trenchless CIPP lining is typically completed in one day. Pipe bursting and traditional excavation and replacement timelines vary based on the length of line and site conditions. Red Carpet Plumbing will give you a timeline estimate after the camera inspection.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Henderson and Summerlin for sewer line services?",
    answer:
      "Yes. Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

const SEWER_WARNING_SIGNS = [
  "Multiple slow drains or backups throughout the home at the same time",
  "Sewage odor inside the home or yard",
  "Gurgling sounds from toilets or drains when water is used elsewhere",
  "Water backing up into tubs or floor drains when flushing",
  "Wet spots or soggy ground in the yard near the sewer line path",
  "Drain problems that recur shortly after clearing",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved sewer line service image when available
const SEWER_LINE_SERVICES_LIST: ServiceTypeCard[] = [
  {
    title: "Sewer Camera Inspection",
    description:
      "A sewer camera inspection lets us see exactly what is happening inside your sewer line before recommending any repair. We insert a high-resolution camera into the line from a cleanout access point and inspect the interior in real time. Camera inspections identify blockages, root intrusion, corrosion, cracks, pipe offsets, and other structural issues accurately without any digging.",
    href: "/sewer-line-services/camera-inspection/",
  },
  {
    title: "Sewer Line Cleaning",
    description:
      "Sewer line cleaning removes accumulated grease, scale, debris, and soft root intrusion from the interior of sewer lines using cable machines or hydro jetting. For main sewer lines with significant hard water mineral scale or grease accumulation, hydro jetting uses high-pressure water to scour the pipe walls clean. Sewer line cleaning restores full flow capacity and is a recommended maintenance service for Las Vegas homes with older cast iron or clay sewer lines.",
    href: "/sewer-line-services/cleaning/",
  },
  {
    title: "Sewer Line Repair",
    description:
      "For sewer lines with localized damage, including cracks, offsets, or root damage at a specific section, targeted repair restores the line without replacing the entire run. We recommend the repair method based on the location, type, and extent of the damage and the condition of the surrounding pipe material.",
    href: "/sewer-line-services/repair/",
  },
  {
    title: "Sewer Line Replacement",
    description:
      "When a sewer line has extensive corrosion, multiple damage points, collapse, or severe structural deterioration, full replacement is the most durable long-term solution. Sewer line replacement can be performed using traditional excavation or trenchless methods depending on the property layout, pipe depth, and condition of the existing line.",
    href: "/sewer-line-services/replacement/",
  },
  {
    title: "Trenchless CIPP Pipe Lining",
    description:
      "Cured-in-place pipe lining (CIPP) is a trenchless sewer repair method that creates a new pipe inside the existing one. A resin-saturated liner is inserted into the damaged pipe through a cleanout access point, inflated, and cured in place, creating a seamless, corrosion-resistant inner pipe that seals cracks, prevents root intrusion, and restores structural integrity without excavation. CIPP is well-suited for Las Vegas properties where excavating through established landscaping, driveways, or hardscaping would be disruptive and costly.",
    href: "/sewer-line-services/cipp-lining/",
  },
  {
    title: "Pipe Bursting",
    description:
      "Pipe bursting is a trenchless sewer replacement method for lines that are too damaged for lining but where excavation is undesirable. A bursting head is pulled through the existing damaged pipe, fracturing it outward while simultaneously pulling a new pipe into place behind it. Pipe bursting replaces the sewer line with minimal excavation and is appropriate when the pipe alignment is intact but the pipe material has failed beyond repair.",
    href: "/sewer-line-services/pipe-bursting/",
  },
  {
    title: "Root Intrusion Removal and Treatment",
    description:
      "Desert tree roots are a major cause of sewer line blockages and damage in Las Vegas. Mesquite, olive, palm, and oleander roots penetrate sewer lines through small cracks and aging joints, growing into root masses that restrict or completely block flow. We clear root intrusion mechanically and with hydro jetting, and we use camera inspection to assess the damage the roots have caused to the pipe structure.",
    href: "/sewer-line-services/root-intrusion/",
  },
  {
    title: "Emergency Sewer Line Service",
    description:
      "Complete sewer backups that are causing sewage to surface in the home or yard require immediate professional attention. Red Carpet Plumbing is available 24/7 for emergency sewer line response throughout the Las Vegas Valley. Stopping the backup and preventing continued sewage exposure is the immediate priority, and full diagnosis and repair planning follow once the immediate situation is controlled.",
    href: "/sewer-line-services/emergency/",
  },
];

const LV_SEWER_FACTORS = [
  {
    title: "Aging Cast Iron and Clay Sewer Lines",
    body: "Las Vegas experienced rapid residential development from the 1950s through the 1990s, and many homes from that era still have original cast iron or clay sewer lines. Cast iron sewer pipes corrode from the inside out in hard water environments, building up mineral scale that reduces flow capacity and eventually weakens the pipe walls. Clay sewer lines, common in mid-century Las Vegas homes, can crack, shift, and develop joint separation as the surrounding soil moves over decades. Both materials are approaching or past the end of their expected service life in many older Las Vegas neighborhoods.",
  },
  {
    title: "Desert Tree Root Intrusion",
    body: "Las Vegas desert-adapted trees and shrubs have aggressive root systems evolved to search widely for moisture in arid soil. Sewer lines are the most reliable moisture source on most residential properties. Mesquite trees, which are common in Las Vegas landscaping, have root systems that can extend 50 feet or more from the trunk. Olive, palm, and oleander roots also actively seek out sewer line moisture. Small cracks or aging joint separations in sewer pipes provide root entry points, and once inside, root masses grow quickly and can cause complete blockages or structural pipe damage within a short period.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "The Las Vegas Valley sits on a combination of caliche and expansive clay soils that shift with temperature changes and rare heavy rainfall events. Underground sewer lines are particularly vulnerable to soil movement because they run through long horizontal sections of the property. Soil settling can create pipe belly conditions, which are low spots where solids accumulate and eventually cause blockages. Soil movement can also stress pipe joints, creating separation points that allow root intrusion and ground infiltration into the sewer line.",
  },
  {
    title: "Hard Water Mineral Scale Inside Sewer Lines",
    body: "Las Vegas hard water leaves mineral deposits inside sewer lines over time, reducing the interior diameter of the pipe and creating a rough surface that traps grease, debris, and organic material. In older cast iron sewer lines, the combination of hard water scale and internal pipe corrosion significantly accelerates the timeline from a fully functional sewer line to a line requiring repair or replacement. Regular sewer line cleaning is more important in Las Vegas than in most other cities for this reason.",
  },
];

const SEWER_LINE_STEPS = [
  {
    name: "Inspect the sewer line with a camera",
    body: "Before recommending any repair, we inspect the sewer line using a high-resolution camera inserted through a cleanout access point. Camera inspection tells us exactly what is happening inside the line, including the type and location of any blockage, the condition of the pipe walls, whether root intrusion is present, and whether the pipe has cracks, offsets, or structural damage that cleaning alone cannot address.",
  },
  {
    name: "Identify the cause and scope of the problem",
    body: "We report the camera inspection findings to you directly, explaining what we found and what it means for the line. A line that is blocked by soft debris may need only cleaning. A line with significant root intrusion, corrosion, or structural damage may need repair or replacement. Understanding the cause determines the right solution.",
  },
  {
    name: "Present repair options appropriate for your property",
    body: "The right sewer line repair method depends on what the camera found, the age and material of the line, the property layout, and what sits above the damaged section. We explain the applicable options, whether cleaning, CIPP lining, pipe bursting, or excavation and replacement, including what each involves and what it costs, before starting any work.",
  },
  {
    name: "Complete the work and verify the line is clear",
    body: "After cleaning or repair, we run a final camera inspection to confirm the line is clear and functioning correctly. For trenchless repairs, we verify the liner or new pipe is properly installed and the line holds pressure. We do not close the job until we have confirmed the sewer line is performing correctly.",
  },
];

const SERVICE_AREAS = [
  "Las Vegas",
  "Henderson",
  "North Las Vegas",
  "Summerlin",
  "Paradise",
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
      "Professional drain cleaning and hydro jetting to clear clogs and restore proper flow.",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Hydro jetting equipment clearing a tough drain clog",
    built: true,
  },
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
    title: "Slab Leak Detection and Repair",
    description:
      "Specialized slab leak detection and repair for Las Vegas homes where shifting desert soils and hard water accelerate pipe damage.",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Home foundation showing signs of a slab leak",
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
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services",
  serviceType: "Sewer Line Services",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout the Las Vegas Valley, including trenchless CIPP pipe lining, pipe bursting, root intrusion removal, and emergency sewer line service.",
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
      name: "Sewer Line Services",
      item: "https://redcarpetplumbing.com/sewer-line-services/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Sewer Line Service",
  description:
    "The sewer line inspection and repair process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: SEWER_LINE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/sewer-line-services/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEWER_LINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SewerLineServicesPage() {
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
            { label: "Sewer Line Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Sewer Line Services
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout the Las Vegas Valley. From recurring sewer backups and slow drains to damaged lines and root intrusion, our licensed plumbers diagnose the problem accurately and explain all repair options before any work begins."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "NV Licensed Plumbers, #0048585A",
            "Over 40 years serving Las Vegas",
            "Transparent pricing, no hidden fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Sewer Line Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={TRUST_STRIP_ITEMS}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for sewer line service"
        />

        {/* SECTION 3: SIGNS OF A SEWER LINE PROBLEM */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Have
                <br className="hidden sm:block" /> a Sewer Line Problem
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Sewer line problems often start with subtle signs that worsen
                over time. Recognizing these signs early helps you address the
                issue before a complete backup occurs inside the home.
              </p>
            </div>

            <article className="mt-12 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Signs to Call a Plumber
              </h3>
              <ul className="mt-4 space-y-3">
                {SEWER_WARNING_SIGNS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="mt-10 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-muted/40">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                The Multiple-Drain Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                If you suspect a sewer line problem, test by running water from
                a fixture far from another fixture, such as flushing a toilet
                while watching a tub drain. If multiple drains slow, gurgle, or
                back up when water is used elsewhere, the blockage is likely in
                the main sewer line rather than in an individual branch drain.
                Main sewer line problems require professional clearing and
                inspection.
              </p>
            </article>

            <p className="mt-10 max-w-3xl text-base leading-7 text-brand-dark/80">
              When multiple drains are slow, backing up, or producing odor at
              the same time, the problem is typically in the main sewer line. A
              professional camera inspection is the most reliable way to
              identify the cause and the right repair approach.
            </p>
          </div>
        </section>

        {/* SECTION 4: SEWER LINE SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Sewer Line Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides the full range of sewer line
                    services for residential and commercial properties
                    throughout the Las Vegas Valley. We diagnose
                    before we recommend.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved sewer line service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SEWER_LINE_SERVICES_LIST.map((card) => (
                    <ServiceCard
                      key={card.href}
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

        {/* SECTION 5: WHY LAS VEGAS SEWER LINES FAIL FASTER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Sewer Lines
                    <br className="hidden sm:block" /> Fail Faster
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Sewer lines in Las Vegas face a combination of conditions
                    that accelerate pipe failure. Understanding why sewer lines
                    fail faster here helps homeowners recognize the value of
                    inspection and maintenance before a backup occurs.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_SEWER_FACTORS.map((factor) => (
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

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing
                    <br className="hidden sm:block" /> Handles Sewer Line Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Sewer line problems range from blockages that clear with
                    cleaning to structural damage that requires repair or
                    replacement. Here is how Red Carpet Plumbing approaches
                    sewer line service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {SEWER_LINE_STEPS.map((step, index) => (
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
                  Sewer Line Problem
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides sewer line inspection, cleaning,
                  repair, and replacement throughout the Las Vegas Valley. We start with a camera inspection so you know
                  exactly what you are dealing with before any work begins.
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
                <p className="text-sm text-white/60">
                  Available 24/7 for sewer emergencies
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
                Sewer Line Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides sewer line services throughout the
                Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/sewer-line-services/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/sewer-line-services/ not yet built */}
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
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Sewer Line Services in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SEWER_LINE_FAQS.map((faq) => (
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
              Ready to Schedule
              <br className="hidden sm:block" /> Sewer Line Service in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for sewer line inspection,
              cleaning, repair, and replacement throughout the Las Vegas Valley. Licensed plumbers, 4.8-star rated, NV
              #0048585A.
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
                  Request Service
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
