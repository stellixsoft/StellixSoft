/**
 * Elementa Protocol: Stellix Soft LLC's own in-house product (not client work).
 * Keep naming exact: Elementa is a project of Stellix Soft LLC, never a separate company or a client.
 */

export const ELEMENTA_SITE_URL = "https://elementaprotocol.com";
export const ELEMENTA_LAUNCH_UPDATES_URL =
  "https://elementaprotocol.com/wallet#community-section";
export const ELEMENTA_PAGE_PATH = "/products/elementa";

export const ELEMENTA_CONTACT_EMAIL = "info@elementaprotocol.com";
export const ELEMENTA_CONTACT_PHONE_DISPLAY = "+1 (847) 496-9803";
export const ELEMENTA_CONTACT_PHONE_TEL = "+18474969803";

export const ELEMENTA_OWNERSHIP_SENTENCE =
  "Elementa Protocol is a Stellix Soft LLC project, built and operated in-house.";

export const ELEMENTA_ONE_LINER =
  "A self-custody crypto wallet with Transfer Protection, built and operated by Stellix Soft.";

export type ElementaProductStatus = "live" | "in-development" | "coming-soon";

export const ELEMENTA_STATUS_LABEL: Record<ElementaProductStatus, string> = {
  live: "Live",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

export type ElementaStoreLink = {
  store: "google-play" | "microsoft";
  href: string;
  /** Small line above the store name, as on the official badges. */
  eyebrow: string;
  label: string;
};

export const ELEMENTA_WALLET_STORE_LINKS: ElementaStoreLink[] = [
  {
    store: "google-play",
    href: "https://play.google.com/store/apps/details?id=com.elementa.wallet",
    eyebrow: "Get it on",
    label: "Google Play",
  },
  {
    store: "microsoft",
    href: "https://apps.microsoft.com/detail/9mtbgsr866qp?hl=en-US&gl=US",
    eyebrow: "Get it from",
    label: "Microsoft",
  },
];

export const ELEMENTA_PRODUCTS: {
  name: string;
  status: ElementaProductStatus;
  /** Shown next to the status badge, e.g. platform availability. */
  statusNote?: string;
  description: string;
  storeLinks?: ElementaStoreLink[];
}[] = [
  {
    name: "Elementa Wallet",
    status: "live",
    statusNote: "on Android and Windows · iOS coming soon",
    storeLinks: ELEMENTA_WALLET_STORE_LINKS,
    description:
      "Self-custody for Bitcoin, Solana, Ethereum, Polygon, BNB Chain and Avalanche. Transfer Protection: freeze sending with a 24h/72h/7-day lock, a daily USD limit, a whitelist of allowed addresses and contracts, and lookalike-address warnings.",
  },
  {
    name: "Elementa Blockchain",
    status: "in-development",
    description: "The Elementa Protocol blockchain. Not available yet.",
  },
  {
    name: "Elementa DEX",
    status: "coming-soon",
    description:
      "A decentralized exchange planned for Elementa Protocol. Not available yet; launch timing and supported regions will be announced.",
  },
];

/** JSON-LD for /products/elementa: Organization (Stellix Soft LLC) + SoftwareApplication (Elementa Wallet). */
export function elementaJsonLd() {
  const orgId = "https://stellixsoft.com/#stellix-soft-llc";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Stellix Soft LLC",
        url: "https://stellixsoft.com",
        telephone: "+1-847-496-9803",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Houston",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Elementa Wallet",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android, Windows",
        url: ELEMENTA_SITE_URL,
        installUrl: ELEMENTA_WALLET_STORE_LINKS.map((l) => l.href),
        publisher: { "@id": orgId },
      },
    ],
  };
}
