module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#CFDC00',
        'forest': '#008542',
        'lemon': '#FFF100',
        'aqua': '#00AEC7',
        'primary': '#008542',    // Forest green as primary
        'primary-light': '#CFDC00', // Lime as light primary
        'primary-dark': '#006633', // Darker version of Forest
        'secondary': '#00AEC7',  // Aqua as secondary
        'accent': '#FFF100',     // Lemon as accent
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
