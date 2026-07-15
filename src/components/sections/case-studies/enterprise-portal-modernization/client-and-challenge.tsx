import type { ReactNode } from "react";

const technicalDebtItems = [
  "Legacy VB.NET codebase, limited dev availability",
  "Monolithic architecture that couldn't scale",
  "No real-time device monitoring capabilities",
  "Single-tenant design limiting enterprise growth",
];

const businessImpactItems = [
  "Features took 3-4× longer than competitors",
  "Couldn't onboard large enterprise clients",
  "Support tickets rising due to performance issues",
  "Risk of losing Fortune 500 contracts",
];

function ChipIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M8.25 19.5V21M15.75 19.5V21M4.5 8.25H3M4.5 15.75H3M21 8.25h-1.5M21 15.75h-1.5M6.75 6.75h10.5v10.5H6.75V6.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5v-4.5z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l5.25-5.25L12 12l6.75-6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5h18" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25v5.25m0-8.25h.008v.008H11.25V8.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
    </svg>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-electricBlue)]/15 text-[var(--color-electricBlue)]">
      {children}
    </div>
  );
}

function ProblemList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-relaxed text-white/85 md:text-[15px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4b5c]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EnterprisePortalClientAndChallenge() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/images/case-study-section-bg.jpg)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="max-w-1xl">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            What was holding them back
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
          {/* Technical Debt */}
          <article className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-7">
            <IconBadge>
              <ChipIcon />
            </IconBadge>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Technical Debt
            </h3>
            <ProblemList items={technicalDebtItems} />
          </article>

          {/* Business Impact */}
          <article className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-7">
            <IconBadge>
              <ChartIcon />
            </IconBadge>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Business Impact
            </h3>
            <ProblemList items={businessImpactItems} />
          </article>

          {/* Previous Attempts */}
          <article className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-7">
            <IconBadge>
              <InfoIcon />
            </IconBadge>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Previous Attempts
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-white/85 md:text-[15px]">
              Two previous modernization attempts with other development
              agencies had failed. The internal team lacked .NET Core expertise
              and needed a partner who could modernize without disrupting live
              Fortune 500 operations.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-electricBlue)]">
              <SyncIcon />
              Strategic intervention required
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
