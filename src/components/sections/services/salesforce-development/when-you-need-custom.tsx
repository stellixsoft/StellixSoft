import { BACKGROUND_URL } from "@/src/lib/background-url";

function PlusBadge() {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-lg font-light text-sky-500 leading-none"
      aria-hidden
    >
      +
    </span>
  );
}

export default function WhenYouNeedCustomSalesforce() {
  const reasons = [
    {
      title: "Declarative Tools Aren’t Enough",
      description: "Flows and point-and-click tools can’t handle your complex logic.",
    },
    {
      title: "Complex Integrations Needed",
      description: "Real-time sync with ERP, custom APIs or legacy systems.",
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
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          When You Need Custom Salesforce Development
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-slate-200/80 bg-white px-6 py-5 shadow-[0_18px_55px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-3 flex items-start gap-3">
                <PlusBadge />
                <h3 className="text-[12px] font-semibold uppercase leading-snug tracking-[0.08em] text-slate-900 md:text-[13px]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 md:text-[15px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
