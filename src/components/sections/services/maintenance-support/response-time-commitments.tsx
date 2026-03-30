const rows = [
  {
    priority: "P1 – Critical",
    description: "System down, data at risk",
    response: "2 hours (Enterprise) / 4 hours (Pro)",
  },
  {
    priority: "P2 – High",
    description: "Major feature broken",
    response: "4 hours (Enterprise) / 8 hours (Pro)",
  },
  {
    priority: "P3 – Medium",
    description: "Feature impaired",
    response: "24 hours",
  },
  {
    priority: "P4 – Low",
    description: "Minor issues, requests",
    response: "48 hours",
  },
];

export default function ResponseTimeCommitments() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center">
          Response Time Commitments
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="overflow-hidden rounded-[32px] bg-[#0b0f26] border border-slate-800 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <table className="min-w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-[var(--color-electricBlue-solid)] font-semibold uppercase tracking-[0.18em] text-white">
                <th className="py-4 md:py-5 px-4 md:px-8 text-left rounded-tl-[32px] text-[11px] md:text-[12px]">
                  Priority
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-left text-[11px] md:text-[12px]">
                  Description
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-right md:text-center rounded-tr-[32px] text-[11px] md:text-[12px]">
                  Response Time
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.priority}
                  className={index !== rows.length - 1 ? "border-b border-slate-800/60" : ""}
                >
                  <td className="py-4 md:py-5 px-4 md:px-8 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {row.priority}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-[13px] md:text-[14px] text-slate-200">
                    {row.description}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-[13px] md:text-[14px] text-sky-200 text-right md:text-center">
                    {row.response}
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

