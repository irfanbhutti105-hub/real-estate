# Real Estate Website - AGENTS.md

## Project Overview
Premium real estate website with 3D layouts, animations, and professional design.

## Tech Stack
- React 18+ (Vite)
- Three.js / React Three Fiber (3D)
- Framer Motion (animations)
- Tailwind CSS (styling)
- React Router (routing)

## Development Guidelines
- Use TypeScript for type safety
- Follow component-based architecture
- Implement responsive design (mobile-first)
- Optimize performance (lazy loading, code splitting)
- Use semantic HTML for accessibility

## Code Style
- Functional components only
- Hooks for state management
- CSS modules or Tailwind (no inline styles)
- Destructure props in function signature
- Export components as default exports

## File Naming
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utils: `camelCase.ts`
- Styles: `*.module.css` or Tailwind classes
- Assets: `kebab-case.*`

## Testing
- Write unit tests for utilities
- Component tests with React Testing Library
- E2E tests for critical paths

## Build & Deploy
- `npm run dev` - Development
- `npm run build` - Production
- `npm run lint` - Linting
- `npm run typecheck` - Type checking
