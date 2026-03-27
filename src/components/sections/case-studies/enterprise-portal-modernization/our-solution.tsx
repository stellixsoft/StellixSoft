const phases = [
  {
    title: "Phase 1: Assessment & Architecture",
    months: "Month 1–2",
    items: [
      "Complete codebase audit of legacy VB.NET system",
      "Mapped all dependencies and integration points",
      "Designed modern .NET Core 6 architecture",
      "Created migration roadmap with zero-downtime approach",
    ],
  },
  {
    title: "Phase 2: Core Infrastructure Migration",
    months: "Month 3–6",
    items: [
      "Migrated backend from VB.NET to .NET Core 6",
      "Implemented multi-tenant architecture for enterprise clients",
      "Set up AWS infrastructure (EC2, RDS, S3)",
      "Established CI/CD pipeline for continuous deployment",
    ],
  },
  {
    title: "Phase 3: Real-Time Capabilities",
    months: "Month 7–9",
    items: [
      "Implemented SignalR for real-time device monitoring",
      "Built live dashboard showing device status across global deployments",
      "Created automated alerting system for device issues",
      "Developed real-time reporting engine",
    ],
  },
  {
    title: "Phase 4: New Module Development",
    months: "Month 10–18",
    items: [
      "Order Management System with approval workflows",
      "Product Allocation Tool for inventory optimization",
      "Operations Module for field team management",
      "Advanced Analytics and Reporting Dashboard",
    ],
  },
  {
    title: "Phase 5: Ticketing & Support System",
    months: "Month 19–24",
    items: [
      "Complete ticketing system for enterprise support",
      "Integration with device events for automatic ticket creation",
      "Auto email and SMS dispatch for critical alerts",
      "SLA tracking and escalation workflows",
    ],
  },
  {
    title: "Phase 6: Ongoing Development",
    months: "Month 24+",
    items: [
      "Continuous feature development",
      "Performance optimization",
      "24/7 monitoring and support",
      "Regular security updates",
    ],
  },
];

export default function EnterprisePortalOurSolution() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#f5f7fb]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Our Solution
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed">
            We proposed an incremental modernization strategy—upgrading the system module by module
            while keeping it fully operational for existing clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {phases.map((phase) => (
            <article
              key={phase.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] max-w-[70%]">
                  {phase.title}
                </p>
                <span className="inline-flex flex-col items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
                  {phase.months}
                </span>
              </div>
              <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--color-electricBlue)" }}
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

