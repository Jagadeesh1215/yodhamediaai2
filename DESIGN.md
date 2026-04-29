# Design Brief — YodhaMedia

**Purpose**: Premium digital marketing agency website for healthcare & business sectors, projecting authority & results-driven expertise.

**Tone**: Authoritative, refined, digitally-forward; premium luxury tech aesthetic.

**Differentiation**: Glassmorphism navbar + semi-transparent interactive elements; golden accent glow on CTAs; semantic HTML5 structure; dual-theme with intentional dark mode gradient.

**Tagline**: "Building digital fortresses for hospitals, doctors, and modern enterprises."

## Color Palette (OKLCH)

| Role | Light | Dark |
|------|-------|------|
| Background | 0.9745 0.0052 313 | 0.12 0.0084 255 |
| Foreground | 0.3 0.0898 259 | 0.95 0.01 313 |
| Primary (Deep Purple) | 0.3 0.0898 259 | 0.77 0.192 56 |
| Accent (Golden Yellow) | 0.77 0.192 56 | 0.77 0.192 56 |
| Card | 0.98 0.0042 313 | 0.16 0.0074 255 |
| Border | 0.88 0.01 313 | 0.24 0.008 255 |
| Muted | 0.92 0.01 313 | 0.22 0.0084 255 |

**Hex Reference**: Light mode #f2f0fa bg / #2D1B69 text; Dark mode gradient #2D1B69→#1A0F40; CTA accent #FFD700.

## Typography

| Layer | Font | Scale | Weight |
|-------|------|-------|--------|
| Display | General Sans | 48–64px | 700 |
| Body | General Sans | 16px | 400 |
| Mono | System Monospace | 12–14px | 400 |

**Hierarchy**: Display for hero headlines; Body for all content; Mono for code/technical content.

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header/Navbar | Glass-morphism: `backdrop-blur-md` + `bg-background/80` + `border-b border-border/20` |
| Hero Section | `bg-background` + gradient accent text; `next/image` priority for LCP |
| Content Cards | `bg-card` + `border border-border/50` + hover scale 1.05 + accent glow |
| Footer | `bg-muted/40` + `border-t border-border` + semantic `<footer>` |
| Alternating Sections | Alternate `bg-muted/30` for rhythm |

## Component Patterns

- **ServiceCard**: Hover → scale 1.05 + shadow lift + golden glow; motion library fade-in-up on scroll; accessibility: semantic article tags, ARIA labels
- **CTA Button**: `bg-accent` + `text-accent-foreground` + ring glow on hover; `accent-glow` utility class
- **Trust Stats**: Card-based blocks; large numbers in primary color; supporting text in muted-foreground
- **Blog Filter**: Category buttons; active state `bg-accent` + `text-accent-foreground`; inactive state `bg-muted` + `text-muted-foreground`

## Motion & Interaction

- **Scroll animations**: Motion library staggered children (fade-in-up) on section entry
- **Hover states**: All interactive elements use `transition-smooth` (300ms cubic-bezier)
- **CTA focus**: Accent glow effect on hover/focus; ring highlight for keyboard navigation
- **Card elevation**: Shadow lift on hover; scale transforms for click feedback

## Constraints

- No raw hex colors; all colors via CSS variables (OKLCH only)
- Glassmorphism reserved for navbar + elevated interactive elements (no over-use)
- Motion choreographed via Motion library; no scattered tweens
- Semantic HTML5 for 100/100 Lighthouse accessibility target
- Brand colors strictly adhered: #f2f0fa / #2D1B69 / #FFD700 / dark gradient
- Dark mode as full alternative (not inverted; gradient background intentional)

## Signature Detail

Golden accent glow on CTAs & service cards: `ring-2 ring-accent/50 shadow-lg shadow-accent/20`. The glow reinforces premium brand positioning and draws focus to conversion actions. Combined with glassmorphism navbar, creates a cohesive luxury-tech aesthetic aligned with authoritative healthcare + business messaging.
