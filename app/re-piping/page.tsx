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
  title: "Re-Piping Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping in Las Vegas and the Las Vegas Valley. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/re-piping/",
  },
  openGraph: {
    title: "Re-Piping Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides whole-house and partial repiping in Las Vegas and the Las Vegas Valley. PEX and copper repiping, polybutylene and Kitec replacement. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/re-piping/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const REPIPING_FAQS = [
  {
    question: "What are the signs I need to repipe my house?",
    answer:
      "Common signs include recurring leaks in multiple locations, rust-colored or discolored water from the taps, consistently low water pressure throughout the home, frequent pinhole leaks in copper pipes, known defective pipe materials such as polybutylene or Kitec, or a home built before 1990 that still has original plumbing. Multiple slab leaks on the same system are also a strong indicator that repiping is more practical than continued repairs.",
  },
  {
    question: "What pipe materials fail in Las Vegas homes?",
    answer:
      "Three materials are particularly common in Las Vegas homes that need replacement. Polybutylene pipe, used from the mid-1970s through mid-1990s, degrades in chlorinated water and can fail without warning. Kitec pipe, used in the late 1990s through mid-2000s, has brass fittings that corrode in mineral-rich water. Galvanized steel pipe, used in homes built before 1975, corrodes from the inside out over decades of hard water exposure.",
  },
  {
    question:
      "What is the difference between PEX and copper for repiping?",
    answer:
      "PEX is flexible, resists hard water scale buildup, requires fewer fittings, and is faster to install with less drywall disruption. In Las Vegas, PEX runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Copper is a proven material with a long track record, provides excellent water quality, and is naturally resistant to bacteria growth. Red Carpet Plumbing can help you evaluate which material is the better fit for your specific home and conditions.",
  },
  {
    question: "How long does whole-house repiping take?",
    answer:
      "Most single-story Las Vegas homes can be repiped in one to two days. Water is restored each evening on multi-day projects so the household is not without water overnight. Multi-story homes and larger properties take longer. Red Carpet Plumbing will give you a timeline estimate based on your home's size and plumbing layout before work begins.",
  },
  {
    question: "Do I need a permit for repiping in Las Vegas?",
    answer:
      "Yes. A permit is required for whole-house repiping in Las Vegas, Henderson, and North Las Vegas. Repiping without a permit can create issues with home sales and insurance. Red Carpet Plumbing pulls the required permits and schedules the city inspection as part of the repiping project. A closed permit with final inspection sign-off is important documentation for homeowners.",
  },
  {
    question: "What is Kitec pipe and why is it a problem?",
    answer:
      "Kitec is a type of plumbing pipe installed in Las Vegas area homes primarily between the late 1990s and approximately 2005. Kitec has brass fittings that corrode when exposed to minerals in municipal water, eventually failing at the connection points. Las Vegas hard water accelerates Kitec fitting corrosion. Kitec pipes are typically orange or blue with brass fittings. If you have Kitec plumbing, having it evaluated and replaced is strongly recommended.",
  },
  {
    question: "Does repiping increase home value in Las Vegas?",
    answer:
      "A documented whole-house repipe with closed permits and final inspection sign-off removes a major concern for home buyers and inspectors. Homes with known defective pipe materials such as polybutylene or Kitec can face challenges during the sale process. A completed repipe with proper permits and documentation provides buyers with confidence in the plumbing system and can support the home's value in the transaction.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Henderson and Summerlin for repiping?",
    answer:
      "Yes. Red Carpet Plumbing provides repiping services throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "Permits Pulled and Inspections Scheduled",
  "Transparent Pricing, No Hidden Fees",
];

const REPIPING_SIGNS = [
  "Recurring leaks in multiple locations throughout the home",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipes",
  "Known defective pipe materials such as polybutylene or Kitec",
  "A home built before 1990 that still has original plumbing",
  "Multiple slab leaks on the same plumbing system",
  "Reduced water quality affecting taste, odor, or appearance",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved repiping service image when available
const REPIPING_SERVICES: ServiceTypeCard[] = [
  {
    title: "Whole-House Repiping",
    description:
      "Whole-house repiping replaces all supply lines throughout the home from the main water line through to each fixture connection. This is the most comprehensive solution for homes with aging, failing, or defective pipe materials. Red Carpet Plumbing performs whole-house repipes using PEX or copper depending on the home's specific conditions and the homeowner's preferences.",
    href: "/re-piping/whole-house/",
  },
  {
    title: "Partial Repiping",
    description:
      "When only a section of the plumbing system is failing or has been identified as a problem material, partial repiping replaces the affected lines without repiping the entire home. Partial repipes are common when a specific area of the home, such as the kitchen supply lines or the hot water distribution system, has developed recurring problems.",
    href: "/re-piping/partial/",
  },
  {
    title: "Polybutylene Pipe Replacement",
    description:
      "Polybutylene pipe was widely used in homes built from the mid-1970s through the mid-1990s. It is known to degrade over time, particularly in the presence of chlorinated water, and can fail without warning causing sudden flooding. If your home has polybutylene pipes, replacement is strongly recommended. Red Carpet Plumbing replaces polybutylene with PEX or copper to eliminate the risk of sudden failure.",
    href: "/re-piping/polybutylene-replacement/",
  },
  {
    title: "Kitec Pipe Replacement",
    description:
      "Kitec plumbing was installed in Las Vegas area homes primarily between the late 1990s and mid-2000s. It was recalled and banned due to brass fittings that corrode in the presence of minerals in water, causing leaks at the fitting connections. Many Las Vegas homes still have Kitec plumbing. Kitec pipe replacement eliminates the risk of fitting failures and the water damage that follows.",
    href: "/re-piping/kitec-replacement/",
  },
  {
    title: "Galvanized Steel Pipe Replacement",
    description:
      "Homes built before 1975 often have galvanized steel supply lines. Galvanized pipes corrode from the inside out, narrowing the pipe interior, reducing water pressure and water quality, and eventually failing. In Las Vegas, the hard water accelerates galvanized pipe corrosion significantly. Red Carpet Plumbing replaces galvanized steel with PEX or copper to restore full flow, water quality, and pressure.",
    href: "/re-piping/galvanized-replacement/",
  },
  {
    title: "PEX Repiping",
    description:
      "PEX is a flexible, cross-linked polyethylene pipe that is a common choice for whole-house repipes. It resists scale buildup from hard water, handles temperature changes well, requires fewer fittings than rigid pipe, and is faster to install with less drywall disruption. In Las Vegas, PEX pipe runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required insulation.",
    href: "/re-piping/pex/",
  },
  {
    title: "Copper Repiping",
    description:
      "Copper has been a trusted plumbing material for generations. It is durable, long-lasting, naturally resistant to bacteria growth, and provides excellent water quality. For Las Vegas homeowners who prefer a proven material, copper repiping is a long-term investment in the plumbing system. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley.",
    href: "/re-piping/copper/",
  },
  {
    title: "Commercial Repiping",
    description:
      "Red Carpet Plumbing provides repiping services for commercial buildings, multi-unit residential properties, and HOA communities throughout Las Vegas and the Las Vegas Valley. Commercial repiping projects require coordination with building management and code-compliant materials for the occupancy type. We work with commercial property managers and building owners to minimize disruption to occupants during the repiping process.",
    href: "/re-piping/commercial/",
  },
];

const LV_PIPE_FACTORS = [
  {
    title: "Polybutylene Pipes (Homes Built 1975-1995)",
    body: "Polybutylene pipe was widely installed in Las Vegas homes built from the mid-1970s through the mid-1990s. It was used as a less expensive alternative to copper and was popular during the rapid growth period of the Las Vegas Valley. Polybutylene degrades when exposed to chlorine and oxidants in municipal water supplies, causing the pipe walls to become brittle and crack. In Las Vegas, where the hard water also deposits minerals inside the pipe, polybutylene deterioration is further accelerated. The pipe can fail without external warning signs, causing sudden flooding inside walls or under flooring.",
  },
  {
    title: "Kitec Pipes (Homes Built Late 1990s to Mid-2000s)",
    body: "Kitec plumbing was installed in many Las Vegas area homes and condominiums built between the late 1990s and approximately 2005. Kitec pipes have brass fittings that react with the minerals in water and corrode, eventually failing at the connections. The corrosion process is accelerated by Las Vegas hard water. Kitec fittings are orange or blue plastic pipes with brass fittings. If you see these in your home, it is worth having your plumbing evaluated. Kitec was the subject of a class action settlement and its use has been discontinued, but many Las Vegas properties still have it installed.",
  },
  {
    title: "Galvanized Steel Pipes (Homes Built Before 1975)",
    body: "Galvanized steel pipes were the standard in Las Vegas homes built before approximately 1975. Over decades of exposure to Las Vegas hard water, the zinc coating on galvanized steel pipes wears away and the pipe corrodes from the inside out. As corrosion advances, the pipe interior develops a rough, narrowing surface that reduces water pressure and water quality, and eventually the pipe walls fail. Discolored water, reduced pressure, and metallic taste are the most common signs that galvanized pipes are deteriorating.",
  },
  {
    title: "Copper Pipes Thinned by Hard Water (Homes Built 1975-2000)",
    body: "Copper pipes installed in Las Vegas homes built between approximately 1975 and 2000 have been exposed to 25 to 50 years of hard water mineral deposits and corrosion. While copper is a durable material, Las Vegas's extremely hard water, approximately 280 parts per million of dissolved minerals, thins copper pipe walls through a process called pitting corrosion. When copper pipe walls thin sufficiently, they develop pinhole leaks. Multiple pinhole leaks in different parts of the house indicate that the pipe walls have thinned throughout the system, and repiping is a more practical long-term solution than continued spot repairs.",
  },
];

const REPIPING_STEPS = [
  {
    name: "Assess the existing plumbing system",
    body: "We start by identifying the pipe materials present in your home, the age and condition of the system, and the scope of any repiping needed. We assess which areas of the home are affected and whether a whole-house repipe or targeted partial repipe is the right approach. We also identify any permit requirements, which apply to whole-house repipes in Las Vegas, Henderson, and North Las Vegas.",
  },
  {
    name: "Present material options and approach",
    body: "We explain the options for replacement materials, typically PEX or copper for residential repipes, including the pros and cons of each for your specific home and Las Vegas conditions. We present the scope of the project, the installation approach, and what the repiping will involve for your household before any work begins. We do not start work without your approval.",
  },
  {
    name: "Complete the repipe with minimal disruption",
    body: "We protect floors and furniture before cutting drywall access points. We install the new piping, connect all fixtures, and restore water service. Most Las Vegas single-story homes are repiped in one to two days, and water is restored each evening on multi-day projects so you are not without water overnight.",
  },
  {
    name: "Test the system, pull permits, and close out the work",
    body: "After installation, we pressure-test the entire new plumbing system to confirm it is leak-free and all connections are correct. We pull the required permits for whole-house repipes and schedule the city inspection. A closed permit and final inspection sign-off is important documentation for homeowners and is a positive factor in home resale evaluations.",
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
    title: "Emergency Plumbing",
    description:
      "Fast response to burst pipes, major leaks, and plumbing emergencies throughout Las Vegas.",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Twenty four hour emergency plumbing service in Las Vegas",
    built: true,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Re-Piping Services",
  serviceType: "Re-Piping",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping services for homes and businesses throughout Las Vegas and the Las Vegas Valley, including polybutylene pipe replacement, Kitec pipe replacement, galvanized steel pipe replacement, PEX repiping, and copper repiping.",
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
      name: "Re-Piping",
      item: "https://redcarpetplumbing.com/re-piping/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Repiping",
  description:
    "The repiping process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: REPIPING_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Re-Piping Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/re-piping/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: REPIPING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RePipingServicesPage() {
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
            { label: "Re-Piping" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Re-Piping Services
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides whole-house and partial repiping services for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether your home has aging galvanized steel, failed polybutylene or Kitec pipes, or copper pipes thinned by decades of hard water exposure, our licensed plumbers assess your plumbing system and explain your options before any work begins."
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
            label: "Request Repiping Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Repiping Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for repiping"
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

        {/* SECTION 3: SIGNS YOU MAY NEED REPIPING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Need
                <br className="hidden sm:block" /> Repiping
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Most homes are built with plumbing intended to last decades,
                but pipe materials, water conditions, and time all affect when
                replacement becomes necessary. In Las Vegas, hard water, aging
                materials, and known defective pipe products make repiping
                more common here than in many other markets.
              </p>
            </div>

            <article className="mt-12 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Signs Your Plumbing May Need to Be Replaced
              </h3>
              <ul className="mt-4 space-y-3">
                {REPIPING_SIGNS.map((item) => (
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
                When Repiping Makes More Sense Than Repair
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                For a home with multiple failed pipe sections, recurring leaks,
                or known problematic pipe materials, repiping addresses the
                root issue once rather than paying for repeated repairs.
                Multiple slab leaks, repeated pinhole leaks, or failed
                defective pipe materials throughout the system are situations
                where continued repair often costs more over time than a
                planned whole-house repipe.
              </p>
            </article>

            <p className="mt-10 max-w-3xl text-base leading-7 text-brand-dark/80">
              When multiple symptoms point to system-wide pipe failure, a
              whole-house repipe addresses the underlying problem permanently.
              Red Carpet Plumbing assesses your plumbing system and provides
              an honest recommendation about whether repair or repiping is the
              right approach for your home.
            </p>
          </div>
        </section>

        {/* SECTION 4: REPIPING SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Re-Piping Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides the full range of repiping
                    services for residential and commercial properties
                    throughout Las Vegas and the Las Vegas Valley. We assess
                    your existing pipe materials and recommend the right
                    solution for your home.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved repiping service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {REPIPING_SERVICES.map((card) => (
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

        {/* SECTION 5: LAS VEGAS PIPE MATERIALS AND WHY THEY FAIL */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Las Vegas Pipe Materials
                    <br className="hidden sm:block" /> and Why They Fail
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Different pipe materials installed across Las Vegas Valley
                    homes over the past 50 years fail in different ways.
                    Knowing what your home likely has, and how that material
                    behaves over time in Las Vegas conditions, helps you
                    understand whether repiping is appropriate now or in the
                    future.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_PIPE_FACTORS.map((factor) => (
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
                    <br className="hidden sm:block" /> Handles Repiping
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Whole-house repiping is a significant project, but with
                    proper planning and experienced plumbers it is manageable
                    and minimally disruptive. Here is how Red Carpet Plumbing
                    approaches repiping for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {REPIPING_STEPS.map((step, index) => (
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
                  Aging or Failing Pipes
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing assesses your plumbing system, identifies
                  problem pipe materials, and provides honest recommendations
                  about repair versus repiping. We explain all options and
                  costs before any work begins.
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
                  Free assessment of your plumbing system
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
                Re-Piping Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides repiping services throughout the
                Las Vegas Valley.
              </p>
            </div>

            {/* TODO-BATCH-PHASE3: /las-vegas/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /henderson/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /north-las-vegas/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /summerlin/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/re-piping/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/re-piping/ not yet built */}
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
                <br className="hidden sm:block" /> About Re-Piping in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {REPIPING_FAQS.map((faq) => (
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
              <br className="hidden sm:block" /> Re-Piping Service in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for repiping throughout Las
              Vegas and the Las Vegas Valley. Licensed plumbers, permits
              pulled, 4.8-star rated, NV #0048585A.
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
