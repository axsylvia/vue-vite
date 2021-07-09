module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'b-gray': 'red',
      },
      width: {
        '24px': '28px',
        '750px': '750px',
        '1024px': '1024px'
      },
      height: {
        '24px': '28px',
        '697px': '697px'
      },
      fontSize: {
        komabig: ['10rem']
      },
      fontFamily: {
        komafont: ['Zhi Mang Xing']
      },
      backgroundSize: {
       '24': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
