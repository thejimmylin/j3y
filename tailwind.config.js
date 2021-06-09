module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pretty: ["Libre Caslon Text", "serif"],
      gorgeous: ["Libre Baskerville", "serif"],
    },
    extend: {
      backgroundImage: theme => ({
       'one-way': "url('./images/one_way.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
