/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      width: {
        '78': '19.5rem',
      },
      height: {
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
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
          'base-100': '#1A1C1D',
          // 第二候補くらい bg-stone-900;
          'base-200': '#222526'
        }
      }
    ],
  },
}
