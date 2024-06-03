/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006414",
        secondary: "#f5f649",
        footer: "#2E3E5C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

