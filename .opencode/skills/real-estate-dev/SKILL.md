---
name: real-estate-dev
description: Use when building, editing, or deploying the real estate React website. Covers components, 3D layouts, animations, styling, and project configuration.
---

# Real Estate Website Development

## Tech Stack
- React 18+ with Vite
- Three.js / React Three Fiber for 3D
- Framer Motion for animations
- Tailwind CSS for styling
- React Router for navigation

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── assets/         # Images, models, textures
├── styles/         # Global styles
└── utils/          # Helpers
```

## Conventions
- Use functional components with hooks
- Framer Motion for all animations
- React Three Fiber for 3D scenes
- Tailwind for utility-first styling
- Component names: PascalCase
- File names: kebab-case for utilities, PascalCase for components

## 3D Guidelines
- Use `@react-three/fiber` and `@react-three/drei`
- Optimize with `useMemo`, `useCallback`
- Lazy load heavy 3D models
- Add loading states for 3D content

## Animation Guidelines
- Use Framer Motion `motion` components
- Implement scroll-triggered animations
- Page transitions with AnimatePresence
- Subtle hover effects on interactive elements

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build
