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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Your Team, Ready in 2 Weeks
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[28px] bg-white border border-gray-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-8 md:py-10 text-left"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-[var(--color-electricBlue)] text-xs font-semibold">
                {step.number}
              </div>
              <h3 className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-1">
                {step.title}
              </h3>
              <p
                className="text-[11px] font-medium uppercase mb-3"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {step.subtitle}
              </p>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

