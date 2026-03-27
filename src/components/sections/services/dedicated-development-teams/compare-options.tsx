const rows = [
  {
    metric: "Time to Start",
    dedicatedTeam: "2 weeks",
    inHouse: "3–6 months",
    typicalAgency: "2–4 weeks",
  },
  {
    metric: "Monthly Cost / Dev",
    dedicatedTeam: "$4K – $5.5K",
    inHouse: "$12K – $15K",
    typicalAgency: "$8K – $15K",
  },
  {
    metric: "Effective Hourly",
    dedicatedTeam: "$25 – $35/hr",
    inHouse: "$75 – $95/hr",
    typicalAgency: "$50 – $100/hr",
  },
  {
    metric: "Timezone",
    dedicatedTeam: "US aligned",
    inHouse: "US based",
    typicalAgency: "Often offshore",
  },
  {
    metric: "Commitment",
    dedicatedTeam: "Long‑term",
    inHouse: "Full employment",
    typicalAgency: "Project‑based",
  },
  {
    metric: "Direct Access",
    dedicatedTeam: "Yes",
    inHouse: "Yes",
    typicalAgency: "Sometimes",
  },
  {
    metric: "Scaling",
    dedicatedTeam: "Flexible",
    inHouse: "Difficult",
    typicalAgency: "Limited",
  },
  {
    metric: "Knowledge Retention",
    dedicatedTeam: "Stable",
    inHouse: "Turnover risk",
    typicalAgency: "Project‑end loss",
  },
];

export default function CompareYourOptions() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Compare Your Options
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(15,23,42,0.16)] border border-slate-900/5 bg-white">
          <table className="min-w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white font-semibold uppercase tracking-[0.18em]">
                <th className="py-4 md:py-5 px-4 md:px-8 text-left rounded-tl-[32px] text-[11px] md:text-[12px]">
                  Metric
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-center text-[var(--color-electricBlue)] text-[11px] md:text-[12px]">
                  Dedicated Team
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-center text-[11px] md:text-[12px]">
                  In‑House
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-center rounded-tr-[32px] text-[11px] md:text-[12px]">
                  Typical Agency
                </th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-deepSpace)]">
              {rows.map((row, index) => (
                <tr
                  key={row.metric}
                  className={index !== rows.length - 1 ? "border-b border-slate-100" : ""}
                >
                  <td className="py-4 md:py-5 px-4 md:px-8 font-medium uppercase tracking-[0.12em] text-[11px] md:text-[12px] text-slate-600">
                    {row.metric}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 font-semibold text-[var(--color-electricBlue)] text-center">
                    {row.dedicatedTeam}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 text-center">
                    {row.inHouse}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-slate-700 text-center">
                    {row.typicalAgency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

