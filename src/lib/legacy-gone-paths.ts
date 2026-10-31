/**
 * Pathnames that should return HTTP 410 Gone for crawl-budget cleanup.
 * Must not match live marketing routes (/services, /blog, /tools, /blog/category, …).
 */
export function isLegacyGonePath(pathname: string): boolean {
  const path = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const lower = path.toLowerCase();

  // WordPress / CMS leftovers
  if (
    lower.startsWith("/wp-admin") ||
    lower.startsWith("/wp-content") ||
    lower.startsWith("/wp-includes") ||
    lower.startsWith("/wp-json") ||
    lower.startsWith("/wp-sitemap") ||
    lower.startsWith("/portfolio-sitemap") ||
    lower === "/xmlrpc.php" ||
    lower.startsWith("/xmlrpc.php/")
  ) {
    return true;
  }

  // Catch-all for other /wp-* probes (plugins, login variants)
  if (lower.startsWith("/wp-")) {
    return true;
  }

  // Old generator sitemaps — never block the live /sitemap.xml
  if (lower === "/sitemap_index.xml") return true;
  if (lower.endsWith("-sitemap.xml")) return true;

  // Legacy app routes
  if (lower.startsWith("/detail/") || lower === "/detail") return true;

  // Old WordPress portfolio / pricing archives still crawled by bots
  // (specific /project/* redirects in next.config.ts run before middleware)
  if (lower.startsWith("/portfolio/") || lower === "/portfolio") return true;
  if (lower.startsWith("/project/") || lower === "/project") return true;
  if (lower.startsWith("/pricing-services/") || lower === "/pricing-services") return true;

  // Archive / feed spam (do not use bare "/category" — live blog uses /blog/category/)
  if (lower.startsWith("/author/") || lower === "/author") return true;
  if (lower.startsWith("/tag/") || lower === "/tag") return true;
  if (lower === "/feed" || lower.startsWith("/feed/")) return true;
  if (lower.startsWith("/comments/") || lower === "/comments") return true;
  if (lower.includes("/trackback")) return true;
  if (lower === "/amp" || lower.startsWith("/amp/")) return true;

  // PHP leftovers
  if (lower.endsWith(".php") || lower.includes(".php/")) return true;

  return false;
}

/** Homepage WordPress-style search (`/?s=…`) — soft 200 junk for crawlers. */
export function isHomepageSearchJunk(
  pathname: string,
  searchParams: URLSearchParams,
): boolean {
  return (pathname === "/" || pathname === "") && searchParams.has("s");
}

export function goneResponse(): Response {
  return new Response("410 Gone - This resource has been permanently removed.", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
