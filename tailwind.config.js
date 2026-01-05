/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Кастомная палитра для "Dark Calculator"
        dark: {
          bg: '#1a1a1a',
          card: '#242424',
          display: '#2f2f2f',
          btn: '#3a3a3a',
          btnHover: '#4a4a4a',
          accent: '#646cff',
          accentHover: '#535bf2',
          text: '#ffffff',
          textMuted: '#a1a1aa'
        }
      }
    },
  },
  plugins: [],
}