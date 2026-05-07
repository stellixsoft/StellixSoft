import { BACKGROUND_URL } from "@/src/lib/background-url";

export default function Testimonial() {
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
      <div className="mx-auto max-w-[880px] text-center">
        <blockquote className="mx-auto">
          <p className="text-lg italic leading-relaxed text-[var(--color-deepSpace)] md:text-xl md:leading-relaxed">
            &ldquo;Stellixsoft&apos;s team works on our timezone, delivers fast, and handles complex
            enterprise requirements without hand-holding. They&apos;ve become an extension of our team.
            What started as a migration project has evolved into a strategic partnership.&rdquo;
          </p>
          <p
            className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] md:text-sm"
            style={{ color: "var(--color-electricBlue-solid)" }}
          >
            Director of Technology
          </p>
          <footer className="mt-2 text-sm text-[var(--color-neutralGray)]">Global Hardware Manufacturer</footer>
        </blockquote>
      </div>
    </section>
  );
}
