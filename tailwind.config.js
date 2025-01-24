/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-bg': '#0d0d0d'
      },

      colors: {
        primary: '#9b5de5',
        accent: '#d43535',
        secondary: '#00bbf9',
        'light-gray': '#cccccc',
        highlight: '#d9467e',
        dark: '#0d0d0d',
      },
    },
  },
  plugins: [
  ],
}