/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors:{
          navblue:'#0891B2',
          footgray:'#1F2937'  
        },
      extend: {
        fontFamily: {
            Poppins: "Poppins",
          },
    
      },
    },
    plugins: [],
  }