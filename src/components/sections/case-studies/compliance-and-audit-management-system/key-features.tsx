const features = [
  {
    title: "Custom Workflow Builder",
    description:
      "Create compliance workflows without code. Define statuses, allowed transitions, and set permissions per status. Configure automatic actions like assign, notify, and escalate.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
  {
    title: "Smart Notifications",
    description:
      "Right information to right people. Email alerts for assignments, Slack integration for channels, and escalation alerts for SLA breaches. Support for @mentions in comments.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

export default function ComplianceAndAuditManagementSystemKeyFeatures() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Key Features Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-6 md:px-8 md:py-8 flex flex-col"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/10 text-[var(--color-electricBlue)]">
                {feature.icon}
              </span>

              <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-deepSpace)] mb-3">
                {feature.title}
              </h3>

              <p className="text-sm md:text-[14px] text-[var(--color-neutralGray)] leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
