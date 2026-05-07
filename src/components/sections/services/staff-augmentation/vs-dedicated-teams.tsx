const rows = [
  {
    feature: "Team Size",
    staffAug: "1–2 developers",
    dedicated: "3+ developers",
  },
  {
    feature: "Management",
    staffAug: "You manage directly",
    dedicated: "Self-managing team",
  },
  {
    feature: "Integration",
    staffAug: "Joins your team",
    dedicated: "Works alongside your team",
  },
  {
    feature: "Best For",
    staffAug: "Skill gaps, capacity",
    dedicated: "Full projects, products",
  },
  {
    feature: "Commitment",
    staffAug: "Flexible, short-term",
    dedicated: "Long-term partnership",
  },
  {
    feature: "Our Role",
    staffAug: "Provide talent",
    dedicated: "Provide team + leadership",
  },
];

export default function StaffAugmentationVsDedicatedTeams() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Staff Augmentation vs. Dedicated Teams
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--color-neutralGray)] md:text-base">
          Both models deliver high-quality talent, but they serve different project needs.
        </p>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="overflow-hidden rounded-[32px] border border-slate-900/5 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.16)]">
          <table className="min-w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-900 font-semibold uppercase tracking-[0.18em] text-white">
                <th className="rounded-tl-[32px] px-4 py-4 text-left text-[11px] md:px-8 md:py-5 md:text-[12px]">Features</th>
                <th className="px-4 py-4 text-center text-[11px] md:px-6 md:py-5 md:text-[12px]">Staff Augmentation</th>
                <th className="rounded-tr-[32px] px-4 py-4 text-center text-[11px] md:px-6 md:py-5 md:text-[12px]">
                  Dedicated Team
                </th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-deepSpace)]">
              {rows.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? "bg-slate-50/80" : "bg-white"}>
                  <td className="border-b border-slate-100 px-4 py-4 text-[13px] font-semibold md:px-8 md:py-5 md:text-[14px]">
                    {row.feature}
                  </td>
                  <td className="border-b border-slate-100 px-4 py-4 text-center text-[13px] text-slate-700 md:px-6 md:py-5 md:text-[14px]">
                    {row.staffAug}
                  </td>
                  <td className="border-b border-slate-100 px-4 py-4 text-center text-[13px] text-slate-700 md:px-6 md:py-5 md:text-[14px]">
                    {row.dedicated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col items-center justify-between gap-4 bg-slate-50 px-4 py-4 md:flex-row md:px-8 md:py-5">
            <p className="text-center text-xs text-[var(--color-neutralGray)] md:text-left md:text-sm">
              Not sure which is right? Talk to us—we&apos;ll help you decide.
            </p>
            <a
              href="/services/dedicated-development-teams"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-electricBlue)] hover:text-sky-500 md:text-sm"
            >
              Learn About Dedicated Teams
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
