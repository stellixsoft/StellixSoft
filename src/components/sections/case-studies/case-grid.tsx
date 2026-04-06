import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    slug: "logistics-management-platform",
    category: "Logistics",
    title: "Logistics Management Platform",
    summary:
      "Complete platform for a 3PL company with dispatch system, driver app, and client portal.",
    bullets: ["70% fewer status calls", "2x shipment capacity"],
    tech: ["React", "Node.js", "Flutter"],
    image: "/assets/images/logistic.webp",
  },
  {
    slug: "compliance-and-audit-management-system",
    category: "Enterprise",
    title: "Compliance & Audit System",
    summary:
      "Jira-like workflow platform for enterprise compliance management and audit tracking.",
    bullets: ["75% less audit prep time", "Zero missed deadlines"],
    tech: ["Next.js", "Node.js", "AWS"],
    image: "/assets/images/compliance.webp",
  },
  {
    slug: "enterprise-portal-modernization",
    category: "Enterprise",
    title: "Enterprise Portal Modernization",
    summary:
      "Modernized a 15-year-old VB.NET portal to .NET Core 6 with real-time monitoring and strict data isolation.",
    bullets: ["Zero downtime migration", "10,000+ devices monitored"],
    tech: [".NET Core 6", "SignalR", "React", "SQL Server", "AWS"],
    image: "/assets/images/enterprise.webp",
  },
  {
    slug: "stock-options-and-equity-management-platform",
    category: "Enterprise",
    title: "Equity Management Platform",
    summary:
      "Custom stock options management platform replacing spreadsheet-based processes for finance and HR teams.",
    bullets: ["95% HR time saved", "Zero reconciliation errors"],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/assets/images/equity-management.webp",
  },
  {
    slug: "multi-location-service-business-platform",
    category: "Services",
    title: "Multi-location Service Platform",
    summary:
      "Scheduling, dispatch, and client portal for a multi-location service organization operating across regions.",
    bullets: ["Unified scheduling", "Improved on-time arrivals"],
    tech: ["React", "Node.js", "MongoDB"],
    image: "/assets/images/multilocation.webp",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="rounded-3xl bg-white shadow-[0_18px_60px_rgba(15,23,42,0.16)] border border-gray-200 overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-[230px] md:h-[260px]">
                <Image
                  src={cs.image}
                  alt={`${cs.title} — StellixSoft case study cover image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)] shadow-sm">
                    {cs.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col bg-gradient-to-b from-white to-slate-50">
                <h3 className="text-sm md:text-base font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed mb-4">
                  {cs.summary}
                </p>

                <ul className="space-y-1.5 mb-4 text-sm">
                  {cs.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[var(--color-deepSpace)]">
                      <span
                        className="mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[var(--color-electricBlue)]"
                        aria-hidden
                      >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-electricBlue)]/80" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3">
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-neutralGray)] mb-4">
                    {cs.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full bg-white border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-electricBlue)]"
                  >
                    Read Case Study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

