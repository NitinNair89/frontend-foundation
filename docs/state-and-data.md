# State and Data Strategy

## UI Contract

UI code interacts ONLY with hooks.

Example responsibilities:

- Reading state
- Triggering actions
- Handling loading and error states

UI never knows:

- Where data comes from
- How it is stored
- How it is transported

---

## State Layer

The template currently ships without a concrete state library.

This is intentional.

A future project can introduce:

- Redux Toolkit
- Redux Saga
- Zustand
- Signals

without modifying UI contracts.

---

## Data Transport

Transport logic lives in clients.

Examples:

- http.client.ts
- cms.client.ts

Switching fetch → Axios → cookies → server actions does not affect UI.

---

## Why This Works

Because the system is designed around:

- Intent
- Boundaries
- Replaceable adapters

Not tools.
