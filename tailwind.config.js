/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        imgGelap: "rgba(0, 0, 0, 0.2)",
        gelap: "#2f2f2f",
      },
      boxShadow: {
        "3xl": "4px 5px 5px 5px rgba(0.5, 0.5, 0.5, 0.5)",
      },
      height: {
        hero: "480px",
      },
    },
    fontFamily:{
      primary:["Plus Jakarta Sans", "sans-serif"]
    }
  },
  plugins: [require("flowbite/plugin"),require("tw-elements/dist/plugin.cjs")],
};