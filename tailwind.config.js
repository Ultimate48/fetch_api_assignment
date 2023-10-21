/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "twitterblue-default":'#1d9bf0',
        "twitterblue-hover":'#1871ca',
        "error":"#e0245e",
      },
    },
  },
  plugins: [],
}