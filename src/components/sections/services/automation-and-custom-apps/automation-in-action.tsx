import Link from "next/link";

const cases = [
  {
    badge: "Case Study: 2B Lines",
    title: "Logistics Dispatch Automation",
    caseStudyHref: "/case-studies/logistics-management-platform",
    problem:
      "Scheduling managed via Excel. No real-time tracking. Drivers called office for every update.",
    solution:
      "Custom dispatch system with driver app. Automated scheduling, real-time tracking, digital proof of delivery.",
    results: [
      "70% reduction in status calls",
      "40% faster dispatch time",
      "Doubled shipment capacity",
      "Replaced 5+ separate tools",
    ],
  },
  {
    badge: "Case Study: Enterprise Client",
    title: "Compliance Workflow System",
    caseStudyHref: "/case-studies/compliance-and-audit-management-system",
    problem:
      "Audits tracked in spreadsheets. No single centralized system. Documentation took hours to find.",
    solution:
      "Jira-like workflow system for compliance. Automated tracking, document management, audit trails.",
    results: [
      "75% reduction in audit prep time",
      "Zero missed deadlines (was 1–2/yr)",
      "100% audit trail coverage",
      "40% fewer status meetings",
    ],
  },
  {
    badge: "Case Study: Doctor Appliance",
    title: "Service Business Platform",
    caseStudyHref: "/case-studies/multi-location-service-business-platform",
    problem:
      "Multi‑location operations with different tools at each location. No unified scheduling or customer management.",
    solution:
      "Unified platform: admin dashboard, technician app, customer portal. Online booking, real-time tracking.",
    results: [
      "35% more jobs per technician",
      "60% of bookings now online",
      "4 states on one platform",
      "50% faster billing cycle",
    ],
  },
];

export default function AutomationInAction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-10 md:mb-12">
          Automation in Action
        </h2>

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
                    The Problem
                  </p>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">
                    The Solution
                  </p>
                  <p>{item.solution}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-sky-50">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 mb-2">
                  The Result
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

