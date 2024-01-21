/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      keyframes: {
        aboutSpinner: {
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)'
          }
        }
      },
      animation: {
        'aboutSpinner': 'aboutSpinner 8s linear infinite',
      }
    },
  },
  plugins: [],
}

