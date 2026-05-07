import { BACKGROUND_URL } from "@/src/lib/background-url";

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
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[40px]">
          Why 70% of Modernization Projects Fail—And How We Avoid It
        </h2>
        <div
          className="mx-auto mb-12 mt-4 h-0.5 w-16 md:mb-16 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`flex flex-col rounded-2xl p-6 md:p-8 ${
                card.isRecommended
                  ? "bg-[var(--color-deepSpace)] text-white shadow-xl"
                  : "border border-[var(--color-electricBlue)]/25 bg-white shadow-[0_8px_24px_rgba(3,2,19,0.06)]"
              }`}
            >
              <div className="mb-4">
                {card.isRecommended ? (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                ) : (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <XIcon className="h-8 w-8" />
                  </span>
                )}
              </div>
              <h3
                className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
                  card.isRecommended ? "text-white" : "text-[var(--color-deepSpace)]"
                }`}
              >
                {card.title}
              </h3>
              <p className={`mb-5 text-sm leading-relaxed ${card.isRecommended ? "text-gray-300" : "text-[var(--color-deepSpace)]"}`}>
                {card.description}
              </p>
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-wider ${
                  card.isRecommended ? "text-[var(--color-electricBlue)]" : ""
                }`}
                style={card.isRecommended ? undefined : { color: "var(--color-electricBlue)" }}
              >
                {card.subtitle}
              </p>
              <ul className="mt-auto space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: card.isRecommended ? "white" : "var(--color-electricBlue-solid)",
                      }}
                    />
                    <span className={card.isRecommended ? "text-white" : "text-[var(--color-deepSpace)]"}>{item}</span>
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
