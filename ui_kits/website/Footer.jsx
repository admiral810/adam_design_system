// Footer.jsx — Site footer component

function Footer() {
  function navigate(page) {
    window.__setPage(page);
  }

  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--color-navy-900)",
      padding: "56px 32px",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 40,
        alignItems: "start",
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)",
            fontWeight: 700, color: "var(--color-cream-50)",
            marginBottom: 10,
          }}>
            Adam
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--color-coral-400)", marginLeft: 2 }}>.</span>
          </div>
          <p style={{
            fontSize: "var(--text-sm)", lineHeight: 1.65,
            color: "oklch(60% 0.055 241)",
            maxWidth: 260,
          }}>
            Designer and engineer, building things slowly and with care.
          </p>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(46% 0.065 241)", marginBottom: 4 }}>Pages</p>
          {[["home", "Home"], ["work", "Work"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)} style={{
              background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left",
              fontSize: "var(--text-sm)", color: "oklch(78% 0.035 240)",
              transition: "color 150ms ease-out",
            }}
              onMouseOver={e => e.currentTarget.style.color = "var(--color-cream-50)"}
              onMouseOut={e => e.currentTarget.style.color = "oklch(78% 0.035 240)"}
            >{label}</button>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(46% 0.065 241)", marginBottom: 4 }}>Elsewhere</p>
          {["GitHub", "LinkedIn", "Are.na", "Read.cv"].map(link => (
            <a key={link} href="#" style={{
              fontSize: "var(--text-sm)", color: "oklch(78% 0.035 240)",
              textDecoration: "none", transition: "color 150ms ease-out",
            }}
              onMouseOver={e => e.currentTarget.style.color = "var(--color-cream-50)"}
              onMouseOut={e => e.currentTarget.style.color = "oklch(78% 0.035 240)"}
            >{link}</a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1100, margin: "40px auto 0",
        paddingTop: 24, borderTop: "1px solid oklch(22% 0.065 245)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ fontSize: "var(--text-xs)", color: "oklch(46% 0.065 241)" }}>© {year} Adam. All rights reserved.</p>
        <p style={{ fontSize: "var(--text-xs)", color: "oklch(46% 0.065 241)", fontStyle: "italic" }}>Brooklyn, NY</p>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
