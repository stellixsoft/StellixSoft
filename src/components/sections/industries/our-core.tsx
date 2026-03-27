import Link from "next/link";
import Image from "next/image";

// Update icon, title, description, features, href, image, imageAlt per sector
const sectors = [
  {
    id: "iot",
    icon: "/assets/images/IOT-icon.png",
    title: "IoT & Hardware Companies",
    description:
      "Software foundations for the physical world. We build the cloud portals, mobile companions, and data pipelines that hardware companies need to scale.",
    features: [
      "Device Management",
      "OTA Update Systems",
      "Real-Time Telemetry",
    ],
    href: "/industries/iot-and-hardware",
    image: "/assets/images/core-image-one.jpg",
    imageAlt: "Engineers monitoring IoT systems in a control room",
  },
  {
    id: "logistics",
    icon: "/assets/images/IOT-icon.png",
    title: "Logistics & Supply Chain",
    description:
      "Optimizing the flow of goods with custom software. Real-time tracking, automated dispatch, and predictive warehouse management.",
    features: [
      "Fleet Management",
      "Route Optimization",
      "Warehouse Automation",
    ],
    href: "/industries/logistics-and-supply-chain",
    image: "/assets/images/logistic-image.jpg",
    imageAlt: "Warehouse operations with digital logistics overlays",
  },
  {
    id: "healthcare",
    icon: "/assets/images/IOT-icon.png",
    title: "Healthcare & MedTech",
    description:
      "HIPAA-compliant software for the modern medical era. Patient portals, telemedicine platforms, and medical device integrations.",
    features: [
      "HIPAA Compliance",
      "Patient Data Security",
      "MedTech Integration",
    ],
    href: "/industries/healthcare-and-medtech",
    image: "/assets/images/health-image.jpg",
    imageAlt: "Healthcare professionals reviewing digital medical dashboards",
  },
  {
    id: "enterprise",
    icon: "/assets/images/IOT-icon.png",
    title: "Enterprise Services",
    description:
      "Powering the backbone of global corporations. Internal tools, custom CRM/ERPs, and legacy modernization for massive scale.",
    features: [
      "Legacy Modernization",
      "Workflow Automation",
      "System Integration",
    ],
    href: "/industries/enterprise-software-development",
    image: "/assets/images/enterprise-service.jpg",
    imageAlt: "Enterprise team collaborating in modern office workspace",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-4 h-4 shrink-0"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectorIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" aria-hidden>
      <img src={src} alt={alt} className="object-contain w-full h-full" />
    </div>
  );
}

export default function OurCore() {
  return (
    <section
      className="py-16 md:py-24 px-6 bg-white"
      style={{
        backgroundImage: "url('/assets/images/background-url.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Our Core Sectors
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-4 mb-6"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
          />
          <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-neutralGray)] max-w-2xl mx-auto leading-relaxed">
            Tailored software architecture for specialized industrial needs.
          </p>
        </header>

        {sectors.map((sector, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <div
              key={sector.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${index > 0 ? "mt-16 md:mt-24" : ""}`}
            >
              {/* Content block */}
              <div
                className={`space-y-6 ${imageFirst ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}
              >
                <SectorIcon src={sector.icon} alt={sector.title} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-[var(--color-deepSpace)]">
                  {sector.title}
                </h3>
                <p className="text-[var(--color-deepSpace)] text-sm md:text-base leading-relaxed">
                  {sector.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {sector.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckIcon />
                      <span className="text-xs uppercase tracking-wider text-[var(--color-neutralGray)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href={sector.href}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-gray-100 px-6 py-3 text-sm font-medium text-[var(--color-deepSpace)] transition-colors hover:bg-gray-200 hover:border-gray-400"
                >
                  Explore Our Expertise
                  <img src="/assets/images/arrow-right.svg" alt="" className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Image block */}
              <div
                className={`relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[340px] overflow-hidden ${imageFirst
                    ? "rounded-2xl lg:rounded-l-3xl order-2 lg:order-1"
                    : "rounded-2xl lg:rounded-3xl order-2 lg:order-2"
                  }`}
              >
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
