"use client";

import type { SectionKey } from "@/lib/sections";

const items: Array<{ key: SectionKey; label: string; icon: string }> = [
  { key: "dashboard", label: "Overview", icon: "📊" },
  { key: "operations", label: "Ops", icon: "🚆" },
  { key: "journeys", label: "Journeys", icon: "🧭" },
  { key: "staff", label: "Teams", icon: "👥" }
];

interface Props {
  active: SectionKey;
  onChange: (section: SectionKey) => void;
}

export function MobileNav({ active, onChange }: Props) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => (
        <button
          key={item.key}
          className={item.key === active ? "active" : undefined}
          onClick={() => onChange(item.key)}
          type="button"
        >
          <span aria-hidden>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
