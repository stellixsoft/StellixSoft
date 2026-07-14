import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";

interface BlogPostHeroProps {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  /** ISO date (YYYY-MM-DD) when the post was last updated */
  updatedAt?: string;
}

function formatDisplayDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostHero({
  category,
  readTime,
  title,
  excerpt,
  date,
  updatedAt,
}: BlogPostHeroProps) {
  const formattedDate = formatDisplayDate(date);
  const showUpdated =
    Boolean(updatedAt) &&
    updatedAt !== date &&
    !Number.isNaN(new Date(updatedAt!).getTime());
  const formattedUpdated = showUpdated
    ? formatDisplayDate(updatedAt!)
    : null;
  return (
    <section className="relative flex min-h-[calc(70vh+120px)] items-center justify-center overflow-hidden -mt-[100px] py-32 md:py-40">
      <HeroBackgroundVideo className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0 bg-[var(--color-deepSpace)]/75"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 py-24 text-center text-white">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/85 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-[var(--color-deepSpace)] hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all posts
        </Link>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
            style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
          >
            {category}
          </span>
          <span className="text-sm font-medium text-white/60">{readTime}</span>
        </div>

        <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-white/80 md:text-lg">
          {excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-white/60">
          <span>
            Published{" "}
            <time dateTime={date} className="text-white/80">
              {formattedDate}
            </time>
          </span>
          {showUpdated && formattedUpdated && (
            <>
              <span aria-hidden className="hidden sm:inline">
                |
              </span>
              <span>
                Last updated{" "}
                <time dateTime={updatedAt} className="text-white/80">
                  {formattedUpdated}
                </time>
              </span>
            </>
          )}
          <span aria-hidden className="hidden sm:inline">
            |
          </span>
          <span>By StellixSoft Team</span>
        </div>
      </div>
    </section>
  );
}
