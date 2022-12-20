/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      center:true
    },
    textColor: {
      primary: '#d05959',
      p_color: '#ffffff',
      gray: '#707070',
      button_color: "#FFDAD7",
    },
  },
  plugins: [],
}
