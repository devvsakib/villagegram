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
        "tertiary": "#737373",
        "igYellow": "#FF7107",
        "igPurple": "#D801BB",
        "igDarkPurple": "#FB0172",
      },
      fontSize: {
        "xs": ".75rem",
      }
    }
  },
  plugins: [],
}

