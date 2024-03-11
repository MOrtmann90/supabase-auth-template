/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#799a55",
        comp: "#f7f7f7",
        accent: "#799a55",
        bgColor: "#232323",
        errorBg: "#ffebe6",
        errorBorder: "#7f1d1d",
        errorText: "#cd5132"
      },
      fontFamily: {
        noto: ["Noto Sans Variable", "sans-serif"],
      },
      backgroundImage: {
        mainImgBg: "url('./src/assets/trees-bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
