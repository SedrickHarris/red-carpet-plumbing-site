"use client";

// TODO: Connect this form to the approved submission handler, CRM webhook, API route,
// or static form provider before launch. Do not invent an endpoint.
// Form submission is not launch-ready until destination and confirmation behavior are confirmed.
//
// TODO: onSubmit handler not yet connected. Add form action or API route before launch.
// Placeholder form is ship-ready visually but not functionally.

import { type FormEvent } from "react";

const DEFAULT_SERVICES = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Detection and Repair",
  "Water Heater Repair and Installation",
  "Slab Leak Detection and Repair",
  "Sewer Line Services",
  "Re-Piping",
  "Water Pipe Repair and Replacement",
  "Gas Line Plumbing",
  "Commercial Plumbing",
  "Toilet Repair and Installation",
  "Faucet and Sink Repair and Installation",
  "Garbage Disposal Repair and Installation",
  "Backflow Prevention",
  "Video Camera Plumbing Inspections",
  "Trenchless Piping",
  "Water Meter and Pressure Regulator Services",
  "Other",
];

type ContactFormPlaceholderProps = {
  title?: string;
  subheading?: string;
  services?: string[];
  submitLabel?: string;
  ariaSubmitLabel?: string;
};

export function ContactFormPlaceholder({
  title = "Request Plumbing Service",
  subheading = "Fill out the form below and we will contact you to confirm your service request.",
  services = DEFAULT_SERVICES,
  submitLabel = "Request Plumbing Service",
  ariaSubmitLabel = "Submit plumbing service request",
}: ContactFormPlaceholderProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Wire submission handler before launch.
    // Per project rules: do not show fake success or fake confirmation states.
    // The form intentionally no-ops until a real endpoint is configured.
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 rounded-2xl bg-white p-6 text-brand-dark shadow-lg ring-1 ring-brand-surface-alt sm:p-8"
      aria-labelledby="contact-form-title"
    >
      <h3
        id="contact-form-title"
        className="text-2xl font-semibold tracking-tight"
      >
        {title}
      </h3>
      <p className="mt-2 text-sm text-brand-muted">{subheading}</p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-brand-dark"
          >
            Full Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <div>
          <label
            htmlFor="cf-phone"
            className="block text-sm font-medium text-brand-dark"
          >
            Phone Number
          </label>
          <input
            id="cf-phone"
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
            htmlFor="cf-zip"
            className="block text-sm font-medium text-brand-dark"
          >
            ZIP Code
          </label>
          <input
            id="cf-zip"
            name="zip"
            type="text"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}(-[0-9]{4})?"
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <div>
          <label
            htmlFor="cf-service"
            className="block text-sm font-medium text-brand-dark"
          >
            Service Needed
          </label>
          <select
            id="cf-service"
            name="service"
            defaultValue=""
            required
            className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          >
            <option value="" disabled>
              Select a Service
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
            htmlFor="cf-message"
            className="block text-sm font-medium text-brand-dark"
          >
            Describe Your Plumbing Issue (Optional)
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-brand-surface-alt bg-white px-3 py-2.5 text-base text-brand-dark shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>

        <p className="text-xs leading-5 text-brand-muted">
          By submitting this form you agree to our{" "}
          {/* FLAG: CLIENT MUST CONFIRM PRIVACY POLICY URL BEFORE LAUNCH — wrap "Privacy Policy" in a Link when URL is provided */}
          <span>Privacy Policy</span> and consent to being contacted about your
          service request.
        </p>

        <button
          type="submit"
          aria-label={ariaSubmitLabel}
          className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-primary px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
