import Link from "next/link";

const industries = [
  {
    title: "IoT & Hardware",
    description:
      "Device management platforms, customer portals, and enterprise software for hardware manufacturers—you build the hardware; we build the software that makes it valuable.",
    href: "/industries/iot-and-hardware",
    iconSrc: "/assets/images/iot.png",
    iconAlt: "IoT and hardware",
  },
  {
    title: "Healthcare & MedTech",
    description:
      "HIPAA-aware architectures, patient and clinician portals, EHR integrations, and compliant modernization for healthcare and medical technology organizations.",
    href: "/industries/healthcare-and-medtech",
    iconSrc: "/assets/images/legacy.png",
    iconAlt: "Healthcare and MedTech",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Custom logistics platforms, dispatch, real-time tracking, and driver apps—replace spreadsheets with software built for how logistics actually works.",
    href: "/industries/logistics-and-supply-chain",
    iconSrc: "/assets/images/dedicated-teams.png",
    iconAlt: "Logistics and supply chain",
  },
];

export default function OurSpecializations() {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{
        backgroundImage: "url('/assets/images/background-url.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
            Industries We Serve
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
          />
          <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--color-neutralGray)] max-w-2xl mx-auto leading-relaxed">
            Deep experience in regulated and operationally complex sectors—tailored
            solutions for teams that cannot afford downtime or guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white rounded-xl p-8 shadow-[0_4px_24px_rgba(3,2,19,0.06)] hover:shadow-[0_8px_32px_rgba(3,2,19,0.08)] transition-shadow"
            >
              <img
                src={item.iconSrc}
                alt={item.iconAlt}
                width={40}
                height={40}
                className="mb-5 object-contain"
              />
              <h3 className="text-xl font-normal text-[var(--color-deepSpace)] mb-4">
                {item.title}
              </h3>
              <p className="text-[var(--color-neutralGray)] text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-deepSpace)] group">
                <span className="uppercase tracking-wider italic">Learn More</span>
                <span
                  className="group-hover:translate-x-0.5 transition-transform"
                  style={{ color: "var(--color-electricBlue)" }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
