module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gorgeous: ["EB Garamond", "serif"],
      pretty: ["EB Garamond", "sans-serif"],
    },
    extend: {
      colors: {
        graywhite: {
          33: "#0b0b0b",
          66: "#161616",
          96: "#202020",
          99: "#212121",
          105: "#232323",
          132: "#2c2c2c",
          165: "#373737",
          198: "#424242",
          231: "#4d4d4d",
          264: "#585858",
          297: "#636363",
          330: "#6e6e6e",
          363: "#797979",
          396: "#848484",
          429: "#8f8f8f",
          462: "#9a9a9a",
          495: "#a5a5a5",
          528: "#b0b0b0",
          561: "#bbbbbb",
          594: "#c6c6c6",
          627: "#d1d1d1",
          660: "#dcdcdc",
          693: "#e7e7e7",
          726: "#f2f2f2",
          759: "#fdfdfd",
        },
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      transitionProperty: {
        filter: "filter",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        fadein: "fadein 1s ease-in-out 1",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
