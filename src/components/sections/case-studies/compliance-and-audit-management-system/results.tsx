const topResults = [
  { value: "75%", label: "Less Audit Prep Time" },
  { value: "50%", label: "Faster Reporting" },
  { value: "Zero", label: "Missed Deadlines" },
  { value: "100%", label: "Audit Coverage" },
];

const efficiencyGains = [
  "75% reduction in time spent preparing for audits",
  "50% faster compliance report generation",
  "40% reduction in status meeting time",
  "Zero missed compliance deadlines (was 12 per year)",
];

const complianceImprovements = [
  "100% audit trail coverage for regulators",
  "Centralized documentation passed regulatory inspection",
  "Consistent procedures across all locations",
  "Real-time visibility into compliance status",
];

export default function ComplianceAndAuditManagementSystemResults() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: "var(--color-deepSpace)" }}>
      <div className="max-w-[1300px] mx-auto text-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">The Results</h2>
        </div>

        {/* Top metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
          {topResults.map((result) => (
            <div
              key={result.label}
              className="rounded-[26px] bg-white/5 border border-white/10 px-5 py-5 md:px-6 md:py-6 text-center shadow-[0_20px_70px_rgba(3,4,21,0.8)]"
            >
              <p className="text-2xl md:text-3xl font-semibold">{result.value}</p>
              <p className="mt-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-[15px]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Efficiency Gains
            </p>
            <ul className="space-y-2.5 text-white/90">
              {efficiencyGains.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Compliance Improvements
            </p>
            <ul className="space-y-2.5 text-white/90">
              {complianceImprovements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 px-6 py-3 shadow-[0_20px_70px_rgba(3,4,21,0.8)]">
            <svg className="h-5 w-5 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs md:text-sm text-white/90">
              Passed subsequent regulatory inspection with <span className="font-semibold text-[var(--color-electricBlue)]">NO FINDINGS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
