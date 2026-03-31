import Image from "next/image";

const caseStudies = [
  {
    title: "Enterprise Portal Modernization",
    description:
      "Multi-tenant platform with strict data isolation and granular role-based access control.",
    tags: ["Data Isolation", "Audit Trails", "Zero-Downtime"],
  },
  {
    title: "Compliance & Audit System",
    description:
      "Workflow system with complete document management, version control, and automated escalations.",
    tags: ["Versioning", "Audit Logging", "Reporting"],
  },
];

export default function TransferableEnterpriseExperience() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
        {/* Left: image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-900/5 min-h-[560px]">
          <Image
            src="/assets/images/transferable.webp"
            alt="Healthcare and enterprise software team collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: text + cards */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-3">
            Transferable
            <br />
            Enterprise Experience
          </h2>
          <p className="text-sm md:text-base text-[var(--color-neutralGray)] leading-relaxed mb-8">
            While we can&apos;t share healthcare-specific case studies due to confidentiality, our
            enterprise experience directly applies to healthcare requirements.
          </p>

          <div className="space-y-4">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm px-5 py-4"
              >
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-deepSpace)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-neutralGray)] leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-gray-300 px-2.5 py-1 bg-gray-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

