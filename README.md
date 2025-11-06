# Dropship Website

A modern Next.js application built with TypeScript, React, and Tailwind CSS v4.

## Features

- ⚡️ **Next.js 16** - React framework with App Router
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with custom theme
- 📦 **TypeScript** - Type-safe development
- 🌙 **Dark Mode Support** - Built-in dark theme support
- 🎭 **Framer Motion** - Smooth animations
- 🎨 **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

**Note:** If Tailwind CSS v4 is not yet available as a stable release, you may need to install the beta version:
```bash
npm install -D tailwindcss@next @tailwindcss/postcss@next
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `.next` directory.

### Start Production Server

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Tailwind CSS v4 styles and theme
├── components/
│   └── ui/
│       ├── button.tsx    # Button component
│       ├── sheet.tsx     # Sheet (mobile menu) component
│       └── separator.tsx # Separator component
├── lib/
│   └── utils.ts          # Utility functions
├── next.config.js        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind v4
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with a custom theme configuration. The theme includes:

- Custom color palette with light/dark mode support
- Custom radius variables
- Sidebar component styles
- Chart color variables
- shadcn/ui compatible theme structure

## Development

The project is set up with:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Next.js** for fast HMR (Hot Module Replacement) and optimized production builds

## License

MIT
