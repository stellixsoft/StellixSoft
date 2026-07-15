import Image from "next/image";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["testimonial"];
};

export default function CaseStudyTestimonial({ data }: Props) {
  const lifecycleSteps = data.lifecycle?.steps ?? [];
  const timelineSteps = data.processTimeline?.steps ?? [];
  const reasons = data.reasons ?? [];
  const useTimeline = timelineSteps.length > 0;
  const useLifecycle = !useTimeline && lifecycleSteps.length > 0;

  const rightLabel = useTimeline
    ? data.processTimeline?.label
    : useLifecycle
      ? data.lifecycle!.label
      : "Why This Project Succeeded";

  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="w-full max-w-xl justify-self-center lg:justify-self-start lg:max-w-none">
          <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
            Client Testimonial
          </p>
          <blockquote className="mt-5 text-base font-light leading-relaxed text-[var(--color-deepSpace)] md:text-lg lg:text-xl">
            &ldquo;{data.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={data.avatarSrc}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--color-deepSpace)] md:text-base">
                {data.role}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-neutralGray)]">
                {data.companyLine1}
                {data.companyLine2 ? (
                  <>
                    <br />
                    {data.companyLine2}
                  </>
                ) : null}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl justify-self-center lg:justify-self-stretch lg:max-w-none">
          {rightLabel ? (
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
              {rightLabel}
            </p>
          ) : null}

          {useTimeline ? (
            <div className="relative">
              {timelineSteps.map((step, index) => (
                <div
                  key={`${step.role}-${step.title}`}
                  className="grid grid-cols-[92px_24px_1fr] items-start gap-3 sm:grid-cols-[110px_28px_1fr] sm:gap-4"
                  style={{
                    paddingBottom:
                      index < timelineSteps.length - 1 ? "1.35rem" : 0,
                  }}
                >
                  <div className="flex justify-end pt-0.5">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]"
                      style={{ color: step.roleColor }}
                    >
                      {step.role}
                    </span>
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className="z-10 h-3 w-3 shrink-0 rounded-full bg-[var(--color-electricBlue-solid)]" />
                    {index < timelineSteps.length - 1 ? (
                      <div className="absolute top-3 bottom-[-1.35rem] w-px bg-slate-200" />
                    ) : null}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--color-deepSpace)] md:text-[15px]">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-neutralGray)] sm:text-sm">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {useLifecycle
                ? lifecycleSteps.map((step, index) => {
                    const highlighted = index === 0;
                    return (
                      <article
                        key={step.title}
                        className={`flex gap-4 rounded-2xl px-4 py-4 text-left sm:px-5 sm:py-5 ${
                          highlighted
                            ? "bg-[var(--color-electricBlue)] text-white"
                            : "bg-[#F3F4F6] text-[var(--color-deepSpace)]"
                        }`}
                      >
                        <span
                          className={`shrink-0 text-sm font-semibold ${
                            highlighted
                              ? "text-white/90"
                              : "text-[var(--color-electricBlue)]"
                          }`}
                        >
                          {index + 1}.
                        </span>
                        <div>
                          <p className="text-sm font-semibold md:text-[15px]">
                            {step.title}
                          </p>
                          <p
                            className={`mt-1 text-sm leading-relaxed ${
                              highlighted
                                ? "text-white/90"
                                : "text-[var(--color-neutralGray)]"
                            }`}
                          >
                            {step.body}
                          </p>
                        </div>
                      </article>
                    );
                  })
                : reasons.map((reason, index) => {
                    const highlighted = index === 0;
                    return (
                      <article
                        key={reason.title}
                        className={`flex gap-4 rounded-2xl px-4 py-4 text-left sm:px-5 sm:py-5 ${
                          highlighted
                            ? "bg-[var(--color-electricBlue)] text-white"
                            : "bg-[#F3F4F6] text-[var(--color-deepSpace)]"
                        }`}
                      >
                        <span
                          className={`shrink-0 text-sm font-semibold ${
                            highlighted
                              ? "text-white/90"
                              : "text-[var(--color-electricBlue)]"
                          }`}
                        >
                          {index + 1}.
                        </span>
                        <div>
                          <p className="text-sm font-semibold md:text-[15px]">
                            {reason.title}
                          </p>
                          <p
                            className={`mt-1 text-sm leading-relaxed ${
                              highlighted
                                ? "text-white/90"
                                : "text-[var(--color-neutralGray)]"
                            }`}
                          >
                            {reason.body}
                          </p>
                        </div>
                      </article>
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
