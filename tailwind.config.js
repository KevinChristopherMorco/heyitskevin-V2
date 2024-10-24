/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 300ms ease-in-out forwards",
        slideOut: "slideOut 300ms ease-in-out forwards",
        iconFadeDown: "iconFadeDown 0.8s ease-in-out forwards",
        fadeUp: "fadeUp 300ms ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        iconFadeDown: {
          "0%": { opacity: 0, top: "0" },
          "100%": { opacity: 1, top: "5px" },
        },
      },
    },
  },
  plugins: [],
};
