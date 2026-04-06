"use client";

import { useState } from "react";
import Link from "next/link";
import type { SiteFaqSection } from "@/src/data/site-faqs";

type Props = {
  sections: SiteFaqSection[];
};

export default function FaqsPageContent({ sections }: Props) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-12 md:py-16">
      <nav
        aria-label="FAQ topics"
        className="mb-12 md:mb-16 rounded-2xl border border-gray-200 bg-[var(--color-lightGray)]/50 p-5 md:p-6"
      >
        <p className="text-sm font-medium text-[var(--color-deepSpace)] mb-3">
          Jump to a topic
        </p>
        <ul className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs sm:text-sm text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:text-[var(--color-electricBlue)] transition-colors"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-16 md:space-y-20">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28"
            aria-labelledby={`faq-section-${section.id}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 md:mb-8 border-b border-gray-200 pb-4">
              <h2
                id={`faq-section-${section.id}`}
                className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)]"
              >
                {section.title}
              </h2>
              <Link
                href={section.href}
                className="shrink-0 text-sm font-medium text-[var(--color-electricBlue)] hover:underline"
              >
                {section.linkLabel} →
              </Link>
            </div>

            <ul className="space-y-3">
              {section.items.map((item) => {
                const key = `${section.id}-${item.id}`;
                const isOpen = openKey === key;
                return (
                  <li key={item.id}>
                    <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(3,2,19,0.04)] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left hover:bg-gray-50/80 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${key}`}
                        id={`faq-q-${key}`}
                      >
                        <span className="font-medium text-[var(--color-deepSpace)] text-sm sm:text-base pr-2">
                          {item.question}
                        </span>
                        <span
                          className="shrink-0 text-[var(--color-deepSpace)] transition-transform duration-200"
                          aria-hidden
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`w-5 h-5 ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`faq-ans-${key}`}
                        role="region"
                        aria-labelledby={`faq-q-${key}`}
                        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-4 pt-0 text-sm sm:text-base text-[var(--color-neutralGray)] leading-relaxed border-t border-gray-100">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
