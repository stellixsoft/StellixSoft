const stats = [
  { value: "ZERO", label: "Downtime During Migration" },
  { value: "60%", label: "Faster Feature Delivery" },
  { value: "10,000+", label: "Devices Monitored Real-time" },
  { value: "3+", label: "Years Ongoing Partner" },
  { value: "6", label: "Dedicated Developers" },
  { value: "85%", label: "Tickets Auto-resolved" },
] as const;

const detailCards = [
  {
    title: "Technical Achievements",
    icon: "chip" as const,
    items: [
      "Zero downtime during complete platform migration",
      "60% reduction in time-to-market for new features",
      "System now handles 10x the transaction volume",
      "99.9% uptime since migration completion",
    ],
  },
  {
    title: "Business Impact",
    icon: "chart" as const,
    items: [
      "Successfully onboarded 3 new Fortune 500 clients",
      "85% of support tickets now auto-resolved",
      "Client retained PepsiCo contract worth millions",
      "Platform became competitive advantage in sales",
    ],
  },
  {
    title: "Partnership Value",
    icon: "users" as const,
    items: [
      "3+ year ongoing relationship",
      "6 dedicated developers as extended team",
      "Evolved from vendor to strategic partner",
    ],
  },
] as const;

function ChipIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M4.5 8.25H3M4.5 15.75H3M21 8.25h-1.5M21 15.75h-1.5M6.75 6.75h10.5v10.5H6.75V6.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5v-4.5z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l5.25-5.25L12 12l6.75-6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5h18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a7.5 7.5 0 0115 0" />
    </svg>
  );
}

function CardIcon({ type }: { type: "chip" | "chart" | "users" }) {
  if (type === "chart") return <ChartIcon />;
  if (type === "users") return <UsersIcon />;
  return <ChipIcon />;
}

export default function EnterprisePortalResults() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/case-study-outcomebg.jpg)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/60"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 text-white lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
        {/* Left: copy + stats */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Track impact,
            <br />
            not just features.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
            From zero-downtime migration to measurable delivery speed — these
            are the results that matter to the business.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5"
              >
                <p className="text-xl font-semibold tracking-tight text-[var(--color-electricBlue)] md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 md:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: detail cards */}
        <div className="flex flex-col gap-4">
          {detailCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-5 backdrop-blur-md sm:px-6 sm:py-6"
            >
              <div className="mb-3 flex items-center gap-2.5 text-[var(--color-electricBlue)]">
                <CardIcon type={card.icon} />
                <p className="text-sm font-medium uppercase tracking-[0.18em]">
                  {card.title}
                </p>
              </div>
              <ul className="space-y-2.5 text-sm leading-relaxed text-white/85 md:text-[15px]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-electricBlue)]"
                      aria-hidden
                    />
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
