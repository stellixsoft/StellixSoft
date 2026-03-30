const commitments = [
  {
    title: "Zero Downtime Commitment",
    description:
      "If your business experiences unplanned downtime during our migration, we credit your account.",
  },
  {
    title: "Rollback Guarantee",
    description:
      "Your legacy system remains operational throughout. If issues arise, instant rollback is always ready.",
  },
  {
    title: "Feature Parity First",
    description:
      "New system matches existing functionality before any new features. No lost capabilities.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "Complete documentation and training so your team can maintain the new system independently.",
  },
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

export default function StandBehind() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div
        className="max-w-[1300px] mx-auto rounded-3xl md:rounded-[2rem] overflow-hidden border px-6 py-10 md:px-12 md:py-14"
        style={{
          background: "linear-gradient(180deg, rgba(16, 172, 219, 0.12) 0%, rgba(255, 255, 255, 1) 40%)",
          borderColor: "rgba(16, 172, 219, 0.35)",
        }}
      >
        <div className="text-center mb-10 md:mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-white"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          >
            Our Commitment
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl font-light text-[var(--color-deepSpace)]">
            We Stand Behind Our Migrations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {commitments.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white border"
                style={{
                  backgroundColor: "var(--color-electricBlue-solid)",
                  borderColor: "rgba(16, 172, 219, 0.5)",
                }}
                aria-hidden
              >
                <CheckIcon className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-deepSpace)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mt-10 md:mt-12">
          We&apos;ve completed multiple enterprise migrations with zero failures.
        </p>
      </div>
    </section>
  );
}
