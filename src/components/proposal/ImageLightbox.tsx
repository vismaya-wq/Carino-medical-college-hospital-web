"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageLightbox({
  src,
  alt,
  caption,
  className = "",
  sizes = "100vw",
  priority = false,
}: Props) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden bg-white text-left ${className}`}
      >
        <span className="relative block aspect-[4/3] w-full sm:aspect-[16/11]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition duration-300 group-hover:opacity-95"
          />
        </span>
        <span className="mt-2 block text-[0.7rem] leading-snug text-sage">{caption}</span>
        <span className="mt-1 block text-[0.65rem] uppercase tracking-wider text-charcoal/45">
          Click to enlarge
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-sm text-white/80 hover:text-white"
            onClick={close}
          >
            Close
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full max-h-[80vh]">
              <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
            </div>
            <p className="mt-4 text-center text-sm text-white/75">{caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
