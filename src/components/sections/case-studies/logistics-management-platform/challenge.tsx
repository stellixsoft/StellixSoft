const operationalChaos = [
  "Scheduling managed via Excel spreadsheets",
  "No real-time visibility into status",
  "Drivers called office for every update",
  "Manual lookup (10-15 min per inquiry)",
];

const customerIssues = [
  "Clients couldn't track shipments",
  "Delayed updates led to frustration",
  "No self-service options available",
  "Team overwhelmed with support calls",
];

const scalingProblems = [
  "Adding volume required adding admin staff",
  "Error rate increased with volume",
  "Driver efficiency suffering from gaps",
  "Lost enterprise contracts due to visibility",
];

function BoltIcon() {
  return (
    <svg className="w-5 h-5 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-5 h-5 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg className="w-5 h-5 text-[var(--color-electricBlue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zM10 7v6m3-3H7" />
    </svg>
  );
}

export default function LogisticsManagementPlatformChallenge() {
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
          <article className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-gray-100 px-6 py-6 md:px-7 md:py-7">
            <div className="flex items-center gap-2 mb-4">
              <BoltIcon />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
                Operational Chaos
              </p>
            </div>
            <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
              {operationalChaos.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-deepSpace)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-gray-100 px-6 py-6 md:px-7 md:py-7">
            <div className="flex items-center gap-2 mb-4">
              <ChatIcon />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
                Customer Issues
              </p>
            </div>
            <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
              {customerIssues.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-deepSpace)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-gray-100 px-6 py-6 md:px-7 md:py-7">
            <div className="flex items-center gap-2 mb-4">
              <ScaleIcon />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-electricBlue)]">
                Scaling Problems
              </p>
            </div>
            <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)]">
              {scalingProblems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-deepSpace)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
