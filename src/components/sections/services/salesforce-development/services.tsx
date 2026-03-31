import Image from "next/image";
export default function SalesforceDevelopmentServices() {
  const cards = [
    {
      title: "Custom Development",
      description:
        "Apex code, Lightning components, and Visualforce pages for functionality Salesforce doesn’t provide out of the box.",
      bullets: [
        "Custom objects & fields",
        "Apex triggers & classes",
        "Lightning Web Components",
        "Custom apps & pages",
      ],
      highlighted: true,
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Salesforce custom development service icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Integrations",
      description:
        "Connect Salesforce to your other business systems for real-time data sync.",
      bullets: [
        "ERP integration (SAP, NetSuite)",
        "Marketing automation sync",
        "Custom API integrations",
        "Middleware connections",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Salesforce integrations service icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Process Automation",
      description:
        "Automate workflows and business processes within Salesforce to save time.",
      bullets: [
        "Flow automation",
        "Approval processes",
        "Scheduled jobs",
        "Data management rules",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Salesforce process automation service icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
    {
      title: "Migration & Cleanup",
      description:
        "Data migration into Salesforce and cleanup of existing orgs for better performance.",
      bullets: [
        "Data import from legacy systems",
        "Duplicate management",
        "Org cleanup & optimization",
        "Archive strategies",
      ],
      icon: <Image
        src="/assets/images/IOT-icon.png"
        alt="Salesforce migration and cleanup service icon"
        width={20}
        height={20}
        className="object-contain"
      />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-12">
          Salesforce Development Services
        </h2>

        <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[32px] border px-6 py-7 md:px-8 md:py-9 shadow-[0_24px_70px_rgba(15,23,42,0.06)] ${card.highlighted
                ? "bg-gradient-to-b from-white to-sky-50/50 border-slate-200/80"
                : "bg-white border-slate-200/80"
                }`}
            >
              <div className="flex mb-4 h-9 w-9 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 text-lg">
                {card.icon}
              </div>
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-slate-900 mb-2 flex items-center gap-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
                {card.description}
              </p>
              <ul className="space-y-1.5 text-sm md:text-[15px] text-slate-700">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400" />
                    <span>{item}</span>
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

