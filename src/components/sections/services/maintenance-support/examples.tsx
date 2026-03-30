const examples = [
  "Upgraded .NET Framework application to .NET Core 6",
  "Fixed critical security vulnerability in authentication",
  "Optimized slow database queries (page load: 8s → 0.5s)",
  "Updated all npm dependencies to latest secure versions",
  "Implemented automated backup system for production database",
  "Fixed mobile app crash affecting 15% of users",
  "Added two-factor authentication per client request",
  "Migrated hosting from bare metal to AWS for reliability",
  "Implemented CloudWatch monitoring and alerting",
  "Resolved SignalR disconnection issues in real-time system",
];

export default function ExamplesOfMaintenance() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Examples of Maintenance We Provide
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {examples.map((example) => (
            <div
              key={example}
              className="flex items-center gap-3 rounded-[999px] bg-white border border-slate-100 px-5 py-3 md:px-6 md:py-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-electricBlue)] text-[var(--color-electricBlue)]"
                aria-hidden
              >
                <span className="h-3 w-3 rounded-full bg-[var(--color-electricBlue-solid)]" />
              </span>
              <p className="text-sm md:text-[15px] text-[var(--color-deepSpace)]">{example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

