import Link from "next/link";
import CalendlyScheduleButton from "@/src/components/calendly-schedule-button";

export default function Hero() {
    return (
        <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] h-[calc(70vh+120px)]">
            {/* Video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden
            >
                <source
                    src="/assets/videos/hero-banner-background-video.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Optional dark overlay for text readability */}
            <div
                className="absolute inset-0 bg-[var(--color-deepSpace)]/50"
                aria-hidden
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
                    Software Solutions
                    <br />
                    <span className="font-bold">Built for Your Industry</span>
                </h1>

                <p className="mt-8 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto">
                    Deep Domain Expertise
                </p>

                <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    We don't just write code—we understand the unique operational, security, and compliance challenges of the sectors we serve.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CalendlyScheduleButton
                        className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--color-surfaceBlue) 0%, var(--color-electricBlue) 100%)",
                        }}
                    >
                        Schedule a Call
                        <img src="/assets/images/new-schedule.png" alt="arrow right" className="w-4 h-4 fill-white font-bold" />
                    </CalendlyScheduleButton>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center rounded-lg border border-white/70 px-8 py-3.5 text-base font-medium text-white bg-transparent transition-colors hover:bg-white/10 hover:border-white"
                    >
                        Our Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
}
