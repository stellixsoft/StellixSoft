import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import HeroCtas from "@/src/components/ui/hero-ctas";

export default function PracticalAiForBusinessHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
          AI Integration Services for
          <br />
          <span className="font-semibold">Business Growth</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
          <span>OpenAI / GPT</span>
          <span>Claude</span>
          <span>LangChain</span>
          <span>Vector Databases</span>
        </div>

        <p className="mt-8 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
         We deliver AI integration services that help businesses unlock the true potential of artificial intelligence. From intelligent automation to advanced AI-powered features, our solutions are built to solve real-world challenges and drive measurable business outcomes.
        </p>

        <HeroCtas proofHref="/case-studies" proofLabel="See our case studies" />
      </div>
    </section>
  );
}
