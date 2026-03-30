import HeroBackgroundVideo from "@/src/components/media/HeroBackgroundVideo";
import Link from "next/link";

interface BlogPostHeroProps {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPostHero({
  category,
  readTime,
  title,
  excerpt,
  date,
}: BlogPostHeroProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          className="mb-8 inline-flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
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
          Back to Blog
        </Link>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
            style={{ backgroundColor: "var(--color-electricBlue)" }}
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-white/60">
          <time dateTime={date}>{formattedDate}</time>
          <span aria-hidden>|</span>
          <span>By StellixSoft Team</span>
        </div>
      </div>
    </section>
  );
}
