export function StickyMobileCTA() {
  return (
    <a
      href="tel:+17025679172"
      aria-label="Call Red Carpet Plumbing at 702 567 9172"
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-14 items-center justify-center border-t border-brand-dark/10 bg-brand-primary text-base font-semibold text-white motion-safe:transition-transform motion-safe:active:scale-[0.99] lg:hidden"
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
    </a>
  );
}
