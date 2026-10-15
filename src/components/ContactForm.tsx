"use client";

import { useState, type FormEvent } from "react";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "subject" | "message", string>
>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate(form: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();

    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (phone && phone.length < 7) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!subject) next.subject = "Please add a subject.";
    if (!message) next.message = "Please enter your message.";
    else if (message.length < 20) {
      next.message = "Please provide a little more detail (at least 20 characters).";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);
    const form = new FormData(event.currentTarget);
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });
      const data = (await response.json()) as { message?: string };
      setServerMessage(
        data.message ??
          "We could not send your enquiry. Please use the contact details provided.",
      );
    } catch {
      setServerMessage(
        "Network error. Please try again or contact the institution directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>
      <Field
        label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        error={errors.phone}
      />
      <Field
        label="Subject"
        name="subject"
        required
        error={errors.subject}
      />
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted"
        >
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`field-input min-h-[150px] resize-y ${errors.message ? "field-error" : ""}`}
          placeholder="Your enquiry about the proposed medical college and teaching hospital…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="field-hint">{errors.message}</p>
        ) : null}
      </div>

      {serverMessage ? (
        <div
          className="border border-line bg-cool px-4 py-3 text-sm text-charcoal"
          role="status"
        >
          {serverMessage}
        </div>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted"
      >
        {label} {required ? <span className="text-teal">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`field-input ${error ? "field-error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="field-hint">{error}</p>
      ) : null}
    </div>
  );
}
