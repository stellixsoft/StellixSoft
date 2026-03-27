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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Staff Augmentation vs. Dedicated Teams
        </h2>
        <p className="mt-3 text-sm md:text-base text-[var(--color-neutralGray)] text-center max-w-2xl mx-auto">
          Both models deliver high-quality talent, but they serve different project needs.
        </p>
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
                  Features
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-center text-[11px] md:text-[12px]">
                  Staff Augmentation
                </th>
                <th className="py-4 md:py-5 px-4 md:px-6 text-center rounded-tr-[32px] text-[11px] md:text-[12px]">
                  Dedicated Team
                </th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-deepSpace)]">
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index !== rows.length - 1 ? "border-b border-slate-100" : ""}
                >
                  <td className="py-4 md:py-5 px-4 md:px-8 font-medium text-[13px] md:text-[14px] text-slate-700">
                    {row.feature}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-[13px] md:text-[14px] text-slate-700 text-center">
                    {row.staffAug}
                  </td>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-[13px] md:text-[14px] text-slate-700 text-center">
                    {row.dedicated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 md:py-5 bg-slate-50">
            <p className="text-xs md:text-sm text-[var(--color-neutralGray)]">
              Not sure which is right? Talk to us—we&apos;ll help you decide.
            </p>
            <a
              href="/services/dedicated-development-teams"
              className="text-xs md:text-sm font-semibold text-[var(--color-electricBlue)] inline-flex items-center gap-1 hover:text-sky-500"
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

