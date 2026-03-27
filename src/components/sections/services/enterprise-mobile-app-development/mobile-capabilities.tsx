import Image from "next/image";

const capabilities = [
  {
    title: "Offline-First Architecture",
    description:
      "Apps that work without connectivity. Sync when back online. Essential for field teams and areas with poor signal.",
  },
  {
    title: "Real-Time Features",
    description:
      "Push notifications, live tracking, instant messaging. Keep users engaged and informed in real-time.",
  },
  {
    title: "Secure Authentication",
    description:
      "Biometric login, SSO integration, role-based access. Enterprise-grade security for sensitive data.",
  },
  {
    title: "Backend Integration",
    description:
      "REST APIs, GraphQL, real-time sync. We connect your mobile app to any backend system.",
  },
  {
    title: "Hardware Integration",
    description:
      "Bluetooth, NFC, cameras, sensors. Apps that communicate with physical devices and IoT equipment.",
  },
  {
    title: "Analytics & Tracking",
    description:
      "User behavior analytics, crash reporting, performance monitoring. Data to improve your app.",
  },
];

export default function MobileDevelopmentCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Mobile Development Capabilities
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {capabilities.map((capability) => (
            <article key={capability.title} className="flex items-start gap-4">
              <div className="mt-1 inline-flex h-10 w-24 items-center justify-center rounded-2xl bg-[var(--color-electricBlue)]/8 text-[var(--color-electricBlue)]">
                <Image
                  src="/assets/images/IOT-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="text-sm md:text-[15px] font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm md:text-[15px] text-[var(--color-neutralGray)] leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

