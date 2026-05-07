import { BACKGROUND_URL } from "@/src/lib/background-url";

const POINTS = [
  "Writing scalable Apex logic",
  "Avoiding governor limit issues",
  "Keeping code maintainable",
  "Following Salesforce best practices",
];

export default function SalesforcePracticalView() {
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
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="text-2xl font-light leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-4xl">
          A Practical View of Salesforce Application Development Services
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[840px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          Not every requirement needs custom code—but when it does, it should be done right.
        </p>
        <p className="mt-8 text-[14px] text-slate-500 md:text-[15px]">
          Our salesforce application development services focus on:
        </p>
        <ul className="mx-auto mt-5 grid max-w-[520px] grid-cols-1 gap-x-12 gap-y-2.5 text-left sm:mx-auto">
          {POINTS.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[15px] leading-relaxed text-slate-600 md:text-base"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-[860px] text-[15px] leading-relaxed text-slate-500 md:text-base">
          This ensures your Custom Salesforce Development services don&apos;t create future technical debt.
        </p>
      </div>
    </section>
  );
}
