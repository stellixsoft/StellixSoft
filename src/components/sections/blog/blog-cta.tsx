import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function BlogCTA() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[var(--color-lightGray)]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-h3 font-light text-[var(--color-deepSpace)] mb-3">
          Need Help Building This?
        </h2>
        <p className="text-sm md:text-base font-medium text-[var(--color-neutralGray)] mb-6 max-w-lg mx-auto">
          Our engineering team builds the systems described in this article.
          Schedule a free discovery call to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CalendlyScheduleButton
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
          >
            Schedule a Discovery Call
          </CalendlyScheduleButton>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-electricBlue)] hover:underline"
          >
            See Our Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
