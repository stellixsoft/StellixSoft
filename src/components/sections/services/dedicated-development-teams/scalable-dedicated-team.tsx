const flexibilityItems = [
  "Expand team size instantly",
  "Add specialized roles",
  "Adjust resources based on workload",
  "Maintain development velocity",
];

export default function ScalableDedicatedTeam() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Scalable Dedicated Development Team for Growing Businesses
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-8 md:mb-10"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />

        <p className="max-w-3xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed text-center mb-6">
          Our dedicated development team solutions scale with your business needs.
          Whether you need to add developers quickly or expand into multiple teams,
          we make scaling seamless.
        </p>
        <p className="max-w-3xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed text-center mb-6">
          When you hire a dedicated development team, you gain the flexibility to:
        </p>

        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-[15px] text-slate-700 list-none p-0 m-0">
          {flexibilityItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-[6px] w-[6px] rounded-full shrink-0"
                style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
