/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'DarkPink':'#fb6f92',
      'LightPink':'#ffe5ec',
      'MedPink':'#ffb3c6',
      'DarkMossGreen':'#2f3e46',
      'RaisinBlack':'rgb(22, 25, 37)',
      'Pink100':'#fae0e4',
      'Pink200':'#f7cad0',
      'Pink300':'#f9bec7',
      'Pink400':'#fbb1bd',
      'Pink500':'#ff99ac',
      'Pink600':'#ff85a1',
      'Pink700':'#ff7096',
      'Pink800':'#ff7096',
      'DarkBlueText':'#041325'
    },
    fontFamily:{
      sans:['Montserrat','sans-serif'],
      serif:['']
    },
    fontWeight:{
      light:'400',
      bold:'500',
      bolder:'700'
    },
    extend: {
      screens:{
        Phone:{'max':'576px'}
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.3s ease-in forwards',
      },
      maxWidth:{
        container:'1000px'
      },
      width:{
        med:'100px',
        wrapper:'90%',
        wrapperMed:'100%'
      },
      fontSize:{
        h1Sm:'1.3rem',
        h1Med:'2rem',
        h1Xl:'4.325rem'
      }
    },
  },
  plugins: [],
}

