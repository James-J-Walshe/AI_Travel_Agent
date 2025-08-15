import React from "react";

export default function SearchResults({ results = [], onSelect }) {
  if (!results.length) {
    return <div className="small" style={{ marginTop: 8 }}>No results yet — click “Search Trips”.</div>;
  }

  return (
    <div style={{ marginTop: 12 }}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <strong>{results.length} option(s) found</strong>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
        {results.map((r) => (
          <div key={r.id} className="card" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700 }}>Option #{r.id}</div>
                <div className="small">{r.summary || r.destination || "Trip option"} {r.price ? ` — $${r.price}` : ""}</div>
              </div>
              <button className="ghost" onClick={() => onSelect(r)}>Select</button>
            </div>

            <pre style={{ marginTop: 10 }}>{JSON.stringify(r, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
