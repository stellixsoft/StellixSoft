const specializations = [
  {
    icon: "/assets/images/iot.png",
    title: "LEGACY MODERNIZATION",
    description:
      "Upgrade aging systems without disrupting operations.",
    items: [
      "VB.NET → .NET Core",
      "Monolith → Microservices",
      "On-premise → Cloud",
      "Zero-downtime migration",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "CUSTOM ENTERPRISE PLATFORMS",
    description:
      "Purpose-built applications when off-the-shelf doesn’t fit.",
    items: [
      "Custom ERP/CRM",
      "Workflow systems",
      "Compliance platforms",
      "Multi-tenant SaaS",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "ENTERPRISE INTEGRATION",
    description:
      "Connect your systems for unified data flow.",
    items: [
      "API development",
      "Data synchronization",
      "Middleware solutions",
      "ETL pipelines",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "REAL-TIME SYSTEMS",
    description:
      "Live dashboards and instant notifications for time-sensitive operations.",
    items: [
      "SignalR/WebSocket",
      "Event-driven architecture",
      "Live monitoring",
      "Alerting systems",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "DEDICATED TEAMS",
    description:
      "Long-term development partnerships with dedicated resources.",
    items: [
      "Full development teams",
      "Your timezone",
      "Your processes",
      "Multi-year relationships",
    ],
  },
  {
    icon: "/assets/images/iot.png",
    title: "ONGOING SUPPORT",
    description:
      "Maintain and enhance your enterprise applications.",
    items: [
      "Bug fixes",
      "Security updates",
      "Feature additions",
      "Performance optimization",
    ],
  },
];

function Icon() {
  return (
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ backgroundColor: "var(--color-electricBlue)", opacity: 0.15 }}
      aria-hidden
    >
      <span
        className="w-5 h-5 rounded"
        style={{ backgroundColor: "var(--color-electricBlue)" }}
      />
    </span>
  );
}

export default function EnterpriseSoftwareSolutions() {
  return (
    <section
      id="specializations"
      className="py-16 md:py-24 px-4 sm:px-6 bg-white"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(16, 172, 219, 0.04) 0%, transparent 20%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-8">
          Enterprise Software Solutions          </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-12" style={{ backgroundColor: "var(--color-electricBlue)" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specializations.map((spec) => (
            <article
              key={spec.title}
              className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">

                <div>
                  <img src={spec.icon} alt={spec.title} className="w-10 h-10 mb-6 object-contain" />
                  <h3 className="text-lg font-medium text-[var(--color-deepSpace)] mb-4">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed mb-4">
                    {spec.description}
                  </p>
                  <ul className="space-y-2">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-neutralGray)] leading-relaxed"
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-electricBlue)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
