/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1280ab",
        "main-glow": "#9eddf6",
        button: "#bceb21",
        buttondark: "#aad422",
        black: "#0f0e15",
        "bg-blue": "#191c23",
        white: "#eeeeee",
        highlight: "#1CAFC4",
        "highlight-2": "#98E659",
      },
      fontFamily: {
        title: ["Second Space", "sans-serif"],
        main: ["Brass Mono", "sans-serif"],
        bubble: ["Rubik Bubbles", "sans-serif"],
        dirt: ["Rubik Dirt", "sans-serif"],
      },
    },
    animation: {},
  },
  plugins: [],
};
