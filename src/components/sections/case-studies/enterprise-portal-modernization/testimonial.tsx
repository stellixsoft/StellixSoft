import Image from "next/image";

const reasons = [
  {
    title: "Incremental Approach",
    body: "Migrated module-by-module, never risking the entire system.",
  },
  {
    title: "Zero Downtime Strategy",
    body: "Old and new systems ran in parallel during transition.",
  },
  {
    title: "Deep .NET Expertise",
    body: "Our team had extensive VB.NET and .NET Core experience.",
  },
  {
    title: "Timezone Alignment",
    body: "US-aligned hours meant real-time daily collaboration.",
  },
  {
    title: "Long-Term Partnership",
    body: "We invested in their business, not just their code.",
  },
] as const;

export default function EnterprisePortalTestimonial() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left: testimonial */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Client Testimonial
          </p>
          <blockquote className="mt-5 text-base font-light leading-relaxed text-[var(--color-deepSpace)] md:text-lg lg:text-xl">
            &ldquo;Stellixsoft&apos;s team works on our timezone, delivers fast,
            and handles complex enterprise requirements without hand holding.
            They&apos;ve become an extension of our team. What started as a
            migration project has evolved into a strategic partnership they now
            drive most of our product innovation.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src="/assets/images/testimonials/contact-testimonial-avatar.webp"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--color-deepSpace)] md:text-base">
                Director of Technology
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-neutralGray)]">
                Global Hardware
                <br />
                Manufacturer
              </p>
            </div>
          </div>
        </div>

        {/* Right: why succeeded */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[var(--color-electricBlue)]">
            Why This Project Succeeded
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {reasons.map((reason, index) => {
              const highlighted = index === 0;
              return (
                <article
                  key={reason.title}
                  className={`flex gap-4 rounded-2xl px-4 py-4 sm:px-5 sm:py-5 ${
                    highlighted
                      ? "bg-[var(--color-electricBlue)] text-white"
                      : "bg-[#F3F4F6] text-[var(--color-deepSpace)]"
                  }`}
                >
                  <span
                    className={`shrink-0 text-sm font-semibold ${
                      highlighted ? "text-white/90" : "text-[var(--color-electricBlue)]"
                    }`}
                  >
                    {index + 1}.
                  </span>
                  <div>
                    <p className="text-sm font-semibold md:text-[15px]">
                      {reason.title}
                    </p>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        highlighted ? "text-white/90" : "text-[var(--color-neutralGray)]"
                      }`}
                    >
                      {reason.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
