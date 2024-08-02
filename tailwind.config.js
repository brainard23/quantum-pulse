/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.grayscale': {
          '-webkit-filter': 'grayscale(100%)',
          'filter': 'grayscale(100%)',
        }
      });
    }
  ],}
