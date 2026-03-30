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

export default function ServiceStack() {
    return (
        <section className="service-stack">
            <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }}></div>
            <div className="py-16 px-4 sm:px-6 bg-white mx-auto">
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
