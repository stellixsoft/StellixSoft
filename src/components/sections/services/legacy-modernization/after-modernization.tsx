import { BACKGROUND_URL } from "@/src/lib/background-url";

const trustPoints = [
  {
    title: "FASTER FEATURE DELIVERY",
    description:
      "Ship new features in days, not months. Modern architecture and tooling accelerate development.",
  },
  {
    title: "EASIER MAINTENANCE",
    description:
      "Any modern developer can work on your system. No more hunting for rare legacy specialists.",
  },
  {
    title: "BETTER INTEGRATION",
    description:
      "Modern APIs connect easily with third-party services, cloud platforms, and new tools.",
  },
  {
    title: "LOWER RISK",
    description:
      "Current frameworks receive security updates. No more unsupported, vulnerable code.",
  },
];

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

export default function AfterModernization() {
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
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-semibold text-[var(--color-deepSpace)] md:text-[44px]">
          After Modernization
        </h2>
        <div
          className="mx-auto mb-10 mt-4 h-0.5 w-16 md:mb-12 md:w-24"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {trustPoints.map((point) => (
            <article key={point.title} className="flex flex-col items-center text-center">
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg shadow-sm"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              >
                <LightningIcon />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deepSpace)] md:text-[13px]">
                {point.title}
              </h3>
              <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[var(--color-neutralGray)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
