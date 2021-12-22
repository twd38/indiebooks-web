module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50':  '#f6f9fa',
          '100': '#e5f1fa',
          '200': '#c6dff4',
          '300': '#98bee3',
          '400': '#6697cd',
          '500': '#4e74b7',
          '600': '#3c4e9c',
          '700': '#32427a',
          '800': '#232d55',
          '900': '#141b35',
        },
        secondary: '#FEF9F0',
        black: '#1D1914',
        white: '#fff'
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'heebo': ['Heebo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
