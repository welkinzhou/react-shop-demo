/** @type {import('tailwindcss').Config} */

const keyframes = {
  fade: {
    "0%": { backgroundColor: "rgba(0, 0, 0, 1)" },
    "100%": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  },
  opacity: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
};

const animation = {
  fade: "fade 2s;",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { keyframes, animation },
  },
  plugins: [],
};
