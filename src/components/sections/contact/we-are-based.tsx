import Image from "next/image";

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 shrink-0"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M8 10h.01M16 14h.01M8 14h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 shrink-0"
      style={{ color: "var(--color-electricBlue)" }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function WeAreBased() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-deepSpace)]">
              Where We&apos;re Based
            </h2>
            <p className="mt-6 text-base text-[var(--color-neutralGray)] leading-relaxed">
              Stellixsoft operates with distributed teams aligned to US business
              hours. We&apos;ve built our culture around remote excellence and
              real-time collaboration.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <BuildingIcon />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                    Primary office
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--color-deepSpace)]">
                    St. Petersburg, Florida, US
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)]">
                    Working hours
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--color-deepSpace)]">
                    9 AM – 6 PM EST (Mon–Fri)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(3,2,19,0.08)] aspect-[4/3] md:aspect-[16/10]">
            <Image
              src="/assets/images/core-image-one.jpg"
              alt="Where we work - Stellixsoft office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 65vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
