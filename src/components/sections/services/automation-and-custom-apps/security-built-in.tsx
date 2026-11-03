const securityGroups = [
  {
    title: "Access & Identity",
    items: [
      "Role-based access control",
      "Single sign-on",
      "Secure API authentication",
      "Least-privilege access",
    ],
  },
  {
    title: "Data Protection",
    items: [
      "Encryption in transit",
      "Encryption at rest",
      "Secrets and credential management",
      "Audit logging",
    ],
  },
  {
    title: "Operations & Resilience",
    items: [
      "Environment separation",
      "Monitoring",
      "Error logging",
      "Backup and recovery planning",
    ],
  },
];

export default function SecurityBuiltIn() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 mb-3">
            Security by Design
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
            Security Built Into Business Automation
          </h2>
          <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
            Business automation often connects operational systems and sensitive
            internal data, so security should be considered throughout
            architecture, development, and deployment. Depending on project
            requirements, solutions can support:
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {securityGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-white to-sky-50/50 shadow-[0_20px_60px_rgba(15,23,42,0.05)] px-6 py-7 md:px-7 md:py-8"
            >
              <h3 className="text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-[var(--color-deepSpace)] mb-5">
                {group.title}
              </h3>
              <div className="h-px w-full bg-slate-100 mb-5" />
              <ul className="space-y-3 list-none p-0 m-0">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-[15px] text-slate-700"
                  >
                    <span
                      className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 md:mt-10 text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
          Security controls should be selected based on the systems, data,
          users, and regulatory requirements involved in the project.
        </p>
      </div>
    </section>
  );
}
