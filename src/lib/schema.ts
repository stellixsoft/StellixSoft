import { STELLIX_SOFT_LLC_PHONE_TEL } from "@/src/lib/constants";
import { LEGAL_CONTACT_EMAIL } from "@/src/lib/legal";
import { absoluteUrl, getSiteUrl } from "@/src/lib/site-url";

export function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

export function websiteId(): string {
  return `${getSiteUrl()}/#website`;
}

export function orgRef() {
  return {
    "@type": "Organization" as const,
    "@id": organizationId(),
    name: "StellixSoft",
  };
}

const AREA_SERVED = [
  { "@type": "Place" as const, name: "North America" },
  { "@type": "Place" as const, name: "Europe" },
];

/** Standalone `application/ld+json` script for breadcrumbs. */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Nested `breadcrumb` property on WebPage / ContactPage (no `@context`). */
export function breadcrumbListValue(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type FaqQuestionBlock = {
  "@type": "Question";
  name: string;
  acceptedAnswer: { "@type": "Answer"; text: string };
};

export function faqPageJsonLd(mainEntity: FaqQuestionBlock[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  category?: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    ...(opts.category ? { category: opts.category } : {}),
    provider: orgRef(),
    areaServed: AREA_SERVED,
    url,
  };
}

export function contactPageJsonLd() {
  const url = absoluteUrl("/contact");
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact StellixSoft",
    description:
      "Get in touch with StellixSoft. Schedule a free 30-minute discovery call to discuss your enterprise software project.",
    url,
    mainEntity: {
      "@type": "Organization",
      "@id": organizationId(),
      name: "StellixSoft",
      email: LEGAL_CONTACT_EMAIL,
      telephone: STELLIX_SOFT_LLC_PHONE_TEL,
      contactPoint: {
        "@type": "ContactPoint",
        email: LEGAL_CONTACT_EMAIL,
        telephone: STELLIX_SOFT_LLC_PHONE_TEL,
        contactType: "sales",
        availableLanguage: "English",
      },
    },
    breadcrumb: breadcrumbListValue([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  };
}

export function aboutPageJsonLd() {
  const url = absoluteUrl("/about");
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#about`,
    name: "About StellixSoft",
    description:
      "Founded in 2020, StellixSoft is a remote-first enterprise software development company serving Fortune 500 companies across North America and Europe.",
    url,
    mainEntity: { "@id": organizationId() },
    isPartOf: { "@id": websiteId() },
    breadcrumb: breadcrumbListValue([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  };
}

export function collectionPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url,
    isPartOf: { "@id": websiteId() },
    publisher: orgRef(),
  };
}

export function webPageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: opts.name,
    description: opts.description,
    url,
    isPartOf: { "@id": websiteId() },
    about: { "@id": organizationId() },
  };
}

export function articleCaseStudyJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
  breadcrumbName: string;
  datePublished: string;
  dateModified?: string;
  imagePath?: string;
}) {
  const url = absoluteUrl(opts.path);
  const imageUrl =
    opts.imagePath?.startsWith("http") === true
      ? opts.imagePath
      : absoluteUrl(opts.imagePath ?? "/opengraph-image");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: orgRef(),
    publisher: {
      "@type": "Organization",
      "@id": organizationId(),
      name: "StellixSoft",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/images/stellixsoft-logo.png"),
        width: 160,
        height: 32,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: { "@id": websiteId() },
    breadcrumb: breadcrumbListValue([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: opts.breadcrumbName, path: opts.path },
    ]),
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  excerpt: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  wordCount: number;
  category: string;
  tags: string[];
  coverImageAbsoluteUrl: string;
}) {
  const url = absoluteUrl(`/blog/${opts.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.title,
    description: opts.excerpt,
    image: {
      "@type": "ImageObject",
      url: opts.coverImageAbsoluteUrl,
      width: 1200,
      height: 630,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    wordCount: opts.wordCount,
    articleSection: opts.category,
    keywords: opts.tags.join(", "),
    inLanguage: "en-US",
    author: orgRef(),
    publisher: {
      "@type": "Organization",
      "@id": organizationId(),
      name: "StellixSoft",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/images/stellixsoft-logo.png"),
        width: 160,
        height: 32,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: { "@id": websiteId() },
    breadcrumb: breadcrumbListValue([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: opts.title, path: `/blog/${opts.slug}` },
    ]),
  };
}

/** Root `<head>` graph: Organization + WebSite (site-wide). */
export function buildRootJsonLdGraph() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site}/#organization`,
        name: "StellixSoft",
        url: site,
        telephone: STELLIX_SOFT_LLC_PHONE_TEL,
        logo: {
          "@type": "ImageObject",
          "@id": `${site}/#logo`,
          url: `${site}/assets/images/stellixsoft-logo.png`,
          width: 160,
          height: 32,
          caption: "StellixSoft",
        },
        image: { "@id": `${site}/#logo` },
        description:
          "Enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms.",
        foundingDate: "2020",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Houston",
            addressRegion: "TX",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Islamabad",
            addressCountry: "PK",
          },
        ],
        areaServed: [
          { "@type": "Place", name: "North America" },
          { "@type": "Place", name: "Europe" },
        ],
        knowsAbout: [
          "Enterprise Software Development",
          "IoT Platform Development",
          "Legacy Software Modernization",
          "DevOps and Cloud Infrastructure",
          "AI Integration",
          "Healthcare Software (HIPAA)",
          "Logistics Software",
          "Staff Augmentation",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: LEGAL_CONTACT_EMAIL,
          telephone: STELLIX_SOFT_LLC_PHONE_TEL,
          contactType: "sales",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.linkedin.com/company/stellixsoft",
          "https://twitter.com/stellixsoft",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: "StellixSoft",
        publisher: { "@id": `${site}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${site}/blog?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
