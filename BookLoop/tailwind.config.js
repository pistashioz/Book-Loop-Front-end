/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#EBEBEB",
          100: "#E0E0E0",
          200: "#CCCCCC",
          300: "#B8B8B8",
          400: "#A1A1A1",
          500: "#8C8C8C",
          600: "#787878",
          700: "#636363",
          800: "#4F4F4F",
          900: "#3B3B3B",
          950: "#303030"
        },
        green: {
          50: "#E1EFE1",
          100: "#D0E6D0",
          200: "#AFD5AF",
          300: "#91C591",
          400: "#73B573",
          500: "#54A054",
          600: "#458245",
          700: "#336133",
          800: "#234323",
          900: "#122112",
          950: "#0A130A"
        },
        accent: {
          darkblueLilac: "#402C90",
          skyBlueLilac: "#7E86F4",
          lilac: "#AD76F4",
          lightLilac: "#E7D4EF",
          starsYellow: "#FFC267",
          calmYellow: "#EFD887",
          lightYellow: "#F5E7B4"
        }
      },
      fontFamily: {
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1920px',
        // => @media (min-width: 1920px) { ... }

        'desktop': '2560px',
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
