/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/background.png')",
        blueGradient: "linear-gradient(360deg, #0C0C4F 0%, #3737A4 100%)",
        primaryGradient:
          "linear-gradient(326.16deg, #E87785 17.09%, #2F2FFF 112.36%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ageer: ["ageer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
