const topResults = [
  { value: "ZERO", label: "Downtime during migration" },
  { value: "60%", label: "Faster feature delivery" },
  { value: "10,000+", label: "Devices monitored real-time" },
  { value: "3+", label: "Years ongoing partner" },
  { value: "6", label: "Dedicated developers" },
  { value: "85%", label: "Tickets auto-resolved" },
];

const technicalAchievements = [
  "Zero downtime during complete platform migration",
  "80% reduction in time-to-market for new features",
  "System now handles 10x the transaction volume",
  "99.9% uptime since migration completion",
];

const businessImpact = [
  "Successfully onboarded 3 new Fortune 500 clients",
  "85% of support tickets now auto-resolved",
  "Client retained PepsiCo contract worth millions",
  "Platform became competitive advantage in sales",
];

const partnershipValue = [
  "3+ year ongoing relationship",
  "6 dedicated developers as client’s extended team",
  "Evolved from vendor to strategic partner",
];

export default function EnterprisePortalResults() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: "var(--color-deepSpace)" }}>
      <div className="max-w-[1300px] mx-auto text-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">The Results</h2>
        </div>

        {/* Top metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {topResults.map((result) => (
            <div
              key={result.label}
              className="rounded-[26px] bg-white/5 border border-white/10 px-5 py-4 md:px-6 md:py-5 text-center shadow-[0_20px_70px_rgba(3,4,21,0.8)]"
            >
              <p className="text-2xl md:text-3xl font-medium">{result.value}</p>
              <p className="mt-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-[15px]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Technical Achievements
            </p>
            <ul className="space-y-2.5 text-white/90">
              {technicalAchievements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Business Impact
            </p>
            <ul className="space-y-2.5 text-white/90">
              {businessImpact.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Partnership Value
            </p>
            <ul className="space-y-2.5 text-white/90">
              {partnershipValue.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                    aria-hidden
                  />
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

