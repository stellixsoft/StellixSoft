import { ImageResponse } from "next/og";
import { IMRAN_BUSINESS_CARD } from "@/src/lib/business-cards";

export const runtime = "nodejs";

export const alt = "Imran Inayat digital business card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const card = IMRAN_BUSINESS_CARD;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #030213 0%, #0b2148 45%, #3383F1 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "68%",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: 0.72,
            }}
          >
            Digital Business Card
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
              {card.name}
            </div>
            <div style={{ fontSize: 30, fontWeight: 500, color: "#A6E5F7" }}>
              {card.title}
            </div>
            <div style={{ fontSize: 24, opacity: 0.9 }}>{card.company}</div>
            <div style={{ fontSize: 24, lineHeight: 1.45, maxWidth: 720 }}>
              Save contact details, book a 15-minute meeting, or open the full mobile card.
            </div>
          </div>
          <div style={{ fontSize: 24, opacity: 0.82 }}>{card.urls.pageUrl}</div>
        </div>

        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 999,
            border: "8px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          {card.photo.fallbackInitials}
        </div>
      </div>
    ),
    { ...size },
  );
}
