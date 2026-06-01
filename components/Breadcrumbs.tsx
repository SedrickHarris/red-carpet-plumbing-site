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

// Trail values must mirror the page's BreadcrumbList JSON-LD schema exactly
// when the page also injects BreadcrumbList structured data.
export function Breadcrumbs({ trail, className = "" }: BreadcrumbsProps) {
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
                  <Link
                    href={item.href}
                    className="text-brand-muted transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "font-medium text-brand-primary"
                        : "text-brand-muted"
                    }
                  >
                    {item.label}
                  </span>
                )}
                {!isLast ? <ChevronSeparator /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

function ChevronSeparator() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 flex-none text-brand-muted/60"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
    </svg>
  );
}
