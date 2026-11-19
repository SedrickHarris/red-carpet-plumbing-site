"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

// Seconds between automatic page changes.
const AUTO_ADVANCE_MS = 8000;

// Tailwind default breakpoints. The CSS grid below uses the same widths, so
// the JavaScript page size and the CSS column layout always agree.
const LG_QUERY = "(min-width: 1024px)";
const MD_QUERY = "(min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Static class names so Tailwind can see them. Every card sits in row 1 and in
// the column it would have on its page, so all pages overlap in the same grid
// cells. The grid is always as tall as the tallest card and never shifts.
const MD_COL = ["md:col-start-1", "md:col-start-2"];
const LG_COL = ["lg:col-start-1", "lg:col-start-2", "lg:col-start-3"];

function subscribeMedia(query: string) {
  return (onChange: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  };
}

function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function useTabVisible(): boolean {
  return useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
}

const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

// First-paint visibility before JavaScript runs: the first card shows
// everywhere, the second from md up, the third from lg up. Later cards wait.
const PRE_HYDRATION_CLASS = [
  "opacity-100",
  "opacity-0 invisible md:opacity-100 md:visible",
  "opacity-0 invisible lg:opacity-100 lg:visible",
];

const CONTROL_CLASS =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brand-dark/20 bg-white px-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-dark/40 hover:bg-brand-surface-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

type ReviewCarouselControllerProps = {
  // One server-rendered node per review, in display order.
  slides: ReactNode[];
};

export function ReviewCarouselController({
  slides,
}: ReviewCarouselControllerProps) {
  const total = slides.length;
  const hydrated = useHydrated();
  const isLg = useMediaQuery(LG_QUERY);
  const isMd = useMediaQuery(MD_QUERY);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const tabVisible = useTabVisible();

  // Before hydration the status text assumes the desktop page size.
  const pageSize = !hydrated ? 3 : isLg ? 3 : isMd ? 2 : 1;
  const pageCount = Math.ceil(total / pageSize);

  const [rawPage, setRawPage] = useState(0);
  const page = Math.min(rawPage, pageCount - 1);

  // null means the visitor has not chosen. Reduced motion then starts paused.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;

  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [inView, setInView] = useState(true);

  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = regionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const running =
    hydrated && !paused && !hovering && !focusWithin && inView && tabVisible;

  // The timer restarts whenever the page changes, so a manual change always
  // waits one full interval before the next automatic one.
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setRawPage((p) => (Math.min(p, pageCount - 1) + 1) % pageCount);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [running, page, pageCount]);

  const goTo = (next: number) => setRawPage((next + pageCount) % pageCount);

  const first = page * pageSize + 1;
  const last = Math.min((page + 1) * pageSize, total);

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews from Google"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocusWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocusWithin(false);
        }
      }}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {slides.map((slide, i) => {
          const slidePage = Math.floor(i / pageSize);
          const active = slidePage === page;
          // Without hydration, cards after the first desktop page are hidden
          // from sight and from assistive technology. Cards 2 and 3 depend on
          // the breakpoint, so CSS decides until the client takes over.
          const laterThanFirstPage = i >= 3;
          const visibilityClass = hydrated
            ? active
              ? "opacity-100 visible"
              : "opacity-0 invisible"
            : laterThanFirstPage
              ? "opacity-0 invisible"
              : PRE_HYDRATION_CLASS[i];
          const hidden = hydrated ? !active : laterThanFirstPage;
          return (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${i + 1} of ${total}`}
              aria-hidden={hidden ? true : undefined}
              inert={hidden}
              className={`col-start-1 row-start-1 ${MD_COL[i % 2]} ${LG_COL[i % 3]} transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${visibilityClass}`}
            >
              {slide}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className={CONTROL_CLASS}
            aria-label="Show previous reviews"
            onClick={() => goTo(page - 1)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 3L5 8l5 5" />
            </svg>
          </button>
          <button
            type="button"
            className={CONTROL_CLASS}
            aria-label="Show next reviews"
            onClick={() => goTo(page + 1)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
            </svg>
          </button>
          <button
            type="button"
            className={CONTROL_CLASS}
            aria-pressed={paused}
            aria-label={
              paused ? "Play review rotation" : "Pause review rotation"
            }
            onClick={() => setUserPaused(!paused)}
          >
            {paused ? "Play" : "Pause"}
          </button>
          <p className="text-sm text-brand-muted">
            {`Showing ${first} to ${last} of ${total}`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {Array.from({ length: pageCount }, (_, p) => {
            const from = p * pageSize + 1;
            const to = Math.min((p + 1) * pageSize, total);
            const current = p === page;
            return (
              <button
                key={p}
                type="button"
                aria-label={`Show reviews ${from} to ${to}`}
                aria-current={current ? "true" : undefined}
                onClick={() => goTo(p)}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-primary"
              >
                <span
                  aria-hidden="true"
                  className={`block h-3 w-3 rounded-full border border-brand-primary ${
                    current ? "bg-brand-primary" : "bg-white"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
