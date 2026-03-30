const rows = [
  { feature: "Effective Hourly", stellix: "$25-40/hr", agency: "$100-200/hr", inHouse: "$75-95/hr" },
  { feature: "Monthly / Developer", stellix: "$4k - 5.6k", agency: "$16k - 32k", inHouse: "$12k - 15k" },
  { feature: "Time to Start", stellix: "2 weeks", agency: "2-4 weeks", inHouse: "3-6 months" },
  { feature: "Timezone", stellix: "US Aligned", agency: "US Based", inHouse: "US Based" },
  { feature: "Long-Term Cost", stellix: "Lowest", agency: "Highest", inHouse: "High + overhead" },
  { feature: "Flexibility", stellix: "High", agency: "Medium", inHouse: "Low" },
];

export default function CompareRates() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]" style={{ backgroundImage: "url('/assets/images/background-url.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="max-w-[1300px] mx-auto">
        <div className="hidden md:block rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[var(--color-deepSpace)] text-white">
                <th className="text-left py-4 px-5 md:px-6 font-medium text-sm uppercase tracking-wider">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-medium text-sm uppercase tracking-wider border-l border-white/20">
                  Stellixsoft
                </th>
                <th className="text-center py-4 px-4 font-medium text-sm uppercase tracking-wider border-l border-white/20">
                  US Agency
                </th>
                <th className="text-center py-4 px-4 font-medium text-sm uppercase tracking-wider border-l border-white/20">
                  US In-House
                </th>  
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  }
                >
                  <td className="py-4 px-5 md:px-6 text-sm font-normal text-[var(--color-deepSpace)] border-t border-gray-200">
                    {row.feature}
                  </td>
                  <td
                    className="py-4 px-4 text-sm text-center border-t border-l border-gray-200"
                    style={{ color: "var(--color-electricBlue)", fontWeight: 500 }}
                  >
                    {row.stellix}
                  </td>
                  <td className="py-4 px-4 text-sm text-center text-[var(--color-deepSpace)] border-t border-l border-gray-200">
                    {row.agency}
                  </td>
                  <td className="py-4 px-4 text-sm text-center text-[var(--color-deepSpace)] border-t border-l border-gray-200">
                    {row.inHouse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / tablet: scrollable table */}
        <div className="md:hidden rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)]">
          <div className="overflow-x-auto -mx-px">
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-[var(--color-deepSpace)] text-white">
                  <th className="text-left py-3 px-3 font-semibold text-xs uppercase tracking-wider w-[28%]">
                    Feature
                  </th>
                  <th className="text-center py-3 px-2 font-semibold text-xs uppercase tracking-wider border-l border-white/20">
                    Stellixsoft
                  </th>
                  <th className="text-center py-3 px-2 font-semibold text-xs uppercase tracking-wider border-l border-white/20">
                    US Agency
                  </th>
                  <th className="text-center py-3 px-2 font-semibold text-xs uppercase tracking-wider border-l border-white/20">
                    US In-House
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    }
                  >
                    <td className="py-3 px-3 text-xs font-medium text-[var(--color-deepSpace)] border-t border-gray-200">
                      {row.feature}
                    </td>
                    <td
                      className="py-3 px-2 text-xs text-center border-t border-l border-gray-200 whitespace-nowrap"
                      style={{ color: "var(--color-electricBlue)", fontWeight: 500 }}
                    >
                      {row.stellix}
                    </td>
                    <td className="py-3 px-2 text-xs text-center text-[var(--color-deepSpace)] border-t border-l border-gray-200 whitespace-nowrap">
                      {row.agency}
                    </td>
                    <td className="py-3 px-2 text-xs text-center text-[var(--color-deepSpace)] border-t border-l border-gray-200 whitespace-nowrap">
                      {row.inHouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
