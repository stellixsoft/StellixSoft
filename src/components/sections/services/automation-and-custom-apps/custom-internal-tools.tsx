import Image from "next/image";

export default function CustomInternalTools() {
  const items = [
    {
      title: "Operations Dashboards",
      description:
        "Real-time visibility into your business metrics. Data from multiple systems in one view. No more spreadsheet wrangling.",
    },
    {
      title: "Custom CRM Systems",
      description:
        "When Salesforce is overkill or doesn’t fit your process. Track relationships, deals, and activities your way.",
    },
    {
      title: "Inventory Management",
      description:
        "Multi-location tracking, reorder alerts, supplier management. Built for your products and processes.",
    },
    {
      title: "Quote & Proposal Builders",
      description:
        "Generate professional quotes in minutes. Pricing rules, approval workflows, template system.",
    },
    {
      title: "Scheduling & Dispatch",
      description:
        "Field teams, deliveries, appointments. Calendar views, resource allocation, route optimization.",
    },
    {
      title: "Document Management",
      description:
        "Version control, access permissions, search, approvals. Organize your files with custom workflows.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="pt-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[1.05] font-light text-[var(--color-deepSpace)] mb-4">
              Custom Internal Tools
            </h2>
            <p className="text-base md:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Sometimes you need a tool that doesn’t exist—or the existing options don’t fit your
              workflow. We build internal applications tailored to how your team actually works.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-[15px] text-slate-700">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain mt-1 bg-electricBlue-50 rounded-full p-1 border border-sky-100"
                    aria-hidden
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
              src="/assets/images/custom-internal.jpg"
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

