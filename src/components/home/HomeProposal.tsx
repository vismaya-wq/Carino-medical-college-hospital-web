import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/proposal/ImageLightbox";
import { images } from "@/data/images";
import { homeCopy, projectDocuments, site } from "@/data/site";

const overviewRows = [
  ["Proposed Institution", site.projectName],
  ["Sponsoring Trust", site.trustName],
  ["Location", site.location],
  ["Land Area", site.landArea],
  ["Project Status", site.projectStatus],
] as const;

export function HomeProposal() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <section className="border-b border-line bg-paper" aria-labelledby="hero-title">
        <div className="proposal-container py-12 lg:py-16">
          <div className="proposal-grid items-center">
            <div className="col-span-12 lg:col-span-5">
              <p className="section-eyebrow">Institutional project proposal</p>
              <h1 id="hero-title" className="heading-serif mt-4">
                Proposed {site.projectName}
              </h1>
              <p className="body-muted mt-6 max-w-md">{site.heroIntro}</p>
              <Link href="#overview" className="link-arrow mt-8">
                Explore the Project <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <figure>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white">
                  <Image
                    src={images.heroConcept.src}
                    alt={images.heroConcept.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[0.7rem] tracking-wide text-sage">
                  {images.heroConcept.caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROJECT OVERVIEW */}
      <section id="overview" className="border-b border-line bg-white scroll-mt-20">
        <div className="proposal-container py-14 lg:py-20">
          <div className="proposal-grid">
            <div className="col-span-12 lg:col-span-7">
              <p className="section-index">01 / Project overview</p>
              <h2 className="heading-serif mt-3">{homeCopy.overview.headline}</h2>
              <p className="body-muted mt-5 max-w-xl">{homeCopy.overview.description}</p>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pt-8">
              <dl className="divide-y divide-[#dde3dc] border-y border-[#dde3dc] text-sm">
                {overviewRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[8.5rem_1fr]"
                  >
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-sage">
                      {label}
                    </dt>
                    <dd className="font-medium text-charcoal">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PROPOSED INFRASTRUCTURE */}
      <section className="border-b border-line bg-paper">
        <div className="proposal-container py-14 lg:py-20">
          <p className="section-index">02 / Proposed infrastructure</p>
          <h2 className="heading-serif mt-3">{homeCopy.infrastructure.headline}</h2>

          <div className="proposal-grid mt-12">
            <article className="col-span-12 lg:col-span-6">
              <ImageLightbox
                src={images.college.src}
                alt={images.college.alt}
                caption={images.college.caption}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <h3 className="mt-8 font-serif text-xl text-charcoal">Medical College</h3>
              <p className="body-muted mt-3 max-w-md">{homeCopy.infrastructure.college}</p>
            </article>
            <article className="col-span-12 lg:col-span-6 lg:mt-16">
              <ImageLightbox
                src={images.hospital.src}
                alt={images.hospital.alt}
                caption={images.hospital.caption}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <h3 className="mt-8 font-serif text-xl text-charcoal">Teaching Hospital</h3>
              <p className="body-muted mt-3 max-w-md">{homeCopy.infrastructure.hospital}</p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SITE & ARCHITECTURAL PLANNING */}
      <section className="border-b border-line bg-white">
        <div className="proposal-container py-14 lg:py-20">
          <p className="section-index">03 / Campus planning</p>
          <h2 className="heading-serif mt-3">{homeCopy.campus.headline}</h2>
          <p className="body-muted mt-4 max-w-2xl">{homeCopy.campus.description}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <ImageLightbox
                src={images.galleryExterior.src}
                alt={images.galleryExterior.alt}
                caption={images.galleryExterior.caption}
                className="border border-line"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              <ImageLightbox
                src={images.galleryGroundFloor.src}
                alt={images.galleryGroundFloor.alt}
                caption={images.galleryGroundFloor.caption}
                className="border border-line"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <ImageLightbox
                src={images.galleryTypicalFloor.src}
                alt={images.galleryTypicalFloor.alt}
                caption={images.galleryTypicalFloor.caption}
                className="border border-line"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — PROJECT PURPOSE & REGULATORY PROCESS */}
      <section className="bg-paper">
        <div className="proposal-container py-14 lg:py-20">
          <p className="section-index">04 / Project purpose</p>
          <h2 className="heading-serif mt-3">{homeCopy.purpose.headline}</h2>
          <p className="body-muted mt-5 max-w-2xl">{homeCopy.purpose.description}</p>

          <div className="mt-10 max-w-2xl border border-[#dde3dc] bg-white p-6 sm:p-8">
            <h3 className="font-serif text-lg text-charcoal">{homeCopy.purpose.regulatoryTitle}</h3>
            <p className="body-muted mt-3">{homeCopy.purpose.regulatoryBody}</p>
          </div>

          <h3 className="mt-14 font-serif text-xl text-charcoal">Project Information &amp; Documents</h3>

          {projectDocuments.length > 0 ? (
            <ul className="mt-6 divide-y divide-[#dde3dc] border-y border-[#dde3dc] max-w-2xl">
              {projectDocuments.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-5 text-sm transition hover:text-forest"
                  >
                    <span className="flex items-center gap-3 font-medium text-charcoal">
                      <span className="text-sage" aria-hidden>PDF</span>
                      {doc.title}
                    </span>
                    <span className="link-arrow !text-xs">View document ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="body-muted mt-4 max-w-2xl">{homeCopy.purpose.documentsEmpty}</p>
          )}

          <Link href="/about" className="link-arrow mt-12">
            About the Organisation <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
