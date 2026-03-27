const categories = [
  {
    title: "Backend & API",
    items: [".NET Core", "Node.js", "Python"],
  },
  {
    title: "Real-Time & Messaging",
    items: ["SignalR", "WebSockets", "MQTT", "RabbitMQ"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "TimescaleDB", "SQL Server", "InfluxDB"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React / Next.js", "Flutter", "React Native"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD Pipelines"],
  },
];

export default function IoTTechnologyStack() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-12 md:mb-14">
          IoT Technology Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col">
              <h3
                className="text-xs font-medium uppercase tracking-wider pb-2 mb-4 border-b-2"
                style={{
                  color: "var(--color-electricBlue)",
                  borderColor: "var(--color-electricBlue)",
                }}
              >
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white tracking-wider"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
