const adminBurden = [
  "HR spent 20+ hours monthly on spreadsheets",
  "Calculating vesting manually was error-prone",
  "Employee inquiries took hours to answer",
  "Audit requests required days of prep",
];

const complianceRisks = [
  "409A valuation tracking was inconsistent",
  "Exercise windows not communicated",
  "Tax documentation generated manually",
  "Legal exposure from option grant errors",
];

const employeeExperience = [
  "Employees couldn't see equity value easily",
  "No self-service for vesting/exercising",
  "Lack of transparency created frustration",
  "New hires didn't understand packages",
];

function AlertIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
  { title: "Admin Burden", items: adminBurden, icon: AlertIcon, iconColor: "text-red-400" },
  { title: "Compliance Risks", items: complianceRisks, icon: ShieldIcon, iconColor: "text-[var(--color-electricBlue)]" },
  { title: "Employee Experience", items: employeeExperience, icon: UsersIcon, iconColor: "text-[var(--color-electricBlue)]" },
];

export default function StockOptionsAndEquityManagementPlatformChallenge() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-gray-100 px-6 py-6 md:px-7 md:py-7">
              <div className="flex items-center gap-2 mb-4">
                <span className={card.iconColor}><card.icon /></span>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
                  {card.title}
                </p>
              </div>
              <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-deepSpace)]" aria-hidden />
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
