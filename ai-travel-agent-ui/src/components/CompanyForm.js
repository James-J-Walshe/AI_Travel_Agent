import React, { useState } from "react";

export default function CompanyForm({ onSubmit }) {
  const [company_name, setCompanyName] = useState("Example Corp");
  const [policy, setPolicy] = useState("No weekend travel");

  const submit = async (e) => {
    e.preventDefault();
    await onSubmit({ name: company_name, policy });
  };

  return (
    <form onSubmit={submit}>
      <h2>Company Policy</h2>
      <div style={{ marginBottom: 10 }}>
        <label>Company name</label>
        <input value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Policy (short)</label>
        <textarea rows={3} value={policy} onChange={(e) => setPolicy(e.target.value)} />
      </div>

      <button type="submit">Save Policy</button>
    </form>
  );
}
