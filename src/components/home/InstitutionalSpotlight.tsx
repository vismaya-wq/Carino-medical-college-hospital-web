"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";

const spotlights = [
  { title: "Medical education", tag: "Academic", href: "/#academics", image: images.college },
  { title: "Clinical learning", tag: "Training", href: "/#hospital", image: images.heroSecondary },
  { title: "Teaching hospital", tag: "Healthcare", href: "/#hospital", image: images.hospital },
  { title: "Campus vision", tag: "Architecture", href: "/#campus", image: images.campus },
] as const;

export function InstitutionalSpotlight() {
  return (
    <section className="bg-[#f5f8fa] py-14" aria-labelledby="spotlight-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#427a80]">
              Institutional focus
            </p>
            <h2 id="spotlight-heading" className="mt-1 font-serif text-3xl font-bold text-[#17344d]">
              What defines this project
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4f5f68]">
            Four connected dimensions of the proposed medical college and teaching hospital.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spotlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[260px] overflow-hidden rounded-lg border border-[#d7e2e8] bg-[#17344d]"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2638]/95 via-[#17344d]/55 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8ec5cc]">
                  {item.tag}
                </p>
                <p className="mt-1 font-serif text-lg leading-tight">{item.title}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide opacity-0 transition group-hover:opacity-100">
                  View section →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
