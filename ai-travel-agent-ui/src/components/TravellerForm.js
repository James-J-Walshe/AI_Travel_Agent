import React, { useState } from "react";

export default function TravellerForm({ onSubmit }) {
  const [name, setName] = useState("Jamie");
  const [seat, setSeat] = useState("aisle");
  const [notes, setNotes] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit({ name, preferences: { seat, notes } });
  };

  return (
    <form onSubmit={submit}>
      <h2>Traveller Preferences</h2>

      <div style={{ marginBottom: 10 }}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Seat preference</label>
        <select value={seat} onChange={(e) => setSeat(e.target.value)}>
          <option value="aisle">Aisle</option>
          <option value="window">Window</option>
          <option value="middle">Middle</option>
          <option value="none">No preference</option>
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Notes</label>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g., vegetarian meal" />
      </div>

      <button type="submit" className="secondary">Save Traveller</button>
    </form>
  );
}
