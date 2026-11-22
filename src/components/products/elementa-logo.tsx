/**
 * Placeholder mark for Elementa Protocol until the official logo asset is added to
 * /public/assets/images. Swap this SVG for an <Image> once the asset is available.
 */
export default function ElementaLogo({
  className = "h-14 w-14",
  title = "Elementa Protocol",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="elementa-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3383F1" />
          <stop offset="100%" stopColor="#0980a8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#elementa-mark-bg)" />
      <path
        d="M22 18h22v6H29v5h13v6H29v5h15v6H22z"
        fill="#ffffff"
      />
    </svg>
  );
}
