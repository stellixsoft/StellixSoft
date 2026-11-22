import type { ElementaStoreLink } from "@/src/lib/elementa";

/**
 * Store badge styled like the official "Get it on Google Play" / "Get it from Microsoft"
 * badges (black pill, two-line label). Swap for the official badge artwork in
 * /public/assets/images if preferred.
 */
export default function StoreBadge({ link }: { link: ElementaStoreLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener"
      aria-label={`${link.eyebrow} ${link.label} (opens in new tab)`}
      className="inline-flex min-w-[150px] flex-col justify-center rounded-lg border border-gray-500 bg-black px-4 py-1.5 text-left text-white transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-electricBlue-solid)] focus-visible:ring-offset-2"
    >
      <span className="text-[10px] uppercase leading-tight tracking-wide text-white/85">
        {link.eyebrow}
      </span>
      <span className="text-lg font-semibold leading-tight">{link.label}</span>
    </a>
  );
}
