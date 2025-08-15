import React, { useMemo, useState } from "react";

export default function BookingForm({ trip, onSubmit }) {
  const defaultId = useMemo(() => trip?.id ?? trip?.option_id ?? 1, [trip]);
  const [option_id, setOptionId] = useState(defaultId);
  const [notes, setNotes] = useState("please add seat selection");

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit({ option_id: Number(option_id), notes });
  };

  return (
    <form onSubmit={submit}>
      <h2>Book Selected Trip</h2>

      <div style={{ marginBottom: 10 }}>
        <label>Option ID</label>
        <input type="number" min="1" value={option_id} onChange={(e) => setOptionId(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Notes</label>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      <button type="submit">Book Trip</button>
    </form>
  );
}
