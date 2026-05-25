import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  /** Omit `href` for the final crumb (current page). */
  href?: string;
};

type BreadcrumbsProps = {
  trail: BreadcrumbItem[];
  className?: string;
};

/**
 * Accessible breadcrumb navigation. The final crumb is rendered as plain
 * text with `aria-current="page"`. Intermediate crumbs are links.
 *
 * The trail values must mirror the page's BreadcrumbList JSON-LD schema
 * exactly when the page also injects BreadcrumbList structured data.
 */
export function Breadcrumbs({ trail, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`border-b border-brand-surface-alt bg-brand-surface-alt/50 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10 xl:px-12">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-brand-muted transition hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast ? "font-medium text-brand-dark" : "text-brand-muted"
                    }
                  >
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <span aria-hidden="true" className="text-brand-muted/70">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
