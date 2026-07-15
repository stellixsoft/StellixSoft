const phases = [
  {
    phase: "Phase 01",
    months: "Month 1-2",
    title: "Assessment & Architecture",
    items: [
      "Complete codebase audit of legacy VB.NET system",
      "Mapped all dependencies and integration",
      "Designed modern .NET Core 6 architecture",
      "Zero-downtime migration roadmap",
    ],
  },
  {
    phase: "Phase 02",
    months: "Month 3-6",
    title: "Core Infrastructure Migration",
    items: [
      "Migrated backend from VB.NET to .NET Core 6",
      "Implemented multi-tenant architecture",
      "Set up AWS infrastructure (EC2, RDS, S3)",
      "Established CI/CD pipeline",
    ],
  },
  {
    phase: "Phase 03",
    months: "Month 7-9",
    title: "Real-Time Capabilities",
    items: [
      "Implemented SignalR for real-time device monitoring",
      "Live dashboard for global device status",
      "Automated alerting system for device issues",
      "Real-time reporting engine",
    ],
  },
  {
    phase: "Phase 04",
    months: "Month 10-18",
    title: "New Module Development",
    items: [
      "Order Management with approval workflows",
      "Product Allocation Tool for inventory",
      "Operations Module for field teams",
      "Advanced Analytics Dashboard",
    ],
  },
  {
    phase: "Phase 05",
    months: "Month 19-24",
    title: "Ticketing & Support System",
    items: [
      "Enterprise support ticketing system",
      "Auto ticket creation from device anomalies",
      "Email and SMS dispatch for alerts",
      "SLA tracking and escalation workflows",
    ],
  },
  {
    phase: "Phase 06",
    months: "Month 24+",
    title: "Ongoing Development",
    items: [
      "Continuous feature development",
      "Performance optimization",
      "24/7 monitoring and support",
      "Regular security updates",
    ],
  },
] as const;

export default function EnterprisePortalOurSolution() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            Incremental modernization never disrupting live operations
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
            We upgraded the system module by module, running old and new in
            parallel throughout the migration. Six phases, zero downtime.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {phases.map((phase) => (
            <article
              key={phase.phase}
              className="flex flex-col rounded-2xl bg-[#F3F4F6] px-5 py-5 sm:px-6 sm:py-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
                  {phase.phase}
                </p>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-deepSpace)]">
                  {phase.months}
                </span>
              </div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-deepSpace)] md:text-[15px]">
                {phase.title}
              </h3>

              <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]"
                      aria-hidden
                    />
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
