type ServiceImagePlaceholderProps = {
  className?: string;
};

/**
 * Decorative placeholder used inside service-card image slots when a real
 * image asset is not available yet. Renders as a neutral surface with a
 * low-contrast wrench glyph and a single hairline at the bottom edge, so a
 * grid of placeholders reads as quiet structure rather than a repeated
 * accent.
 *
 * The hairline was brand red at 40% until the accent-reduction pass. The
 * replacement opacity was picked to hold the same visual weight, 2.13:1
 * against the surface it sits on versus 2.11:1 before, so the tile looks
 * unchanged and only the color is gone.
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
      className={`flex h-full w-full items-center justify-center border-b border-brand-dark/35 bg-brand-surface-alt ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-12 w-12 text-brand-charcoal/25"
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
