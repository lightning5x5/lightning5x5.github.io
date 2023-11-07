/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
    },
    fontFamily: {
      terminal: ['VT323']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula'],
  },
}
