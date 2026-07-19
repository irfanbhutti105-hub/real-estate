/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Manrope"', 'sans-serif'],
        'sans': ['"Manrope"', 'sans-serif'],
      },
      colors: {
        'gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4a853',
          600: '#b8860b',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        'navy': {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1a1f3a',
          600: '#0f1429',
          700: '#0a0d1c',
          800: '#060812',
          900: '#030409',
        },
        'surface': {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}
