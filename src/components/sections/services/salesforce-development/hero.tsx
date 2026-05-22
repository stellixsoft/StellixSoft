import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function SalesforceDevelopmentHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(80vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
          Salesforce Development Services for Complex Business Workflows

        </h1>


        <p className="mt-8 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
        Our Salesforce development services help organizations extend Salesforce beyond standard capabilities. From advanced automation to deep integrations, we deliver salesforce application development services that align with real business processes.
        </p>
        <p className="mt-8 text-sm md:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
        With our Custom Salesforce Development services, you’re not limited by out-of-the-box features—you get a system that works exactly the way your business operates. 
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
            href="/case-studies"
            className="inline-flex rounded-lg border border-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:border-white"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
