import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function IoTSoftwareHero() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/60"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-24 text-center">
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
          Software Development for Hardware & IoT Companies
       
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 mx-auto">
        Hardware alone isn’t enough—modern products require intelligent software. Our IoT software development services focus on building scalable platforms that transform connected devices into fully functional digital ecosystems.

        </p>
        <p className="mt-4 text-base text-white/80 mx-auto leading-relaxed">
        From IoT application development to cloud-based device management systems, we help businesses unlock real value from their connected hardware.
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
