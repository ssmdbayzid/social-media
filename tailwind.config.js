/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10217D",
        secondary: "#1BA9B5",
        accent: "#000000"
      }
    },
  },
  plugins: [],
}