/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Базовая палитра для темной темы калькулятора
        background: '#171717', // neutral-900
        surface: '#262626',    // neutral-800
        primary: '#f59e0b',    // amber-500
        secondary: '#404040',  // neutral-700
      }
    },
  },
  plugins: [],
}