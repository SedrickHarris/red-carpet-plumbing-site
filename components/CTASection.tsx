import type { ReactNode } from "react";
import { Button, type ButtonVariant } from "@/components/Button";

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
      ? "bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white"
      : background === "dark"
      ? "bg-brand-charcoal text-white"
      : "bg-brand-surface-alt text-brand-dark";
  const onColor = background !== "light";

  return (
    <section className={`${bg} ${className}`}>
      <div
        className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28 xl:px-12 2xl:px-16 ${
          hasSplit
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(420px,1fr)_minmax(420px,1fr)] lg:items-center lg:gap-14 xl:gap-20"
            : ""
        }`}
      >
        <div className={hasSplit ? "min-w-0" : "mx-auto max-w-3xl text-center"}>
          <h2 className="text-3xl font-bold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
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
            <div
              className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
                hasSplit ? "" : "sm:justify-center"
              }`}
            >
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

// `onColor` picks the surface the button has to survive on: the inverse
// variants for filled (red/charcoal) sections, the standard pair for light.
const CTA_VARIANTS: Record<
  "primary" | "secondary",
  Record<"onColor" | "onLight", ButtonVariant>
> = {
  primary: { onColor: "inverse", onLight: "primary" },
  secondary: { onColor: "inverse-outline", onLight: "secondary" },
};

function CtaButton({
  cta,
  kind,
  onColor,
}: {
  cta: CTA;
  kind: "primary" | "secondary";
  onColor: boolean;
}) {
  return (
    <Button
      href={cta.href}
      variant={CTA_VARIANTS[kind][onColor ? "onColor" : "onLight"]}
      size="lg"
      disabled={cta.disabled}
      title={cta.disabled ? "Phone number pending" : undefined}
    >
      {cta.label}
    </Button>
  );
}
