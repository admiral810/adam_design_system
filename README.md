# Adam's Personal Design System

A personal brand design system for Adam — used across a personal website and potential future apps. The aesthetic is coastal, soft, chill, and approachable. Not bright or childlike. Think a Sunday morning on the porch near the water.

## Sources

- **Faherty Brand reference** (`assets/faherty-reference-logo.png`) — Faherty's "Second Wave" logo was provided as a primary mood reference. Key takeaways: warm linen/cream backgrounds, muted navy, terracotta/coral sunrise tones, refined serif typography paired with italic script, coastal without being kitschy.
- **Towel color reference** (`assets/towel-color-reference.jpg`) — A striped woven blanket showing the raw color palette: salmon/peach, light slate blue, warm amber/ochre, deeper navy — all on cream. Colors are desaturated and soft. Bias toward fewer colors than the towel; Faherty is the better North Star.
- **GitHub repo:** `admiral810/adam-personal-design` (currently a stub — only contains this README placeholder).

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Person:** First-person singular ("I built this", "I'm working on…") — personal, direct, never corporate.
- **Register:** Conversational and warm, but not casual to the point of slang. Think: a thoughtful friend who happens to be good at what they do.
- **Energy:** Calm and confident. No exclamation points unless genuinely excited. No filler words ("really", "very", "basically").
- **Casing:** Sentence case everywhere — headers, buttons, nav labels. Never all-caps for body text.
- **Emoji:** Not used. The aesthetic is too refined for emoji in UI.
- **Punctuation:** Oxford comma. Em-dashes for asides. Ellipses used sparingly for trailing thoughts.
- **Length:** Concise. Favor short paragraphs and breathing room over dense walls of text.

### Example copy patterns
- ✅ "I'm a designer and engineer based in Brooklyn."
- ✅ "Here's some of what I've been working on."
- ✅ "Let's talk — I'd love to hear about your project."
- ❌ "Welcome to my amazing portfolio! Check out my work!!"
- ❌ "CONTACT ME"

---

## VISUAL FOUNDATIONS

### Color
- **Background:** Warm linen/cream (`--cream: oklch(95% 0.02 80)`) — never pure white. The baseline is always slightly warm.
- **Primary navy:** A muted, deep coastal blue (`--navy: oklch(35% 0.07 240)`) — used for headings, key UI chrome.
- **Accent coral/terracotta:** Soft coral, not orange (`--coral: oklch(62% 0.1 30)`) — used for accents, highlights, sunrise moments.
- **Salmon/peach:** Lighter than coral, from the towel stripe (`--salmon: oklch(74% 0.09 25)`).
- **Slate blue:** Cool, airy, mid-weight blue (`--slate: oklch(72% 0.05 240)`) — for secondary elements.
- **Amber/ochre:** Warm earthy gold (`--amber: oklch(64% 0.1 70)`) — used sparingly as a tertiary accent.
- **Neutrals:** Warm greys derived from the cream base, never cool grey.

### Typography
- **Display/Serif:** A classic serif (Georgia / similar) for headings — refined, readable, coastal editorial feel. Ideal: a humanist serif like Lora or Playfair Display.
- **Body:** A humanist sans-serif — comfortable at long reads, not sterile. Ideal: Source Serif Pro or similar warm sans.
- **Mono:** Used only for code. A narrow, clean monospace.
- **Scale:** Generous line-height (1.6–1.75 body). Headings tighter (1.1–1.2). Letter-spacing slightly open on uppercase labels.
- **Weight:** 300–400 for body, 600–700 for headings. Italic used for elegance (subheadings, captions, pull quotes).

### Backgrounds & Texture
- Always warm — cream/linen base. No pure whites, no cold greys.
- Subtle paper/linen texture encouraged (low-opacity noise or grain).
- No aggressive gradients. Gentle washes of color as section dividers (e.g. soft salmon panel behind a testimonial).
- Full-bleed photography welcome when imagery is warm-toned, soft, natural.

### Spacing & Layout
- Generous whitespace. Breathing room is a design value, not an afterthought.
- Max content width: ~780px for text, ~1100px for page. Never edge-to-edge text.
- Sections separated by ample vertical space (80–120px).
- Grid: typically 12-col or simple 2-col at desktop, single col on mobile.

### Animation & Motion
- Subtle. Fade-ins on scroll (opacity 0→1), gentle translate-Y (20px→0).
- Duration: 400–600ms. Easing: ease-out or cubic-bezier soft ease.
- No bounces, no spring physics, no playful motion.
- Hover states: gentle opacity shift (→0.7) or subtle color darken. Never scale or jump.
- Press states: slight darken, no scale.

### Borders, Shadows & Radii
- Corner radii: small (4–6px for inputs/buttons), medium (8–12px for cards). Never pill-shaped buttons unless deliberate.
- Shadows: soft, warm-tinted (`box-shadow: 0 2px 16px oklch(35% 0.07 240 / 0.08)`). Never harsh drop shadows.
- Borders: 1px, warm neutral. Used sparingly — prefer whitespace to borders.

### Cards
- Cream or white-ish background. Soft shadow. Light border (optional). Rounded at 8–12px. Generous internal padding (24–32px).

### Imagery
- Warm, natural, slightly desaturated. Coastal/outdoor feel where possible.
- Avoid cold, corporate stock photography.
- Grain or film texture overlay encouraged at low opacity.

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

- **Approach:** Minimal. Icons used only where they genuinely aid comprehension — not as decoration.
- **Style:** Line icons, medium stroke weight (1.5–2px). No filled/solid icons except for active states.
- **System:** Lucide Icons (CDN) — clean, consistent stroke weight, humanist feel. `https://unpkg.com/lucide@latest`
- **Size:** 16px inline, 20px standard, 24px prominent. Never scale arbitrarily.
- **Color:** Inherits from text color or uses `--navy`/`--coral` for emphasis.
- **Emoji:** Not used in UI.
- **Unicode chars:** Avoided; use proper icon assets instead.
- **Logos & brand marks:** See `assets/` directory.

### Assets in `assets/`
- `faherty-reference-logo.png` — Faherty brand reference (mood only, not for use)
- `towel-color-reference.jpg` — Color palette reference photo

---

## FILE INDEX

```
README.md                          ← This file
SKILL.md                           ← Agent skill definition
colors_and_type.css                ← CSS custom properties (colors, type, spacing, tokens)

assets/
  faherty-reference-logo.png       ← Mood reference (Faherty brand)
  towel-color-reference.jpg        ← Color palette reference photo

preview/
  colors-brand.html                ← Brand color palette card
  colors-neutrals.html             ← Neutral color scale card
  colors-semantic.html             ← Semantic color tokens card
  type-display.html                ← Display/serif type specimens
  type-body.html                   ← Body/sans type specimens
  type-scale.html                  ← Full type scale
  spacing-tokens.html              ← Spacing + radius + shadow tokens
  components-buttons.html          ← Button states
  components-inputs.html           ← Form inputs
  components-cards.html            ← Card components

ui_kits/
  website/
    README.md                      ← Website UI kit notes
    index.html                     ← Personal website prototype
    Header.jsx                     ← Nav/header component
    Hero.jsx                       ← Hero section component
    ProjectCard.jsx                ← Project card component
    Footer.jsx                     ← Footer component
```

---

*Design system built in Claude Design, May 2026.*
