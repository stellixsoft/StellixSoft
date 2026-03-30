import Link from "next/link";
import Image from "next/image";

export default function ReadyToLaunch() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl mb-4 lg:text-4xl font-light text-[var(--color-deepSpace)] text-center">
          Featured Enterprise Project
        </h2>
        <div
          className="w-16 h-0.5 mx-auto mt-4 mb-10 md:mb-12"
          style={{ backgroundColor: "var(--color-electricBlue)" }}
        />
        <div className="rounded-2xl p-12 bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] overflow-hidden grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/assets/images/core-image-one.webp"
              alt="Team collaboration"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--color-electricBlue)" }}>Case Study</p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)]">
              Enterprise Portal Modernization
            </h2>
            <p className="text-sm font-medium mt-4" style={{ color: "var(--color-black)" }}>Global Hardware Company | Fortune 500 Supply Chain</p>
            <p className="mt-4 text-base text-[var(--color-neutralGray)] leading-relaxed">
              Tell us about your enterprise goals. We&apos;ll help you scope,
              plan, and build solutions that scale with your organization.
            </p>
            <Link
              href="/case-studies/enterprise-portal-modernization"
              className="mt-8 inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 w-fit"
              style={{ backgroundColor: "var(--color-electricBlue)" }}
            >
              Read Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
