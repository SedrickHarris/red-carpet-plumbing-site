import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title:
    "About Red Carpet Plumbing | Las Vegas Plumbing Company",
  description:
    "Red Carpet Plumbing is a local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers, 24/7 emergency service, transparent pricing. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/about/",
  },
  openGraph: {
    title:
      "About Red Carpet Plumbing | Las Vegas Plumbing Company",
    description:
      "Local, family-owned Las Vegas plumbing company with over 40 years of experience. NV Licensed #0048585A. 4.8 stars, 76 reviews.",
  },
};

const ABOUT_FAQS = [
  {
    question: "How long has Red Carpet Plumbing been in business?",
    answer:
      "Red Carpet Plumbing has been serving Las Vegas homes and businesses for over 40 years. The company is a local, family-owned plumbing business with deep experience in the specific plumbing conditions, water quality, and climate challenges that affect properties throughout the Las Vegas Valley.",
  },
  {
    question: "Is Red Carpet Plumbing licensed?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which covers residential and commercial plumbing and heating work in Nevada. Licensed plumbers handle every job.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve residential and commercial customers?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for both residential homeowners and commercial customers including businesses, restaurants, and property managers throughout the Las Vegas Valley.",
  },
  {
    question:
      "What makes Red Carpet Plumbing different from a national plumbing franchise?",
    answer:
      "Red Carpet Plumbing is a local, family-owned Las Vegas plumbing company, not a national franchise. When you call Red Carpet Plumbing, you are working with a neighbor who has served the Las Vegas community for over 40 years and has a direct stake in doing the job right for local customers.",
  },
  {
    question:
      "Does Red Carpet Plumbing offer emergency plumbing service?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service throughout the Las Vegas Valley. Emergency services include burst pipes, sewer backups, water heater failures, gas line issues, and other urgent plumbing situations.",
  },
  {
    question: "How do I contact Red Carpet Plumbing?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request through the contact page at redcarpetplumbing.com/contact/. For plumbing emergencies, calling directly is recommended for the fastest response.",
  },
];

const TRUST_PILLARS = [
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
    body: "Every job Red Carpet Plumbing takes on is handled by licensed plumbing professionals. NV Contractor License #0048585A (C-1 Plumbing and Heating).",
  },
  {
    title: "24/7 Emergency Service",
    body: "Plumbing emergencies happen outside of business hours. Red Carpet Plumbing is available 24 hours a day, 7 days a week for emergency plumbing situations throughout the Las Vegas Valley.",
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

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Red Carpet Plumbing | Las Vegas Plumbing Company",
  description:
    "Red Carpet Plumbing is a local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers, 24/7 emergency service, transparent pricing. NV #0048585A.",
  url: "https://redcarpetplumbing.com/about/",
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
        name: "About",
        item: "https://redcarpetplumbing.com/about/",
      },
    ],
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
      name: "About",
      item: "https://redcarpetplumbing.com/about/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ABOUT_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com",
  telephone: "+17025679172",
  email: "info@redcarpetplumbing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3330 W. Hacienda Ave Ste. 405",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89118",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
  ],
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
  sameAs: [
    "https://share.google/oY5LcfC0lhWJXVjJj",
    "https://www.facebook.com/redcarpetplumbing/",
    "https://www.instagram.com/redcarpetplumbing/",
    "https://x.com/redcarpetplumb",
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={plumberSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline={
            <>
              About Our Las Vegas
              <br className="hidden sm:block" /> Plumbing Company
            </>
          }
          subheading="Red Carpet Plumbing is a local, family-owned plumbing company that has been serving homes and businesses throughout the Las Vegas Valley for over 40 years."
          trustItems={[
            "Over 40 Years Serving Las Vegas",
            "Local, Family-Owned Business",
            "Licensed Plumbers, NV #0048585A",
            "4.8 Stars, 76 Google Reviews",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request a Quote",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A | 4.8 Stars, 76 Reviews"
          accentWidth="sm"
          backgroundImage={{
            src: "/images/company/vehicles/branded-vehicle.webp",
            alt: "Red Carpet Plumbing service vehicle in Las Vegas",
          }}
        />

        {/* SECTION 1b: DIRECT ANSWER (AEO: "Who is Red Carpet Plumbing?") */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24">
            <p className="text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing is a local, family-owned plumbing company
              serving homes and businesses throughout the Las Vegas Valley. The
              company holds Nevada Contractor License #0048585A under the C-1
              Plumbing and Heating classification, covering residential and
              commercial plumbing and heating work in Nevada. Services include
              emergency plumbing, drain cleaning, leak detection and repair,
              water heater repair and installation, slab leak detection and
              repair, sewer line services, re-piping, gas line plumbing, and
              commercial plumbing. Call (702) 567-9172 to schedule service.
            </p>
          </div>
        </section>

        {/* SECTION 2: WHO WE ARE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                A Las Vegas Plumbing Company
                <br className="hidden sm:block" /> You Can Count On
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Red Carpet Plumbing is a local, family-owned plumbing
                company based in Las Vegas, Nevada. We have been serving
                homes and businesses throughout the Las Vegas Valley for
                over 40 years. We are not a national franchise. When you
                call Red Carpet Plumbing, you are calling a neighbor who
                understands the specific plumbing demands of desert living
                and has built a reputation in this community by doing the
                job right.
              </p>
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Our licensed plumbers serve residential homeowners,
                commercial businesses, property managers, and real estate
                professionals throughout Las Vegas, Henderson, North Las
                Vegas, Summerlin, Paradise, Spring Valley, Enterprise,
                Boulder City, Green Valley, Lake Las Vegas, and
                surrounding communities. From emergency plumbing and drain
                cleaning to water heater repair, slab leak detection,
                re-piping, and gas line service, we handle the full range
                of residential and commercial plumbing needs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR COMMITMENT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Red Carpet Plumbing
                <br className="hidden sm:block" /> Stands For
              </h2>
            </div>
            <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TRUST_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: WHAT WE DO */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Plumbing Services for
                <br className="hidden sm:block" /> Las Vegas Homes and Businesses
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Red Carpet Plumbing offers a full range of residential and
                commercial plumbing services throughout the Las Vegas
                Valley. Our services include emergency plumbing, drain
                cleaning, leak detection and repair, water heater repair
                and installation, slab leak detection and repair, sewer
                line services, re-piping, gas line plumbing, commercial
                plumbing, and more. See our full list of plumbing services
                at{" "}
                <Link
                  href="/plumbing-services/"
                  className="font-medium text-brand-primary hover:underline"
                >
                  plumbing services
                </Link>
                .
              </p>
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Whether you need an urgent repair, a scheduled
                installation, or a full assessment of your home&apos;s
                plumbing system, our licensed plumbers are ready to help.
                We serve both residential homeowners and commercial
                customers including businesses, restaurants, and property
                managers throughout the Las Vegas Valley. Call (702)
                567-9172 or{" "}
                <Link
                  href="/contact/"
                  className="font-medium text-brand-primary hover:underline"
                >
                  contact us online
                </Link>{" "}
                to schedule service.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: LAS VEGAS PLUMBING CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Local Expertise
                <br className="hidden sm:block" /> Matters in Las Vegas
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Hard Water and Desert Conditions
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Las Vegas has some of the hardest municipal water in the
                  United States. High mineral content accelerates corrosion
                  in copper supply lines, clogs faucet aerators and shower
                  fixtures faster than soft-water markets, and shortens the
                  lifespan of water heaters and plumbing components
                  throughout the home. Understanding how Las Vegas water
                  conditions affect plumbing systems is part of what makes
                  local experience valuable.
                </p>
              </article>
              <article className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Aging Homes and Desert Soil
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  A significant portion of the Las Vegas Valley housing
                  stock was built between the 1970s and early 2000s. These
                  homes often have aging pipe materials, original fixtures,
                  and plumbing systems that have experienced decades of
                  hard water stress and desert heat cycling. Caliche soil
                  in the valley also shifts and compresses in ways that
                  affect buried pipes and slab-adjacent plumbing. Our
                  plumbers understand these conditions because they have
                  been working in Las Vegas homes for over 40 years.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Serving the Las Vegas Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides residential and commercial
                plumbing services throughout the Las Vegas Valley.
              </p>
            </div>
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
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: LICENSE AND TRUST CREDENTIALS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Licensed, Local, and Accountable
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Red Carpet Plumbing holds Nevada Contractor License
                #0048585A under the C-1 Plumbing and Heating
                classification, issued by the State of Nevada Contractors
                Board. Every plumbing job is handled by licensed
                professionals.
              </p>
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Red Carpet Plumbing has earned a 4.8-star rating across 76
                Google reviews from customers throughout the Las Vegas
                Valley.{" "}
                <a
                  href="https://share.google/oY5LcfC0lhWJXVjJj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-primary hover:underline"
                >
                  Read our Google reviews.
                </a>
              </p>
              <p className="text-base leading-7 text-brand-dark/80 sm:text-lg">
                Our office is located at{" "}
                <a
                  href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-primary hover:underline"
                  aria-label="Get directions to Red Carpet Plumbing on Google Maps"
                >
                  3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118
                </a>
                . Office hours are Monday through Friday, 7:30 AM to 4:30 PM.
                Emergency plumbing service is available 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Common Questions About
                <br className="hidden sm:block" /> Red Carpet Plumbing
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ABOUT_FAQS.map((faq) => (
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
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Work With
              <br className="hidden sm:block" /> a Local Las Vegas Plumber?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
              Call Red Carpet Plumbing. Licensed, family-owned, and serving
              the Las Vegas Valley for over 40 years.
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
