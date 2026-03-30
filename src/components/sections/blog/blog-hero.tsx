import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";

export default function BlogHero() {
  return (
    <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Engineering
          <br />
          <span className="font-semibold">Blog</span>
        </h1>

        <p className="mt-6 text-base md:text-lg font-medium text-white/80 max-w-2xl mx-auto leading-relaxed">
          Practical insights on enterprise software development, IoT, legacy
          modernization, cloud infrastructure, and AI integration from our
          engineering team.
        </p>
      </div>
    </section>
  );
}
