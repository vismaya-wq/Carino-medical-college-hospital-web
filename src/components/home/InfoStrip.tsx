"use client";

import { institutionalStrip } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function InfoStrip() {
  return (
    <section className="info-strip-navy" aria-label="Institutional focus areas" id="focus-areas">
      <div className="inst-container py-8 md:py-10">
        <Reveal>
          <div className="grid gap-0 divide-y divide-white/15 md:grid-cols-4 md:divide-x md:divide-y-0">
            {institutionalStrip.map((item, index) => (
              <article key={item.title} className="info-strip-cell">
                <p
                  className="text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: "var(--teal-bright)" }}
                >
                  0{index + 1}
                </p>
                <h2
                  className="mt-2 font-serif text-lg leading-snug"
                  style={{ color: "#fff" }}
                >
                  {item.title}
                </h2>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
