const reasons = [
  {
    title: "Enterprise Experience",
    description:
      "We build mobile apps for businesses, not consumer games. We understand enterprise requirements: security, compliance, integration.",
  },
  {
    title: "Full-Stack Capability",
    description:
      "We don’t just build the app - we build the backend too. One team for your entire mobile platform, from API to app store.",
  },
  {
    title: "Ongoing Partnership",
    description:
      "Launch is just the beginning. We provide ongoing maintenance, updates, and feature development. Long-term mobile partner.",
  },
];

export default function WhyChooseStellixsoftForMobile() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          Why Choose Stellixsoft for Mobile
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-14"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((reason) => (
            <article key={reason.title} className="relative px-2 md:px-4">
              <div className="hidden md:block absolute -top-6 left-1/2 h-10 w-px bg-[var(--color-electricBlue)]/25" />
              <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-3 mt-8">
                {reason.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed max-w-xs mx-auto">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

