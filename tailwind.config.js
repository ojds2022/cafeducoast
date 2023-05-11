/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bone-white": "#e1e1e1",
        "off-black": "#121619",
        "light-grey": "#d3d3d3",
      },
      height: {
        "60vh": "60vh",
        "72.5vh": "72.5vh",
        "90vh": "90vh",
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}

