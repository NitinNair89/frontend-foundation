# Architecture — Frontend Foundation

## Purpose

Frontend Foundation is designed as a long-lived, swap-friendly Next.js starter.
Its primary goal is to ensure that UI code is never coupled to:

- State management libraries
- Data transport mechanisms
- Backend or CMS implementations
- Framework-specific tooling decisions

This enables teams to evolve technology choices without refactoring UI or business logic.

---

## Core Principles

### 1. Inversion of Control (Frontend-First)

UI components never import:

- Redux
- Fetch / Axios
- CMS SDKs
- Environment-specific logic

Instead, UI interacts only with **hooks and services**.

---

### 2. Implicit Hexagonal Architecture

This repository follows hexagonal principles without academic folder names.

The separation exists by responsibility, not by theory labels.

- UI → hooks
- Hooks → services
- Services → clients / stores
- Clients & stores → replaceable implementations

This mirrors how modern production frontends are actually built.

---

### 3. Swap-ability as a First-Class Constraint

Every major concern is isolated behind a boundary:

- State: Redux today, Zustand tomorrow
- Transport: fetch today, cookies or server actions tomorrow
- Auth: local today, SSO tomorrow

No UI changes are required when swaps occur.

---

## Folder Responsibilities

`src/app` - Routing and layouts only. No business logic.

`src/components` - Pure presentational components. No side effects.

`src/hooks` - The ONLY API UI code is allowed to consume.
Example: useAuth, useTheme, useDashboard.

`src/services` - Business intent and orchestration.
Example: loginUser, loadDashboardData.

`src/clients` - Low-level adapters for HTTP, CMS, or external services.

`src/stores` - State adapters. Storage mechanism is irrelevant to consumers.

---

## What This Architecture Explicitly Avoids

- Direct Redux usage in components
- Direct fetch calls in UI
- Framework-locked abstractions
- Premature optimizations
- Opinionated tooling baked into the foundation

---

## Why This Matters

This structure:

- Scales across teams
- Survives framework upgrades
- Matches real-world frontend systems
