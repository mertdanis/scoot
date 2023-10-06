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

      backgroundImage: {
        "home-hero": "url('/src/assets/imgs/home-hero-desktop.jpg')",
        "about-hero": "url('/src/assets/imgs/about-hero-desktop.jpg')",
        "location-careers-hero":
          "url('/src/assets/imgs/careers-location-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
