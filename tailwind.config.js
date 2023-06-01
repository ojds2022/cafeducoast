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
    },
    borderWidth: {
      '1': '1px',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
    }
  },
  plugins: [],
}

