import { alerts } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

const severityColor: Record<string, string> = {
  low: "rgba(18, 88, 227, 0.12)",
  medium: "rgba(245, 165, 36, 0.18)",
  high: "rgba(236, 68, 90, 0.18)"
};

export function AlertCenter({ isActive }: SectionProps) {
  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="dashboard">
      <article className="card" style={{ display: "grid", gap: "1rem" }}>
        <header className="section-title">
          <div>
            Network alerts
            <span>Synced from Ops Guard</span>
          </div>
          <button className="btn-secondary">Acknowledge all</button>
        </header>
        <div className="grid" style={{ gap: "1rem" }}>
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="card"
              style={{
                borderLeft: `4px solid ${severityColor[alert.severity] ?? "#1258e3"}`,
                backgroundColor: "rgba(17, 40, 65, 0.04)",
                gap: "0.5rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{alert.title}</strong>
                <span className="tag">{alert.category}</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(13, 28, 46, 0.55)" }}>{alert.description}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(13, 28, 46, 0.45)" }}>{alert.timestamp}</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
