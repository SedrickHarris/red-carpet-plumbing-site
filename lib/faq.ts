export type FaqCategoryId =
  | "service-area"
  | "causes-signs"
  | "the-service"
  | "timing-process"
  | "cost"
  | "emergency"
  | "trust";

export type FaqItem = {
  question: string;
  answer: string;
  category: FaqCategoryId;
};

// Source of category IDs and their human labels. This does NOT govern ordering.
export const FAQ_CATEGORIES: { id: FaqCategoryId; label: string }[] = [
  { id: "service-area", label: "Service Area" },
  { id: "causes-signs", label: "Causes and Signs" },
  { id: "the-service", label: "What We Do" },
  { id: "timing-process", label: "Timing and Process" },
  { id: "cost", label: "Cost and Estimates" },
  { id: "emergency", label: "Emergency Service" },
  { id: "trust", label: "Licensing and Trust" },
];

// A category only qualifies toward pill rendering if it holds 2 or more questions. A
// single-question category never earns its own pill and never counts toward the threshold.
// Returned in first-appearance order of the authored array. Single source of truth for both
// orderFaqs (ordering/schema) and FaqSection (pill rendering), so they stay in lockstep.
export function qualifyingCategories(faqs: FaqItem[]): FaqCategoryId[] {
  const counts = new Map<FaqCategoryId, number>();
  for (const faq of faqs) {
    counts.set(faq.category, (counts.get(faq.category) ?? 0) + 1);
  }
  const ordered: FaqCategoryId[] = [];
  for (const faq of faqs) {
    if ((counts.get(faq.category) ?? 0) >= 2 && !ordered.includes(faq.category)) {
      ordered.push(faq.category);
    }
  }
  return ordered;
}

// Conditional ordering, shared by the visible FAQ section AND the FAQPage schema so DOM
// order and mainEntity order stay in lockstep in both modes.
//   3 or more qualifying categories -> group by first appearance, stable within a group.
//   fewer than 3                    -> return the authored array untouched (no reorder).
export function orderFaqs(faqs: FaqItem[]): FaqItem[] {
  if (qualifyingCategories(faqs).length < 3) {
    return faqs;
  }

  const firstAppearance: FaqCategoryId[] = [];
  for (const faq of faqs) {
    if (!firstAppearance.includes(faq.category)) {
      firstAppearance.push(faq.category);
    }
  }

  return faqs
    .map((faq, index) => ({ faq, index }))
    .sort((a, b) => {
      const byCategory =
        firstAppearance.indexOf(a.faq.category) -
        firstAppearance.indexOf(b.faq.category);
      return byCategory !== 0 ? byCategory : a.index - b.index;
    })
    .map((entry) => entry.faq);
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: orderFaqs(faqs).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
