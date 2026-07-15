const CLIENT_FACTS = [
  { label: "Client Type", value: "Global hardware manufacturer" },
  { label: "Industry", value: "IoT / Hardware" },
  { label: "End Clients", value: "Fortune 500 (e.g. PepsiCo)" },
  { label: "Project Type", value: "Legacy modernization" },
  { label: "Team Size", value: "6 dedicated developers" },
  { label: "Duration", value: "3+ years ongoing" },
] as const;

export default function EnterprisePortalProjectOverview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left: copy */}
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            The Client
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            Global hardware
            <br />
            manufacturer
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
            Specializing in RFID systems, IP cameras, and enterprise networking
            equipment. Products deployed across Fortune 500 supply chains,
            including PepsiCo operations in the United States.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
            With 150+ employees and operations spanning North America and
            Europe, they needed enterprise-grade software to manage device
            deployments for their corporate customers.
          </p>
        </div>

        {/* Right: fact cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {CLIENT_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl bg-[#F3F4F6] px-5 py-5 sm:px-6 sm:py-6"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-neutralGray)] md:text-[11px]">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[var(--color-deepSpace)] md:text-[15px]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
