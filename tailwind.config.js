const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
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
        40: "40px",
        56: "56px",
        80: "80px",
        120: "120px",
        largest: "200px",
      },
      lineHeight: {
        25: "25px",
        48: "48px",
        56: "56px",
        80: "80px",
        large: "200px",
      },
    },
  },
  plugins: [],
};
