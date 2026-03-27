export default function SalesforceTechnologyExpertise() {
  const columns = [
    {
      title: "Development",
      items: ["Apex (triggers, classes)", "Lightning Web Components", "Visualforce", "SOQL/SOSL"],
    },
    {
      title: "Automation",
      items: ["Flows & Process Builder", "Approval processes", "Scheduled jobs", "Platform events"],
    },
    {
      title: "Integration",
      items: ["REST/SOAP APIs", "Platform events", "Heroku Connect", "MuleSoft basics"],
    },
    {
      title: "Clouds",
      items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud"],
    },
  ];

  const adminCapabilities = [
    "Custom objects/fields",
    "Permission sets/profiles",
    "Reports & dashboards",
    "Data management",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          Salesforce Technology Expertise
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-10">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-[28px] bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8"
            >
              <h3 className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-slate-900 mb-4">
                {col.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs md:text-[13px] font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] bg-[#050819] text-white px-6 md:px-10 lg:px-14 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
            Admin &amp; Config Capabilities
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-white/80">
            {adminCapabilities.map((cap, idx) => (
              <span key={cap} className="flex items-center gap-2">
                {idx > 0 && <span className="h-[2px] w-[18px] bg-white/20" />}
                <span>{cap}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

