/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D1F34',
        primary: '#252740',
        secondary: '#EE3A57'
      }
    },
  },
  plugins: [],
}

