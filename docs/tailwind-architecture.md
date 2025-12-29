# Tailwind Architecture

## Philosophy

Tailwind is used as a design-token engine, not a styling free-for-all.

HTML class bloat is explicitly avoided.

---

## Design Tokens

All colors are defined as CSS variables and mapped into Tailwind tokens.

This enables:

- Centralized theming
- Zero refactor when changing palettes
- No raw hex values are used in JSX.

---

## Content Strategy

The Tailwind content path is intentionally broad:

`./src/**/*.{js,ts,jsx,tsx,mdx}`

This prevents silent style drops and future-proofs the template.

---

## Outcome

- Predictable styling
- Clean JSX
- Long-term maintainability
