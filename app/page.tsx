import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// TODO: Set `alternates.canonical` and `openGraph.url` (and `metadataBase`)
// once the production domain is confirmed.
export const metadata: Metadata = {
  title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing serves Las Vegas and the Valley with emergency plumbing, drain cleaning, water heaters, leak detection, and more. Call today.",
  openGraph: {
    title: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides residential and commercial plumbing services throughout Las Vegas, Henderson, North Las Vegas, Summerlin, and nearby communities. Call or request service online.",
    images: [
      {
        url: "/images/hero/homepage/hero-primary.webp",
        alt: "Red Carpet Plumbing plumber at work in a Las Vegas home",
      },
    ],
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// Single source of truth: visible FAQ text AND FAQPage JSON-LD share this list.
// ---------------------------------------------------------------------------
const HOMEPAGE_FAQS = [
  {
    question:
      "Does Red Carpet Plumbing offer emergency plumbing service in Las Vegas?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service throughout Las Vegas and the surrounding communities in the Las Vegas Valley. If you have a burst pipe, major leak, drain backup, or other urgent plumbing problem, contact us for immediate support.",
  },
  {
    question: "What areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, the Aliante Area, and nearby communities throughout the Las Vegas Valley. Contact us to confirm service availability in your specific area.",
  },
  {
    question: "What plumbing services does Red Carpet Plumbing provide?",
    answer:
      "Red Carpet Plumbing provides a comprehensive range of plumbing services including emergency plumbing, drain cleaning, leak detection and repair, water heater repair and installation, slab leak detection and repair, sewer line services, re-piping, water pipe repair and replacement, gas line plumbing, commercial plumbing, toilet repair and installation, faucet and sink repair, garbage disposal service, backflow prevention, and video camera plumbing inspections.",
  },
  {
    question: "Why are slab leaks so common in Las Vegas?",
    answer:
      "Slab leaks are common in Las Vegas because desert soil shifts with temperature and moisture changes, which stresses pipes buried beneath concrete foundations. Las Vegas also has very hard water with high mineral content that accelerates pipe corrosion over time. Older homes, particularly those built before 1995, often have copper or galvanized pipe systems that are now reaching the end of their expected lifespan in these conditions.",
  },
  {
    question: "How do I know if I have a water leak in my Las Vegas home?",
    answer:
      "Common signs of a water leak include an unexplained increase in your water bill, the sound of running water when no fixtures are in use, wet spots or warm areas on floors or walls, low water pressure, and mold or mildew odors. If you notice any of these signs, contact a licensed plumber for a professional leak detection inspection.",
  },
  {
    question: "Does Red Carpet Plumbing work with commercial properties?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial plumbing services for businesses, property managers, and commercial properties throughout the Las Vegas Valley. We handle commercial drain cleaning, water heater service, leak repair, backflow prevention, and other commercial plumbing needs.",
  },
  {
    question: "How do I schedule plumbing service with Red Carpet Plumbing?",
    answer:
      "You can schedule plumbing service by calling Red Carpet Plumbing directly or by submitting a service request through the contact form on our website. For emergency plumbing situations, call us for the fastest response.",
  },
  {
    question: "Does hard water in Las Vegas damage plumbing?",
    answer:
      "Yes. Las Vegas has some of the hardest water in the country due to high calcium and magnesium mineral content. Over time, these minerals build up inside pipes and on fixtures, restricting water flow, stressing joints, and accelerating corrosion. Water heaters, faucets, and appliances are all affected by hard water buildup. Regular maintenance and inspections can help identify damage early.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Local Las Vegas Plumber",
  "Residential and Commercial",
  "Emergency Plumbing Service",
  "Transparent Pricing",
  "Licensed Plumbers",
  "Customer Satisfaction Focused",
];

type ServiceCard = {
  title: string;
  description: string;
  image?: string;
  alt: string;
  href: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response to burst pipes, major leaks, and plumbing emergencies throughout Las Vegas.",
    image: "/images/services/emergency-plumbing/card.webp",
    alt: "Twenty four hour emergency plumbing service in Las Vegas",
    href: "/emergency-plumbing/",
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and hydro jetting to clear clogs and restore proper flow.",
    image: "/images/services/drain-cleaning/card.webp",
    alt: "Hydro jetting equipment clearing a tough drain clog",
    href: "/drain-cleaning/",
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection using advanced equipment to find hidden leaks before they cause serious damage.",
    image: "/images/services/leak-detection-repair/card.webp",
    alt: "Advanced leak detection equipment in use at a Las Vegas home",
    href: "/leak-detection-repair/",
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnostics, repair, and installation for traditional and tankless systems.",
    image: "/images/services/water-heater-repair-installation/card.webp",
    alt: "Modern energy efficient water heater installation",
    href: "/water-heater-repair-installation/",
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Specialized slab leak detection and repair for Las Vegas homes where shifting desert soils and hard water accelerate pipe damage.",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    alt: "Home foundation showing signs of a slab leak",
    href: "/slab-leak-detection-repair/",
  },
  {
    title: "Sewer Line Services",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties.",
    image: undefined,
    alt: "Sewer line service and repair in Las Vegas",
    href: "/sewer-line-services/",
  },
  {
    title: "Re-Piping",
    description:
      "Whole-home and commercial re-piping to replace aging, corroded, or failing pipe systems.",
    image: "/images/services/re-piping/hero.webp",
    alt: "Professional re-piping service for a Las Vegas home",
    href: "/re-piping/",
  },
  {
    title: "Commercial Plumbing",
    description:
      "Commercial plumbing services for businesses, property managers, and commercial properties throughout the Las Vegas Valley.",
    image: undefined,
    alt: "Commercial plumbing services in Las Vegas",
    href: "/commercial-plumbing/",
  },
];

const LOCAL_ISSUES = [
  {
    title: "Hard Water and Mineral Buildup",
    body: "Las Vegas has some of the hardest water in the country, with high levels of calcium and magnesium. These minerals accumulate inside pipes, restrict water flow, and accelerate joint and fitting corrosion. Water heaters, faucets, and appliances all wear faster in high mineral-content water.",
  },
  {
    title: "Slab Leaks",
    body: "Desert soil shifts with temperature changes and moisture variation, which stresses pipes buried beneath concrete foundations. Older homes across Paradise, East Las Vegas, and other established neighborhoods often still have copper piping that is approaching the end of its expected service life, increasing slab leak risk.",
  },
  {
    title: "Extreme Temperature Swings",
    body: "Las Vegas temperatures can exceed 110 degrees Fahrenheit in summer and drop near freezing in winter. These swings cause pipes to expand and contract repeatedly, loosening joints and stressing connections over time.",
  },
  {
    title: "Aging Pipe Systems",
    body: "Many Las Vegas homes built before 1995 used copper or galvanized steel piping. Galvanized pipes typically show significant corrosion after 15 to 20 years in Las Vegas conditions. Copper systems from earlier decades are now at or past their expected lifespan in the desert climate.",
  },
  {
    title: "Water Pressure Problems",
    body: "Pressure issues are common across the Las Vegas Valley and can result from aging pressure regulators, mineral buildup inside pipes, or supply line problems. Both high and low water pressure can damage plumbing systems and appliances.",
  },
  {
    title: "High-Demand Commercial Properties",
    body: "Las Vegas commercial and hospitality properties experience heavy daily plumbing use that accelerates wear on drains, fixtures, water heaters, and supply lines. Commercial properties require regular maintenance and faster response to keep operations running.",
  },
];

const SERVICE_AREA_TILES = [
  { label: "Las Vegas", href: "/las-vegas-plumbing-services/" },
  { label: "Henderson", href: "/henderson-plumbing-services/" },
  { label: "North Las Vegas", href: "/north-las-vegas-plumbing-services/" },
  { label: "Paradise", href: "/paradise-plumbing-services/" },
  { label: "Summerlin", href: "/summerlin-plumbing-services/" },
  { label: "Spring Valley", href: "/spring-valley-plumbing-services/" },
  { label: "Enterprise", href: "/enterprise-plumbing-services/" },
  { label: "Boulder City", href: "/boulder-city-plumbing-services/" },
  { label: "Green Valley", href: "/green-valley-plumbing-services/" },
  { label: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { label: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
];

const WHY_CHOOSE_REASONS = [
  {
    title: "Local Las Vegas Expertise",
    body: "We know the plumbing challenges that come with living in the desert Valley. From hard water damage to slab leaks to aging pipe systems, we have hands-on experience with the conditions Las Vegas properties face.",
  },
  {
    title: "Residential and Commercial Service",
    body: "We serve homeowners, property managers, and business owners throughout the Las Vegas Valley. From a single-family home to a commercial building, we bring the same commitment to quality.",
  },
  {
    title: "Clear Communication",
    body: "We explain what is going on, what your options are, and what each option costs before we start any work. No surprises.",
  },
  {
    title: "Emergency Plumbing Available",
    body: "Plumbing emergencies do not keep business hours. Red Carpet Plumbing provides emergency plumbing service when you need it.",
  },
  {
    title: "Quality Workmanship",
    body: "We take care of your home and property throughout every job. Clean work, proper repairs, and attention to detail on every call.",
  },
  {
    title: "Customer Satisfaction Focused",
    body: "Our goal is for every customer to feel confident in the work we did and comfortable calling us again. We stand behind the plumbing services we provide.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD schema payloads
// TODO: When production domain is confirmed, add absolute `url` fields to
// Plumber / WebSite / WebPage payloads and switch `logo` / `image` to
// absolute URLs.
// TODO: Confirm telephone, address (if applicable), opening hours, and
// sameAs profile URLs before publishing.
// ---------------------------------------------------------------------------
const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Red Carpet Plumbing",
  logo: "/images/brand/logo/red-carpet-plumbing-logo.png",
  image: "/images/hero/homepage/hero-primary.webp",
  description:
    "Red Carpet Plumbing provides residential and commercial plumbing services throughout Las Vegas and the Las Vegas Valley, including emergency plumbing, drain cleaning, water heater repair, leak detection, slab leak repair, sewer line services, and re-piping.",
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
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Red Carpet Plumbing",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Company in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing serves Las Vegas and the Valley with emergency plumbing, drain cleaning, water heaters, leak detection, and more. Call today.",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
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
          subheading="Red Carpet Plumbing provides responsive plumbing services for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether you need emergency plumbing support, drain cleaning, water heater repair, leak detection, or sewer line service, our team is ready to help."
          trustItems={[
            "Local Las Vegas plumber",
            "Residential and commercial service",
            "Emergency plumbing available",
            "Transparent pricing, no hidden fees",
          ]}
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          /* TODO: Replace disabled phone CTA with confirmed phone number before launch. */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
          formSlot={<QuoteFormPlaceholder />}
          backgroundImage={{
            src: "/images/hero/homepage/hero-primary.webp",
            alt: "Red Carpet Plumbing plumber at work in a Las Vegas home",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-labelledby="trust-strip-label"
          className="border-y border-brand-surface-alt bg-brand-surface-alt"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p
              id="trust-strip-label"
              className="text-center text-sm font-semibold uppercase tracking-wider text-brand-muted"
            >
              Why Las Vegas Homeowners and Businesses Choose Red Carpet Plumbing
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <CheckIcon className="h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-sm font-medium text-brand-dark">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: EMERGENCY PLUMBING CTA */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Emergency Plumbing in Las Vegas
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Plumbing emergencies can cause serious damage to your home or
                  property. If you are dealing with a burst pipe, major leak,
                  drain backup, water heater failure, or sewer problem, Red
                  Carpet Plumbing is ready to help. We provide emergency
                  plumbing service throughout Las Vegas and the surrounding
                  communities.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 lg:items-end">
                {/* TODO: Replace disabled phone CTA with confirmed phone number before launch. */}
                <span
                  role="button"
                  aria-disabled="true"
                  title="Phone number pending"
                  className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white/85"
                >
                  Get Emergency Plumbing Help
                </span>
                <p className="text-xs text-white/70">Phone number pending</p>
                <Link
                  href="/emergency-plumbing/"
                  className="mt-2 text-sm font-medium text-white underline-offset-4 hover:underline"
                >
                  Learn about our Emergency Plumbing services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE SERVICES PREVIEW */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Las Vegas Plumbing Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                From routine plumbing repairs to emergency response, Red Carpet
                Plumbing provides a full range of residential and commercial
                plumbing services throughout Las Vegas and the Las Vegas Valley.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_CARDS.map((card) => (
                <article
                  key={card.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-surface-alt transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-surface-alt">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <ServiceCardPlaceholder alt={card.alt} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-brand-dark">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-brand-dark/80">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      Learn More
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                See All Plumbing Services
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: LOCAL LAS VEGAS PLUMBING ISSUES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Common Plumbing Issues in Las Vegas Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Las Vegas presents unique plumbing challenges that homeowners
                and property managers face more often here than in most other
                cities. Understanding these issues helps you catch problems
                early and avoid costly repairs.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LOCAL_ISSUES.map((issue) => (
                <article
                  key={issue.title}
                  className="rounded-2xl border-l-4 border-brand-primary bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {issue.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-dark/80">
                    {issue.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVICE AREAS PREVIEW */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Valley Plumbing Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves communities throughout the Las Vegas
                Valley, from the Las Vegas Strip corridor to Summerlin,
                Henderson, North Las Vegas, and beyond.
              </p>
            </div>
            <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {SERVICE_AREA_TILES.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="flex h-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span>{area.label}</span>
                    <span aria-hidden="true" className="text-white/60">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-base text-white/80">
              Also serving Whitney, Winchester, Desert Shores, Sunrise Manor,
              Seven Hills, and other Las Vegas Valley communities. Contact us to
              confirm service availability in your area.
            </p>
            <div className="mt-10 text-center">
              <Link
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                When you call a plumber, you want someone who shows up prepared,
                communicates clearly, and takes care of your home. Here is what
                customers can expect when they work with Red Carpet Plumbing.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {WHY_CHOOSE_REASONS.map((reason) => (
                <article key={reason.title} className="flex flex-col gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark">
                    {reason.title}
                  </h3>
                  <p className="text-base leading-7 text-brand-dark/80">
                    {reason.body}
                  </p>
                </article>
              ))}
            </div>
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
            <dl className="mt-12 space-y-4">
              {HOMEPAGE_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <dt>
                    <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready to Schedule Las Vegas Plumbing Service?"
          body="Whether you have an urgent plumbing problem or want to schedule routine service, Red Carpet Plumbing is ready to help. Call us today or submit a service request online and we will follow up promptly."
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          /* TODO: Replace disabled phone CTA with confirmed phone number before launch. */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
          formSlot={<QuoteFormPlaceholder title="Request Service Today" />}
        />
      </main>

      <SiteFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Small helpers used only on this page.
// ---------------------------------------------------------------------------

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}

function ServiceCardPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="flex h-full w-full items-center justify-center bg-brand-primary"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-16 w-16 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* simple wrench glyph */}
        <path d="M44 8a12 12 0 0 0-11.3 16L10 46.7 17.3 54l22.7-22.7A12 12 0 1 0 44 8z" />
        <circle cx="44" cy="20" r="3" />
      </svg>
    </div>
  );
}
