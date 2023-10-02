/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        dark_navy: "#495567",
        dim_grey: "#939CAA",
        light_grey: "#E5ECF4",
        snow: " #F2F5F9",
        light_yellow: "#FFF4DF",
      },

      fontFamily: {
        "space-mono": "Space Mono, monospace",
        "lexend-deca": "Lexend Deca, sans-serif",
      },
    },
  },
  plugins: [],
};
