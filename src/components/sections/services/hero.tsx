import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function Hero() {
    return (
        <section className={HERO_SECTION_LAYOUT}>
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
                    Our Services
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    We build IoT platforms, modernize legacy applications, and develop real-time systems for hardware companies and enterprises with mission-critical needs.
                </p>
            </div>
        </section>
    );
}
