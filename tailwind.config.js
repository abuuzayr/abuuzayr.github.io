// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    fontFamily: {
      sans: ["Inconsolata", "sans-serif"],
    },
  },
  darkMode: "class",
};
