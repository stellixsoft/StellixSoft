const trustPoints = [
  {
    title: "HARD TO MAINTAIN",
    description:
      "Finding developers who know VB.NET, classic ASP, or old .NET Framework is nearly impossible - and expensive.",
    icon: "medal",
  },
  {
    title: "SLOW TO CHANGE",
    description:
      "Adding new features takes months. Your competitors ship weekly while you're stuck in technical debt.",
    icon: "partnership",
  },
  {
    title: "CAN'T INTEGRATE",
    description:
      "Modern APIs, cloud services, and third-party tools don't play nice with your legacy architecture.",
    icon: "globe",
  },
  {
    title: "RISK GROWING",
    description:
      "Security vulnerabilities, unsupported frameworks, and single points of failure increase every year.",
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
      className="h-8 w-8"
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
      className="h-8 w-8"
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
      className="h-8 w-8"
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
      className="h-8 w-8"
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

export default function YourLegacy() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          Is Your Legacy System Holding You Back?
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <article
                key={point.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_8px_30px_rgba(3,2,19,0.06)] md:p-7"
              >
                <div className="mb-4">{Icon && <Icon />}</div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deepSpace)] md:text-[13px]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-neutralGray)]">
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
