/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#500778",
        secondary: "#BB16A3",
        tertiary: "#FFCB05",
        surface: "#EEE8F0",
        onPrimary: "#FFFEFF",
        onSecondary: "#FFFEFF",
        onTertiary: "#240D2E",
        onSurface: "#240D2E",
      }
    },
  },
  plugins: [],
}

