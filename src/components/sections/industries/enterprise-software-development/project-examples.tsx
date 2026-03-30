import Link from "next/link";

const projects = [
  {
    iconColor: "#22c55e",
    title: "Enterprise Portal Modernization",
    subtitle: "Global Hardware Company | Fortune 500 Supply Chain",
    description: "15-year VB.NET system → .NET Core 6 with real-time capabilities.",
    results: "Zero downtime · 60% faster features · 10,000+ devices",
    caseStudyHref: "/case-studies/enterprise-portal-modernization",
  },
  {
    iconColor: "#8b5cf6",
    title: "Compliance & Audit Management",
    subtitle: "Enterprise Client | Multi-location Operations",
    description: "Jira-like workflow system replacing Excel-based audit tracking.",
    results: "75% less prep time · Zero missed deadlines · 100% audit accuracy",
    caseStudyHref: "/case-studies/compliance-and-audit-management-system",
  },
  {
    iconColor: "#22d3ee",
    title: "Equity Management Platform",
    subtitle: "Technology Company | 200+ Employees",
    description: "Custom stock options management replacing spreadsheet chaos.",
    results: "95% HR time saved · Zero errors · Audit-ready always",
    caseStudyHref: "/case-studies/stock-options-and-equity-management-platform",
  },
];

export default function EnterpriseProjectExamples() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-deepSpace)]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-12 md:mb-14">
          Enterprise Project Examples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl bg-black/40 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.5)] px-6 py-8 flex flex-col text-white"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: project.iconColor + "20", color: project.iconColor }}
                  aria-hidden
                >
                  <span className="w-4 h-4 rounded-full border-2" />
                </span>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  {/* Placeholder for icon label if needed */}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-medium uppercase tracking-wider mb-5">
                {project.title}
              </h3>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 mb-3">
                {project.subtitle}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 mb-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 mb-1">
                    Results
                  </p>
                  <p className="text-xs text-gray-100 leading-relaxed">{project.results}</p>
                </div>
                <Link
                  href={project.caseStudyHref}
                  className="text-sm font-medium text-[var(--color-electricBlue)] inline-flex items-center gap-1 hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-electricBlue)]"
                  aria-label={`Read case study: ${project.title}`}
                >
                  Read Case Study
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

