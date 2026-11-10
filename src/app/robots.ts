import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/lib/site-url";

/**
 * Only private paths are disallowed. Legacy junk (/detail/, /wp-*, /feed, …) is NOT
 * blocked here on purpose: middleware answers it with 410 Gone, and Google has to be
 * able to crawl a URL to see the 410 and drop it from the index. /_next/ stays crawlable
 * so Google can fetch the JS, CSS and optimized images it needs to render pages.
 */
const JUNK_DISALLOW = ["/api/", "/admin"] as const;

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
