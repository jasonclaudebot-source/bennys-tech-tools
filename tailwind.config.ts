import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',      // Deep charcoal/black
        'secondary': '#ffffff',     // Pure white
        'accent': '#0a0a0a',        // Almost black for contrast
        'muted': '#f5f5f5',         // Light gray background
        'border': '#e5e5e5',        // Subtle border gray
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
}
export default config
