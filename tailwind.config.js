const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      section1: "url('../assets/section1/bg_section1.png')",
      section5: "url('../assets/section5/bg_section5.png')",
      section5_2: "url('../assets/section5/bg_section5_2.png')",
      section6: "url('../assets/section6/bg_section6.png')",
    },
    extend: {
      scale: {
        '-100': '-1',
      },
      fontSize: {
        xs: '0.6rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        syncopate: ['var(--font-syncopate)', ...fontFamily.sans],
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
