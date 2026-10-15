"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/data/images";
import { site } from "@/data/site";

const tabs = [
  {
    id: "college",
    label: "Medical college",
    blurb:
      "Faculty-led undergraduate training on a single campus planned for Kozhikode.",
  },
  {
    id: "hospital",
    label: "Teaching hospital",
    blurb:
      "Clinical learning linked to patient care within the same institution.",
  },
] as const;

const avatars = [
  { src: images.college.src, alt: "Medical students" },
  { src: images.hospital.src, alt: "Hospital frontage" },
  { src: images.heroPrimary.src, alt: "Campus" },
] as const;

export function HomeTrustShowcase() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("college");
  const blurb = tabs.find((t) => t.id === active)?.blurb ?? tabs[0].blurb;

  return (
    <section className="bg-white py-14 md:py-16" aria-labelledby="trust-showcase-title">
      <div className="inst-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-md">
          <p className="label-upper">Why this project</p>
          <h2 id="trust-showcase-title" className="section-block__title">
            Built for education and care
          </h2>
          <p className="section-block__lead">
            {site.trustName} is shaping an integrated proposal in {site.location}—one place
            for learning and hospital training.
          </p>
        </div>

        <article className="mx-auto w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-[0_12px_40px_rgba(12,74,122,0.1)] sm:p-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                  active === tab.id
                    ? "border-primary bg-primary-light text-primary"
                    : "border-line bg-white text-muted hover:border-primary/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-end justify-center gap-1 select-none">
            <span
              className="bg-clip-text font-serif text-[5.5rem] font-bold leading-none text-transparent sm:text-[6.5rem]"
              style={{
                backgroundImage: `url(${images.heroSecondary.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden
            >
              25
            </span>
            <span className="pb-2 font-serif text-5xl font-bold text-[#b8c9d9] sm:text-6xl">+</span>
          </div>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted">
            Kozhikode · {site.projectStatus}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <ul className="flex -space-x-2" aria-hidden>
              {avatars.map((item) => (
                <li
                  key={item.src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
                >
                  <Image src={item.src} alt="" fill sizes="40px" className="object-cover" />
                </li>
              ))}
            </ul>
            <p className="text-sm font-bold leading-snug text-primary">
              Trusted experts in medical education &amp; wellness
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{blurb}</p>

          <Link
            href="/contact"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary-dark"
          >
            Contact us
          </Link>
        </article>
      </div>
    </section>
  );
}
