"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/src/app/actions";
import type { FormState } from "@/src/app/actions";
import { SMS_MESSAGE_TYPES } from "@/src/lib/legal";

const inputClass =
  "w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent";
const labelClass =
  "block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-red-600" role="alert">
      {message}
    </p>
  );
}

const steps = [
  "We review your message (same day)",
  "A technical team member responds within 24 hours",
  "We schedule a free 30-min discovery call if there's fit",
  "You receive a detailed proposal within 5 business days",
];

function PaperPlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/** Prefill for "What can we help with?" when arriving from ?plan=... */
const CONTACT_PLAN_PREFILL: Record<string, string> = {
  essential:
    "I'm interested in the Essential maintenance & support plan ($1,500/mo, 10 hrs included).",
  professional:
    "I'm interested in the Professional maintenance & support plan ($3,500/mo, 25 hrs included).",
  enterprise:
    "I'm interested in the Enterprise maintenance & support plan ($7,000+/mo, 60+ hrs included).",
  "single-developer":
    "I'm interested in a single dedicated developer ($4,000–$5,600/mo, $25–35/hr effective, full-time).",
  "small-team":
    "I'm interested in a small dedicated team ($11,000–$15,000/mo, 3 developers, includes technical lead).",
  "full-squad":
    "I'm interested in a full dedicated squad ($17,000–$24,000/mo, 5 developers, QA & DevOps support).",
  "dedicated-team":
    "I'm interested in building a dedicated development team (flexible team size; typical rates from the pricing page).",
  "project-based":
    "I'm interested in a project-based engagement with defined scope and deliverables after discovery.",
  "maintenance-quote":
    "I'm interested in ongoing maintenance & support for an existing application (monthly plans).",
  "pilot-project":
    "I'm interested in a low-risk pilot project (roughly $10–15K over 4–6 weeks).",
  "request-proposal":
    "I'd like a detailed proposal with architecture, timeline, and pricing (within about 5 business days).",
};

type ContactFormProps = {
  planSlug?: string;
};

export default function ContactForm({ planSlug }: ContactFormProps) {
  const initialState: FormState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const errs = state.fieldErrors ?? {};

  const helpDefault =
    planSlug && CONTACT_PLAN_PREFILL[planSlug] ? CONTACT_PLAN_PREFILL[planSlug] : "";

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 lg:gap-12 items-start">
          {/* Left: Contact form card */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 sm:p-8 md:p-10">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="First and Last Name"
                    minLength={2}
                    maxLength={200}
                    required
                    autoComplete="name"
                    aria-invalid={errs.name ? true : undefined}
                    aria-describedby={errs.name ? "contact-name-error" : undefined}
                    className={`${inputClass} ${errs.name ? "border-red-300 ring-1 ring-red-200" : ""}`}
                  />
                  <FieldError id="contact-name-error" message={errs.name} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    maxLength={320}
                    required
                    autoComplete="email"
                    aria-invalid={errs.email ? true : undefined}
                    aria-describedby={errs.email ? "contact-email-error" : undefined}
                    className={`${inputClass} ${errs.email ? "border-red-300 ring-1 ring-red-200" : ""}`}
                  />
                  <FieldError id="contact-email-error" message={errs.email} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    maxLength={200}
                    autoComplete="organization"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="+15550001234"
                    maxLength={22}
                    autoComplete="tel"
                    aria-invalid={errs.phone ? true : undefined}
                    aria-describedby={errs.phone ? "contact-phone-error" : undefined}
                    className={`${inputClass} ${errs.phone ? "border-red-300 ring-1 ring-red-200" : ""}`}
                  />
                  <FieldError id="contact-phone-error" message={errs.phone} />
                  <p className="mt-1 text-[11px] text-[var(--color-neutralGray)]">
                    Digits only; optional + for country code (spaces/formatting are stripped).
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="help" className={labelClass}>
                  What can we help with? *
                </label>
                <input
                  id="help"
                  name="help"
                  type="text"
                  minLength={3}
                  maxLength={500}
                  required
                  defaultValue={helpDefault}
                  aria-invalid={errs.help ? true : undefined}
                  aria-describedby={errs.help ? "contact-help-error" : undefined}
                  className={`${inputClass} ${errs.help ? "border-red-300 ring-1 ring-red-200" : ""}`}
                />
                <FieldError id="contact-help-error" message={errs.help} />
              </div>

              <div>
                <label htmlFor="project" className={labelClass}>
                  Tell us about your project *
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  minLength={20}
                  maxLength={8000}
                  required
                  placeholder="What are you trying to build or solve? Any specific technologies or requirements?"
                  aria-invalid={errs.project ? true : undefined}
                  aria-describedby={errs.project ? "contact-project-error" : undefined}
                  className={`${inputClass} resize-y min-h-[120px] ${errs.project ? "border-red-300 ring-1 ring-red-200" : ""}`}
                />
                <FieldError id="contact-project-error" message={errs.project} />
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-4 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="legalTermsConsent"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[var(--color-electricBlue)] focus:ring-[var(--color-electricBlue)]"
                    aria-invalid={errs.legalTermsConsent ? true : undefined}
                    aria-describedby={
                      errs.legalTermsConsent
                        ? "contact-legal-terms-error"
                        : undefined
                    }
                  />
                  <span className="text-xs text-[var(--color-neutralGray)] leading-relaxed">
                    I agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:text-[var(--color-deepSpace)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms-of-service"
                      className="underline hover:text-[var(--color-deepSpace)]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </Link>
                    . <span className="text-[var(--color-deepSpace)]">*</span>
                  </span>
                </label>
                <FieldError
                  id="contact-legal-terms-error"
                  message={errs.legalTermsConsent}
                />

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    value="yes"
                    className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[var(--color-electricBlue)] focus:ring-[var(--color-electricBlue)]"
                    aria-invalid={errs.smsConsent ? true : undefined}
                    aria-describedby={
                      errs.smsConsent ? "contact-sms-consent-error" : undefined
                    }
                  />
                  <span className="text-xs text-[var(--color-neutralGray)] leading-relaxed">
                    <span className="text-[var(--color-neutralGray)]">
                      (Optional)
                    </span>{" "}
                    I agree to receive SMS/text messages from StellixSoft related
                    to {SMS_MESSAGE_TYPES} regarding my inquiry. Message
                    frequency varies. Message and data rates may apply. Reply{" "}
                    <strong>STOP</strong> to opt out, <strong>HELP</strong> for
                    help. Consent is not a condition of purchase.
                  </span>
                </label>
                <FieldError
                  id="contact-sms-consent-error"
                  message={errs.smsConsent}
                />
              </div>

              <div>
                <label htmlFor="hear" className={labelClass}>
                  How did you hear about us?
                </label>
                <input
                  id="hear"
                  name="hear"
                  type="text"
                  maxLength={200}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Budget range (optional)</label>
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_140px] gap-4">
                  <div>
                    <label htmlFor="budgetAmount" className="sr-only">
                      Budget amount
                    </label>
                    <input
                      id="budgetAmount"
                      name="budgetAmount"
                      type="text"
                      inputMode="decimal"
                      placeholder="e.g. 25000"
                      maxLength={14}
                      aria-invalid={errs.budget ? true : undefined}
                      aria-describedby={errs.budget ? "contact-budget-error" : undefined}
                      className={`${inputClass} ${errs.budget ? "border-red-300 ring-1 ring-red-200" : ""}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="budgetCurrency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="budgetCurrency"
                      name="budgetCurrency"
                      defaultValue=""
                      className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23717181'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      }}
                      aria-invalid={errs.budget ? true : undefined}
                    >
                      <option value="">Currency</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="AED">AED</option>
                      <option value="PKR">PKR</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <FieldError id="contact-budget-error" message={errs.budget} />
              </div>

              {state.message && (
                <p
                  role={state.success ? "status" : "alert"}
                  className={`text-sm font-medium ${state.success ? "text-green-600" : "text-red-600"}`}
                >
                  {state.message}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium text-white cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-electricBlue)]"
                  style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                >
                  {isPending ? "Sending…" : "Send Message"}
                  <PaperPlaneIcon />
                </button>
                <p className="text-xs text-[var(--color-neutralGray)] max-w-xs sm:text-right">
                  * Required fields, including agreement to our Privacy Policy
                  and Terms of Service. SMS consent is optional. We&apos;ll
                  respond within 1 business day.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Sidebar panels */}
          <div className="space-y-6 lg:sticky lg:top-8">
            {/* What happens when you submit */}
            <div
              className="rounded-2xl p-6 md:p-8 text-white"
              style={{ backgroundColor: "var(--color-deepSpace)" }}
            >
              <h3 className="text-xs font-medium uppercase tracking-widest text-white border-b-2 pb-2 mb-6 border-[var(--color-electricBlue)]">
                What happens when you submit
              </h3>
              <ol className="space-y-5">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-white"
                      style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/90 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-white/60 leading-relaxed">
                No sales pressure. If we&apos;re not the right fit, we&apos;ll tell
                you honestly and recommend alternatives.
              </p>
            </div>

            {/* Recent conversations */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 md:p-8">
              <ChatBubbleIcon />
              <h3 className="mt-4 text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)]">
                Recent conversations
              </h3>
              <blockquote className="mt-4 text-sm text-[var(--color-neutralGray)] leading-relaxed italic">
                &quot;Had a discovery call on Monday, received a detailed proposal
                by Thursday. Best agency experience I&apos;ve had.&quot;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5 bg-[var(--color-lightGray)]">
                  <Image
                    src="/assets/images/testimonials/contact-testimonial-avatar.webp"
                    alt="VP Engineering testimonial avatar"
                    fill
                    className="object-cover object-top"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-deepSpace)]">
                    VP Engineering
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-neutralGray)]">
                    Saas startup
                  </p>
                </div>
              </div>
              <p
                className="mt-6 text-xs font-medium uppercase tracking-wider transition-colors hover:opacity-90"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Join 50+ companies who reached out this quarter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
