import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function CustomEcommerceIntro() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-20"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[760px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Custom Ecommerce Development
          <br />
          for Complex Business Needs
        </h2>
        <p className="mx-auto mt-6 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our custom ecommerce development approach focuses on building tailored solutions that
          match your exact business logic. Unlike template-based stores, our systems are built for
          flexibility, scalability, and long-term growth.
        </p>
        <p className="mx-auto mt-2 max-w-[980px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With our E-commerce development services, you can handle complex workflows like B2B
          pricing, multi-vendor management, and deep system integrations.
        </p>
      </div>
    </section>
  );
}
