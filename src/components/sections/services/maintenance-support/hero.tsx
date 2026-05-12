import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function MaintenanceSupportHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
       
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
        Software Maintenance and Support Services for Business Continuity

        </h1>

        <p className="mt-8 text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          Our Software maintenance and support services are designed to keep mission-critical applications stable, secure, and continuously improving. From daily monitoring to long-term optimization, we provide application maintenance and support services that ensure your software performs reliably under real-world conditions.
        </p>
        <p className="mt-8 text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          Unlike reactive fixes, our application maintenance services focus on preventing issues before they impact your users.
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
          </CalendlyScheduleButton>
          <Link
            href="/case-studies/enterprise-portal-modernization"
            className="inline-flex rounded-lg border border-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:border-white"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
