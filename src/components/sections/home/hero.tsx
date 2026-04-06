import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { ScheduleArrowIcon } from "@/src/components/ui/schedule-arrow-icon";

export default function Hero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] h-[calc(100vh+120px)]">
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
          Custom Software Development Company
          <br />
          <span className="font-bold">For Scalable Business Solutions</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
          Powering device management for a Fortune 500 supply chain
        </p>

        <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          We build IoT platforms, modernize legacy applications, and develop
          real-time systems for hardware companies and enterprises with
          mission-critical needs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyScheduleButton
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule a Call
            <ScheduleArrowIcon className="w-4 h-4 shrink-0 text-white" />
          </CalendlyScheduleButton>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-lg border border-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:border-white"
          >
            Our Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
