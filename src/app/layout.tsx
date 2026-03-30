import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://stellixsoft.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "StellixSoft | Custom Software Development & IT Solutions",
    template: "%s | StellixSoft",
  },
  description:
    "StellixSoft is a trusted enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms. US-timezone aligned teams.",
  keywords: [
    "custom software development",
    "enterprise software company",
    "IoT software development",
    "legacy modernization",
    "dedicated development teams",
    "staff augmentation",
    "DevOps services",
    "AI for business",
    "healthcare software",
    "logistics software",
  ],
  authors: [{ name: "StellixSoft", url: SITE_URL }],
  creator: "StellixSoft",
  publisher: "StellixSoft",
  formatDetection: { telephone: false, email: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "StellixSoft",
    title: "StellixSoft | Custom Software Development & IT Solutions",
    description:
      "Enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "StellixSoft - Enterprise Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StellixSoft | Custom Software Development & IT Solutions",
    description:
      "Enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "StellixSoft",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/assets/images/stellixsoft-logo.png`,
        width: 160,
        height: 32,
        caption: "StellixSoft",
      },
      image: { "@id": `${SITE_URL}/#logo` },
      description:
        "Enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms.",
      foundingDate: "2020",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
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
        email: "info@stellixsoft.com",
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
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "StellixSoft",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--color-electricBlue-solid)] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
