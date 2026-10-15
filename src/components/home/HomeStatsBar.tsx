import { stats } from "@/data/site";

export function HomeStatsBar() {
  return (
    <section className="border-y border-line bg-white py-8" aria-label="Key facts">
      <div className="inst-container">
        <ul className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:divide-x md:divide-line">
          {stats.map((item) => (
            <li key={item.label} className="md:px-4">
              <p className="font-serif text-2xl font-bold text-primary md:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
