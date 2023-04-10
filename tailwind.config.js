const { transform } = require('framer-motion');
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
      section3: "url('../assets/section3/bg_section3.png')",
      section5: "url('../assets/section5/bg_section5.png')",
      section5_2: "url('../assets/section5/bg_section5_2.png')",
      section6: "url('../assets/section6/bg_section6.png')",
      section7: "url('../assets/section7/bg_section7.png')",
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
      animation: {
        blob: 'blob 20s linear infinite',
        blob2: 'blob2 40s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '22%': {
            transform: 'translate(300px, -200px) scale(1.5)',
          },
          '44%': {
            transform: 'translate(1800px, 100px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(700px, 1000px) scale(1.5)',
          },
          '88%': {
            transform: 'translate(-100px, 400px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        blob2: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '22%': {
            transform: 'translate(-300px, 200px) scale(1.5)',
          },
          '44%': {
            transform: 'translate(-1500px, -400px) scale(1)',
          },
          '66%': {
            transform: 'translate(-700px, -800px) scale(1.5)',
          },
          '88%': {
            transform: 'translate(500px, -400px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
