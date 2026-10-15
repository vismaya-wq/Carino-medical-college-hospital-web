"use client";

import { Reveal } from "@/components/motion/Reveal";
import { nmcDisclosureRows } from "@/data/site";

export function NmcDisclosuresSection() {
  return (
    <section id="nmc-disclosures" className="section-block bg-cool scroll-mt-28">
      <div className="inst-container py-12 md:py-16">
        <Reveal>
          <div className="section-block__header">
            <p className="label-upper">Public information</p>
            <h2 className="section-block__title">NMC-oriented disclosures</h2>
            <p className="section-block__lead">
              This panel is structured for regulatory and public disclosure requirements.
              Values below are placeholders until officially verified and published. This
              site does not claim NMC recognition or operational approval.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="panel-interactive overflow-hidden border border-line bg-clinical">
            <table className="nmc-table w-full text-left">
              <thead>
                <tr>
                  <th scope="col">Disclosure item</th>
                  <th scope="col">Status / information</th>
                </tr>
              </thead>
              <tbody>
                {nmcDisclosureRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
