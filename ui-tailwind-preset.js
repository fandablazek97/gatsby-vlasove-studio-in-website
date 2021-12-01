// Preset konfigurace tailwindu sloužící k základnímu nastavení
// a propojení tailwindu a ui

// Importy dodatečných částí tw
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    // PŘEPSÁNÍ PŮVODNÍCH HODNOT
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "1021px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)",
    },

    zIndex: {
      "-100": -100,
      "-50": -50,
      "-40": -40,
      "-30": -30,
      "-20": -20,
      "-10": -10,
      "-9": -9,
      "-8": -8,
      "-7": -7,
      "-6": -6,
      "-5": -5,
      "-4": -4,
      "-3": -3,
      "-2": -2,
      "-1": -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      125: 125,
      150: 150,
      175: 175,
      200: 200,
      250: 250,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      750: 750,
      800: 800,
      900: 900,
      999: 999,
      1000: 1000,
      auto: "auto",
    },

    minHeight: {
      0: "0",
      50: "50px",
      100: "100px",
      150: "150px",
      200: "200px",
      300: "300px",
      400: "400px",
      500: "500px",
      600: "600px",
      700: "700px",
      800: "800px",
      900: "900px",
      "1/4": "25%",
      "1/2": "50%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
    },

    // ROZŠÍŘENÍ PŮVODNÍCH HODNOT
    extend: {
      fontSize: {
        h1: "var(--font-size-h1)",
        h2: "var(--font-size-h2)",
        h3: "var(--font-size-h3)",
        h4: "var(--font-size-h4)",
        h5: "var(--font-size-h5)",
        h6: "var(--font-size-h6)",
      },

      borderRadius: {
        default: "var(--radius)",
      },

      transitionDuration: {
        default: "var(--duration)",
        400: "400ms",
        600: "600ms",
      },

      transitionProperty: {
        "max-height": "max-height",
      },

      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        272: "68rem",
      },

      scale: {
        60: "0.6",
        65: "0.65",
        70: "0.7",
        80: "0.8",
        85: "0.85",
        115: "1.15",
        120: "1.2",
        130: "1.3",
        135: "1.35",
        140: "1.4",
        145: "1.45",
        160: "1.6",
        170: "1.7",
        175: "1.75",
        180: "1.8",
        200: "2",
      },

      opacity: {
        15: "0.15",
        85: "0.85",
      },

      // Rozšíření barev
      colors: {
        transparent: "transparent",
        current: "currentColor",

        // Výchozí naše paleta odstínů šedé
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1B202C",
          900: "#171923",
          950: "#12131B",
        },

        // Propojení tailwindu s barvami v css proměnných
        // s podporou všech druhů utilit: `https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo`
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-primary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-primary), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-primary))`;
        },

        secondary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-secondary), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-secondary), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-secondary))`;
        },

        default: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-default), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-default), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-default))`;
        },

        "default-strong": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-default-strong), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-default-strong), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-default-strong))`;
        },

        invert: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-invert), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-invert), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-invert))`;
        },

        success: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-success), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-success), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-success))`;
        },

        error: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-error), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-error), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-error))`;
        },

        warning: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-warning), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-warning), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-warning))`;
        },

        info: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-info), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-info), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-info))`;
        },

        background: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-background), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-background), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-background))`;
        },

        "background-100": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-background-100), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-background-100), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-background-100))`;
        },

        "background-200": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-background-200), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-background-200), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-background-200))`;
        },

        "background-300": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-background-300), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-background-300), var(${opacityVariable}, 1))`;
          }
          return `hsl(var(--color-background-300))`;
        },

        // Rozšíření barevné palety více tailwind barvami viz - `https://tailwindcss.com/docs/customizing-colors` - úplně dole
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        pink: colors.pink,
        rose: colors.rose,
        "warm-gray": colors.warmGray,
      },
    },
  },

  variants: {
    extend: {
      filter: ["dark"],
      invert: ["dark"],
    },
    aspectRatio: ["responsive"],
  },

  plugins: [require("@tailwindcss/aspect-ratio")],

  corePlugins: {
    preflihgt: false,
    container: false,
  },
};
