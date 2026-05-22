const integrationItems = [
  "ERP integrations",
  "Payment gateway setup",
  "Inventory synchronization",
  "Logistics and shipping integrations",
];

export default function EcommerceAdvancedIntegrations() {
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
          Advanced E-commerce Development Services and Integrations
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our E-commerce development services go beyond storefront development. We build systems that
          integrate seamlessly with your business operations.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our custom ecommerce development includes:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {integrationItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This ensures your custom ecommerce website development operates efficiently across all
          systems.
        </p>
      </div>
    </section>
  );
}
