"use client";

import { Reveal } from "@/components/motion/Reveal";
import { educationFlow } from "@/data/site";

export function EducationFlowSection() {
  return (
    <section className="border-y border-line bg-cool py-12 md:py-16">
      <div className="inst-container">
        <div className="inst-grid items-start">
          <div className="span-12 span-lg-4">
            <Reveal>
              <p className="label-upper">Conceptual framework</p>
              <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                Education connected to healthcare
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A relational model for the proposed institution—not an operational
                workflow claim. Clinical training is envisioned as the bridge between
                classroom medicine and community care.
              </p>
            </Reveal>
          </div>
          <div className="span-12 span-lg-8">
            <div className="grid gap-4 md:grid-cols-3">
              {educationFlow.map((item, index) => (
                <Reveal key={item.step} delay={index * 100}>
                  <div className="flow-step relative h-full">
                    {index < educationFlow.length - 1 ? (
                      <span
                        className="absolute right-[-0.65rem] top-1/2 z-10 hidden h-px w-5 bg-teal md:block"
                        aria-hidden
                      />
                    ) : null}
                    <div className="flex h-8 w-8 items-center justify-center border border-teal text-xs font-bold text-teal">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-navy">{item.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
