import Link from "next/link";
import {
  IconAcademic,
  IconCampus,
  IconClinical,
} from "@/components/icons/FeatureIcons";
import { projectPillars } from "@/data/site";

const iconMap = {
  academic: IconAcademic,
  clinical: IconClinical,
  campus: IconCampus,
};

export function HomeProjectGrid() {
  return (
    <section className="bg-cool py-14 md:py-16" aria-labelledby="project-grid-title">
      <div className="inst-container text-center">
        <p className="label-upper">Institution</p>
        <h2 id="project-grid-title" className="section-block__title">
          Our focus areas
        </h2>
        <p className="section-block__lead mx-auto max-w-2xl">
          The proposed college and hospital in four connected parts.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectPillars.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.id} id={item.id} className="scroll-mt-24">
                <article className="h-full rounded-xl border border-line bg-white px-4 py-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary"
                    aria-hidden
                  >
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </article>
              </li>
            );
          })}
        </ul>

        <Link href="/about" className="mt-8 inline-block text-sm font-bold text-primary hover:underline">
          View institutional profile →
        </Link>
      </div>
    </section>
  );
}
