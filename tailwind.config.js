module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#494949",
          faint: "#474747",
          faintextra: "#535353",
        },
        gold: {
          light: "#ff5c00"
        },
        blue: {
          light: "#0D019A",
          faint: "#EEF8FF"
        },
        green: {
          light: "#049A01",
          faint: "#F0FFEE"
        },
        black: {
          variant: "#25201D",
          light: "#242120"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
