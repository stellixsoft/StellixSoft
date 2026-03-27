import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogCoverImageSrc } from "@/src/data/blog-posts";
import BlogPostHero from "@/src/components/sections/blog/blog-post-hero";
import BlogPostSidebar from "@/src/components/sections/blog/blog-post-sidebar";
import CTAPilot from "@/src/components/sections/home/cta-pilot";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const coverSrc = getBlogCoverImageSrc(post);
  const ogImageUrl = coverSrc.startsWith("http")
    ? coverSrc
    : `https://stellixsoft.com${coverSrc}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://stellixsoft.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://stellixsoft.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["StellixSoft"],
      tags: post.tags,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const coverSrc = getBlogCoverImageSrc(post);
  const coverAbsolute = coverSrc.startsWith("http")
    ? coverSrc
    : `https://stellixsoft.com${coverSrc}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://stellixsoft.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: coverAbsolute,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      "@id": "https://stellixsoft.com/#organization",
      name: "StellixSoft",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://stellixsoft.com/#organization",
      name: "StellixSoft",
      logo: {
        "@type": "ImageObject",
        url: "https://stellixsoft.com/assets/images/stellixsoft-logo.png",
        width: 160,
        height: 32,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stellixsoft.com/blog/${post.slug}`,
    },
    isPartOf: { "@id": "https://stellixsoft.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://stellixsoft.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://stellixsoft.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://stellixsoft.com/blog/${post.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPostHero
        category={post.category}
        readTime={post.readTime}
        title={post.title}
        excerpt={post.excerpt}
        date={post.date}
      />

      <article className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-[7fr_3fr] lg:gap-12 lg:items-start">
          <div className="min-w-0">
            <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm">
              <Image
                src={coverSrc}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 770px"
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-sm max-w-none text-slate-700 prose-p:text-sm prose-p:leading-relaxed prose-headings:font-light prose-headings:text-[var(--color-deepSpace)] prose-h2:text-lg prose-h2:md:text-xl prose-h3:text-base prose-h3:md:text-lg prose-li:text-sm prose-strong:font-medium prose-a:text-[var(--color-electricBlue)] prose-a:no-underline hover:prose-a:underline prose-code:text-[var(--color-surfaceBlue)] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.8125rem] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-50 prose-pre:text-sm"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    return post.content
                      .replace(
                        /^## /gm,
                        '<h2 class="text-lg md:text-xl font-light mt-10 mb-3 text-[var(--color-deepSpace)]">'
                      )
                      .replace(
                        /^### /gm,
                        '<h3 class="text-base md:text-lg font-light mt-8 mb-2 text-[var(--color-deepSpace)]">'
                      )
                      .replace(/<h2 ([^>]*)>([^<]*)/g, "<h2 $1>$2</h2>")
                      .replace(/<h3 ([^>]*)>([^<]*)/g, "<h3 $1>$2</h3>")
                      .replace(
                        /^\*\*(\d+)\.\s+(.+?)\*\*\s*—\s*(.+)$/gm,
                        '<p class="mt-3 mb-0 text-sm leading-relaxed"><span class="font-medium">$1. $2</span> — $3</p>'
                      )
                      .replace(
                        /^- \*\*(.+?)\*\* — (.+)$/gm,
                        '<li><span class="font-medium">$1</span> — $2</li>'
                      )
                      .replace(/^- (.+)$/gm, "<li>$1</li>")
                      .replace(
                        /(?:<li>[\s\S]*?<\/li>\s*)+/g,
                        (block) =>
                          `<ul class="my-4 list-disc space-y-1.5 pl-5">${block.trim()}</ul>`
                      )
                      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n\n/g, "</p><p>")
                      .replace(
                        /```([^`]+)```/g,
                        '<pre class="bg-gray-50 p-4 rounded-xl overflow-x-auto text-sm"><code>$1</code></pre>'
                      )
                      .replace(/`([^`]+)`/g, "<code>$1</code>");
                  })(),
                }}
              />
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-[var(--color-neutralGray)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <BlogPostSidebar currentSlug={post.slug} />
        </div>
      </article>


      <CTAPilot />
    </>
  );
}
