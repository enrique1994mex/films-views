const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'], //font-lato 
    },
    extend: {
      colors: {
        "special-gray": '#F5F0F0', 
        ...defaultTheme.colors, 
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover']
    }
  },
  plugins: [],
}
