module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        recoleta: ['"Recoleta Alt"', "serif"],
        young: ["Young Serif"],
        airbnb: ["Airbnb Cereal"],
      },
      spacing: {
        90: "31rem",
      },
      colors: {
        "custom-purple": "rgba(57, 0, 180, 1)",
        "custom-back": "rgba(0, 0, 0, 1)",
        "logo-purple": "rgba(22, 0, 65, 1)",
        "active-purple": "rgb(223, 212, 244)",
        "custom-border": "rgba(240, 240, 240, 1)",
      },
    },
  },
  plugins: [],
};
