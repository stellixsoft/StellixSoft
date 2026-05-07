function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.75" />
      <path d="M20 20l-3-3" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const steps = [
  {
    dayRange: "DAY 1",
    title: "Requirements Discussion",
    description: "You tell us what you need in terms of skills and seniority.",
    Icon: ChatIcon,
  },
  {
    dayRange: "DAY 2–4",
    title: "Developer Matching",
    description: "We identify matching developers from our curated talent pool.",
    Icon: SearchIcon,
  },
  {
    dayRange: "DAY 5–7",
    title: "Interviews (If Wanted)",
    description: "You meet them, ask questions, and approve the fit.",
    Icon: UsersIcon,
  },
  {
    dayRange: "DAY 8+",
    title: "Onboarding & Start",
    description: "They join your team and start delivering value immediately.",
    Icon: RocketIcon,
  },
];

export default function FromRequestToProductiveDeveloper() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">From Request to Productive Developer</h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          {steps.map(({ Icon, ...step }) => (
            <article key={step.title} className="flex flex-col items-center text-center">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full shadow-md"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] md:text-xs">{step.dayRange}</p>
              <h3 className="mb-2 text-sm font-semibold text-[var(--color-deepSpace)] md:text-[15px]">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
