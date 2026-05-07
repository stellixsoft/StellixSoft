import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function SalesforceTechnologyExpertise() {
  const columns = [
    {
      title: "Development",
      items: ["Apex (triggers, classes)", "Lightning Web Components", "Visualforce", "SOQL/SOSL"],
      gradientLead: true,
    },
    {
      title: "Automation",
      items: ["Flows & Process Builder", "Approval processes", "Scheduled Apex", "Platform Events"],
      gradientLead: false,
    },
    {
      title: "Integration",
      items: ["REST/SOAP APIs", "Platform Events", "Heroku Connect", "MuleSoft basics"],
      gradientLead: false,
    },
    {
      title: "Clouds",
      items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud"],
      gradientLead: false,
    },
  ];

  const adminCapabilities = [
    "Custom objects/fields",
    "Permission sets/profiles",
    "Reports & dashboards",
    "Data management",
  ];

  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-4 text-center text-2xl font-light text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Salesforce Technology Expertise
        </h2>
        <div
          className="mx-auto mb-10 h-0.5 w-16 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="mb-8 grid gap-6 md:grid-cols-2 md:gap-7 lg:mb-10 lg:grid-cols-4 lg:gap-8">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`rounded-[28px] border border-slate-200/80 px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:px-7 md:py-8 ${
                col.gradientLead ? "bg-gradient-to-b from-sky-50/85 via-white to-white" : "bg-white"
              }`}
            >
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 md:text-xs">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] leading-relaxed text-slate-500 md:text-[14px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 rounded-[32px] bg-[#050819] px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white md:text-left md:text-xs">
            Admin &amp; Config Capabilities
          </p>
          <p className="text-center text-sm leading-relaxed text-white/90 md:text-left md:text-[15px]">
            {adminCapabilities.map((cap, idx) => (
              <span key={cap}>
                {idx > 0 && (
                  <>
                    {" "}
                    <span className="text-white/40">•</span>{" "}
                  </>
                )}
                {cap}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
