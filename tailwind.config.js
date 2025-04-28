/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F0F0F",   // page background
        text: "#F5F5F5",   // primary text
        accent: "#35FFBE",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"Söhne Mono"', "monospace"],
        sans: ["Inter", "sans-serif"]
      },
      fontSize: {
        h0: ['clamp(2.75rem,6vw,4.5rem)', {lineHeight:'1.1'}],
        h1: ['clamp(2.25rem,5vw,3rem)', {lineHeight:'1.2'}],
        body: '1.125rem',
      },
      boxShadow: {
        accent: "0 4px 12px rgba(53, 255, 190, 0.25)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} 