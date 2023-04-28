/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //customizing own background images
      // backgroundImage: {
      //   'hero-pattern': "url('/images/backimg.jpg')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // }
      height: {
        '100': '27rem',
        '120': '30rem',
      },
      width: {
        '128': '20rem',
      }
      

    },
  },
  plugins: [],
}

