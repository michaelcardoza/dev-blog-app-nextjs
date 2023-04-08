const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F8F7',
          100: '#E8F3F3',
          200: '#DFF1F0',
          600: '#00AAA1',
        },
        black: '#222222',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
