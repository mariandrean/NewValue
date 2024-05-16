/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {width: {
      '145': '145px', 
    },
    height: {
      '35': '35px', 
    },
  },
  },
  plugins: [require('@tailwindcss/typography'),],
  
}
