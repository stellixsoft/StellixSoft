export default function StartSmallProveValue() {
  const bullets = [
    "We analyze your specific business problem",
    "Build a working prototype with real data",
    "Demonstrate measurable value before scaling",
    "Clear go/no-go decision with evidence",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-slate-200/80 shadow-[0_24px_70px_rgba(15,23,42,0.06)] px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12 grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-slate-900 mb-2">
              Start Small, Prove Value
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6 max-w-xl">
              Not sure if AI is right for your use case? Start with a targeted prototype.
            </p>
            <ul className="space-y-2.5 text-sm md:text-[15px] text-slate-700">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] text-emerald-500">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs md:text-[13px] text-slate-500 max-w-xl">
              If the POC doesn’t prove value, you’ve learned something valuable for a fraction of
              a full implementation cost. If it does? You have a working foundation to build on.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#050819] text-white px-7 py-7 md:px-8 md:py-8 shadow-[0_26px_80px_rgba(0,0,0,0.75)] flex flex-col justify-center h-full">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.26em] text-sky-400 mb-2">
              AI Proof of Concept
            </p>
            <p className="text-3xl md:text-[32px] font-semibold mb-1">
              $10k – $20k
            </p>
            <p className="text-sm md:text-[15px] text-white/80 mb-4">3–4 weeks</p>
            <p className="text-xs md:text-[13px] text-white/70">
              Pricing depends on scope, data sources, and integration complexity. Designed to be a
              focused engagement with clear outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

