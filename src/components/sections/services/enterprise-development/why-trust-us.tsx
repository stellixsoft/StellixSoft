const trustPoints = [
  {
    title: "Enterprise Experience",
    description:
      "Currently supporting Fortune 500 supply chain operations with a 6-developer dedicated team.",
    icon: "medal",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Our average client relationship spans 3+ years. We're partners, not just vendors.",
    icon: "partnership",
  },
  {
    title: "US Timezone Alignment",
    description:
      "Your morning standup is our morning standup. Real-time collaboration, no delays.",
    icon: "globe",
  },
  {
    title: "Proven Track Record",
    description:
      "Zero downtime during legacy migrations. Complex systems delivered on time.",
    icon: "check",
  },
];

function MedalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v8M9 21h6" />
      <path d="M8 21l4-3 4 3" />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="9" cy="7" r="4" />
      <circle cx="15" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M13 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const iconMap = {
  medal: MedalIcon,
  partnership: PartnershipIcon,
  globe: GlobeIcon,
  check: CheckCircleIcon,
};

export default function WhyTrustUs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Why Companies Trust Us With Enterprise Projects
        </h2>
        <div className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12" style={{ backgroundColor: "var(--color-electricBlue)" }}></div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <article
                key={point.title}
                className="flex flex-col items-center text-center"
              >
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <Icon />
                  </div>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-deepSpace)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-neutralGray)] leading-relaxed max-w-[260px]">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
