/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{jsx, js, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f5f5f5",
        "secondary": "#a8a8a8",
      },
      fontSize: {
        "xs": ".75rem",
      }
    }
  },
  plugins: [],
}

