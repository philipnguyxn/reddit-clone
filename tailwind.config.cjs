/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,jsx}"],
  important: '#root',
  theme: {
    colors: {
      'primary': '#d9d9d9',
      'secondary': '#fff',
      'field': '#f6f7f8',
      'icons': "#000",
      'likes-section': '#edeff1',
      'button-primary': '#ff4500',
      'black': '#000'
    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"]
    },
    extend: {
      borderRadius: {
        's': '0.0625rem'
      },
      borderColor: {
        'field-hover': "#3b82f6"
      },
      borderWidth: {
        'field': '0.5px'
      },
      height: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
      },
      width: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
        "search-bar": "37.5rem",
      }
    },
  },
  plugins: [],
}