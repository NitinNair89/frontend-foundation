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

Example token usage:

- bg-background
- text-foreground
- text-muted-foreground

No raw hex values are used in JSX.

---

## Content Strategy

The Tailwind content path is intentionally broad:

`./src/**/*.{js,ts,jsx,tsx,mdx}`

This prevents silent style drops and future-proofs the template.

---

## Why No Utility Layer Overrides

We do not define custom utilities via @layer utilities.

Reason:

- Scales poorly
- Duplicates Tailwind’s token system
- Reduces swap-ability

Tokens + utilities are sufficient.

---

## Outcome

- Predictable styling
- Clean JSX
- Long-term maintainability
