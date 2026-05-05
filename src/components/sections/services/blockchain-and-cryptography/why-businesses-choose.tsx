import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Section design reference: image 3 — Why Businesses Choose Our Blockchain Development Services */
export default function WhyBusinessesChooseBlockchain() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="mx-auto max-w-[42rem] md:max-w-[48rem] text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[var(--color-deepSpace)] leading-tight tracking-tight">
            Why Businesses Choose Our Blockchain Development Services
          </h2>
          <p className="mt-6 md:mt-8 text-[15px] md:text-base text-slate-600 leading-[1.62]">
            Organizations choose our Blockchain development services because we prioritize business
            outcomes over hype. Our expertise in Blockchain and Cryptography allows us to deliver
            systems that are secure, compliant, and built for long-term success.
          </p>
          <p className="mt-4 md:mt-5 text-[15px] md:text-base text-slate-600 leading-[1.62]">
            We don&apos;t just build blockchain solutions—we ensure they integrate seamlessly into
            your existing ecosystem through reliable Blockchain integration services.
          </p>
        </div>
      </div>
    </section>
  );
}
