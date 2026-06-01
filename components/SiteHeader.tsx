"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";

type NavLink = { label: string; href: string; built?: boolean };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", built: true },
  { label: "Services", href: "/plumbing-services/", built: true },
  { label: "Service Areas", href: "/service-areas/", built: true },
  { label: "About", href: "/about/", built: false },
  { label: "Contact", href: "/contact/", built: true },
];

function DesktopNavItem({ link }: { link: NavLink }) {
  if (link.built === false) {
    return (
      <span
        className="text-base font-medium text-brand-dark/55"
        aria-disabled="true"
      >
        {link.label}
      </span>
    );
  }
  return (
    <Link
      href={link.href}
      className="text-base font-medium text-brand-dark transition-colors hover:text-brand-primary"
    >
      {link.label}
    </Link>
  );
}

function MobileNavItem({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  if (link.built === false) {
    return (
      <span
        className="block rounded-lg px-3 py-2.5 text-base font-medium text-brand-dark/55"
        aria-disabled="true"
      >
        {link.label}
      </span>
    );
  }
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="block rounded-lg px-3 py-2.5 text-base font-medium text-brand-dark transition-colors hover:bg-brand-surface-alt hover:text-brand-primary"
    >
      {link.label}
    </Link>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        className={`sticky top-0 z-40 w-full border-b bg-white/90 transition-[border-color,box-shadow] duration-200 ${
          isScrolled
            ? "border-brand-surface-alt shadow-sm"
            : "border-transparent"
        }`}
        initial={false}
        animate={{
          backdropFilter: isScrolled ? "blur(14px)" : "blur(6px)",
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      >
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

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <DesktopNavItem key={link.href} link={link} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE ENABLING */}
            <div className="hidden sm:block">
              <Button
                href="#call-now"
                variant="primary"
                size="default"
                disabled
                title="Phone number pending"
              >
                Call Now
              </Button>
            </div>

            <button
              type="button"
              aria-label={
                isMobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMobileOpen}
              aria-controls="site-mobile-nav"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-brand-surface-alt text-brand-dark lg:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen ? (
            <motion.nav
              id="site-mobile-nav"
              key="site-mobile-nav"
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="border-t border-brand-surface-alt bg-white lg:hidden"
              aria-label="Mobile"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <MobileNavItem link={link} onNavigate={closeMobile} />
                    </li>
                  ))}
                </ul>
                {/* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE ENABLING */}
                <div className="mt-3">
                  <Button
                    href="#call-now"
                    variant="primary"
                    size="default"
                    disabled
                    title="Phone number pending"
                    fullWidth
                  >
                    Call Now
                  </Button>
                  <p className="mt-2 text-xs text-brand-muted">
                    Phone number pending
                  </p>
                </div>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
