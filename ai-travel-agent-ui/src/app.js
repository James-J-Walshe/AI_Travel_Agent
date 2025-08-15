import React, { useEffect, useState } from "react";
import { health, setCompanyPolicy, setTraveller, searchTrips, bookTrip } from "./services/api";
import CompanyForm from "./components/CompanyForm";
import TravellerForm from "./components/TravellerForm";
import SearchResults from "./components/SearchResults";
import BookingForm from "./components/BookingForm";

export default function App() {
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await health();
        setReady(true);
      } catch (e) {
        setError("Backend not reachable. Is Flask running on port 5000?");
      }
    })();
  }, []);

  const handleCompany = async (payload) => {
    setError(""); setBusy(true);
    try { await setCompanyPolicy(payload); } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  const handleTraveller = async (payload) => {
    setError(""); setBusy(true);
    try { await setTraveller(payload); } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  const handleSearch = async () => {
    setError(""); setBusy(true); setConfirmation(null); setSelected(null);
    try {
      const data = await searchTrips();
      const list = Array.isArray(data) ? data : data.results || [];
      setResults(list.map((r,i) => ({ id: r.id ?? i+1, ...r })));
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  const handleBook = async (payload) => {
    setError(""); setBusy(true);
    try {
      const conf = await bookTrip(payload);
      setConfirmation(conf);
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  return (
    <div className="container">
      <div className="card header" style={{ marginBottom: 16 }}>
        <div>
          <h1>AI Travel Agent</h1>
          <div className="small">{ready ? "Backend connected ✅" : "Connecting…"}</div>
        </div>
        <div className="row">
          {busy && <div className="small">Working… ⏳</div>}
        </div>
      </div>

      {error && <div className="card" style={{ marginBottom: 12, color: "#ffb3b3" }}>Error: {error}</div>}

      <div className="grid">
        <div className="col-6">
          <div className="card">
            <CompanyForm onSubmit={handleCompany} />
          </div>
        </div>

        <div className="col-6">
          <div className="card">
            <TravellerForm onSubmit={handleTraveller} />
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0 }}>Search & Results</h2>
              <button onClick={handleSearch}>Search Trips</button>
            </div>

            <SearchResults results={results} onSelect={(r) => { setSelected(r); setConfirmation(null); }} />
          </div>
        </div>

        {selected && (
          <div className="col-12">
            <div className="card">
              <BookingForm trip={selected} onSubmit={handleBook} />
            </div>
          </div>
        )}

        {confirmation && (
          <div className="col-12">
            <div className="card">
              <h2 style={{ marginTop: 0 }}>Booking Confirmed 🎉</h2>
              <pre>{JSON.stringify(confirmation, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

