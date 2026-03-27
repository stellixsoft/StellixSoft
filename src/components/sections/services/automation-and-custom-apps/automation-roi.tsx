export default function AutomationRoi() {
  return (
    <section className="py-16 md:py-24 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-[#050819] text-white border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.7)] px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2">
            The ROI of Custom Automation
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 mb-8">
            Typical automation impact based on client data.
          </p>

          <div className="grid gap-8 md:grid-cols-[1.3fr,0.9fr] items-start mb-8">
            <div className="grid gap-6 md:grid-cols-2 text-sm md:text-[15px]">
              <div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-400 mb-3">
                  Time Saved
                </p>
                <div className="space-y-1.5 text-white/80">
                  <div className="flex justify-between gap-4">
                    <span>Manual data entry:</span>
                    <span className="font-medium text-white">10–20 hrs/wk</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Report generation:</span>
                    <span className="font-medium text-white">5–10 hrs/wk</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Email coordination:</span>
                    <span className="font-medium text-white">10–30 hrs/wk</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-400 mb-3">
                  Error Reduction
                </p>
                <div className="space-y-1.5 text-white/80">
                  <div className="flex justify-between gap-4">
                    <span>Manual processes:</span>
                    <span className="font-medium text-rose-300">2–5% rate</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Automated:</span>
                    <span className="font-medium text-emerald-300">&lt;0.1% rate</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Cost per error:</span>
                    <span className="font-medium text-white">$50–500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-black/30 border border-sky-500/40 px-7 py-7 md:py-8 text-center flex flex-col items-center justify-center">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.26em] text-sky-400 mb-2">
                Typical Savings
              </p>
              <p className="text-3xl md:text-[32px] font-semibold text-white mb-1">
                $50,000+
              </p>
              <p className="text-[12px] md:text-sm text-white/70">in annual labor costs</p>
            </div>
          </div>

          <div className="mt-2 rounded-[20px] md:rounded-[24px] bg-black/40 border border-slate-800 px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-1.5">
                ROI Payback Period
              </p>
              <p className="text-sm md:text-[15px] text-white/80 max-w-xl">
                Most automation projects pay for themselves within the first year—often in 4–12
                months depending on scope.
              </p>
            </div>
            <p className="text-lg md:text-xl font-semibold text-sky-300">
              4–12 Months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

