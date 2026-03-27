import Link from "next/link";
import Image from "next/image";
import {
  blogPosts,
  blogCategories,
  getBlogCoverImageSrc,
} from "@/src/data/blog-posts";

function buildArchives() {
  const byMonth = new Map<
    string,
    { label: string; count: number }
  >();
  for (const p of blogPosts) {
    const key = p.date.slice(0, 7);
    const d = new Date(p.date);
    const label = d.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    const prev = byMonth.get(key);
    if (prev) prev.count += 1;
    else byMonth.set(key, { label, count: 1 });
  }
  return Array.from(byMonth.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([key, v]) => ({ key, ...v }));
}

interface BlogPostSidebarProps {
  currentSlug: string;
}

export default function BlogPostSidebar({ currentSlug }: BlogPostSidebarProps) {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latest = sorted
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  const categories = blogCategories.filter((c) => c !== "All");
  const archives = buildArchives();

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="space-y-10">
        <section>
          <h2 className="mb-4 text-lg font-light tracking-tight text-[var(--color-deepSpace)]">
            Recent posts
          </h2>
          <ul className="space-y-5">
            {latest.map((p) => {
              const img = getBlogCoverImageSrc(p);
              const formatted = new Date(p.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              return (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 320px"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--color-deepSpace)]/50 via-[var(--color-deepSpace)]/10 to-transparent"
                        aria-hidden
                      />
                      <span className="absolute left-2.5 top-2.5 max-w-[calc(100%-1.25rem)] truncate rounded bg-[var(--color-electricBlue)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                        {p.category}
                      </span>
                    </div>
                    <div className="border-t border-slate-100 px-4 py-3.5">
                      <p className="line-clamp-2 text-sm font-medium leading-snug text-[var(--color-deepSpace)] transition-colors group-hover:text-[var(--color-electricBlue)]">
                        {p.title}
                      </p>
                      <time
                        dateTime={p.date}
                        className="mt-2 block text-xs font-medium text-[var(--color-electricBlue)]"
                      >
                        {formatted}
                      </time>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-[var(--color-electricBlue)]"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Archives
          </h2>
          <ul className="space-y-2">
            {archives.map(({ key, label, count }) => (
              <li key={key}>
                <Link
                  href={`/blog?archive=${encodeURIComponent(key)}`}
                  className="flex items-center justify-between gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[var(--color-electricBlue)]"
                >
                  <span>{label}</span>
                  <span className="tabular-nums text-xs text-slate-400">
                    {count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
