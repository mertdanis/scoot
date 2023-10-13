/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FCB72B",
        dark_navy: "#495567",
        footer_bottom: "#333A44",
        dim_grey: "#939CAA",
        light_grey: "#E5ECF4",
        snow: " #F2F5F9",
        light_yellow: "#FFF4DF",
        white: "#FFFFFF",
      },

      fontFamily: {
        "space-mono": "Space Mono, monospace",
        "lexend-deca": "Lexend Deca, sans-serif",
      },

      fontSize: {
        h1: "56px",
        h2: "48px",
        h3: "40px",
        h4: "24px",
        body: "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
