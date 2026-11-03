import Link from "next/link";

const cases = [
  {
    badge: "Case Study: 2B Lines",
    title: "Logistics Dispatch Automation",
    caseStudyHref: "/case-studies/logistics-management-platform",
    problem:
      "Scheduling relied heavily on Excel, drivers needed to contact the office for updates, and operational information was spread across multiple tools.",
    solution:
      "StellixSoft built a custom dispatch platform with automated scheduling, real-time tracking, driver workflows, and digital proof of delivery.",
    results: [
      "70% reduction in status calls",
      "40% faster dispatch",
      "Shipment capacity doubled",
      "5+ separate tools replaced",
    ],
  },
  {
    badge: "Case Study: Enterprise Client",
    title: "Compliance Workflow System",
    caseStudyHref: "/case-studies/compliance-and-audit-management-system",
    problem:
      "Compliance audits were tracked across spreadsheets and documents, making deadlines, records, and audit preparation difficult to manage centrally.",
    solution:
      "A centralized compliance workflow platform with task tracking, document management, audit trails, and automated status visibility.",
    results: [
      "75% reduction in audit preparation time",
      "Zero missed deadlines during the measured period",
      "Complete audit trail coverage",
      "40% fewer status meetings",
    ],
  },
  {
    badge: "Case Study: Doctor Appliance",
    title: "Service Business Platform",
    caseStudyHref: "/case-studies/multi-location-service-business-platform",
    problem:
      "Multiple locations relied on disconnected tools, with no unified system for scheduling, technician operations, customer information, and service management.",
    solution:
      "A unified platform combining an admin dashboard, technician application, customer portal, booking, and real-time operational tracking.",
    results: [
      "35% more jobs per technician",
      "60% of bookings moved online",
      "Four states managed on one platform",
      "50% faster billing cycle",
    ],
  },
];

export default function AutomationInAction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-8 md:mb-10">
          Business Automation in Action
        </h2>

        <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Real projects where custom automation and internal tools reduced
          manual work, connected systems, and improved day-to-day operations.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] bg-white border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8 flex flex-col"
            >
              <p className="text-[10px] md:text-[11px] font-medium uppercase text-sky-500 mb-3">
                {item.badge}
              </p>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-4">
                {item.title}
              </h3>

              <div className="space-y-4 text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                <div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">
                    Challenge
                  </p>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">
                    Solution
                  </p>
                  <p>{item.solution}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-sky-50">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 mb-2">
                  Reported Results
                </p>
                <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-800">
                  {item.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-[5px] text-sky-400">✦</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.caseStudyHref}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-electricBlue)] hover:underline underline-offset-4"
                  aria-label={`Read case study: ${item.title}`}
                >
                  Read case study
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
