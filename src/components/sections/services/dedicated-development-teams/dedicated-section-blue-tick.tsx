import Image from "next/image";

export const BLUE_TICK_SRC = "/assets/images/blue-tick.svg" as const;

export function BlueTickIcon({ className }: { className?: string }) {
  return (
    <Image
      src={BLUE_TICK_SRC}
      alt=""
      width={22}
      height={22}
      className={`shrink-0 object-contain ${className ?? ""}`}
    />
  );
}
