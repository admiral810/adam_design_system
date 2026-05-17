// ProjectCard.jsx — Reusable project card component

function ProjectCard({ tag, title, desc, link, accent, hasImage }) {
  const [hovered, setHovered] = React.useState(false);

  if (accent) {
    return (
      <div
        style={{
          background: "var(--color-navy-800)",
          borderRadius: "var(--radius-lg)",
          padding: "28px",
          boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow-sm)",
          transition: "box-shadow 300ms ease-out",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: 200,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate-300)", marginBottom: 10 }}>{tag}</p>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, lineHeight: 1.25, color: "var(--color-cream-50)", marginBottom: 10 }}>{title}</h3>
          {desc && <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "oklch(78% 0.035 240)", marginBottom: 20 }}>{desc}</p>}
        </div>
        <a href={link} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-coral-400)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
          Read the essay <span style={{ transition: "transform 150ms ease-out", display: "inline-block", transform: hovered ? "translateX(3px)" : "translateX(0)" }}>→</span>
        </a>
      </div>
    );
  }

  if (hasImage) {
    return (
      <div
        style={{
          background: "var(--color-cream-50)",
          borderRadius: "var(--radius-lg)",
          boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
          transition: "box-shadow 300ms ease-out",
          overflow: "hidden",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image placeholder */}
        <div style={{
          height: 140, background: "var(--color-slate-100)",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: "1px solid var(--border-subtle)",
          overflow: "hidden",
        }}>
          {/* Stripe decoration as placeholder */}
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
            {[
              { color: "oklch(92% 0.02 236)", flex: 2 },
              { color: "oklch(80% 0.04 237)", flex: 1 },
              { color: "oklch(92% 0.02 236)", flex: 1.5 },
              { color: "oklch(68% 0.055 238)", flex: 1 },
            ].map((s, i) => <div key={i} style={{ background: s.color, flex: s.flex }} />)}
          </div>
        </div>
        <div style={{ padding: "20px 24px 24px" }}>
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 8 }}>{tag}</p>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, lineHeight: 1.25, color: "var(--fg-primary)", marginBottom: 8 }}>{title}</h3>
          {desc && <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--fg-secondary)", marginBottom: 16 }}>{desc}</p>}
          <a href={link} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--accent-primary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
            See the work <span style={{ transition: "transform 150ms ease-out", display: "inline-block", transform: hovered ? "translateX(3px)" : "translateX(0)" }}>→</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--color-cream-50)",
        borderRadius: "var(--radius-lg)",
        padding: "28px",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "box-shadow 300ms ease-out",
        border: "1px solid var(--border-subtle)",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: 190,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <p style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 10 }}>{tag}</p>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, lineHeight: 1.25, color: "var(--fg-primary)", marginBottom: 10 }}>{title}</h3>
        {desc && <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--fg-secondary)", marginBottom: 16 }}>{desc}</p>}
      </div>
      <a href={link} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--accent-primary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
        Read more <span style={{ transition: "transform 150ms ease-out", display: "inline-block", transform: hovered ? "translateX(3px)" : "translateX(0)" }}>→</span>
      </a>
    </div>
  );
}

Object.assign(window, { ProjectCard });
