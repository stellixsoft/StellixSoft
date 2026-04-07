import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt = "StellixSoft - Enterprise software development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/images/stellixsoft-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #0b1020 0%, #151c32 45%, #0b1020 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og ImageResponse requires img + data URL */}
        <img
          alt=""
          height={200}
          src={logoSrc}
          style={{ height: 200, width: "auto", objectFit: "contain" }}
          width={972}
        />
      </div>
    ),
    { ...size },
  );
}
