const { join } = require('path');

module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-preset')],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/components/**/*.{ts,tsx}'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
