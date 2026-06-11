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
    "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional slab leak detection and repair throughout Las Vegas and the Las Vegas Valley. Acoustic detection, pipe rerouting, epoxy lining. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides professional slab leak detection and repair throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    type: "website",
  },
};

const SLAB_LEAK_FAQS = [
  {
    question: "What is a slab leak?",
    answer:
      "A slab leak is a leak in the water or sewer pipes running beneath or embedded in a home's concrete foundation. In Las Vegas, most slab leaks occur in copper water lines that have been thinned by hard water mineral corrosion over decades of exposure. Slab leaks can also occur in sewer lines beneath the foundation. Both types can cause significant foundation and structural damage if not addressed promptly.",
  },
  {
    question: "What are the signs of a slab leak in Las Vegas?",
    answer:
      "The most common signs are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or hot spots on the floor (especially on tile or concrete), damp spots on flooring near walls, unexplained cracks in walls or flooring, a musty odor from floors or lower walls, and reduced water pressure throughout the home.",
  },
  {
    question: "What causes slab leaks in Las Vegas homes?",
    answer:
      "The primary causes in Las Vegas are hard water mineral corrosion that thins copper pipe walls over decades of exposure, caliche and expansive clay soil movement that stresses pipes beneath the foundation, aging pipe materials in homes built before 2000, and pressure stress from closed-loop plumbing systems. Las Vegas has some of the highest rates of slab leaks in the country due to these combined conditions.",
  },
  {
    question: "How is a slab leak detected?",
    answer:
      "Professional slab leak detection uses acoustic sensors to listen for the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the leak precisely before any repair begins.",
  },
  {
    question: "What are my options for slab leak repair?",
    answer:
      "The three main options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the pipe; pipe rerouting through walls or ceilings to bypass the damaged section entirely; and epoxy pipe lining, which seals cracks from the inside without excavation. The right option depends on the leak location, pipe condition, pipe age, and what sits above the leak.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak?",
    answer:
      "For isolated leaks in pipes that are otherwise in good condition, spot repair can be appropriate. For leaks in older pipes that have been thinned by hard water over decades, which describes many Las Vegas homes built before 2000, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from under the slab entirely and eliminates the source of future slab leaks on that line.",
  },
  {
    question: "How long does slab leak repair take?",
    answer:
      "Detection typically takes a few hours. Spot repair through concrete usually takes one to two days including concrete patching. Pipe rerouting typically takes one to three days depending on the complexity of the plumbing layout. Epoxy lining timelines vary based on pipe length and configuration. Red Carpet Plumbing will give you a timeline estimate before work begins.",
  },
  {
    question:
      "Does Red Carpet Plumbing detect and repair slab leaks throughout Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides slab leak detection and repair throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities in the Las Vegas Valley.",
  },
];

const TRUST_STRIP_ITEMS = [
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed, #0048585A",
  "Over 40 Years in Las Vegas",
  "24/7 Emergency Service",
  "Transparent Pricing, No Hidden Fees",
];

const SLAB_LEAK_WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or hot spots on the floor, especially on tile or concrete",
  "Damp spots on flooring near walls",
  "Unexplained cracks in walls or flooring",
  "A musty odor from floors or lower walls",
  "Reduced water pressure throughout the home",
];

type ServiceTypeCard = {
  title: string;
  description: string;
  href: string;
};

// TODO: Replace ServiceImagePlaceholder with approved slab leak service image when available
const SLAB_LEAK_SERVICES: ServiceTypeCard[] = [
  {
    title: "Slab Leak Detection",
    description:
      "Red Carpet Plumbing uses professional acoustic sensors, electronic detection equipment, and pressure testing to locate slab leaks precisely before any repair begins. Accurate detection is essential to a slab leak repair because the right repair method and the scope of work depend entirely on knowing the exact location and severity of the leak.",
    href: "/slab-leak-detection-repair/detection/",
  },
  {
    title: "Spot Repair Through Concrete",
    description:
      "For isolated slab leaks in accessible locations, direct access repair through the concrete slab is an option. This involves cutting through the concrete at the leak location, repairing or replacing the damaged pipe section, and patching the concrete. Spot repair is appropriate when the leak is truly isolated and the surrounding pipe is in good condition.",
    href: "/slab-leak-detection-repair/spot-repair/",
  },
  {
    title: "Pipe Rerouting",
    description:
      "Pipe rerouting abandons the damaged pipe under the slab entirely and installs new water lines through walls, ceilings, or attic spaces to bypass the foundation. Rerouting eliminates the source of future slab leaks on the affected line and avoids ongoing foundation disruption. It is particularly appropriate when older pipes have multiple failure points or when the pipe material has reached the end of its service life.",
    href: "/slab-leak-detection-repair/pipe-rerouting/",
  },
  {
    title: "Epoxy Pipe Lining",
    description:
      "For some slab leak situations, epoxy pipe lining is an option. A specialized epoxy coating is applied to the interior of the existing pipe, sealing cracks and restoring pipe integrity from the inside without excavation. This method is less invasive than concrete cutting and works best for pipes with localized damage where the overall pipe structure is still intact.",
    href: "/slab-leak-detection-repair/epoxy-lining/",
  },
  {
    title: "Pressure Testing",
    description:
      "We use pressure testing to confirm active water loss in the plumbing system, isolate which line is losing pressure, and verify that repairs are complete and the line holds pressure after work is finished. Pressure testing is a standard part of the slab leak detection and verification process.",
    href: "/slab-leak-detection-repair/pressure-testing/",
  },
  {
    title: "Thermal Imaging",
    description:
      "Thermal imaging detects temperature differences caused by hot water leaking beneath the slab, showing up as warm spots on the floor surface. We use thermal imaging as part of the detection process for hot water line slab leaks to supplement acoustic detection and narrow the search area before pressure testing confirms the location.",
    href: "/slab-leak-detection-repair/thermal-imaging/",
  },
  {
    title: "Emergency Slab Leak Response",
    description:
      "Active slab leaks that are causing water to surface on flooring, flooding enclosed spaces, or producing visible water damage require immediate attention. Red Carpet Plumbing is available 24/7 for emergency slab leak response. The first priority is stopping the water loss. We can shut off the water supply to the affected line to stop ongoing damage while the full repair is planned.",
    href: "/slab-leak-detection-repair/emergency/",
  },
  {
    title: "Commercial Slab Leak Detection and Repair",
    description:
      "Slab leaks in commercial buildings, multi-unit residential properties, and HOA communities present unique challenges due to the size and complexity of the plumbing systems involved. Red Carpet Plumbing provides slab leak detection and repair for commercial properties throughout Las Vegas and the Las Vegas Valley.",
    href: "/slab-leak-detection-repair/commercial/",
  },
];

const LV_SLAB_LEAK_FACTORS = [
  {
    title: "Hard Water Mineral Corrosion in Embedded Pipes",
    body: "Las Vegas water measures approximately 280 parts per million of dissolved minerals, making it among the hardest municipal water in the United States. Most Las Vegas homes built from the 1960s through the 1990s have copper water lines embedded in or running beneath the concrete slab. Over decades of exposure to this hard water, calcium and magnesium deposits build up inside the pipe walls, thinning them from the inside out. When the pipe wall becomes thin enough, the pressure of the water supply causes it to crack or develop a pinhole leak beneath the slab.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "The Las Vegas Valley sits on caliche (calcium carbonate-cemented soil) and expansive clay that shifts significantly with temperature changes, rare rainfall, and soil saturation. This soil movement puts constant stress on pipes buried beneath and embedded in concrete foundations. Even small soil shifts can create friction points where pipe contacts concrete rebar or aggregate, eventually wearing through the pipe wall. Soil settlement can also stress pipe joints and connections beneath the slab, causing connection failures that present as slab leaks.",
  },
  {
    title: "Aging Copper and Polybutylene Pipes",
    body: "Many Las Vegas homes built before 2000 still have original copper plumbing. After 30 to 50 years of exposure to Las Vegas hard water, these pipes have been continuously thinned by mineral corrosion. Homes built between the mid-1970s and mid-1990s may also have polybutylene pipes, which are particularly prone to sudden failure. When these aging pipe materials develop their first slab leak, it is often a sign that the rest of the line is approaching similar failure, making a repair approach that addresses the full line rather than just the immediate leak worth considering.",
  },
  {
    title: "Pressure Stress from Closed-Loop Systems",
    body: "Most Las Vegas homes operate on closed-loop plumbing systems due to backflow preventers at the street meter. Thermal expansion from water heating causes repeated pressure spikes in the plumbing system that stress pipe walls and joints. Over years of exposure, these pressure cycles accelerate pipe fatigue, particularly in pipes already thinned by hard water corrosion. The combination of mineral corrosion and repeated pressure stress is a primary driver of slab leaks in Las Vegas homes with older plumbing.",
  },
];

const SLAB_LEAK_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Accurate location is essential because the repair method depends on the leak's position relative to the foundation, the pipe routing, and the structures above. We do not begin any repair until we have confirmed the exact leak location.",
  },
  {
    name: "Assess the pipe condition and repair options",
    body: "We assess the age and material of the affected pipe, the severity of the leak, whether additional failure points are likely on the same line, and what sits above the leak location. This assessment determines whether spot repair through concrete, pipe rerouting, or epoxy lining is the most appropriate solution for your specific situation.",
  },
  {
    name: "Present repair options clearly before starting work",
    body: "We explain each applicable repair option, including what it involves, how long it takes, what access is required, and what the job will cost, before any work begins. We do not start a slab leak repair without your understanding and approval of the approach. If you have questions about why one method is recommended over another for your situation, we answer them.",
  },
  {
    name: "Complete the repair and verify the line holds pressure",
    body: "After completing the repair, we pressure test the affected line to confirm it holds pressure and the leak is fully resolved. We do not close up the work area until testing confirms the repair is complete and the system is performing correctly.",
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
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Advanced leak detection equipment in use at a Las Vegas home",
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
    title: "Re-Piping",
    description:
      "Whole-home and commercial re-piping to replace aging, corroded, or failing pipe systems.",
    href: "/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Professional re-piping service for a Las Vegas home",
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
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides professional slab leak detection and repair for homes and businesses throughout Las Vegas and the Las Vegas Valley, including acoustic leak detection, pressure testing, thermal imaging, spot repair, pipe rerouting, and epoxy pipe lining.",
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
      name: "Slab Leak Detection and Repair",
      item: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Detects and Repairs Slab Leaks",
  description:
    "The slab leak detection and repair process used by Red Carpet Plumbing for Las Vegas homes and businesses.",
  step: SLAB_LEAK_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional slab leak detection and repair throughout Las Vegas and the Las Vegas Valley. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SLAB_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SlabLeakDetectionAndRepairPage() {
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
            { label: "Slab Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              Slab Leak Detection and Repair
              <br className="hidden sm:block" /> in Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing detects and repairs slab leaks for homes and businesses throughout Las Vegas and the Las Vegas Valley. Slab leaks are one of the most serious plumbing problems a Las Vegas homeowner can face. Our licensed plumbers use professional detection equipment to locate the leak precisely and explain all repair options before any work begins."
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
            label: "Request Slab Leak Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for slab leak service"
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

        {/* SECTION 3: SIGNS OF A SLAB LEAK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Have
                <br className="hidden sm:block" /> a Slab Leak
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                A slab leak can develop gradually beneath your home&apos;s
                foundation and cause significant damage before any visible sign
                appears. Recognizing the warning signs early helps you act
                before the leak causes foundation cracking, mold growth, or
                extensive flooring damage.
              </p>
            </div>

            <article className="mt-12 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Warning Signs of a Slab Leak
              </h3>
              <ul className="mt-4 space-y-3">
                {SLAB_LEAK_WARNING_SIGNS.map((item) => (
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
                The Water Meter Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off every water fixture and appliance in the home. Find
                your water meter near the street in a ground-level box and
                check whether the dial or digital display is still moving. If
                the meter continues to advance with all water off, water is
                being used somewhere in your system. Call a plumber for a
                professional inspection to locate the source.
              </p>
            </article>

            <p className="mt-10 max-w-3xl text-base leading-7 text-brand-dark/80">
              Slab leaks can cause serious foundation and structural damage if
              left untreated. If you notice any of these signs, contact Red
              Carpet Plumbing for professional detection and assessment before
              the damage worsens.
            </p>
          </div>
        </section>

        {/* SECTION 4: SLAB LEAK SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Slab Leak Services
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides professional slab leak
                    detection and repair for residential and commercial
                    properties throughout Las Vegas and the Las Vegas Valley.
                    We locate leaks precisely and present all repair options
                    before any work begins.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved slab leak service image when available */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SLAB_LEAK_SERVICES.map((card) => (
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

        {/* SECTION 5: WHY SLAB LEAKS ARE COMMON IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Slab Leaks Are Common
                    <br className="hidden sm:block" /> in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas has some of the highest rates of slab leaks in
                    the country. The combination of extreme hard water, desert
                    soil conditions, and aging pipe materials in many
                    neighborhoods creates a perfect storm of factors that
                    accelerate underground pipe failure.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LV_SLAB_LEAK_FACTORS.map((factor) => (
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

        {/* SECTION 6: DETECTION AND REPAIR PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing
                    <br className="hidden sm:block" /> Detects and Repairs Slab Leaks
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Slab leak repair requires accurate detection before any
                    repair method can be selected. Here is how Red Carpet
                    Plumbing approaches slab leak work for Las Vegas homes and
                    businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {SLAB_LEAK_STEPS.map((step, index) => (
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
                  Suspected Slab Leak
                  <br className="hidden sm:block" /> in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional slab leak detection
                  and repair throughout Las Vegas and the Las Vegas Valley. We
                  locate leaks precisely before recommending a repair approach
                  and present all options clearly before any work begins.
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
                  Available 24/7 for slab leak emergencies
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
                Slab Leak Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides slab leak detection and repair
                throughout the Las Vegas Valley.
              </p>
              <p className="mt-4 text-base leading-7 text-white/80">
                See our dedicated slab leak pages for{" "}
                <Link
                  href="/las-vegas/slab-leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas
                </Link>
                ,{" "}
                <Link
                  href="/henderson/slab-leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson
                </Link>
                , and{" "}
                <Link
                  href="/green-valley/slab-leak-detection-repair/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Green Valley
                </Link>
                .
              </p>
            </div>

            {/* /las-vegas/, /henderson/, and /green-valley/ slab-leak-detection-repair are live. */}
            {/* TODO-BATCH-FUTURE: add /north-las-vegas/slab-leak-detection-repair/ once built */}
            {/* TODO-BATCH-PHASE3: /summerlin/slab-leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /paradise/slab-leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /spring-valley/slab-leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /enterprise/slab-leak-detection-repair/ not yet built */}
            {/* TODO-BATCH-PHASE3: /boulder-city/slab-leak-detection-repair/ not yet built */}
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
                <br className="hidden sm:block" /> About Slab Leak Repair in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SLAB_LEAK_FAQS.map((faq) => (
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
              <br className="hidden sm:block" /> Slab Leak Service in Las Vegas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Red Carpet Plumbing is available for slab leak detection and
              repair throughout Las Vegas and the Las Vegas Valley. Licensed
              plumbers, 4.8-star rated, NV #0048585A.
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
