/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        modalzoom: "modalzoom 0.15s ease-in-out",
      },
      keyframes: {
        modalzoom: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      boxShadow: {
        "outline": "0 0 8px 3px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
}
