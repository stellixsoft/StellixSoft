import Link from "next/link";
import { redirect } from "next/navigation";
import AdminShell from "@/src/components/admin/admin-shell";
import { getAdminSession } from "@/src/lib/auth";
import {
  countBlogPosts,
  listBlogPosts,
} from "@/src/lib/blog-repo";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();
  if (!session.isLoggedIn) redirect("/admin/login");

  let total = 0;
  let published = 0;
  let drafts = 0;
  let recent: Awaited<ReturnType<typeof listBlogPosts>> = [];

  try {
    [total, published, drafts, recent] = await Promise.all([
      countBlogPosts(),
      countBlogPosts("published"),
      countBlogPosts("draft"),
      listBlogPosts({ orderBy: "modifiedAt" }).then((posts) => posts.slice(0, 5)),
    ]);
  } catch {
    // Firestore may be briefly unavailable
  }

  const cards = [
    {
      label: "Total posts",
      value: total,
      hint: "All blog entries",
      accent: "from-slate-800 to-slate-900",
    },
    {
      label: "Published",
      value: published,
      hint: "Live on the site",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      label: "Drafts",
      value: drafts,
      hint: "Not published yet",
      accent: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <AdminShell username={session.username}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Welcome back{session.username ? `, ${session.username}` : ""}. Manage
            content from one place.
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center rounded-xl bg-[var(--color-electricBlue-solid)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
        >
          + New blog post
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
          >
            <div
              className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${card.accent} opacity-10`}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {card.label}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              {card.value}
            </p>
            <p className="mt-1 text-xs text-slate-400">{card.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Recent posts
            </h2>
            <Link
              href="/admin/blogs"
              className="text-xs font-medium text-[var(--color-electricBlue-solid)] hover:underline"
            >
              View all
            </Link>
          </div>
          {recent.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">
              No posts yet. Create your first article.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {recent.map((post) => (
                <li
                  key={post.id}
                  className="flex flex-wrap items-center justify-between gap-3 py-3.5 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <Link
                      href={`/admin/blogs/${post.id}/edit`}
                      className="block truncate text-sm font-medium text-slate-900 hover:text-[var(--color-electricBlue-solid)]"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-0.5 truncate text-xs text-slate-400">
                      /blog/{post.slug}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      post.status === "published"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-6">
          <h2 className="text-sm font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-4 space-y-2">
            {[
              {
                href: "/admin/blogs/new",
                title: "Write a new post",
                desc: "Open the blog editor",
              },
              {
                href: "/admin/blogs",
                title: "Manage blogs",
                desc: "Edit, publish, or delete",
              },
              {
                href: "/admin/media",
                title: "Media library",
                desc: "Browse and upload images",
              },
              {
                href: "/blog",
                title: "Preview public blog",
                desc: "Open the live blog page",
                external: true,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="block rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
              >
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
