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
    <section className="py-16 md:py-24 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-white">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-1">
            When Blockchain Makes Sense
          </h2>
          <p className="text-xs md:text-sm text-white/60">
            (And When It Doesn’t)
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {/* Fits when card */}
          <div className="rounded-[32px] bg-[#050819] border border-slate-800 shadow-[0_30px_90px_rgba(0,0,0,0.75)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-400 mb-4 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-500 text-sky-400 text-xs">
                ✓
              </span>
              Blockchain Fits When:
            </p>

            <ul className="space-y-2.5 text-sm md:text-[15px] text-white/80 mb-6">
              {fitsWhen.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                Examples:
              </p>
              <div className="flex flex-wrap gap-2">
                {fitsExamples.map((ex) => (
                  <span
                    key={ex}
                    className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-[13px] font-medium text-white/80"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Probably not blockchain card */}
          <div className="rounded-[32px] bg-[#050819] border border-slate-800 shadow-[0_30px_90px_rgba(0,0,0,0.75)] px-6 py-7 md:px-8 md:py-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-rose-400 mb-4 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-rose-500 text-rose-400 text-xs">
                ✕
              </span>
              Probably Not Blockchain:
            </p>

            <ul className="space-y-2.5 text-sm md:text-[15px] text-white/80 mb-6">
              {notWhen.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                Better Alternatives:
              </p>
              <div className="flex flex-wrap gap-2">
                {betterAlternatives.map((ex) => (
                  <span
                    key={ex}
                    className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-[13px] font-medium text-white/80"
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

