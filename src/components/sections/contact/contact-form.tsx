"use client";

import Image from "next/image";
import { useActionState } from "react";
import { submitContactForm } from "@/src/app/actions";
import type { FormState } from "@/src/app/actions";

const inputClass =
  "w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent";
const labelClass =
  "block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2";

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
  const helpDefault =
    planSlug && CONTACT_PLAN_PREFILL[planSlug] ? CONTACT_PLAN_PREFILL[planSlug] : "";

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 lg:gap-12 items-start">
          {/* Left: Contact form card */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 sm:p-8 md:p-10">
            <form action={formAction} className="space-y-6">
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
                    required
                    className={inputClass}
                  />
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
                    required
                    className={inputClass}
                  />
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
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
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
                  required
                  defaultValue={helpDefault}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="project" className={labelClass}>
                  Tell us about your project *
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  required
                  placeholder="What are you trying to build or solve? Any specific technologies or requirements?"
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
              </div>

              <div>
                <label htmlFor="hear" className={labelClass}>
                  How did you hear about us?
                </label>
                <input id="hear" name="hear" type="text" className={inputClass} />
              </div>

              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget range (optional)
                </label>
                <input id="budget" name="budget" type="text" className={inputClass} />
              </div>

              {state.message && (
                <p className={`text-sm font-medium ${state.success ? "text-green-600" : "text-red-600"}`}>
                  {state.message}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium text-white cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-electricBlue)]"
                  style={{ backgroundColor: "var(--color-electricBlue)" }}
                >
                  {isPending ? "Sending…" : "Send Message"}
                  <PaperPlaneIcon />
                </button>
                <p className="text-xs text-[var(--color-neutralGray)] max-w-xs sm:text-right">
                  Required fields. We&apos;ll respond within 1 business day. Your
                  information is kept confidential and never shared.
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
                      style={{ backgroundColor: "var(--color-electricBlue)" }}
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
                    src="/assets/images/testimonials/contact-testimonial-avatar.png"
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
