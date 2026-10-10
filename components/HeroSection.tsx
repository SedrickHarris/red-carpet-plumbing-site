"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/Button";
import { ItemIcon } from "@/components/ItemIcon";

// How long each background slide holds before crossfading, in ms. Only applies
// when `backgroundImages` carries more than one entry.
const SLIDE_HOLD_MS = 6500;

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
  // `position` is an optional CSS object-position (for example "65% 35%")
  // for square or tall sources that are cropped to a wide band.
  backgroundImage?: { src: string; alt: string; position?: string };
  // Optional multi-image background. When more than one entry is supplied the
  // hero crossfades between them; a single entry renders identically to
  // `backgroundImage` with no motion machinery. Mutually exclusive with
  // `backgroundImage` — if both are passed, this one wins. Only the homepage
  // uses it; every other page keeps passing the singular prop.
  backgroundImages?: { src: string; alt: string; position?: string }[];
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
  backgroundImages,
  accentWidth = "md",
  size = "default",
  className = "",
}: HeroSectionProps) {
  const Heading = headingLevel;
  const hasSplit = Boolean(formSlot);
  const shouldReduceMotion = useReducedMotion();
  const accentWidthClass = { sm: "w-12", md: "w-20", lg: "w-32" }[accentWidth];

  // `backgroundImages` wins when both props are supplied. Everything below
  // works off this one normalized list, so the single-image path and the
  // carousel path cannot drift apart.
  const slides =
    backgroundImages && backgroundImages.length > 0
      ? backgroundImages
      : backgroundImage
      ? [backgroundImage]
      : [];

  const [slideIndex, setSlideIndex] = useState(0);
  const slideCount = slides.length;
  // A single image, or a reduced-motion preference, means no rotation at all:
  // no interval, no AnimatePresence, nothing that only ever fires once.
  const isRotating = slideCount > 1 && !shouldReduceMotion;

  useEffect(() => {
    if (!isRotating) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const stop = () => {
      if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
      }
    };
    const start = () => {
      stop();
      timer = setInterval(
        () => setSlideIndex((i) => (i + 1) % slideCount),
        SLIDE_HOLD_MS,
      );
    };
    // A backgrounded tab should not keep cycling animations nobody can see.
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [isRotating, slideCount]);

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
      {slideCount > 0 ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {isRotating ? (
            // Crossfade only: no pan, no slide, no controls. This sits behind
            // hero text, so anything more assertive would fight the copy.
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={slides[slideIndex].src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 1] }}
              >
                <Image
                  src={slides[slideIndex].src}
                  alt=""
                  fill
                  // Only the opening slide is LCP-eligible. The rest load when
                  // they first become active rather than all at once up front.
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: slides[slideIndex].position }}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <Image
              src={slides[0].src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slides[0].position }}
            />
          )}
          {/* One flat scrim rather than a gradient. The previous version ran
              charcoal/95 to /30 across split heroes and /90 to /50 down
              stacked ones, so how dark a photo read depended on where you
              looked and which layout the page used. A single value keeps
              every hero consistent and makes text contrast predictable
              rather than position-dependent. */}
          <div className="absolute inset-0 bg-brand-charcoal/65" />
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
                  <ItemIcon
                    text={item}
                    className="mt-1 h-5 w-5 flex-none text-white"
                  />
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
              {/* white/85, not /70. Over the 65% scrim a near-white photo
                  composites to rgb(100,105,115), where white/70 measures
                  3.65:1 and fails AA for normal text. white/85 clears it at
                  4.52:1. */}
              {ctaNote ? (
                <p className="mt-3 text-sm text-white/85">{ctaNote}</p>
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
