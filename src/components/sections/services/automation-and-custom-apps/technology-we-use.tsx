export default function TechnologyWeUse() {
  const columns = [
    {
      title: "Web & Mobile",
      items: ["React / Next.js", "Node.js", ".NET Core", "Flutter", "React Native"],
    },
    {
      title: "Databases & Infra",
      items: ["PostgreSQL", "MongoDB", "SQL Server", "AWS", "Google Cloud", "Docker"],
    },
    {
      title: "Integrations",
      items: ["REST APIs", "Webhooks", "Zapier / Make", "Retool (low-code)", "Custom dashboards"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-10 md:mb-12">
          Technology We Use
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-[28px] bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8"
            >
              <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-slate-900 mb-4">
                {col.title}
              </h3>
              <div className="h-px w-full bg-slate-100 mb-4" />
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
      </div>
    </section>
  );
}

