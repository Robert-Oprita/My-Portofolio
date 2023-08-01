module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        titleColor: "#f56539",
        navcolor: "#f56539",
        evidencecolor: "hsla(23, 100%, 50%, 1)",
        // Facebook colors
        "facebook-blue": "#3b5998",
        // Instagram colors
        "instagram-purple": "#E4405F",
        "instagram-gradient-start": "#FCAF45",
        "instagram-gradient-end": "#FF7178",

        // GitHub colors
        "github-black": "#181717",
        "github-white": "#ffffff",

        // LinkedIn colors
        "linkedin-blue": "#0077B5",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  corePlugins: {
    filter: false,
    backdropFilter: ["responsive", "group-hover", "hover", "focus"],
  },
  plugins: [require("flowbite/plugin")],
};
