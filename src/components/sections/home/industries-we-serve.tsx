import Link from "next/link";
import Image from "next/image";

const services = [
  {
    img: "/assets/images/industry-one-img.webp",
    title: "Enterprise Development",
    description:
      "Mission-critical systems, multi-tenant platforms, and custom enterprise applications.",
    href: "/services/enterprise-development",
    icon: "/assets/images/industry-one.png",
  },
  {
    img: "/assets/images/industry-two-img.webp",
    title: "Legacy Modernization",
    description:
      "Upgrade VB.NET, .NET Framework, and legacy systems to modern architectures.",
    href: "/services/legacy-modernization",
    icon: "/assets/images/industry-two.png",
  },
  {
    img: "/assets/images/industry-three-img.webp",
    title: "IoT Software",
    description:
      "Your team builds the hardware. We build the software that makes it valuable.",
    href: "/services/iot-software",
    icon: "/assets/images/industry-three.png",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white" style={{
      backgroundImage: "url('/assets/images/background-url.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 mb-6">
            <div className="flex-1">
              <p
                className="text-sm font-light uppercase tracking-widest mb-3"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Services We Serve
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-3">
                Focused Expertise for Complex Needs
              </h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-[var(--color-neutralGray)] max-w-4xl leading-relaxed">
                We build specialized services for teams solving enterprise and operational software
                challenges.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm italic font-normal uppercase tracking-wider text-[var(--color-electricBlue)] hover:opacity-80 transition-opacity shrink-0 mt-2 md:mt-12"
            >
              View All Services →
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block rounded-[24px] border border-slate-200/80 bg-white/95 p-6 md:p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_22px_55px_rgba(2,6,23,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-[var(--color-electricBlue)]/10 blur-2xl group-hover:bg-[var(--color-electricBlue)]/20 transition-colors" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[var(--color-surfaceBlue)]/10 blur-2xl" />

              <div className="relative z-10 mb-5">
                <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-slate-200/70">
                  <Image
                    src={service.img}
                    alt={`${service.title} - industry services preview`}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deepSpace)]/35 to-transparent" />
                </div>
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-xl bg-[var(--color-electricBlue-solid)] border border-[var(--color-electricBlue)]/40 flex items-center justify-center"
                    aria-hidden
                  >
                    <Image
                      src={service.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain brightness-0 invert contrast-200"
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                    Service
                  </span>
                </div>
                <span className="text-[var(--color-electricBlue)] text-lg group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-[22px] font-medium text-[var(--color-deepSpace)] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[var(--color-neutralGray)] text-sm md:text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  Explore Service
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
