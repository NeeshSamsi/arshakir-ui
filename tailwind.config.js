const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      volkhov: ["Volkhov", "serif"],
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
      rotate: {
        140: "140deg",
        30: "30deg",
      },
    },
  },
  plugins: [],
};
