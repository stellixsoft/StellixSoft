import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function EnterpriseFutureGrowth() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[980px] text-center">
        <h2 className="text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Enterprise Application Development for Future Growth
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[920px] text-base font-semibold leading-relaxed text-[var(--color-deepSpace)] md:text-[17px]">
          Our enterprise application development solutions are designed to support future business
          expansion. Whether you are modernizing legacy systems or building new platforms, we ensure
          your technology evolves with your needs.
        </p>
        <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          With our Enterprise software development services and custom enterprise software development
          services, your organization stays competitive in a rapidly changing digital landscape.
        </p>
      </div>
    </section>
  );
}
