module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Roboto", "system-ui", "sans-serif"],
      },
    },
    colors: {
      "light-pink": "#FAEAEE",
      "soft-pink": "#D77FA1",
      "soft-purple": "#BAABDA",
      "soft-blue": "#D6E5FA",
      "soft-white": "#FFF9F9",
      dark: "#3F252F",
    },
  },
  plugins: [],
};
