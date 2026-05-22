const shopifyHelpItems = [
  "Customize Shopify stores",
  "Build custom apps and features",
  "Optimize checkout and performance",
  "Integrate third-party tools",
];

export default function ShopifyEcommerceFlexibility() {
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
          Shopify Ecommerce Development and Platform Flexibility
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          For businesses that need faster go-to-market, our Shopify ecommerce development services
          provide a flexible and scalable solution.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          We help you:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {shopifyHelpItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          Alongside custom ecommerce development, we guide you in choosing the right platform based on
          your business needs.
        </p>
      </div>
    </section>
  );
}
