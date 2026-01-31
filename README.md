# CIVA Reduction

A modern, engineering-focused web project built with Vite, React, and TypeScript.

## Engineering Standards

This project enforces strict engineering discipline:

- **ESM-only**: No CommonJS
- **Type Safety**: TypeScript with strict mode, no `any` types
- **Code Quality**: ESLint with strict rules, Prettier for formatting
- **Node Version**: Enforced via `.nvmrc` and `package.json` engines
- **Build Validation**: Zero-warning builds required

## Quick Start

### Prerequisites

- Node.js 18+ (see `.nvmrc`)
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (zero-warning enforcement)
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests

## Project Structure

```
├── src/              # Source code (TypeScript/TSX)
├── public/           # Static assets
├── docs/             # Documentation
├── data/             # Data files (use config, not hardcoded paths)
├── dist/             # Production build output
├── .eslintrc.json    # ESLint configuration
├── .prettierrc.json  # Prettier configuration
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite configuration
└── .nvmrc            # Node version specification
```

## Code Guidelines

### TypeScript

- Always include explicit return types on functions
- No implicit `any` types
- Use `unknown` before narrowing types
- Prefer `const` over `let` and `var`

### Formatting

- Prettier handles all formatting (semi-colons, quotes, line width)
- ESLint ensures consistency and catches errors
- Run `npm run format` before committing

### No Hardcoded Paths

Dataset and file paths must be:
- Loaded from environment variables
- Defined in configuration files
- Never hardcoded in source files

## License

MIT - See [LICENSE](LICENSE) for details
