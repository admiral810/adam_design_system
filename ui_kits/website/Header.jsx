// Header.jsx — Navigation header component

const { useState } = React;

function Header({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  function navigate(page) {
    window.__setPage(page);
    setMenuOpen(false);
  }

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "oklch(95% 0.022 80 / 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60,
      }}>
        {/* Wordmark */}
        <button
          onClick={() => navigate("home")}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)",
            fontWeight: 700, letterSpacing: "-0.01em",
            color: "var(--fg-primary)",
          }}
        >
          Adam
          <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--color-coral-600)", marginLeft: 2 }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 400,
                padding: "6px 12px", borderRadius: "var(--radius-sm)",
                color: activePage === item.id ? "var(--fg-primary)" : "var(--fg-secondary)",
                background: activePage === item.id ? "var(--color-cream-200)" : "transparent",
                transition: "all 150ms ease-out",
              }}
              onMouseOver={e => { if (activePage !== item.id) e.currentTarget.style.color = "var(--fg-primary)"; }}
              onMouseOut={e => { if (activePage !== item.id) e.currentTarget.style.color = "var(--fg-secondary)"; }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("contact")}
            style={{
              marginLeft: 8,
              fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
              padding: "7px 16px", borderRadius: "var(--radius-sm)",
              background: "var(--color-navy-800)", color: "var(--color-cream-50)",
              border: "none", cursor: "pointer",
              transition: "background 150ms ease-out",
            }}
            onMouseOver={e => e.currentTarget.style.background = "var(--color-navy-900)"}
            onMouseOut={e => e.currentTarget.style.background = "var(--color-navy-800)"}
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
