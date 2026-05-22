const processItems = [
  "No commitment",
  "Proposal in 5 days",
  "Pilot project start",
];

const techStack = [".NET Core", "AWS", "React", "SQL Server"];

function CheckIcon() {
  return (
    <span
      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
export default function EnterpriseComplexServicesIntro() {
  return (
    <section
      className="pt-16 md:pt-24"
      style={{
        backgroundImage: "url('/assets/images/background-url.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--color-deepSpace)] mb-6">
          Custom Enterprise Software Development Services for Complex Needs
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
          Our custom enterprise software development services are built around your specific workflows
          and business logic. Unlike off-the-shelf solutions, we create systems that align perfectly with
          your operations.
        </p>
        <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-slate-600 leading-relaxed mb-0">
          With our enterprise application development, businesses can automate processes, improve
          efficiency, and gain real-time visibility into operations.
        </p>
      </div>
      <div className="py-16 px-4 sm:px-6 mx-auto">
        <div className="mx-auto text-center">
          {/* Process steps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {processItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-neutralGray)]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-lg md:text-lg font-medium"
                style={{ color: "var(--color-electricBlue)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
