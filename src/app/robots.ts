import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/lib/site-url";

/** Junk prefixes mirrored in middleware 410 rules — reduce crawl discovery. */
const JUNK_DISALLOW = [
  "/api/",
  "/_next/",
  "/wp-admin",
  "/wp-content/",
  "/wp-includes/",
  "/wp-json/",
  "/wp-sitemap",
  "/portfolio-sitemap",
  "/xmlrpc.php",
  "/sitemap_index.xml",
  "/author/",
  "/tag/",
  "/feed",
  "/comments/",
  "/amp",
  "/detail/",
  "/*.php$",
] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
