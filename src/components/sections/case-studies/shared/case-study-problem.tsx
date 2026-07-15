import type { ReactNode } from "react";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["problem"];
};

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

const ICONS = [<ChipIcon key="c" />, <ChartIcon key="ch" />, <InfoIcon key="i" />];

export default function CaseStudyProblem({ data }: Props) {
  const showCallout = Boolean(data.callout) && data.cards.length < 3;
  const cards = data.cards.slice(0, showCallout ? 2 : 3);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/case-study-section-bg.jpg)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/55" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="max-w-1xl">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            {data.heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-7"
            >
              <IconBadge>{ICONS[index % ICONS.length]}</IconBadge>
              <h3 className="mb-4 text-lg font-semibold text-white">{card.title}</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-white/85 md:text-[15px]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4b5c]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {showCallout && data.callout ? (
            <article className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md md:p-7">
              <IconBadge>
                <InfoIcon />
              </IconBadge>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {data.callout.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-white/85 md:text-[15px]">
                {data.callout.body}
              </p>
              {data.callout.footer ? (
                <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-electricBlue)]">
                  <SyncIcon />
                  {data.callout.footer}
                </p>
              ) : null}
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
