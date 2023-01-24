/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        top: "top",
      },
      transitionDuration: {
        0: "0ms",
        2000: "1000ms",
      },
      colors: {
        "custom-yellow": "#BAA333",
        "custom-green": "#6EF3A5",
        "custom-gray": "#3c3c3c",
        "custom-default-bg": "#2d2e32",
        "custom-dark-bg-1": "#2B2C30",
        "custom-dark-bg-2": "#25262A",
        "custom-dark-bg-3": "#25262A",
        "custom-card-bg": "#2d2e32",
        "custom-white": "#D0DFFF",
      },
      keyframes: {
        delayedspin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        customspin: "delayedspin 6s linear infinite",
      },
      height: {
        128: "30rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      robotomono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
