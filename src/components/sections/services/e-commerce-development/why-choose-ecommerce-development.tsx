const expertiseOutcomes = [
  "Faster time to market",
  "Better performance",
  "Higher conversions",
  "Long-term scalability",
];

export default function WhyChooseEcommerceDevelopment() {
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
          Why Choose Our E-commerce Development Services
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Businesses choose our E-commerce development services because we focus on delivering real
          business value—not just building websites.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our expertise in custom ecommerce website development and Shopify ecommerce development
          ensures:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {expertiseOutcomes.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
