const counters = [
    { value: "3+", label: "Years Average Client Relationship" },
    { value: "6", label: "Dedicated Devs on Largest Client" },
    { value: "10,000+", label: "Devices Managed on Our Platforms" },
    { value: "ZERO", label: "Downtime During Legacy Migrations" },
];

export default function Counter() {
    return (
        <section className="counter-section">
            <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }}></div>
            <div className="py-8 md:py-8 px-6" style={{ backgroundColor: "var(--color-electricBlue-solid)" }}>
                <div className="max-w-[1300px] mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-0">
                        {counters.map((item, index) => (
                            <div
                                key={item.label}
                                className={`flex-1 flex flex-col items-center justify-center text-center py-6 sm:py-8 sm:px-8 ${index > 0 ? "sm:border-l border-gray-200" : ""
                                    }`}
                            >
                                <span
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold block leading-tight text-white"
                                >
                                    {item.value}
                                </span>
                                <span className="text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-2 text-white">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
