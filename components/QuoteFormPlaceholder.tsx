"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

// TODO: Replace with confirmed GHL webhook URL before launch.
// Architecture decision (confirmed): Native Next.js form POST to GHL webhook.
// Payload shape is defined below. One edit here updates all pages.
// Request the GHL webhook URL from the project owner before going live.
const QUOTE_WEBHOOK_URL = "";

const DEFAULT_SERVICES = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Detection and Repair",
  "Water Heater Repair or Installation",
  "Slab Leak Detection and Repair",
  "Sewer Line Services",
  "Re-Piping",
  "Gas Line Plumbing",
  "Commercial Plumbing",
  "Toilet Repair or Installation",
  "Faucet and Sink Repair or Installation",
  "Garbage Disposal",
  "Backflow Prevention",
  "Video Camera Inspection",
  "Trenchless Piping",
  "Water Pipe Repair or Replacement",
  "Water Meter or Pressure Regulator Service",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

type QuoteFormPlaceholderProps = {
  title?: string;
  subheading?: string;
  services?: string[];
  submitLabel?: string;
  // Back-compat: accepted but ignored. No ZIP field renders in the new design.
  includeZip?: boolean;
};

export function QuoteFormPlaceholder({
  title = "Get Plumbing Help Today",
  subheading = "Tell us what is going on and we will follow up promptly.",
  services = DEFAULT_SERVICES,
  submitLabel = "Request Plumbing Service",
}: QuoteFormPlaceholderProps) {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [state]);

  useEffect(() => {
    if (state !== "success") return;
    const timer = setTimeout(() => {
      router.push("/thank-you/");
    }, 2500);
    return () => clearTimeout(timer);
  }, [state, router]);

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};

    const name = ((data.get("name") as string | null) ?? "").trim();
    if (name.length < 2) next.name = "Please enter your full name.";

    const phone = ((data.get("phone") as string | null) ?? "").trim();
    if (!/^[\d\s()\-+]{7,}$/.test(phone))
      next.phone = "Please enter a valid phone number.";

    const email = ((data.get("email") as string | null) ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";

    const service = (data.get("service") as string | null) ?? "";
    if (!service || !services.includes(service))
      next.service = "Please select a service.";

    const message = (data.get("message") as string | null) ?? "";
    if (message.length > 500)
      next.message = "Please keep the message under 500 characters.";

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a non-empty hidden "website" field indicates a bot.
    // Show success without posting so the bot has no signal of detection.
    if (((data.get("website") as string | null) ?? "").length > 0) {
      setState("success");
      return;
    }

    const validation = validate(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});

    if (!QUOTE_WEBHOOK_URL) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          "QUOTE_WEBHOOK_URL is not configured. Submission aborted.",
        );
      }
      setState("error");
      return;
    }

    setState("submitting");

    const payload = {
      formType: "quote" as const,
      name: (data.get("name") as string) ?? "",
      phone: (data.get("phone") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      service: (data.get("service") as string) ?? "",
      message: (data.get("message") as string) ?? "",
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };

    try {
      const response = await fetch(QUOTE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        aria-live="polite"
        className="w-full min-w-0 rounded-2xl bg-white p-6 text-brand-dark shadow-lg ring-1 ring-brand-surface-alt outline-none sm:p-8"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12.5l4.5 4.5L19 7.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-center text-2xl font-semibold tracking-tight">
          Request Received
        </h3>
        <p className="mt-3 text-center text-base text-brand-dark/80">
          Thank you. Red Carpet Plumbing will be in touch shortly. For immediate
          assistance call (702) 567-9172.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-base text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  const inputBorderOk = "border-brand-surface-alt";
  const inputBorderErr = "border-red-600";
  const labelClass = "block text-sm font-medium text-brand-dark mb-1.5";
  const errorClass = "text-sm text-red-600 mt-1";
  const isSubmitting = state === "submitting";

  function inputClass(hasError: boolean) {
    return `${inputBase} ${hasError ? inputBorderErr : inputBorderOk}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative w-full min-w-0 rounded-2xl bg-white p-6 text-brand-dark shadow-lg ring-1 ring-brand-surface-alt sm:p-8"
      aria-labelledby="quote-form-title"
    >
      <h3 id="quote-form-title" className="text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      {subheading ? (
        <p className="mt-2 text-sm text-brand-muted">{subheading}</p>
      ) : null}

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="qf-website">Website</label>
          <input
            id="qf-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <div>
          <label htmlFor="qf-name" className={labelClass}>
            Full Name
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            autoComplete="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name ? (
            <p role="alert" className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="qf-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            autoComplete="tel"
            inputMode="tel"
            placeholder="(702) 000-0000"
            disabled={isSubmitting}
            className={inputClass(Boolean(errors.phone))}
          />
          {errors.phone ? (
            <p role="alert" className={errorClass}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="qf-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="qf-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="your@email.com"
            disabled={isSubmitting}
            aria-invalid={errors.email ? "true" : "false"}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email ? (
            <p role="alert" className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="qf-service" className={labelClass}>
            Service Needed
          </label>
          <select
            id="qf-service"
            name="service"
            defaultValue=""
            required
            aria-required="true"
            aria-invalid={errors.service ? "true" : "false"}
            disabled={isSubmitting}
            className={inputClass(Boolean(errors.service))}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p role="alert" className={errorClass}>
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="qf-message" className={labelClass}>
            Tell Us More
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            placeholder="Describe your plumbing issue (optional)"
            disabled={isSubmitting}
            maxLength={500}
            aria-invalid={errors.message ? "true" : "false"}
            className={`${inputClass(Boolean(errors.message))} min-h-[100px] resize-y`}
          />
          {errors.message ? (
            <p role="alert" className={errorClass}>
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting ? "true" : "false"}
          className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? (
            <>
              <Spinner />
              <span>Sending...</span>
            </>
          ) : (
            submitLabel
          )}
        </button>

        {state === "error" ? (
          <p role="alert" className="mt-3 text-sm text-red-600">
            Something went wrong. Please call us directly at (702) 567-9172.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 motion-safe:animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="9" className="opacity-25" />
      <path
        d="M21 12a9 9 0 0 1-9 9"
        strokeLinecap="round"
        className="opacity-75"
      />
    </svg>
  );
}
