/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
      },
      colors: {
        gray: {
          50: '#F4F4F4',
          100: '#EEEEEE',
          150: '#f2f4f7',
          200: '#F2F2F2',
          300: '#668694',
          400: '#97A6BA',
          700: '#083A50',
        },
        primary: {
          50: '#F8FBFA',
          70: '#DFF9FC',
          100: '#CCE3E4',
          200: '#C4E7EA',
          300: '#8AD2D7',
          500: '#348a90',
        },
        yellow: {
          500: '#FACA15',
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line global-require
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#8AD2D7'
        },
      },
    ],
  },
};
