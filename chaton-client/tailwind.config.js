/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      mono: ["Inconsolata", "monospace"],
      body: ["Urbonist", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
