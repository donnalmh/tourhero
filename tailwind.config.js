/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'flame-orange': '#F7000A',
        'cerulean-blue': '#007B8A'
      }
    },
   
  },

  plugins: [],
}

