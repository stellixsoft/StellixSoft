import Link from "next/link";

const costRows = [
  { scope: "Pilot or proof of fit", cost: "About $10k to $15k", time: "A few weeks" },
  { scope: "Small app or MVP", cost: "About $15k to $40k", time: "6 to 12 weeks" },
  { scope: "Medium platform (portal, ERP/CRM-style system, SaaS)", cost: "About $40k to $100k", time: "3 to 6 months" },
  { scope: "Full enterprise system", cost: "From about $100k", time: "6 months or more, in phases" },
  { scope: "Dedicated team after launch", cost: "About $4k to $5.6k per developer per month", time: "Ongoing" },
];

const caseStudies = [
  {
    href: "/case-studies/enterprise-portal-modernization",
    label: "Enterprise portal modernization (VB.NET to .NET)",
  },
  { href: "/case-studies/logistics-management-platform", label: "Logistics management platform" },
  {
    href: "/case-studies/compliance-and-audit-management-system",
    label: "Compliance and audit management system",
  },
  {
    href: "/case-studies/stock-options-and-equity-management-platform",
    label: "Stock options and equity management platform",
  },
  {
    href: "/case-studies/multi-location-service-business-platform",
    label: "Multi-location service business platform",
  },
];

const linkClass = "font-medium text-[var(--color-electricBlue)] underline underline-offset-4";

/**
 * Cost table, "why a mid-size partner", single-tenant to multi-tenant re-architecture and
 * case study links for the enterprise service page. Ranges come from the knowledge base.
 */
export default function EnterpriseCostAndFit() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--color-lightGray)]/40">
      <div className="max-w-[1000px] mx-auto space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
            How much do enterprise software development services cost?
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Most large agencies only quote after weeks of discovery. These are our typical
            published ranges, so you can check fit before the first call. The team prices your
            actual scope after a 15-minute discovery call.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f5f7fb] text-[var(--color-deepSpace)]">
                <tr>
                  <th className="px-4 py-3 font-medium">Scope</th>
                  <th className="px-4 py-3 font-medium">Typical cost (USD)</th>
                  <th className="px-4 py-3 font-medium">Typical timeline</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {costRows.map((row) => (
                  <tr key={row.scope} className="border-t border-gray-200">
                    <td className="px-4 py-3">{row.scope}</td>
                    <td className="px-4 py-3">{row.cost}</td>
                    <td className="px-4 py-3">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-700">
            More detail on{" "}
            <Link href="/pricing" className={linkClass}>
              pricing
            </Link>{" "}
            and in our guide to{" "}
            <Link href="/blog/cost-of-software-development-enterprise-budgeting" className={linkClass}>
              enterprise software development cost
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-light text-[var(--color-deepSpace)] mb-3">
              Why a mid-size enterprise software partner
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li>Senior engineers on your project, not a bench rotated between accounts.</li>
              <li>50+ engineers: large enough for a full team, small enough that you talk to the people building it.</li>
              <li>US company (Stellix Soft LLC, Houston, Texas) working on US hours.</li>
              <li>Published price ranges and a small paid pilot before a long commitment.</li>
              <li>Fortune 500 delivery experience, with client names kept under NDA.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light text-[var(--color-deepSpace)] mb-3">
              Re-architecting a single-tenant platform for enterprise clients
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              A common project: a product built for one customer now has to serve many, often
              white-labelled for enterprise clients. We add tenant isolation, per-tenant
              configuration and branding, SSO and role-based access, then move existing customers
              across in phases so nobody is cut off. Read our{" "}
              <Link href="/blog/multi-tenant-saas-architecture-patterns" className={linkClass}>
                multi-tenant SaaS architecture guide
              </Link>
              .
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-light text-[var(--color-deepSpace)] mb-3">
            Enterprise software case studies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {caseStudies.map((c) => (
              <li key={c.href} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                <Link href={c.href} className={linkClass}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
