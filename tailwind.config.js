const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      colors: {
        "dark-grey": "#60636D",
        "medium-grey": "#7D828F",
        "light-grey": "#C8CCD8",
        "very-light-grey": "#EEEFF4",
        red: "#DF5656",
        "very-dark-blue": "#1B1D23",
      },
      fontSize: {
        base: "15px",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [],
};
