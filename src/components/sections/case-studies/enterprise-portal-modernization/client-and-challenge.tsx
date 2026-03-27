const technicalDebtItems = [
  "Legacy VB.NET codebase with limited developer availability",
  "Monolithic architecture that couldn’t scale",
  "No real-time capabilities for device monitoring",
  "Single-tenant design limiting enterprise client growth",
];

const businessImpactItems = [
  "New feature development took 3–4x longer than competitors",
  "Couldn’t onboard large enterprise clients due to scalability limits",
  "Support tickets increasing due to system performance issues",
  "Risk of losing Fortune 500 contracts without modernization",
];

export default function EnterprisePortalClientAndChallenge() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        {/* The Client */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            The Client
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed">
            Our client is a global hardware manufacturer specializing in RFID systems, IP cameras,
            and enterprise networking equipment. Their products are deployed across Fortune 500
            supply chains, including operations for PepsiCo in the United States.
          </p>
          <p className="mt-3 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed">
            With 150+ employees and operations spanning North America and Europe, the client needed
            enterprise-grade software to manage device deployments for their corporate customers.
          </p>
        </div>

        {/* Spacer between sections */}
        <div className="h-20 md:h-24" />

        {/* The Challenge */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            The Challenge
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-8 lg:gap-10 items-start">
          {/* Left column: two white cards */}
          <div className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
                Technical Debt
              </p>
              <ul className="space-y-2.5 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                {technicalDebtItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff4b5c]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-7 md:py-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
                Business Impact
              </p>
              <ul className="space-y-2.5 text-sm md:text-[15px] text-[var(--color-deepSpace)]">
                {businessImpactItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff4b5c]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: dark previous attempts card */}
          <div className="rounded-[32px] bg-[var(--color-deepSpace)] text-white px-6 py-7 md:px-8 md:py-9 shadow-[0_22px_70px_rgba(15,23,42,0.55)] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/5" aria-hidden />
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60 mb-4">
              Previous Attempts
            </p>
            <p className="text-sm md:text-[15px] leading-relaxed text-white/90 mb-5">
              Two previous modernization attempts with other development agencies had failed. The
              internal team lacked .NET Core migration expertise, and they needed a partner who
              could modernize without disrupting live operations serving Fortune 500 clients.
            </p>
            <p className="mt-4 text-xs md:text-sm font-medium text-[var(--color-electricBlue)] flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[var(--color-electricBlue)] text-[9px]">
                !
              </span>
              Strategic intervention required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

