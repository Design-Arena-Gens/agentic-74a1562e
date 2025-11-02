import { staff } from "@/lib/data";
import type { SectionProps } from "@/lib/sections";

export function StaffRoster({ isActive }: SectionProps) {
  return (
    <section className={`section-block ${isActive ? "active" : ""}`} data-section="staff">
      <article className="card" style={{ display: "grid", gap: "1.2rem" }}>
        <header className="section-title">
          <div>
            Crew roster
            <span>Live handovers & assignments</span>
          </div>
          <button className="btn-secondary">Broadcast update</button>
        </header>
        <div className="grid" style={{ gap: "1rem" }}>
          {staff.map((member) => (
            <div key={member.id} className="card" style={{ display: "grid", gap: "0.55rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>{member.name}</strong>
                  <div style={{ color: "rgba(13, 28, 46, 0.55)", fontSize: "0.85rem" }}>{member.role}</div>
                </div>
                <span className="tag">#{member.id}</span>
              </div>
              <div style={{ fontSize: "0.9rem" }}>{member.shift}</div>
              <div style={{ fontSize: "0.85rem", color: "rgba(13, 28, 46, 0.55)" }}>{member.contact}</div>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <button className="btn-secondary" style={{ flex: 1, justifyContent: "center" }}>
                  Call
                </button>
                <button
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", paddingInline: "0" }}
                >
                  Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
