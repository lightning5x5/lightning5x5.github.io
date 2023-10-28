/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
    fontFamily: {
      terminal: ['VT323']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
  },
}
