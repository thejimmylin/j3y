module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pretty: ["Libre Caslon Text", "serif"],
      gorgeous: ["Libre Baskerville", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "one-way": "url('./images/one_way.jpg')",
      }),
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in-out 1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
