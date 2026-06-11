import Script from "next/script";

const WARMLY_CLIENT_ID = "6bc41de9c2e19bc89899cbcc6891d0a2";

export default function Warmly() {
  return (
    <Script
      id="warmly-script-loader"
      src={`https://opps-widget.getwarmly.com/warmly.js?clientId=${WARMLY_CLIENT_ID}`}
      strategy="lazyOnload"
    />
  );
}
