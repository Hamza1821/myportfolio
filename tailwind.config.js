/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: "#0A0821",
        secondary: "#64FFDA",
        tertiary: "#8892B0",
        quaternary: "#CCD6F6",
        space: {
          dark: "#050314",
          nebula: "#FF61D8",
          cosmic: "#4169E1",
          stardust: "#FFD700",
          aurora: "#7B4397"
        }
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
}