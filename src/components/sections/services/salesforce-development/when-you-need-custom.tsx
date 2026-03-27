export default function WhenYouNeedCustomSalesforce() {
  const reasons = [
    {
      title: "Declarative Tools Aren’t Enough",
      description: "Flows and point-and-click tools can’t handle your complex logic.",
    },
    {
      title: "Complex Integrations Needed",
      description: "Real-time sync with ERP, custom APIs, or legacy systems.",
    },
    {
      title: "Unique Business Processes",
      description: "Your sales/service process doesn’t fit standard Salesforce patterns.",
    },
    {
      title: "Performance Issues",
      description: "Current implementation is slow or hitting Salesforce governor limits.",
    },
    {
      title: "Custom UI Required",
      description: "Standard Lightning pages don’t match your specific user experience needs.",
    },
    {
      title: "External App Required",
      description: "Need to expose Salesforce data in external portals or applications.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          When You Need Custom Salesforce Development
        </h2>

        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] bg-white border border-slate-200/80 shadow-[0_18px_55px_rgba(15,23,42,0.05)] px-6 py-5"
            >
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 mb-1.5">
                ➜ {item.title}
              </p>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

