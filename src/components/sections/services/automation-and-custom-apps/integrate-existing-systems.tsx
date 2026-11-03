import Link from "next/link";

const integrationTargets = [
  "CRM systems",
  "ERP platforms",
  "Accounting software",
  "Databases",
  "E-commerce platforms",
  "Legacy applications",
  "Internal systems",
  "Cloud services",
  "REST APIs",
  "Webhooks",
  "Reporting platforms",
];

export default function IntegrateExistingSystems() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 mb-3">
              Systems &amp; Integrations
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4 leading-tight">
              Integrate Automation With Your Existing Systems
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5 max-w-xl">
              Most businesses do not need to replace every system they already
              use. Often, the better solution is to connect existing platforms
              and automate the work that currently happens between them.
            </p>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8 max-w-xl">
              Depending on platform access and technical requirements,
              StellixSoft can build integrations involving the systems your
              teams already rely on.
            </p>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-xl">
              When older software is blocking integration, automation can also
              be combined with{" "}
              <Link
                href="/services/legacy-modernization"
                className="text-[var(--color-electricBlue)] font-medium hover:underline underline-offset-4"
              >
                legacy modernization services
              </Link>{" "}
              or{" "}
              <Link
                href="/services/enterprise-development"
                className="text-[var(--color-electricBlue)] font-medium hover:underline underline-offset-4"
              >
                enterprise software development
              </Link>{" "}
              rather than replacing the entire platform at once.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] p-6 md:p-8">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-5">
              Integration targets
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {integrationTargets.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5"
                >
                  <span
                    className="h-2 w-2 rounded-full bg-sky-400 shrink-0"
                    aria-hidden
                  />
                  <span className="text-sm md:text-[15px] font-medium text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
