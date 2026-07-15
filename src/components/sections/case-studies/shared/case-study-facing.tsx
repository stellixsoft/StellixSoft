import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["facing"];
};

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-electricBlue)]"
      aria-hidden
    >
      <svg
        className="h-3 w-3 text-white"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 6.5 5 9l4.5-6" />
      </svg>
    </span>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function CaseStudyFacing({ data }: Props) {
  const compactPilot = !data.notReadyYet;

  return (
    <section
      className="px-4 py-20 sm:px-6 md:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(16,172,219,0.14) 0%, rgba(255,255,255,0) 55%), #f7fbfe",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            {data.label ?? "Facing Similar Challenges?"}
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
            {data.headingLine1}
            {data.headingLine2 ? ` ${data.headingLine2}` : null}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CalendlyScheduleButton
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{
                backgroundColor: "var(--color-electricBlue-solid)",
              }}
            >
              Schedule Your Free Assessment
              <span aria-hidden>→</span>
            </CalendlyScheduleButton>

            <a
              href="mailto:info@stellixsoft.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-[var(--color-deepSpace)] transition-colors hover:border-[var(--color-electricBlue)]"
            >
              <MailIcon />
              info@stellixsoft.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <article className="rounded-2xl bg-white px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-6 sm:py-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
              What You Get
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-neutralGray)]">
              {data.whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {compactPilot ? (
            <article className="grid grid-cols-1 gap-6 rounded-2xl bg-white px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2 sm:px-6 sm:py-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
                  Availability
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-deepSpace)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  {data.nextSlotLabel}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
                  Team
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-deepSpace)]">
                  {data.teamLabel}
                </p>
              </div>
            </article>
          ) : (
            <>
              <article className="rounded-2xl bg-white px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-6 sm:py-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
                  Not Ready Yet?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-neutralGray)]">
                  {data.notReadyYet}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-[var(--color-deepSpace)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  {data.nextSlotLabel}
                </p>
              </article>

              <article className="flex flex-col gap-4 rounded-2xl bg-white px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-electricBlue)]">
                    Global Team
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-deepSpace)]">
                    {data.teamLabel}
                  </p>
                </div>
                <CalendlyScheduleButton
                  className="inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white"
                  style={{
                    backgroundColor: "var(--color-electricBlue-solid)",
                  }}
                >
                  Book a Call
                </CalendlyScheduleButton>
              </article>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
