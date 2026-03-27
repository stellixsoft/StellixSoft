import Image from "next/image";
export default function RiskFreeTrial() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="rounded-[40px] border border-cyan-400/70 bg-[#050819] text-white px-8 md:px-16 py-10 md:py-14 shadow-[0_28px_80px_rgba(15,23,42,0.5)]">
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
              <Image
                src="/assets/images/IOT-icon.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
                aria-hidden
              />
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-[0.18em] uppercase">
              Risk-Free Trial
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-[15px] text-white/80 leading-relaxed">
              Not sure if augmentation is right? Start with a 2-week trial to evaluate skills,
              communication, and culture fit on real tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 text-sm md:text-[15px] text-white/85">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <span
                className="mt-1 h-3 w-3 rounded-full border border-emerald-300 flex items-center justify-center"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <span>Work with the developer on a real task.</span>
            </div>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <span
                className="mt-1 h-3 w-3 rounded-full border border-emerald-300 flex items-center justify-center"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <span>Evaluate skills &amp; culture fit.</span>
            </div>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <span
                className="mt-1 h-3 w-3 rounded-full border border-emerald-300 flex items-center justify-center"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <span>No long-term commitment required.</span>
            </div>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <span
                className="mt-1 h-3 w-3 rounded-full border border-emerald-300 flex items-center justify-center"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <span>Replace them or walk away if not right.</span>
            </div>
          </div>

          <p className="text-[11px] md:text-xs text-center text-emerald-300/80">
            We&apos;re confident in our developers. That&apos;s why we make it easy to try before you
            commit.
          </p>
        </div>
      </div>
    </section>
  );
}

