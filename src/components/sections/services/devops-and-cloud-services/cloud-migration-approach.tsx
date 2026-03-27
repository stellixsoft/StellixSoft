const phases = [
  {
    number: "1",
    label: "Phase 1",
    title: "Assessment",
    timeframe: "Week 1–2",
    items: [
      "Current infrastructure audit",
      "Application dependency mapping",
      "Cloud readiness evaluation",
      "Cost modeling",
      "Risk assessment",
    ],
  },
  {
    number: "2",
    label: "Phase 2",
    title: "Planning",
    timeframe: "Week 3–4",
    items: [
      "Migration strategy selection",
      "Target architecture design",
      "Timeline & phasing",
      "Resource allocation",
      "Rollback planning",
    ],
  },
  {
    number: "3",
    label: "Phase 3",
    title: "Preparation",
    timeframe: "Week 5–8",
    items: [
      "Infrastructure setup",
      "CI/CD pipeline creation",
      "Security configuration",
      "Monitoring setup",
      "Team training",
    ],
  },
  {
    number: "4",
    label: "Phase 4",
    title: "Migration",
    timeframe: "Week 9–12",
    items: [
      "Staged migration execution",
      "Data synchronization",
      "Testing at each phase",
      "Performance validation",
      "Traffic cutover",
    ],
  },
  {
    number: "5",
    label: "Phase 5",
    title: "Optimization",
    timeframe: "Ongoing",
    items: [
      "Cost optimization",
      "Performance tuning",
      "Security hardening",
      "Scaling configuration",
      "Documentation",
    ],
  },
];

export default function OurCloudMigrationApproach() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Our Cloud Migration Approach
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {phases.map((phase) => (
            <article
              key={phase.label}
              className="rounded-[26px] bg-white border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-4 py-6 md:px-5 md:py-7 flex flex-col"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)] text-xs font-semibold mx-auto md:mx-0">
                {phase.number}
              </div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] text-center md:text-left">
                {phase.label}
              </p>
              <h3 className="mt-1 text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] text-center md:text-left">
                {phase.title}
              </h3>
              <p className="mt-1 text-[11px] md:text-xs font-medium text-[var(--color-neutralGray)] text-center md:text-left mb-3">
                {phase.timeframe}
              </p>
              <ul className="space-y-1.5 text-xs md:text-[13px] text-[var(--color-neutralGray)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
                    <span>{item}</span>
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

