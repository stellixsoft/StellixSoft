const features = [
  {
    title: "Employee Self-Service Portal",
    description:
      "Real-time value visualization, \"what-if\" exercise calculators, and tax impact estimates to help employees understand their equity.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: "Automated Calculations",
    description:
      "Vesting engine runs nightly with support for cliffs, monthly schedules, and acceleration scenarios without manual intervention.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Compliance & Audit Ready",
    description:
      "Complete audit trail, 409A history, and automated board-ready reporting for regulatory and due diligence requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cap Table Management",
    description:
      "Real-time ownership visibility with dilution modeling and scenario analysis tools for future funding rounds or exits.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
];

export default function StockOptionsAndEquityManagementPlatformKeyFeatures() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Key Features Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-8 md:py-8 flex flex-col"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]">
                {feature.icon}
              </span>

              <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-deepSpace)] mb-3">
                {feature.title}
              </h3>

              <p className="text-sm md:text-[14px] text-[var(--color-neutralGray)] leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
