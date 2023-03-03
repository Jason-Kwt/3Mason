/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      }

    },
  },
  plugins: [],
}