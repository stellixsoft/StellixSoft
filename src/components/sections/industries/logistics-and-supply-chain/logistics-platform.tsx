import Image from "next/image";
import Link from "next/link";

const challengeItems = [
  "Growing 3PL company drowning in manual processes",
  "Scheduling via Excel spreadsheets with no visibility",
  "High volume of status calls from drivers and clients",
];

const adminDashboardItems = [
  "Drag-drop scheduling",
  "Real-time fleet map",
  "Route optimization",
];

const driverAppItems = ["Daily job list", "Navigation integration", "Digital POD"];

const metrics = [
  { value: "70%", label: "Fewer Calls" },
  { value: "40%", label: "Faster Dispatch" },
  { value: "2x", label: "Capacity" },
  { value: "5+", label: "Tools Replaced" },
];

const technologies = ["React", "Node.js", "Flutter", "MongoDB", "AWS", "Google Maps"];

export default function LogisticsPlatform() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1100px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-0">
        {/* Left column - dark content panel */}
        <div
          className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col"
          style={{ backgroundColor: "var(--color-deepSpace)" }}
        >
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Case Study: Logistics Platform
          </p>
          <h2 className="text-xl md:text-2xl font-light text-white mb-2">
            ZB Lines – 3PL Logistics Platform
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Third-Party Logistics | Freight &amp; Distribution
          </p>

          <p className="text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
            The Challenge
          </p>
          <ul className="space-y-1.5 mb-6">
            {challengeItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                <span
                  className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-electricBlue)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-300 mb-2">
                Admin Dashboard
              </p>
              <ul className="space-y-1.5">
                {adminDashboardItems.map((item) => (
                  <li key={item} className="text-sm text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-300 mb-2">
                Driver App
              </p>
              <ul className="space-y-1.5">
                {driverAppItems.map((item) => (
                  <li key={item} className="text-sm text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-lg md:text-xl font-bold text-white">{m.value}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-300">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/case-studies/logistics-management-platform"
            className="inline-flex items-center gap-2 text-sm font-medium mt-auto text-white"
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

