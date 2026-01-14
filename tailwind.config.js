/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // pages & layout
    "./src/app/components/**/*.{js,ts,jsx,tsx}" // all components
  ],
  theme: { 
    extend: {
      colors: {
        primary: '#008080 ',
        
      }
  } },
  plugins: [],
}