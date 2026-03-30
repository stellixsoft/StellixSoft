import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

export default function StockOptionsAndEquityManagementPlatformHero() {
  return (
    <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      {/* Video background */}
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
        Stock Options &amp; Equity
          <br />
          <span className="font-semibold">Management Platform</span>
        </h1>

        <p className="mt-6 text-sm md:text-base lg:text-md text-white/80 uppercase">
          Technology Company &nbsp;|&nbsp; 200+ Employees
        </p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-5 md:px-6 md:py-6 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-semibold">95%</p>
            <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
              Less HR Time
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-5 md:px-6 md:py-6 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-semibold">80%</p>
            <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
              Faster Audit Prep
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-5 md:px-6 md:py-6 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-semibold">Zero</p>
            <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
              Calc Errors
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-5 md:px-6 md:py-6 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-semibold">100%</p>
            <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
              Self-Service Adoption
            </p>
          </div>
        </div>

        {/* Industry + tech tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-electricBlue-solid)]" aria-hidden />
            Industry: HR Tech / Fintech
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            .NET Core 6
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            React
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            Node.js
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            PostgreSQL
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            AWS Lambda
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
            Serverless
          </span>
        </div>
      </div>
    </section>
  );
}
