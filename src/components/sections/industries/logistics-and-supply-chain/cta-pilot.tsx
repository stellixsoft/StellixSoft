import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { CalendlyNextAvailableSlot } from "@/src/components/calendly-next-available-slot";

export default function CTAPilot() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        backgroundImage: "url('/assets/images/background-url.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div
          className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/cta-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6 leading-tight">
              Start With a Low Risk{" "}
              <span className="font-extrabold">Pilot Project</span>
            </h2>

            <p className="text-sm md:text-md text-white/95 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Not ready for a full engagement? Test us on a small project first.
              See our quality, communication, and delivery before committing to
              more.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
              <CalendlyScheduleButton
                className="inline-flex items-center gap-2 rounded-[50px] px-6 md:px-8 py-3 md:py-4 text-base md:text-md font-normal text-white transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  background: "#10ACDB",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 md:w-5 md:h-5"
                  aria-hidden
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Schedule a Discovery Call
              </CalendlyScheduleButton>
              <div className="flex items-center gap-2 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                  aria-hidden
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                <span className="text-sm md:text-md font-normal">
                  Or email us{" "}
                  <a
                    href="mailto:info@stellixsoft.com"
                    className="text-sm md:text-md font-normal underline hover:opacity-80 transition-opacity"
                  >
                    info@stellixsoft.com
                  </a>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm md:text-base text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-sm md:text-md font-normal uppercase tracking-wider">
                  Next Available Slot:{" "}
                  <CalendlyNextAvailableSlot className="uppercase tracking-wider" />
                </span>
              </div>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="text-sm md:text-md font-normal uppercase tracking-wider">
                Global Team of 55+ Experts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
