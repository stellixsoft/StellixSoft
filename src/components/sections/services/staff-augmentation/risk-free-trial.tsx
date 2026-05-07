function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RiskFreeTrial() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 sm:px-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="rounded-[40px] border border-cyan-400/60 bg-[#050819] px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.5)] md:px-16 md:py-14">
          <div className="mb-8 flex flex-col items-center text-center md:mb-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheckIcon className="h-7 w-7" />
            </div>
            <h2 className="text-lg font-semibold uppercase tracking-[0.2em] md:text-xl lg:text-2xl">Risk-Free Trial</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-[15px]">
              Not sure if augmentation is right? Start with a 2-week trial to evaluate skills, communication,
              and culture fit on real tasks.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 text-sm text-white/85 md:mb-8 md:grid-cols-2 md:gap-6 md:text-[15px]">
            <div className="flex items-start gap-3 md:justify-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Work with the developer on a real task</span>
            </div>
            <div className="flex items-start gap-3 md:justify-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Evaluate skills &amp; culture fit</span>
            </div>
            <div className="flex items-start gap-3 md:justify-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>No long-term commitment required</span>
            </div>
            <div className="flex items-start gap-3 md:justify-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Replace them or walk away if not right</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-sky-300/90 md:text-xs">
            We&apos;re confident in our developers. That&apos;s why we make it easy to try before you commit.
          </p>
        </div>
      </div>
    </section>
  );
}
