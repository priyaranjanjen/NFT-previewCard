/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(215, 51%, 70%)", // Soft blue
          cyan: "hsl(178, 100%, 50%)", // Cyan
        },
        neutral: {
          "very-dark-blue-bg": "hsl(217, 54%, 11%)", // Main background
          "very-dark-blue-card": "hsl(216, 50%, 16%)", // Card background
          "very-dark-blue-line": "hsl(215, 32%, 27%)", // Line color
          white: "hsl(0, 0%, 100%)", // White
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        body: ["18px", "1.5"], // Font size for paragraph
      },
      screens: {
        md: "375px",
        desktop: "1440px",
      },
      width: {
        "400px": "400px",
      },
      height: {
        "400px": "400px",
      },
    },
  },
  plugins: [],
};

