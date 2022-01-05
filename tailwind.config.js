const colors = require('tailwindcss/colors');

module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",    
  "./components/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        'primary': '#374151',
        'primary-light': '#9CA3AF',
        'secondary': `#115E59`,
        'secondary-light': '#0F766E',

      },
    },
  },
  plugins: [],
}