const benefits = [
  {
    title: "Enterprise Experience",
    description:
      "Currently supporting Fortune 500 supply chain operations with 6 dedicated developers.",
  },
  {
    title: "US Timezone Alignment",
    description:
      "We work your hours. Morning standups, real-time Slack, no 12-hour response delays.",
  },
  {
    title: "Legacy Modernization Experts",
    description:
      "Successfully migrated 15 year old VB.NET systems to .NET Core 6 without disrupting client operations.",
  },
  {
    title: "Long Term Partnership Model",
    description:
      "We don't do one-off projects and disappear. Our average client relationship spans 3+ years.",
  },
  {
    title: "Faster Than Hiring",
    description:
      "Start in 2 weeks vs. 3-6 months hiring. Full team ready immediately with no ramp-up time.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WhyStellixsoft() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white" style={{
      backgroundImage: "url('/assets/images/background-url.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - 40% */}
          <div className="space-y-6">
            <div>
              <p
                className="text-sm font-normal uppercase tracking-widest mb-3"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Why StellixSoft
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4 leading-tight">
                Complex Software for Serious Companies
              </h2>
              <p className="text-xs md:text-sm  text-[var(--color-neutralGray)] leading-relaxed">
                We specialize in the challenges that other agencies avoid.
                Whether it&apos;s a 15-year-old legacy system or a real-time IoT
                platform, we have the expertise to deliver.
              </p>
            </div>

            {/* Statistics Boxes */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div
                className="flex-1 rounded-xl p-6 text-white"
                style={{
                  background: "linear-gradient(90deg, #3686F2 0%, #0BB0D7 100%)",
                }}
              >
                <p className="text-xl md:text-xl font-light mb-1">3+ Years</p>
                <p className="text-xs uppercase tracking-wider opacity-90">
                  Avg. Client Relation
                </p>
              </div>
              <div
                className="flex-1 rounded-xl p-6 text-white"
                style={{
                  background: "linear-gradient(90deg, #3686F2 0%, #0BB0D7 100%)",
                }}
              >
                <p className="text-xl md:text-xl font-light mb-1">2 Weeks</p>
                <p className="text-xs uppercase tracking-wider opacity-90">
                  Average Onboarding
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-5 rounded-xl border-2 transition-all hover:border-[var(--color-electricBlue)]/50 hover:shadow-md"
                style={{ borderColor: "rgba(16, 172, 219, 0.2)" }}
              >
                {/* Checkmark Icon */}
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--color-electricBlue)" }}
                >
                  <CheckIcon />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-md md:text-md font-medium text-[var(--color-deepSpace)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-neutralGray)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
