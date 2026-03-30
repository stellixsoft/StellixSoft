import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function AutomationAndCustomAppsHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
          Automation &amp; Custom
          <br />
          <span className="font-semibold">Applications</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
          <span>AWS</span>
          <span>Google Cloud</span>
          <span>Azure</span>
          <span>Docker</span>
          <span>Kubernetes</span>
        </div>

        <p className="mt-8 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
          Custom applications that automate your repetitive tasks, connect your systems, and give
          your team superpowers. Internal tools, workflow automation, and integrations built for
          your specific needs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyScheduleButton
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue) 100%)",
            }}
          >
            Schedule a Call
          </CalendlyScheduleButton>
          <Link
            href="/case-studies/multi-location-service-business-platform"
            className="inline-flex rounded-lg border border-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:border-white"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
