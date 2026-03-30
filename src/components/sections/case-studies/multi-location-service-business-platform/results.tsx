const topResults = [
  { value: "35%", label: "More Jobs / Day" },
  { value: "25%", label: "Tech Utilization" },
  { value: "60%", label: "Online Bookings" },
  { value: "4", label: "States / One Platform" },
  { value: "100%", label: "Digital Records" },
  { value: "50%", label: "Faster Billing" },
];

const operationalEfficiency = [
  "35% increase in jobs completed per technician per day",
  "25% improvement in technician utilization",
  "Unified operations across 4 states on single platform",
  "100% digital job records (was mostly paper)",
];

const customerExperience = [
  "60% of bookings now happen online (was 0%)",
  "Real-time technician tracking reduced calls by 80%",
  "50% faster billing cycle due to digital completion",
  "Consistent experience regardless of location",
];

export default function MultiLocationServiceBusinessPlatformResults() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: "var(--color-deepSpace)" }}>
      <div className="max-w-[1300px] mx-auto text-white">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">The Results</h2>
        </div>

        {/* Top metric cards - 3x2 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-16">
          {topResults.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl sm:rounded-[26px] bg-white/5 border border-white/10 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 text-center shadow-[0_20px_70px_rgba(3,4,21,0.8)]"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold">{result.value}</p>
              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm md:text-[15px]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Operational Efficiency
            </p>
            <ul className="space-y-2.5 text-white/90">
              {operationalEfficiency.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Customer Experience
            </p>
            <ul className="space-y-2.5 text-white/90">
              {customerExperience.map((item) => (
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
