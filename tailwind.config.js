/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'custom-1': '#3D30A2',
        'custom-2': '#B15EFF',
        'custom-3': '#FFA33C',
        'custom-4': '#FFFB73',
      },
    },
  },
  plugins: [],
}
