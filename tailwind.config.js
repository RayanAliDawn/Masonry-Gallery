/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '600': '600px',
        '1000':'1000px',
        '1400':'1400pc'
      }
    },
    screens: {
      xs: "320px",
      ss: "400px",
      sm: "520px",
      md: "750px",
      lg: "1200px",
      xl: "1700px",
    },
  
  },
  plugins: [],
};