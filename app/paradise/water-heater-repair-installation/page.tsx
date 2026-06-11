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

// FLAG: VERIFY before publishing — source-site / project claims surfaced in the
// approved brief and shown on this page. Each instance carries an inline FLAG:
//   - 24/7 emergency water heater availability (hero sub-label) — source-site
//   - 4.8-star rating, 76 Google reviews — verify before publishing
//   - "Over 40 years" serving the area — verify before publishing
// License #0048585A (C-1 Plumbing and Heating) is the established project value.
// Schema follows the brief: Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City, because Paradise is unincorporated
// Clark County. No AggregateRating. No standalone LocalBusiness schema.

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Paradise, NV | Red Carpet Plumbing",
  description:
    "Water heater repair and installation in Paradise, NV. Hard water sediment, anode rod service, tankless installation, and Clark County code-compliant work. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/paradise/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Paradise, NV | Red Carpet Plumbing",
    description:
      "Water heater repair, replacement, and tankless installation in Paradise, NV. Licensed plumbers, Clark County code-compliant. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const PARADISE_WATER_HEATER_FAQS = [
  {
    question: "How long do water heaters last in Paradise, NV?",
    answer:
      "Tank water heaters in the Las Vegas Valley typically last 8 to 12 years. Tankless water heaters typically last 15 to 20 years with proper maintenance. Both lifespans are shorter than national averages due to Las Vegas Valley hard water, which deposits mineral scale inside tanks and on heat exchanger surfaces faster than in softer-water cities. Annual flushing and anode rod maintenance extend tank water heater life.",
  },
  {
    question:
      "Why is my water heater making popping and rumbling noises in Paradise?",
    answer:
      "Popping and rumbling noises from a water heater in Paradise are almost always caused by sediment buildup. Las Vegas Valley water carries 17 to 24 grains per gallon of dissolved minerals. These minerals accumulate inside the tank as scale and trap water beneath the sediment layer. When the burner heats the water trapped under the scale, it causes the popping and rumbling sounds. Annual flushing removes the sediment before it hardens and causes damage.",
  },
  {
    question:
      "Do I need a thermal expansion tank for my water heater in Paradise, NV?",
    answer:
      "Most Paradise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When a water heater heats water, the expanding water volume needs somewhere to go. In a closed-loop system, a thermal expansion tank absorbs that pressure. Clark County code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. Red Carpet Plumbing can inspect your setup and install an expansion tank if one is needed.",
  },
  {
    question: "Who issues water heater installation permits in Paradise, NV?",
    answer:
      "Water heater installation permits in Paradise are issued by Clark County, Nevada. Paradise is an unincorporated community within Clark County, so the City of Las Vegas building department does not have jurisdiction over Paradise properties. Red Carpet Plumbing handles permit filing with Clark County for all installations that require permits.",
  },
  {
    question: "Should I repair or replace my water heater in Paradise?",
    answer:
      "For units under 8 years old with a repairable component, repair is usually the right choice. For units 10 years or older, or units with internal tank corrosion, replacement typically makes more financial sense than repeated repairs. Las Vegas Valley hard water shortens water heater lifespan, so older units near or past 10 years with declining performance are strong replacement candidates. Red Carpet Plumbing assesses the unit and gives you an honest recommendation.",
  },
  {
    question:
      "Does Red Carpet Plumbing install tankless water heaters in Paradise?",
    answer:
      "Yes. Red Carpet Plumbing installs tankless water heaters for residential and commercial properties throughout Paradise. In the Las Vegas Valley hard water environment, tankless water heaters require annual descaling to remove mineral deposits from the heat exchanger. We install, service, and descale tankless units. All installations are completed to current Clark County plumbing code.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides water heater repair and installation for homes and businesses throughout Paradise, NV. Las Vegas Valley hard water is among the most demanding in the country for water heater performance, causing sediment to accumulate faster and anode rods to deplete sooner than in most cities. When your water heater stops producing hot water, makes unusual noises, produces rust-colored water, or has reached the end of its service life, call us for an honest assessment and clear options.";

const HERO_TRUST_ITEMS = [
  "Licensed: Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "Residential and commercial water heater service in Paradise",
  "All installations to current Clark County plumbing code",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating, 76 Google reviews",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Serving Paradise and the Las Vegas Valley for over 40 years",
];

// FLAG: source-site claim (24/7 emergency water heater availability) — verify
// before final launch.
const HERO_CTA_NOTE =
  "For emergency water heater failures, we are available 24/7";

// Section 2 — visible <ul>, AEO featured-snippet target.
const WATER_HEATER_SIGNS = [
  "No hot water or hot water that runs out much faster than it used to",
  "Popping, rumbling, or banging noises during heating cycles (sediment buildup)",
  "Rust-colored, cloudy, or discolored hot water",
  "A visible leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that trips repeatedly (electric units)",
  "Water heater age over 10 years with declining performance",
];

// Section 3 — water heater services rendered as labeled card blocks (bold label
// + description), same pattern as the established sibling water heater pages.
const WATER_HEATER_SERVICES = [
  {
    label: "Water Heater Repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light failures, pressure relief valve problems, and sediment buildup. We assess the unit's age and condition honestly before recommending repair or replacement.",
  },
  {
    label: "Water Heater Replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized unit installed to current Clark County code including seismic bracing and thermal expansion tank where required.",
  },
  {
    label: "Tankless Water Heater Installation",
    body: "Tankless water heaters heat water on demand, last 15 to 20 years with proper maintenance, and eliminate standby heat loss. In Paradise, annual descaling is required to remove hard water mineral deposits from the heat exchanger. We install and service tankless units for residential and commercial properties.",
  },
  {
    label: "Water Heater Flush and Maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from tank water heaters before it hardens into scale and reduces heating efficiency. Las Vegas Valley hard water makes annual maintenance more important here than in most cities.",
  },
  {
    label: "Anode Rod Inspection and Replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion. Hard water depletes anode rods significantly faster than the 3 to 5 year national average.",
  },
  {
    label: "Thermal Expansion Tank Installation",
    body: "Most Paradise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Clark County code and most manufacturer warranties require a thermal expansion tank on closed-loop installations. We install expansion tanks on new and existing water heater setups.",
  },
  {
    label: "Gas and Electric Water Heater Service",
    body: "We service both gas and electric tank and tankless water heaters. All gas line work is performed under Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const WATER_HEATER_STEPS = [
  {
    name: "Diagnose the Problem",
    body: "We gather information about the unit including its age, symptoms, and maintenance history. We inspect the unit for sediment buildup, anode rod condition, pressure relief valve function, and visible corrosion before making any recommendations.",
  },
  {
    name: "Assess Repair vs. Replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion or failed tank body, replacement typically makes more long-term financial sense. We give you a clear, honest assessment of both options.",
  },
  {
    name: "Present Your Options",
    body: "Before any work begins, we explain what we found, what the repair or replacement involves, and what it will cost. We do not start work without your approval. If a replacement is needed, we discuss the right size and type for your household's demand and whether tank or tankless is the better fit.",
  },
  {
    // NOTE: the visible Step 4 body below says "If a permit is required for the
    // work performed..."; the brief's Block 4 HowTo schema text says "If a permit
    // is required...". Both are reproduced verbatim — the schema variant is
    // applied via the i === 3 override in howToSchema. Do not collapse the two.
    name: "Complete the Work to Clark County Code",
    body: "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly. If a permit is required for the work performed, we handle permit filing with Clark County.",
  },
];

// Section 7 — area chips, no links (established location-page pattern).
const SERVICE_AREAS = [
  "Las Vegas Strip Corridor",
  "UNLV Area",
  "Tropicana Corridor",
  "Flamingo Corridor",
  "Paradise Valley Estates",
  "East Harmon / Harmon Avenue Corridor",
  "Harry Reid Airport Area",
  "Paradise Road Corridor",
  "Swenson Street Corridor",
  "East Sahara Corridor",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (5 separate blocks; areaServed Place -> Clark County per
// brief, because Paradise is unincorporated Clark County).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Paradise, NV | Red Carpet Plumbing",
  description:
    "Water heater repair and installation in Paradise, NV. Hard water sediment, anode rod service, tankless installation, and Clark County code-compliant work. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/water-heater-repair-installation/",
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
      name: "Paradise Plumbing Services",
      item: "https://redcarpetplumbing.com/paradise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Paradise, NV",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Paradise, NV",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Water heater repair, replacement, tankless installation, flush and maintenance, anode rod service, and thermal expansion tank installation for homes and businesses in Paradise, NV.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    // FLAG: VERIFY telephone and address (carried forward from approved brief).
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
      addressCountry: "US",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Paradise",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 5 renders the matching visible
// step-by-step process (titles + body) on the page. Step 4 schema text matches
// the brief's Block 4 wording.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle a Water Heater Call in Paradise, NV",
  step: WATER_HEATER_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text:
      i === 3
        ? "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly. If a permit is required, we handle permit filing with Clark County."
        : s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARADISE_WATER_HEATER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParadiseWaterHeaterPage() {
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
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Water Heater Repair and Installation in Paradise, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/locations/paradise/ assets exist yet — using the */}
        {/* water-heater service card as the fallback per the image plan. */}
        {/* Swap to a Paradise-specific hero when the client supplies one. */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Paradise, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote={HERO_CTA_NOTE}
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/card.webp",
            alt: "Water heater service in Paradise, NV",
          }}
        />

        {/* SECTION 2: SIGNS YOUR WATER HEATER NEEDS SERVICE (AEO target) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Water Heater Needs Service in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                These are the most common signs that a water heater in Paradise
                needs professional attention. If you notice any of the
                following, contact a licensed plumber for an inspection. For
                urgent situations, see{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WATER_HEATER_SIGNS.map((item) => (
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
            </div>
          </div>
        </section>

        {/* SECTION 3: WATER HEATER SERVICES (labeled card blocks) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles the full range of water heater repair
                and installation for residential and commercial properties in
                Paradise. For a complete overview, see our{" "}
                <Link
                  href="/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {WATER_HEATER_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: WHY HARD WATER IS HARD ON WATER HEATERS (failure factors) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Valley Hard Water Is Hard on Water Heaters in
                    Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Paradise, NV receives the same Las Vegas Valley municipal
                    water supply as the rest of Clark County. At 17 to 24 grains
                    per gallon of dissolved minerals, approximately 280 ppm, it is
                    among the hardest municipal water in the United States. This,
                    combined with the age of Paradise&apos;s residential housing
                    stock and local code requirements, shapes water heater service
                    here.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  <li className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <p className="text-base leading-7 text-brand-dark/80">
                      <strong className="font-semibold text-brand-dark">
                        Hard water mineral buildup.
                      </strong>{" "}
                      Calcium and magnesium deposits accumulate inside water
                      heater tanks and heat exchanger surfaces much faster than in
                      softer-water cities. This sediment reduces heating
                      efficiency, causes the popping and rumbling noises Paradise
                      homeowners commonly report, and shortens tank lifespan.
                      Annual flushing is strongly recommended for all Paradise
                      water heaters.
                    </p>
                  </li>

                  <li className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <p className="text-base leading-7 text-brand-dark/80">
                      <strong className="font-semibold text-brand-dark">
                        Accelerated anode rod depletion.
                      </strong>{" "}
                      The anode rod inside every tank water heater protects the
                      steel tank from internal corrosion by corroding in its
                      place. Las Vegas Valley hard water depletes anode rods
                      significantly faster than the 3 to 5 year national average.
                      An undetected depleted anode rod can lead to rapid internal
                      tank corrosion. Annual inspections that include anode rod
                      checks are strongly recommended.
                    </p>
                  </li>

                  <li className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <p className="text-base leading-7 text-brand-dark/80">
                      <strong className="font-semibold text-brand-dark">
                        Closed-loop pressure system and thermal expansion tank
                        requirement.
                      </strong>{" "}
                      Most Paradise homes operate on a closed-loop system due to
                      backflow preventers at the street meter. Heated water
                      expansion in a closed system causes repeated pressure spikes
                      that stress the tank lining and connections. Clark County
                      code and most manufacturer warranties require a thermal
                      expansion tank on closed-loop installations. If your water
                      heater was installed without one, Red Carpet Plumbing can
                      add it.
                    </p>
                  </li>

                  {/* Permit/code jurisdiction: Clark County — not City of Las Vegas */}
                  <li className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <p className="text-base leading-7 text-brand-dark/80">
                      <strong className="font-semibold text-brand-dark">
                        Clark County seismic bracing requirement.
                      </strong>{" "}
                      Nevada is one of the most seismically active states in the
                      country. Clark County plumbing code requires seismic bracing
                      on all water heater installations, with two heavy-gauge steel
                      straps secured at code-specified heights. Paradise properties
                      fall under Clark County jurisdiction. Red Carpet Plumbing
                      installs all units to current Clark County code. For older
                      Paradise homes with aging copper supply lines, see our{" "}
                      <Link
                        href="/re-piping/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        re-piping
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/slab-leak-detection-repair/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        slab leak detection
                      </Link>{" "}
                      pages.
                    </p>
                  </li>
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: HOW WE HANDLE A WATER HEATER CALL (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle a Water Heater Call in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for water heater service in
                    Paradise, here is our process.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {WATER_HEATER_STEPS.map((step, index) => (
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

        {/* SECTION 6: MID-PAGE CTA (charcoal band) */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Water Heater Problem in Paradise, NV?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides water heater repair and
                  installation throughout Paradise and the Las Vegas Valley. Our
                  licensed plumbers diagnose the problem honestly and give you
                  clear options before any work begins. For emergency water heater
                  failures, see{" "}
                  <Link
                    href="/paradise/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    emergency plumbing in Paradise
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Water Heater Service Areas in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Paradise and the surrounding Las Vegas Valley. Service
                areas within Paradise include:
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            {/* TODO-BATCH-6: add a "leak detection in Paradise" link to */}
            {/* /paradise/leak-detection-repair/ in this closing paragraph when built. */}
            <p className="mt-8 text-base leading-7 text-white/80">
              If your neighborhood is not listed, call (702) 567-9172 to confirm
              coverage. For broader Las Vegas Valley water heater service, see{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and our{" "}
              <Link
                href="/paradise-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Paradise plumbing services
              </Link>{" "}
              page. You can also see{" "}
              <Link
                href="/paradise/drain-cleaning/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                drain cleaning in Paradise
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater FAQs for Paradise, NV Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PARADISE_WATER_HEATER_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready for Water Heater Service in Paradise, NV?"
          body="Do not wait on a failing water heater. Red Carpet Plumbing provides water heater repair and installation throughout Paradise and the Las Vegas Valley, with all work completed to current Clark County plumbing code. Call now or request service online."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service Online",
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
