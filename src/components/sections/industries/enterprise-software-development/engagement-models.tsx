const models = [
  {
    title: "Dedicated Team",
    description: "A full development team dedicated to your organization.",
    bullets: [
      "3–6+ developers",
      "Technical lead included",
      "Long-term commitment",
      "Your processes, our people",
    ],
    investment: "Starting at $15,000/month",
    highlight: true,
  },
  {
    title: "Project-Based",
    description: "Defined scope projects with fixed deliverables.",
    bullets: [
      "Clear milestones",
      "Fixed timeline",
      "Documented handoff",
      "Optional ongoing support",
    ],
    investment: "From $25,000 per project",
    highlight: false,
  },
  {
    title: "Ongoing Support",
    description: "Maintenance and enhancement of existing applications.",
    bullets: ["Monthly retainer", "Priority response", "Continuous improvement", "Security updates"],
    investment: "From $3,500/month",
    highlight: false,
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 13 9 17 19 7" />
    </svg>
  );
}

export default function HowWeWorkWithEnterpriseClients() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14">
          How We Work With Enterprise Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {models.map((model) => (
            <article
              key={model.title}
              className={`rounded-3xl p-6 md:p-8 flex flex-col border ${
                model.highlight
                  ? "bg-[var(--color-deepSpace)] text-white border-transparent shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
                  : "bg-white text-[var(--color-deepSpace)] border-gray-200 shadow-[0_6px_30px_rgba(15,23,42,0.12)]"
              }`}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider mb-2">
                {model.title}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  model.highlight ? "text-gray-200" : "text-[var(--color-neutralGray)]"
                }`}
              >
                {model.description}
              </p>

              <ul className="space-y-2 mb-6">
                {model.bullets.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm ${
                      model.highlight ? "text-gray-100" : "text-[var(--color-deepSpace)]"
                    }`}
                  >
                    <span
                      className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                        model.highlight
                          ? "bg-[var(--color-electricBlue-solid)] text-white"
                          : "bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]"
                      }`}
                      aria-hidden
                    >
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`mt-auto pt-4 border-t ${model.highlight ? "border-white/15" : "border-gray-200"}`}>
                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.18em] mb-1 ${
                    model.highlight ? "text-gray-300" : "text-[var(--color-neutralGray)]"
                  }`}
                >
                  Investment
                </p>
                <p
                  className={`text-sm font-semibold ${
                    model.highlight ? "text-white" : "text-[var(--color-deepSpace)]"
                  }`}
                >
                  {model.investment}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

