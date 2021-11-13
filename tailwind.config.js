module.exports = {
  mode:'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      fontFamily:{
        'cultfitFont':['BrandonTextWeb-Medium','Helvetica Neue','Helvetica','Roboto','Arial','sans-serif']
      },
      transform:{
        'rotate-half':" transform: rotateZ(180deg);"
      },
      visibility: ['hover', 'focus']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
