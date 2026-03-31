import Image from "next/image";

function getInitials(name: string): string {
  const normalized = name.replace(/\./g, " ").replace(/,/g, " ");
  const parts = normalized.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0] ?? "";
    const b = parts[parts.length - 1][0] ?? "";
    return (a + b).toUpperCase();
  }
  const single = parts[0] ?? "?";
  return single.slice(0, 2).toUpperCase();
}

function avatarBackground(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  const h2 = (h + 36) % 360;
  return `linear-gradient(145deg, hsl(${h}, 36%, 40%), hsl(${h2}, 38%, 34%))`;
}

type Size = "sm" | "md";

type InitialsProps = {
  name: string;
  size?: Size;
  className?: string;
};

export function TestimonialInitialsAvatar({ name, size = "md", className = "" }: InitialsProps) {
  const dim = size === "sm" ? "w-10 h-10 text-[10px]" : "w-12 h-12 text-xs";
  return (
    <div
      className={`rounded-full flex items-center justify-center font-semibold text-white shadow-inner ring-1 ring-black/5 shrink-0 ${dim} ${className}`}
      style={{ background: avatarBackground(name) }}
      aria-hidden
    >
      {getInitials(name)}
    </div>
  );
}

type AvatarProps = InitialsProps & {
  /** Public path under `/public`, e.g. `/assets/images/testimonials/jason-bennison.webp` */
  photoSrc?: string;
  /** Use `contain` for wide logos so they are not cropped; `cover` for headshots */
  photoFit?: "cover" | "contain";
};

export function TestimonialAvatar({
  name,
  photoSrc,
  photoFit = "cover",
  size = "md",
  className = "",
}: AvatarProps) {
  const dim = size === "sm" ? "w-10 h-10" : "w-12 h-12";
  const sizes = size === "sm" ? "40px" : "48px";
  const isContain = photoFit === "contain";

  if (photoSrc) {
    return (
      <div
        className={`relative ${dim} rounded-full overflow-hidden shrink-0 ring-1 ring-black/5 ${isContain ? "bg-white p-1.5" : "bg-[var(--color-lightGray)]"} ${className}`}
      >
        <Image
          src={photoSrc}
          alt={`Portrait of ${name}`}
          fill
          className={
            isContain ? "object-contain object-center" : "object-cover object-top"
          }
          sizes={sizes}
        />
      </div>
    );
  }

  return <TestimonialInitialsAvatar name={name} size={size} className={className} />;
}
