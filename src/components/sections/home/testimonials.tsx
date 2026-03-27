"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "StellixSoft has been highly committed to our success. Their expertise in enterprise portals and real-time monitoring has provided us with effective solutions that scale with our hardware deployments.",
    name: "Kashif Saeed",
    company: "Venture Research Inc.",
    image: "/assets/images/testimonial-icon.png",
  },
  {
    quote:
      "The quality of developers at StellixSoft is exceptional. They integrated seamlessly with our internal processes and delivered complex features faster than we could have through traditional hiring.",
    name: "Ronald Edwin",
    company: "Technologent Tech",
    image: "/assets/images/testimonial-icon.png",
  },
  {
    quote:
      "Building our logistics platform was a massive undertaking. StellixSoft handled the complexity of tracking and dispatch with ease, providing us with a robust system that our clients love.",
    name: "Dominic Jones",
    company: "ZB Lines",
    image: "/assets/images/testimonial-icon.png",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
      style={{ backgroundColor: "var(--color-electricBlue)" }}
    >
      <img src="/assets/images/quote-icon.png" alt="Quote Icon" className="w-4 h-4" />
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Since we have 3 testimonials and want to show 3 at once, we'll show all of them
  // If you add more testimonials later, you can implement pagination
  const displayedTestimonials = testimonials;

  const goPrev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const goNext = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <p
            className="text-sm font-normal uppercase tracking-widest mb-3"
            style={{ color: "var(--color-electricBlue)" }}
          >
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm md:text-md text-[var(--color-neutralGray)] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say.
          </p>
        </header>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg border-2 border-[var(--color-deepSpace)]/20 text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:text-[var(--color-electricBlue)] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 p-3 rounded-full bg-white shadow-lg border-2 border-[var(--color-deepSpace)]/20 text-[var(--color-deepSpace)] hover:border-[var(--color-electricBlue)] hover:text-[var(--color-electricBlue)] transition-colors"
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Three Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg relative animate-fade-in"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4">
                  <QuoteIcon />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4 mt-2" style={{ color: "#FFD700" }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[var(--color-neutralGray)] italic text-sm md:text-base leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-deepSpace)]/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[var(--color-lightGray)]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[var(--color-deepSpace)] text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p
                      className="text-xs md:text-sm uppercase tracking-wider truncate"
                      style={{ color: "var(--color-electricBlue)" }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                backgroundColor: i === current ? "var(--color-electricBlue)" : "var(--color-neutralGray)",
                opacity: i === current ? 1 : 0.4,
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
