"use client";

import { useMemo, useState } from "react";
import { journeys } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

export function JourneyPlanner({ isActive }: SectionProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return journeys;
    return journeys.filter((journey) =>
      [journey.title, ...journey.segments.map((s) => s.leg)].some((value) => value.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="journeys">
      <article className="card" style={{ display: "grid", gap: "1.2rem" }}>
        <header className="section-title">
          <div>
            Journey planner
            <span>Recommend best-fit itineraries</span>
          </div>
          <div style={{ position: "relative", width: "min(320px, 100%)" }}>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search route, leg, station..."
              style={{
                width: "100%",
                padding: "0.75rem 2.5rem 0.75rem 0.95rem",
                borderRadius: "12px",
                border: "1px solid rgba(13, 28, 46, 0.15)",
                fontSize: "0.95rem"
              }}
            />
            <span
              aria-hidden
              style={{ position: "absolute", right: "0.95rem", top: "50%", transform: "translateY(-50%)", opacity: 0.45 }}
            >
              🔍
            </span>
          </div>
        </header>
        <div className="grid" style={{ gap: "1rem" }}>
          {filtered.map((journey) => (
            <article key={journey.id} className="card" style={{ backgroundColor: "rgba(17, 40, 65, 0.04)", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <strong style={{ fontSize: "1.1rem" }}>{journey.title}</strong>
                  <div style={{ color: "rgba(13, 28, 46, 0.55)", fontSize: "0.85rem" }}>{journey.totalDuration}</div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span className="tag">Occupancy {journey.occupancy}</span>
                  <span className="tag" style={{ backgroundColor: "rgba(18, 88, 227, 0.12)", color: "#1258e3" }}>
                    {journey.price}
                  </span>
                  <button className="btn-primary" style={{ padding: "0.6rem 1.05rem" }}>Book slot</button>
                </div>
              </div>
              <div className="timeline" style={{ gap: "0.75rem" }}>
                {journey.segments.map((segment) => (
                  <div key={segment.leg} className="timeline-entry" style={{ gap: "0.2rem" }}>
                    <strong>{segment.leg}</strong>
                    <span>
                      Depart {segment.depart} • Arrive {segment.arrive} • Platform {segment.platform}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
          {!filtered.length && (
            <div style={{ textAlign: "center", padding: "2rem", color: "rgba(13, 28, 46, 0.55)" }}>
              No journeys match “{query}” yet.
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
