import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/src/components/seo/json-ld";
import { breadcrumbJsonLd, orgRef } from "@/src/lib/schema";
import { absoluteUrl } from "@/src/lib/site-url";

export function ToolShell({
  title,
  intro,
  path,
  children,
  service,
  serviceLabel,
  explanation,
}: {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
  service: string;
  serviceLabel: string;
  explanation: ReactNode;
}) {
  const url = absoluteUrl(path);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          description: intro,
          url,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web browser",
          isAccessibleForFree: true,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          provider: orgRef(),
          publisher: orgRef(),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Engineering Lab", path: "/tools" },
          { name: title, path },
        ])}
      />
      <header className="lab-hero">
        <div className="lab-container">
          <Link href="/tools" className="lab-eyebrow">
            ← Stellix Soft Engineering Lab
          </Link>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="lab-tags">
            <span>Free to explore</span>
            <span>No registration required</span>
            <span>Built for enterprise decisions</span>
          </div>
        </div>
      </header>
      <div className="lab-container lab-body">
        {children}
        <section className="lab-explainer">
          <h2>From exploration to an engineering plan</h2>
          {explanation}
          <Link className="lab-text-link" href={service}>
            {serviceLabel} →
          </Link>
        </section>
        <nav
          aria-label="Explore more engineering tools"
          className="lab-related"
        >
          <Link href="/tools/rfid-roi-calculator">RFID ROI calculator →</Link>
          <Link href="/tools/dotnet-modernization-assessment">
            .NET modernization assessment →
          </Link>
          <Link href="/tools/iot-platform-demo">
            IoT operations simulator →
          </Link>
        </nav>
      </div>
    </>
  );
}
