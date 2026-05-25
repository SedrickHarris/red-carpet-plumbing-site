"use client";

import { useState, type FormEvent } from "react";

const DEFAULT_SERVICES = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Water Heater Repair or Installation",
  "Leak Detection and Repair",
  "Slab Leak Detection or Repair",
  "Sewer Line Services",
  "Re-Piping",
  "Commercial Plumbing",
  "Other Plumbing Service",
];

type QuoteFormPlaceholderProps = {
  title?: string;
  services?: string[];
};

export function QuoteFormPlaceholder({
  title = "Get Plumbing Help Today",
  services = DEFAULT_SERVICES,
}: QuoteFormPlaceholderProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect to confirmed form endpoint before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl bg-white p-8 text-brand-dark shadow-lg ring-1 ring-brand-surface-alt"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-brand-dark/80">
          Thank you. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 rounded-2xl bg-white p-6 text-brand-dark shadow-lg ring-1 ring-brand-surface-alt sm:p-8"
      aria-labelledby="quote-form-title"
    >
      <h3
        id="quote-form-title"
        className="text-2xl font-semibold tracking-tight"
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-brand-muted">
        Tell us what is going on and we will follow up promptly.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="qf-name"
            className="block text-sm font-medium text-brand-dark"
          >
            Your Name
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <div>
          <label
            htmlFor="qf-phone"
            className="block text-sm font-medium text-brand-dark"
          >
            Phone Number
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <div>
          <label
            htmlFor="qf-service"
            className="block text-sm font-medium text-brand-dark"
          >
            Service Needed
          </label>
          <select
            id="qf-service"
            name="service"
            defaultValue=""
            required
            className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="qf-message"
            className="block text-sm font-medium text-brand-dark"
          >
            Tell Us More (Optional)
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-primary px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          Request Service
        </button>
      </div>
    </form>
  );
}
