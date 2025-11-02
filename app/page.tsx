"use client";

import { useEffect, useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { KpiHighlights } from "./components/KpiHighlights";
import { OperationsBoard } from "./components/OperationsBoard";
import { DispatchTimeline } from "./components/DispatchTimeline";
import { JourneyPlanner } from "./components/JourneyPlanner";
import { StaffRoster } from "./components/StaffRoster";
import { AlertCenter } from "./components/AlertCenter";
import { RouteInsights } from "./components/RouteInsights";
import { TrainPlannerForm } from "./components/TrainPlannerForm";
import { type SectionKey } from "@/lib/sections";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("dashboard");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="mobile-shell">
      <header className="header">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="badge" style={{ background: "linear-gradient(135deg, #246bfd, #1aa579)" }}>RN</div>
            <div>
              <strong style={{ fontSize: "1.1rem" }}>Railway Nexus</strong>
              <div style={{ fontSize: "0.8rem", color: "rgba(13, 28, 46, 0.55)" }}>Unified train management suite</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <button className="btn-secondary">Sync field tablets</button>
            <button className="btn-primary" style={{ paddingInline: "1rem" }}>Go live</button>
          </div>
        </div>
      </header>
      <main className="container main-content">
        <KpiHighlights isActive={isDesktop || activeSection === "dashboard"} />
        <AlertCenter isActive={isDesktop || activeSection === "dashboard"} />
        <RouteInsights isActive={isDesktop || activeSection === "dashboard"} />

        <OperationsBoard isActive={isDesktop || activeSection === "operations"} />
        <TrainPlannerForm isActive={isDesktop || activeSection === "operations"} />
        <DispatchTimeline isActive={isDesktop || activeSection === "operations"} />

        <JourneyPlanner isActive={isDesktop || activeSection === "journeys"} />

        <StaffRoster isActive={isDesktop || activeSection === "staff"} />
      </main>
      <MobileNav active={activeSection} onChange={setActiveSection} />
    </div>
  );
}
