import { LEGAL_SITE_URL } from "@/src/lib/legal";

/**
 * Canonical origin for URLs (metadata, JSON-LD, sitemap, robots).
 * Override on preview/staging with NEXT_PUBLIC_SITE_URL or SITE_URL (no trailing slash).
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    LEGAL_SITE_URL
  ).replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
