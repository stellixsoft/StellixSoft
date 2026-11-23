import Link from "next/link";

const items = [
  { title: "Headless storefronts", text: "Next.js or React storefronts on commercetools, Shopify (Hydrogen and the Storefront API), BigCommerce or Adobe Commerce, built for Core Web Vitals and SEO." },
  { title: "B2B headless commerce", text: "Account hierarchies, negotiated price lists, quotes, purchase orders and approval flows driven by your ERP." },
  { title: "OMS and ERP integration", text: "An integration layer that keeps prices, stock, customers and orders in sync with your ERP, PIM, OMS and warehouses." },
  { title: "Replatforming to headless", text: "Phased migration from a monolithic store: one storefront or category first, full redirects, then the rest in slices." },
];

const linkClass = "font-medium text-[var(--color-electricBlue)] underline underline-offset-4";

/** Section targeting "headless commerce development services / company / agency". */
export default function HeadlessCommerceServices() {
  return (
    <section id="headless-commerce" className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--color-lightGray)]/40 scroll-mt-28">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          Headless commerce development services
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          Headless commerce separates your storefront from the commerce engine so you can build
          custom experiences, run several storefronts and connect complex B2B systems. A focused
          headless storefront is typically $40k to $100k over 3 to 6 months; multi-store and
          heavy B2B integration work is scoped in phases.
        </p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <li key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-medium text-[var(--color-deepSpace)]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-700">
          Deciding if headless is worth it? Read our{" "}
          <Link href="/blog/headless-commerce-enterprise-ecommerce" className={linkClass}>
            enterprise headless commerce guide
          </Link>{" "}
          and the{" "}
          <Link href="/blog/e-commerce-platform-selection-enterprise" className={linkClass}>
            e-commerce platform selection guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
