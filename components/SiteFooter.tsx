import Image from "next/image";
import Link from "next/link";

type FooterLink = { label: string; href: string; built: boolean };

const CORE_SERVICES: FooterLink[] = [
  { label: "Emergency Plumbing", href: "/emergency-plumbing/", built: true },
  { label: "Drain Cleaning", href: "/drain-cleaning/", built: true },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/", built: true },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    built: true,
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    built: true,
  },
  { label: "Sewer Line Services", href: "/sewer-line-services/", built: true },
  { label: "Re-Piping", href: "/re-piping/", built: true },
  { label: "Commercial Plumbing", href: "/commercial-plumbing/", built: true },
];

const TIER_1_LOCATIONS: FooterLink[] = [
  { label: "Las Vegas", href: "/las-vegas-plumbing-services/", built: true },
  { label: "Henderson", href: "/henderson-plumbing-services/", built: true },
  { label: "North Las Vegas", href: "/north-las-vegas-plumbing-services/", built: true },
  { label: "Paradise", href: "/paradise-plumbing-services/", built: true },
  { label: "Summerlin", href: "/summerlin-plumbing-services/", built: true },
  { label: "Spring Valley", href: "/spring-valley-plumbing-services/", built: true },
  { label: "Enterprise", href: "/enterprise-plumbing-services/", built: true },
  { label: "Boulder City", href: "/boulder-city-plumbing-services/", built: true },
  { label: "Green Valley", href: "/green-valley-plumbing-services/", built: true },
  { label: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/", built: true },
  { label: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/", built: true },
];

const GET_IN_TOUCH: FooterLink[] = [
  { label: "Contact", href: "/contact/", built: true },
  { label: "About", href: "/about/", built: true },
  { label: "All Service Areas", href: "/service-areas/", built: true },
  { label: "All Plumbing Services", href: "/plumbing-services/", built: true },
];

function FooterItem({ link }: { link: FooterLink }) {
  if (!link.built) {
    return (
      <span className="block text-sm text-white/55" aria-disabled="true">
        {link.label}
      </span>
    );
  }
  return (
    <Link
      href={link.href}
      className="block text-sm text-white/80 transition-colors hover:text-white"
    >
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-brand-primary bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="Red Carpet Plumbing home"
            >
              <Image
                src="/images/brand/logo/red-carpet-plumbing-logo.png"
                alt="Red Carpet Plumbing logo"
                width={300}
                height={85}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Red Carpet Plumbing provides residential and commercial plumbing
              services throughout the Las Vegas Valley.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Plumbing Services
            </h3>
            <ul className="mt-4 space-y-2">
              {CORE_SERVICES.map((service) => (
                <li key={service.href}>
                  <FooterItem link={service} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {TIER_1_LOCATIONS.map((location) => (
                <li key={location.href}>
                  <FooterItem link={location} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-2">
              {GET_IN_TOUCH.map((link) => (
                <li key={link.href}>
                  <FooterItem link={link} />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <a
                href="tel:+17025679172"
                className="font-semibold text-white transition-colors hover:text-white/80"
              >
                Call (702) 567-9172
              </a>
            </p>
            <address className="mt-4 text-sm not-italic leading-6 text-white/80">
              <a
                href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white hover:underline"
                aria-label="Get directions to Red Carpet Plumbing on Google Maps"
              >
                <span className="block">3330 W. Hacienda Ave Ste. 405</span>
                <span className="block">Las Vegas, NV 89118</span>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            {`© ${new Date().getFullYear()} Red Carpet Plumbing. All Rights Reserved.`}
          </p>
          <p className="text-xs text-white/60">
            Las Vegas, Nevada plumbing services
          </p>
        </div>
      </div>
    </footer>
  );
}
