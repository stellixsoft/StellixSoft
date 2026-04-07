const cards = [
  {
    id: "big-bang",
    title: "The Big Bang Rewrite",
    description:
      "Let's rebuild everything from scratch! 18 months later, the project is over budget, behind schedule, and missing features.",
    subtitle: "KEY RISKS/BENEFITS:",
    items: [
      "Underestimated complexity",
      "Lost business knowledge",
      "No fallback option",
      "Team burnout",
    ],
    isRecommended: false,
  },
  {
    id: "lift-shift",
    title: "Lift and Shift",
    description:
      "Just move it to the cloud! You end up with the same legacy problems, just on AWS. More expensive, not more modern.",
    subtitle: "KEY RISKS/BENEFITS:",
    items: [
      "Architecture unchanged",
      "Technical debt remains",
      "No new capabilities",
      "Higher hosting costs",
    ],
    isRecommended: false,
  },
  {
    id: "incremental",
    title: "Incremental Modernization",
    description:
      "Module-by-module migration with parallel systems. Old and new run side-by-side until proven. Business never stops.",
    subtitle: "KEY RISKS/BENEFITS:",
    items: [
      "Lower risk at each step",
      "Continuous validation",
      "Business keeps running",
      "Rollback always possible",
    ],
    isRecommended: true,
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HowWeAvoid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center">
          Why 70% of Modernization Projects Fail - And How We Avoid It
        </h2>
        <div
          className="w-24 h-0.5 mx-auto mt-4 mb-12 md:mb-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`rounded-2xl p-6 md:p-8 flex flex-col ${
                card.isRecommended
                  ? "bg-[var(--color-deepSpace)] text-white shadow-xl"
                  : "bg-white border border-[var(--color-electricBlue)]/20"
              }`}
            >
              <div className="mb-4">
                {card.isRecommended ? (
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white">
                    <CheckIcon className="w-6 h-6" />
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full text-red-500">
                    <XIcon className="w-8 h-8" />
                  </span>
                )}
              </div>
              <h3
                className={`text-sm font-medium uppercase tracking-wider mb-3 ${
                  card.isRecommended ? "text-white" : "text-[var(--color-deepSpace)]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  card.isRecommended ? "text-gray-300" : "text-[var(--color-deepSpace)]"
                }`}
              >
                {card.description}
              </p>
              <p
                className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                  card.isRecommended ? "text-gray-400" : ""
                }`}
                style={card.isRecommended ? undefined : { color: "var(--color-electricBlue)" }}
              >
                {card.subtitle}
              </p>
              <ul className="space-y-2 mt-auto">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    />
                    <span
                      className={card.isRecommended ? "text-white" : "text-[var(--color-deepSpace)]"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
