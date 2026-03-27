const reasons = [
  {
    title: "We Understand Hardware",
    description:
      "We've worked with RFID, cameras, sensors, and networking equipment. We know the constraints of physical devices.",
    icon: "chip",
  },
  {
    title: "Enterprise Experience",
    description:
      "Our platforms serve Fortune 500 companies. We build for scale, security, and reliability from day one.",
    icon: "shield",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We don't disappear after launch. 3+ year average relationships. We grow with your product line.",
    icon: "clock",
  },
  {
    title: "Your Timezone",
    description:
      "Real-time collaboration with your team. No waiting overnight for responses from overseas.",
    icon: "globe",
  },
];

function ChipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v6M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap = {
  chip: ChipIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
};

export default function HardwareComparison() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] text-center mb-12 md:mb-14 leading-tight">
          Why Hardware Companies Partner With
          <br />
          Stellixsoft
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="flex flex-col items-center text-center"
              >
                <span
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gray-100 border border-gray-200 shadow-sm"
                  style={{ color: "var(--color-electricBlue)" }}
                  aria-hidden
                >
                  {Icon && <Icon className="w-7 h-7" />}
                </span>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
