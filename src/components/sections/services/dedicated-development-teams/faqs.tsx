"use client";

import { useState } from "react";
import { BACKGROUND_URL } from "@/src/lib/background-url";

const faqItems = [
  {
    id: "start",
    question: "How quickly can we start?",
    answer:
      "Most dedicated teams are operational within 2 weeks. We align on your needs, you interview and approve developers, and we handle onboarding so they join your standups and workflows quickly.",
  },
  {
    id: "interview",
    question: "Can we interview the developers?",
    answer:
      "Yes. You always interview and approve every developer before they join your team. We can run technical interviews with your process, or propose our own structure if you prefer.",
  },
  {
    id: "fit",
    question: "What if a developer isn’t the right fit?",
    answer:
      "If someone isn’t working out, we replace them at no additional cost. We handle the transition while keeping your velocity and knowledge transfer protected.",
  },
  {
    id: "communication",
    question: "How does communication work?",
    answer:
      "Your team joins your channels directly - Slack, Teams, Jira, GitHub. You talk to developers and leads every day via standups, async updates, and shared tooling. No account‑manager bottlenecks.",
  },
  {
    id: "scaling",
    question: "Can we scale up or down?",
    answer:
      "Yes. You can add or reduce capacity with typically 2 weeks notice. Many clients start small and then scale once they see fit and results.",
  },
];

export default function DedicatedDevelopmentTeamsFAQs() {
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
          Common Questions
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
                      aria-controls={`dedicated-faq-answer-${item.id}`}
                      id={`dedicated-faq-question-${item.id}`}
                    >
                      <span className="pr-2 text-sm font-semibold text-[var(--color-deepSpace)] md:text-base">
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
                      id={`dedicated-faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`dedicated-faq-question-${item.id}`}
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
