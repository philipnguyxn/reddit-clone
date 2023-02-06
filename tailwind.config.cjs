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
      'switch': '#ccc',
      'switch-checked': '#2196F3',
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
        'field-hover': "#2196F3",
      },
      borderWidth: {
        'field': '0.5px'
      },
      height: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
        'field': '3.125rem',
        'switch': '2.125rem',
        'switch-knot': '1.625rem',
        'create-post-section': '3.90625rem'
      },
      width: {
        "header-buttons": "3.125rem",
        "buttons": "2rem",
        "search-bar": "55rem",
        'switch': '3.75rem',
        'switch-knot': '1.625rem',
        'field--home-page': '62rem',
        'likes-section': '4.6875rem'
      },
      padding: {
        'switch': '0.1875rem',
        'primary--x': '18rem',
        'primary--t': '1.25rem',
        'likes-section': '1rem',
        'post': '0.78125rem'
      },
      spacing: {
        'swtich-knot': '1.625rem',
        'likes-section': '1.5625rem',
        'content': '1.75rem'
      },
      borderWidth: {
        'divider': '0.5px'
      }
    },
  },
  plugins: [],
}