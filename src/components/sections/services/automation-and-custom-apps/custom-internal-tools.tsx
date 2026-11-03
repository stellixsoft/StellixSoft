import Image from "next/image";

export default function CustomInternalTools() {
  const items = [
    {
      title: "Operations Dashboards",
      description:
        "Bring data from multiple systems into one view. Monitor KPIs, workflow status, tasks, and operational performance without relying on manual spreadsheets.",
    },
    {
      title: "Custom CRM Systems",
      description:
        "Manage leads, accounts, customer activity, deals, and internal workflows in a CRM designed around the way your team actually works.",
    },
    {
      title: "Inventory Management",
      description:
        "Track stock across locations, manage suppliers, monitor inventory levels, and automate reorder alerts through a system built for your operations.",
    },
    {
      title: "Quote & Proposal Systems",
      description:
        "Create accurate quotes and proposals faster using pricing rules, customer data, templates, and approval workflows in one streamlined process.",
    },
    {
      title: "Scheduling & Dispatch",
      description:
        "Coordinate field teams, appointments, jobs, and resources with centralized scheduling, dispatch workflows, and real-time status visibility.",
    },
    {
      title: "Document Management",
      description:
        "Store, organize, search, review, and approve business documents with structured permissions, version control, and custom workflows.",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="pt-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.05] font-light text-[var(--color-deepSpace)] mb-4">
              Custom Internal Tools Built Around Your Workflow
            </h2>
            <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-2xl">
              We build custom internal tools around your actual business
              processes, helping teams replace manual work, disconnected
              systems, and generic software with more flexible operational
              solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-[15px] text-slate-700">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt={`${item.title} - custom internal tool icon`}
                    width={30}
                    height={30}
                    className="object-contain mt-1 bg-electricBlue-50 rounded-full p-1 border border-sky-100"
                  />
                  <div>
                    <h3 className="text-[13px] md:text-[14px] font-medium uppercase text-[var(--color-deepSpace)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[12px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] md:min-h-[420px] lg:min-h-[520px] rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
            <Image
              src="/assets/images/custom-internal.webp"
              alt="Team collaborating on custom internal tools in a control room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
