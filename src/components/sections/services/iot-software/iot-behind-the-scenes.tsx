const layers = [
  {
    title: "Device Layer",
    body: "Sensors, cameras, or hardware devices generate data",
  },
  {
    title: "Communication Layer",
    body: "MQTT, HTTP, or WebSockets handle real-time transmission",
  },
  {
    title: "Cloud Layer",
    body: "Data processing, storage, and scaling",
  },
  {
    title: "Application Layer",
    body: "Dashboards, mobile apps, and reporting tools",
  },
];

export default function IoTBehindTheScenes() {
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
          Behind the Scenes: How Our IoT Software Development Works
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Instead of isolated components, we design complete IoT ecosystems:
        </p>

        <div className="max-w-3xl mx-auto w-full text-left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
            {layers.map((layer) => (
              <li key={layer.title} className="flex items-start gap-2">
                <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-sky-400" aria-hidden />
                <span>
                  <span className="font-medium text-[var(--color-deepSpace)]">{layer.title}</span>
                  <span className="text-slate-600"> — {layer.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          This layered approach ensures our IoT application development is scalable, maintainable, and
          production-ready.
        </p>
      </div>
    </section>
  );
}
