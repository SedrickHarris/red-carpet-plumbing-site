"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  FAQ_CATEGORIES,
  orderFaqs,
  qualifyingCategories,
  type FaqCategoryId,
  type FaqItem,
} from "@/lib/faq";

type FaqSectionProps = {
  heading: ReactNode;
  intro?: string;
  faqs: FaqItem[];
  surface?: "light" | "alt";
  id?: string;
};

type PillFilter = FaqCategoryId | "all";

export function FaqSection({
  heading,
  intro,
  faqs,
  surface = "alt",
  id,
}: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PillFilter>("all");

  const orderedFaqs = useMemo(() => orderFaqs(faqs), [faqs]);

  // Only categories with 2+ questions earn a pill, in first-appearance order. A page with
  // fewer than 3 such categories renders the plain accordion fallback.
  const presentCategories = useMemo(() => {
    const labelFor = (categoryId: FaqCategoryId) =>
      FAQ_CATEGORIES.find((cat) => cat.id === categoryId)?.label ?? categoryId;
    return qualifyingCategories(faqs).map((categoryId) => ({
      id: categoryId,
      label: labelFor(categoryId),
    }));
  }, [faqs]);

  const showPills = presentCategories.length >= 3;

  // When pills are not shown, force the "all" view regardless of state.
  const effectiveCategory: PillFilter = showPills ? activeCategory : "all";

  const activeLabel =
    effectiveCategory === "all"
      ? null
      : presentCategories.find((cat) => cat.id === effectiveCategory)?.label ?? null;

  const statusText =
    activeLabel === null
      ? `Showing all ${faqs.length} questions.`
      : `Showing questions about ${activeLabel}.`;

  const sectionBg = surface === "light" ? "bg-white" : "bg-brand-surface-alt";
  const cardBg = surface === "light" ? "bg-brand-surface-alt" : "bg-white";
  const container = showPills ? "max-w-4xl" : "max-w-3xl";
  const inactivePill =
    surface === "light"
      ? "bg-brand-surface-alt text-brand-dark/80 ring-1 ring-brand-surface-alt hover:text-brand-dark hover:ring-brand-dark/20"
      : "bg-white text-brand-dark/80 ring-1 ring-brand-surface-alt hover:text-brand-dark hover:ring-brand-dark/20";

  return (
    <section id={id} className={sectionBg}>
      <div
        className={`mx-auto ${container} px-4 py-16 sm:py-20 lg:py-24`}
      >
        <div className="text-left">
          <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-dark/80">
              {intro}
            </p>
          ) : null}
        </div>

        {showPills ? (
          <>
            <div
              role="group"
              aria-label="Filter questions by category"
              className="mt-8 flex flex-wrap gap-2 lg:flex-nowrap"
            >
              <PillButton
                label="All"
                isActive={effectiveCategory === "all"}
                inactiveClasses={inactivePill}
                onClick={() => setActiveCategory("all")}
              />
              {presentCategories.map((cat) => (
                <PillButton
                  key={cat.id}
                  label={cat.label}
                  isActive={effectiveCategory === cat.id}
                  inactiveClasses={inactivePill}
                  onClick={() => setActiveCategory(cat.id)}
                />
              ))}
            </div>
            <p aria-live="polite" className="sr-only">
              {statusText}
            </p>
          </>
        ) : null}

        <div className="mt-12 space-y-4">
          {orderedFaqs.map((faq) => {
            const isHidden =
              effectiveCategory !== "all" && faq.category !== effectiveCategory;
            return (
              <details
                key={faq.question}
                data-category={faq.category}
                hidden={isHidden}
                className={`group rounded-2xl ${cardBg} p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <FaqChevron />
                </summary>
                <p className="mt-4 text-base leading-7 text-brand-dark/80">
                  {faq.answer}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type PillButtonProps = {
  label: string;
  isActive: boolean;
  inactiveClasses: string;
  onClick: () => void;
};

function PillButton({ label, isActive, inactiveClasses, onClick }: PillButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
        isActive ? "bg-brand-primary text-white shadow-sm" : inactiveClasses
      }`}
    >
      {label}
    </button>
  );
}

function FaqChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none text-brand-muted transition-transform group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
