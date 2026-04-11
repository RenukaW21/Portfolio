"use client";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }} className="w-full py-10">
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>Thank you ✦</p>
        <div style={{ display: "flex", gap: 28 }}>
          {["Resume","GitHub","LinkedIn","Instagram"].map((l) => (
            <a key={l} href="#" style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#002DFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--muted)" }}>© 2025 Renuka. All rights reserved.</p>
      </div>
    </footer>
  );
}
