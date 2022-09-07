/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {'yellow':['#FFE91F'],
              'white':['#ffffff'],
              'blue': ['#60a5fa'],
              'grey': ['#999999'],
              'grey2': ['#4d4d4d']},
      fontFamily: {'sans': ['Mulish', 'Encode Sans', 'Roboto']},

    extend: {},
  },
  plugins: [],
}
