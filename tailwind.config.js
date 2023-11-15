/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      width: {
        '57': '14.25rem',
        '78': '19.5rem',
      },
      height: {
        '57': '14.25rem',
        '78': '19.5rem',
      },
      borderWidth: {
        '5': '5px',
        '6': '6px',
      },
      fontSize: {
        '2.5xl': '1.625rem',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
    },
    fontFamily: {
      terminal: ['VT323'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dracula: {
          ...require('daisyui/src/theming/themes')['dracula'],
          'base-100': '#1A1C1D',
          'base-200': '#222526',
          '.text-title': { '@apply text-neutral-200': '' },
          '.text-content': { '@apply text-neutral-300': '' },
          '.text-card-content': { '@apply text-gray-400': '' },
          '.text-tag': { '@apply text-gray-300': '' },
          '.bg-tag': { '@apply bg-gray-700': '' },
        },
        nord: {
          ...require('daisyui/src/theming/themes')['nord'],
          'base-200': '#D8DEE9',
          '.text-title': { '@apply text-base-content': '' },
          '.text-content': { '@apply text-base-content': '' },
          '.text-card-content': { '@apply text-gray-500': '' },
          '.text-tag': { '@apply text-gray-200': '' },
          '.bg-tag': { '@apply bg-gray-500': '' },
        },
      },
    ],
  },
}
