import Link from "next/link";

const industries = [
  {
    title: "Logistics & Supply Chain",
    description:
      "Automation can connect dispatch, shipment tracking, customer updates, delivery workflows, proof of delivery, operational reporting, and related logistics systems.",
    supportsTitle: null,
    supports: [],
    link: {
      href: "/industries/logistics-and-supply-chain",
      label: "Logistics software solutions",
    },
  },
  {
    title: "Enterprise Operations",
    description:
      "Enterprise organizations often need workflows that connect multiple departments, databases, legacy applications, and business platforms.",
    supportsTitle: "Automation can support",
    supports: [
      "Approvals",
      "Reporting",
      "Compliance workflows",
      "Document management",
      "Data synchronization",
      "Internal operational systems",
    ],
    link: {
      href: "/services/enterprise-development",
      label: "Enterprise software development",
    },
  },
  {
    title: "Healthcare & MedTech",
    description:
      "Where appropriate to project and regulatory requirements, custom applications can support administrative workflows, scheduling, reporting, integrations, internal portals, and operational processes.",
    supportsTitle: null,
    supports: [],
    link: {
      href: "/industries/healthcare-and-medtech",
      label: "Healthcare & MedTech",
    },
  },
  {
    title: "IoT & Hardware Operations",
    description: "Automation can connect device platforms with:",
    supportsTitle: null,
    supports: [
      "Operational dashboards",
      "Alerts",
      "Provisioning",
      "Reporting",
      "Support workflows",
      "Enterprise systems",
    ],
    link: {
      href: "/services/iot-software",
      label: "IoT software development",
    },
  },
];

export default function AutomationByIndustry() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
          Business Automation by Industry
        </h2>
        <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto text-center">
          Automation requirements vary significantly by industry. These are the
          areas where we have hands-on delivery experience.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {industries.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] bg-gradient-to-b from-white to-sky-50/50 border border-slate-200/70 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-8 md:py-9 flex flex-col"
            >
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {item.description}
              </p>

              {item.supports.length > 0 && (
                <div className="mb-5">
                  {item.supportsTitle && (
                    <p className="text-[11px] md:text-xs font-medium uppercase text-slate-400 mb-2">
                      {item.supportsTitle}
                    </p>
                  )}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm md:text-[15px] text-slate-700 list-none p-0 m-0">
                    {item.supports.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span
                          className="h-[5px] w-[5px] rounded-full bg-sky-400 shrink-0"
                          aria-hidden
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href={item.link.href}
                className="mt-auto pt-4 border-t border-sky-50 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-electricBlue)] hover:underline underline-offset-4"
              >
                {item.link.label}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
