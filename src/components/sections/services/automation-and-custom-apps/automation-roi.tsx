import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function AutomationCost() {
  return (
    <section className="py-16 md:py-24 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-[#050819] text-white border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.7)] px-6 md:px-10 lg:px-14 py-8 md:py-10 lg:py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            How Much Does Business Process Automation Cost?
          </h2>
          <p className="text-sm md:text-[15px] text-white/70 mb-6 max-w-3xl leading-relaxed">
            The cost of a business automation project depends on the complexity
            of the workflow, number of integrations, user roles, data
            requirements, security needs, reporting requirements, and whether
            the project extends an existing system or requires a new internal
            application.
          </p>
          <p className="text-sm md:text-[15px] text-white/70 mb-8 max-w-3xl leading-relaxed">
            A focused project may begin with one high-value workflow, while a
            multi-system enterprise automation platform usually requires a
            deeper technical discovery process before scope and pricing can be
            estimated accurately. Rather than forcing every project into the
            same package, we recommend identifying the workflow with the
            clearest operational value and evaluating that process first.
          </p>

          <div className="mt-2 rounded-[20px] md:rounded-[24px] bg-black/40 border border-slate-800 px-6 md:px-8 py-5 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-1.5">
                Next Step
              </p>
              <p className="text-sm md:text-[15px] text-white/80 max-w-xl">
                Request a project estimate, or review our{" "}
                <Link
                  href="/pricing"
                  className="text-sky-300 font-medium hover:underline underline-offset-4"
                >
                  software development pricing
                </Link>
                .
              </p>
            </div>
            <CalendlyScheduleButton
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
              }}
            >
              Request a Project Estimate
            </CalendlyScheduleButton>
          </div>
        </div>
      </div>
    </section>
  );
}
