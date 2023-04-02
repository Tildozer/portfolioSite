/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "xs" : "400px"
      },
      transformOrigin:{
        "left-center": "left center" 
      },
      animation: {
        fadeIn: "fadeIn 4s 5",
        fadeInOnce: "fadeIn 3s 1",
        slowPing: "ping 3s 3",
      },
      keyframes: {
        fadeIn: {
          "90%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
        
      },
      colors:{
        'onyx': "#303633",
        'cadetGray' : '#7EA2AA',
        'coolGray' : '#888DA7',
        'mountainBatten' : '#9C7A97',
      },
      margin:{
        'vwf': '100vw'
      },
      width: {
        'vwf': '100vw'
      },
      minWidth:{
        'vwf': '100vw'
      },
      height: {
        'vhf': '100vh'
      },
      minHeight: {
        'vhf': '100vh'
      },
    },
  },
  plugins: [],
}
