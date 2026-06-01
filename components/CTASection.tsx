import Link from "next/link";
import type { ReactNode } from "react";

type CTA = {
  label: string;
  href: string;
  disabled?: boolean;
};

type CTASectionProps = {
  headline: ReactNode;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  formSlot?: ReactNode;
  background?: "red" | "dark" | "light";
  className?: string;
};

export function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  formSlot,
  background = "red",
  className = "",
}: CTASectionProps) {
  const hasSplit = Boolean(formSlot);
  const bg =
    background === "red"
      ? "bg-brand-primary text-white"
      : background === "dark"
      ? "bg-brand-charcoal text-white"
      : "bg-brand-surface-alt text-brand-dark";
  const onColor = background !== "light";

  return (
    <section className={`${bg} ${className}`}>
      <div
        className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16 ${
          hasSplit
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] lg:items-center lg:gap-14 xl:gap-20"
            : ""
        }`}
      >
        <div className={hasSplit ? "min-w-0" : "mx-auto max-w-3xl text-center"}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          {body ? (
            <p
              className={`mt-6 text-lg leading-8 sm:text-xl ${
                onColor ? "text-white/90" : "text-brand-dark/80"
              }`}
            >
              {body}
            </p>
          ) : null}
          <div className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton cta={primaryCTA} kind="primary" onColor={onColor} />
              {secondaryCTA ? (
                <CtaButton
                  cta={secondaryCTA}
                  kind="secondary"
                  onColor={onColor}
                />
              ) : null}
            </div>
            {primaryCTA.disabled || secondaryCTA?.disabled ? (
              <p
                className={`mt-3 text-xs ${
                  onColor ? "text-white/70" : "text-brand-muted"
                }`}
              >
                Phone number pending
              </p>
            ) : null}
          </div>
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

function CtaButton({
  cta,
  kind,
  onColor,
}: {
  cta: CTA;
  kind: "primary" | "secondary";
  onColor: boolean;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  let styles: string;
  if (kind === "primary") {
    styles = onColor
      ? `${base} bg-white text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline-white`
      : `${base} bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline-brand-primary`;
  } else {
    styles = onColor
      ? `${base} border border-white/60 text-white hover:bg-white/10 focus-visible:outline-white`
      : `${base} border border-brand-dark/20 text-brand-dark hover:bg-brand-surface-alt focus-visible:outline-brand-dark`;
  }

  if (cta.disabled) {
    const disabledBase =
      "inline-flex min-h-12 items-center justify-center rounded-lg border bg-transparent px-6 py-3 text-base font-semibold cursor-not-allowed";
    const disabledStyles = onColor
      ? `${disabledBase} border-white/40 text-white/75`
      : `${disabledBase} border-brand-dark/25 text-brand-dark/55`;
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
