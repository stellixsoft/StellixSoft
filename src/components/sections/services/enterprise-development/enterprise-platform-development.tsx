import Link from "next/link";

const platforms = [
  {
    title: "Multi-tenant SaaS platforms",
    text: "Tenant isolation, roles and permissions, billing hooks, SSO and the admin tools your team needs to run the product.",
  },
  {
    title: "ERP- and CRM-style systems",
    text: "Custom operational software for orders, inventory, scheduling, dispatch and customer records when off-the-shelf tools don't fit.",
  },
  {
    title: "Portals for staff, customers and partners",
    text: "Secure portals with audit trails, document flows and dashboards, connected to the systems you already run.",
  },
  {
    title: "Operations dashboards and integrations",
    text: "Real-time dashboards and the APIs, queues and sync jobs that make SAP, Salesforce, SQL Server and your other tools talk.",
  },
];

/** Section that covers "enterprise platform development services / solutions" in plain terms. */
export default function EnterprisePlatformDevelopment() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--color-lightGray)]/40">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          Enterprise platform development services
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          An enterprise platform is the shared system that several teams, customers or partners
          work in every day. Our enterprise platform development solutions cover the full build:
          architecture, the data model, integrations, security reviews, release in phases and
          support after launch.
        </p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((item) => (
            <li key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-medium text-[var(--color-deepSpace)]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-700">
          Moving an older system onto a modern platform? See{" "}
          <Link
            href="/services/legacy-modernization"
            className="font-medium text-[var(--color-electricBlue)] underline underline-offset-4"
          >
            legacy modernization services
          </Link>{" "}
          or check typical ranges on{" "}
          <Link
            href="/pricing"
            className="font-medium text-[var(--color-electricBlue)] underline underline-offset-4"
          >
            pricing
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
