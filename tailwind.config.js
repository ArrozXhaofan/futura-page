/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        futura:
          {nav:'#D9D9D9',
          primary:'#B54AA5',
          primary2:'#9C4A9F',
          secondary:'#999999',
          negro: '#2E2D2D'

          },
          
      }
    },
    fontFamily:{
      abel:['Abel'],
      bebas:['Bebas Neue']
    }
  },
  plugins: [],
}