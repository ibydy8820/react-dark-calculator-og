/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        surface: '#242424',
        primary: '#646cff',
        secondary: '#535bf2',
        display: '#0f0f0f',
      }
    },
  },
  plugins: [],
}