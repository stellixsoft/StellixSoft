const engagementOptions = [
  {
    title: "Pilot Project",
    tag: "$15-30K",
    description:
      "Start small with a defined project. See our quality before scaling up.",
  },
  {
    title: "Dedicated Team",
    tag: "Most Popular",
    description:
      "Long-term partnership with developers who learn your hardware deeply.",
  },
  {
    title: "Project-Based",
    tag: "Fixed Scope",
    description:
      "Fixed scope and price for defined deliverables. Best for platform builds.",
  },
];

const differentiators = [
  "We don't require you to explain what MQTT is",
  "Worked with device constraints and protocols",
  "Build for real-world reliability, not demos",
  "Software evolves with your hardware",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function FlexibleEngagement() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div
        className="max-w-[1100px] mx-auto rounded-[36px] overflow-hidden border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
        style={{ backgroundColor: "#0A1020" }}
      >
        <div className="px-6 md:px-10 lg:px-14 pt-10 md:pt-12 pb-12 md:pb-14">
          {/* Section 1: Flexible Engagement Options */}
          <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.24em] text-white text-center mb-9 md:mb-10">
            Flexible Engagement Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {engagementOptions.map((card) => (
              <div
                key={card.title}
                className="rounded-[22px] p-6 md:p-7 text-center border border-white/10 bg-[#1A2337]"
              >
                <h3
                  className="text-sm font-medium uppercase tracking-[0.14em] mb-1.5"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 mb-3">
                  {card.tag}
                </p>
                <p className="text-sm font-medium text-white/75 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-14 py-10 md:py-11 bg-[#1C2538] border-t border-white/5">
          {/* Section 2: What Makes Us Different */}
          <h2 className="text-base md:text-2xl font-light uppercase tracking-[0.18em] text-white text-center mb-8 md:mb-9">
            What Makes Us Different for Hardware Companies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-[900px] mx-auto">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white mt-0.5 border border-[var(--color-electricBlue)]/70"
                  aria-hidden
                >
                  <CheckIcon className="w-3 h-3 text-[var(--color-electricBlue)]" />
                </span>
                <p className="text-xs md:text-xs text-white/75 leading-relaxed uppercase font-medium tracking-[0.04em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
