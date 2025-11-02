"use client";

import { metrics } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

const kpis = [
  {
    label: "Network punctuality",
    value: `${metrics.punctuality}%`,
    accent: "#246bfd",
    trend: "+2.4% vs last week"
  },
  {
    label: "Daily riders",
    value: metrics.dailyRides.toLocaleString(),
    accent: "#1aa579",
    trend: "+8 400 today"
  },
  {
    label: "CO₂ saved",
    value: `${metrics.co2Savings} t`,
    accent: "#8d3bff",
    trend: "Equivalent to 520 cars"
  },
  {
    label: "Passenger satisfaction",
    value: `${metrics.satisfaction.toFixed(1)}/5`,
    accent: "#f5a524",
    trend: "+0.2 this month"
  }
];

export function KpiHighlights({ isActive }: SectionProps) {
  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="dashboard">
      <div className="grid grid-2">
        <div className="card hero">
          <div>
            <div className="tag">
              <span role="img" aria-label="satellite">🛰️</span>
              Real-time Control Center
            </div>
            <h1>Rail operations at your fingertips</h1>
            <p>
              Monitor performance, dispatch trains, coordinate staff, and keep passengers informed
              from a single responsive workspace optimised for control rooms and field tablets.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <button className="btn-primary">
                Launch Live Ops
                <span aria-hidden>→</span>
              </button>
              <button className="btn-secondary">Share Mobile View</button>
            </div>
          </div>
          <figure className="hero-visual" aria-label="Operational snapshot">
            <h2>Critical stream</h2>
            <ul>
              <li>
                <span className="icon">🚦</span>
                12 active signals in manual override — safe mode engaged
              </li>
              <li>
                <span className="icon">🛠️</span>
                4 maintenance teams on-site • 18 tasks queued for tonight
              </li>
              <li>
                <span className="icon">📡</span>
                IoT health nominal • 98.6% sensor coverage
              </li>
            </ul>
          </figure>
        </div>
        <div className="grid" style={{ gap: "1.25rem" }}>
          {kpis.map((item) => (
            <article key={item.label} className="card" style={{ display: "grid", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag" style={{ backgroundColor: `${item.accent}15`, color: item.accent }}>
                  {item.label}
                </span>
                <div
                  className="badge"
                  style={{ background: `linear-gradient(135deg, ${item.accent}, ${item.accent}bb)` }}
                >
                  •
                </div>
              </div>
              <strong style={{ fontSize: "2rem" }}>{item.value}</strong>
              <span style={{ color: "rgba(13, 28, 46, 0.55)", fontSize: "0.85rem" }}>{item.trend}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
