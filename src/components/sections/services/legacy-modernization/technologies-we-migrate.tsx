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
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(3,2,19,0.92) 0%, rgba(3,2,19,0.88) 100%), url('/assets/images/background-img.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-electricBlue) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, var(--color-electricBlue) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[900px]">
        <h2 className="text-center text-3xl font-semibold text-white md:text-[44px]">
          Technologies We Migrate From & To
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-xl backdrop-blur-[2px]">
          <div className="grid grid-cols-1 gap-4 border-b border-white/20 md:grid-cols-2 md:gap-0">
            <div className="flex items-center gap-2 px-6 py-4 md:py-5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" aria-hidden />
              <span className="text-sm font-medium uppercase tracking-wider text-white">
                From (Legacy)
              </span>
            </div>
            <div className="flex items-center gap-2 border-white/20 px-6 py-4 md:border-l md:py-5">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span className="text-sm font-medium uppercase tracking-wider text-white">
                To (Modern)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-2 md:divide-x md:divide-y-0">
            <ul className="py-4 md:py-6">
              {migrationPairs.map((pair) => (
                <li
                  key={pair.from}
                  className="border-b border-white/10 px-6 py-3 text-sm text-white last:border-b-0 md:border-b-0 md:last:border-b"
                >
                  {pair.from}
                </li>
              ))}
            </ul>
            <ul className="py-4 md:py-6">
              {migrationPairs.map((pair) => (
                <li
                  key={`${pair.from}-to`}
                  className="flex items-center gap-2 border-b border-white/10 px-6 py-3 text-sm text-white last:border-b-0 md:border-b-0 md:last:border-b"
                >
                  <span className="shrink-0 text-sm" style={{ color: "var(--color-electricBlue)" }} aria-hidden>
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
