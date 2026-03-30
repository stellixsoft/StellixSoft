import Image from "next/image";
import Link from "next/link";

const challengeItems = [
  "15-year-old VB.NET platform couldn't scale",
  "No real-time monitoring capabilities",
  "Single-tenant design limiting enterprise growth",
];

const metrics = [
  { value: "10,000+", label: "Devices" },
  { value: "3+ Years", label: "Partner" },
  { value: "6 Devs", label: "Dedicated" },
  { value: "85%", label: "Auto-Resolved" },
];

const technologies = [".NET Core 6", "SignalR", "React", "SQL Server", "AWS"];

export default function EnterpriseIoT() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1100px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-0">
        {/* Left column - white card */}
        <div className="flex-1 bg-white p-6 md:p-8 lg:p-10 flex flex-col">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Featured Case Study
          </p>
          <h2 className="text-xl md:text-2xl font-light text-[var(--color-deepSpace)] mb-6">
            Enterprise IoT Platform for Global Manufacturer
          </h2>

          <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-2">
            The Challenge
          </p>
          <ul className="space-y-1.5 mb-6">
            {challengeItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-deepSpace)]"
              >
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-deepSpace)]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-2">
            What We Built
          </p>
          <p className="text-sm text-[var(--color-deepSpace)] leading-relaxed mb-8">
            Multi-tenant platform serving Fortune 500 clients with real-time
            monitoring of 10,000+ devices worldwide, automated ticketing, and
            enterprise reporting.
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <p className="text-lg md:text-xl font-medium text-[var(--color-deepSpace)]">
                  {m.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-deepSpace)]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex items-center gap-2 text-sm font-medium mt-auto"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Read Full Case Study
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        {/* Right column - image + overlay + technologies */}
        <div className="flex-1 relative min-h-[280px] lg:min-h-[400px]">
          <Image
            src="/assets/images/fallback.webp"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-[var(--color-deepSpace)]/70"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            aria-hidden
          />
          {/* Technologies overlay - bottom right */}
          <div className="absolute bottom-4 right-4 left-4 md:left-auto md:max-w-sm rounded-xl border border-white/20 bg-black/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
