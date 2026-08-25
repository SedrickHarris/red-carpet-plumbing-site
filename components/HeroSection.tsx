"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/Button";

type CTA = {
  label: string;
  href: string;
  disabled?: boolean;
};

type HeroSectionProps = {
  headline: ReactNode;
  headingLevel?: "h1" | "h2";
  // Rendered at the top of the hero, on the charcoal background, instead of as
  // a separate white bar above it. Pass the dark Breadcrumbs variant.
  breadcrumbs?: ReactNode;
  subheading?: ReactNode;
  trustItems?: string[];
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  ctaNote?: ReactNode;
  formSlot?: ReactNode;
  backgroundImage?: { src: string; alt: string };
  accentWidth?: "sm" | "md" | "lg";
  size?: "default" | "tall";
  // Back-compat: accepted but ignored. The split layout is now always 50/50.
  splitRatio?: "default" | "even";
  className?: string;
};

export function HeroSection({
  headline,
  headingLevel = "h1",
  breadcrumbs,
  subheading,
  trustItems,
  primaryCTA,
  secondaryCTA,
  ctaNote,
  formSlot,
  backgroundImage,
  accentWidth = "md",
  size = "default",
  className = "",
}: HeroSectionProps) {
  const Heading = headingLevel;
  const hasSplit = Boolean(formSlot);
  const shouldReduceMotion = useReducedMotion();
  const accentWidthClass = { sm: "w-12", md: "w-20", lg: "w-32" }[accentWidth];

  const paddingY =
    size === "tall"
      ? "py-20 sm:py-28 lg:py-32"
      : "py-16 sm:py-20 lg:py-24";

  // Full literal class string so Tailwind can see the arbitrary grid values.
  // Must stay identical to the split grid in CTASection.
  const splitLayout =
    "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(420px,1fr)_minmax(420px,1fr)] lg:items-center lg:gap-14 xl:gap-20";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.28,
        ease: [0.2, 0.65, 0.3, 1],
      },
    },
  };

  return (
    <section
      className={`relative isolate overflow-hidden bg-brand-charcoal ${className}`}
    >
      {backgroundImage ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* One flat scrim rather than a gradient. The previous version ran
              charcoal/95 to /30 across split heroes and /90 to /50 down
              stacked ones, so how dark a photo read depended on where you
              looked and which layout the page used. A single value keeps
              every hero consistent and makes text contrast predictable
              rather than position-dependent. */}
          <div className="absolute inset-0 bg-brand-charcoal/70" />
        </div>
      ) : null}

      {/* Sits above the padded hero container, so it reads as a trail at the
          top of the hero rather than as its own bar. `relative` keeps it above
          the -z-10 background image. */}
      {breadcrumbs ? <div className="relative">{breadcrumbs}</div> : null}

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ${paddingY} ${
          hasSplit ? splitLayout : ""
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 h-[3px] ${accentWidthClass} rounded-r-full bg-brand-primary`}
        />

        <motion.div
          className={hasSplit ? "min-w-0" : "mx-auto max-w-3xl text-center"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Heading className="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headline}
            </Heading>
          </motion.div>

          {subheading ? (
            <motion.p
              variants={itemVariants}
              className={`mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl ${
                hasSplit ? "" : "mx-auto"
              }`}
            >
              {subheading}
            </motion.p>
          ) : null}

          {trustItems && trustItems.length > 0 ? (
            <motion.ul
              variants={itemVariants}
              className={`mt-8 flex flex-col gap-3 ${
                hasSplit ? "" : "items-center"
              }`}
            >
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {getTrustIcon(item)}
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </motion.ul>
          ) : null}

          {primaryCTA || secondaryCTA ? (
            <motion.div variants={itemVariants} className="mt-10">
              <div
                className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
                  hasSplit ? "" : "sm:justify-center"
                }`}
              >
                {primaryCTA ? (
                  <Button
                    href={primaryCTA.href}
                    variant="primary"
                    size="lg"
                    disabled={primaryCTA.disabled}
                    title={
                      primaryCTA.disabled ? "Phone number pending" : undefined
                    }
                  >
                    {primaryCTA.label}
                  </Button>
                ) : null}
                {secondaryCTA ? (
                  <Button
                    href={secondaryCTA.href}
                    variant="secondary"
                    size="lg"
                    disabled={secondaryCTA.disabled}
                    title={
                      secondaryCTA.disabled ? "Phone number pending" : undefined
                    }
                  >
                    {secondaryCTA.label}
                  </Button>
                ) : null}
              </div>
              {ctaNote ? (
                <p className="mt-3 text-sm text-white/70">{ctaNote}</p>
              ) : null}
              {primaryCTA?.disabled || secondaryCTA?.disabled ? (
                <p className="mt-3 text-xs text-white/60">
                  Phone number pending
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </motion.div>

        {hasSplit ? (
          <div className="w-full min-w-0 lg:max-w-xl lg:justify-self-end">
            {formSlot}
          </div>
        ) : null}
      </div>
    </section>
  );
}

// Picks a trust-item icon from keywords in the item text. First match wins,
// so more specific categories are listed before broader ones. Falls back to
// the checkmark when nothing matches.
function getTrustIcon(text: string) {
  const t = text.toLowerCase();
  if (t.includes("star") || t.includes("review")) return <StarIcon />;
  if (t.includes("licens")) return <ShieldIcon />;
  if (t.includes("year")) return <ClockIcon />;
  if (t.includes("pricing") || t.includes("fee") || t.includes("transparent"))
    return <TagIcon />;
  // "emergenc" also matches "emergencies", which "emergency" alone would miss.
  if (t.includes("emergenc") || t.includes("24/7") || t.includes("24 hour"))
    return <PhoneIcon />;
  return <CheckMark />;
}

function iconProps(className = "mt-1 h-5 w-5 flex-none text-white") {
  return {
    "aria-hidden": "true" as const,
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  };
}

function CheckMark() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L12 16.9l-5.25 2.8 1-5.85L3.5 9.7l5.9-.9L12 3.5z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 8.5-4.1-.9-7-4.3-7-8.5V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5.25l3.25 2" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12.4V5a1 1 0 011-1h7.4a1 1 0 01.7.3l7 7a1 1 0 010 1.4l-6.7 6.7a1 1 0 01-1.4 0l-7-7a1 1 0 01-.3-.7z"
      />
      <circle cx="8.75" cy="8.75" r="1.15" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.2 4h3l1.5 3.7-1.9 1.4a12 12 0 005.1 5.1l1.4-1.9L19 13.8v3a1.7 1.7 0 01-1.9 1.7A13.7 13.7 0 014.5 5.9 1.7 1.7 0 016.2 4z"
      />
    </svg>
  );
}
