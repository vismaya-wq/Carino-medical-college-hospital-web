import Image from "next/image";
import { site } from "@/data/site";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <Image
        src="/logo-ri.png"
        alt="R.I.T. logo"
        width={48}
        height={48}
        priority
        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <div className="min-w-0 leading-tight">
        <p className="font-serif text-base font-medium text-charcoal sm:text-lg">
          {site.institutionShort}
        </p>
        <p className="hidden text-[0.62rem] font-medium uppercase tracking-[0.18em] text-sage sm:block">
          Medical College Proposal
        </p>
      </div>
    </div>
  );
}
