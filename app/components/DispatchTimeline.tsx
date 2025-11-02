import type { SectionProps } from "@/lib/sections";

const timeline = [
  {
    title: "Crew rotation complete",
    subtitle: "Aurora Express, Berlin",
    time: "2 minutes ago",
    actor: "Ops Bot"
  },
  {
    title: "Signal override cleared",
    subtitle: "Sector H7, Hamburg",
    time: "6 minutes ago",
    actor: "S. Chandra"
  },
  {
    title: "Live ETA broadcast",
    subtitle: "Lisbon commuter line",
    time: "12 minutes ago",
    actor: "Passenger API"
  },
  {
    title: "Maintenance triage",
    subtitle: "Depot 4 scheduling",
    time: "25 minutes ago",
    actor: "Kenji Watanabe"
  }
];

export function DispatchTimeline({ isActive }: SectionProps) {
  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="operations">
      <article className="card" style={{ display: "grid", gap: "1.2rem" }}>
        <header className="section-title">
          <div>
            Control timeline
            <span>Most recent automations</span>
          </div>
          <button className="btn-secondary">View all</button>
        </header>
        <div className="timeline" role="list">
          {timeline.map((entry) => (
            <div key={entry.title} className="timeline-entry" role="listitem">
              <strong>{entry.title}</strong>
              <span>{entry.subtitle}</span>
              <span style={{ color: "rgba(13, 28, 46, 0.55)", fontSize: "0.78rem" }}>
                {entry.time} • {entry.actor}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
