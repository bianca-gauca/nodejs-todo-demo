/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  /** https://tailwindcss.com/docs/theme */
  theme: {
    extend: {
      colors: {
        success: "green",
        danger: "red",
        default: "black",
        hover: "blue",
        primary: "#fdb44b",
        background: "#f4f4f4",
        input: "#005792"
      }
    },
  },
  plugins: [],
  // darkMode: 'class',
}
