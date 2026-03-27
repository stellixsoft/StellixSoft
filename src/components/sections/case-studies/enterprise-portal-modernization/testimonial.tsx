import Image from "next/image";

export default function EnterprisePortalTestimonial() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#f7f9fc]">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <Image src="/assets/images/iot.png" alt="Enterprise Portal Testimonial" width={40} height={40} className="object-contain mb-4" />
        </div>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--color-deepSpace)] max-w-3xl mx-auto">
          &quot;Stellixsoft&apos;s team works on our timezone, delivers fast, and handles complex
          enterprise requirements without hand-holding. They&apos;ve become an extension of our
          team. What started as a migration project has evolved into a strategic partnership—they
          now drive most of our product innovation.&quot;
        </p>

        <p className="mt-6 text-sm font-semibold text-[var(--color-deepSpace)]">
          Director of Technology
        </p>
        <p className="mt-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--color-neutralGray)]">
          Global Hardware Manufacturer
        </p>
      </div>
    </section>
  );
}

