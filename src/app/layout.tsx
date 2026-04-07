import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";
import MicrosoftClarity from "../components/analytics/MicrosoftClarity";
import { buildRootJsonLdGraph } from "@/src/lib/schema";
import { getSiteUrl } from "@/src/lib/site-url";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StellixSoft | Custom Software Development & IT Solutions",
    template: "%s | StellixSoft",
  },
  description:
    "StellixSoft is a trusted enterprise software development company specializing in IoT, legacy modernization, AI, cloud, and complex business platforms. US-timezone aligned teams.",
  keywords: [
    "custom software development company",
    "custom software development services",
    "enterprise software development services",
    "custom enterprise software development services",
    "IoT software development",
    "legacy modernization services",
    "dedicated development teams",
    "staff augmentation services",
    "DevOps consulting services",
    "cloud migration services",
    "AI integration services",
    "healthcare software development",
    "logistics software solutions",
    "e-commerce development services",
    "blockchain development services",
  ],
  authors: [{ name: "StellixSoft", url: siteUrl }],
  creator: "StellixSoft",
  publisher: "StellixSoft",
  formatDetection: { telephone: false, email: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
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
  alternates: { canonical: siteUrl },
};

const jsonLd = buildRootJsonLdGraph();

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
        <MicrosoftClarity />
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
