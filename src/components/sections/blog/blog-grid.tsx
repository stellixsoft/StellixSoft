"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { blogPosts, blogCategories } from "@/src/data/blog-posts";
import type { BlogCategory } from "@/src/data/blog-posts";

const POSTS_PER_PAGE = 12;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function BlogGridInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const archiveParam = searchParams.get("archive");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<BlogCategory>("All");
  const [archiveMonth, setArchiveMonth] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (
      categoryParam &&
      blogCategories.includes(categoryParam as BlogCategory)
    ) {
      setCategory(categoryParam as BlogCategory);
      setPage(1);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (archiveParam && /^\d{4}-\d{2}$/.test(archiveParam)) {
      setArchiveMonth(archiveParam);
      setPage(1);
    } else {
      setArchiveMonth(null);
    }
  }, [archiveParam]);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(search.toLowerCase())
        );
      const matchesArchive =
        !archiveMonth || post.date.slice(0, 7) === archiveMonth;
      return matchesCategory && matchesSearch && matchesArchive;
    });
  }, [search, category, archiveMonth]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(0, page * POSTS_PER_PAGE);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setArchiveMonth(null);
    setPage(1);
    router.replace("/blog");
  };

  const applyCategory = (cat: BlogCategory) => {
    setCategory(cat);
    setPage(1);
    const qs = new URLSearchParams();
    if (cat !== "All") qs.set("category", cat);
    if (archiveMonth) qs.set("archive", archiveMonth);
    router.replace(qs.toString() ? `/blog?${qs.toString()}` : "/blog");
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-[1300px] mx-auto">
        {/* Toolbar: categories first, then search + article count on one row */}
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter by category"
            >
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => applyCategory(cat)}
                  className={`rounded-full px-4 py-2.5 text-xs font-medium tracking-wide transition-all ${
                    category === cat
                      ? "bg-[var(--color-electricBlue)] text-white shadow-md shadow-[var(--color-electricBlue)]/25"
                      : "border border-slate-200/80 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex w-full max-w-md min-w-0 items-center gap-3 md:max-w-lg">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm"
                  aria-hidden
                >
                  <SearchIcon className="h-5 w-5" />
                </div>
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="h-11 min-w-0 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[var(--color-deepSpace)] shadow-sm placeholder:text-slate-400 placeholder:font-medium focus:border-[var(--color-electricBlue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)]/20"
                  aria-label="Search blog posts"
                />
              </div>

              <p className="shrink-0 text-sm font-medium text-slate-500 sm:whitespace-nowrap sm:text-right">
                <span className="tabular-nums text-slate-700">
                  {filtered.length}
                </span>{" "}
                article{filtered.length !== 1 ? "s" : ""} found
                {search ? (
                  <span className="text-slate-400">
                    {" "}
                    for &ldquo;{search}&rdquo;
                  </span>
                ) : null}
                {category !== "All" ? (
                  <span className="text-slate-400"> in {category}</span>
                ) : null}
                {archiveMonth ? (
                  <span className="text-slate-400">
                    {" "}
                    ·{" "}
                    {new Date(`${archiveMonth}-01T12:00:00`).toLocaleDateString(
                      "en-US",
                      { month: "long", year: "numeric" }
                    )}
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        </div>

        {/* Article grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[10px] border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
              >
                <div
                  className="h-1 w-full shrink-0 bg-[var(--color-electricBlue)]"
                  aria-hidden
                />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-electricBlue)]">
                      {post.category}
                    </span>
                    <span className="text-slate-300">&middot;</span>
                    <span className="text-xs font-medium text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium leading-snug text-[var(--color-deepSpace)] transition-colors group-hover:text-[var(--color-electricBlue)] md:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <time
                      dateTime={post.date}
                      className="text-xs font-medium text-slate-500"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-sm font-medium text-[var(--color-electricBlue)] transition-transform group-hover:translate-x-0.5">
                      Read more <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center">
            <p className="text-lg font-light text-slate-600">
              No articles found matching your criteria.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm font-medium text-[var(--color-electricBlue)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {page < totalPages && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-[var(--color-deepSpace)] shadow-sm transition-all hover:border-[var(--color-electricBlue)] hover:bg-slate-50 hover:text-[var(--color-electricBlue)]"
            >
              Load more articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function BlogGrid() {
  return (
    <Suspense
      fallback={
        <section className="min-h-[24rem] bg-gradient-to-b from-slate-50/80 to-white py-12 md:py-20 px-4 sm:px-6" />
      }
    >
      <BlogGridInner />
    </Suspense>
  );
}
