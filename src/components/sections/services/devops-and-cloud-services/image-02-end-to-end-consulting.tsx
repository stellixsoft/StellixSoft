import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function DevOpsImage02EndToEndConsulting() {
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
          End-to-End DevOps Consulting Services
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16 md:mt-5"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our DevOps consulting services guide you through every stage of your DevOps journey—from strategy
          and architecture to implementation and optimization. We assess your current workflows and design
          solutions that improve efficiency, collaboration, and delivery speed.
        </p>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Whether you&apos;re starting fresh or improving existing pipelines, our DevOps and Cloud Services
          ensure long-term scalability and reliability.
        </p>
      </div>
    </section>
  );
}
