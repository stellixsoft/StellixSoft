const phases = [
  {
    label: "Phase 1",
    title: "Discovery & Design",
    timeframe: "Week 1–3",
    items: [
      "Requirements gathering",
      "User flow mapping",
      "UI/UX design",
      "Technical architecture",
      "Platform selection",
    ],
  },
  {
    label: "Phase 2",
    title: "Development",
    timeframe: "Week 4–10",
    items: [
      "Sprint-based development",
      "Regular builds for testing",
      "API integration",
      "Backend coordination",
      "Continuous testing",
    ],
  },
  {
    label: "Phase 3",
    title: "Testing & QA",
    timeframe: "Week 11–12",
    items: [
      "Device testing matrix",
      "Performance optimization",
      "Security review",
      "User acceptance testing",
      "Bug fixes",
    ],
  },
  {
    label: "Phase 4",
    title: "Launch & Support",
    timeframe: "Ongoing",
    items: [
      "App store submission",
      "Release management",
      "Performance monitoring",
      "Feature updates",
      "Ongoing maintenance",
    ],
  },
];

export default function HowWeBuildMobileApps() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          How We Build Mobile Apps
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {phases.map((phase, index) => (
            <article
              key={phase.label}
              className="relative rounded-[30px] bg-white border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10"
            >
              <p className="text-[11px] md:text-xs font-medium uppercase text-[var(--color-electricBlue)] mb-2">
                {phase.label}
              </p>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-1">
                {phase.title}
              </h3>
              <p className="text-xs md:text-[13px] font-medium text-[var(--color-neutralGray)] mb-4">
                {phase.timeframe}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[13px] text-[var(--color-neutralGray)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* {index < phases.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-5 h-[1px] w-8 bg-[var(--color-electricBlue)]/30" />
              )} */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

