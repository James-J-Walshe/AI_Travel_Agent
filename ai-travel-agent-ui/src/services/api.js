// src/services/api.js
const BASE =
  process.env.REACT_APP_API_BASE_URL && process.env.REACT_APP_API_BASE_URL.trim().length
    ? process.env.REACT_APP_API_BASE_URL.replace(/\/+$/, "")
    : ""; // empty uses CRA proxy

async function http(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await res.json() : await res.text();
  if (!res.ok) {
    const msg = isJson ? JSON.stringify(data) : String(data);
    throw new Error(`HTTP ${res.status}: ${msg}`);
  }
  return data;
}

export const health = () => http("/", { method: "GET" });
export const setCompanyPolicy = (payload) => http("/company", { method: "POST", body: JSON.stringify(payload) });
export const setTraveller = (payload) => http("/traveller", { method: "POST", body: JSON.stringify(payload) });
export const searchTrips = () => http("/search", { method: "GET" });
export const bookTrip = (payload) => http("/book", { method: "POST", body: JSON.stringify(payload) });

