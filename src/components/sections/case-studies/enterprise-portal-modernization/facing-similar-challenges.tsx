import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

const benefits = [
  "Free technical assessment",
  "Detailed roadmap",
  "Zero-downtime guarantee",
];

export default function EnterprisePortalFacingSimilarChallenges() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
          Facing Similar Challenges?
        </h2>

        <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed max-w-2xl mx-auto">
          Two other agencies failed this client&apos;s modernization. We succeeded. Let&apos;s
          discuss your legacy system and see if we can help.
        </p>

        <div className="mt-8 md:mt-10 mb-16">
          <CalendlyScheduleButton
            className="inline-flex items-center justify-center rounded-full px-10 md:px-14 py-3.5 md:py-4 text-sm md:text-base font-medium text-white shadow-[0_18px_60px_rgba(0,180,255,0.5)] cursor-pointer"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
            }}
          >
            Schedule Your Free Assessment - No Obligation
          </CalendlyScheduleButton>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-neutralGray)]">
          {benefits.map((benefit) => (
            <span key={benefit} className="inline-flex items-center gap-2">
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[var(--color-electricBlue)] text-[9px] text-[var(--color-electricBlue)]"
                aria-hidden
              >
                ✓
              </span>
              {benefit}
            </span>
          ))}
        </div>

        <hr className="mt-10 mb-6 border-t border-slate-200" />

        <p className="text-[11px] md:text-xs text-[var(--color-neutralGray)] italic max-w-xl mx-auto">
          &quot;This project started with a single discovery call. Three years later, we&apos;re
          still building together. Your project could be next.&quot;
        </p>
      </div>
    </section>
  );
}

