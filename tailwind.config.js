const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "web.dev": {
          dark: {
            primary: "#313131",
            secondary: "#514040",
            "testimonial-primary": "#32435C",
            "testimonial-secondary": "#6A635B",
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
