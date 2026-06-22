# Profile Dashboard

A small React + TypeScript application built to practice modern frontend patterns: typed custom hooks, generics, discriminated unions, context, error boundaries, code-splitting, and component/hook testing.

**Live demo url:** https://profile-dash-delta.vercel.app/
**Repo:** https://github.com/PaulLight/profile-dash

## What it does

- Fetches and displays user data from a public API, rendered as profile cards
- A todo list with add/complete/remove and filtering (active/completed)
- Dark mode toggle, shared via React Context
- Resilient UI — isolated error boundaries and Suspense-based lazy loading so one broken section never takes down the rest of the app

## Stack

- React 19 + TypeScript
- Vite
- Vitest + React Testing Library

## Notable implementation details

- **Generic `useFetch<T>` hook** — a single reusable data-fetching hook with a discriminated union return type (`loading | success | error`), so consuming components get full type narrowing with no optional chaining needed
- **Custom hooks** — `useTodo`, `useToggle`, `useTheme`, `useSelect` — encapsulating state logic separately from presentation
- **Error boundaries** — hand-built class component wrapping individual sections, so a crash in one feature doesn't take down the whole app
- **Code-splitting** — `Todo` and `Users` are lazy-loaded with `Suspense`, verified under throttled network conditions
- **Testing** — component tests (`Counter`, `ContactForm` with `user-event` and `console` spying), direct hook tests (`useTodo` via `renderHook` + `act`), and async hook tests (`useFetch` with mocked `fetch` + `waitFor`)

## Running locally

```bash
npm install
npm run dev
```

## Running tests

```bash
npm run test
```
