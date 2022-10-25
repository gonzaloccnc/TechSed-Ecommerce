/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        nav: '2.5rem'
      },
      colors: {
        mycolor: '#edecec',
        'opacity-black': 'rgba(0,0,0,0.6)',
        input: 'rgb(156, 154, 154)',
        'purple-cmm': '#573198',
        'purple-2': 'rgb(117,31,255)',
        error: 'rgb(227, 0, 82)'
      },
      backgroundImage: {
        'home-slide1': "url('../src/assets/HomeImages/Slide1-Clock.png')",
        'card-column': "url('../src/assets/HomeImages/columnCard-phone.png')",
        'card-column2': 'url(../src/assets/HomeImages/columnCard-headphones.png)'
      },
      lineHeight: {
        em: '1.15em'
      },
      transitionTimingFunction: {
        easeInOut: 'cubic-bezier(.42,0,.58,1)',
        soft: 'cubic-bezier(.14,.4,.09,.99)',
        freeze: 'cubic-bezier(.93,.47,.28,.75)'
      },
      transitionDuration: {
        's-02': '.2s'
      },
      gridTemplateColumns: {
        rounded: 'repeat(5, minmax(0, 168px))'
      }
    }
  },
  plugins: []
}
