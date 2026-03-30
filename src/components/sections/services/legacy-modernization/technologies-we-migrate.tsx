const migrationPairs = [
  { from: "VB.NET", to: ".NET Core 6/7/8" },
  { from: ".NET Framework 4.x", to: ".NET Core" },
  { from: "Classic ASP", to: "Node.js or .NET Core" },
  { from: "Legacy PHP (4.x, 5.x)", to: "Laravel or Node.js" },
  { from: "Old Java", to: "Spring Boot" },
  { from: "Monolithic Architecture", to: "Microservices (where needed)" },
  { from: "On-Premise Servers", to: "AWS / GCP / Azure" },
  { from: "SQL Server 2008/2012", to: "Modern SQL or Cloud SQL" },
  { from: "Windows Server 2008/2012", to: "Modern Cloud Infrastructure" },
];

export default function TechnologiesWeMigrate() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      {/* Optional subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-electricBlue) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, var(--color-electricBlue) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="max-w-[900px] mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-light text-white text-center">
          Technologies We Migrate From & To
        </h2>
        <div
          className="w-24 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        />

        <div className="rounded-2xl bg-black/40 border border-white/10 shadow-xl overflow-hidden">
          {/* Card header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 border-b border-white/20">
            <div className="flex items-center gap-2 px-6 py-4 md:py-5">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" aria-hidden />
              <span className="text-sm font-medium uppercase tracking-wider text-white">
                From (Legacy)
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-4 md:py-5 md:border-l border-white/20">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span className="text-sm font-medium uppercase tracking-wider text-white">
                To (Modern)
              </span>
            </div>
          </div>

          {/* Two-column list */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <ul className="py-4 md:py-6">
              {migrationPairs.map((pair) => (
                <li
                  key={pair.from}
                  className="px-6 py-3 text-sm text-white border-b border-white/10 last:border-b-0 md:last:border-b md:border-b-0"
                >
                  {pair.from}
                </li>
              ))}
            </ul>
            <ul className="py-4 md:py-6">
              {migrationPairs.map((pair) => (
                <li
                  key={`${pair.from}-to`}
                  className="flex items-center gap-2 px-6 py-3 text-sm text-white border-b border-white/10 last:border-b-0 md:last:border-b md:border-b-0"
                >
                  <span
                    className="shrink-0 text-sm"
                    style={{ color: "var(--color-electricBlue)" }}
                    aria-hidden
                  >
                    &rarr;
                  </span>
                  {pair.to}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
