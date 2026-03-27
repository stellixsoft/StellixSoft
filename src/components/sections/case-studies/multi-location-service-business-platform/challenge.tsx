const operationalFragmentation = [
  "Each location used different tools and processes",
  "No unified view of company-wide operations",
  "Scheduling conflicts between regions",
  "Inconsistent customer experience across locations",
];

const technicianManagement = [
  "Manual job assignments via phone calls",
  "No visibility into technician availability",
  "Paper-based job completion forms",
  "Travel time wasted due to poor routing",
];

function LayersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    </svg>
  );
}

const cards = [
  { title: "Operational Fragmentation", items: operationalFragmentation, icon: LayersIcon },
  { title: "Technician Management", items: technicianManagement, icon: UsersIcon },
];

export default function MultiLocationServiceBusinessPlatformChallenge() {
  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            The Challenge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-gray-100 px-6 py-6 md:px-7 md:py-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[var(--color-electricBlue)]"><card.icon /></span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
                  {card.title}
                </p>
              </div>
              <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
