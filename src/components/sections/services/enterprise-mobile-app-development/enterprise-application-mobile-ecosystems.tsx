import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function EnterpriseApplicationMobileEcosystems() {
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
        <h2 className="mx-auto max-w-[900px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-[44px]">
          Enterprise Application Development for Mobile Ecosystems
        </h2>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our enterprise application development approach ensures that mobile apps are fully integrated
          into your business ecosystem. We design apps that connect with backend systems, APIs, and
          enterprise tools to create a unified experience.
        </p>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          With our enterprise application services, businesses can streamline workflows, improve
          productivity, and enable real-time decision-making.
        </p>
      </div>
    </section>
  );
}
