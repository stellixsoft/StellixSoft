"use client";

import { useState } from "react";
import Image from "next/image";

const clientsSay = [
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
    <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-[var(--color-electricBlue)] group-hover:text-white transition-colors duration-300"
    aria-hidden
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
  );
}

export default function OurClientsSay() {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
            Why Our Clients Stay 3+ Years
          </h2>
        </header>

        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {clientsSay.map((clientSay, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 md:p-8 shadow-lg relative animate-fade-in border border-transparent transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-[var(--color-deepSpace)]"
              >
                <div className="flex gap-1 mb-4 mt-2 text-[#FFD700] transition-colors duration-300 group-hover:text-white">
                    <StarIcon />
                </div>

                <p className="text-[var(--color-neutralGray)] group-hover:text-white italic text-sm md:text-base leading-relaxed mb-6 transition-colors duration-300">
                  &quot;{clientSay.quote}&quot;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-deepSpace)]/10 group-hover:border-white/20 transition-colors duration-300">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[var(--color-lightGray)]">
                    <Image
                      src={clientSay.image}
                      alt={clientSay.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[var(--color-deepSpace)] group-hover:text-white text-sm md:text-base transition-colors duration-300">
                      {clientSay.name}
                    </p>
                    <p className="text-xs md:text-sm uppercase tracking-wider truncate text-[var(--color-electricBlue)] group-hover:text-white transition-colors duration-300">
                      {clientSay.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
