/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E3B76",
        my_yellow: "#FFD747",
        my_grey: "#f6f6f6",
      },
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Lora", "serif"],
    },
  },
  plugins: [],
};
