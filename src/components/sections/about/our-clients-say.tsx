"use client";

import { ExpandableTestimonialQuote } from "@/src/components/ui/expandable-testimonial-quote";
import { TestimonialAvatar } from "@/src/components/ui/testimonial-initials-avatar";

const clientsSay = [
  {
    quote:
      "Hello. The StellixSoft team has been excellent. They are highly committed to the tasks assigned and consistently provide effective solutions.",
    name: "Kashif Saeed",
    company: "Venture Research Inc. · Plano, TX",
    photo: "/assets/images/testimonials/venture-research.png",
    photoFit: "contain" as const,
  },
  {
    quote:
      "The best engineering partners to get the job done. We've been working closely with Paz Mental RD for about two years. As a company, bringing in StellixSoft to build our ongoing medical registry platform has been one of the smartest decisions we've made. They proved to be the perfect partner for our sensitive project: a QR code medical alert website. Their technical skill in engineering a seamless user experience was matched only by their responsible and trustworthy approach. We needed a team we could rely on implicitly, and they delivered 100%. Don't hesitate to work with them!",
    name: "Joseph",
    company: "Paz Mental RD · Medical alert & registry · Dominican Republic",
    companyUrl: "https://pazmentalrd.com/",
  },
  {
    quote:
      "StellixSoft delivered on a very challenging project that I honestly doubted was even possible. They stuck with it through every obstacle, kept communicating throughout, and worked hard to get a genuinely useful result. I do not hand out reviews like this lightly. I would definitely hire them again, and I intend to rehire them straight away for the next extension to this project.",
    name: "Jason Bennison",
    company: "Consultant · London, England",
    companyUrl: "https://jasonbennison.com/",
    photo: "/assets/images/testimonials/jason-bennison.webp",
  },
  {
    quote:
      "We brought StellixSoft in when we needed extra dev capacity. The developers picked up our stack without months of onboarding, and check-ins stayed simple. We'd use them again.",
    name: "Ronald Edwin",
    company: "Technologent Tech LLC · Atlanta, GA",
  },
  {
    quote:
      "3PL business here. StellixSoft built the system we use for scheduling, tracking, and keeping clients updated. Less spreadsheet juggling. When we need changes, they pick up the thread.",
    name: "Dominic Jones",
    company: "ZB Lines · Texas, USA",
    photo: "/assets/images/testimonials/zb-lines.webp",
    photoFit: "contain" as const,
  },
  {
    quote:
      "Luxury car rental in the UAE. New site plus SEO work. Loads quick, looks right for the segment, and we're ranking better than on the old setup.",
    name: "A.R. Khan",
    company: "Rent Any Car · Dubai",
    photo: "/assets/images/testimonials/rent-any-car.png",
    photoFit: "contain" as const,
  },
  {
    quote:
      "They built our dispatch and booking app. Tracking, driver tools, customer bookings... it's been stable day to day. Less phone tag at the office, which was the whole point.",
    name: "Sam Roswell",
    company: "Southend Cabs · UK",
    photo: "/assets/images/testimonials/southend-cabs.png",
    photoFit: "contain" as const,
  },
  {
    quote:
      "Back-end stuff for our site: employee forms, fixes, small updates. They usually turn things around fast and ask what we're trying to solve before jumping in. Saves us headaches.",
    name: "Jonathan Leibovitch",
    company: "Doctor Appliance",
    photo: "/assets/images/testimonials/doctor-appliance.png",
    photoFit: "contain" as const,
  },
  {
    quote:
      "No complaints on our side. If we line up more dev work they'll be on the list.",
    name: "Chris D.",
    company: "Floresta Animal Hospital · Boynton Beach, FL",
    companyUrl: "https://florestavet.com/",
    photo: "/assets/images/testimonials/floresta.png",
    photoFit: "contain" as const,
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
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-4">
            Why Our Clients Stay 3+ Years
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {clientsSay.map((clientSay) => (
            <article
              key={`${clientSay.company}-${clientSay.name}`}
              className="group bg-white rounded-xl p-6 md:p-8 shadow-lg relative animate-fade-in border border-[var(--color-deepSpace)]/[0.06] transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-[var(--color-deepSpace)] flex flex-col h-full min-h-[260px]"
            >
              <div className="flex gap-1 mb-4 mt-2 text-[#FFD700] transition-colors duration-300 group-hover:text-white shrink-0">
                <StarIcon />
              </div>

              <blockquote className="mb-6 flex min-h-0 flex-1 flex-col">
                <ExpandableTestimonialQuote quote={clientSay.quote} variant="about" />
              </blockquote>

              <footer className="flex items-start gap-3 pt-4 mt-auto border-t border-[var(--color-deepSpace)]/10 group-hover:border-white/20 transition-colors duration-300 shrink-0">
                <TestimonialAvatar
                  name={clientSay.name}
                  photoSrc={clientSay.photo}
                  photoFit={clientSay.photoFit}
                />
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-bold text-[var(--color-deepSpace)] group-hover:text-white text-sm md:text-base leading-snug transition-colors duration-300">
                    {clientSay.name}
                  </p>
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[var(--color-accentOnLight)] group-hover:text-white transition-colors duration-300 line-clamp-2 break-words">
                    {clientSay.companyUrl ? (
                      <a
                        href={clientSay.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm group-hover:text-white"
                      >
                        {clientSay.company}
                      </a>
                    ) : (
                      clientSay.company
                    )}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
