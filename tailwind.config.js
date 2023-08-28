/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        success: {
          10: "#23A559",
          20: "#259855"
        },
        gray: {
          10: "#313338",
          20: "#1E1F22",
          30: "#2B2D31",
          DEFAULT: "#B5BAC1"
        },
        "purple-light": "#5865F2"
      }
    },
  },
  plugins: [],
}

