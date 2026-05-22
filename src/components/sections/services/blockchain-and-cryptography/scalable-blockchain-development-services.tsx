const scalabilityItems = [
  "Scale as your business grows",
  "High-performance transaction systems",
  "Enterprise-grade applications",
  "Solutions that evolve with your needs",
];

export default function ScalableBlockchainDevelopmentServices() {
  return (
    <section
      className="py-16 md:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          Scalable Blockchain Development Services for Future Growth
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our Blockchain development services are designed to scale as your business grows. Whether
          you need high-performance transaction systems or enterprise-grade applications, we ensure
          your solution evolves with your needs.
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {scalabilityItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Through robust Blockchain integration services, we make sure your blockchain infrastructure
          adapts to new technologies, regulations, and business models.
        </p>
      </div>
    </section>
  );
}
