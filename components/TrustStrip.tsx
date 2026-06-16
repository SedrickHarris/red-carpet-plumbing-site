// components/TrustStrip.tsx
// Shared trust strip. Renders all items on a single horizontal line with
// semantic, purpose-matched icons (no generic checkmarks).
//
// Two visual variants:
//   "red"   - brand-primary background, white text (default; service/location pages)
//   "light" - light background, red icons, dark text, optional heading (Services Hub)
//
// Labels are passed in verbatim from each page (items: string[]). The component
// preserves the exact wording and resolves an icon per label by keyword, so no
// customer-facing copy is changed by adopting this component.

import type { ReactNode } from "react";

type TrustStripVariant = "red" | "light";

interface TrustStripProps {
  items: string[];
  ariaLabel?: string;
  variant?: TrustStripVariant;
  // Optional heading, rendered above the items on the "light" variant only.
  heading?: string;
}

const StarIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CalendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HomeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const ShieldIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ClockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TagIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const BuildingIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="7" x2="9" y2="7.01" />
    <line x1="15" y1="7" x2="15" y2="7.01" />
    <line x1="9" y1="12" x2="9" y2="12.01" />
    <line x1="15" y1="12" x2="15" y2="12.01" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const ThumbsUpIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
    <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
  </svg>
);

const DropletIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);

// Fallback when no keyword matches: a check badge (still semantic, never a bare tick).
const CheckBadgeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

// Map a trust label to a purpose-matched icon by keyword. Order matters:
// stronger signals are checked first (e.g. "licens" before "commercial" so
// "Licensed Commercial Plumbers" reads as a license shield).
function resolveIcon(label: string): ReactNode {
  const l = label.toLowerCase();
  if (/star|review|rated|\brating\b/.test(l)) return StarIcon;
  if (/licens|insured|bonded|certif/.test(l)) return ShieldIcon;
  if (/year|decade|\bsince\b|\b40\b|experience|established/.test(l)) return CalendarIcon;
  if (/emergency|24\/7|24-7|24 hour|same.?day|fast|response|available/.test(l)) return ClockIcon;
  if (/pric|fee|quote|estimate|upfront|transparent|affordable|no hidden/.test(l)) return TagIcon;
  if (/family|locally|local|owned|neighbor|community/.test(l)) return HomeIcon;
  if (/commercial|residential|business/.test(l)) return BuildingIcon;
  if (/satisf|guarantee|warranty|trusted|customer/.test(l)) return ThumbsUpIcon;
  if (/leak|drain|sewer|pipe|water|plumb/.test(l)) return DropletIcon;
  return CheckBadgeIcon;
}

export default function TrustStrip({
  items,
  ariaLabel = "Why customers choose Red Carpet Plumbing",
  variant = "red",
  heading,
}: TrustStripProps) {
  const isLight = variant === "light";

  return (
    <section
      aria-label={ariaLabel}
      className={
        isLight
          ? "border-y border-brand-surface-alt bg-brand-surface-alt"
          : "bg-brand-primary text-white"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10 xl:px-12">
        {isLight && heading ? (
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-brand-muted">
            {heading}
          </p>
        ) : null}
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:flex-nowrap lg:justify-between lg:gap-y-0">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span
                aria-hidden="true"
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center ${
                  isLight ? "text-brand-primary" : "text-white"
                }`}
              >
                {resolveIcon(item)}
              </span>
              <span
                className={`text-sm font-semibold leading-tight ${
                  isLight ? "text-brand-dark" : "text-white"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
