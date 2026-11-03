import Image from "next/image";

export default function WhatWeCanAutomate() {
  const items = [
    {
      title: "Data Entry & Data Synchronization",
      description:
        "Stop copying information manually between systems. We build automated data flows that can move, validate, and synchronize information across CRMs, ERPs, spreadsheets, databases, accounting platforms, and internal applications.",
      examplesTitle: "Examples",
      examples: [
        "Order data sent to accounting systems",
        "Leads synchronized with CRM platforms",
        "Inventory updates shared across systems",
        "Customer records synchronized between applications",
        "Form submissions routed into internal systems",
        "Database records updated automatically",
      ],
    },
    {
      title: "Reporting & Operational Dashboards",
      description:
        "Replace repetitive spreadsheet preparation and manual reporting with automated dashboards and scheduled reports. Custom reporting systems can combine data from multiple sources so teams can monitor KPIs, trends, workflow status, and exceptions from one interface.",
      examplesTitle: "Examples",
      examples: [
        "Executive dashboards",
        "Sales reports",
        "Operational metrics",
        "Inventory reports",
        "Workflow status reports",
        "Scheduled management reporting",
      ],
    },
    {
      title: "Approval Workflows",
      description:
        "Replace long email chains and informal approvals with structured workflow systems. We build approval processes that route requests to the right people, enforce business rules, capture decisions, send notifications, and maintain a clear audit trail.",
      examplesTitle: "Examples",
      examples: [
        "Purchase approvals",
        "Expense approvals",
        "Time-off requests",
        "Document reviews",
        "Quote approvals",
        "Compliance approvals",
        "Internal requests",
      ],
    },
    {
      title: "Alerts & Notifications",
      description:
        "Automatically notify the right person when a business event requires attention. Notifications can be triggered by deadlines, workflow changes, system events, inventory thresholds, exceptions, or customer activity.",
      examplesTitle: "Possible Channels",
      examples: [
        "Email",
        "SMS",
        "Microsoft Teams",
        "Slack",
        "In-app notifications",
        "Internal dashboards",
      ],
    },
    {
      title: "Document Automation",
      description:
        "Generate business documents from structured data instead of repeatedly copying information into templates. Automation can support both document creation and the workflow around those documents.",
      examplesTitle: "Examples",
      examples: [
        "Invoices",
        "Quotes",
        "Proposals",
        "Contracts",
        "Agreements",
        "Reports",
        "Certificates",
        "Client deliverables",
      ],
    },
    {
      title: "Business System Integrations",
      description:
        "Connect business platforms that do not currently communicate with each other. StellixSoft can build custom API integrations and data workflows that allow information to move between supported systems without repetitive manual work.",
      examplesTitle: "Examples",
      examples: [
        "CRM ⇄ Accounting",
        "ERP ⇄ Internal Application",
        "E-commerce ⇄ Inventory",
        "Database ⇄ Reporting Platform",
        "Custom API-to-API integrations",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-[32px] font-semibold text-slate-900 mb-10">
          Business Processes We Can Automate
        </h2>
        <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          The best automation opportunities are usually repetitive, rules-based
          processes that consume staff time, create delays, or require employees
          to move information manually between systems. StellixSoft can automate
          individual tasks or build complete workflows that connect applications,
          teams, databases, and business systems.
        </p>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-[32px] bg-gradient-to-b from-white to-sky-50/50 border border-slate-200/70 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8"
            >
              <div className="mb-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt={`${item.title} - automation use case icon`}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {item.description}
              </p>
              <p className="text-[11px] md:text-xs font-medium uppercase text-slate-400 mb-1.5">
                {item.examplesTitle}
              </p>
              <ul className="text-sm md:text-[15px] text-slate-700 space-y-1.5">
                {item.examples.map((ex) => (
                  <li key={ex} className="flex gap-2">
                    <span className="mt-[6px] h-[5px] w-[5px] rounded-full bg-sky-400" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
