/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d17",
        panel: "#121524",
        accent: "#7c5cff",
        accent2: "#22d3ee",
      },
    },
  },
  plugins: [],
};
