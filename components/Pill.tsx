import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Pills are the secondary service navigation on the city hub pages: a wrapped
 * list of chips linking to the services that did not earn a full card. They
 * are deliberately not Buttons. A Button is a call to action; a pill is a
 * navigation target, and it reads that way visually (fully rounded, medium
 * weight, small text) so it never competes with the CTA next to it.
 */
export type ServicePill = { title: string; href: string };

type PillVariant = "outline" | "solid";

const baseStyles =
  "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-medium shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors";

const variantStyles: Record<PillVariant, string> = {
  outline:
    "border border-brand-dark/15 bg-white text-brand-dark hover:bg-brand-surface-alt",
  solid: "bg-brand-dark text-white hover:bg-brand-dark/90",
};

export function Pill({
  href,
  variant = "outline",
  children,
}: {
  href: string;
  variant?: PillVariant;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}

/**
 * One wrapped row of pills. How many rows a page shows, and which variant each
 * row uses, stays with the page: that is layout, not component behaviour.
 */
export function PillRow({
  pills,
  variant = "outline",
}: {
  pills: ServicePill[];
  variant?: PillVariant;
}) {
  return (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6">
      {pills.map((pill) => (
        <li key={pill.href}>
          <Pill href={pill.href} variant={variant}>
            {pill.title}
          </Pill>
        </li>
      ))}
    </ul>
  );
}
