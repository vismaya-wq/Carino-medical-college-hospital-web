"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { announcements, projectGlance } from "@/data/site";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="shrink-0 text-teal">
      <path d="M2 7h8M7 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function UpdatesGlanceSection() {
  return (
    <section
      id="important-updates"
      className="scroll-mt-28 border-b border-line bg-clinical py-12 md:py-16"
    >
      <div className="inst-container">
        <div className="inst-grid">
          <div className="span-12 span-lg-8">
            <Reveal>
              <div className="panel-interactive border border-line bg-clinical p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
                  <div>
                    <p className="label-upper">Notice board</p>
                    <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                      Important Updates
                    </h2>
                  </div>
                  <p className="max-w-sm text-sm text-muted">
                    Verified institutional announcements will be published here. No
                    fabricated notices are displayed.
                  </p>
                </div>

                {announcements.length === 0 ? (
                  <div
                    className="mt-8 border border-dashed border-line bg-cool px-6 py-10 text-center"
                    role="status"
                  >
                    <p className="font-serif text-xl text-navy">
                      No verified announcements at this time
                    </p>
                    <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                      When formal updates, circulars, or public disclosures are
                      approved, they will appear in this panel with date and category.
                    </p>
                  </div>
                ) : (
                  <ul className="mt-2 divide-y divide-line">
                    {announcements.map((item) => (
                      <li key={`${item.date}-${item.title}`}>
                        <Link
                          href={item.href ?? "#"}
                          className="group grid gap-3 py-4 transition-colors hover:bg-cool/60 md:grid-cols-[5.5rem_6rem_1fr_auto] md:items-center md:gap-4 md:px-2"
                        >
                          <span className="text-xs font-medium text-muted">{item.date}</span>
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-teal">
                            {item.category}
                          </span>
                          <span className="text-sm font-medium text-charcoal group-hover:text-navy">
                            {item.title}
                          </span>
                          <ArrowIcon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </div>

          <aside className="span-12 span-lg-4">
            <Reveal delay={120}>
              <div className="panel-interactive h-full bg-pale p-6 md:p-8 lg:min-h-full">
                <p className="label-upper">Project information</p>
                <h2 className="mt-2 font-serif text-2xl text-navy">
                  Institution at a Glance
                </h2>
                <dl className="mt-6 space-y-1">
                  {projectGlance.map((row) => (
                    <div
                      key={row.label}
                      className="glance-row border-b border-line py-3 last:border-0"
                    >
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium leading-snug text-charcoal">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs leading-relaxed text-muted">
                  Status and disclosures reflect planning-stage communication only.
                  Regulatory approvals are not claimed unless formally published.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
