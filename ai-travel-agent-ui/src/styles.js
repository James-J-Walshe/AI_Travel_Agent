:root{
  --bg: #0b1020;
  --card: #0f1627;
  --accent: #6aa6ff;
  --muted: #8ea4c7;
  --text: #eaf0ff;
  --border: #22304d;
}

*{box-sizing:border-box}
body{
  margin:0;
  background:linear-gradient(180deg,#071022 0%, #0b1020 100%);
  color:var(--text);
  font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

.container{
  max-width:1100px;
  margin:28px auto;
  padding:0 16px;
}

.card{
  background:linear-gradient(180deg,#0c1424 0%, #0f1627 100%);
  border:1px solid var(--border);
  border-radius:12px;
  padding:16px;
  box-shadow:0 8px 20px rgba(0,0,0,0.25);
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-bottom:12px;
}

h1{margin:0;font-size:20px}
h2{margin:0 0 8px 0;font-size:16px}

.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
.col-6{grid-column:span 6}
.col-12{grid-column:span 12}

label{display:block;font-size:12px;color:var(--muted);margin-bottom:6px}
input,textarea,select{
  width:100%;
  padding:10px 12px;
  background:#071125;
  color:var(--text);
  border:1px solid var(--border);
  border-radius:8px;
  outline:none;
}
button{
  background:linear-gradient(180deg,var(--accent) 0%, #3e7fe0 100%);
  color:#fff;border:0;padding:10px 14px;border-radius:999px;cursor:pointer;font-weight:600;
}
button.secondary{background:linear-gradient(180deg,#55d3b9 0%, #2ea78f 100%)}
button.ghost{background:transparent;border:1px solid var(--border);color:var(--muted)}

.row{display:flex;gap:10px;align-items:center}
pre{background:#071125;padding:12px;border-radius:10px;border:1px solid var(--border);overflow:auto}
.small{font-size:13px;color:var(--muted)}
