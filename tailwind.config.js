/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#C2DDB2",
      },
      fontFamily: {
        Nunito: ['Nunito'],
      },
    },
  },
  plugins: [],
};
