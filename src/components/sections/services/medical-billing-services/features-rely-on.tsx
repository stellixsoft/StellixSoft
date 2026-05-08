const features = [
  {
    title: "KPI Dashboard",
    description:
      "Track collections, reimbursements, claim status, denial trends, and overall financial performance with easy-to-understand reporting dashboards.",
  },
  {
    title: "Claims Validation",
    description:
      "Advanced claim review processes help identify errors before submission, reducing denials and accelerating reimbursements.",
  },
  {
    title: "eSuper Bill",
    description:
      "Simplified superbill management designed to improve coding accuracy and streamline documentation workflows.",
  },
  {
    title: "Advanced Reporting",
    description:
      "Gain actionable insights into your practice performance with detailed billing reports, revenue analytics, and customized financial summaries.",
  },
];

const NURSE_IMAGE = "/assets/images/features.jpg";

export default function MedicalBillingFeaturesRelyOn() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${NURSE_IMAGE})` }}
        aria-hidden
      />
      {/* Tint overlay — requested rgba(10, 15, 28, …); slight transparency keeps photo readable */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(10, 15, 28, 0.92)" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgba(16,172,219,0.55) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-[3] mx-auto max-w-[1000px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-light text-white">
          Features You Can Rely On
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border px-6 py-7 backdrop-blur-[2px] md:px-8 md:py-8"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.55)",
                borderColor: "rgba(148,163,184,0.22)",
              }}
            >
              <h3 className="text-lg font-normal text-white md:text-xl">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-neutralGray)] md:text-[15px]">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
