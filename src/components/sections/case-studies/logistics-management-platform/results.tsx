const topResults = [
  { value: "70%", label: "Reduction in status calls" },
  { value: "40%", label: "Faster dispatch time" },
  { value: "90%", label: "Client self-service" },
  { value: "5+", label: "Tools replaced" },
  { value: "100%", label: "Digital POD" },
  { value: "2x", label: "Shipment capacity" },
];

const operationalImprovements = [
  "70% reduction in “where’s my shipment” phone calls",
  "40% faster dispatch-to-pickup time across the fleet",
  "Replaced 5+ separate tools (Excel, WhatsApp, paper)",
  "100% digital proof of delivery (was 0%)",
  "90% of clients now use the self-service portal",
];

const businessImpact = [
  "Doubled shipment capacity without adding admin staff",
  "Won 2 enterprise contracts that required real-time tracking",
  "Customer satisfaction scores increased significantly",
  "Driver efficiency improved with optimized routes",
  "Streamlined invoicing and payment cycles",
];

export default function LogisticsManagementPlatformResults() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: "var(--color-deepSpace)" }}>
      <div className="max-w-[1300px] mx-auto text-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">The Results</h2>
        </div>

        {/* Top metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {topResults.map((result) => (
            <div
              key={result.label}
              className="rounded-[26px] bg-white/5 border border-white/10 px-5 py-4 md:px-6 md:py-5 text-center shadow-[0_20px_70px_rgba(3,4,21,0.8)]"
            >
              <p className="text-2xl md:text-3xl font-semibold">{result.value}</p>
              <p className="mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-[15px]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
              Operational Improvements
            </p>
            <ul className="space-y-2.5 text-white/90">
              {operationalImprovements.map((item) => (
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] mb-4">
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
        </div>
      </div>
    </section>
  );
}

