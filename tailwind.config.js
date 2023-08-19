/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss-animated")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pad: {
          black: "#222831",
          beige: "#F7EFE5",
          lightpurple: "#C3ACD0",
          purple: "#745091",
          darkpurple: "#674188",
          textshadow: "#E7DBDF",
        },
      },
      fontFamily: {
        source: ["var(--font-source)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
};
