/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'bg-primary': '#d9d9d9',
      'bg-secondary': '#fff',
      'bg-field': '#f6f7f8',
      'bg-likes': '#edeff1',
      'button-primary': '#ff4500',
    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"]
    },
    extend: {
      borderRadius: {
        's': '0.0625rem'
      }
    },
  },
  plugins: [],
}