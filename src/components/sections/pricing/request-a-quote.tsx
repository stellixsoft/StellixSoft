"use client";

import { useActionState } from "react";
import { submitQuoteForm } from "@/src/app/actions";
import type { FormState } from "@/src/app/actions";

export default function RequestAQuote() {
  const initialState: FormState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(submitQuoteForm, initialState);
  const errs = state.fieldErrors ?? {};

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-normal text-[var(--color-deepSpace)]">
            Request a Quote
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--color-neutralGray)]">
            Tell us about your needs and we&apos;ll provide a custom quote within 2 business days.
          </p>

          <form action={formAction} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="quote-name"
                  className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
                >
                  Name *
                </label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  minLength={2}
                  maxLength={200}
                  required
                  autoComplete="name"
                  aria-invalid={errs.name ? true : undefined}
                  aria-describedby={errs.name ? "quote-name-error" : undefined}
                  className={`w-full rounded-xl bg-gray-50 border px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent ${
                    errs.name ? "border-red-300 ring-1 ring-red-200" : "border-gray-200"
                  }`}
                />
                {errs.name && (
                  <p id="quote-name-error" className="mt-1.5 text-xs text-red-600" role="alert">
                    {errs.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="project-type"
                  className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
                >
                  Project Type
                </label>
                <input
                  id="project-type"
                  name="projectType"
                  type="text"
                  placeholder="e.g. Dedicated Team, Project-Based"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="budget-range"
                  className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
                >
                  Budget Range
                </label>
                <input
                  id="budget-range"
                  name="budgetRange"
                  type="text"
                  placeholder="e.g. $15k - $40k"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
                >
                  Email Address
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
                  aria-describedby={errs.email ? "quote-email-error" : undefined}
                  className={`w-full rounded-xl bg-gray-50 border px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent ${
                    errs.email ? "border-red-300 ring-1 ring-red-200" : "border-gray-200"
                  }`}
                />
                {errs.email && (
                  <p id="quote-email-error" className="mt-1.5 text-xs text-red-600" role="alert">
                    {errs.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2"
              >
                Brief Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="What are you building? Tell us about your goals..."
                className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent resize-y min-h-[120px]"
              />
            </div>

            {state.message && (
              <p className={`text-sm font-medium ${state.success ? "text-green-600" : "text-red-600"}`}>
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-xl py-4 text-base font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-electricBlue)]"
              style={{ backgroundColor: "var(--color-electricBlue)" }}
            >
              {isPending ? "Sending…" : "Get My Custom Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
