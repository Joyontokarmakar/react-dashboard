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
        lightGrayColor: '#c0c5cb5e',
        darkGrayColor: '#c0c5cb14',
        lightGrayColor2: '#c3cacd66',
        darkGrayColor2: '#c3cacd14',
        lightBlue1: "#D5E6FB",
        darkBlue1: "#062141",
        lightBlue2: "#0060FF",
        darkBlue2: "#1A71FF",
        lightBlue3: "#F2F8FF",
        darkBlue3: "#131313",
        lightBlue4: "#2F80ED",
        lightYellow: "#FFEBCD",
        darkYellow: "#493824",
        lightPurple: "#DBD3FF",
        darkPurple: "#2A2251",
        lightPink: "#FFD2D2",
        darkPink: "#460000",
        lightGreen: "#219653",
        darkGreen: "#26AB5F",
        lightRed: "#EB5757",
        darkRed: "#EE6E6E",
        lightAsh1: "#DDE1E438",
        darkAsh1: "#262C3038",
        lightAsh2: "#F8F8F9",
        ashColor1: "#626D7D",
        ashColor2: "#5E6E78",
        grayColor: "#E0E0E0",
        blackColor: "#1F1F1F"
      },
      boxShadow: {
        header: '0px -9px 43px 0px #1c1c1c',
        form:'0px 0px 12px 0px #1e248154'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

