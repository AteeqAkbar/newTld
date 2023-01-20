const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        540: "540 px",
      },
      boxShadow: {
        form: "0 15px 35px 0 rgba(60, 66, 87, .8), 0 5px 0 rgba(0,0,0, .12)",
        inputfocus: "0 0 0 2px #F472B6",
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676')",
      },
    },
  },
  plugins: [],
};
