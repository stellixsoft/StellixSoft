const LAYERS = [
  {
    num: "01",
    title: "Device Layer",
    subtitle: "Sensors · cameras · hardware",
    bullets: ["Sensors, cameras, or hardware devices generate data"],
  },
  {
    num: "02",
    title: "Communication Layer",
    subtitle: "MQTT · HTTP · WebSockets",
    bullets: ["MQTT, HTTP, or WebSockets handle real-time transmission"],
  },
  {
    num: "03",
    title: "Cloud Layer",
    subtitle: "Processing · storage · scale",
    bullets: ["Data processing, storage, and scaling"],
  },
  {
    num: "04",
    title: "Application Layer",
    subtitle: "Dashboards · mobile · reporting",
    bullets: ["Dashboards, mobile apps, and reporting tools"],
  },
];

export default function IoTBehindTheScenes() {
  return (
    <section
      className="relative px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: "url('/assets/images/background-img.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1300px]">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-semibold text-white md:text-[44px]">
            Behind the Scenes: How Our IoT Software Development Works
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 md:w-24"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
            aria-hidden
          />
        </header>

        <p className="mx-auto mb-10 max-w-[940px] text-center text-[15px] leading-relaxed text-white/85 md:text-base">
          Instead of isolated components, we design complete IoT ecosystems:
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {LAYERS.map((layer) => (
            <div
              key={layer.num}
              className="relative overflow-hidden rounded-xl border p-6 md:p-8"
              style={{
                backgroundColor: "#0F172B80",
                borderColor: "rgba(16, 172, 219, 0.2)",
              }}
            >
              <span
                className="pointer-events-none absolute right-4 top-3 text-5xl font-extralight tabular-nums text-white/[0.07]"
                aria-hidden
              >
                {layer.num}
              </span>
              <h3 className="relative text-lg font-medium text-white md:text-xl">{layer.title}</h3>
              <p
                className="relative mb-6 mt-1 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {layer.subtitle}
              </p>
              <ul className="relative space-y-2">
                {layer.bullets.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-white/75 md:text-[15px]">
                    <span className="shrink-0" style={{ color: "var(--color-electricBlue)" }}>
                      •
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[940px] text-center text-[15px] leading-relaxed text-white/85 md:text-base">
          This layered approach ensures our IoT application development is scalable, maintainable,
          and production-ready.
        </p>
      </div>
    </section>
  );
}
