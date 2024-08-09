/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#047af6',
        secondary: '#fd0006',
        accent: '#f8dd1e',
        dark: '#1a1a1a',
        customGreen: '#83cd29',
        customBlue: '#58c4dc',
        customMongoGreen: '#4db33d',
      },
      fontFamily: {
        cursive: ['"Pacifico"', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
      height: {
        'screen-minus-80': 'calc(100vh - 80px)',
      }
    },
  },
  plugins: [],
}
