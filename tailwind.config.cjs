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
    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"]
    },
    extend: {
      borderRadius: {
        's': '0.0625rem'
      },
      height: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
      },
      width: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
      }
    },
  },
  plugins: [],
}