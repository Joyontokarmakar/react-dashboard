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
        primaryColor: '#08d8f1',
        secondaryColor: '#0f172a',
        ashColor: '#e7e7e7',
        deepAshColor: '#263046',
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

