/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: { primary: "#CDD6F4", secondary: "transparent" },
      textColor: { primary: "#1E1F2E", secondary: "#F0DCD7" },
    },
  },
  plugins: [],
};
