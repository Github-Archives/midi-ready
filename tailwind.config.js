/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        // add installed font-family pkgs here
        ostrich: ['Ostrich Sans', 'sans'], // add to tag className='font-ostrich'
      },
      colors: {
        // add custom colors here from palettes --> https://colorhunt.co/
        'custom-1': '#610C9F',
        'custom-2': '#940B92',
        'custom-3': '#DA0C81',
        'custom-4': '#E95793',
      },
    },
  },
  plugins: [],
}
