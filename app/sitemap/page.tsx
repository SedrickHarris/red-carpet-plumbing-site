import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OG_IMAGES } from "@/lib/social-image";
import { getSitemapPageData, type SitemapLink } from "@/lib/sitemap-page-data";

const TITLE = "Sitemap | Red Carpet Plumbing";
const DESCRIPTION =
  "Browse every Red Carpet Plumbing page: plumbing services, Las Vegas Valley service areas, and plumbing services by city in one place.";
const CANONICAL = "https://redcarpetplumbing.com/sitemap/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
    images: OG_IMAGES,
  },
  robots: { index: true, follow: true },
};

const INTRO =
  "Find any page on the Red Carpet Plumbing website from one list. Browse our plumbing services, the Las Vegas Valley communities we serve, and plumbing services by city.";
const CITY_LEAD =
  "Each city below lists the plumbing service pages available for that area.";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: CANONICAL,
  description: DESCRIPTION,
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
        name: "Sitemap",
        item: CANONICAL,
      },
    ],
  },
};

const LIST_CLASS =
  "mt-4 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3";
const LINK_CLASS =
  "flex min-h-11 items-center py-1 text-base leading-6 text-brand-dark underline-offset-2 hover:text-brand-dark/70 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";
const H2_CLASS = "text-2xl tracking-tight text-brand-dark sm:text-3xl";

function LinkList({ links }: { links: SitemapLink[] }) {
  return (
    <ul className={LIST_CLASS}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={LINK_CLASS}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LinkSection({
  id,
  heading,
  links,
}: {
  id: string;
  heading: string;
  links: SitemapLink[];
}) {
  return (
    <section aria-labelledby={id} className="mt-12 first:mt-0">
      <h2 id={id} className={H2_CLASS}>
        {heading}
      </h2>
      <LinkList links={links} />
    </section>
  );
}

export default function SitemapPage() {
  const data = getSitemapPageData();

  return (
    <>
      <JsonLd data={webPageSchema} />
      <SiteHeader />
      <main id="main" className="flex-1 bg-white">
        <div className="bg-brand-surface-warm">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
          />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl tracking-tight text-brand-dark sm:text-5xl">
                Sitemap
              </h1>
              <p className="mt-4 text-base leading-7 text-brand-dark">
                {INTRO}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-12">
          <LinkSection id="main-pages" heading="Main Pages" links={data.main} />
          <LinkSection
            id="plumbing-services"
            heading="Plumbing Services"
            links={data.services}
          />
          <LinkSection
            id="service-areas"
            heading="Service Areas"
            links={data.hubs}
          />

          <section aria-labelledby="services-by-city" className="mt-12">
            <h2 id="services-by-city" className={H2_CLASS}>
              Plumbing Services by City
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-dark">
              {CITY_LEAD}
            </p>
            {data.cities.map((group) => {
              const headingId = `city-${group.city.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <div
                  key={group.city}
                  role="group"
                  aria-labelledby={headingId}
                  className="mt-10"
                >
                  <h3
                    id={headingId}
                    className="text-xl font-semibold text-brand-dark sm:text-2xl"
                  >
                    {`Plumbing Services in ${group.city}`}
                  </h3>
                  <LinkList links={group.links} />
                  {group.aliante && group.aliante.length > 0 ? (
                    <div
                      role="group"
                      aria-labelledby="city-aliante-area"
                      className="mt-6"
                    >
                      <h4
                        id="city-aliante-area"
                        className="text-lg font-semibold text-brand-dark"
                      >
                        Aliante Area
                      </h4>
                      <LinkList links={group.aliante} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </section>

          <div className="mt-12">
            <LinkSection id="legal" heading="Legal" links={data.legal} />
          </div>
        </div>

        <CTASection
          background="light"
          headline="Need Plumbing Help in the Las Vegas Valley?"
          body="Call (702) 567-9172 or use our contact page to request plumbing service."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{ label: "Contact Us", href: "/contact/" }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
