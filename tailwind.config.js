/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['UTM Cafeta', 'system-ui', 'sans-serif'],
        'utm-cafeta': ['UTM Cafeta', 'system-ui', 'sans-serif'],
        'fz-games': ['FZ Games', 'system-ui', 'sans-serif'],
        'myriad-pro': ['Myriad Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        'game-bg': '#54240d',
        'game-bg-dark': '#3d1208',
        'game-bg-darker': '#2a0c04',
        'game-gold': '#c8a84b',
        'game-gold-light': '#e8c96a',
        'game-red': '#6e2010',
        'game-text': '#fff8e7',
      },
      maxWidth: {
        game: '1440px',
      },
    },
  },
  plugins: [],
}

