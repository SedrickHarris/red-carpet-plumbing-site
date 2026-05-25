import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/plumbing-services/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-brand-surface-alt bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 xl:px-12">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Red Carpet Plumbing home"
          >
            <Image
              src="/images/brand/logo/red-carpet-plumbing-logo.png"
              alt="Red Carpet Plumbing logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brand-dark transition hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* TODO: Replace disabled phone CTA with confirmed phone number before launch. */}
            <span
              role="button"
              aria-disabled="true"
              title="Phone number pending"
              className="hidden cursor-not-allowed items-center justify-center rounded-lg border border-brand-dark/25 bg-transparent px-4 py-2.5 text-sm font-semibold text-brand-dark/55 sm:inline-flex"
            >
              Call Now
            </span>

            <details className="relative lg:hidden">
              <summary
                aria-label="Toggle navigation menu"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-brand-surface-alt text-brand-dark [&::-webkit-details-marker]:hidden"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <nav
                className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-brand-surface-alt bg-white py-2 shadow-lg"
                aria-label="Mobile"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-surface-alt hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* TODO: Replace disabled phone CTA with confirmed phone number before launch. */}
                <span
                  role="button"
                  aria-disabled="true"
                  title="Phone number pending"
                  className="mx-4 mt-2 flex cursor-not-allowed items-center justify-center rounded-lg border border-brand-dark/25 bg-transparent px-3 py-2 text-sm font-semibold text-brand-dark/55"
                >
                  Call Now
                </span>
                <p className="mx-4 mt-2 mb-2 text-xs text-brand-muted">
                  Phone number pending
                </p>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
