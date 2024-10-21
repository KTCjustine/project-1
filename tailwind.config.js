/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          opensans: ["Open Sans", "sans-serif"],
          nunito: ["Nunito", "sans-serif"],
          arima: ["Arima", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          merriweather: ["Merriweather", "sans-serif"],
          robot: ["Roboto", "sans-serif"],
          nunitosans: ["Nunito Sans", "sans-serif"],
          worksans: ["Work Sans", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          oswald: ["Oswald", "sans-serif"],
          notosans: ["Noto Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
          'custom': {
              'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
              },
              'red': {
                  100: '#F53636',
                  101: '#F00',
              },
              'green': {
                  100: '#2A6260',
                  101: '#E8F2F1',
                  102: '#0C3936',
                  103: '#9FD2D1',
                  104: '#ECFDFD',
                  105: '#DBF4F4',
                  106: '#367D7B',
                  107: '#4AA7A4',
              },
              'black': {
                  100: '#0C3936',
                  101: '#383C44',
                  200: '#040D12',
                  300: '#242424',
                  400: '#5e5e5e',
              },
              'yellow': {
                  100: '#E4A41A',
                  101: '#9D7435',
                  102: '#FBCA6D',
                  103: '#C1870A',
                  104: '#FFC64F',
              },
              'gray': {
                  100: '#F1F1F1',
                  101: '#99BBB8',
                  102: '#E2E2E2',
                  103: '#ECF6F6',
            },
            'brown': {
                100: '#3E3E3E',
            },
            'white': {
                100: '#F3F9FB',
                102: '#FFE9C0',
            }
          }
      }
  },
  },
  plugins: [],
}

