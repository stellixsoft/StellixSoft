const comparisonData = [
  {
    feature: "Enterprise Experience",
    stellixsoft: { value: "Yes", type: "check" },
    typicalAgency: "Rarely",
    inHouse: "Varies",
  },
  {
    feature: "Hourly Cost",
    stellixsoft: { value: "$25-40/hr", type: "text" },
    typicalAgency: "$50-100/hr",
    inHouse: "$80-150/hr",
  },
  {
    feature: "Direct Dev Access",
    stellixsoft: { value: "Yes", type: "check" },
    typicalAgency: "No (PM only)",
    inHouse: "Yes",
  },
  {
    feature: "Time to Start",
    stellixsoft: { value: "2 Weeks", type: "text" },
    typicalAgency: "4-8 Weeks",
    inHouse: "3-6 Months",
  },
  {
    feature: "IP Ownership",
    stellixsoft: { value: "Full (Day 1)", type: "text" },
    typicalAgency: "Varies",
    inHouse: "Full",
  },
  {
    feature: "Tech Focus",
    stellixsoft: { value: "Enterprise (.NET/IoT)", type: "text" },
    typicalAgency: "Web/Marketing",
    inHouse: "Internal Only",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CompareOptions() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        backgroundImage: "url('/assets/images/background-url.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--color-deepSpace)] mb-3 md:mb-4 leading-tight">
            Compare Your Options
          </h2>
          <p className="text-sm md:text-base text-[var(--color-neutralGray)] max-w-2xl mx-auto leading-relaxed">
            See how we stack up against other choices for your software
            development needs.
          </p>
        </header>

        {/* Table - horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
          <div className="min-w-[560px] md:min-w-0">
            <table className="w-full min-w-[560px] md:min-w-0 border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--color-deepSpace)]/20">
                  <th className="text-left py-3 px-3 md:py-4 md:px-4 text-sm md:text-base font-medium text-[var(--color-deepSpace)] whitespace-nowrap">
                    Feature
                  </th>
                  <th className="text-center py-3 px-3 md:py-4 md:px-4 text-sm md:text-base font-medium text-[var(--color-electricBlue)] whitespace-nowrap">
                    StellixSoft
                  </th>
                  <th className="text-center py-3 px-3 md:py-4 md:px-4 text-sm md:text-base font-medium text-[var(--color-deepSpace)] whitespace-nowrap">
                    Typical Agency
                  </th>
                  <th className="text-center py-3 px-3 md:py-4 md:px-4 text-sm md:text-base font-medium text-[var(--color-deepSpace)] whitespace-nowrap">
                    In-House Hiring
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-[var(--color-deepSpace)]/10"
                  >
                    <td className="py-3 px-3 md:py-4 md:px-4 text-sm md:text-base font-normal text-[var(--color-deepSpace)] whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-3 px-3 md:py-4 md:px-4 text-center">
                      {row.stellixsoft.type === "check" ? (
                        <span className="inline-flex items-center gap-2 text-sm md:text-base text-[var(--color-electricBlue)] font-normal whitespace-nowrap">
                          <CheckIcon />
                          {row.stellixsoft.value}
                        </span>
                      ) : (
                        <span className="text-sm md:text-base text-[var(--color-electricBlue)] font-normal whitespace-nowrap">
                          {row.stellixsoft.value}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 md:py-4 md:px-4 text-center text-sm md:text-base text-[var(--color-neutralGray)] whitespace-nowrap">
                      {row.typicalAgency}
                    </td>
                    <td className="py-3 px-3 md:py-4 md:px-4 text-center text-sm md:text-base text-[var(--color-neutralGray)] whitespace-nowrap">
                      {row.inHouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile hint */}
        <p className="md:hidden text-center text-xs text-[var(--color-neutralGray)] mt-4">
          Scroll horizontally to see all columns →
        </p>
      </div>
    </section>
  );
}
