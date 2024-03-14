/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'home':"url('/src/assets/Rectangle.png')",
        'favorite':"linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%);"
      },
      boxShadow:{
        'drawerShadow':  '2px 0px 90px 0px rgba(97, 0, 194, 0.40);',
        'buttonShadow':  '2px 0px 150px 0px rgba(90, 0, 194, 0.40);',

      },
    },
  },
  plugins: [],
}

