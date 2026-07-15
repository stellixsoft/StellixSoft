const features = [
  {
    title: "Multi-tenant Platform",
    items: [
      "Single codebase, multiple Fortune 500 clients",
      "Complete data isolation between tenants",
      "Customizable branding and workflows",
      "Role-based access control",
    ],
  },
  {
    title: "Real-time Device Monitoring",
    items: [
      "Live dashboard: 10,000+ devices worldwide",
      "Instant alerts for offline or malfunctioning devices",
      "Historical performance data and trend analysis",
      "Geographic deployment visualization",
    ],
  },
  {
    title: "Automated Ticketing",
    items: [
      "Tickets auto-created from device anomalies",
      "Smart routing by issue type and severity",
      "SLA tracking with escalation workflows",
      "Email and SMS notification integration",
    ],
  },
  {
    title: "Advanced Reporting Suite",
    items: [
      "Executive dashboards for C-level visibility",
      "Operational reports for field teams",
      "Compliance reporting for enterprise clients",
      "Scheduled report delivery via email",
    ],
  },
] as const;

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-electricBlue)]"
      aria-hidden
    >
      <svg
        className="h-3 w-3 text-white"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 6.5 5 9l4.5-6" />
      </svg>
    </span>
  );
}

export default function EnterprisePortalKeyFeatures() {
  return (
    <section className="bg-[#F3F5F8] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            What We Built
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            Key features delivered
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 lg:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:px-7 sm:py-7"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-deepSpace)] md:text-[15px]">
                {feature.title}
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
