const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    subtitle: "Day 1–3",
    description:
      "Tech stack, project scope, team size, timeline. We understand your technical requirements and culture.",
  },
  {
    number: "02",
    title: "We Match the Team",
    subtitle: "Day 4–7",
    description:
      "We select senior developers with relevant experience from our team. You interview and approve.",
  },
  {
    number: "03",
    title: "Onboarding & Setup",
    subtitle: "Day 8–14",
    description:
      "Your tools, your repos, your processes. We integrate completely with your existing workflows.",
  },
  {
    number: "04",
    title: "Work as One Team",
    subtitle: "Ongoing",
    description:
      "Daily standups, same timezone, direct communication. No middlemen between you and your developers.",
  },
];

export default function ReadyInTwoWeeks() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Your Team, Ready in 2 Weeks
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[28px] border border-gray-100 bg-white px-6 py-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:px-8 md:py-10"
            >
              <p
                className="mb-4 text-xs font-semibold tabular-nums"
                style={{ color: "var(--color-electricBlue-solid)" }}
              >
                {step.number}
              </p>
              <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-deepSpace)] md:text-[13px] md:tracking-[0.14em]">
                {step.title}
              </h3>
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: "var(--color-electricBlue-solid)" }}
              >
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
