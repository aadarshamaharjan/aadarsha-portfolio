module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      logo: ["Russo One", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      hello: ["Imprima", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        fontColor: "var(--font-default)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        overay: "75% auto 6em",
      },
      backgroundImage: (theme) => ({
        "background-pattern": "url('../public/background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
