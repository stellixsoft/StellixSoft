import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function DevOpsImage07WhyBusinessesChoose() {
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
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Why Businesses Choose Our DevOps Consulting Services
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Companies choose our DevOps consulting services because we focus on delivering measurable outcomes.
          Our team ensures that your systems are optimized for speed, security, and performance.
        </p>
        <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          With our DevOps automation services, you reduce manual effort and improve consistency across
          deployments.
        </p>
        <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our DevOps and Cloud Services help you stay competitive in fast-moving digital environments.
        </p>
      </div>
    </section>
  );
}
