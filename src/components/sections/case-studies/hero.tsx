import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
      {/* Video background */}
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
          Case <span className="font-semibold">Studies</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto leading-relaxed mb-6">
          See how we&apos;ve helped hardware companies, enterprises, and growing businesses
          solve complex software challenges. Each case study includes the challenge, our solution,
          and measurable results.
        </p>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 mb-16 mt-16">
          Across All Projects
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 text-center mt-4">
          <div>
            <p className="text-xl md:text-2xl font-semibold">10,000+</p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70 mt-1">
              Devices Managed
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">3+</p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70 mt-1">
              Years Avg Relationship
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">$2M+</p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70 mt-1">
              Client Savings Generated
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">Zero</p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/70 mt-1">
              Failed Migrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
