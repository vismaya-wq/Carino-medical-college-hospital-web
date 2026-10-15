import Link from "next/link";
import Image from "next/image";
import { HeroFeatureBar } from "@/components/home/HeroFeatureBar";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative bg-white pb-16" aria-labelledby="home-hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-6 lg:py-12">
        <div className="z-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#427a80]">
            Proposed · Medical College &amp; Teaching Hospital
          </p>
          <h1
            id="home-hero-title"
            className="mt-3 max-w-xl font-serif text-4xl font-bold leading-tight text-[#17344d] sm:text-5xl"
          >
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4f5f68]">
            {site.heroIntro}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6a7882]">
            {site.heroSubline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#academics"
              className="inline-flex rounded-md bg-[#17344d] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white shadow hover:bg-[#0f2638]"
            >
              Explore Academics
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-md border border-[#c5d4dc] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#17344d] hover:bg-[#f5f8fa]"
            >
              Project Enquiry
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-[#d7e2e8] sm:min-h-[360px] lg:min-h-[440px]">
          <Image
            src={images.heroPrimary.src}
            alt={images.heroPrimary.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={88}
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent"
            aria-hidden
          />
          <span className="absolute bottom-3 right-3 rounded bg-[#17344d]/85 px-2 py-1 text-[0.62rem] text-white">
            Resurgent India Trust · campus visual
          </span>
        </div>
      </div>

      <HeroFeatureBar />
    </section>
  );
}
