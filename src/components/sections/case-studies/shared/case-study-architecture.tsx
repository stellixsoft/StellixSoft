import Image from "next/image";
import type { CaseStudyContent } from "./types";

type Props = {
  data: CaseStudyContent["architecture"];
};

export default function CaseStudyArchitecture({ data }: Props) {
  const label = data.label ?? "Technical Architecture";
  const heading = data.heading ?? "Technical Architecture";

  return (
    <section
      className="px-4 py-20 sm:px-6 md:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 55% 10%, rgba(16,172,219,0.18) 0%, rgba(255,255,255,0) 65%), #ffffff",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <div className="w-full text-left">
            {data.heading ? (
              <>
                <p className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-electricBlue)]">
                  {label}
                </p>
                <h2 className="mt-3 text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
                  {heading}
                </h2>
              </>
            ) : (
              <h2 className="text-3xl font-light leading-tight text-[var(--color-deepSpace)] md:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}

            {data.description ? (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-base">
                {data.description}
              </p>
            ) : null}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {data.stackItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl px-5 py-4 text-center text-white shadow-[0_10px_32px_rgba(9,128,168,0.25)]"
                  style={{
                    background:
                      "linear-gradient(180deg, #3bb8e0 0%, var(--color-electricBlue-solid) 100%)",
                  }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-white/95 md:text-[13px]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={1400}
              height={1100}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
