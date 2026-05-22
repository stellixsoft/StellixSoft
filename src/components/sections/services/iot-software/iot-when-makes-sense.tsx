const valuableWhen = [
  "Devices generate continuous data",
  "Remote monitoring is required",
  "Automation depends on real-time events",
  "Hardware is deployed at scale",
];

const notNeededWhen = [
  "Devices operate offline only",
  "No real-time data is required",
  "Manual workflows are sufficient",
];

export default function IoTWhenMakesSense() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-url.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          When IoT Software Development Services Actually Make Sense
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Not every system needs IoT—so we help you evaluate first.
        </p>

        <div className="max-w-3xl mx-auto w-full text-left space-y-10">
          <div>
            <p className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-6">
              IoT is valuable when:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
              {valuableWhen.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-emerald-600 shrink-0" aria-hidden>
                    ✔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm md:text-[15px] font-medium text-[var(--color-deepSpace)] mb-4">
              IoT may NOT be needed when:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
              {notNeededWhen.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-slate-400 shrink-0" aria-hidden>
                    ✖
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-12 mt-8">
          This ensures your IoT software services investment is practical—not overengineered.
        </p>
      </div>
    </section>
  );
}
