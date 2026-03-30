const pricingModels = [
  {
    title: "Project-Based",
    description: "One-time cloud migration or DevOps setup with defined scope.",
    examples: [
      "Cloud migration: $15K–50K+",
      "CI/CD pipeline: $5K–15K",
      "Infrastructure audit: $3K–8K",
    ],
    note: "Fixed scope, fixed price.",
  },
  {
    title: "Monthly Retainer",
    description: "Ongoing cloud management and DevOps support.",
    examples: ["Basic management: $2K/month", "Full management: $5K/month", "Enterprise: $10K+/month"],
    note: "Includes hours for improvements and optimization.",
  },
  {
    title: "Dedicated DevOps",
    description: "Full-time DevOps engineer as part of your team.",
    examples: ["$5,000–7,000/month"],
    note: "Works on your infrastructure, your pipelines, your processes. Embedded team member.",
  },
];

export default function HowWePriceDevOpsAndCloudWork() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          How We Price DevOps &amp; Cloud Work
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingModels.map((model) => (
            <article
              key={model.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 flex flex-col"
            >
              <h3 className="text-sm md:text-[15px] font-semibold uppercase tracking-[0.18em] text-[var(--color-deepSpace)] mb-3">
                {model.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4 leading-relaxed">
                {model.description}
              </p>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)] mb-2">
                Examples:
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-4">
                {model.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-[11px] md:text-xs text-[var(--color-neutralGray)]">
                {model.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

