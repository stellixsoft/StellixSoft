import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    label: "IoT & Hardware",
    href: "/industries/iot-and-hardware",
  },
  {
    label: "Logistics & Supply Chain",
    href: "/industries/logistics-and-supply-chain",
  },
  {
    label: "Enterprise Software",
    href: "/industries/enterprise-software-development",
  },
  {
    label: "Healthcare & MedTech",
    href: "/industries/healthcare-and-medtech",
  },
];

export default function CaseStudiesIndustriesServed() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f5f7fb]" >
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] text-center mb-10 md:mb-12">
          Industries We&apos;ve Served
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry) => (
            <article
              key={industry.label}
              className="rounded-[32px] bg-white border border-gray-200 shadow-[0_12px_40px_rgba(15,23,42,0.08)] px-6 py-8 flex flex-col items-center text-center "
            >
              <Image
                src="/assets/images/iot.png"
                alt={industry.label}
                width={40}
                height={40}
                className="object-contain mb-4"
              />
              <h3 className="text-sm font-medium uppercase text-[var(--color-deepSpace)] mb-2">
                {industry.label}
              </h3>
              <Link
                href={industry.href}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-electricBlue)]"
              >
                View
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

