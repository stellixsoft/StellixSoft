"use client";

import { useState } from "react";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const faqItems = [
  {
    id: "timeline",
    question: "How long does a typical modernization project take?",
    answer:
      "Timeline depends on the complexity and size of the legacy system. A focused migration of a single application typically takes 3-6 months. Larger enterprise portfolios use a phased approach over 6-18 months, with each phase delivering working software.",
  },
  {
    id: "downtime",
    question: "Will my business have to stop during the migration?",
    answer:
      "No. We specialize in zero-downtime migrations. Your existing system continues to run while we build and validate the modern replacement. Traffic is migrated gradually with instant rollback capability, so your users never experience disruption.",
  },
  {
    id: "performance",
    question: "What if the new system doesn't work as well as the old one?",
    answer:
      "We run comprehensive parallel testing before any cutover. Both systems run simultaneously, and we validate behavioral parity with automated test suites. Performance benchmarks are established on the legacy system and must be met or exceeded before migration.",
  },
  {
    id: "processes",
    question: "Do we need to change our business processes?",
    answer:
      "Not necessarily. We can modernize the technology while preserving your existing business logic and workflows. However, modernization is also an opportunity to optimize processes if desired - we'll advise on what makes sense.",
  },
  {
    id: "data",
    question: "What about our data? Is migration risky?",
    answer:
      "Data migration is carefully planned with validation at every step. We use checksums, row counts, and business rule verification to ensure 100% data integrity. Full backups and rollback plans are always in place before any data is moved.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-4 text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Common Questions About Legacy Modernization
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_32px_rgba(3,2,19,0.08)]">
          <ul className="divide-y divide-gray-100">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id}>
                  <div role="region" aria-expanded={isOpen}>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50/80 md:px-8 md:py-5"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                    >
                      <span className="pr-2 text-sm font-medium text-[var(--color-deepSpace)] md:text-base">
                        {item.question}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[var(--color-deepSpace)]" aria-hidden>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:px-8 md:pb-6 md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
