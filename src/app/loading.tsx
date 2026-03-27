export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-gray-200 border-t-[var(--color-electricBlue)] rounded-full animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
