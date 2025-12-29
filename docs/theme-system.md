# Theme System - Frontend Foundation Template

## Philosophy

Foundation Template starter kit ships with a built-in theme system
by default - enabling you to focus on feature development right from
the start.

This template uses Tailwind's functions and directives
extensively. Read more about it here - [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives)

**_Note: This document will evolve over time as and when new features
are added._**

---

## Architecture

- ### Theme.css

  Used to register design tokens with Tailwind compiler. The only
  purpose is to declare intent semantically.

  _File:_ `src\styles\theme.css`

- ### Tokens.css

  Used to defined run-time values. This is where your
  design system's colors live. The **_:root_** and **_.dark_** styles are auto-applied based on light/dark theme.

  _File:_ `src\styles\tokens.css`

- ### Layout.css

  Used to define structural styles, for example - _containers, page sections_, etc.

  _File:_ `src\styles\layout.css`

- ### Typography.css

  Used to define text presentation styles, for example - _font weight, size_, etc.

  _File:_ `src\styles\typography.css`

- ### Utility.css

  Used to define text presentation styles, for example - _font weight, size_, etc.

  _File:_ `src\styles\utility.css`

- ### Components

  Used to define text presentation styles, for example - _font weight, size_, etc.

  _File:_ `src\styles\components\[component-name].css`
