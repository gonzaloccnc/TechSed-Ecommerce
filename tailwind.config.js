/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontSize:{
        'nav': '2.5rem'
      },
      colors: {
        'mycolor' : '#edecec'
      }
    }
  },
  plugins: []
}
