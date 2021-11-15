module.exports = {
  // Preset se základním nastavením tailwindu pro framework (propojení)
  presets: [require("./ui-tailwind-preset.js")],

  mode: "jit",
  darkMode: "class", // false or "media" or "class"
  purge: [
    "./src/base/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/libraries/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  variants: {
    extend: {},
  },

  plugins: [],
  corePlugins: {},
};
