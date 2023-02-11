/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d17b4d",

          "secondary": "#f248bf",

          "accent": "#143087",

          "neutral": "#261C2C",

          "base-100": "#F4EFF6",

          "info": "#405FED",

          "success": "#7DE8CD",

          "warning": "#F0D75C",

          "error": "#EC776F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
