/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(to bottom right, #BED250, #109C81, #00B5C2)",
      },
      spacing: {
        "section-gap": "clamp(24px, 5vw, 120px)",
        "heading-gap": "clamp(24px, 3vw, 60px)",
        "element-gap": "clamp(16px, 2vw, 32px)",
        "project-gap": "clamp(12px, 1.5vw, 24px)",
      },
    },
  },
  plugins: [],
}
