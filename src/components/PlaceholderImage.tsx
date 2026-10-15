import Image from "next/image";
import type { ImageAsset } from "@/data/images";

type PlaceholderImageProps = {
  asset: ImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  overlay?: "none" | "navy" | "soft";
};

export function PlaceholderImage({
  asset,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  overlay = "none",
}: PlaceholderImageProps) {
  const overlayClass =
    overlay === "navy"
      ? "after:pointer-events-none after:absolute after:inset-0 after:bg-[#17344D]/35 after:content-['']"
      : overlay === "soft"
        ? "after:pointer-events-none after:absolute after:inset-0 after:bg-[#17344D]/12 after:content-['']"
        : "";

  return (
    <div
      className={`image-reveal relative overflow-hidden bg-pale ${overlayClass} ${className}`}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={85}
        className="object-cover"
      />
    </div>
  );
}
