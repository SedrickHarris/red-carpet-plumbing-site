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
  subheading?: ReactNode;
  trustItems?: string[];
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  ctaNote?: ReactNode;
  formSlot?: ReactNode;
  backgroundImage?: { src: string; alt: string };
  accentWidth?: "sm" | "md" | "lg";
  size?: "default" | "tall";
  className?: string;
};

export function HeroSection({
  headline,
  headingLevel = "h1",
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
            className="object-cover opacity-60"
          />
          <div
            className={`absolute inset-0 ${
              hasSplit
                ? "bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/30"
                : "bg-gradient-to-b from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/50"
            }`}
          />
        </div>
      ) : null}

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ${paddingY} ${
          hasSplit
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] lg:gap-14 xl:gap-20"
            : ""
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
            <Heading className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headline}
            </Heading>
          </motion.div>

          {subheading ? (
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl"
            >
              {subheading}
            </motion.p>
          ) : null}

          {trustItems && trustItems.length > 0 ? (
            <motion.ul
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </motion.ul>
          ) : null}

          {primaryCTA || secondaryCTA ? (
            <motion.div variants={itemVariants} className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

function CheckMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-none text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}
