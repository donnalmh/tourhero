/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'large-device': {
        'min': '992px',
        'max': '2400px'
      },
      

      'sm': {'max': '991px'},
      // => @media (max-width: 991px) { ... }

      // 'xsm': {'max': '399px'},
      // => @media (max-width: 399px) { ... }
    },
    extend: {
      colors: {
        'flame-orange': '#F7000A',
        'cerulean-blue': '#007B8A'
      }
    },
   
  },

  plugins: [],
}

