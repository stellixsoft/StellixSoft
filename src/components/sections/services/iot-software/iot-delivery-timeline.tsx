import Link from "next/link";

const phases = [
  { name: "Discovery", text: "Devices, readers or gateways, sites, data flows and the system of record that must receive events." },
  { name: "Pilot", text: "One site or one device type end to end: connectivity, telemetry, a first dashboard and alerts." },
  { name: "Platform build", text: "Device management, OTA updates, multi-tenant portals, integrations with ERP, WMS or TMS." },
  { name: "Rollout and support", text: "Staged rollout across sites, monitoring, and a dedicated team or maintenance plan." },
];

const guides = [
  { href: "/blog/iot-device-management-platform-architecture", label: "IoT device management architecture" },
  { href: "/blog/mqtt-vs-http-iot-communication", label: "MQTT vs HTTP for IoT" },
  { href: "/blog/edge-computing-iot-architecture-patterns", label: "Edge computing for IoT" },
  { href: "/blog/iot-security-best-practices-connected-devices", label: "IoT security best practices" },
  { href: "/blog/predictive-maintenance-iot-machine-learning", label: "Predictive maintenance with IoT and ML" },
];

const linkClass = "font-medium text-[var(--color-electricBlue)] underline underline-offset-4";

/** How an IoT software project runs, plus links to the IoT guides and RFID page. */
export default function IoTDeliveryTimeline() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--color-lightGray)]/40">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">
          How an IoT software development project runs
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A typical IoT platform reaches production in 3 to 6 months, released in phases so the
          first site is live early. Stack choices follow your devices and cloud: MQTT brokers,
          AWS IoT Core or Azure IoT Hub, edge runtimes such as AWS IoT Greengrass, time-series
          storage, and .NET, Node.js and React for the platform and portals.
        </p>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {phases.map((p, i) => (
            <li key={p.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-medium text-[var(--color-deepSpace)]">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-slate-700">
          Working with RFID readers and tags? See{" "}
          <Link href="/services/rfid-software-development" className={linkClass}>
            RFID software development
          </Link>
          , estimate savings with the{" "}
          <Link href="/tools/rfid-roi-calculator" className={linkClass}>
            RFID ROI calculator
          </Link>{" "}
          or try the{" "}
          <Link href="/tools/iot-platform-demo" className={linkClass}>
            IoT platform demo
          </Link>
          .
        </p>
        <h3 className="mt-8 font-medium text-[var(--color-deepSpace)]">IoT engineering guides</h3>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className={linkClass}>
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
