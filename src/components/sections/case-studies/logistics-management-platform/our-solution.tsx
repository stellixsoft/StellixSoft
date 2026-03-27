import Image from "next/image";

const solutions = [
  {
    id: "admin",
    iconLabel: "Dashboard",
    heading: "Admin Dashboard (React)",
    bullets: [
      "Drag-and-drop scheduling interface for loads and drivers",
      "Real-time fleet visibility on an interactive map",
      "Automated route optimization suggestions",
      "Driver assignment with workload balancing",
      "Invoice generation and management",
      "Performance analytics and reporting",
    ],
    keyFeature:
      "Visual scheduling board where dispatchers can see all jobs, driver availability, and drag to assign in seconds.",
    imageAlt: "Admin dashboard interface",
    imgSrc: "/assets/images/research-analysis.jpg",
    iconSrc: "/assets/images/iot.png",
  },
  {
    id: "driver",
    iconLabel: "Mobile",
    heading: "Driver Mobile App (Flutter)",
    bullets: [
      "Daily schedule with turn-by-turn navigation",
      "One-tap status updates (picked up, in transit, delivered)",
      "Digital proof of delivery (signature + photo capture)",
      "Direct messaging with dispatch team",
      "Offline mode for areas with weak connectivity",
    ],
    keyFeature:
      "Offline-first design ensures drivers can work even in areas with spotty cellular coverage.",
    imageAlt: "Driver mobile app on phone in car",
    imgSrc: "/assets/images/high-angle.jpg",
    iconSrc: "/assets/images/iot.png",
  },
  {
    id: "client",
    iconLabel: "Portal",
    heading: "Client Portal (React)",
    bullets: [
      "Real-time shipment tracking with map view",
      "Self-service booking for recurring clients",
      "Document management (BOL, POD, invoices)",
      "Automated email/SMS notifications at each milestone",
      "Historical shipment data and analytics",
    ],
    keyFeature:
      "Clients can see exactly where their shipment is on a map, with accurate ETAs—no status phone calls needed.",
    imageAlt: "Client portal web application on laptop",
    imgSrc: "/assets/images/clientportal.jpg",
    iconSrc: "/assets/images/iot.png",
  },
];

export default function LogisticsManagementPlatformOurSolution() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-white" style={{
      background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
    }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)]">
            Our Solution
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed">
            We designed and built a comprehensive logistics management platform with three core
            components that work together seamlessly.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={solution.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Text column */}
                <div className={isEven ? "md:order-2" : "md:order-1"}>

                  <Image src={solution.iconSrc} alt={solution.iconLabel} width={40} height={40} className="object-contain mb-4" />

                  <h3 className="text-sm md:text-[14px] font-semibold uppercase text-[var(--color-deepSpace)] mb-4">
                    {solution.heading}
                  </h3>

                  <ul className="space-y-2.5 text-sm md:text-[14px] text-[var(--color-deepSpace)] mb-4">
                    {solution.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "var(--color-electricBlue)" }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 rounded-[999px] bg-[var(--color-electricBlue)]/6 border border-[var(--color-electricBlue)]/20 px-4 py-3 text-xs md:text-[12px] text-[var(--color-deepSpace)] text-left">
                    <span
                      className="mr-2 text-[10px] font-medium uppercase tracking-[0.22em]"
                      style={{ color: "var(--color-electricBlue)" }}
                    >
                      Key Feature:
                    </span>
                    {solution.keyFeature}
                  </div>
                </div>

                {/* Image column */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="relative h-[300px] sm:h-[300px] md:h-[400px] rounded-[32px] overflow-hidden shadow-[0_22px_80px_rgba(15,23,42,0.35)] border border-gray-200 bg-slate-900/5">
                    <Image
                      src={solution.imgSrc}
                      alt={solution.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

