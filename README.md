# Vite React TypeScript Template

My personal starter for React projects with Vite and TypeScript. Includes all the tooling I use (ESLint, Prettier, Tailwind, Husky) and a scalable folder structure so I don't have to set everything up from scratch each time.

Clone it and start building.

## Disclaimer

This is opinionated. Use what works for you, ignore the rest, and stay consistent with your own choices.

## What's Included

### Core Stack

- **React 19** with **Vite** for fast development
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Testing

- **Vitest** for unit and integration tests
- **React Testing Library** for component testing
- **jsdom** for browser environment simulation

### Architecture

- Organized folder structure (`app`, `features`, `components`)
- Path aliases (`@/*` → `src/*`)
- VS Code auto-format on save

### Code Quality

- **ESLint**: Includes accessibility checks, import sorting, and kebab-case file naming
- **Prettier**: Code formatting with Tailwind class sorting

### Git Hooks

- **Husky + lint-staged**: Lints code before commits
- **commitlint**: Enforces Conventional Commits

## Quick Start

```bash
git clone <your-repo-url>
cd your-project
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
npm test         # Run tests
npm run test:ui  # Run tests with UI
```

## Project Conventions

### Absolute Imports

Use `@/*` to import from `src`. Avoid `../` paths.

- **Good:** `import { Button } from '@/components/ui/button'`
- **Bad:** `import { Button } from '../../components/ui/button'`

### File Naming

All files and folders in `src` must be **kebab-case** (e.g., `theme-toggle.tsx`). ESLint enforces this.

- **File:** `theme-toggle.tsx`
- **Component:** `export function ThemeToggle() {...}`

### Testing

Test files use the `.test.tsx` or `.test.ts` extension and follow the same kebab-case convention.

- **Test file:** `theme-toggle.test.tsx`
- **Location:** Co-located with the component or in `__tests__` folders

### Commit Convention

Uses [Conventional Commits](https://www.conventionalcommits.org/). First line must be lowercase.

Examples:

- `feat: add new button component`
- `fix: resolve styling issue on mobile`
- `chore: update dependencies`
- `test: add tests for theme toggle`

## Credits

Architecture inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react).
