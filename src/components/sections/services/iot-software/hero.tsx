import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function IoTSoftwareHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/60" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 text-center">
        <p className="text-xl font-light tracking-[0.03em] text-white/90 md:text-4xl lg:text-[48px]">
          IoT Software Development Services
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px]">
          That Turn Devices Into Products
        </h1>
        <p className="mx-auto mt-4 text-lg italic text-white/90 md:text-xl">
          Hardware alone isn&apos;t enough—modern products require intelligent software.
        </p>
        <p className="mx-auto mt-5 max-w-[980px] text-base leading-relaxed text-white/80">
          Our IoT software development services focus on building scalable platforms that transform
          connected devices into fully functional digital ecosystems.
        </p>
        <p className="mx-auto mt-3 max-w-[980px] text-base leading-relaxed text-white/80">
          From IoT application development to cloud-based device management systems, we help
          businesses unlock real value from their connected hardware.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendlyScheduleButton
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule a Call
          </CalendlyScheduleButton>
          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex rounded-lg border border-white/70 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
