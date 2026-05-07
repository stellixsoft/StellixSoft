import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function WhyBusinessesChooseBlockchain() {
  return (
    <section
      className="relative px-4 py-16 text-center sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[940px]">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          Why Businesses Choose Our Blockchain Development Services
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[48rem] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Organizations choose our Blockchain development services because we prioritize business
          outcomes over hype. Our expertise in Blockchain and Cryptography allows us to deliver systems
          that are secure, compliant, and built for long-term success.
        </p>
        <p className="mx-auto mt-6 max-w-[48rem] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          We don&apos;t just build blockchain solutions—we ensure they integrate seamlessly into your
          existing ecosystem through reliable Blockchain integration services.
        </p>
      </div>
    </section>
  );
}
