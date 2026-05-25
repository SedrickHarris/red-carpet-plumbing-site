type ServiceImagePlaceholderProps = {
  className?: string;
};

/**
 * Decorative branded placeholder used inside service-card image slots when
 * a real image asset is not available yet. Renders as a brand-red surface
 * with a centered white wrench glyph.
 *
 * Always rendered with `aria-hidden="true"` — the card heading and the
 * card description are the accessible name for screen-reader users.
 */
export function ServiceImagePlaceholder({
  className = "",
}: ServiceImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full items-center justify-center bg-brand-primary ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-16 w-16 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M44 8a12 12 0 0 0-11.3 16L10 46.7 17.3 54l22.7-22.7A12 12 0 1 0 44 8z" />
        <circle cx="44" cy="20" r="3" />
      </svg>
    </div>
  );
}
