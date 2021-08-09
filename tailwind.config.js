const { boxShadow } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      pretty: ["poppins", "sans-serif"],
      code: ["Fira Code", "monospace"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
      },
      colors: {
        ink: "#2c2c2c",
        pencil: "#636363",
        light: "#efefef",
        moonlight: "#c6c6c6",
        night: "#0f171f",
        paper: "#fdf6e3",
      },
      zIndex: {
        "-10": "-10",
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
        "fadein-1000-50": "fadein 1000ms 50ms ease-in-out 1 both",
        "fadein-1000-100": "fadein 1000ms 100ms ease-in-out 1 both",
        "fadein-1000-150": "fadein 1000ms 150ms ease-in-out 1 both",
        "fadein-1000-200": "fadein 1000ms 200ms ease-in-out 1 both",
        "fadein-1000-250": "fadein 1000ms 250ms ease-in-out 1 both",
        "fadein-1000-300": "fadein 1000ms 300ms ease-in-out 1 both",
        "fadein-1000-350": "fadein 1000ms 350ms ease-in-out 1 both",
        "fadein-1000-400": "fadein 1000ms 400ms ease-in-out 1 both",
        "fadein-1000-450": "fadein 1000ms 450ms ease-in-out 1 both",
        "fadein-1000-500": "fadein 1000ms 500ms ease-in-out 1 both",
        "fadein-1000-550": "fadein 1000ms 550ms ease-in-out 1 both",
        "fadein-1000-600": "fadein 1000ms 600ms ease-in-out 1 both",
        "fadein-1000-650": "fadein 1000ms 650ms ease-in-out 1 both",
        "fadein-1000-700": "fadein 1000ms 700ms ease-in-out 1 both",
        "fadein-1000-750": "fadein 1000ms 750ms ease-in-out 1 both",
        "fadein-1000-800": "fadein 1000ms 800ms ease-in-out 1 both",
        "fadein-1000-850": "fadein 1000ms 850ms ease-in-out 1 both",
        "fadein-1000-900": "fadein 1000ms 900ms ease-in-out 1 both",
        "fadein-1000-950": "fadein 1000ms 950ms ease-in-out 1 both",
        "fadein-1000-1000": "fadein 1000ms 1000ms ease-in-out 1 both",
        "fadein-2000-1500": "fadein 2000ms 1500ms ease-in-out 1 both",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.pretty").join(", "),
            color: theme("colors.ink"),
            fontWeight: 300,
            "h1, h2": {
              color: theme("colors.ink"),
              fontWeight: 600,
            },
            "h3, h4": {
              color: theme("colors.ink"),
              fontWeight: 500,
            },
            "h5, h6": {
              color: theme("colors.ink"),
              fontWeight: 400,
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.ink") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.ink") },
              },
            },
            a: {
              fontWeight: 300,
              color: theme("colors.pencil"),
              "&:hover": { color: theme("colors.ink") },
            },
            blockquote: {
              color: theme("colors.ink"),
            },
            hr: {
              borderColor: theme("colors.moonlight"),
            },
            code: {
              fontFamily: theme("fontFamily.code").join(", "),
              color: theme("colors.ink"),
            },
            pre: {
              fontFamily: theme("fontFamily.code").join(", "),
              color: theme("colors.ink"),
              backgroundColor: theme("colors.gray.200"),
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
            },
          },
        },
        dark: {
          css: {
            fontFamily: theme("fontFamily.pretty").join(", "),
            color: theme("colors.light"),
            "h1, h2, h3": {
              color: theme("colors.light"),
            },
            "h4, h5, h6": {
              color: theme("colors.light"),
            },
            a: {
              color: theme("colors.moonlight"),
              "&:hover": { color: theme("colors.light") },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.light") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.light") },
              },
            },
            blockquote: {
              color: theme("colors.light"),
            },
            hr: {
              borderColor: theme("colors.pencil"),
            },
            code: {
              color: theme("colors.light"),
            },
            pre: {
              color: theme("colors.light"),
              backgroundColor: theme("colors.gray.700"),
              boxShadow: "0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)"
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
