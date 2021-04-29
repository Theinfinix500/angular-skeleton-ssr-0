module.exports = {
  purge: {
    enabled: process.env.PURGE_CSS == null ? false : process.env.PURGE_CSS,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
