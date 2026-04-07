"use client";

import { useState } from "react";

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
      className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]"
      style={{
        background:
          "linear-gradient(135deg, rgba(16, 172, 219, 0.06) 0%, rgba(255, 255, 255, 1) 65%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Common Questions
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

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

