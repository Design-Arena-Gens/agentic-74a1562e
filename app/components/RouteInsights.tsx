import { routes } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

export function RouteInsights({ isActive }: SectionProps) {
  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="dashboard">
      <article className="card" style={{ display: "grid", gap: "1.1rem" }}>
        <header className="section-title">
          <div>
            Route performance
            <span>Core international corridors</span>
          </div>
          <button className="btn-secondary">Download CSV</button>
        </header>
        <div className="responsive-table">
          <table className="table" aria-label="Route performance">
            <thead>
              <tr>
                <th>Route</th>
                <th>Duration</th>
                <th>Frequency</th>
                <th>Punctuality</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>
                    <strong>
                      {route.origin} → {route.destination}
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.8rem", color: "rgba(13, 28, 46, 0.55)" }}>#{route.id}</span>
                  </td>
                  <td>{route.duration}</td>
                  <td>{route.frequency}</td>
                  <td>
                    <span className="tag" style={{ backgroundColor: "rgba(26, 165, 121, 0.14)", color: "#1aa579" }}>
                      {route.punctualityRate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
