export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9D00",
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // Override the default sans font family
      },
    },
  },
  plugins: [],
};
