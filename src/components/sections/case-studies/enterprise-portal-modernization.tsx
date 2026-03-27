import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "Zero", label: "Downtime Migration" },
  { value: "3+ ", label: "Years Partner" },
  { value: "6", label: "Devs Dedicated" },
  { value: "10,000+", label: "Devices Monitored" },
];

const techStack = [".NET Core 6", "SignalR", "React", "SQL Server", "AWS"];

export default function EnterprisePortalModernizationOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1000px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row bg-[var(--color-deepSpace)] text-white">
        {/* Left column - case summary */}
        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-electricBlue)] mb-3">
            Featured
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 lg:mb-6">
            Enterprise<br className="hidden lg:block" /> Portal<br className="hidden lg:block" /> Modernization
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-4">
            Global Hardware Company | Fortune 500 Supply Chain
          </p>

          <p className="text-sm text-gray-200 leading-relaxed mb-6 sm:mb-8">
            Migrated 15-year-old VB.NET enterprise portal to .NET Core 6 with real-time
            capabilities, serving 10,000+ devices worldwide.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-center">
                <p className="text-base sm:text-lg font-medium">{m.value}</p>
                <p className="text-[10px] font-medium uppercase text-white/70 mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-electricBlue)]"
          >
            Read Full Case Study
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Right column - architecture overview */}
        <div className="lg:w-1/2 flex flex-col min-h-[250px] sm:min-h-[300px] lg:min-h-0">
          <div className="flex-1 lg:rounded-r-3xl bg-black/60 border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/images/architecture.png"
              alt="Architecture overview of enterprise portal modernization"
              width={600}
              height={400}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

