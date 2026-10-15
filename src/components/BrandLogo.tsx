import Image from "next/image";
import { site } from "@/data/site";

type BrandLogoProps = {
  size?: "sm" | "md";
  showText?: boolean;
  variant?: "light" | "dark";
  className?: string;
};

const sizes = {
  sm: { box: "h-9 w-9", img: 36 },
  md: { box: "h-12 w-12 sm:h-[3.25rem] sm:w-[3.25rem]", img: 52 },
};

export function BrandLogo({
  size = "md",
  showText = true,
  variant = "dark",
  className = "",
}: BrandLogoProps) {
  const s = sizes[size];
  const titleClass =
    variant === "light" ? "text-white" : "text-[#17344d]";
  const subClass =
    variant === "light" ? "text-white/75" : "text-[#4f5f68]";

  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-ri.png"
        alt={`${site.institutionName} logo`}
        width={s.img}
        height={s.img}
        priority
        className={`${s.box} shrink-0 rounded-sm object-contain`}
      />
      {showText ? (
        <div className="min-w-0">
          <p
            className={`truncate font-serif text-lg font-bold leading-tight sm:text-xl ${titleClass}`}
          >
            {site.institutionName}
          </p>
          <p
            className={`truncate text-[0.58rem] font-bold uppercase tracking-[0.14em] sm:text-[0.62rem] ${subClass}`}
          >
            {site.descriptor}
          </p>
        </div>
      ) : null}
    </div>
  );
}
