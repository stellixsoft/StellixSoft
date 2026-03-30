"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-lg">
        <p
          className="text-6xl font-bold mb-4"
          style={{ color: "var(--color-electricBlue)" }}
        >
          Oops
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-deepSpace)] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-[var(--color-neutralGray)] mb-8">
          We encountered an unexpected error. Please try again or contact us if
          the problem persists.
        </p>
        <button
          onClick={reset}
          className="rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
