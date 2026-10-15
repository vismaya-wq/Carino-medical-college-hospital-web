import Link from "next/link";
import Image from "next/image";
import {
  IconAcademic,
  IconCampus,
  IconClinical,
} from "@/components/icons/FeatureIcons";
import { images } from "@/data/images";
import { heroFeatures, site } from "@/data/site";

const featureIcons = {
  academic: IconAcademic,
  clinical: IconClinical,
  campus: IconCampus,
};

export function HomeHero() {
  return (
    <section className="relative min-h-[520px] lg:min-h-[560px]" aria-labelledby="home-hero-title">
      <Image
        src={images.hospital.src}
        alt={images.hospital.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a3d6b]/95 via-[#0a4d7c]/82 to-[#0a4d7c]/45"
        aria-hidden
      />

      <div className="inst-container relative z-10 grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-7 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {site.descriptor} · {site.location}
          </p>
          <h1
            id="home-hero-title"
            className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]"
          >
            {site.taglineLead}
            <br />
            <span className="text-[#7ec8ff]">{site.taglineAccent}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/88">{site.heroIntro}</p>

          <ul className="mt-8 flex flex-wrap gap-6 sm:gap-8">
            {heroFeatures.map((item) => {
              const Icon = featureIcons[item.icon];
              return (
                <li key={item.title} className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-7">
            <h2 className="font-serif text-xl font-bold text-navy">Project enquiry</h2>
            <p className="mt-1 text-sm text-muted">Quick details for institutional contact.</p>

            <dl className="mt-5 space-y-4 text-sm">
              <div className="rounded-lg bg-cool px-4 py-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted">Location</dt>
                <dd className="mt-1 font-semibold text-charcoal">{site.location}</dd>
              </div>
              <div className="rounded-lg bg-cool px-4 py-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneTel}`} className="font-semibold text-primary hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="rounded-lg bg-cool px-4 py-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted">Institution</dt>
                <dd className="mt-1 font-semibold text-charcoal">{site.collegeName}</dd>
              </div>
            </dl>

            <Link href="/contact" className="btn-primary mt-6 w-full py-3 text-center">
              Send a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
