import Image from "next/image";
export default function WhatWeCanAutomate() {
  const items = [
    {
      title: "Manual Data Entry",
      description:
        "Stop copying data between systems. Automate data flow between your tools—CRM, ERP, spreadsheets, and databases.",
      examplesTitle: "Examples:",
      examples: [
        "Order data to accounting system",
        "Lead data to CRM",
        "Inventory updates across systems",
      ],
    },
    {
      title: "Reporting & Dashboards",
      description:
        "Stop building reports manually. Automated dashboards that pull data from multiple sources.",
      examplesTitle: "Examples:",
      examples: ["Executive dashboards", "Sales performance reports", "Operational metrics"],
    },
    {
      title: "Approval Workflows",
      description:
        "Replace email chains with proper workflow systems. Requests, approvals, notifications.",
      examplesTitle: "Examples:",
      examples: ["Purchase approvals", "Time-off requests", "Document reviews"],
    },
    {
      title: "Notifications & Alerts",
      description:
        "The right information to the right people at the right time. Automatic, no manual sending.",
      examplesTitle: "Examples:",
      examples: ["Inventory low alerts", "Customer activity notifications", "System health alerts"],
    },
    {
      title: "Document Generation",
      description:
        "Stop copying and pasting into templates. Automated document creation from your data.",
      examplesTitle: "Examples:",
      examples: ["Invoices and proposals", "Contracts and agreements", "Client deliverables"],
    },
    {
      title: "System Integrations",
      description:
        "Connect tools that don’t talk to each other. Unified data flow across your tech stack.",
      examplesTitle: "Examples:",
      examples: ["CRM ⇄ Accounting", "E‑commerce ⇄ Inventory", "Any API ⇄ Any API"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-[32px] font-semibold text-slate-900 mb-12">
          What We Can Automate
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-[32px] bg-gradient-to-b from-white to-sky-50/50 border border-slate-200/70 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 py-7 md:px-7 md:py-8"
            >
              <div className="mb-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                  {/* simple icon placeholder */}
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                    aria-hidden
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

