// Hero.jsx — Homepage hero section

function Hero() {
  function navigate(page) {
    window.__setPage(page);
  }

  return (
    <section style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: "100px 32px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center",
    }}>
      {/* Left: text */}
      <div>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)", fontWeight: 500,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--fg-muted)", marginBottom: 20,
        }}>
          Designer &amp; engineer · Brooklyn, NY
        </p>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          fontWeight: 700, lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--fg-primary)",
          marginBottom: 12,
        }}>
          Thoughtful work,
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--color-coral-600)" }}>
            quietly made.
          </em>
        </h1>

        <p style={{
          fontSize: "var(--text-md)", fontWeight: 300, lineHeight: 1.75,
          color: "var(--fg-secondary)",
          maxWidth: 440, marginBottom: 40,
        }}>
          I design and build products that feel calm and considered — at the intersection of craft and function.
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={() => navigate("work")}
            style={{
              fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
              padding: "11px 24px", borderRadius: "var(--radius-sm)",
              background: "var(--color-navy-800)", color: "var(--color-cream-50)",
              border: "none", cursor: "pointer",
              transition: "background 150ms ease-out",
            }}
            onMouseOver={e => e.currentTarget.style.background = "var(--color-navy-900)"}
            onMouseOut={e => e.currentTarget.style.background = "var(--color-navy-800)"}
          >
            See the work
          </button>
          <button
            onClick={() => navigate("about")}
            style={{
              fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 400,
              padding: "11px 20px", borderRadius: "var(--radius-sm)",
              background: "transparent", color: "var(--fg-secondary)",
              border: "1.5px solid var(--border-default)", cursor: "pointer",
              transition: "all 150ms ease-out",
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "var(--fg-primary)"; e.currentTarget.style.color = "var(--fg-primary)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.color = "var(--fg-secondary)"; }}
          >
            About me
          </button>
        </div>
      </div>

      {/* Right: decorative stripe composition */}
      <div style={{
        display: "flex", flexDirection: "column", gap: 10,
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
        height: 320,
      }}>
        {[
          { color: "oklch(95% 0.022 80)", flex: 2 },
          { color: "oklch(73% 0.09 22)", flex: 1.2 },
          { color: "oklch(95% 0.022 80)", flex: 1.5 },
          { color: "oklch(68% 0.055 238)", flex: 1 },
          { color: "oklch(95% 0.022 80)", flex: 2 },
          { color: "oklch(67% 0.1 67)", flex: 1.2 },
          { color: "oklch(95% 0.022 80)", flex: 1 },
          { color: "oklch(30% 0.072 243)", flex: 2 },
        ].map((stripe, i) => (
          <div key={i} style={{
            background: stripe.color,
            flex: stripe.flex,
            width: "100%",
          }} />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
