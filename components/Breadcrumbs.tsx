import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  /** Omit `href` for the final crumb (current page). */
  href?: string;
};

type BreadcrumbsProps = {
  trail: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
};

// The dark variant is for crumbs sitting on bg-brand-charcoal, where the light
// palette is unreadable: brand-dark measures 1.09:1 against #111827 and
// brand-muted 3.67:1, both under the 4.5:1 floor. It therefore separates the
// current page by weight and brightness rather than hue. Measured against
// #111827: white/70 composites to #b8babe at 9.13:1, white is 17.74:1.
const styles = {
  light: {
    link: "text-brand-muted transition-colors hover:text-brand-dark",
    current: "font-medium text-brand-dark",
    muted: "text-brand-muted",
    chevron: "text-brand-muted/60",
  },
  dark: {
    link: "text-white/70 transition-colors hover:text-white",
    current: "font-medium text-white",
    muted: "text-white/70",
    chevron: "text-white/40",
  },
} as const;

// Trail values must mirror the page's BreadcrumbList JSON-LD schema exactly
// when the page also injects BreadcrumbList structured data.
export function Breadcrumbs({
  trail,
  className = "",
  variant = "light",
}: BreadcrumbsProps) {
  const s = styles[variant];
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10 xl:px-12">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {item.href && !isLast ? (
                  <Link href={item.href} className={s.link}>
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isLast ? s.current : s.muted}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast ? <ChevronSeparator className={s.chevron} /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

function ChevronSeparator({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 flex-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
    </svg>
  );
}
