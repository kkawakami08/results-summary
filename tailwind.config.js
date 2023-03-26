/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerLight: "hsl(var(--header-light))",
        headerDark: "hsl(var(--header-dark))",
        circleLight: "hsl(var(--cirlce-light)/1)",
        circleDark: "hsl(var(--circle-dark)/0)",
        paleBlue: "hsl(var(--pale-blue))",
        lightLavender: "hsl(var(--light-lavender))",
        darkGrayBlue: "hsl(var(--dark-gray-blue))",
        lightRed: "hsl(var(--light-red))",
        orangeyYellow: "hsl(var(--orangey-yellow))",
        greenTeal: "hsl(var(--green-teal))",
        cobaltBlue: "hsl(var(--cobalt-blue))",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
