import {
  BlueTickIcon,
  BLUE_TICK_BODY_CLASS,
} from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

function IconTerminal() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M4 17l6-6-6-6M12 19h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLink() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M10 13a5 5 0 0 1 6.88-4.59l1.73 1a5 5 0 0 1 0 8.18l-1.73 1M14 11a5 5 0 0 0-6.88 4.59l-1.73 1a5 5 0 0 1 0-8.18l1.73-1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLightning() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-sky-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      icon: <IconTerminal />,
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
      icon: <IconLink />,
    },
    {
      title: "Process Automation",
      description:
        "Automate workflows and business processes within Salesforce to save time.",
      bullets: ["Flow automation", "Approval processes", "Scheduled jobs", "Data management rules"],
      icon: <IconLightning />,
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
      icon: <IconRefresh />,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-3 text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Salesforce Development Services
        </h2>
        <div
          className="mx-auto mb-12 h-0.5 w-16 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[32px] border px-6 py-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:px-8 md:py-9 ${
                card.highlighted
                  ? "border-slate-200/80 bg-gradient-to-br from-sky-50/80 via-white to-white"
                  : "border-slate-200/80 bg-gradient-to-br from-sky-50/40 via-white to-white"
              }`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/90">
                {card.icon}
              </div>
              <h3 className="mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-900 md:text-[15px]">
                {card.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600 md:text-[15px]">{card.description}</p>
              <ul className="space-y-2 text-sm md:text-[15px]">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <BlueTickIcon className="mt-[7px] h-[13px] w-[13px] shrink-0" />
                    <span className={`leading-snug ${BLUE_TICK_BODY_CLASS}`}>{item}</span>
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
