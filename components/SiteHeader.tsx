"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";

type NavLink = { label: string; href: string; built?: boolean };
type DropdownLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", built: true },
  { label: "About", href: "/about/", built: true },
  { label: "Contact", href: "/contact/", built: true },
];

const SERVICES_DROPDOWN: DropdownLink[] = [
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

const SERVICE_AREAS_DROPDOWN: DropdownLink[] = [
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

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

function DesktopNavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive =
    pathname === link.href ||
    (link.href !== "/" && pathname.startsWith(link.href));

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
      aria-current={isActive ? "page" : undefined}
      className={`text-base font-medium transition-colors hover:text-brand-primary ${
        isActive
          ? "text-brand-primary border-b-2 border-brand-primary pb-0.5"
          : "text-brand-dark"
      }`}
    >
      {link.label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  items,
  viewAllLabel,
  viewAllHref,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: DropdownLink[];
  viewAllLabel: string;
  viewAllHref: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isActive = items.some((item) => pathname.startsWith(item.href));

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-brand-primary ${
          isActive
            ? "text-brand-primary border-b-2 border-brand-primary pb-0.5"
            : "text-brand-dark"
        }`}
      >
        {label}
        <Chevron
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            role="menu"
            aria-label={label}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
            className="absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-black/5"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={onClose}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-surface-alt hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 border-t border-brand-surface-alt pt-1">
              <Link
                href={viewAllHref}
                role="menuitem"
                onClick={onClose}
                className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-surface-alt"
              >
                {viewAllLabel}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
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

function MobileAccordion({
  label,
  items,
  viewAllLabel,
  viewAllHref,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: DropdownLink[];
  viewAllLabel: string;
  viewAllHref: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-brand-dark transition-colors hover:bg-brand-surface-alt hover:text-brand-primary"
      >
        {label}
        <Chevron
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pb-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-3 py-2.5 pl-6 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-surface-alt hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={viewAllHref}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2.5 pl-6 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-surface-alt"
                >
                  {viewAllLabel}
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "services" | "areas" | null
  >(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  const [homeLink, aboutLink, contactLink] = NAV_LINKS;

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
          backdropFilter: isScrolled ? "blur(8px)" : "blur(4px)",
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
              width={220}
              height={73}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            <DesktopNavItem link={homeLink} />
            <DesktopDropdown
              label="Services"
              items={SERVICES_DROPDOWN}
              viewAllLabel="View All Services"
              viewAllHref="/plumbing-services/"
              isOpen={openDropdown === "services"}
              onOpen={() => setOpenDropdown("services")}
              onClose={() => setOpenDropdown(null)}
            />
            <DesktopDropdown
              label="Service Areas"
              items={SERVICE_AREAS_DROPDOWN}
              viewAllLabel="View All Service Areas"
              viewAllHref="/service-areas/"
              isOpen={openDropdown === "areas"}
              onOpen={() => setOpenDropdown("areas")}
              onClose={() => setOpenDropdown(null)}
            />
            <DesktopNavItem link={aboutLink} />
            <DesktopNavItem link={contactLink} />
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href="tel:+17025679172"
                variant="primary"
                size="default"
              >
                Call (702) 567-9172
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
                  <li>
                    <MobileNavItem link={homeLink} onNavigate={closeMobile} />
                  </li>
                  <li>
                    <MobileAccordion
                      label="Services"
                      items={SERVICES_DROPDOWN}
                      viewAllLabel="View All Services"
                      viewAllHref="/plumbing-services/"
                      isOpen={servicesOpen}
                      onToggle={() => setServicesOpen((open) => !open)}
                      onNavigate={closeMobile}
                    />
                  </li>
                  <li>
                    <MobileAccordion
                      label="Service Areas"
                      items={SERVICE_AREAS_DROPDOWN}
                      viewAllLabel="View All Service Areas"
                      viewAllHref="/service-areas/"
                      isOpen={areasOpen}
                      onToggle={() => setAreasOpen((open) => !open)}
                      onNavigate={closeMobile}
                    />
                  </li>
                  <li>
                    <MobileNavItem link={aboutLink} onNavigate={closeMobile} />
                  </li>
                  <li>
                    <MobileNavItem
                      link={contactLink}
                      onNavigate={closeMobile}
                    />
                  </li>
                </ul>
                <div className="mt-3">
                  <Button
                    href="tel:+17025679172"
                    variant="primary"
                    size="default"
                    fullWidth
                  >
                    Call (702) 567-9172
                  </Button>
                </div>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
