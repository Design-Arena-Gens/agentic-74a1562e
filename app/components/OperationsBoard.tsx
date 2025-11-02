"use client";

import { useMemo, useState } from "react";
import { trains } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

const statusOptions = ["All", "On Time", "Delayed", "Maintenance"] as const;

type StatusFilter = (typeof statusOptions)[number];

const statusStyles: Record<string, string> = {
  "On Time": "status-chip status-on-time",
  Delayed: "status-chip status-delayed",
  Maintenance: "status-chip status-maintenance"
};

export function OperationsBoard({ isActive }: SectionProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const filtered = useMemo(() => {
    if (statusFilter === "All") return trains;
    return trains.filter((train) => train.status === statusFilter);
  }, [statusFilter]);

  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="operations">
      <article className="card" style={{ display: "grid", gap: "1.4rem" }}>
        <header className="section-title">
          <div>
            Train operations
            <span>{filtered.length} active services</span>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {statusOptions.map((option) => (
              <button
                key={option}
                className="btn-secondary"
                style={{
                  backgroundColor: statusFilter === option ? "#1258e3" : undefined,
                  color: statusFilter === option ? "#fff" : undefined
                }}
                onClick={() => setStatusFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </header>
        <div className="responsive-table">
          <table className="table" aria-label="Train roster">
            <thead>
              <tr>
                <th>Service</th>
                <th>Route</th>
                <th>Depart</th>
                <th>Arrive</th>
                <th>Status</th>
                <th>Occupancy</th>
                <th>ETA Δ</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((train) => (
                <tr key={train.id}>
                  <td>
                    <strong>{train.id}</strong>
                    <br />
                    <span style={{ color: "rgba(13, 28, 46, 0.55)", fontSize: "0.8rem" }}>{train.name}</span>
                  </td>
                  <td>{train.route}</td>
                  <td>{train.departure}</td>
                  <td>{train.arrival}</td>
                  <td>
                    <span className={statusStyles[train.status]}>
                      <span aria-hidden>•</span>
                      {train.status}
                    </span>
                  </td>
                  <td>{train.occupancy}%</td>
                  <td style={{ color: train.etaDelta > 0 ? "#b9480d" : "#06703f" }}>
                    {train.etaDelta > 0 ? "+" : ""}
                    {train.etaDelta} min
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
