export default function DevOpsConsultingServicesIntro() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-url.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          End-to-End DevOps Consulting Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our DevOps consulting services guide you through every stage of your DevOps journey—from
          strategy and architecture to implementation and optimization. We assess your current
          workflows and design solutions that improve efficiency, collaboration, and delivery speed.
        </p>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Whether you&apos;re starting fresh or improving existing pipelines, our DevOps and Cloud
          Services ensure long-term scalability and reliability.
        </p>
      </div>
    </section>
  );
}
