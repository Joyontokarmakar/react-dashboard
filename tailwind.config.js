/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPrimaryColor: '#FFFFFF',
        darkPrimaryColor: '#1C1C25',
        lightSecondaryColor: '#F0F8FF',
        darkSecondaryColor: '#12131A',
      },
      boxShadow: {
        header: '0px -9px 43px 0px #1c1c1c',
        form:'0px 0px 12px 0px #1e248154'
      },
      fontFamily: {
        signikaNegative: ['Signika Negative', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

