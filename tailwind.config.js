/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'nav': '2.5rem'
      },
      colors: {
        'mycolor': '#edecec'
      },
      backgroundImage: {
        'home-slide1': 'url(./src/assets/HomeImages/Slide1-Clock.png)',
        'card-column': 'url(./src/assets/HomeImages/columnCard-phone.png)',
        'card-column2': 'url(./src/assets/HomeImages/columnCard-headphones.png)'
      },
      lineHeight: {
        'em': '1.15em',
      },
      transitionTimingFunction: {
        'easeInOut': 'cubic-bezier(.42,0,.58,1)',
        'freeze': 'cubic-bezier(.93,.47,.28,.75)'
      },
      transitionDuration: {
        's-02': '.2s'
      }
    },
  },
  plugins: []
}
