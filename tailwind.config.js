/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      background: "#1E1F2E",
      "dark-blue": "#13141D",
      accent: "#EAAC86",
      "secondary-text": "#CDD6F4",
      "primary-text": "#F0DCD7",
    },
    extend: {

      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
    },
  },

  plugins: [require("@tailwindcss/container-queries")],
};
