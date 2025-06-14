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
        primary: "#1D95C1",       // Verde profundo (agricultura profesional)
        secondary: "#1B4965",     // Azul frío (piscicultura, frescura)
        accent: "#E59866",        // Cobre/dorado suave (distinción)
        background: "#F0EFEB",    // Fondo beige (cómodo a la vista)
        footer: "#2C2C2C",        // Footer oscuro elegante
        colorT: "93ebe3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
