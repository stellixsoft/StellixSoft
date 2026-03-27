const quoteFactors = [
  {
    title: "Complexity",
    description:
      "Simple CRUD apps vs. real-time systems vs. legacy migrations. More complexity = more time = higher investment.",
  },
  {
    title: "Technology Stack",
    description:
      "Some technologies require more specialized expertise. .NET and React are our core strengths with best rates.",
  },
  {
    title: "Timeline",
    description:
      "Rush projects require dedicated focus and may incur premiums. Standard timelines get standard rates.",
  },
  {
    title: "Integration Requirements",
    description:
      "Connecting to existing systems, APIs, or legacy databases adds complexity and time.",
  },
  {
    title: "Team Composition",
    description:
      "Senior developers cost more than mid-level. Complex projects need more senior involvement.",
  },
];

const protections = [
  {
    title: "Dedicated Team",
    description:
      "Replace any developer who isn't the right fit at no cost. Your satisfaction is guaranteed.",
    icon: "shield",
  },
  {
    title: "Project-Based",
    description:
      "Clear milestones with approval gates. You only pay for approved work.",
    icon: "target",
  },
  {
    title: "Pilot Option",
    description:
      "Start with a small pilot project ($10-15K) to test our quality before committing to larger engagement.",
    icon: "lightning",
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 shrink-0" aria-hidden>
      <path
        d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
        fill="var(--color-electricBlue)"
        fillOpacity={0.3}
        stroke="var(--color-electricBlue)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#A78BFA" strokeWidth={1.5} fill="#A78BFA" fillOpacity={0.2} />
      <circle cx="12" cy="12" r="6" stroke="#A78BFA" strokeWidth={1.5} fill="none" />
      <circle cx="12" cy="12" r="2" fill="#A78BFA" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 shrink-0" aria-hidden>
      <path
        d="M13 2L4 14h7l-2 8 9-12h-7l2-8z"
        stroke="#34D399"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#34D399"
        fillOpacity={0.2}
      />
    </svg>
  );
}

const iconMap = {
  shield: ShieldIcon,
  target: TargetIcon,
  lightning: LightningIcon,
};

export default function YourQuote() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white w-full">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left: What Affects Your Quote */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--color-deepSpace)] leading-tight">
              What Affects Your
              <br />
              Quote
            </h2>
            <ul className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {quoteFactors.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="shrink-0 w-1 rounded-full bg-[var(--color-electricBlue)] opacity-60"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-[var(--color-neutralGray)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Your Investment Is Protected */}
          <div
            className="rounded-[28px] p-6 sm:p-8 bg-[var(--color-deepSpace)] text-white shadow-xl lg:sticky lg:top-8"
            style={{
              background: "linear-gradient(160deg, var(--color-deepSpace) 0%, #0f0d1a 100%)",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-normal">Your Investment Is Protected</h3>
            <ul className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
              {protections.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <li key={item.title} className="flex gap-4">
                    {Icon && <Icon />}
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
