"use client";

import { TestimonialAvatar } from "@/src/components/ui/testimonial-initials-avatar";

const testimonials = [
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
      "StellixSoft delivered on a very challenging project that I honestly doubted was even possible. They stuck with it through every obstacle, kept communicating throughout, and worked hard to get a genuinely useful result. I do not hand out reviews like this lightly. I would definitely hire them again, and I intend to rehire them straight away for the next extension to this project.",
    name: "Jason Bennison",
    company: "Consultant · London, England",
    companyUrl: "https://jasonbennison.com/",
    photo: "/assets/images/testimonials/jason-bennison.png",
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
    photo: "/assets/images/testimonials/zb-lines.png",
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
  {
    quote:
      "Happy with how it went. Hoping to send another project their way when timing lines up.",
    name: "Alan S.",
    company: "McNeal, United States",
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
      <img src="/assets/images/quote-icon.png" alt="" className="w-4 h-4" />
    </div>
  );
}

function CompanyLine({
  company,
  companyUrl,
}: {
  company: string;
  companyUrl?: string;
}) {
  const className =
    "text-xs md:text-sm uppercase tracking-wider text-[var(--color-electricBlue)] line-clamp-2 break-words [&_a]:text-inherit";
  if (companyUrl) {
    return (
      <p className={className}>
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue)] rounded-sm"
        >
          {company}
        </a>
      </p>
    );
  }
  return <p className={className}>{company}</p>;
}

export default function Testimonials() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        background: "linear-gradient(135deg, rgba(16, 172, 219, 0.08) 0%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.company}-${testimonial.name}`}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg relative animate-fade-in flex flex-col h-full min-h-[280px] border border-[var(--color-deepSpace)]/[0.06]"
            >
              <div className="absolute -top-4 -left-4 z-[1]">
                <QuoteIcon />
              </div>

              <div className="flex gap-1 mb-4 mt-2 shrink-0" style={{ color: "#FFD700" }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <blockquote className="flex-1 flex flex-col min-h-0 mb-6">
                <p className="text-[var(--color-neutralGray)] italic text-sm md:text-base leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              <footer className="flex items-start gap-3 pt-4 mt-auto border-t border-[var(--color-deepSpace)]/10 shrink-0">
                <TestimonialAvatar
                  name={testimonial.name}
                  photoSrc={testimonial.photo}
                  photoFit={testimonial.photoFit}
                />
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-bold text-[var(--color-deepSpace)] text-sm md:text-base leading-snug">
                    {testimonial.name}
                  </p>
                  <CompanyLine company={testimonial.company} companyUrl={testimonial.companyUrl} />
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
