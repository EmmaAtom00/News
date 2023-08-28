/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Sorange: 'hsl(35, 77%, 62%)',
        Sred: 'hsl(5, 85%, 63%)',
        OffWhite: 'hsl(36, 100%, 99%)',
        GrayishBlue: 'hsl(233, 8%, 79%)',
        DarkgrayishBlue: 'hsl(236, 13%, 42%)',
        VeryDarkBlue: 'hsl(240, 100%, 5%)',
      }
    },
  },
  plugins: [],
}

