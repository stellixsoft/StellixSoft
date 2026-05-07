import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Above FAQs — scalable automation copy */
export default function ScalableDevOpsAutomationServices() {
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
          Scalable DevOps Automation Services for Growing Teams
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[920px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our DevOps automation services scale with your business. Whether you are a startup or enterprise,
          we build systems that grow with your needs.
        </p>
        <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          When combined with cloud migration services, your infrastructure becomes flexible, cost-efficient,
          and future-ready.
        </p>
        <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our DevOps and Cloud Services ensure your technology evolves with your business.
        </p>
      </div>
    </section>
  );
}
