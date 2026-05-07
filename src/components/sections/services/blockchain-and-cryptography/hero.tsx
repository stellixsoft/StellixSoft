import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";
import { HERO_SECTION_LAYOUT } from "@/src/lib/hero-section-layout";

export default function BlockchainAndCryptographyHero() {
  return (
    <section className={HERO_SECTION_LAYOUT}>
      <HeroBackgroundVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-deepSpace)]/75" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1150px] px-6 py-24 text-center text-white">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-white/85 md:text-sm">
          Blockchain &amp; Cryptography
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
          Blockchain Development Services for Modern Enterprises
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-[11px]">
          <span>Solidity</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Ethereum</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Hyperledger</span>
          <span className="text-white/40" aria-hidden>
            •
          </span>
          <span>Web3</span>
        </div>

        <p className="mx-auto mt-8 max-w-[980px] text-base leading-relaxed text-white/85 md:text-[17px]">
          Our Blockchain development services build secure, scalable systems for real business use.
          From Blockchain and Cryptography to Blockchain integration services, we deliver practical,
          long-term solutions.
        </p>

        <div className="mt-10 flex justify-center">
          <CalendlyScheduleButton
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
              boxShadow:
                "0 0 28px color-mix(in srgb, var(--color-electricBlue) 38%, transparent)",
            }}
          >
            Schedule a Call &gt;
          </CalendlyScheduleButton>
        </div>
      </div>
    </section>
  );
}
