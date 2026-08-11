import { Button } from "@/components/Button";

export function StickyMobileCTA() {
  return (
    // Size and color come from the Button scale (xl = the 56px bar height).
    // The className carries only what is specific to a viewport-pinned bar:
    // placement, squared corners, the top hairline, and a white focus ring
    // that is actually visible against brand-primary.
    //
    // The two `!` overrides beat Button's base utilities regardless of how
    // Tailwind orders them in the stylesheet. The press scale stays at 0.99
    // rather than the base 0.97 because this bar spans the full viewport
    // width, where a 3% squeeze moves the edges noticeably.
    <Button
      href="tel:+17025679172"
      variant="primary"
      size="xl"
      aria-label="Call Red Carpet Plumbing at 702 567 9172"
      className="fixed inset-x-0 bottom-0 z-50 rounded-none! border-t border-brand-dark/10 focus-visible:outline-white motion-safe:active:scale-[0.99]! lg:hidden"
    >
      <span className="flex items-center justify-center gap-2">
        <svg
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        <span>Call (702) 567-9172</span>
      </span>
    </Button>
  );
}
