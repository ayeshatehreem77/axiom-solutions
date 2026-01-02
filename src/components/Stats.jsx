import React from "react";

const defaultStats = [
  { id: 1, number: "50+", label: "global brands" },
  { id: 2, number: "15+", label: "Brands launched from scratch" },
  { id: 3, number: "5+", label: "years international experience" },
  { id: 4, number: "100%", label: "Client Satisfaction" },
];

export default function Stats({ stats = defaultStats }) {
  return (
    <section className="stats" id="stats" aria-labelledby="stats-title">
      <div className="container">
        <h2 id="stats-title" className="section-title">Our Impact So Far</h2>
        <p className="section-subtitle">Numbers that speak for themselves</p>

        <div className="stats-grid" role="list" aria-label="Company statistics">
          {stats.map((s) => (
            <div className="stat-card" role="listitem" key={s.id}>
              <h3 className="stat-number" aria-label={s.label}>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
