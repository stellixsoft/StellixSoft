import { BlueTickIcon } from "@/src/components/sections/services/dedicated-development-teams/dedicated-section-blue-tick";

export default function WhenBlockchainMakesSense() {
  const fitsWhen = [
    "Multiple untrusted parties need to share data",
    "Immutable audit trail is required",
    "Decentralization adds value",
    "Transparency benefits all parties",
    "Existing trust mechanisms are inadequate",
  ];

  const notWhen = [
    "Single company controls all data",
    "Speed is critical (high transactions/sec)",
    "Data needs to be frequently changed",
    "Simple database would suffice",
    "Trust already exists between parties",
  ];

  const fitsExamples = ["Supply chain", "B2B marketplaces", "Regulatory audits", "Data sharing"];
  const betterAlternatives = [
    "Traditional database",
    "Standard APIs",
    "Signed documents",
    "Audit systems",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-deepSpace)] px-4 py-16 sm:px-6 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(16,172,219,0.25),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1300px] text-white">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-light text-white md:text-3xl lg:text-4xl">
            When Blockchain Makes Sense
          </h2>
          <p className="mt-2 text-xs text-white/60 md:text-sm">(And When It Doesn’t)</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] md:px-8 md:py-9">
            <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-electricBlue)] md:justify-start md:text-xs">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-electricBlue)] text-xs text-[var(--color-electricBlue)]">
                ✓
              </span>
              Blockchain Fits When:
            </p>

            <ul className="mb-6 space-y-2.5 text-sm text-white/85 md:text-[15px]">
              {fitsWhen.map((item) => (
                <li key={item} className="flex items-start gap-2.5 justify-center md:justify-start">
                  <BlueTickIcon className="mt-[7px] h-[13px] w-[13px] shrink-0 brightness-125" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 md:text-left md:text-xs">
                Examples:
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {fitsExamples.map((ex) => (
                  <span
                    key={ex}
                    className="inline-flex items-center rounded-full border border-[rgba(16,172,219,0.35)] bg-[rgba(16,172,219,0.12)] px-3 py-1 text-xs font-medium text-white md:text-[13px]"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] md:px-8 md:py-9">
            <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-400 md:justify-start md:text-xs">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-500 text-xs text-rose-400">
                ✕
              </span>
              Probably Not Blockchain:
            </p>

            <ul className="mb-6 space-y-2.5 text-sm text-white/85 md:text-[15px]">
              {notWhen.map((item) => (
                <li key={item} className="flex items-start gap-2 justify-center md:justify-start">
                  <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-rose-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 md:text-left md:text-xs">
                Action Alternatives:
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {betterAlternatives.map((ex) => (
                  <span
                    key={ex}
                    className="inline-flex items-center rounded-full border border-rose-500/35 bg-rose-500/10 px-3 py-1 text-xs font-medium text-white md:text-[13px]"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
