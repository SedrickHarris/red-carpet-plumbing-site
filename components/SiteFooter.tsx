import Image from "next/image";
import Link from "next/link";

const CORE_SERVICES = [
  { label: "Emergency Plumbing", href: "/emergency-plumbing/" },
  { label: "Drain Cleaning", href: "/drain-cleaning/" },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
  },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
  { label: "Re-Piping", href: "/re-piping/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
];

const TIER_1_LOCATIONS = [
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
];

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
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Red Carpet Plumbing provides residential and commercial plumbing
              services throughout Las Vegas and the Las Vegas Valley.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Plumbing Services
            </h3>
            <ul className="mt-4 space-y-2">
              {CORE_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {service.label}
                  </Link>
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
                  <Link
                    href={location.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/contact/"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  All Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbing-services/"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  All Plumbing Services
                </Link>
              </li>
            </ul>
            {/* TODO: Replace disabled phone CTA with confirmed phone number before launch. */}
            <p className="mt-4 text-sm text-white/70">
              Phone number pending
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Red Carpet Plumbing. All Rights
            Reserved.
          </p>
          <p className="text-xs text-white/60">
            Las Vegas, Nevada plumbing services
          </p>
        </div>
      </div>
    </footer>
  );
}
