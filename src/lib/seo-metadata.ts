import type { Metadata } from "next";
import { absoluteUrl } from "@/src/lib/site-url";

export type PageMetadataInput = {
  title: string;
  description: string;
  /** Path starting with `/`, e.g. `/about` or `/services/iot-software` */
  path: string;
  /** Route-specific keywords that override the root-layout defaults. */
  keywords?: string[];
};

/**
 * Per-route metadata with canonical, Open Graph, and Twitter cards (inherits root title template).
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "StellixSoft",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Open Graph type `article` for blog posts and long-form case studies.
 */
export function buildArticleMetadata(opts: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
  ogImageUrl: string;
  tags?: string[];
}): Metadata {
  const url = absoluteUrl(opts.path);
  const images = [
    {
      url: opts.ogImageUrl,
      width: 1200,
      height: 630,
      alt: opts.title,
    },
  ];
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "article",
      publishedTime: opts.publishedTime,
      modifiedTime: opts.modifiedTime ?? opts.publishedTime,
      authors: ["StellixSoft"],
      siteName: "StellixSoft",
      locale: "en_US",
      ...(opts.tags?.length ? { tags: opts.tags } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [opts.ogImageUrl],
    },
  };
}
