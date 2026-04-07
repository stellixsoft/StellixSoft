import Image from "next/image";
import Link from "next/link";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[900px] mx-auto">
        <blockquote
          className="rounded-2xl bg-white border border-gray-200 shadow-[0_4px_24px_rgba(3,2,19,0.06)] p-8 md:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 60%)",
          }}
          cite="https://stellixsoft.com/case-studies/enterprise-portal-modernization"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] mb-5"
            style={{ color: "var(--color-electricBlue)" }}
          >
            IoT &amp; hardware client
          </p>

          <div className="flex justify-center mb-5">
            <Image
              src="/assets/images/iot.png"
              alt="IoT and hardware client testimonial"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <div className="mb-6">
            <span className="sr-only">Rated 5 out of 5 stars</span>
            <div className="flex justify-center gap-0.5" style={{ color: "#E6B800" }} aria-hidden>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>

          <p className="text-lg md:text-xl text-[var(--color-deepSpace)] leading-relaxed italic max-w-3xl mx-auto">
            &quot;Stellixsoft&apos;s team works on our timezone, delivers fast, and handles complex
            enterprise requirements without hand-holding. They&apos;ve become an extension of our
            team. What started as a migration project has evolved into a strategic partnership - they
            now drive most of our product innovation.&quot;
          </p>

          <footer className="mt-8 pt-8 border-t border-[var(--color-deepSpace)]/10 text-left md:text-center">
            <p className="text-base font-semibold text-[var(--color-deepSpace)]">Director of Technology</p>
            <p className="mt-1 text-sm text-[var(--color-neutralGray)] leading-relaxed max-w-xl md:mx-auto">
              Global hardware manufacturer · RFID, IP cameras &amp; enterprise networking · Fortune 500
              supply chain deployments
            </p>
            <p className="mt-3 text-xs text-[var(--color-neutralGray)]/90">
              Name withheld at the client&apos;s request (NDA).
            </p>
            <p className="mt-5">
              <Link
                href="/case-studies/enterprise-portal-modernization"
                className="text-sm font-medium uppercase tracking-wider underline-offset-4 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue)] rounded-sm"
                style={{ color: "var(--color-electricBlue)" }}
              >
                Read the full case study →
              </Link>
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
