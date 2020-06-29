module.exports = {
  purge: [],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1062px',
    //   'xl': '1280px',
    // },
    rotate: {
           '-180': '-180deg',
            '-90': '-90deg',
           '-45': '-45deg',
            '0': '0',
            '12': '12deg',
            '45': '45deg',
            '90': '90deg',
           '135': '135deg',
            '180': '180deg',
           '270': '270deg',
          },
    extend: {
      // gradients: theme => ({
      //   'primary-lite': [theme('colors.primary'),theme('colors.primary-lite')],
      //   'primary-lite-h': [theme('colors.primary'),theme('colors.primary')],
      //   'hero-cover': ['#ffffffad','#ffffff00'],
      //   'page-cover': ['#ffffff','#ffffff00']
      // }),
      fontFamily:{
        'roboto' : ['Roboto', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      colors:{
        'nndym-blue': '#00ABDF',
      }
    },
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('./plugins/gradients')
  ],
}
