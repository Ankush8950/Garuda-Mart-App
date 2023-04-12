/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
     screens: {
       sm: '600px',
       md: '800px',
       lg: '1076px',
       xl: '1440px',
     },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
      colors: {
        saltpan: "#F0F2EE",
        red: "#F50963",
        gray: "#F5F5F8",
        lightgray: "#F6F8FA",
        lightblack: "#303030b1"
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
