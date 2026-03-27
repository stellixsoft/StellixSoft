import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function DevOpsAndCloudServicesHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source
          src="/assets/videos/hero-banner-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-white/70 mb-4">
          DevOps &amp; Cloud Services
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
          Modern Infrastructure
          <br />
          <span className="font-semibold">For Modern Applications</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
          <span>AWS</span>
          <span>Google Cloud</span>
          <span>Azure</span>
          <span>Docker</span>
          <span>Kubernetes</span>
        </div>

        <p className="mt-8 text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          Cloud migration, CI/CD pipelines, infrastructure as code, and ongoing cloud management. We
          help you build, deploy, and operate applications on AWS, Google Cloud, and Azure.
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
