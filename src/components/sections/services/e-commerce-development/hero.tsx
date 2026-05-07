import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function ECommerceDevelopmentHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 py-24 text-center text-white">
        <h1 className="text-[42px] font-light leading-[1.15] md:text-[56px] lg:text-[64px]">
          E-commerce Development
          <br />
          <span className="font-semibold">Services For Scalable Online Businesses</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 md:text-[11px]">
          <span>Custom Development</span>
          <span>Scalable Architecture</span>
          <span>Platform Flexibility</span>
          <span>UX Performance</span>
        </div>

        <p className="mx-auto mt-8 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          Our E-commerce development services are designed for businesses that need more than basic
          online stores. From custom ecommerce development to advanced Shopify ecommerce
          development, we build platforms that scale with your business.
        </p>
        <p className="mx-auto mt-3 max-w-[920px] text-sm leading-relaxed text-white/85 md:text-base">
          Whether you&apos;re launching a new store or upgrading an existing one, our custom ecommerce
          website development ensures performance, flexibility, and seamless user experience.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <CalendlyScheduleButton
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule a Call
          </CalendlyScheduleButton>
        </div>
      </div>
    </section>
  );
}
