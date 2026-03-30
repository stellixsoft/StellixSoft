const topResults = [
  { value: "95%", label: "Reduction in HR Time" },
  { value: "80%", label: "Faster Audit Prep" },
  { value: "100%", label: "Self-Service Adoption" },
  { value: "Zero", label: "Calculation Errors" },
  { value: "Real-Time", label: "Equity Values" },
  { value: "Always", label: "Audit Ready" },
];

const administrativeEfficiency = [
  "95% reduction in HR time spent on equity management",
  "80% faster audit preparation (days to hours)",
  "Zero calculation errors (previously 2–3 per quarter)",
  "Real-time cap table availability (was weeks behind)",
];

const employeeExperience = [
  "100% employee adoption of self-service portal",
  "90% reduction in equity-related HR inquiries",
  "Employees fully understand their equity packages",
  "Faster onboarding with automated explanations",
];

export default function StockOptionsAndEquityManagementPlatformResults() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: "var(--color-deepSpace)" }}>
      <div className="max-w-[1300px] mx-auto text-white">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">The Results</h2>
        </div>

        {/* Metric cards - 2x3 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-16">
          {topResults.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl sm:rounded-[26px] bg-white/5 border border-white/10 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 text-center shadow-[0_20px_70px_rgba(3,4,21,0.8)]"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">{result.value}</p>
              <p className="mt-1.5 sm:mt-2 text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm md:text-[15px]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Administrative Efficiency
            </p>
            <ul className="space-y-2.5 text-white/90">
              {administrativeEfficiency.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Employee Experience
            </p>
            <ul className="space-y-2.5 text-white/90">
              {employeeExperience.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
