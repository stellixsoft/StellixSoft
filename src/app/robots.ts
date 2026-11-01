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

/**
 * AI crawlers and AI search fetchers, listed explicitly so a future blanket rule
 * can't shut out citations in ChatGPT, Claude, Perplexity, Gemini, Copilot, etc.
 */
const AI_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "CCBot",
  "Bytespider",
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
        userAgent: [...AI_USER_AGENTS],
        allow: "/",
        disallow: [...JUNK_DISALLOW],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
