const steps = [
  {
    number: 1,
    title: "We review your message",
    description:
      "Within 24 hours, we'll review your inquiry and assign the right person to respond.",
  },
  {
    number: 2,
    title: "Initial response",
    description:
      "We'll reply with initial thoughts, questions, or schedule a discovery call.",
  },
  {
    number: 3,
    title: "Discovery call (30 min)",
    description:
      "If there's potential fit, we'll schedule a call to discuss your project in detail.",
  },
  {
    number: 4,
    title: "Proposal",
    description:
      "For qualified projects, we'll provide a detailed proposal with scope, timeline, and pricing.",
  },
];

export default function AfterYourReach() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-deepSpace)]">
            What Happens After You Reach Out
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] max-w-xl mx-auto">
            No obligation at any step. We&apos;re happy to chat even if you&apos;re
            just exploring options.
          </p>
        </header>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal line on md+: vertically centered with the numbered boxes (box is 64px, center at 32px) */}
          <div
            className="hidden md:block absolute left-0 right-0 top-[calc(2rem-1px)] h-0.5 bg-gray-200 -z-0"
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Numbered icon: same height on all breakpoints for consistent line alignment */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0">
                  <span
                    className="text-lg font-medium"
                    style={{ color: "var(--color-electricBlue)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-neutralGray)] leading-relaxed max-w-[260px] mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
