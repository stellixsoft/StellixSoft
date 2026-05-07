import { BACKGROUND_URL } from "@/src/lib/background-url";

/** Image 1 */
export default function DevOpsImage01HeroIntro() {
  return (
    <section
      className="px-4 py-20 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1300px] text-center">
        <h1 className="mx-auto max-w-[860px] text-3xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-5xl">
          DevOps and Cloud Services for Scalable Modern Infrastructure
        </h1>
        <p className="mx-auto mt-6 max-w-[920px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Our DevOps and Cloud Services help businesses build, deploy, and scale applications faster
          with automation, reliability, and security at the core. From DevOps consulting services to
          full-scale cloud migration services, we deliver solutions designed for real-world performance.
        </p>
        <p className="mx-auto mt-7 max-w-[920px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          We combine DevOps automation services with cloud expertise to eliminate manual processes,
          reduce deployment risks, and accelerate time-to-market.
        </p>
      </div>
    </section>
  );
}
