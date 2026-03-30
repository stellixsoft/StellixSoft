export default function ProactiveVsReactiveCost() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Proactive vs. Reactive: The Real Cost
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Reactive card */}
          <article className="rounded-[32px] bg-white border border-rose-100 shadow-[0_24px_70px_rgba(248,113,113,0.15)] px-7 py-8 md:px-10 md:py-10">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-rose-500 mb-2 flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-rose-400">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
              </span>
              Reactive Approach
            </p>
            <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-5">
              Wait until something breaks, then scramble to fix it.
            </p>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
              The Real Cost:
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-[var(--color-neutralGray)] mb-8">
              <li>Emergency rates (1.5–2x normal)</li>
              <li>Downtime while you find help</li>
              <li>Lost revenue during outages</li>
              <li>Damaged customer trust</li>
              <li>Compounded technical debt</li>
            </ul>
            <div className="mt-auto rounded-2xl bg-rose-50 border border-rose-100 px-5 py-4 text-center">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-rose-400 mb-1">
                Average Production Incident Cost:
              </p>
              <p className="text-base md:text-lg font-semibold text-rose-500">
                $5,000 – $50,000+
              </p>
            </div>
          </article>

          {/* Proactive card */}
          <article className="rounded-[32px] bg-[#050819] text-white shadow-[0_28px_90px_rgba(15,23,42,0.6)] px-7 py-8 md:px-10 md:py-10 border border-slate-800">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 mb-2 flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Proactive Maintenance
            </p>
            <p className="text-sm md:text-[15px] text-white/80 mb-5">
              Regular care prevents emergencies.
            </p>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-3">
              What You Get:
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-white/80 mb-8">
              <li>Predictable monthly cost</li>
              <li>Issues caught before impact</li>
              <li>No scrambling for help</li>
              <li>Steady improvements</li>
              <li>Peace of mind</li>
            </ul>
            <div className="mt-auto rounded-2xl bg-[var(--color-electricBlue-solid)] px-5 py-4 text-center shadow-[0_18px_50px_rgba(56,189,248,0.6)]">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/80 mb-1">
                Monthly Maintenance Cost:
              </p>
              <p className="text-base md:text-lg font-semibold text-white">
                $1,500 – $7,000
              </p>
            </div>
          </article>
        </div>

        <p className="mt-8 text-[11px] md:text-xs text-center text-[var(--color-neutralGray)] uppercase tracking-[0.24em]">
          Prevention is cheaper than cure.
        </p>
      </div>
    </section>
  );
}

