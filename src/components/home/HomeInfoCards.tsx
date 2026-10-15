import Link from "next/link";
import { serviceCards, site } from "@/data/site";

function ServiceIcon({ type }: { type: "pin" | "info" | "phone" }) {
  const paths = {
    pin: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
    info: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    phone:
      "M6.6 10.8c1.5 3.1 3.9 5.5 7 7l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4 .8.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.9 21.2 2.8 13.1 2.8 3.2 2.8 2.5 3.3 2 4 2h3.5c.7 0 1.2.5 1.2 1.2 0 1.3.3 2.7.8 4 .1.4 0 .9-.2 1.2L6.6 10.8z",
  };
  const colors = {
    pin: "bg-primary-light text-primary",
    info: "bg-[#e8f6f4] text-teal",
    phone: "bg-[#fdecea] text-[#c0392b]",
  };
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors[type]}`}
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d={paths[type]} />
      </svg>
    </span>
  );
}

export function HomeInfoCards() {
  return (
    <section className="bg-white py-14 md:py-16" aria-labelledby="services-title">
      <div className="inst-container">
        <h2 id="services-title" className="text-center font-serif text-3xl font-bold text-navy">
          Quick information
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Essential details about the {site.trustName} proposal.
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <li key={card.title}>
              <article
                className={`flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm ${card.accent} border-t-4`}
              >
                <ServiceIcon type={card.icon} />
                <h3 className="mt-4 font-serif text-xl font-bold text-navy">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
                <Link
                  href={card.href}
                  className="mt-4 text-sm font-bold text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
