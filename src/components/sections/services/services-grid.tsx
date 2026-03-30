"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  {
    img: "/assets/images/industry-one-img.webp",
    title: "Dedicated Development Teams",
    description:
      "Scale your team fast with senior developers aligned to your workflow and timezone.",
    href: "/services/dedicated-development-teams",
    icon: "/assets/images/industry-one.png",
  },
  {
    img: "/assets/images/industry-two-img.webp",
    title: "Staff Augmentation",
    description:
      "Add experienced engineers to your team for short- or long-term delivery needs.",
    href: "/services/staff-augmentation",
    icon: "/assets/images/industry-two.png",
  },
  {
    img: "/assets/images/industry-three-img.webp",
    title: "Maintenance & Support",
    description:
      "Ongoing support, bug fixing, performance tuning, and security updates.",
    href: "/services/maintenance-support",
    icon: "/assets/images/industry-three.png",
  },
  {
    img: "/assets/images/industry-one-img.webp",
    title: "Enterprise Mobile App Development",
    description:
      "Build secure and scalable iOS/Android applications for enterprise workflows.",
    href: "/services/enterprise-mobile-app-development",
    icon: "/assets/images/industry-one.png",
  },
  {
    img: "/assets/images/industry-two-img.webp",
    title: "DevOps & Cloud Services",
    description:
      "Cloud migration, CI/CD, infrastructure automation, and ongoing reliability work.",
    href: "/services/devops-and-cloud-services",
    icon: "/assets/images/industry-two.png",
  },
  {
    img: "/assets/images/industry-three-img.webp",
    title: "Automation & Custom Apps",
    description:
      "Custom internal tools, workflow automation, and deep business integrations.",
    href: "/services/automation-and-custom-apps",
    icon: "/assets/images/industry-three.png",
  },
  {
    img: "/assets/images/industry-one-img.webp",
    title: "E-commerce Development",
    description:
      "B2B portals, marketplaces, headless storefronts, and complex commerce integrations.",
    href: "/services/e-commerce-development",
    icon: "/assets/images/industry-one.png",
  },
  {
    img: "/assets/images/industry-two-img.webp",
    title: "Salesforce Development",
    description:
      "Salesforce customization, integrations, automation, and org optimization.",
    href: "/services/salesforce-development",
    icon: "/assets/images/industry-two.png",
  },
  {
    img: "/assets/images/industry-three-img.webp",
    title: "Blockchain & Cryptography",
    description:
      "Practical blockchain implementation for traceability, identity, and smart contracts.",
    href: "/services/blockchain-and-cryptography",
    icon: "/assets/images/industry-three.png",
  },
  {
    img: "/assets/images/industry-one-img.webp",
    title: "Practical AI for Business",
    description:
      "AI features integrated into real systems: automation, search, document intelligence, and insights.",
    href: "/services/practical-for-ai",
    icon: "/assets/images/industry-one.png",
  },
];

export default function ServicesGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cardsPerPage = 9;
  const totalPages = Math.ceil(services.length / cardsPerPage);
  const rawPage = Number(searchParams.get("page") ?? "1");
  const currentPage = Number.isFinite(rawPage)
    ? Math.min(Math.max(rawPage, 1), totalPages)
    : 1;

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    const params = new URLSearchParams(searchParams.toString());
    if (clamped === 1) {
      params.delete("page");
    } else {
      params.set("page", String(clamped));
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const currentServices = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    return services.slice(start, start + cardsPerPage);
  }, [currentPage]);

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
                className="text-sm font-normal uppercase tracking-widest text-center mb-3"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Our Services
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-3">
                Focused Expertise for Complex Sectors
              </h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-[var(--color-neutralGray)] leading-relaxed text-center mb-3 md:mb-5">
                We don't try to serve everyone. We specialize in industries where our enterprise software expertise delivers the most value.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {currentServices.map((service, index) => (
            <Link
              key={`${service.title}-${index}-${currentPage}`}
              href={service.href}
              className="group relative block rounded-[24px] border border-slate-200/80 bg-white/95 p-6 md:p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_22px_55px_rgba(2,6,23,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-[var(--color-electricBlue)]/10 blur-2xl group-hover:bg-[var(--color-electricBlue)]/20 transition-colors" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[var(--color-surfaceBlue)]/10 blur-2xl" />

              <div className="relative z-10 mb-5">
                <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-slate-200/70">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deepSpace)]/35 to-transparent" />
                </div>
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-[var(--color-electricBlue-solid)] border border-[var(--color-electricBlue)]/40 flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
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
                <h3 className="text-lg md:text-[22px] font-light text-[var(--color-deepSpace)] mb-3 leading-tight">
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

        {totalPages > 1 && (
          <div className="mt-10 md:mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`min-w-9 h-9 rounded-lg text-sm font-medium transition-colors ${currentPage === page
                  ? "text-white"
                  : "text-slate-600 border border-slate-200 hover:bg-slate-50"
                  } cursor-pointer`}
                style={
                  currentPage === page
                    ? {
                      background:
                        "linear-gradient(135deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue-solid) 100%)",
                    }
                    : undefined
                }
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
