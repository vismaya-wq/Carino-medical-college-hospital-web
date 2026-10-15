import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.institutionName} — ${site.location}.`,
};

export default function AboutPage() {
  return (
    <section className="bg-cool py-14">
      <div className="inst-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="label-upper">About us</p>
          <h1 className="section-block__title">About {site.trustName}</h1>
          <p className="section-block__lead max-w-lg">
            {site.collegeName} and a teaching hospital are proposed in {site.location}. Status:{" "}
            {site.projectStatus}.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Contact us
          </Link>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-line shadow-lg">
          <Image
            src={images.aboutCampus.src}
            alt={images.aboutCampus.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
