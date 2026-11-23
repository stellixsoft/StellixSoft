import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import HeroCtas from "@/src/components/ui/hero-ctas";

type Props = {
  title: string;
  intro: string;
  proofHref?: string;
  proofLabel?: string;
};

/** Standard service-page hero: video background, H1, one paragraph and the lead CTAs. */
export default function SimpleServiceHero({ title, intro, proofHref, proofLabel }: Props) {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/60" aria-hidden />
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base text-white/80 mx-auto leading-relaxed">{intro}</p>
        <HeroCtas proofHref={proofHref} proofLabel={proofLabel} />
      </div>
    </section>
  );
}
