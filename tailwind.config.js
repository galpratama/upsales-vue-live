/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '50px',
        xl: '100px'
      }
    },
    extend: {
      colors: {
        primary: '#6B77FF',
        secondary: '#ECEDFF',
        light: '#EEF0F7',
        lime: '#9BED34',
        dark: '#141330',
        grey: '#959595',
        danger: '#E01765',
        borderLight: '#ECEBF8',
        lightGrey: '#E8EAEF',
        placeholderText: '#C8C7DB',
        subtleGrey: '#FAFAFA'
      }
    }
  },
  plugins: []
}
