import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 text-white"
      style={{ backgroundColor: "var(--color-deepSpace)" }}
    >
      <div className="text-center max-w-lg">
        <p
          className="text-8xl font-bold mb-4"
          style={{ color: "var(--color-electricBlue)" }}
        >
          404
        </p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </section>
  );
}
