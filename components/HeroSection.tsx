import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
  formSlot,
  backgroundImage,
  className = "",
}: HeroSectionProps) {
  const Heading = headingLevel;
  const hasSplit = Boolean(formSlot);

  return (
    <section
      className={`relative isolate overflow-hidden bg-white ${className}`}
    >
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
        <div className={hasSplit ? "min-w-0" : "mx-auto max-w-3xl text-center"}>
          <Heading className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            {headline}
          </Heading>

          {subheading ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-dark/80 sm:text-xl">
              {subheading}
            </p>
          ) : null}

          {trustItems && trustItems.length > 0 ? (
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {primaryCTA || secondaryCTA ? (
            <div className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCTA ? (
                  <HeroCTA cta={primaryCTA} kind="primary" />
                ) : null}
                {secondaryCTA ? (
                  <HeroCTA cta={secondaryCTA} kind="secondary" />
                ) : null}
              </div>
              {primaryCTA?.disabled || secondaryCTA?.disabled ? (
                <p className="mt-3 text-xs text-brand-muted">
                  Phone number pending
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

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

function HeroCTA({ cta, kind }: { cta: CTA; kind: "primary" | "secondary" }) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-base font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const primary =
    "bg-brand-primary text-white hover:bg-brand-primary-hover focus-visible:outline-brand-primary";
  const secondary =
    "border border-brand-dark/20 bg-white text-brand-dark hover:border-brand-dark/40 hover:bg-brand-surface-alt focus-visible:outline-brand-dark";
  const styles = `${base} ${kind === "primary" ? primary : secondary}`;

  if (cta.disabled) {
    const disabledStyles =
      "inline-flex min-h-12 items-center justify-center rounded-lg border border-brand-dark/25 bg-transparent px-6 py-3 text-base font-semibold text-brand-dark/55 cursor-not-allowed";
    return (
      <span
        role="button"
        aria-disabled="true"
        title="Phone number pending"
        className={disabledStyles}
      >
        {cta.label}
      </span>
    );
  }

  return (
    <Link href={cta.href} className={styles}>
      {cta.label}
    </Link>
  );
}
