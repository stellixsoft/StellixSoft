"use client";

import { useState } from "react";

const faqItems = [
  {
    id: "contracts",
    question: "Do you require long-term contracts?",
    answer:
      "No. We offer flexible engagement terms. You can start with a month-to-month dedicated team or a fixed-scope project. We believe in earning your trust through delivery, not lock-in contracts.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept wire transfer, ACH, and major credit cards. Invoicing is typically net 15 or net 30. For dedicated team engagements, we invoice monthly in advance.",
  },
  {
    id: "fees",
    question: "Are there any hidden fees?",
    answer:
      "No. Our quotes include the scope we agree on. Any change in scope is discussed and agreed in advance. There are no setup fees, management fees, or surprise charges—just transparent pricing.",
  },
  {
    id: "scale",
    question: "Can we start small and scale up?",
    answer:
      "Yes. Many clients start with one developer or a small pilot project ($10–15K) to evaluate fit. Once you're satisfied, you can scale the team or move to a larger project. We make it easy to grow with you.",
  },
  {
    id: "budget",
    question: "What if our budget is lower than your minimums?",
    answer:
      "We can still help. Our pilot option or project-based engagements can be scoped to fit smaller budgets. Reach out and we'll discuss what's possible—we'd rather find a way to work together than turn you away.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Pricing FAQ
        </h2>

        <ul className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id}>
                <div
                  className="rounded-2xl bg-white border border-gray-200 shadow-[0_2px_12px_rgba(3,2,19,0.04)] overflow-hidden"
                  role="region"
                  aria-expanded={isOpen}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 py-4 px-5 md:py-5 md:px-6 text-left hover:bg-gray-50/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span className="font-medium text-[var(--color-deepSpace)] text-sm sm:text-base pr-2">
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 flex items-center justify-center text-[var(--color-deepSpace)] transition-transform duration-200"
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 px-5 md:pb-5 md:px-6 pt-4 text-sm sm:text-base text-[var(--color-neutralGray)] leading-relaxed border-t border-gray-100">
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
    </section>
  );
}
