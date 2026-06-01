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
  className = "",
}: HeroSectionProps) {
  const Heading = headingLevel;
  const hasSplit = Boolean(formSlot);
  const shouldReduceMotion = useReducedMotion();

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
      className={`relative isolate overflow-hidden bg-white ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_100%_0%,_var(--color-brand-surface-alt),_transparent_65%)]"
      />

      {backgroundImage ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
        </div>
      ) : null}

      <div
        className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16 ${
          hasSplit
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] lg:gap-14 xl:gap-20"
            : ""
        }`}
      >
        <motion.div
          className={hasSplit ? "min-w-0" : "mx-auto max-w-3xl text-center"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Heading className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
              {headline}
            </Heading>
          </motion.div>

          {subheading ? (
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-brand-dark/80 sm:text-xl"
            >
              {subheading}
            </motion.p>
          ) : null}

          {trustItems && trustItems.length > 0 ? (
            <motion.ul
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base text-brand-dark">{item}</span>
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
                <p className="mt-3 text-sm text-brand-muted">{ctaNote}</p>
              ) : null}
              {primaryCTA?.disabled || secondaryCTA?.disabled ? (
                <p className="mt-3 text-xs text-brand-muted">
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
      className="mt-1 h-5 w-5 flex-none text-brand-primary"
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
