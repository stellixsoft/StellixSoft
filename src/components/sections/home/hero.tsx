import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import HeroCtas from "@/src/components/ui/hero-ctas";

export default function Hero() {
  return (
    <section className="relative py-28 sm:py-36 md:py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(100svh+80px)] md:h-[calc(100vh+120px)] md:min-h-0">
      {/* Video background */}
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      {/* Optional dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/50"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
          Custom Software Development Company For Scalable Business Solutions
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
          Powering device management for a Fortune 500 supply chain
        </p>

        <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          We are a custom software development company that builds IoT platforms, modernizes legacy applications, and develops real-time systems for hardware companies and enterprises with mission-critical needs.
        </p>

        <HeroCtas proofHref="/case-studies" proofLabel="See our case studies" />
      </div>
    </section>
  );
}
