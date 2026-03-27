const scenarios = [
  {
    title: "“We’re on bare metal and need to move to cloud”",
    description:
      "We’ll assess your current setup, design a cloud architecture, migrate with minimal downtime, and set up proper management.",
    timeline: "4–12 weeks depending on complexity",
  },
  {
    title: "“Our deployments are manual and risky”",
    description:
      "We’ll implement CI/CD pipelines, automated testing, and safe deployment patterns. Your team ships with confidence.",
    timeline: "2–4 weeks for pipeline setup",
  },
  {
    title: "“Our AWS bill is out of control”",
    description:
      "We’ll audit your infrastructure, identify waste, right-size resources, and implement cost monitoring.",
    timeline: "Typical savings: 20–40% reduction",
  },
];

export default function CommonCloudAndDevOpsScenarios() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Common Cloud &amp; DevOps Scenarios
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {scenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 flex flex-col"
            >
              <h3 className="text-sm md:text-[15px] font-semibold text-[var(--color-deepSpace)] mb-3">
                {scenario.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed mb-4">
                {scenario.description}
              </p>
              <p className="mt-auto text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-electricBlue)]">
                Timeline/Impact:{" "}
                <span className="font-medium normal-case tracking-normal text-[var(--color-neutralGray)]">
                  {scenario.timeline}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

