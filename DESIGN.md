---
name: Neon Terminal
colors:
  surface: '#11131c'
  surface-dim: '#11131c'
  surface-bright: '#373943'
  surface-container-lowest: '#0c0e17'
  surface-container-low: '#191b25'
  surface-container: '#1d1f29'
  surface-container-high: '#282934'
  surface-container-highest: '#32343f'
  on-surface: '#e1e1ef'
  on-surface-variant: '#c9c4d6'
  inverse-surface: '#e1e1ef'
  inverse-on-surface: '#2e303a'
  outline: '#928ea0'
  outline-variant: '#474554'
  surface-tint: '#c8bfff'
  primary: '#c8bfff'
  on-primary: '#2c009e'
  primary-container: '#8f7eff'
  on-primary-container: '#26008b'
  inverse-primary: '#5c47d0'
  secondary: '#5bd9d8'
  on-secondary: '#003737'
  secondary-container: '#00a4a3'
  on-secondary-container: '#003232'
  tertiary: '#ffa9ff'
  on-tertiary: '#590062'
  tertiary-container: '#da5be4'
  on-tertiary-container: '#4e0056'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5deff'
  primary-fixed-dim: '#c8bfff'
  on-primary-fixed: '#190064'
  on-primary-fixed-variant: '#4329b7'
  secondary-fixed: '#7af5f4'
  secondary-fixed-dim: '#5bd9d8'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#00504f'
  tertiary-fixed: '#ffd6fa'
  tertiary-fixed-dim: '#ffa9ff'
  on-tertiary-fixed: '#36003d'
  on-tertiary-fixed-variant: '#7d008a'
  background: '#11131c'
  on-background: '#e1e1ef'
  surface-variant: '#32343f'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is built for a Full-Stack Developer who bridges the gap between high-performance engineering and expressive, retro-futuristic creativity. The aesthetic is a fusion of **Neo-Brutalism** and **Vaporwave**, characterized by sharp digital edges, high-contrast terminal elements, and vibrant neon accents that pop against a deep obsidian void.

The personality is "Elite Hacker meets Creative Director"—technically rigorous but visually playful. It avoids the sterile safety of corporate SaaS in favor of a bold, tech-focused identity that utilizes 8-bit motifs, window-inspired containers, and scan-line textures to evoke a sense of digital craftsmanship and "built-from-scratch" authenticity.

## Colors

The palette is anchored in a deep navy-black (`#080A13`) which provides a limitless canvas for "glowing" neon interactive elements. 

- **Primary (Electric Violet):** Used for main actions and branding. It represents the "logic" and "code" aspect of the brand.
- **Secondary (Data Cyan):** Used for success states, terminal prompts, and technical highlights.
- **Tertiary (Neon Pink):** Reserved for playful accents, hover states, and creative disruptions.
- **Neutral (Obsidian & White):** High-contrast white text ensures maximum readability, while the dark background minimizes eye strain and allows the neon accents to vibrate visually.

## Typography

The typography strategy pairs technical precision with aggressive geometry. 

**Space Grotesk** is used for all headlines and labels. Its quirky, wide proportions and technical terminals mirror the 8-bit aesthetic without sacrificing modern readability. **Inter** handles the body copy to provide a clean, neutral balance to the more expressive display faces. Monospaced fonts (system default or Roboto Mono) should be used for metadata, "terminal output" sections, and small UI labels to reinforce the developer-focused brand.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to maintain the "windowed" OS feel, shifting to a fluid model for mobile. 

The layout relies on a 12-column grid with generous 24px gutters. Elements are often encapsulated in "Window Containers" that use 32px of internal padding. Vertical rhythm is strictly enforced in 8px increments (2 units), ensuring that the structural "blocks" of the site feel stable and engineered. Use asymmetrical spacing and overlapping elements (like shadows or floating shapes) to break the grid occasionally for a more creative, "hacker-space" vibe.

## Elevation & Depth

Elevation is not conveyed through soft, realistic shadows, but through **Bold Borders** and **Offset Hard Shadows**.

1.  **Level 0 (Floor):** The `#080A13` background.
2.  **Level 1 (Panels):** Defined by a 1px or 2px solid border in Primary or Secondary colors.
3.  **Level 2 (Active/Floating):** Achieved using a hard, 100% opacity offset shadow (e.g., `4px 4px 0px #7A67F0`).
4.  **Glassmorphism:** Occasionally used for navigation bars or overlaying terminal windows, using a subtle background blur (10px) and a low-opacity border to keep the content legible over vibrant background elements.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To maintain the retro-futuristic and 8-bit aesthetic, avoid rounded corners on buttons, cards, or containers. Use 45-degree chamfered corners (clipped corners) to denote "advanced" or "high-tech" components. Geometric shapes (triangles, squares, and crosshairs) should be used as decorative background patterns or list bullets to reinforce the terminal-inspired atmosphere.

## Components

### Buttons
Buttons should be rectangular with a 2px solid border. The "Primary" state features a solid fill with white text, while "Ghost" states feature the border only. On hover, buttons should trigger a hard offset shadow in a contrasting neon color, or a full-color inversion.

### Window Cards
The signature component for projects and content. These cards feature a top "Header Bar" containing three small colored circles (reminiscent of OS window controls) and the title in a monospaced font. The body of the card is wrapped in a 1px border matching the header bar color.

### Terminal Inputs
Input fields should resemble a command-line interface. Use a `>` prompt prefix, monospaced text, and a solid block-style blinking cursor for active states. Borders should only appear on the bottom of the input or as a full thin outline.

### Chips & Tags
Small, sharp-edged rectangles with a low-opacity background fill of the primary color and a solid 1px border. Use these for technical skills (e.g., "React", "TypeScript").

### Decorative Elements
Incorporate "Scan Lines" (a subtle horizontal repeating gradient overlay) on large image containers and use dotted grid patterns (`background-image: radial-gradient`) to fill empty whitespace in the background.