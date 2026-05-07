import { BACKGROUND_URL } from "@/src/lib/background-url";

const pillars = [
  {
    label: "On-time delivery",
    icon: "clock" as const,
  },
  {
    label: "Pragmatic results",
    icon: "document" as const,
  },
  {
    label: "Fast project start",
    icon: "lightning" as const,
  },
];

const techStack = [".NET Core", "AWS", "React", "SQL Server"];

function ClockGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function DocumentGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function LightningGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

const iconMap = {
  clock: ClockGlyph,
  document: DocumentGlyph,
  lightning: LightningGlyph,
} as const;

export default function CustomEnterpriseSoftwareDevelopment() {
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
      <div className="mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-[900px] text-2xl font-semibold leading-tight text-[var(--color-deepSpace)] md:text-3xl lg:text-[44px]">
          Custom Enterprise Software Development Services for Complex Needs
        </h2>
        <div
          className="mx-auto mt-4 h-0.5 w-16"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          aria-hidden
        />
        <p className="mx-auto mt-8 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          Our custom enterprise software development services are built around your specific workflows
          and business logic. Unlike off-the-shelf solutions, we create systems that align perfectly
          with your operations.
        </p>
        <p className="mx-auto mt-6 max-w-[940px] text-[15px] leading-relaxed text-[var(--color-neutralGray)] md:text-base">
          With our enterprise application development, businesses can automate processes, improve
          efficiency, and gain real-time visibility into operations.
        </p>

        <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16">
          {pillars.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <div key={p.label} className="flex flex-col items-center gap-3 text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    color: "var(--color-electricBlue-solid)",
                    backgroundColor: "color-mix(in srgb, var(--color-electricBlue) 12%, transparent)",
                  }}
                  aria-hidden
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-electricBlue-solid)] md:text-xs">
                  {p.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-base font-semibold md:text-lg"
              style={{ color: "var(--color-electricBlue-solid)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
