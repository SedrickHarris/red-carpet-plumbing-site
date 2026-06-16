import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency service" trust claims are source-site
// claims surfaced in the approved brief and shown on this page. License
// #0048585A and transparent-pricing are also source-site claims. Confirm all
// before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed Place (Green Valley) + containedInPlace City (Henderson)
// + containedInPlace State Nevada; WebPage isPartOf WebSite; 5 separate JsonLd
// blocks; HowTo for the visible process steps). No AggregateRating schema.
// Green Valley is a community within the incorporated City of Henderson — never
// described as a city or unincorporated community.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
  // FLAG: description below is the approved brief string (~178 chars). It
  // exceeds the site's ≤160 meta-description standard; kept as approved pending
  // a trim decision. See build report.
  description:
    "Non-invasive slab leak detection and repair in Green Valley, Henderson, NV. Acoustic sensors, pressure testing, thermal imaging. All repair options explained. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed slab leak detection and repair for original Green Valley and Green Valley Ranch homes. Non-invasive methods, all repair options explained. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. Visible FAQ section AND FAQPage JSON-LD both derive
// from this single array. Character-for-character match required.
// Do not edit one without the other.
// ---------------------------------------------------------------------------
const GV_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Green Valley home?",
    answer:
      "The most common signs of a slab leak in a Green Valley home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the slab and cannot be seen directly.",
  },
  {
    question: "Why are slab leaks common in Green Valley, Henderson?",
    answer:
      "Green Valley's slab leak risk is driven by aging copper and polybutylene pipes in the original neighborhoods, which have been exposed to Las Vegas Valley hard water for 30 to 45 years. Hard water mineral corrosion thins pipe walls continuously over that period. Caliche and expansive clay soil movement beneath Green Valley's slab foundations adds mechanical stress to those pipes. Closed-loop system pressure cycling accelerates pipe fatigue in pipes already compromised by corrosion. Original Green Valley homes represent the highest concentration of slab leak risk in Henderson.",
  },
  {
    question:
      "Are slab leaks more common in original Green Valley than in newer Henderson neighborhoods?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the late 1970s through the mid-1990s, have copper supply lines with 30 to 45 years of hard water mineral exposure, and some homes contain polybutylene pipe that is prone to sudden failure without warning. These conditions make original Green Valley homes significantly more susceptible to slab leaks than newer Henderson construction. Green Valley Ranch homes, built from the mid-1990s through the mid-2000s, carry a lower but still present risk as they reach 20 to 30 years of age.",
  },
  {
    question:
      "How is a slab leak detected in Green Valley without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the slab leak precisely before any concrete cutting begins.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in Green Valley?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For original Green Valley homes where copper or polybutylene lines have been thinned by 30 to 45 years of hard water corrosion, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely and eliminates the source of future slab leaks on that line. Red Carpet Plumbing assesses pipe condition and presents both options before any repair begins.",
  },
  {
    question: "How long does slab leak repair take in Green Valley?",
    answer:
      "Detection typically takes a few hours. Spot repair through concrete usually takes one to two days including concrete patching. Pipe rerouting typically takes one to three days depending on the plumbing layout and the length of line being bypassed. Epoxy lining timelines vary based on pipe length and configuration. Red Carpet Plumbing will provide a timeline estimate before work begins.",
  },
];

// ---------------------------------------------------------------------------
// Slab-specific warning signs — visible <ul> in Section 2.
// Warm floors is bullet 1 (most distinctive slab sign).
// ---------------------------------------------------------------------------
const SLAB_WARNING_SIGNS: string[] = [
  "Warm or hot spots on your floors",
  "The sound of running water when all fixtures are off",
  "An unexplained increase in your water bill",
  "Damp or wet flooring without an obvious source",
  "Cracks appearing in walls, floors, or at the base of walls",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// ---------------------------------------------------------------------------
// Detection methods — Section 3. Three titled H3 article cards.
// ---------------------------------------------------------------------------
const DETECTION_METHODS: { title: string; body: string }[] = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes beneath the slab. Trained technicians use this equipment to identify the leak location to within a few inches through the floor surface without cutting or demolition. For original Green Valley homes with aging copper or polybutylene supply lines, acoustic detection pinpoints the failure location before any repair approach is selected.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active slab leak and identifying which line is affected. For Green Valley homes with multiple aging pipe runs, pressure testing helps narrow the detection area efficiently. We also use pressure testing after all repairs to confirm the line holds pressure before closing up the work area.",
  },
  {
    title: "Thermal Imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates temperature differences visible on floor surfaces. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

// ---------------------------------------------------------------------------
// Why slab leaks are common in Green Valley — four cause factors.
// Original GV copper leads per established pattern. H3 titles + body.
// ---------------------------------------------------------------------------
const GV_SLAB_CAUSES: { title: string; body: string }[] = [
  {
    title: "Aging Pipes in Green Valley's Original Neighborhoods",
    body: "Green Valley's original neighborhoods, developed from the late 1970s through the mid-1990s, carry the highest slab leak risk in Henderson. Homes in this era were built primarily with copper supply lines that have now been exposed to Las Vegas Valley hard water for 30 to 45 years. Over that period, dissolved minerals have continuously thinned pipe walls from the inside out, creating conditions where under-slab failures are increasingly common. Some homes from this era also contain polybutylene pipe, a gray plastic material widely installed from the late 1970s through the mid-1990s that is prone to sudden failure without warning. Green Valley Ranch, developed from the mid-1990s through the mid-2000s, carries a lower but still present slab leak risk as those homes reach 20 to 30 years of age.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "Green Valley sits on caliche and expansive clay soils that shift with seasonal temperature changes and rainfall. This soil movement places ongoing mechanical stress on pipes running beneath concrete slab foundations, creating friction points where pipe contacts rebar or aggregate and stressing joints and connections under the slab. Original Green Valley neighborhoods, where pipes are already thinned by hard water corrosion, carry the highest combined risk from this factor.",
  },
  {
    title: "Hard Water Mineral Corrosion",
    body: "Green Valley receives the same Las Vegas Valley municipal water supply as the rest of Henderson, drawn from Lake Mead and measuring 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This places Green Valley among the hardest municipal water environments in the United States. Sustained hard water exposure thins copper pipe walls from the inside out continuously over decades, accelerating the rate of pinhole leaks and under-slab failures throughout original Green Valley homes.",
  },
  {
    title: "Closed-Loop System Pressure Cycling",
    body: "Most Green Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Water heating causes thermal expansion that creates repeated pressure spikes in the closed system. Over years, these pressure cycles accelerate pipe fatigue in pipes already thinned by hard water corrosion and stressed by caliche soil movement. The combination of corrosion, soil stress, and pressure cycling is the primary driver of slab leaks in original Green Valley homes.",
  },
];

// ---------------------------------------------------------------------------
// Repair options — Section 5. Three H3 article cards.
// Spot repair links to /water-pipe-repair-replacement/.
// Rerouting links to the built /green-valley/re-piping/ route.
// Epoxy has no link.
// ---------------------------------------------------------------------------
const REPAIR_OPTIONS: {
  heading: string;
  body: string;
  linkPre?: string;
  linkHref?: string;
  linkText?: string;
  linkPost?: string;
  todo?: string;
}[] = [
  {
    heading: "Spot repair through concrete",
    body: "Spot repair involves cutting the concrete slab directly above the leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is a focused approach appropriate for an isolated leak in a pipe that is otherwise in good condition. For original Green Valley homes where the surrounding pipe has been thinned by decades of hard water corrosion, a single spot repair may be followed by another leak on the same aging line.",
    linkPre: " See our ",
    linkHref: "/water-pipe-repair-replacement/",
    linkText: "water pipe repair and replacement",
    linkPost: " services.",
  },
  {
    heading: "Pipe rerouting",
    body: "Pipe rerouting bypasses the damaged section entirely by running a new supply line through walls, ceilings, or accessible above-slab pathways, removing the aging pipe from beneath the foundation. For original Green Valley homes where copper or polybutylene supply lines have been thinned by 30 to 45 years of hard water exposure, rerouting is often the more durable long-term solution because it eliminates the source of future slab leaks on that line.",
    linkPre: " See our ",
    // ACTIVATED: /green-valley/re-piping/ (P34) built and committed.
    linkHref: "/green-valley/re-piping/",
    linkText: "Green Valley re-piping services",
    linkPost:
      " for homes where the full supply system may be approaching similar age and condition.",
  },
  {
    heading: "Epoxy pipe lining",
    body: "Epoxy pipe lining applies a specialized coating to the interior of the existing pipe, sealing cracks and restoring pipe integrity from the inside without excavation. This method is less invasive than concrete cutting and works best for pipes with localized damage where the overall pipe structure is still intact. It is not appropriate for pipes with extensive corrosion or significantly narrowed interior diameter.",
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match visible numbered process on the page exactly.
// ---------------------------------------------------------------------------
const GV_SLAB_STEPS: { name: string; body: string }[] = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Accurate location is essential because the repair method depends on the leak's position relative to the foundation, the pipe routing, and what sits above. For original Green Valley homes with aging copper or polybutylene supply lines, we also assess the condition of the surrounding pipe as part of the detection process.",
  },
  {
    name: "Assess the pipe condition and repair options",
    body: "We assess the age and material of the affected pipe, the severity of the leak, whether additional failure points are likely on the same line, and what sits above the leak location. This assessment determines whether spot repair, pipe rerouting, or epoxy lining is the most appropriate solution for your specific Green Valley home.",
  },
  {
    name: "Present repair options clearly before starting work",
    body: "We explain each applicable repair option, including what it involves, how long it takes, what access is required, and what the job will cost, before any work begins. We do not start a slab leak repair without your understanding and approval of the approach.",
  },
  {
    name: "Complete the repair and verify the line holds pressure",
    body: "After completing the repair, we pressure test the affected line to confirm it holds pressure and the leak is fully resolved. We do not close up the work area until testing confirms the repair is complete.",
  },
];

// ---------------------------------------------------------------------------
// Trust strip — 4 items matching Henderson slab sibling pattern.
// ---------------------------------------------------------------------------
const SLAB_TRUST_STRIP: string[] = [
  "Non-Invasive Detection",
  // FLAG: verify before final launch.
  "NV Licensed, #0048585A",
  "All Repair Options Explained",
  "Residential and Commercial",
];

// ---------------------------------------------------------------------------
// Related services block. All Green Valley sibling routes (P30-P34) are built
// and linked, including /green-valley/re-piping/.
// ---------------------------------------------------------------------------
const RELATED_SERVICES: { label: string; href?: string }[] = [
  {
    label: "Green Valley Plumbing Services",
    href: "/green-valley-plumbing-services/",
  },
  {
    label: "Henderson Plumbing Services",
    href: "/henderson-plumbing-services/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
  },
  {
    label: "Henderson Slab Leak Detection",
    href: "/henderson/slab-leak-detection-repair/",
  },
  {
    label: "Green Valley Leak Detection and Repair",
    href: "/green-valley/leak-detection-repair/",
  },
  {
    label: "Green Valley Drain Cleaning",
    href: "/green-valley/drain-cleaning/",
  },
  {
    label: "Green Valley Water Heater Repair",
    href: "/green-valley/water-heater-repair-installation/",
  },
  // ACTIVATED: /green-valley/re-piping/ (P34) built and committed.
  { label: "Green Valley Re-Piping", href: "/green-valley/re-piping/" },
];

// ---------------------------------------------------------------------------
// Communities grid.
// ---------------------------------------------------------------------------
const GV_COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Duck Creek Area" },
  { name: "Paseo Verde Parkway Area" },
  { name: "Warm Springs Area" },
  { name: "Seven Hills" },
  { name: "Anthem" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Henderson", href: "/henderson-plumbing-services/" },
];

const HERO_TRUST_ITEMS = [
  // FLAG: verify before publishing.
  "4.8 stars, 76 Google reviews",
  // FLAG: verify before final launch.
  "NV Licensed, #0048585A",
  // FLAG: verify before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: source-site claim — verify before final launch.
  "24/7 emergency service",
  // FLAG: source-site claim — verify before final launch.
  "Transparent pricing, no hidden fees",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Green Valley is a community within the incorporated City of
// Henderson, so Service.areaServed uses Place (Green Valley) -> containedInPlace
// City (Henderson) -> containedInPlace State (Nevada). Do NOT use City for
// Green Valley. Do NOT use AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes in Green Valley, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging. All repair options explained. Original Green Valley copper and polybutylene pipe expertise.",
  url: "https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
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
      name: "Green Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Slab Leak Detection and Repair in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in Green Valley",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides slab leak detection and repair for homes in Green Valley, Henderson, NV using acoustic sensors, pressure testing, and thermal imaging. Repair options include spot repair through concrete, pipe rerouting, and epoxy pipe lining. Nevada Contractor License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Green Valley, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Slab Leaks in Green Valley",
  description:
    "The process Red Carpet Plumbing follows for slab leak detection and repair in Green Valley, Henderson, NV.",
  step: GV_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GreenValleySlabLeakPage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            {
              label: "Green Valley Plumbing Services",
              href: "/green-valley-plumbing-services/",
            },
            { label: "Slab Leak Detection and Repair in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Green Valley, Henderson, NV"
          subheading="Slab leaks are among the most damaging plumbing problems in Green Valley, particularly in the original neighborhoods where aging copper and polybutylene pipes have been under hard water stress for 30 to 45 years. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, and presents all repair options before any work begins."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Non-invasive detection. All repair options explained."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Slab leak detection and repair in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <TrustStrip
          items={SLAB_TRUST_STRIP}
          ariaLabel="Why Green Valley customers choose Red Carpet Plumbing for slab leak service"
        />

        {/* SECTION 2: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Green Valley Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                The most common signs of a slab leak in a Green Valley home are
                warm or hot spots on floors, the sound of running water when all
                fixtures are off, and an unexplained increase in your water bill.
                Hidden slab leaks beneath concrete foundations can cause
                significant structural and water damage before any visible sign
                appears above the surface.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {SLAB_WARNING_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              If you notice one or more of these signs in your Green Valley home,
              call Red Carpet Plumbing at (702) 567-9172 or request service
              online. Slab leaks cause ongoing water loss and can damage your
              foundation if left undetected. For more on Green Valley plumbing
              conditions, see our{" "}
              <Link
                href="/green-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Green Valley plumbing services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 3: HOW NON-INVASIVE DETECTION WORKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Slab Leak Detection Works in Green Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a slab leak does not require breaking open large sections
                of concrete to search. Red Carpet Plumbing uses professional
                non-invasive detection methods to pinpoint the leak location
                before recommending a repair approach. For a broader overview, see
                our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                services and our{" "}
                <Link
                  href="/green-valley/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Green Valley leak detection and repair
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {DETECTION_METHODS.map((m) => (
                <article
                  key={m.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY SLAB LEAKS ARE COMMON IN GREEN VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Slab Leaks Are Common in Green Valley, Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Green Valley&apos;s combination of aging pipe materials, hard
                    water, and desert soil conditions creates elevated slab leak
                    risk, particularly in the original communities that were
                    developed from the late 1970s through the mid-1990s.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {GV_SLAB_CAUSES.map((c) => (
                    <li
                      key={c.title}
                      className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: REPAIR OPTIONS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Repair Options in Green Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing presents all applicable repair options before
                any work begins. The right option depends on the leak location,
                the age and condition of the affected pipe, whether additional
                failure points are likely on the same line, and what sits above
                the repair area.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {REPAIR_OPTIONS.map((o) => (
                <article
                  key={o.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {o.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {o.body}
                    {o.linkHref ? (
                      <>
                        {o.linkPre}
                        <Link
                          href={o.linkHref}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {o.linkText}
                        </Link>
                        {o.linkPost}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Slab Leaks in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a slab leak inspection
                    in Green Valley, our licensed plumbers follow a consistent
                    process to locate the leak precisely and present your repair
                    options before any concrete is cut.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_SLAB_STEPS.map((step, index) => (
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
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspected Slab Leak in Green Valley?
                </h2>
                {/* FLAG: source-site claim — verify emergency availability before final launch */}
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Slab leaks cause ongoing water loss beneath your foundation and
                  can lead to structural damage if left undetected. Red Carpet
                  Plumbing provides non-invasive slab leak detection throughout
                  Green Valley and Henderson. Call or request service online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREA / COMMUNITIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Green Valley and Nearby Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides slab leak detection and repair
                throughout Green Valley, part of the incorporated City of
                Henderson. We serve both the original Green Valley neighborhoods
                and Green Valley Ranch, along with nearby Henderson communities.
                For full Henderson plumbing service details, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-brand-surface-alt px-5 py-3 font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt transition-colors hover:text-brand-primary-hover hover:shadow-md"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-brand-surface-alt bg-white px-5 py-3 font-medium text-brand-dark/80">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For Henderson-wide slab leak detection and repair, see our{" "}
              <Link
                href="/henderson/slab-leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Henderson slab leak detection
              </Link>{" "}
              page.
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Plumbing Services
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RELATED_SERVICES.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                      >
                        <span aria-hidden="true" className="text-brand-primary">
                          &rarr;
                        </span>
                        {s.label}
                      </Link>
                    </li>
                  ) : (
                    // Fallback render branch for href-less related items (currently unused).
                    <li key={s.label}>
                      <span className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark/70 ring-1 ring-brand-surface-alt">
                        <span aria-hidden="true" className="text-brand-primary">
                          &rarr;
                        </span>
                        {s.label}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak FAQs for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_SLAB_FAQS.map((faq) => (
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Suspected Slab Leak<br />in Green Valley, Henderson?</>}
          body="Do not wait on a suspected slab leak. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide non-invasive slab leak detection and repair throughout Green Valley and Henderson."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
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
