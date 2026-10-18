import Script from "next/script";

const CUSTOMER_HUB_CONFIG = {
  orgId: "67b7px4PWlt52jpRb1LI",
  projectId: "gvufDze7csWebGS7v3Ti",
  channelId: "website",
  apiBase: "https://support-hub--support-hub-pc.us-central1.hosted.app",
} as const;

export default function CustomerHub() {
  return (
    <>
      <Script id="customer-hub-config" strategy="beforeInteractive">
        {`window.CustomerHubConfig = ${JSON.stringify(CUSTOMER_HUB_CONFIG)};`}
      </Script>
      <Script
        src={`${CUSTOMER_HUB_CONFIG.apiBase}/widget.js`}
        strategy="afterInteractive"
      />
    </>
  );
}
