module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gorgeous: ["EB Garamond", "serif"],
      pretty: ["EB Garamond", "sans-serif"],
    },
    extend: {
      inset: {
        "2/5": "40%",
      },
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
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      transitionProperty: {
        filter: "filter",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fadein-1000-0": "fadein 1000ms 0ms ease-in-out 1 both",
        "fadein-1000-100": "fadein 1000ms 100ms ease-in-out 1 both",
        "fadein-1000-200": "fadein 1000ms 200ms ease-in-out 1 both",
        "fadein-1000-300": "fadein 1000ms 300ms ease-in-out 1 both",
        "fadein-1000-400": "fadein 1000ms 400ms ease-in-out 1 both",
        "fadein-1000-500": "fadein 1000ms 500ms ease-in-out 1 both",
        "fadein-1000-600": "fadein 1000ms 600ms ease-in-out 1 both",
        "fadein-1000-700": "fadein 1000ms 700ms ease-in-out 1 both",
        "fadein-1000-800": "fadein 1000ms 800ms ease-in-out 1 both",
        "fadein-1000-900": "fadein 1000ms 900ms ease-in-out 1 both",
        "fadein-1000-1000": "fadein 1000ms 1000ms ease-in-out 1 both",
        "fadein-1000-1100": "fadein 1000ms 1100ms ease-in-out 1 both",
        "fadein-1000-1200": "fadein 1000ms 1200ms ease-in-out 1 both",
        "fadein-1000-1300": "fadein 1000ms 1300ms ease-in-out 1 both",
        "fadein-1000-1500": "fadein 1000ms 1500ms ease-in-out 1 both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
