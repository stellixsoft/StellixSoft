import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="relative py-40 flex items-center justify-center overflow-hidden -mt-[100px] min-h-[calc(70vh+120px)]">
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

        <div
          className="absolute inset-0 bg-[var(--color-deepSpace)]/50"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 py-24 text-center">
          <p
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4"
            style={{ color: "var(--color-electricBlue)" }}
          >
            404
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
            Page Not Found
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-electricBlue)" }}
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </section>
      <div
        className="h-1 w-full shrink-0"
        style={{ backgroundColor: "var(--color-electricBlue)" }}
      />
    </>
  );
}
