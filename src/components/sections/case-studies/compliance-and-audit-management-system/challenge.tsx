const processProblems = [
  "Audits tracked in Excel spreadsheets",
  "No centralized view of status",
  "Finding docs took hours during audits",
  "Missed 12 deadlines per year",
];

const regulatoryRisks = [
  "Inconsistent procedures across locations",
  "Incomplete audit trails for regulators",
  "Difficulty proving compliance",
  "Growing risk of fines and penalties",
];

const collaborationIssues = [
  "Auditors worked in siloed environments",
  "No visibility into dependencies",
  "Manual handoffs caused delays",
  "Hours lost to weekly status meetings",
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
  { title: "Process Problems", items: processProblems, icon: AlertIcon, iconColor: "text-red-400" },
  { title: "Regulatory Risks", items: regulatoryRisks, icon: ShieldIcon, iconColor: "text-[var(--color-electricBlue)]" },
  { title: "Collaboration Issues", items: collaborationIssues, icon: UsersIcon, iconColor: "text-[var(--color-electricBlue)]" },
];

export default function ComplianceAndAuditManagementSystemChallenge() {
  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,172,219,0.08) 0%, rgba(255,255,255,1) 55%)",
      }}
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
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-deepSpace)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-14 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[var(--color-deepSpace)] text-white px-6 py-5 md:px-8 md:py-6 text-center">
            <p className="text-sm md:text-[14px] text-white/85 italic">
              &ldquo;A near-miss during a regulatory inspection revealed how fragile their compliance documentation really was.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
