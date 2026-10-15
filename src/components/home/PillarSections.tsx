"use client";

import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";
import { pillars } from "@/data/site";

function PillarBlock({
  index,
  label,
  title,
  body,
  image,
  reverse,
  delay,
  sectionId,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  image: typeof images.college;
  reverse?: boolean;
  delay?: number;
  sectionId: string;
}) {
  return (
    <article
      id={sectionId}
      className="scroll-mt-28 border-b border-[#d7e2e8] py-12 last:border-0 md:py-16"
    >
      <div className="inst-container">
        <Reveal delay={delay}>
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#d7e2e8]">
                <PlaceholderImage
                  asset={image}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  overlay="soft"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
              <p className="text-xs font-semibold tracking-widest text-[#4f5f68]">{index}</p>
              <p className="label-upper mt-2">{label}</p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-[#17344d] md:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4f5f68] md:text-base">{body}</p>
              <Link href="/about" className="editorial-link mt-6">
                Read institutional profile <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function PillarSections() {
  return (
    <section aria-label="Medical college and teaching hospital pillars">
      <PillarBlock {...pillars.college} image={images.college} sectionId="academics" delay={0} />
      <PillarBlock
        {...pillars.hospital}
        image={images.hospital}
        reverse
        sectionId="hospital"
        delay={100}
      />
    </section>
  );
}
