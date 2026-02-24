# ArthikaSankhyana Web Design System

This document defines the implemented design system for `apps/web`, derived from the provided FinancePro-style snippets.

## 1) Core Principles

- Professional, secure, and helpful tone
- Local-first clarity with visible trust indicators
- High legibility for finance-heavy interfaces

## 2) Design Tokens

Implemented in `apps/web/src/styles.css` as CSS variables.

### Colors

- `--color-primary`: `#0f756d`
- `--color-primary-dark`: `#0d635c`
- `--color-primary-light`: `#ccfbf1`
- `--color-slate-50`: `#f8fafc`
- `--color-slate-100`: `#f1f5f9`
- `--color-slate-200`: `#e2e8f0`
- `--color-slate-300`: `#cbd5e1`
- `--color-slate-500`: `#64748b`
- `--color-slate-700`: `#334155`
- `--color-slate-800`: `#1e293b`
- `--color-slate-900`: `#0f172a`
- `--color-danger`: `#ef4444`

### Typography

- Body/UI: `Inter`
- Headings: `Plus Jakarta Sans`

Loaded in `apps/web/index.html` via Google Fonts.

### Shape & Elevation

- Radius: `--radius-12` (`12px`)
- Card shadow: `--shadow-card`

## 3) Layout System

### Desktop Shell

- Sidebar width: `256px`
- Main area max width: `1280px`
- Body background: slate-50

### Responsive Behavior

- Sidebar collapses (hidden) below `1024px`
- Main content uses reduced padding on smaller screens

## 4) Component Foundations

Implemented as reusable CSS classes in `apps/web/src/styles.css`:

- App shell: `.page`, `.ds-sidebar`, `.ds-main`
- Branding/navigation: `.ds-brand`, `.ds-brand-mark`, `.ds-nav-link`, `.ds-nav-link-active`
- Header/hero: `.header`, `.ds-badge`, `.ds-auth-row`, `.ds-meta`
- Cards/grid: `.card-grid`, `.card`
- Inputs/buttons: shared form element styling with focus-visible states

## 5) Usage Rules

- Use tokens instead of hardcoded colors/radius for new UI.
- Use heading font only for headings and section titles.
- Keep interactions and status text explicit for trust/security cues.
- Use card/grid patterns for dashboard-style blocks.

## 6) Current Integration

Design system is actively applied in:

- `apps/web/src/App.tsx`
- `apps/web/src/styles.css`
- `apps/web/index.html`

This is the base layer. Future feature pages should consume these classes/tokens before introducing any new style primitives.
