import Image from "next/image";

export default function EnterprisePlatformOnAwsCaseStudy() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050819]">
      <div className="max-w-[1300px] mx-auto">
        <div className="rounded-[40px] overflow-hidden bg-[#050819] text-white border border-slate-800 shadow-[0_28px_90px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left content */}
            <div className="px-8 md:px-10 lg:px-14 pt-9 md:pt-11 pb-6 md:pb-10 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-sky-400" />
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Cloud Infrastructure Case Study
                </p>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-[38px] font-light mb-1">
                Enterprise Platform on AWS
              </h2>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-white/70 mb-7">
                Fortune 500 Hardware Company
              </p>

              <div className="mb-6">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-2">
                  The Challenge
                </p>
                <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
                  Legacy on-premise infrastructure couldn&apos;t scale. Deployments were manual and
                  risky. No proper monitoring or alerting.
                </p>
              </div>

              <div className="mt-2 text-sm md:text-[15px] text-white/80">
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-2">
                  What We Built
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1.5">
                  <ul className="space-y-1.5">
                    <li>AWS infrastructure (EC2, RDS, S3)</li>
                    <li>CI/CD pipeline with GitHub Actions</li>
                    <li>Blue-green deployment capability</li>
                  </ul>
                  <ul className="space-y-1.5">
                    <li>Docker containerization</li>
                    <li>CloudWatch monitoring and alerting</li>
                    <li>Auto-scaling configuration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[260px] md:min-h-[360px] lg:min-h-[420px]">
              <Image
                src="/assets/images/cloud-infra.jpg"
                alt="Engineer managing global infrastructure on AWS"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="border-t border-white/5 px-6 md:px-12 py-6 md:py-7">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-between">
              {[
                { label: "Uptime Achieved", value: "99.9%" },
                { label: "Faster Deploys", value: "10x" },
                { label: "Deploy Capable", value: "Daily" },
                { label: "Downtime Deploys", value: "Zero" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[150px] h-[110px] md:h-[120px] rounded-[28px] bg-[#050819] border border-[#0b1025] shadow-[0_18px_45px_rgba(0,0,0,0.85)] px-6 flex flex-col items-center justify-center text-center"
                >
                  <p className="text-xl md:text-2xl font-semibold text-sky-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

