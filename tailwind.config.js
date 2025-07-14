/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fascinate: ['Fascinate', 'cursive'],
        oswald: ['Oswald, sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};