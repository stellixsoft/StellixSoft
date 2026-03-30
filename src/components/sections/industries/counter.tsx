const counters = [
    { value: "12+", label: "Sectors Served" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "100%", label: "Client Retention" },
];

export default function Counter() {
    return (
        <section className="counter-section">
            <div className="h-1 w-full shrink-0" style={{ backgroundColor: "var(--color-electricBlue-solid)" }}></div>
            <div className="py-8 md:py-8 px-6 bg-white">
                <div className="max-w-[1300px] mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-0">
                        {counters.map((item, index) => (
                            <div
                                key={item.label}
                                className={`flex-1 flex flex-col items-center justify-center text-center py-6 sm:py-8 sm:px-8 ${index > 0 ? "sm:border-l border-gray-200" : ""
                                    }`}
                            >
                                <span
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold block leading-tight"
                                    style={{ color: "var(--color-deepSpace)" }}
                                >
                                    {item.value}
                                </span>
                                <span className="text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-2 text-[var(--color-neutralGray)]">
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
