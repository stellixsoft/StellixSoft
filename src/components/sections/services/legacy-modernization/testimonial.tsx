import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function LegacyModernizationTestimonial() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-24"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[900px]">
        <blockquote
          className="relative rounded-2xl border border-gray-200 p-8 text-center shadow-[0_8px_32px_rgba(3,2,19,0.08)] md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(16, 172, 219, 0.1) 0%, rgba(255, 255, 255, 1) 55%)",
          }}
        >
          <span className="pointer-events-none absolute left-6 top-6 text-6xl font-serif leading-none text-slate-200 md:left-10 md:top-8 md:text-7xl" aria-hidden>
            &ldquo;
          </span>
          <p className="relative text-lg italic leading-relaxed text-[var(--color-deepSpace)] md:text-xl">
            Stellixsoft&apos;s team works on our timezone, delivers fast, and handles complex enterprise
            requirements without hand-holding. They&apos;ve become an extension of our team. What
            started as a migration project has evolved into a strategic partnership.
          </p>
          <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-electricBlue)" }}>
            Director of Technology
          </p>
          <footer className="relative mt-1 text-sm uppercase tracking-wider text-[var(--color-neutralGray)]">
            Global Hardware Manufacturer
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
