/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './safelist.txt'
  ],
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
        circleLight: "hsl(var(--cirlce-light))",
        circleDark: "hsl(var(--circle-dark))",
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
  plugins: [
    require('tailwind-safelist-generator')({
      path: './styles/safelist.txt',
      patterns: [
        'text-{colors}',
        'bg-{colors}',
        
  ],
}),
  ]
};
