const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
    },
    extend: {
      colors: {
        "web.dev": {
          dark: {
            primary: "#313131",
            secondary: "#514040",
            "testimonial-primary": "#32435C",
            "testimonial-secondary": "#6A635B",
            footer: "#1C1C1D",
          },
          light: "#F2F2F2",
          accent: "#49AD09",
          card: {
            primary: colors.white,
            secondary: "#EDEDED",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
