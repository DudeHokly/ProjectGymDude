/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      Medium: "576px",
      // => @media (min-width:576px)
      Large: "992px",
      // => @media (min-width:992px)
      ExtraLarge: "1110px",
      // => @media (min-width:1110px)
      CardsScreen: "1300px",
      // => @media (min-width:1300px)
    },
    extend: {
      fontFamily: {
        FontChange: ["Carlito", "serif"],
      },
      backgroundImage: {
        bgContactImgPhone: "url('/src/images/bgContactImgPhone.png')",
        bgContactImgFull: "url('/src/images/GigaChad.png')",
      },
    },
  },
  plugins: [],
});
