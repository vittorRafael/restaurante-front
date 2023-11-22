/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        restaurant: "url('/src/Assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
