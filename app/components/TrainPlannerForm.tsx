"use client";

import { type CSSProperties, FormEvent, useState } from "react";
import type { SectionProps } from "@/lib/sections";

interface DraftTrain {
  name: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  fleet: string;
}

const initialDraft: DraftTrain = {
  name: "",
  origin: "",
  destination: "",
  departure: "",
  arrival: "",
  fleet: ""
};

export function TrainPlannerForm({ isActive }: SectionProps) {
  const [draft, setDraft] = useState<DraftTrain>(initialDraft);
  const [submitted, setSubmitted] = useState<DraftTrain | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(draft);
    setDraft(initialDraft);
  };

  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="operations">
      <article className="card" style={{ display: "grid", gap: "1.2rem" }}>
        <header className="section-title">
          <div>
            Create service plan
            <span>Prototype and dispatch a new train</span>
          </div>
        </header>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "1rem"
          }}
        >
          <div className="grid grid-2" style={{ gap: "1rem" }}>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Service name</span>
              <input
                required
                value={draft.name}
                onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Aurora Express"
                style={inputStyle}
              />
            </label>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Fleet ID</span>
              <input
                value={draft.fleet}
                onChange={(e) => setDraft((prev) => ({ ...prev, fleet: e.target.value }))}
                placeholder="ICE-900"
                style={inputStyle}
              />
            </label>
          </div>
          <div className="grid grid-2" style={{ gap: "1rem" }}>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Origin</span>
              <input
                required
                value={draft.origin}
                onChange={(e) => setDraft((prev) => ({ ...prev, origin: e.target.value }))}
                placeholder="Berlin"
                style={inputStyle}
              />
            </label>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Destination</span>
              <input
                required
                value={draft.destination}
                onChange={(e) => setDraft((prev) => ({ ...prev, destination: e.target.value }))}
                placeholder="Munich"
                style={inputStyle}
              />
            </label>
          </div>
          <div className="grid grid-2" style={{ gap: "1rem" }}>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Departure</span>
              <input
                required
                type="time"
                value={draft.departure}
                onChange={(e) => setDraft((prev) => ({ ...prev, departure: e.target.value }))}
                style={inputStyle}
              />
            </label>
            <label style={{ display: "grid", gap: "0.35rem" }}>
              <span>Arrival</span>
              <input
                required
                type="time"
                value={draft.arrival}
                onChange={(e) => setDraft((prev) => ({ ...prev, arrival: e.target.value }))}
                style={inputStyle}
              />
            </label>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button type="submit" className="btn-primary">
              Stage service
            </button>
            <button type="reset" className="btn-secondary" onClick={() => setDraft(initialDraft)}>
              Reset form
            </button>
          </div>
        </form>
        {submitted && (
          <div className="card" style={{ backgroundColor: "rgba(17, 40, 65, 0.04)", gap: "0.75rem" }}>
            <div className="panel-title">Preview submitted service</div>
            <div style={{ display: "grid", gap: "0.35rem", fontSize: "0.9rem" }}>
              <span>
                <strong>{submitted.name || "Unnamed"}</strong> {submitted.fleet && `• ${submitted.fleet}`}
              </span>
              <span>
                {submitted.origin} → {submitted.destination}
              </span>
              <span>
                Departure {submitted.departure || "--:--"} • Arrival {submitted.arrival || "--:--"}
              </span>
            </div>
          </div>
        )}
      </article>
    </section>
  );
}

const inputStyle: CSSProperties = {
  padding: "0.7rem 0.9rem",
  borderRadius: "12px",
  border: "1px solid rgba(13, 28, 46, 0.12)",
  fontSize: "0.95rem",
  backgroundColor: "#fff"
};
