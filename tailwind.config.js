/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF7F',
        dark: '	#006400',
        light: '#00FF00',
        lighter: '#ADFF2F',
        hover: '#1E90FF',
        original: '#B0E0E6',
      }
    },
  },
  plugins: [],
}
