import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

const atAGlanceLeft = [
  "15-person specialized team, not a generalist agency",
  "Average client relationship: 3+ years",
  "Specialties: IoT, Legacy Modernization, Enterprise Platforms",
];

const atAGlanceRight = [
  "Fortune 500 supply chain operations experience",
  "US/EU timezone aligned - your 9-5 is our 9-5",
];

export default function Hero() {
  return (
    <section className="relative py-10 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/50"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
          About
          <br />
          <span className="font-bold">Stellixsoft</span>
        </h1>

        <p className="mt-6 md:mt-8 text-base md:text-lg font-light text-white/85 max-w-2xl mx-auto leading-relaxed">
          Enterprise software development for companies who need more than a
          typical agency can deliver.
        </p>

        <div className="mt-4">
          <div className="pt-6">
            <h2 className="text-xs font-normal uppercase tracking-widest text-white/80">
              At a glance (for busy executives)
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left max-w-3xl mx-auto">
            <ul className="space-y-4">
              {atAGlanceLeft.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm md:text-base font-light text-white/90 leading-relaxed"
                >
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-electricBlue-solid)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {atAGlanceRight.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm md:text-base font-light text-white/90 leading-relaxed"
                >
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-electricBlue-solid)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
