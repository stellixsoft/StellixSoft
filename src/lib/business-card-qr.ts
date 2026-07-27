import QRCode from "qrcode";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

type QrColors = { dark: string; light: string };

let cachedColors: QrColors | null = null;

async function getQrTokenColors(): Promise<QrColors> {
  if (cachedColors) return cachedColors;

  const css = await readFile(join(process.cwd(), "src", "app", "globals.css"), "utf8");
  const deepSpaceMatch = css.match(/--color-deepSpace:\s*(#[0-9a-fA-F]{3,6})\s*;/);
  const whiteMatch = css.match(/--color-white:\s*(#[0-9a-fA-F]{3,6})\s*;/);

  const deepSpace = deepSpaceMatch?.[1];
  const white = whiteMatch?.[1];

  cachedColors = {
    dark: deepSpace ?? "#030213",
    light: white ?? "#FFFFFF",
  };
  return cachedColors;
}

export async function createBusinessCardQrSvg(url: string): Promise<string> {
  const { dark, light } = await getQrTokenColors();
  return QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark, light },
  });
}
