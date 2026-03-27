import Image from "next/image";
export default function TypicalCiCdPipeline() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
          Typical CI/CD Pipeline We Build
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Continuous integration and delivery for reliable, zero-downtime releases.
        </p>

        <div className="mt-10 rounded-[40px] bg-[#070b1f] border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.6)] px-6 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8">
            {[
              { label: "Code Push", detail: "GitHub PR / Push" },
              { label: "Build", detail: "Docker image build" },
              { label: "Test", detail: "Unit + integ tests" },
              { label: "Staging", detail: "Auto deploy review" },
              { label: "Prod", detail: "Blue/green deploy" },
            ].map((stage) => (
              <div key={stage.label} className="flex flex-col items-center text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-white/80 border border-white/10">
                  <Image
                    src="/assets/images/IOT-icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                    aria-hidden
                  />
                </div>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/70 mb-1">
                  {stage.label}
                </p>
                <p className="text-xs md:text-[13px] text-white/60">{stage.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left text-xs md:text-sm">
            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 mb-1">
                Quality Gate
              </p>
              <p className="text-white/80">
                Manual approval required for production deploy.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 mb-1">
                Safety Net
              </p>
              <p className="text-white/80">
                Auto rollback enabled if health checks fail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

