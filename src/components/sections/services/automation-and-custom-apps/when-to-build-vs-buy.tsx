export default function WhenToBuildVsBuy() {
  const buildItems = [
    {
      title: "Your workflow is unique",
      description:
        "Off‑the‑shelf tools force you to change how you work.",
    },
    {
      title: "You’ve outgrown existing tools",
      description:
        "Spreadsheets and basic tools can’t scale with your business.",
    },
    {
      title: "Integration is the priority",
      description: "You need to connect multiple systems in specific ways.",
    },
    {
      title: "Competitive advantage matters",
      description: "Your processes are a differentiator worth protecting.",
    },
    {
      title: "Long‑term cost matters",
      description: "Per‑user SaaS fees add up; custom tools have fixed costs.",
    },
  ];

  const buyItems = [
    {
      title: "Standard processes",
      description: "Your workflow matches what existing tools expect.",
    },
    {
      title: "Speed matters most",
      description: "You need a solution today, not in 3 months.",
    },
    {
      title: "Budget is very tight",
      description: "$50/month beats a custom build for small teams.",
    },
    {
      title: "You’re unsure what you need",
      description: "Try existing tools first to learn what matters.",
    },
    {
      title: "Vendor support is important",
      description: "Large vendors provide support, updates, training.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          When to Build Custom vs. Buy Off the Shelf
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/60 border border-sky-100 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 mb-3">
              Build Custom When:
            </p>
            <ul className="space-y-3 text-sm md:text-[15px] text-slate-700 mt-8">
              {buildItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-[7px] text-sky-500">➜</span>
                  <div>
                    <p className="text-[13px] md:text-[14px] font-medium uppercase text-[var(--color-deepSpace)] mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-[12px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] bg-white border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.04)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">
              Use Off-the-Shelf When:
            </p>
            <ul className="space-y-3 text-sm md:text-[15px] text-slate-700 mt-8">
              {buyItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-[7px] text-slate-400">•</span>
                  <div>
                    <p className="text-[13px] md:text-[14px] font-medium uppercase text-slate-900 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm md:text[12px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

