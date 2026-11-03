export default function WhenToBuildVsBuy() {
  const buildItems = [
    {
      title: "Unique business logic",
      description:
        "Your workflow includes rules and processes that standard tools cannot support cleanly.",
    },
    {
      title: "Multiple systems must connect",
      description:
        "You need platforms to work together through custom integrations and data flows.",
    },
    {
      title: "Spreadsheets and workarounds dominate",
      description:
        "Your team relies heavily on manual processes that create delays and errors.",
    },
    {
      title: "Existing tools force compromises",
      description:
        "Off-the-shelf products require you to change how your business operates.",
    },
    {
      title: "Special permissions or integrations",
      description:
        "You need specific access controls, compliance workflows, or proprietary system connections.",
    },
    {
      title: "Strategic or operational value",
      description:
        "The workflow creates lasting value and needs to scale around your processes.",
    },
  ];

  const buyItems = [
    {
      title: "Your process is standard",
      description: "The workflow matches what proven SaaS products already handle well.",
    },
    {
      title: "An existing platform covers most needs",
      description:
        "A current product already solves the majority of your requirements.",
    },
    {
      title: "Speed matters more than customization",
      description: "You need something live quickly rather than tailored long-term.",
    },
    {
      title: "Your team is small",
      description: "A lightweight subscription tool may be the right starting point.",
    },
    {
      title: "Requirements are still evolving",
      description: "You are still learning what matters before investing in a custom build.",
    },
    {
      title: "Custom ownership is not important",
      description: "Vendor-hosted software is acceptable for this workflow.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-4 md:mb-6">
          Custom Software vs. Off-the-Shelf Automation
        </h2>
        <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto text-center">
          Not every workflow needs custom software. An existing SaaS or
          automation platform may be the better option when the process is
          common, requirements are straightforward, and a proven product already
          solves most of the problem.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/60 border border-sky-100 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 mb-3">
              Choose Custom Automation When
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
              Choose Off-the-Shelf Software When
            </p>
            <ul className="space-y-3 text-sm md:text-[15px] text-slate-700 mt-8">
              {buyItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-[7px] text-slate-400">•</span>
                  <div>
                    <p className="text-[13px] md:text-[14px] font-medium uppercase text-slate-900 mb-0.5">
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
        </div>

        <p className="mt-8 md:mt-10 text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
          The goal should not be to build custom software simply because it can
          be built. The right approach is the one that solves the business
          problem with an appropriate balance of cost, flexibility,
          maintainability, and risk.
        </p>
      </div>
    </section>
  );
}
