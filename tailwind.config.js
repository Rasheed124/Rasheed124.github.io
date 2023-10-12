
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0a192f",
        "secondary-color": "#f0f0f0",
        "light-clr": "rgba(255,255,255, 0.7)",
        "green-clr": "#64ffda",

        "accent-clr": "#007bff",
      },

      fontFamily: {
        "calibre-Bold": ["var(--font-calibre-bold)"],
        "calibre-medium": ["var(--font-calibre-medium)"],
        firaMono: ["var(--font-firaMono)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
