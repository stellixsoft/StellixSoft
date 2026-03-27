"use client";

import { useActionState } from "react";
import { submitNewsletterForm } from "@/src/app/actions";
import type { FormState } from "@/src/app/actions";

export default function BlogNewsletter() {
  const initialState: FormState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(submitNewsletterForm, initialState);

  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-6 text-white"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-h3 font-light leading-heading mb-3">
          Get Engineering Insights Delivered
        </h2>
        <p className="text-sm md:text-base font-medium text-white/70 mb-6">
          Join 2,000+ engineering leaders who get our weekly insights on
          enterprise software development, architecture decisions, and
          technology strategy.
        </p>
        {state.success ? (
          <p className="text-[var(--color-electricBlue)] font-medium">
            {state.message}
          </p>
        ) : (
          <form
            action={formAction}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)] focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isPending}
              className="rounded-xl px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-70 shrink-0"
              style={{ backgroundColor: "var(--color-electricBlue)" }}
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </button>
            {!state.success && state.message && (
              <p className="text-sm text-red-400">{state.message}</p>
            )}
          </form>
        )}
        <p className="mt-4 text-xs font-medium text-white/40">
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  );
}
